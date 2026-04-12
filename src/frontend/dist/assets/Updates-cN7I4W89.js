import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, _ as Plus, o as cn, a0 as DropdownMenu, a1 as DropdownMenuTrigger, a2 as DropdownMenuContent, a3 as DropdownMenuItem, a4 as DropdownMenuSeparator, a6 as TooltipProvider, a7 as Tooltip, a8 as TooltipTrigger, a9 as TooltipContent, D as Dialog, v as DialogContent, w as DialogHeader, x as DialogTitle, i as Label, T as Textarea, y as DialogFooter } from "./index-C4CKXjXp.js";
import { E as EmptyState } from "./EmptyState-ZlpUrdjq.js";
import { P as PageHeader, C as ChevronDown, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-B6RXNDin.js";
import { m as mockTeam } from "./team-DRIc_YHf.js";
import { Z as Zap } from "./zap-DZDu8MtH.js";
import { T as TriangleAlert } from "./triangle-alert-DFTcCZao.js";
import { M as Megaphone, P as Pin } from "./pin-C3JtHXj6.js";
import { E as Ellipsis } from "./ellipsis-YZpbMzW_.js";
import { P as Pencil } from "./pencil-BmQJMJB-.js";
import { T as Trash2 } from "./trash-2-DXVP-fAP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M22 11v1a10 10 0 1 1-9-10", key: "ew0xw9" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }]
];
const SmilePlus = createLucideIcon("smile-plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
const mockUpdates = [
  {
    id: "upd-1",
    type: "milestone",
    title: "Payments API v2 shipped to production",
    content: "After 3 months of development and 2 weeks of load testing, the new Payments API is live. Highlights: 40% lower latency, full Stripe webhook support, and improved error handling with structured responses.",
    authorId: "member-1",
    authorName: "Sarah Chen",
    createdAt: "2026-04-12T10:00:00Z",
    projectId: "proj-1",
    projectName: "Payments Platform",
    pinned: true,
    reactions: [
      { emoji: "🚀", count: 8 },
      { emoji: "✅", count: 5 },
      { emoji: "🎉", count: 4 }
    ]
  },
  {
    id: "upd-2",
    type: "announcement",
    title: "Team offsite confirmed — Austin, May 14–16",
    content: "We're heading to Austin for a 3-day offsite. Agenda: Q3 planning, team building, and engineering deep-dives. Travel and accommodation is covered. Full itinerary shared in Notion.",
    authorId: "user-1",
    authorName: "Jordan Ellis",
    createdAt: "2026-04-11T14:30:00Z",
    pinned: true,
    reactions: [
      { emoji: "🎉", count: 12 },
      { emoji: "❤️", count: 7 }
    ]
  },
  {
    id: "upd-3",
    type: "alert",
    title: "Database maintenance window tonight at 2am UTC",
    content: "Scheduled maintenance for primary PostgreSQL cluster. Expected downtime: 10–15 minutes. Read replicas will remain available. No action needed from the team — infra will handle the failover.",
    authorId: "member-7",
    authorName: "Jordan Kim",
    createdAt: "2026-04-11T09:00:00Z",
    pinned: false,
    reactions: []
  },
  {
    id: "upd-4",
    type: "release",
    title: "Design System v1.4 — 6 new components",
    content: "Just shipped DS v1.4 to npm. New additions: DataTable, CommandPalette, DateRangePicker, Timeline, Stepper, and RichTextEditor. All components have Storybook stories and accessibility tests.",
    authorId: "member-5",
    authorName: "Tom Okafor",
    createdAt: "2026-04-10T16:00:00Z",
    projectId: "proj-5",
    projectName: "Design System",
    pinned: false,
    reactions: [
      { emoji: "💎", count: 9 },
      { emoji: "🙌", count: 6 }
    ]
  },
  {
    id: "upd-5",
    type: "retrospective",
    title: "Sprint 7 retrospective — key takeaways",
    content: "Velocity was down 12% due to the auth blocker. Wins: payments shipped on time, mobile onboarding in review. Actions: unblock auth audit by Friday, reallocate 2 points from Alex to free up capacity.",
    authorId: "user-1",
    authorName: "Jordan Ellis",
    createdAt: "2026-04-09T17:00:00Z",
    pinned: false,
    reactions: [{ emoji: "👍", count: 5 }]
  },
  {
    id: "upd-6",
    type: "milestone",
    title: "Analytics Spark cluster fully provisioned",
    content: "The new Spark cluster is live in staging. 3 of 12 ETL pipelines migrated successfully. Running schema migration scripts now — estimate full migration complete by next Friday.",
    authorId: "member-6",
    authorName: "Lin Zhao",
    createdAt: "2026-04-08T11:00:00Z",
    projectId: "proj-3",
    projectName: "Analytics Pipeline",
    pinned: false,
    reactions: [{ emoji: "⚡", count: 4 }]
  },
  {
    id: "upd-7",
    type: "announcement",
    title: "New hire: Ava Thompson joins as QA Engineer",
    content: "Excited to welcome Ava to the team! Ava brings 5 years of QA experience with a focus on end-to-end testing automation. She'll be working across all product squads to improve our test coverage.",
    authorId: "user-1",
    authorName: "Jordan Ellis",
    createdAt: "2026-04-07T09:00:00Z",
    pinned: false,
    reactions: [
      { emoji: "👋", count: 11 },
      { emoji: "🎉", count: 8 }
    ]
  },
  {
    id: "upd-8",
    type: "alert",
    title: "Auth Redesign deadline at risk",
    content: "The security audit dependency is blocking 3 critical tasks. Current timeline projects a 1-week slip unless we resolve the external vendor coordination today. Escalating to leadership.",
    authorId: "member-3",
    authorName: "Marcus Webb",
    createdAt: "2026-04-06T15:00:00Z",
    projectId: "proj-2",
    projectName: "Auth Redesign",
    pinned: false,
    reactions: []
  },
  {
    id: "upd-9",
    type: "release",
    title: "Mobile App v3 — beta to TestFlight",
    content: "Beta build is live on TestFlight for internal testers. Focus areas for feedback: onboarding flow, dark mode consistency, and navigation transitions. Feedback deadline is April 15.",
    authorId: "member-5",
    authorName: "Tom Okafor",
    createdAt: "2026-04-05T13:00:00Z",
    projectId: "proj-4",
    projectName: "Mobile App v3",
    pinned: false,
    reactions: [
      { emoji: "📱", count: 7 },
      { emoji: "🔥", count: 5 }
    ]
  }
];
const UPDATE_TYPE_CONFIG = {
  announcement: {
    label: "Announcement",
    icon: Megaphone,
    borderClass: "border-l-primary",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    iconBg: "bg-primary/10 text-primary"
  },
  milestone: {
    label: "Milestone",
    icon: Trophy,
    borderClass: "border-l-success",
    badgeBg: "bg-success/10",
    badgeText: "text-success",
    iconBg: "bg-success/10 text-success"
  },
  alert: {
    label: "Blocker",
    icon: TriangleAlert,
    borderClass: "border-l-destructive",
    badgeBg: "bg-destructive/10",
    badgeText: "text-destructive",
    iconBg: "bg-destructive/10 text-destructive"
  },
  release: {
    label: "Release",
    icon: Zap,
    borderClass: "border-l-info",
    badgeBg: "bg-info/10",
    badgeText: "text-info",
    iconBg: "bg-info/10 text-info"
  },
  retrospective: {
    label: "Retrospective",
    icon: ChevronDown,
    borderClass: "border-l-warning",
    badgeBg: "bg-warning/10",
    badgeText: "text-warning",
    iconBg: "bg-warning/10 text-warning"
  }
};
const UPDATE_TYPES = [
  "announcement",
  "milestone",
  "alert",
  "release",
  "retrospective"
];
function formatRelativeTime(iso) {
  const date = new Date(iso);
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 6e4);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function formatFullDate(iso) {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}
function getInitials(name) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}
function UpdateTypeBadge({ type }) {
  const cfg = UPDATE_TYPE_CONFIG[type];
  const Icon = cfg.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-transparent",
        cfg.badgeBg,
        cfg.badgeText
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 10 }),
        cfg.label
      ]
    }
  );
}
function UpdateCard({
  update,
  onDelete,
  onEdit,
  onTogglePin
}) {
  const cfg = UPDATE_TYPE_CONFIG[update.type];
  const Icon = cfg.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "group relative bg-card border border-border border-l-4 rounded-lg",
        "hover:bg-muted/20 hover:border-border-strong",
        "transition-all duration-150",
        cfg.borderClass
      ),
      "data-ocid": `update-card-${update.id}`,
      children: [
        update.pinned && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 right-0 flex items-center gap-1 px-2 py-1 text-[10px] font-semibold text-muted-foreground bg-muted/60 rounded-bl-lg rounded-tr-md border-l border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 9, className: "fill-current" }),
          "Pinned"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-3 sm:px-5 sm:pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5",
                  cfg.iconBg
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 14 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 pr-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateTypeBadge, { type: update.type }),
                update.projectName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-md border border-border", children: update.projectName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground leading-snug mb-1.5", children: update.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-[13px] text-muted-foreground leading-relaxed line-clamp-3 whitespace-pre-line", children: update.content })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: cn(
                    "h-7 w-7 text-muted-foreground hover:text-foreground",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  ),
                  "data-ocid": `update-menu-${update.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 14 })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-44", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownMenuItem,
                  {
                    onClick: () => onEdit(update),
                    "data-ocid": `update-edit-${update.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 13, className: "mr-2" }),
                      "Edit"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownMenuItem,
                  {
                    onClick: () => onTogglePin(update.id),
                    "data-ocid": `update-pin-${update.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { size: 13, className: "mr-2" }),
                      update.pinned ? "Unpin" : "Pin to top"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownMenuItem,
                  {
                    className: "text-destructive focus:text-destructive",
                    onClick: () => onDelete(update.id),
                    "data-ocid": `update-delete-${update.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13, className: "mr-2" }),
                      "Delete"
                    ]
                  }
                )
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mt-3 pt-3 border-t border-border/60 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold flex-shrink-0", children: getInitials(update.authorName) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground truncate", children: update.authorName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
              update.reactions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: update.reactions.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-0.5 text-xs bg-muted px-1.5 py-0.5 rounded-md text-muted-foreground border border-border cursor-pointer hover:bg-muted/80 transition-colors",
                  children: [
                    r.emoji,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums text-[10px]", children: r.count })
                  ]
                },
                r.emoji
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-6 w-6 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity",
                  title: "Add reaction",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmilePlus, { size: 12 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground cursor-default whitespace-nowrap", children: formatRelativeTime(update.createdAt) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "top", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: formatFullDate(update.createdAt) }) })
              ] }) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function TypeSelector({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-1.5", "data-ocid": "update-type-selector", children: UPDATE_TYPES.map((t) => {
    const cfg = UPDATE_TYPE_CONFIG[t];
    const Icon = cfg.icon;
    const isSelected = value === t;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => onChange(t),
        className: cn(
          "flex flex-col items-center gap-1.5 p-2 rounded-lg border text-center transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
          isSelected ? cn(
            "border-transparent shadow-sm",
            cfg.badgeBg,
            cfg.badgeText,
            "font-semibold"
          ) : "border-border bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground"
        ),
        "data-ocid": `type-option-${t}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "w-7 h-7 rounded-md flex items-center justify-center",
                isSelected ? cfg.iconBg : "bg-background"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] sm:text-[10px] font-medium leading-tight truncate w-full", children: cfg.label })
        ]
      },
      t
    );
  }) });
}
function UpdateDialog({
  open,
  onOpenChange,
  onPost,
  editingUpdate
}) {
  var _a;
  const editingAuthorMember = editingUpdate ? mockTeam.find((m) => m.name === editingUpdate.authorName) : void 0;
  const [type, setType] = reactExports.useState(
    (editingUpdate == null ? void 0 : editingUpdate.type) ?? "announcement"
  );
  const [authorId, setAuthorId] = reactExports.useState(
    (editingAuthorMember == null ? void 0 : editingAuthorMember.id) ?? ((_a = mockTeam[0]) == null ? void 0 : _a.id) ?? ""
  );
  const [content, setContent] = reactExports.useState((editingUpdate == null ? void 0 : editingUpdate.content) ?? "");
  const [contentError, setContentError] = reactExports.useState(false);
  function handleClose() {
    var _a2;
    setType("announcement");
    setAuthorId(((_a2 = mockTeam[0]) == null ? void 0 : _a2.id) ?? "");
    setContent("");
    setContentError(false);
    onOpenChange(false);
  }
  function handlePost() {
    if (!content.trim()) {
      setContentError(true);
      return;
    }
    const author = mockTeam.find((m) => m.id === authorId);
    onPost(type, (author == null ? void 0 : author.name) ?? "Unknown", content.trim());
    handleClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-[92vw] sm:max-w-lg",
      "data-ocid": "create-update-dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-base font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 16, className: "text-primary" }),
          editingUpdate ? "Edit Update" : "Post an Update"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Update Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TypeSelector,
              {
                value: type,
                onChange: (t) => {
                  setType(t);
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "update-author-select",
                className: "text-sm font-medium",
                children: "Author"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: authorId, onValueChange: setAuthorId, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  id: "update-author-select",
                  className: "h-9 text-sm",
                  "data-ocid": "update-author-select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: mockTeam.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.id, children: m.name }, m.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "update-content-input",
                className: "text-sm font-medium",
                children: [
                  "Content ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "update-content-input",
                "data-ocid": "update-content-input",
                placeholder: "What's happening? Share a status, milestone, or blocker...",
                className: cn(
                  "min-h-[100px] text-sm resize-none",
                  contentError && "border-destructive"
                ),
                rows: 4,
                value: content,
                onChange: (e) => {
                  setContent(e.target.value);
                  if (e.target.value.trim()) setContentError(false);
                }
              }
            ),
            contentError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Content is required." })
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
              "data-ocid": "update-discard-btn",
              children: "Discard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              onClick: handlePost,
              "data-ocid": "update-post-btn",
              children: editingUpdate ? "Save Changes" : "Post Update"
            }
          )
        ] })
      ]
    }
  ) });
}
const FILTER_TABS = [
  { value: "all", label: "All" },
  { value: "announcement", label: "Announcements" },
  { value: "milestone", label: "Milestones" },
  { value: "alert", label: "Blockers" },
  { value: "release", label: "Releases" },
  { value: "retrospective", label: "Retrospectives" }
];
function Updates() {
  var _a;
  const sorted = [...mockUpdates].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const [updates, setUpdates] = reactExports.useState(sorted);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [editingUpdate, setEditingUpdate] = reactExports.useState(null);
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  function handlePost(type, authorName, content) {
    const newUpdate = {
      id: editingUpdate ? editingUpdate.id : `upd-${Date.now()}`,
      type,
      title: content.split("\n")[0].slice(0, 80),
      content,
      authorId: "user-current",
      authorName,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      pinned: (editingUpdate == null ? void 0 : editingUpdate.pinned) ?? false,
      reactions: (editingUpdate == null ? void 0 : editingUpdate.reactions) ?? []
    };
    if (editingUpdate) {
      setUpdates((prev) => [
        newUpdate,
        ...prev.filter((u) => u.id !== editingUpdate.id)
      ]);
      setEditingUpdate(null);
    } else {
      setUpdates((prev) => [newUpdate, ...prev]);
    }
    setDialogOpen(false);
  }
  function handleDelete(id) {
    setUpdates((prev) => prev.filter((u) => u.id !== id));
  }
  function handleEdit(update) {
    setEditingUpdate(update);
    setDialogOpen(true);
  }
  function handleTogglePin(id) {
    setUpdates(
      (prev) => prev.map((u) => u.id === id ? { ...u, pinned: !u.pinned } : u)
    );
  }
  function handleDialogOpenChange(open) {
    setDialogOpen(open);
    if (!open) setEditingUpdate(null);
  }
  const filteredUpdates = updates.filter((u) => activeFilter === "all" || u.type === activeFilter).sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col gap-5 sm:gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Updates",
        subtitle: "Track team announcements, releases, milestones, and blockers.",
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            onClick: () => setDialogOpen(true),
            "data-ocid": "new-update-toggle-btn",
            className: "gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline", children: "New Update" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "xs:hidden", children: "New" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5",
        "data-ocid": "update-filter-tabs",
        children: FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.value;
          const cfg = tab.value !== "all" ? UPDATE_TYPE_CONFIG[tab.value] : null;
          const count = tab.value === "all" ? updates.length : updates.filter((u) => u.type === tab.value).length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveFilter(tab.value),
              className: cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap",
                "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                isActive ? cfg ? cn(cfg.badgeBg, cfg.badgeText) : "bg-primary text-primary-foreground" : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
              ),
              "data-ocid": `filter-tab-${tab.value}`,
              children: [
                cfg && /* @__PURE__ */ jsxRuntimeExports.jsx(cfg.icon, { size: 10 }),
                tab.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-[10px] tabular-nums px-1 rounded",
                      isActive ? cfg ? "opacity-70" : "bg-primary-foreground/20" : "bg-muted text-muted-foreground"
                    ),
                    children: count
                  }
                )
              ]
            },
            tab.value
          );
        })
      }
    ),
    filteredUpdates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: Megaphone,
        title: activeFilter === "all" ? "No updates yet" : `No ${((_a = UPDATE_TYPE_CONFIG[activeFilter]) == null ? void 0 : _a.label) ?? ""} updates`,
        description: activeFilter === "all" ? "Post your first update to keep the team informed." : "No updates of this type have been posted yet.",
        action: activeFilter === "all" ? {
          label: "Post Update",
          onClick: () => setDialogOpen(true)
        } : void 0
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex flex-col gap-2.5 sm:gap-3",
        "data-ocid": "updates-feed",
        children: filteredUpdates.map((update) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          UpdateCard,
          {
            update,
            onDelete: handleDelete,
            onEdit: handleEdit,
            onTogglePin: handleTogglePin
          },
          update.id
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UpdateDialog,
      {
        open: dialogOpen,
        onOpenChange: handleDialogOpenChange,
        onPost: handlePost,
        editingUpdate
      }
    )
  ] });
}
export {
  Updates as default
};
