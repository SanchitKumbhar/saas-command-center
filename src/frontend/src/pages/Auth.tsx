import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  BarChart3,
  Brain,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useUserStore } from "../stores/userStore";

// ─── Types ────────────────────────────────────────────────────────────────────
type AuthMode = "login" | "register";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const BRAND_FEATURES = [
  {
    icon: Brain,
    title: "AI-Powered Planning",
    desc: "Generate full roadmaps from a single prompt in seconds.",
  },
  {
    icon: BarChart3,
    title: "Execution Control",
    desc: "Real-time bottleneck detection and team velocity insights.",
  },
  {
    icon: CheckCircle2,
    title: "Project Tracking",
    desc: "Milestones, progress, and assignments in one unified view.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function validate(
  mode: AuthMode,
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
): FormErrors {
  const errors: FormErrors = {};
  if (mode === "register" && !name.trim()) {
    errors.name = "Full name is required";
  }
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!email.includes("@")) {
    errors.email = "Enter a valid email address";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  if (mode === "register") {
    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
  }
  return errors;
}

// ─── FormField component ──────────────────────────────────────────────────────
interface FieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  error?: string;
  icon: React.ReactNode;
  rightAddon?: React.ReactNode;
  autoComplete?: string;
}

function FormField({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  icon,
  rightAddon,
  autoComplete,
}: FieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          data-ocid={`auth-input-${id}`}
          className={`h-10 pl-10 ${rightAddon ? "pr-10" : ""} text-sm transition-smooth ${
            error
              ? "border-destructive focus-visible:ring-destructive/30"
              : "focus-visible:ring-ring/30"
          }`}
        />
        {rightAddon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightAddon}
          </span>
        )}
      </div>
      {error && (
        <p
          className="flex items-center gap-1.5 text-xs text-destructive"
          role="alert"
        >
          <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-destructive" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Auth() {
  const navigate = useNavigate();
  const setUser = useUserStore((s) => s.setUser);

  const [mode, setMode] = useState<AuthMode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  function switchMode(next: AuthMode) {
    setMode(next);
    setErrors({});
    setPassword("");
    setConfirmPassword("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(mode, email, password, confirmPassword, name);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        id: "user-auth",
        name: mode === "register" ? name : "Jordan Ellis",
        email,
        role: "owner",
        jobTitle: "Engineering Lead",
        department: "Engineering",
      });
      setIsLoading(false);
      navigate({ to: "/app/dashboard" });
    }, 1500);
  }

  const eyeTogglePassword = (
    <button
      type="button"
      onClick={() => setShowPassword((v) => !v)}
      className="text-muted-foreground transition-smooth hover:text-foreground"
      aria-label={showPassword ? "Hide password" : "Show password"}
      data-ocid="auth-toggle-password"
    >
      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
    </button>
  );

  const eyeToggleConfirm = (
    <button
      type="button"
      onClick={() => setShowConfirmPassword((v) => !v)}
      className="text-muted-foreground transition-smooth hover:text-foreground"
      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
      data-ocid="auth-toggle-confirm-password"
    >
      {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
    </button>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* ── Left branding panel (lg+ only) ───────────────────────────────── */}
      <aside className="relative hidden lg:flex lg:w-[44%] xl:w-[42%] flex-col overflow-hidden bg-primary">
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        {/* Bottom corner glow */}
        <div
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, white, transparent 70%)",
          }}
          aria-hidden
        />
        {/* Top corner glow */}
        <div
          className="absolute -left-12 -top-12 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, white, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col p-10 xl:p-12">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="group flex w-fit items-center gap-2.5"
            data-ocid="auth-logo-home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 transition-smooth group-hover:bg-primary-foreground/20">
              <Zap size={18} className="text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold tracking-tight text-primary-foreground">
              Apex
            </span>
          </button>

          {/* Main copy */}
          <div className="mt-auto flex flex-1 flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Command Center
            </p>
            <h1 className="mb-4 font-display text-2xl font-bold leading-tight tracking-tight text-primary-foreground xl:text-[1.875rem]">
              The command center
              <br />
              for modern teams
            </h1>
            <p className="mb-10 max-w-xs text-sm leading-relaxed text-primary-foreground/65 xl:mb-12">
              Orchestrate projects, track velocity, and ship faster — all in one
              intelligent workspace.
            </p>

            {/* Feature list */}
            <ul className="space-y-4">
              {BRAND_FEATURES.map((f) => (
                <li key={f.title} className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary-foreground/15 bg-primary-foreground/10">
                    <f.icon size={14} className="text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-primary-foreground">
                      {f.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-primary-foreground/60">
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social proof */}
          <div className="border-t border-primary-foreground/15 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["SC", "MW", "PN"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground/20 text-[9px] font-bold text-primary-foreground"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-primary-foreground/50">
                Trusted by{" "}
                <span className="font-semibold text-primary-foreground/70">
                  4,200+
                </span>{" "}
                engineering teams
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Right form panel ──────────────────────────────────────────────── */}
      <main className="flex flex-1 flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-smooth hover:text-foreground"
            data-ocid="auth-back-home"
          >
            <ArrowLeft
              size={15}
              className="transition-smooth group-hover:-translate-x-0.5"
            />
            Back to home
          </button>

          {/* Mobile logo — hidden on lg (panel takes over) */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/20 bg-primary/10">
              <Zap size={14} className="text-primary" />
            </div>
            <span className="font-display text-base font-semibold tracking-tight">
              Apex
            </span>
          </div>
        </header>

        {/* Centered form */}
        <div className="flex flex-1 items-center justify-center px-4 pb-10 pt-4 sm:px-6 lg:px-12">
          <div className="w-full max-w-[90vw] sm:max-w-md">
            {/* Card */}
            <div className="surface-card rounded-2xl p-6 shadow-lg sm:p-8">
              {/* Mode tabs */}
              <div className="mb-6 flex rounded-lg bg-muted/50 p-1">
                {(["login", "register"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => switchMode(m)}
                    data-ocid={`auth-tab-${m}`}
                    className={`flex-1 rounded-md py-1.5 text-sm font-medium transition-smooth ${
                      mode === m
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {m === "login" ? "Sign In" : "Register"}
                  </button>
                ))}
              </div>

              {/* Heading */}
              <div className="mb-6">
                <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {mode === "login" ? "Welcome back" : "Create your account"}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {mode === "login"
                    ? "Sign in to continue to your workspace"
                    : "Join thousands of high-performing teams"}
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
                data-ocid="auth-form"
              >
                {/* Name — register only */}
                {mode === "register" && (
                  <FormField
                    id="name"
                    label="Full Name"
                    type="text"
                    value={name}
                    onChange={setName}
                    placeholder="Jordan Ellis"
                    error={errors.name}
                    icon={<User size={15} />}
                    autoComplete="name"
                  />
                )}

                {/* Email */}
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@company.com"
                  error={errors.email}
                  icon={<Mail size={15} />}
                  autoComplete="email"
                />

                {/* Password */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-foreground"
                    >
                      Password
                    </Label>
                    {mode === "login" && (
                      <button
                        type="button"
                        className="text-xs text-primary transition-smooth hover:text-primary/80"
                        data-ocid="auth-forgot-password"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Lock size={15} />
                    </span>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 6 characters"
                      autoComplete={
                        mode === "login" ? "current-password" : "new-password"
                      }
                      data-ocid="auth-input-password"
                      className={`h-10 pl-10 pr-10 text-sm transition-smooth ${
                        errors.password
                          ? "border-destructive focus-visible:ring-destructive/30"
                          : "focus-visible:ring-ring/30"
                      }`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">
                      {eyeTogglePassword}
                    </span>
                  </div>
                  {errors.password && (
                    <p
                      className="flex items-center gap-1.5 text-xs text-destructive"
                      role="alert"
                    >
                      <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-destructive" />
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm password — register only */}
                {mode === "register" && (
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-foreground"
                    >
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Lock size={15} />
                      </span>
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter your password"
                        autoComplete="new-password"
                        data-ocid="auth-input-confirm-password"
                        className={`h-10 pl-10 pr-10 text-sm transition-smooth ${
                          errors.confirmPassword
                            ? "border-destructive focus-visible:ring-destructive/30"
                            : "focus-visible:ring-ring/30"
                        }`}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2">
                        {eyeToggleConfirm}
                      </span>
                    </div>
                    {errors.confirmPassword && (
                      <p
                        className="flex items-center gap-1.5 text-xs text-destructive"
                        role="alert"
                      >
                        <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-destructive" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  className="btn-lift mt-2 h-10 w-full text-sm font-semibold"
                  disabled={isLoading}
                  data-ocid="auth-submit"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={15} className="mr-2 animate-spin" />
                      {mode === "login" ? "Signing in…" : "Creating account…"}
                    </>
                  ) : mode === "login" ? (
                    "Sign In"
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-card px-3 text-xs text-muted-foreground">
                    or
                  </span>
                </div>
              </div>

              {/* Mode toggle */}
              <p className="text-center text-sm text-muted-foreground">
                {mode === "login" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => switchMode("register")}
                      className="font-medium text-primary transition-smooth hover:text-primary/80"
                      data-ocid="auth-switch-register"
                    >
                      Sign up free
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => switchMode("login")}
                      className="font-medium text-primary transition-smooth hover:text-primary/80"
                      data-ocid="auth-switch-login"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </div>

            {/* Legal note */}
            <p className="mt-5 px-4 text-center text-xs text-muted-foreground">
              By continuing, you agree to our{" "}
              <span className="cursor-pointer underline underline-offset-2 transition-smooth hover:text-foreground">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer underline underline-offset-2 transition-smooth hover:text-foreground">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
