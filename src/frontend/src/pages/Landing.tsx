import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Command,
  FolderOpen,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Moon,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#cta" },
];

const FEATURES = [
  {
    icon: Brain,
    color: "bg-primary/10 text-primary",
    title: "AI-Powered Planning",
    description:
      "Generate strategic roadmaps with AI in seconds. Turn a startup idea into a full execution plan.",
  },
  {
    icon: LayoutDashboard,
    color: "bg-info/10 text-info",
    title: "Execution Control",
    description:
      "Real-time task board with bottleneck detection. Keep every sprint on track and every blocker visible.",
  },
  {
    icon: FolderOpen,
    color: "bg-success/10 text-success",
    title: "Project Tracking",
    description:
      "Milestones, progress bars, and team assignments. Know exactly where each project stands at a glance.",
  },
  {
    icon: Users,
    color: "bg-warning/10 text-warning",
    title: "Team Management",
    description:
      "Skills tracking, capacity planning, and collaboration. Build high-performing teams with full visibility.",
  },
  {
    icon: MessageSquare,
    color: "bg-destructive/10 text-destructive",
    title: "Smart Updates",
    description:
      "Structured update feeds by type and team member. Stay aligned without drowning in notifications.",
  },
  {
    icon: Moon,
    color: "bg-primary/15 text-primary",
    title: "Dark Mode First",
    description:
      "Premium interface engineered for long work sessions — gorgeous in both light and dark modes.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Apex replaced four different tools for us. Our sprints are tighter and the team is finally aligned.",
    name: "Sarah Chen",
    role: "CTO at Axiom Labs",
    initials: "SC",
    color: "bg-primary",
  },
  {
    quote:
      "The AI planner alone is worth it. We generate a full roadmap in the time it used to take us to write an agenda.",
    name: "Marcus Webb",
    role: "Product Lead at Meridian",
    initials: "MW",
    color: "bg-info",
  },
  {
    quote:
      "Finally a tool that doesn't feel like it was designed in 2015. The execution board is genuinely beautiful.",
    name: "Priya Nair",
    role: "Engineering Manager at Helios",
    initials: "PN",
    color: "bg-success",
  },
];

const STATS = [
  { value: "500+", label: "Teams shipped" },
  { value: "10,000+", label: "Tasks completed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.9/5", label: "Avg. rating" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
        <Command className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
        Apex
      </span>
    </div>
  );
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
    >
      {label}
    </a>
  );
}

