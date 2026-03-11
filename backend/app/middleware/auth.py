from uuid import uuid4

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response
from app.auth_context import build_current_user_from_token
from app.config import get_settings
from app.middleware.error_handler import APIError
from app.schemas.common import ErrorResponse

PUBLIC_PATHS = {
    "/docs",
    "/docs/oauth2-redirect",
    "/health",
    "/openapi.json",
    "/ready",
    "/redoc",
}


def _error_response(
    request_id: str,
    *,
    status_code: int,
    error: str,
    message: str,
    details: list[dict[str, str]] | None = None,
) -> JSONResponse:
    payload = ErrorResponse(
        error=error,
        message=message,
        details=details,
        request_id=request_id,
    )
    return JSONResponse(
        status_code=status_code,
        content=payload.model_dump(mode="json"),
        headers={"x-request-id": request_id},
    )


def _invalid_auth_header_response(request_id: str, reason: str) -> JSONResponse:
    return _error_response(
        request_id,
        status_code=400,
        error="invalid_auth_header",
        message="The `Authorization` header is invalid.",
        details=[{"header": "Authorization", "reason": reason}],
    )


def _api_error_response(request_id: str, error: APIError) -> JSONResponse:
    return _error_response(
        request_id,
        status_code=error.status_code,
        error=error.code,
        message=error.message,
        details=error.details,
    )


class AuthContextMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next) -> Response:
        request_id = request.headers.get("x-request-id", str(uuid4()))
        request.state.request_id = request_id
        authorization = request.headers.get("authorization")

        if authorization:
            parts = authorization.split(" ", 1)
            if len(parts) != 2 or parts[0].lower() != "bearer" or not parts[1].strip():
                return _invalid_auth_header_response(request_id, "Expected a Bearer token.")

            try:
                request.state.current_user = build_current_user_from_token(
                    token=parts[1].strip(),
                    settings=get_settings(),
                )
            except APIError as error:
                return _api_error_response(request_id, error)
        elif request.url.path not in PUBLIC_PATHS:
            request.state.current_user = None

        response = await call_next(request)
        response.headers["x-request-id"] = request_id
        return response
