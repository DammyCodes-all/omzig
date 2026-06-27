export default function Home() {
  return (
    <div className="flex flex-1">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col gap-6 border-r border-border bg-sidebar p-6 lg:flex">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">L</div>
          <span className="font-heading text-lg font-semibold">LectureLift</span>
        </div>
        <nav className="flex flex-col gap-1">
          <span className="flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
            <span>Dashboard</span>
          </span>
          <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent">
            <span>My Lectures</span>
          </span>
          <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent">
            <span>Quiz Me</span>
          </span>
          <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent">
            <span>Analytics</span>
          </span>
        </nav>
        <div className="mt-auto flex items-center gap-3 rounded-lg bg-sidebar-accent px-3 py-3">
          <div className="size-8 rounded-full bg-primary/20" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-sidebar-foreground">Student</span>
            <span className="text-xs text-sidebar-foreground/60">user@university.edu</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-border bg-card px-6 py-3">
          <h2 className="font-heading text-lg font-semibold">Dashboard</h2>
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Gold Plan</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex flex-1 flex-col gap-8 overflow-y-auto p-6">
          {/* Hero */}
          <section className="flex flex-col gap-4">
            <h1 className="font-heading text-3xl font-semibold tracking-tight">
              Welcome back, Scholar
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Pick up where you left off or start a new study session. Your last three lectures are ready for review.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Quiz Me
              </button>
              <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent">
                Browse Lectures
              </button>
              <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent">
                Upload PDF
              </button>
            </div>
          </section>

          {/* Cards grid */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-lg">📖</span>
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold">Linear Algebra</h3>
              <p className="mt-1 text-sm text-muted-foreground">Last viewed 2h ago &middot; 3 chapters</p>
              <div className="mt-4 h-2 rounded-full bg-muted">
                <div className="h-2 w-3/5 rounded-full bg-primary" />
              </div>
              <span className="mt-2 block text-xs text-muted-foreground">60% complete</span>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-confusion">
                <span className="text-lg">🧬</span>
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold">Molecular Biology</h3>
              <p className="mt-1 text-sm text-muted-foreground">Confusion detected &middot; 2 flagged sections</p>
              <div className="mt-4 h-2 rounded-full bg-muted">
                <div className="h-2 w-1/4 rounded-full bg-primary" />
              </div>
              <span className="mt-2 block text-xs text-muted-foreground">25% complete</span>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-lg">🏛️</span>
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold">Ancient Philosophy</h3>
              <p className="mt-1 text-sm text-muted-foreground">Last viewed yesterday &middot; 5 chapters</p>
              <div className="mt-4 h-2 rounded-full bg-muted">
                <div className="h-2 w-4/5 rounded-full bg-primary" />
              </div>
              <span className="mt-2 block text-xs text-muted-foreground">80% complete</span>
            </div>
          </section>

          {/* Confusion highlight example */}
          <section className="rounded-xl border border-confusion-border bg-confusion p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sm">💡</span>
              <div>
                <h4 className="font-heading text-sm font-semibold">Confusion Detected</h4>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                  The section on <mark className="rounded px-1 py-0.5 text-foreground">Krebs Cycle regulation</mark> seems unclear. 
                  Would you like a simplified explanation or a quiz on this topic?
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    Generate Explanation
                  </button>
                  <button className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-card px-3 text-xs font-medium text-foreground transition-colors hover:bg-accent">
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Typography showcase */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-xl font-semibold">Typography</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Sora headings &middot; Source Sans 3 body &middot; JetBrains Mono code
            </p>
            <div className="mt-6 space-y-3">
              <h1 className="font-heading text-3xl font-semibold">Heading 1 — Sora (36px)</h1>
              <h2 className="font-heading text-2xl font-semibold">Heading 2 — Sora (28px)</h2>
              <h3 className="font-heading text-xl font-semibold">Heading 3 — Sora (22px)</h3>
              <h4 className="font-heading text-lg font-semibold">Heading 4 — Sora (18px)</h4>
              <p className="text-base leading-relaxed">
                Body text — Source Sans 3 (16px). This is what lecture notes, quiz questions, and explanations will read like. Warm paper background reduces eye strain during long study sessions.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Small / muted text (14px) — for timestamps, metadata, and secondary information.
              </p>
              <code className="block rounded-md bg-muted px-4 py-3 font-mono text-sm">
                {`const gold = oklch(0.63 0.2 72); // JetBrains Mono for code`}
              </code>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
