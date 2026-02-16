import { ClipboardCheck, Zap, ShieldAlert, Users } from "lucide-react";

const actions = [
  { icon: ClipboardCheck, label: "Emergency Checklist", href: "#" },
  { icon: Zap, label: "Power Outage Guide", href: "#" },
  { icon: ShieldAlert, label: "Shelter & Storm Surge Tips", href: "#" },
  { icon: Users, label: "Community Contacts", href: "#" },
];

const Index = () => (
  <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-10">
    <div className="w-full max-w-md space-y-8">

      {/* Header */}
      <header className="text-center space-y-3">
        {/* Inline SVG icon — hurricane/radar motif */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30"
             style={{ boxShadow: "var(--shadow-glow)" }}>
          <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9 text-primary" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="24" r="4" />
            <path d="M24 8a16 16 0 0 1 11.3 4.7" />
            <path d="M35.3 12.7A16 16 0 0 1 40 24" />
            <path d="M40 24a16 16 0 0 1-4.7 11.3" />
            <path d="M35.3 35.3A16 16 0 0 1 24 40" />
            <path d="M24 40a16 16 0 0 1-11.3-4.7" />
            <path d="M12.7 35.3A16 16 0 0 1 8 24" />
          </svg>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            CARIPREP
          </h1>
          <p className="text-sm text-muted-foreground">
            Offline Hurricane Resource Hub
          </p>
        </div>

        <span className="inline-block rounded-full bg-primary/15 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-primary ring-1 ring-primary/25">
          Demo
        </span>
      </header>

      {/* Action cards */}
      <nav className="grid gap-3">
        {actions.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4
                       transition-all duration-200
                       hover:border-primary/40 hover:bg-card/80
                       active:scale-[0.98]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-base font-medium text-card-foreground">
              {label}
            </span>
            <svg className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer className="pt-2 text-center text-xs text-muted-foreground">
        Works without internet · Built for Caribbean islands
      </footer>
    </div>
  </div>
);

export default Index;
