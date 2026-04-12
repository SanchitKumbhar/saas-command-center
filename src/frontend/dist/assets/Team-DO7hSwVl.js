import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, U as Users, B as Button, I as Input, o as cn, a0 as DropdownMenu, a1 as DropdownMenuTrigger, a2 as DropdownMenuContent, a3 as DropdownMenuItem, a4 as DropdownMenuSeparator, D as Dialog, v as DialogContent, w as DialogHeader, x as DialogTitle, i as Label, y as DialogFooter } from "./index-C4CKXjXp.js";
import { E as EmptyState } from "./EmptyState-ZlpUrdjq.js";
import { P as PageHeader, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-B6RXNDin.js";
import { S as StatCard } from "./StatCard-C6yLWYXX.js";
import { S as StatusBadge } from "./StatusBadge-gn_ynDox.js";
import { m as mockTeam } from "./team-DRIc_YHf.js";
import { S as Search } from "./search-D5EmAB3J.js";
import { M as Mail } from "./mail-DsmCnC6k.js";
import { C as Clock } from "./trending-up-Bcd0qdYK.js";
import { C as CircleCheck } from "./circle-check-DOINDs4j.js";
import { E as Ellipsis } from "./ellipsis-YZpbMzW_.js";
import { T as Trash2 } from "./trash-2-DXVP-fAP.js";
import "./minus-Dw6Dv1p-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CircleUserRound = createLucideIcon("circle-user-round", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const WifiOff = createLucideIcon("wifi-off", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
];
const Wifi = createLucideIcon("wifi", __iconNode);
const AVATAR_COLORS = [
  "bg-primary/20 text-primary",
  "bg-success/20 text-success",
  "bg-warning/20 text-warning",
  "bg-destructive/20 text-destructive",
  "bg-info/20 text-info",
  "bg-primary/30 text-primary",
  "bg-success/30 text-success",
  "bg-warning/30 text-warning"
];
function getAvatarColor(index) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length];
}
function getInitials(name) {
  const parts = name.trim().split(" ");
  return parts.length >= 2 ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase() : parts[0].slice(0, 2).toUpperCase();
}
const STATUS_DOT = {
  active: "bg-success shadow-[0_0_0_2px_oklch(var(--card))]",
  away: "bg-warning shadow-[0_0_0_2px_oklch(var(--card))]",
  offline: "bg-muted-foreground/50 shadow-[0_0_0_2px_oklch(var(--card))]"
};
const ROLE_BADGE = {
  owner: "bg-primary/10 text-primary border border-primary/20 text-[10px] font-semibold",
  admin: "bg-info/10 text-info border border-info/20 text-[10px] font-semibold",
  member: "bg-muted text-muted-foreground border border-border text-[10px] font-semibold",
  viewer: "bg-muted/60 text-muted-foreground border border-border text-[10px] font-semibold"
};
function MemberCard({ member, colorIndex, onRemove }) {
  const initials = getInitials(member.name);
  const avatarColor = getAvatarColor(colorIndex);
  const totalTasks = member.activeTasks + member.completedTasks;
  const completionRate = totalTasks > 0 ? Math.round(member.completedTasks / totalTasks * 100) : 0;
  const barColor = completionRate >= 80 ? "bg-success" : completionRate >= 50 ? "bg-warning" : "bg-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "group relative bg-card border border-border rounded-xl",
        "hover:border-border-strong hover:shadow-md",
        "transition-all duration-200 ease-out flex flex-col",
        "overflow-hidden"
      ),
      "data-ocid": "team-member-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "h-0.5 w-full",
              member.status === "active" ? "bg-success" : member.status === "away" ? "bg-warning" : "bg-border"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 p-4 sm:p-5 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "h-11 w-11 sm:h-12 sm:w-12 rounded-full flex items-center justify-center",
                    "text-sm font-bold tracking-wide select-none ring-1 ring-border",
                    avatarColor
                  ),
                  children: initials
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full",
                    STATUS_DOT[member.status]
                  ),
                  title: member.status
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground leading-snug truncate", children: member.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5 truncate flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 10, className: "flex-shrink-0 opacity-70" }),
                    member.jobTitle
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "inline-flex items-center px-1.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0",
                      ROLE_BADGE[member.role] ?? ROLE_BADGE.member
                    ),
                    children: member.role.charAt(0).toUpperCase() + member.role.slice(1)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: member.status, showDot: true, className: "mt-1.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `mailto:${member.email}`,
              className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors truncate",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 11, className: "flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: member.email })
              ]
            }
          ),
          member.skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
            member.skills.slice(0, 5).map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border",
                children: skill
              },
              skill
            )),
            member.skills.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border", children: [
              "+",
              member.skills.length - 5
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11, className: "text-warning flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: member.activeTasks }),
                " ",
                "active"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 11, className: "text-success flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: member.completedTasks }),
                " ",
                "done"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn("h-full rounded-full transition-all", barColor),
                  style: { width: `${completionRate}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tabular-nums text-muted-foreground", children: [
                completionRate,
                "%"
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "border-t border-border bg-muted/30 px-4 py-2.5",
              "flex items-center gap-2",
              "opacity-0 group-hover:opacity-100 transition-all duration-150",
              "translate-y-1 group-hover:translate-y-0"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "h-7 text-xs gap-1.5 flex-1",
                  "data-ocid": `view-profile-${member.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { size: 12 }),
                    "View Profile"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7 flex-shrink-0",
                    "data-ocid": `member-menu-${member.id}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 14 })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { "data-ocid": `edit-member-${member.id}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { size: 13, className: "mr-2" }),
                    "Edit Member"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownMenuItem,
                    {
                      className: "text-destructive focus:text-destructive",
                      onClick: () => onRemove(member.id),
                      "data-ocid": `remove-member-${member.id}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13, className: "mr-2" }),
                        "Remove"
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const ROLE_OPTIONS = [
  "Developer",
  "Designer",
  "Manager",
  "Marketing",
  "Sales",
  "Support",
  "Other"
];
function AddMemberDialog({ open, onOpenChange, onAdd }) {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [jobTitle, setJobTitle] = reactExports.useState("");
  const [skillsInput, setSkillsInput] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  function reset() {
    setName("");
    setEmail("");
    setJobTitle("");
    setSkillsInput("");
    setErrors({});
  }
  function handleClose() {
    reset();
    onOpenChange(false);
  }
  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  function handleSubmit() {
    if (!validate()) return;
    const skills = skillsInput.split(",").map((s) => s.trim()).filter(Boolean);
    const newMember = {
      id: `member-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      role: "member",
      jobTitle: jobTitle.trim() || "Team Member",
      department: "General",
      skills,
      activeTasks: 0,
      completedTasks: 0,
      joinedAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "active"
    };
    onAdd(newMember);
    handleClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-[92vw] sm:max-w-lg",
      "data-ocid": "add-member-dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-base font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 16, className: "text-primary" }),
          "Invite Team Member"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "member-name", className: "text-sm font-medium", children: [
              "Full Name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "member-name",
                placeholder: "e.g., Alex Rivera",
                className: "h-9 text-sm",
                value: name,
                onChange: (e) => setName(e.target.value),
                "data-ocid": "add-member-name"
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "member-email", className: "text-sm font-medium", children: [
              "Email ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "member-email",
                type: "email",
                placeholder: "alex@company.io",
                className: "h-9 text-sm",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                "data-ocid": "add-member-email"
              }
            ),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "member-role", className: "text-sm font-medium", children: "Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: jobTitle, onValueChange: setJobTitle, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  id: "member-role",
                  className: "h-9 text-sm",
                  "data-ocid": "add-member-role",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a role" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ROLE_OPTIONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "member-skills", className: "text-sm font-medium", children: "Skills" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "member-skills",
                placeholder: "e.g., React, TypeScript, Design",
                className: "h-9 text-sm",
                value: skillsInput,
                onChange: (e) => setSkillsInput(e.target.value),
                "data-ocid": "add-member-skills"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Comma-separated: React, TypeScript, Figma" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: handleClose,
              "data-ocid": "add-member-cancel",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              size: "sm",
              onClick: handleSubmit,
              "data-ocid": "add-member-submit",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 13, className: "mr-1.5" }),
                "Invite Member"
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
function Team() {
  const [members, setMembers] = reactExports.useState(mockTeam);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [addMemberDialogOpen, setAddMemberDialogOpen] = reactExports.useState(false);
  const filtered = reactExports.useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return members;
    return members.filter(
      (m) => m.name.toLowerCase().includes(q) || m.jobTitle.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || m.department.toLowerCase().includes(q) || m.skills.some((s) => s.toLowerCase().includes(q))
    );
  }, [members, searchQuery]);
  function handleAdd(member) {
    setMembers((prev) => [...prev, member]);
  }
  function handleRemove(id) {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }
  const activeCount = members.filter((m) => m.status === "active").length;
  const awayCount = members.filter((m) => m.status === "away").length;
  const avgCapacity = members.length > 0 ? Math.round(
    members.reduce((sum, m) => {
      const total = m.activeTasks + m.completedTasks;
      return sum + (total > 0 ? m.completedTasks / total * 100 : 0);
    }, 0) / members.length
  ) : 0;
  const STATS = [
    {
      label: "Total Members",
      value: members.length,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16 }),
      trend: "neutral"
    },
    {
      label: "Online Now",
      value: activeCount,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { size: 16 }),
      trend: "up"
    },
    {
      label: "Away",
      value: awayCount,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { size: 16 }),
      trend: "neutral"
    },
    {
      label: "Avg. Completion",
      value: `${avgCapacity}%`,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 16 }),
      trend: avgCapacity >= 60 ? "up" : "neutral"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 sm:gap-6 p-4 sm:p-6 min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Team",
        subtitle: `${members.length} member${members.length !== 1 ? "s" : ""} · ${activeCount} online`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            onClick: () => setAddMemberDialogOpen(true),
            "data-ocid": "add-member-trigger",
            className: "gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline", children: "Invite Member" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "xs:hidden", children: "Invite" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatCard,
      {
        label: s.label,
        value: s.value,
        icon: s.icon,
        trend: s.trend
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Search,
        {
          size: 14,
          className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search by name, role, or skill…",
          className: "pl-9 h-9 text-sm",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          "data-ocid": "team-search"
        }
      )
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Users,
        title: "No members found",
        description: searchQuery ? `No members match "${searchQuery}". Try a different search.` : "Your team is empty. Invite the first member to get started.",
        action: !searchQuery ? {
          label: "Invite Member",
          onClick: () => setAddMemberDialogOpen(true)
        } : void 0
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
        "data-ocid": "team-grid",
        children: filtered.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          MemberCard,
          {
            member,
            colorIndex: index,
            onRemove: handleRemove
          },
          member.id
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddMemberDialog,
      {
        open: addMemberDialogOpen,
        onOpenChange: setAddMemberDialogOpen,
        onAdd: handleAdd
      }
    )
  ] });
}
export {
  Team as default
};