function FeatureCard({
  icon: Icon,
  color,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-2">
        <h3 className="font-display text-[15px] font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  color,
}: {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-border-strong sm:p-6">
      <div className="flex gap-0.5">
        {["s1", "s2", "s3", "s4", "s5"].map((id) => (
          <Star
            key={id}
            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${color} text-xs font-bold text-primary-foreground`}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {name}
          </p>
          <p className="truncate text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Mock dashboard graphic ───────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <div className="relative mx-auto mt-14 max-w-4xl sm:mt-20">
      {/* ambient glow layers */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-12 h-48 bg-primary/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-4 bottom-0 h-24 bg-primary/12 blur-2xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-primary/10 ring-1 ring-border/20">
        {/* titlebar */}
        <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/60" />
            <span className="h-3 w-3 rounded-full bg-warning/60" />
            <span className="h-3 w-3 rounded-full bg-success/60" />
          </div>
          <div className="mx-auto flex h-5 w-40 items-center justify-center rounded-md bg-muted/60 text-[10px] text-muted-foreground sm:w-52">
            apex.app/dashboard
          </div>
        </div>
        {/* body */}
        <div className="flex h-[260px] overflow-hidden sm:h-[340px]">
          {/* sidebar */}
          <div className="hidden w-40 shrink-0 border-r border-border bg-sidebar p-3 sm:block lg:w-48">
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-muted/50 px-2.5 py-2">
              <div className="h-5 w-5 rounded bg-primary/20" />
              <div className="h-2.5 w-16 rounded bg-muted-foreground/30 lg:w-20" />
            </div>
            {[
              "Dashboard",
              "AI Planner",
              "Execution",
              "Projects",
              "Tasks",
              "Team",
            ].map((item) => (
              <div
                key={item}
                className={`mb-1 flex items-center gap-2 rounded-md px-2.5 py-2 ${item === "Dashboard" ? "bg-primary/10" : ""}`}
              >
                <div
                  className={`h-1.5 w-1.5 rounded-full ${item === "Dashboard" ? "bg-primary" : "bg-muted-foreground/30"}`}
                />
                <div
                  className={`h-2 rounded ${item === "Dashboard" ? "w-16 bg-primary/60" : "w-12 bg-muted-foreground/20"}`}
                />
              </div>
            ))}
          </div>
          {/* main */}
          <div className="flex-1 overflow-hidden bg-background p-3 sm:p-4">
            {/* kpi row */}
            <div className="mb-3 grid grid-cols-2 gap-2 sm:mb-4 sm:grid-cols-4">
              {[
                { label: "Growth Score", val: "94", color: "text-success" },
                { label: "Active Tasks", val: "38", color: "text-info" },
                { label: "Team Load", val: "72%", color: "text-warning" },
                { label: "Velocity", val: "+12%", color: "text-primary" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border border-border bg-card p-2"
                >
                  <p className="mb-1 text-[8px] text-muted-foreground sm:text-[9px]">
                    {kpi.label}
                  </p>
                  <p className={`text-xs font-bold sm:text-sm ${kpi.color}`}>
                    {kpi.val}
                  </p>
                </div>
              ))}
            </div>
            {/* chart placeholder */}
            <div className="mb-3 h-24 overflow-hidden rounded-lg border border-border bg-card p-3 sm:mb-4 sm:h-28">
              <div className="mb-2 h-2 w-20 rounded bg-muted-foreground/20" />
              <div className="flex h-14 items-end gap-1 sm:h-16">
                {[
                  { h: 40, id: "b1" },
                  { h: 65, id: "b2" },
                  { h: 50, id: "b3" },
                  { h: 80, id: "b4" },
                  { h: 55, id: "b5" },
                  { h: 90, id: "b6" },
                  { h: 70, id: "b7" },
                  { h: 85, id: "b8" },
                  { h: 60, id: "b9" },
                  { h: 95, id: "b10" },
                  { h: 75, id: "b11" },
                  { h: 100, id: "b12" },
                ].map(({ h, id }) => (
                  <div
                    key={id}
                    className="flex-1 rounded-t bg-primary/40"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            {/* list rows */}
            <div className="space-y-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2"
                >
                  <div className="h-4 w-4 shrink-0 rounded-full bg-primary/20" />
                  <div className="h-2 flex-1 rounded bg-muted-foreground/20" />
                  <div className="h-4 w-10 shrink-0 rounded-full bg-emerald-500/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Landing() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goToAuth = () => navigate({ to: "/auth" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/80 bg-card/90 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" aria-label="Apex home">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((l) => (
              <NavLink key={l.label} href={l.href} label={l.label} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={goToAuth}
              data-ocid="nav-sign-in"
              className="transition-smooth"
            >
              Sign In
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={goToAuth}
              data-ocid="nav-get-started"
              className="btn-lift gap-1.5"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
                data-ocid="nav-mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 pt-6">
                <Logo />
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 border-t border-border pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setMobileOpen(false);
                      goToAuth();
                    }}
                    data-ocid="nav-mobile-sign-in"
                  >
                    Sign In
                  </Button>
                  <Button
                    type="button"
                    className="btn-lift"
                    onClick={() => {
                      setMobileOpen(false);
                      goToAuth();
                    }}
                    data-ocid="nav-mobile-get-started"
                  >
                    Get Started Free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 pb-0 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          {/* Ambient blobs */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <div className="absolute -left-1/3 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/6 blur-[100px]" />
            <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[100px]" />
            <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/4 blur-[80px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex animate-[fade-in-up_0.5s_ease-out]">
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                data-ocid="hero-badge"
              >
                <Zap className="h-3 w-3" />
                Now Available — AI Planner + Execution Suite
              </Badge>
            </div>

            {/* H1 */}
            <h1 className="font-display text-h1 font-bold leading-[1.08] tracking-tight text-foreground animate-[fade-in-up_0.5s_ease-out_0.05s_both]">
              The Apex Workspace
              <br />
              <span className="bg-gradient-to-r from-primary via-violet-400 to-blue-400 bg-clip-text text-transparent">
                for Modern Teams
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl animate-[fade-in-up_0.5s_ease-out_0.1s_both]">
              Manage projects, track execution, plan with AI, and keep your team
              aligned — all in one premium workspace built for teams that ship.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center animate-[fade-in-up_0.5s_ease-out_0.15s_both]">
              <Button
                type="button"
                size="lg"
                onClick={goToAuth}
                data-ocid="hero-cta-primary"
                className="btn-lift h-11 w-full gap-2 px-7 text-[15px] font-semibold sm:w-auto"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={goToAuth}
                data-ocid="hero-cta-demo"
                className="transition-smooth h-11 w-full px-7 text-[15px] font-semibold hover:bg-muted/50 sm:w-auto"
              >
                View Demo
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground sm:gap-5 sm:text-sm animate-[fade-in-up_0.5s_ease-out_0.2s_both]">
              {[
                "No credit card required",
                "Free 14-day trial",
                "Cancel anytime",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <DashboardMockup />
        </section>

        {/* ── Stats ────────────────────────────────────────────────────────── */}
        <section className="mt-12 border-y border-border bg-muted/25 px-4 py-10 sm:mt-16 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-border">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center ${i > 0 ? "md:pl-6" : ""}`}
                >
                  <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────────────── */}
        <section
          id="features"
          className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center sm:mb-14">
              <p className="text-overline mb-3 text-primary">Platform</p>
              <h2 className="font-display text-h2 font-bold tracking-tight text-foreground">
                Everything you need to ship faster
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                One workspace that replaces the fragmented stack of tools
                slowing your team down.
              </p>
            </div>

            <div
              className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
              data-ocid="features-grid"
            >
              {FEATURES.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────────── */}
        <section
          id="testimonials"
          className="border-t border-border bg-muted/20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center sm:mb-14">
              <p className="text-overline mb-3 text-primary">Social Proof</p>
              <h2 className="font-display text-h2 font-bold tracking-tight text-foreground">
                Trusted by teams that ship
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Joined by hundreds of engineering and product teams worldwide.
              </p>
            </div>

            <div
              className="grid gap-4 sm:gap-5 md:grid-cols-3"
              data-ocid="testimonials-grid"
            >
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────────── */}
        <section
          id="cta"
          className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        >
          {/* Gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/90 via-violet-600/80 to-blue-600/80"
            aria-hidden
          />
          {/* Radial highlight */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.07),_transparent_55%)]"
            aria-hidden
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-h2 font-bold tracking-tight text-white">
              Ready to take control?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Join 500+ teams using Apex to plan, execute, and ship with
              confidence. Start free — no credit card needed.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                type="button"
                size="lg"
                onClick={goToAuth}
                data-ocid="cta-start-free"
                className="btn-lift h-11 w-full gap-2 bg-background px-7 text-[15px] font-semibold text-foreground hover:bg-background/90 sm:w-auto"
              >
                Start for Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                onClick={goToAuth}
                data-ocid="cta-sign-in"
                className="h-11 w-full border border-white/20 px-7 text-[15px] font-semibold text-white hover:bg-white/10 sm:w-auto"
              >
                Sign In
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-card px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <Logo />
          <nav
            className="flex items-center gap-5"
            aria-label="Footer navigation"
          >
            {["Privacy", "Terms", "Support"].map((label) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground sm:text-sm">
            &copy; {new Date().getFullYear()}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              className="transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
