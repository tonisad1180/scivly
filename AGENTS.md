# Repository Guidelines

## Project Structure & Module Organization
Scivly is organized as a multi-surface bootstrap repo. Put the Next.js App Router app in `frontend/` (`app/`, `components/`, `lib/`), the FastAPI service in `backend/` (`app/`, `tests/`), and batch or document-heavy pipelines in `workers/` (`arxiv/`, `digest/`, `common/`). Database assets live in `db/` (`migrations/`, `seeds/`), public-safe runtime defaults in `config/`, public docs in `docs/`, reusable automation in `scripts/`, and thin API-facing agent integrations in `skills/`.

## Build, Test, and Development Commands
This repository is still in the scaffold phase, so there is no root `make`, `npm`, or `pytest` entrypoint yet. Use `rg --files` to inspect the tree, `find backend frontend workers -maxdepth 2 -type f | sort` to confirm file placement, and `git status -sb` before opening a PR. When you add runnable code, expose repeatable commands through `scripts/` and document module-specific setup in the owning workspace `README.md`.

## Coding Style & Naming Conventions
Use Chinese for repository collaboration chat unless the user explicitly asks for another language. Use English for repository artifacts such as code, `README.md`, API docs, public docs, code comments, and commit messages. Python follows 4-space indentation and `snake_case`. TypeScript, JSON, and YAML use 2-space indentation; React components use `PascalCase`. Keep backend business logic out of UI pages, keep the frontend consuming APIs instead of duplicating server logic, and keep PDF/model-heavy processing inside `workers/`, not request handlers.

## Testing Guidelines
There is no repo-wide coverage gate yet. Add tests alongside new modules whenever practical: `backend/tests/test_*.py` for Python and `*.test.ts` or `*.test.tsx` for web code. Prioritize request validation, authentication paths, usage accounting, retrieval helpers, and pipeline-step idempotency. If tests are missing, call that out explicitly in the PR.

## Commit & Pull Request Guidelines
Use `main` as the base branch. Preferred branch names are `feature/...`, `fix/...`, `docs/...`, `chore/...`, `refactor/...`, or `codex/...` for agent work. Commit messages should be short, imperative, and focused, for example `Bootstrap Scivly repository structure` or `Add Star History chart to README`. PRs should stay scoped to one objective and include a summary, affected directories, config or env changes, testing status, screenshots for UI work, and request/response examples for API changes.

## Security & Configuration Tips
Commit only public-safe values to `config/*.yaml`; keep secrets in `.env` or deployment environment variables. Never commit production exports, user data, private prompts, internal evaluation assets, or credentials.
