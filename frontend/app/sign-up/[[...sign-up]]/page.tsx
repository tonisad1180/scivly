import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] px-4 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-4rem] h-72 w-72 rounded-full bg-[var(--primary)]/12 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6%] h-96 w-96 rounded-full bg-emerald-500/12 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full gap-10 rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/88 p-6 shadow-[var(--shadow-lg)] backdrop-blur-xl md:grid-cols-[minmax(0,1fr)_420px] md:p-10">
          <section className="flex flex-col justify-between rounded-[28px] border border-[var(--border)] bg-[linear-gradient(145deg,rgba(252,250,246,0.98),rgba(247,244,236,0.9))] p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--foreground-subtle)]">
                New Workspace
              </p>
              <h1 className="mt-4 font-[family:var(--font-display)] text-4xl font-semibold tracking-tight">
                Create an account and get a workspace immediately
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--foreground-muted)]">
                The first authenticated call to the FastAPI backend materializes a matching
                Scivly workspace using your Clerk identity. No mock headers, no stub user.
              </p>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-[var(--foreground)]">
              <div className="rounded-[20px] border border-[var(--border)] bg-white/80 px-4 py-3">
                Your session is a real JWT, verified by the backend before any workspace data returns.
              </div>
              <div className="rounded-[20px] border border-[var(--border)] bg-white/80 px-4 py-3">
                Interests, digests, chat sessions, webhooks, API keys, and usage are scoped to that workspace.
              </div>
              <div className="rounded-[20px] border border-[var(--border)] bg-white/80 px-4 py-3">
                When auth is missing, workspace endpoints now fail closed with `401`.
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center rounded-[28px] bg-[var(--background)]/90 p-2">
            <SignUp
              appearance={{
                elements: {
                  card: "shadow-none border border-[var(--border)] rounded-[28px]",
                  footerActionLink: "text-[var(--primary)] hover:text-[var(--primary)]",
                },
              }}
              fallbackRedirectUrl="/workspace/feed"
              signInUrl="/sign-in"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
