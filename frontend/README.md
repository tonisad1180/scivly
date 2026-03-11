# Frontend Workspace

This directory is reserved for the Scivly web app.

- framework: Next.js App Router
- primary concerns: landing pages, public library, user workspace, and admin console
- expected subdirectories: `app/`, `components/`, `lib/`
- local commands: `npm install`, `npm run dev`, `npm run build`, `npm run preview`
- current routes: `/`, `/docs`, `/docs/api`, `/admin`
- Vercel: set the project Root Directory to `frontend`
- Vercel config: `frontend/vercel.json`

Auth bootstrap:
- set `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
- protected user routes live under `/workspace/*`
- `frontend/proxy.ts` guards those routes with Clerk
- the client session provider syncs Clerk identity to the backend via `/auth/me` and `/workspaces`

`npm run start` runs the production Next.js server on port `3100`.
`npm run preview` rebuilds the app and starts that production server locally.

Do not move backend business logic here. The frontend should consume backend APIs instead of becoming a second application core.
