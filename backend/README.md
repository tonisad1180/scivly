# Backend Workspace

This directory is reserved for the Scivly API service.

- framework: FastAPI
- primary concerns: auth context, paper APIs, digest APIs, usage tracking, API keys, and billing hooks
- expected subdirectories: `app/`, `tests/`

Auth bootstrap:
- set `CLERK_JWT_KEY` for networkless Clerk JWT verification, or `SCIVLY_AUTH_JWT_SECRET` for local test tokens
- `SCIVLY_AUTH_AUTHORIZED_PARTIES` should include the frontend origin, e.g. `http://localhost:3100`
- the auth middleware verifies Bearer tokens and auto-materializes a workspace for first-time authenticated users

## Local database workflow

From the repository root:

```bash
docker compose up -d db redis
./scripts/db.sh bootstrap
cd backend && pytest
```

The backend reads `DATABASE_URL` (and also accepts `SCIVLY_DATABASE_URL`) with a default of
`postgresql://localhost:5432/scivly`.
When the URL omits a username, the app assumes the local `postgres` role for development.

Keep PDF-heavy and model-heavy processing out of request handlers. Pipeline execution belongs in `workers/`.
