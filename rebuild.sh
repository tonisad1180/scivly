#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FAST_MODE="false"
NO_START="false"
FRONTEND_PORT="3100"
BACKEND_PORT="8100"
BACKEND_VENV_DIR="${ROOT_DIR}/backend/.venv"
BACKEND_PYTHON=""

print_help() {
  cat <<'EOF'
Usage: ./rebuild.sh [--fast] [--no-start]

Options:
  --fast, -f      Skip dependency reinstall and perform a lighter cleanup
  --no-start      Clean and reinstall without starting development servers
  --help, -h      Show this help
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --fast|-f)
      FAST_MODE="true"
      shift
      ;;
    --no-start)
      NO_START="true"
      shift
      ;;
    --help|-h)
      print_help
      exit 0
      ;;
    *)
      echo "[rebuild] Unknown option: $1" >&2
      print_help
      exit 1
      ;;
  esac
done

log() {
  printf '[rebuild] %s\n' "$1"
}

resolve_backend_python() {
  if [[ -n "${BACKEND_PYTHON}" && -x "${BACKEND_PYTHON}" ]]; then
    return 0
  fi

  if [[ -x "${BACKEND_VENV_DIR}/bin/python" ]]; then
    BACKEND_PYTHON="${BACKEND_VENV_DIR}/bin/python"
    return 0
  fi

  if command -v python3 >/dev/null 2>&1; then
    BACKEND_PYTHON="$(python3 -c 'import os, sys; print(os.path.realpath(sys.executable))')"
    return 0
  fi

  return 1
}

ensure_backend_venv() {
  if [[ -x "${BACKEND_VENV_DIR}/bin/python" ]]; then
    return 0
  fi

  if ! command -v python3 >/dev/null 2>&1; then
    return 1
  fi

  log "Creating backend virtual environment at ${BACKEND_VENV_DIR}."
  python3 -m venv "${BACKEND_VENV_DIR}"
}

kill_port() {
  local port="$1"

  if ! command -v lsof >/dev/null 2>&1; then
    log "lsof is not available, skipping port ${port} cleanup."
    return 0
  fi

  local pids
  pids="$(lsof -tiTCP:"${port}" -sTCP:LISTEN 2>/dev/null || true)"

  if [[ -z "${pids}" ]]; then
    log "Port ${port} is already free."
    return 0
  fi

  log "Releasing port ${port} (${pids})."
  for pid in ${pids}; do
    kill "${pid}" 2>/dev/null || true
  done

  sleep 1

  for pid in ${pids}; do
    if kill -0 "${pid}" 2>/dev/null; then
      kill -9 "${pid}" 2>/dev/null || true
    fi
  done
}

clean_frontend() {
  log "Removing frontend caches and generated files."
  rm -rf "${ROOT_DIR}/frontend/.next"
  rm -rf "${ROOT_DIR}/frontend/out"
  rm -rf "${ROOT_DIR}/frontend/dist"
  rm -rf "${ROOT_DIR}/frontend/coverage"

  if [[ "${FAST_MODE}" == "false" ]]; then
    rm -rf "${ROOT_DIR}/frontend/node_modules"
  fi
}

clean_backend() {
  log "Removing backend caches and generated files."
  rm -rf "${ROOT_DIR}/backend/.pytest_cache"
  rm -rf "${ROOT_DIR}/backend/.mypy_cache"
  rm -rf "${ROOT_DIR}/backend/.ruff_cache"
  rm -rf "${ROOT_DIR}/backend/build"
  rm -rf "${ROOT_DIR}/backend/dist"
  rm -rf "${ROOT_DIR}/backend/htmlcov"
  rm -f "${ROOT_DIR}/backend/.coverage"
  rm -f "${ROOT_DIR}/backend/coverage.xml"

  if [[ -d "${ROOT_DIR}/backend" ]]; then
    find "${ROOT_DIR}/backend" -type d -name "__pycache__" -prune -exec rm -rf {} +
    find "${ROOT_DIR}/backend" -type f \( -name "*.pyc" -o -name "*.pyo" \) -delete
  fi

  if [[ "${FAST_MODE}" == "false" ]]; then
    rm -rf "${ROOT_DIR}/backend/node_modules"
  fi
}

install_frontend() {
  if [[ ! -f "${ROOT_DIR}/frontend/package.json" ]]; then
    log "Frontend package.json not found, skipping frontend install."
    return 0
  fi

  log "Installing frontend dependencies."
  (cd "${ROOT_DIR}/frontend" && npm install)
}

install_backend() {
  if [[ -f "${ROOT_DIR}/backend/package.json" ]]; then
    log "Installing backend Node dependencies."
    (cd "${ROOT_DIR}/backend" && npm install)
    return 0
  fi

  if [[ -f "${ROOT_DIR}/backend/requirements.txt" ]]; then
    if ! command -v python3 >/dev/null 2>&1; then
      log "Python 3 is not available, skipping backend dependency install."
      return 0
    fi

    if ensure_backend_venv; then
      if ! resolve_backend_python; then
        log "Python 3 is not available, skipping backend dependency install."
        return 0
      fi
      log "Installing backend Python dependencies in ${BACKEND_VENV_DIR}."
    else
      BACKEND_PYTHON=""
      if ! resolve_backend_python; then
        log "Python 3 is not available, skipping backend dependency install."
        return 0
      fi
      log "Falling back to ${BACKEND_PYTHON} because the backend virtual environment could not be created."
      log "Installing backend Python dependencies with the fallback Python interpreter."
    fi

    (cd "${ROOT_DIR}/backend" && "${BACKEND_PYTHON}" -m pip install -r requirements.txt)
    return 0
  fi

  log "No backend dependency manifest found, skipping backend install."
}

echo "=========================================="
if [[ "${FAST_MODE}" == "true" ]]; then
  echo "  Scivly - Fast Rebuild"
else
  echo "  Scivly - Clean Rebuild"
fi
echo "=========================================="

kill_port "${FRONTEND_PORT}"
kill_port "${BACKEND_PORT}"

clean_frontend
clean_backend

if [[ "${FAST_MODE}" == "false" ]]; then
  install_frontend
  install_backend
else
  log "Skipping dependency reinstall in fast mode."
fi

if [[ "${NO_START}" == "true" ]]; then
  log "Rebuild completed without starting development servers."
  exit 0
fi

log "Starting development environment."
export SCIVLY_FRONTEND_PORT="${FRONTEND_PORT}"
export SCIVLY_BACKEND_PORT="${BACKEND_PORT}"
if resolve_backend_python; then
  export SCIVLY_BACKEND_PYTHON="${BACKEND_PYTHON}"
fi
exec "${ROOT_DIR}/scripts/dev.sh"
