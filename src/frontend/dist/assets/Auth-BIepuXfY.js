import { c as createLucideIcon, u as useNavigate, g as useUserStore, r as reactExports, j as jsxRuntimeExports, h as User, i as Label, I as Input, B as Button } from "./index-C4CKXjXp.js";
import { Z as Zap } from "./zap-DZDu8MtH.js";
import { B as Brain } from "./brain-6D2YjpXL.js";
import { C as ChartColumn } from "./chart-column-Cbz8yetu.js";
import { C as CircleCheck } from "./circle-check-DOINDs4j.js";
import { M as Mail } from "./mail-DsmCnC6k.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
const BRAND_FEATURES = [
  {
    icon: Brain,
    title: "AI-Powered Planning",
    desc: "Generate full roadmaps from a single prompt in seconds."
  },
  {
    icon: ChartColumn,
    title: "Execution Control",
    desc: "Real-time bottleneck detection and team velocity insights."
  },
  {
    icon: CircleCheck,
    title: "Project Tracking",
    desc: "Milestones, progress, and assignments in one unified view."
  }
];
function validate(mode, email, password, confirmPassword, name) {
  const errors = {};
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
  autoComplete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, className: "text-sm font-medium text-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id,
          type,
          value,
          onChange: (e) => onChange(e.target.value),
          placeholder,
          autoComplete,
          "data-ocid": `auth-input-${id}`,
          className: `h-10 pl-10 ${rightAddon ? "pr-10" : ""} text-sm transition-smooth ${error ? "border-destructive focus-visible:ring-destructive/30" : "focus-visible:ring-ring/30"}`
        }
      ),
      rightAddon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: rightAddon })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: "flex items-center gap-1.5 text-xs text-destructive",
        role: "alert",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1 w-1 shrink-0 rounded-full bg-destructive" }),
          error
        ]
      }
    )
  ] });
}
function Auth() {
  const navigate = useNavigate();
  const setUser = useUserStore((s) => s.setUser);
  const [mode, setMode] = reactExports.useState("login");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const [isLoading, setIsLoading] = reactExports.useState(false);
  function switchMode(next) {
    setMode(next);
    setErrors({});
    setPassword("");
    setConfirmPassword("");
  }
  function handleSubmit(e) {
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
        department: "Engineering"
      });
      setIsLoading(false);
      navigate({ to: "/app/dashboard" });
    }, 1500);
  }
  const eyeTogglePassword = /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => setShowPassword((v) => !v),
      className: "text-muted-foreground transition-smooth hover:text-foreground",
      "aria-label": showPassword ? "Hide password" : "Show password",
      "data-ocid": "auth-toggle-password",
      children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 15 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 15 })
    }
  );
  const eyeToggleConfirm = /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => setShowConfirmPassword((v) => !v),
      className: "text-muted-foreground transition-smooth hover:text-foreground",
      "aria-label": showConfirmPassword ? "Hide password" : "Show password",
      "data-ocid": "auth-toggle-confirm-password",
      children: showConfirmPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 15 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 15 })
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "relative hidden lg:flex lg:w-[44%] xl:w-[42%] flex-col overflow-hidden bg-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.06]",
          style: {
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          },
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-15 blur-3xl",
          style: {
            background: "radial-gradient(circle, white, transparent 70%)"
          },
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -left-12 -top-12 h-72 w-72 rounded-full opacity-10 blur-3xl",
          style: {
            background: "radial-gradient(circle, white, transparent 70%)"
          },
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col p-10 xl:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/" }),
            className: "group flex w-fit items-center gap-2.5",
            "data-ocid": "auth-logo-home",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 transition-smooth group-hover:bg-primary-foreground/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18, className: "text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-semibold tracking-tight text-primary-foreground", children: "Apex" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-1 flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50", children: "Command Center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mb-4 font-display text-2xl font-bold leading-tight tracking-tight text-primary-foreground xl:text-[1.875rem]", children: [
            "The command center",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "for modern teams"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-10 max-w-xs text-sm leading-relaxed text-primary-foreground/65 xl:mb-12", children: "Orchestrate projects, track velocity, and ship faster — all in one intelligent workspace." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: BRAND_FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary-foreground/15 bg-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { size: 14, className: "text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary-foreground", children: f.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs leading-snug text-primary-foreground/60", children: f.desc })
            ] })
          ] }, f.title)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary-foreground/15 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: ["SC", "MW", "PN"].map((initials) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground/20 text-[9px] font-bold text-primary-foreground",
              children: initials
            },
            initials
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary-foreground/50", children: [
            "Trusted by",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary-foreground/70", children: "4,200+" }),
            " ",
            "engineering teams"
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between p-4 sm:p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/" }),
            className: "group flex items-center gap-1.5 text-sm text-muted-foreground transition-smooth hover:text-foreground",
            "data-ocid": "auth-back-home",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ArrowLeft,
                {
                  size: 15,
                  className: "transition-smooth group-hover:-translate-x-0.5"
                }
              ),
              "Back to home"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-md border border-primary/20 bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-semibold tracking-tight", children: "Apex" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center px-4 pb-10 pt-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[90vw] sm:max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card rounded-2xl p-6 shadow-lg sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex rounded-lg bg-muted/50 p-1", children: ["login", "register"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => switchMode(m),
              "data-ocid": `auth-tab-${m}`,
              className: `flex-1 rounded-md py-1.5 text-sm font-medium transition-smooth ${mode === m ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
              children: m === "login" ? "Sign In" : "Register"
            },
            m
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl", children: mode === "login" ? "Welcome back" : "Create your account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: mode === "login" ? "Sign in to continue to your workspace" : "Join thousands of high-performing teams" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              noValidate: true,
              className: "space-y-4",
              "data-ocid": "auth-form",
              children: [
                mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    id: "name",
                    label: "Full Name",
                    type: "text",
                    value: name,
                    onChange: setName,
                    placeholder: "Jordan Ellis",
                    error: errors.name,
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 15 }),
                    autoComplete: "name"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FormField,
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    value: email,
                    onChange: setEmail,
                    placeholder: "you@company.com",
                    error: errors.email,
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 15 }),
                    autoComplete: "email"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "password",
                        className: "text-sm font-medium text-foreground",
                        children: "Password"
                      }
                    ),
                    mode === "login" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "text-xs text-primary transition-smooth hover:text-primary/80",
                        "data-ocid": "auth-forgot-password",
                        children: "Forgot password?"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 15 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "password",
                        type: showPassword ? "text" : "password",
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        placeholder: "Min. 6 characters",
                        autoComplete: mode === "login" ? "current-password" : "new-password",
                        "data-ocid": "auth-input-password",
                        className: `h-10 pl-10 pr-10 text-sm transition-smooth ${errors.password ? "border-destructive focus-visible:ring-destructive/30" : "focus-visible:ring-ring/30"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: eyeTogglePassword })
                  ] }),
                  errors.password && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "flex items-center gap-1.5 text-xs text-destructive",
                      role: "alert",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1 w-1 shrink-0 rounded-full bg-destructive" }),
                        errors.password
                      ]
                    }
                  )
                ] }),
                mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "confirmPassword",
                      className: "text-sm font-medium text-foreground",
                      children: "Confirm Password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 15 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "confirmPassword",
                        type: showConfirmPassword ? "text" : "password",
                        value: confirmPassword,
                        onChange: (e) => setConfirmPassword(e.target.value),
                        placeholder: "Re-enter your password",
                        autoComplete: "new-password",
                        "data-ocid": "auth-input-confirm-password",
                        className: `h-10 pl-10 pr-10 text-sm transition-smooth ${errors.confirmPassword ? "border-destructive focus-visible:ring-destructive/30" : "focus-visible:ring-ring/30"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: eyeToggleConfirm })
                  ] }),
                  errors.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "flex items-center gap-1.5 text-xs text-destructive",
                      role: "alert",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1 w-1 shrink-0 rounded-full bg-destructive" }),
                        errors.confirmPassword
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    className: "btn-lift mt-2 h-10 w-full text-sm font-semibold",
                    disabled: isLoading,
                    "data-ocid": "auth-submit",
                    children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 15, className: "mr-2 animate-spin" }),
                      mode === "login" ? "Signing in…" : "Creating account…"
                    ] }) : mode === "login" ? "Sign In" : "Create Account"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative my-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card px-3 text-xs text-muted-foreground", children: "or" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground", children: mode === "login" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Don't have an account?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => switchMode("register"),
                className: "font-medium text-primary transition-smooth hover:text-primary/80",
                "data-ocid": "auth-switch-register",
                children: "Sign up free"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Already have an account?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => switchMode("login"),
                className: "font-medium text-primary transition-smooth hover:text-primary/80",
                "data-ocid": "auth-switch-login",
                children: "Sign in"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 px-4 text-center text-xs text-muted-foreground", children: [
          "By continuing, you agree to our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-pointer underline underline-offset-2 transition-smooth hover:text-foreground", children: "Terms of Service" }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-pointer underline underline-offset-2 transition-smooth hover:text-foreground", children: "Privacy Policy" }),
          "."
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Auth as default
};
