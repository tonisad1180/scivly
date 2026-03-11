import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] px-4 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-6rem] h-72 w-72 rounded-full bg-[var(--primary)]/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8%] h-80 w-80 rounded-full bg-[var(--accent)]/12 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full gap-10 rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/88 p-6 shadow-[var(--shadow-lg)] backdrop-blur-xl md:grid-cols-[minmax(0,1fr)_420px] md:p-10">
          <section className="flex flex-col justify-between rounded-[28px] bg-[linear-gradient(160deg,rgba(15,23,42,0.98),rgba(30,41,59,0.92))] p-8 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                Scivly Workspace
              </p>
              <h1 className="mt-4 font-[family:var(--font-display)] text-4xl font-semibold tracking-tight">
                Sign in to your paper intelligence workspace
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                Clerk manages identity and session rotation. Scivly uses that session token to
                scope papers, interests, digests, and follow-up questions to your workspace.
              </p>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-slate-200">
              <div className="rounded-[20px] bg-white/6 px-4 py-3">
                Workspace bootstrap happens on the first authenticated backend request.
              </div>
              <div className="rounded-[20px] bg-white/6 px-4 py-3">
                `/workspace/*` routes are protected at the edge before React renders.
              </div>
              <div className="rounded-[20px] bg-white/6 px-4 py-3">
                API access is scoped by the same Clerk session token your browser already holds.
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center rounded-[28px] bg-[var(--background)]/90 p-2">
            <SignIn
              appearance={{
                elements: {
                  card: "shadow-none border border-[var(--border)] rounded-[28px]",
                  footerActionLink: "text-[var(--primary)] hover:text-[var(--primary)]",
                },
              }}
              fallbackRedirectUrl="/workspace/feed"
              signUpUrl="/sign-up"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
