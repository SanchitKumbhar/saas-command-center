import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, o as cn, U as Users, d as Badge, Y as X, D as Dialog, v as DialogContent, w as DialogHeader, x as DialogTitle, Z as ScrollArea, T as Textarea } from "./index-C4CKXjXp.js";
import { F as FilterBar } from "./FilterBar-CHXHbbMO.js";
import { P as PageHeader, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-B6RXNDin.js";
import { S as SectionCard } from "./SectionCard-zzoiLooC.js";
import { S as StatCard } from "./StatCard-C6yLWYXX.js";
import { S as StatusBadge } from "./StatusBadge-gn_ynDox.js";
import { R as RefreshCw } from "./refresh-cw-CWyKD-C3.js";
import { I as Info } from "./info-DM2IQseq.js";
import { C as Clock } from "./trending-up-Bcd0qdYK.js";
import { C as CircleCheck } from "./circle-check-DOINDs4j.js";
import { T as TriangleAlert } from "./triangle-alert-DFTcCZao.js";
import { C as ChevronRight, G as GripVertical } from "./grip-vertical-7NtAFA8f.js";
import { Z as Zap } from "./zap-DZDu8MtH.js";
import "./search-D5EmAB3J.js";
import "./minus-Dw6Dv1p-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
];
const Ban = createLucideIcon("ban", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
];
const ListChecks = createLucideIcon("list-checks", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode);
const executionTasks = [
  {
    id: "exec-t1",
    title: "Payments API — rate limiting",
    description: "Implement token bucket rate limiting for v2 API.",
    status: "in-progress",
    priority: "critical",
    assigneeId: "member-1",
    assigneeName: "Sarah Chen",
    projectId: "proj-1",
    projectName: "Payments Platform",
    dueDate: "2026-04-14T00:00:00Z",
    createdAt: "2026-04-01T00:00:00Z",
    updatedAt: "2026-04-12T00:00:00Z",
    tags: ["api", "security"],
    comments: [],
    estimatedHours: 12,
    completedHours: 7
  },
  {
    id: "exec-t2",
    title: "Auth service security audit",
    description: "Complete internal security review checklist.",
    status: "blocked",
    priority: "critical",
    assigneeId: "member-3",
    assigneeName: "Marcus Webb",
    projectId: "proj-2",
    projectName: "Auth Redesign",
    dueDate: "2026-04-10T00:00:00Z",
    createdAt: "2026-03-28T00:00:00Z",
    updatedAt: "2026-04-11T00:00:00Z",
    tags: ["security", "auth"],
    comments: [],
    estimatedHours: 16,
    completedHours: 4
  },
  {
    id: "exec-t3",
    title: "Data pipeline ETL migration",
    description: "Migrate legacy ETL jobs to Spark-based pipeline.",
    status: "in-progress",
    priority: "high",
    assigneeId: "member-6",
    assigneeName: "Lin Zhao",
    projectId: "proj-3",
    projectName: "Analytics Pipeline",
    dueDate: "2026-04-08T00:00:00Z",
    createdAt: "2026-03-20T00:00:00Z",
    updatedAt: "2026-04-12T00:00:00Z",
    tags: ["data", "migration"],
    comments: [],
    estimatedHours: 40,
    completedHours: 28
  },
  {
    id: "exec-t4",
    title: "Mobile app onboarding flow",
    description: "Redesign 4-step onboarding with new design system.",
    status: "review",
    priority: "high",
    assigneeId: "member-5",
    assigneeName: "Tom Okafor",
    projectId: "proj-4",
    projectName: "Mobile App v3",
    dueDate: "2026-04-16T00:00:00Z",
    createdAt: "2026-04-05T00:00:00Z",
    updatedAt: "2026-04-12T00:00:00Z",
    tags: ["mobile", "ux"],
    comments: [],
    estimatedHours: 20,
    completedHours: 18
  },
  {
    id: "exec-t5",
    title: "Stripe webhook integration tests",
    description: "Add e2e tests for all Stripe webhook events.",
    status: "todo",
    priority: "medium",
    assigneeId: "member-1",
    assigneeName: "Sarah Chen",
    projectId: "proj-1",
    projectName: "Payments Platform",
    dueDate: "2026-04-18T00:00:00Z",
    createdAt: "2026-04-07T00:00:00Z",
    updatedAt: "2026-04-07T00:00:00Z",
    tags: ["testing"],
    comments: [],
    estimatedHours: 8,
    completedHours: 0
  },
  {
    id: "exec-t6",
    title: "Design system documentation",
    description: "Write Storybook stories for all shared components.",
    status: "done",
    priority: "medium",
    assigneeId: "member-5",
    assigneeName: "Tom Okafor",
    projectId: "proj-5",
    projectName: "Design System",
    dueDate: "2026-04-11T00:00:00Z",
    createdAt: "2026-04-02T00:00:00Z",
    updatedAt: "2026-04-11T00:00:00Z",
    tags: ["docs", "design"],
    comments: [],
    estimatedHours: 12,
    completedHours: 12
  }
];
const projectHealthData = [
  {
    projectId: "proj-1",
    projectName: "Payments Platform",
    status: "green",
    completedTasks: 18,
    totalTasks: 24,
    progress: 75,
    daysRemaining: 14,
    blockers: 0
  },
  {
    projectId: "proj-2",
    projectName: "Auth Redesign",
    status: "red",
    completedTasks: 6,
    totalTasks: 20,
    progress: 30,
    daysRemaining: 3,
    blockers: 2
  },
  {
    projectId: "proj-3",
    projectName: "Analytics Pipeline",
    status: "yellow",
    completedTasks: 12,
    totalTasks: 18,
    progress: 67,
    daysRemaining: -4,
    blockers: 1
  },
  {
    projectId: "proj-4",
    projectName: "Mobile App v3",
    status: "green",
    completedTasks: 22,
    totalTasks: 28,
    progress: 79,
    daysRemaining: 18,
    blockers: 0
  },
  {
    projectId: "proj-5",
    projectName: "Design System",
    status: "green",
    completedTasks: 15,
    totalTasks: 16,
    progress: 94,
    daysRemaining: 7,
    blockers: 0
  }
];
const teamLoadData = [
  {
    memberId: "member-1",
    memberName: "Sarah Chen",
    activeTasks: 8,
    maxCapacity: 8,
    utilizationPct: 100
  },
  {
    memberId: "member-2",
    memberName: "Alex Rivera",
    activeTasks: 11,
    maxCapacity: 8,
    utilizationPct: 138
  },
  {
    memberId: "member-3",
    memberName: "Marcus Webb",
    activeTasks: 5,
    maxCapacity: 8,
    utilizationPct: 63
  },
  {
    memberId: "member-4",
    memberName: "Priya Nair",
    activeTasks: 7,
    maxCapacity: 8,
    utilizationPct: 88
  },
  {
    memberId: "member-5",
    memberName: "Tom Okafor",
    activeTasks: 4,
    maxCapacity: 6,
    utilizationPct: 67
  },
  {
    memberId: "member-6",
    memberName: "Lin Zhao",
    activeTasks: 9,
    maxCapacity: 8,
    utilizationPct: 113
  }
];
const executionAlerts = [
  {
    id: "ea-1",
    severity: "error",
    message: "Auth Redesign is critically behind — security review blocked for 4 days",
    timestamp: "2026-04-12T07:00:00Z"
  },
  {
    id: "ea-2",
    severity: "warning",
    message: "Alex Rivera and Lin Zhao are over-capacity by 30%+",
    timestamp: "2026-04-12T08:00:00Z"
  },
  {
    id: "ea-3",
    severity: "warning",
    message: "Analytics Pipeline is 4 days overdue on ETL migration",
    timestamp: "2026-04-11T16:00:00Z"
  }
];
const KANBAN_COLUMNS = [
  {
    id: "todo",
    label: "Not Started",
    accent: "text-muted-foreground",
    headerBg: "bg-muted/40 border-b border-border/60",
    countBg: "bg-muted text-muted-foreground",
    emptyLabel: "No tasks yet"
  },
  {
    id: "in-progress",
    label: "In Progress",
    accent: "text-info",
    headerBg: "bg-info/5 border-b border-info/20",
    countBg: "bg-info/15 text-info",
    emptyLabel: "Nothing in progress"
  },
  {
    id: "blocked",
    label: "At Risk",
    accent: "text-destructive",
    headerBg: "bg-destructive/8 border-b border-destructive/20",
    countBg: "bg-destructive/15 text-destructive",
    emptyLabel: "No blockers"
  },
  {
    id: "done",
    label: "Complete",
    accent: "text-success",
    headerBg: "bg-success/5 border-b border-success/20",
    countBg: "bg-success/15 text-success",
    emptyLabel: "Nothing completed"
  }
];
const PRIORITY_ORDER = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3
};
const PRIORITY_CONFIG = {
  critical: {
    label: "Critical",
    className: "bg-destructive/12 text-destructive border-destructive/25",
    dot: "bg-destructive"
  },
  high: {
    label: "High",
    className: "bg-warning/12 text-warning border-warning/25",
    dot: "bg-warning"
  },
  medium: {
    label: "Medium",
    className: "bg-info/12 text-info border-info/25",
    dot: "bg-info"
  },
  low: {
    label: "Low",
    className: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground"
  }
};
const BOTTLENECKS = [
  {
    id: "bn-1",
    title: "Auth security review stalled",
    impact: "Blocking 3 dependent tasks across team",
    area: "Auth Redesign",
    action: "Assign dedicated reviewer"
  },
  {
    id: "bn-2",
    title: "Alex Rivera over-capacity",
    impact: "Sprint velocity reduced by ~25%",
    area: "Multiple projects",
    action: "Redistribute 2 tasks to team"
  },
  {
    id: "bn-3",
    title: "Analytics Pipeline overdue",
    impact: "ETL migration delayed 4 days",
    area: "Analytics Pipeline",
    action: "Schedule emergency sync"
  }
];
function getInitials(name) {
  return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
}
function isOverdue(dueDate) {
  if (!dueDate) return false;
  return new Date(dueDate) < /* @__PURE__ */ new Date();
}
function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}
function formatRelative(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diff / 36e5);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
function AvatarChip({
  name,
  size = "sm"
}) {
  const sizeClass = size === "md" ? "w-7 h-7 text-[11px]" : "w-5 h-5 text-[9px]";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center justify-center rounded-full",
        "bg-primary/15 text-primary font-bold leading-none flex-shrink-0",
        sizeClass
      ),
      title: name,
      children: getInitials(name)
    }
  );
}
function PriorityBadge({ priority }) {
  const cfg = PRIORITY_CONFIG[priority];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold border leading-none",
        cfg.className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("w-1.5 h-1.5 rounded-full flex-shrink-0", cfg.dot) }),
        cfg.label
      ]
    }
  );
}
function TaskCard({
  task,
  onClick
}) {
  const overdue = isOverdue(task.dueDate);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => onClick(task),
      className: cn(
        "w-full text-left rounded-lg border border-border bg-card",
        "hover:border-primary/35 hover:shadow-sm transition-smooth cursor-pointer group",
        "flex flex-col gap-2 p-3",
        task.status === "blocked" && "border-destructive/20 bg-destructive/[0.02]"
      ),
      "data-ocid": `task-card-${task.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GripVertical,
            {
              size: 14,
              className: "text-muted-foreground/30 group-hover:text-muted-foreground/60 flex-shrink-0 mt-0.5 transition-colors",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1 min-w-0", children: task.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1 pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority }),
          task.assigneeName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarChip, { name: task.assigneeName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground truncate max-w-[70px]", children: task.assigneeName.split(" ")[0] })
          ] })
        ] }),
        task.dueDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Clock,
            {
              size: 10,
              className: cn(
                "flex-shrink-0",
                overdue ? "text-destructive" : "text-muted-foreground/60"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: cn(
                "text-[10px] font-medium leading-none",
                overdue ? "text-destructive" : "text-muted-foreground"
              ),
              children: [
                overdue ? "Overdue · " : "Due ",
                formatDate(task.dueDate)
              ]
            }
          )
        ] })
      ]
    }
  );
}
function KanbanColumn({
  column,
  tasks,
  onTaskClick
}) {
  const sorted = [...tasks].sort(
    (a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-[264px] sm:min-w-[288px] flex-1 bg-card rounded-xl border border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex items-center justify-between px-3.5 py-2.5",
          column.headerBg
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-[11px] font-bold uppercase tracking-widest",
                column.accent
              ),
              children: column.label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold",
                column.countBg
              ),
              children: tasks.length
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 p-2.5 min-h-[120px]", children: sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center h-20 rounded-lg border border-dashed border-border/60 gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground/60", children: column.emptyLabel }) }) : sorted.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(TaskCard, { task, onClick: onTaskClick }, task.id)) })
  ] });
}
function HealthStatusBadge({ status }) {
  const config = {
    green: {
      label: "On Track",
      className: "bg-success/12 text-success border-success/25"
    },
    yellow: {
      label: "At Risk",
      className: "bg-warning/12 text-warning border-warning/25"
    },
    red: {
      label: "Critical",
      className: "bg-destructive/12 text-destructive border-destructive/25"
    }
  }[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border leading-none",
        config.className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "w-1.5 h-1.5 rounded-full",
              status === "green" && "bg-success",
              status === "yellow" && "bg-warning",
              status === "red" && "bg-destructive"
            )
          }
        ),
        config.label
      ]
    }
  );
}
function AlertIcon({ severity }) {
  if (severity === "error")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 15, className: "text-destructive flex-shrink-0 mt-0.5" });
  if (severity === "warning")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 15, className: "text-warning flex-shrink-0 mt-0.5" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 15, className: "text-info flex-shrink-0 mt-0.5" });
}
function AlertRow({
  alert,
  onDismiss
}) {
  const accentColor = {
    error: "border-destructive/60",
    warning: "border-warning/60",
    info: "border-info/60"
  }[alert.severity];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex items-start gap-3 px-4 py-3.5 group",
        "border-l-2 mx-3 my-1.5 rounded-r-lg",
        alert.severity === "error" && "bg-destructive/[0.04]",
        alert.severity === "warning" && "bg-warning/[0.04]",
        alert.severity === "info" && "bg-info/[0.04]",
        accentColor
      ),
      "data-ocid": `alert-${alert.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertIcon, { severity: alert.severity }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-relaxed text-foreground font-medium", children: alert.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: formatRelative(alert.timestamp) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onDismiss(alert.id),
            className: "flex-shrink-0 p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted opacity-0 group-hover:opacity-100 transition-smooth",
            "aria-label": "Dismiss alert",
            "data-ocid": `alert-dismiss-${alert.id}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
          }
        )
      ]
    }
  );
}
function TaskDetailDialog({
  task,
  onClose,
  onDelete
}) {
  const [comment, setComment] = reactExports.useState("");
  const [comments, setComments] = reactExports.useState(task.comments);
  function handleAddComment() {
    if (!comment.trim()) return;
    setComments((prev) => [
      ...prev,
      {
        id: `c-${Date.now()}`,
        authorId: "current-user",
        authorName: "You",
        content: comment.trim(),
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]);
    setComment("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-lg p-0 gap-0",
      "data-ocid": "task-detail-dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: "px-5 py-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-sm font-semibold leading-snug pr-6", children: task.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority }),
            task.projectName && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: task.projectName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-0.5", children: "Assignee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                task.assigneeName && /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarChip, { name: task.assigneeName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: task.assigneeName ?? "Unassigned" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-0.5", children: "Due Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: cn(
                    "font-medium",
                    isOverdue(task.dueDate) && "text-destructive"
                  ),
                  children: [
                    formatDate(task.dueDate),
                    isOverdue(task.dueDate) && " · Overdue"
                  ]
                }
              )
            ] }),
            task.estimatedHours !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-0.5", children: "Est. Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
                task.estimatedHours,
                "h"
              ] })
            ] }),
            task.completedHours !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-0.5", children: "Logged" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
                task.completedHours,
                "h"
              ] })
            ] })
          ] }),
          task.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: task.description })
          ] }),
          task.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: task.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: tag }, tag)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-2", children: [
              "Comments (",
              comments.length,
              ")"
            ] }),
            comments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No comments yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: comments.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarChip, { name: c.authorName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold", children: c.authorName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: formatRelative(c.createdAt) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-foreground", children: c.content })
              ] })
            ] }, c.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "Add a comment…",
                  value: comment,
                  onChange: (e) => setComment(e.target.value),
                  className: "text-xs min-h-[60px] resize-none",
                  "data-ocid": "comment-input",
                  onKeyDown: (e) => {
                    if (e.key === "Enter" && (e.metaKey || e.ctrlKey))
                      handleAddComment();
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "sm",
                  onClick: handleAddComment,
                  disabled: !comment.trim(),
                  className: "self-end",
                  "data-ocid": "comment-send-btn",
                  children: "Send"
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-t border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                className: "h-7 text-xs",
                "data-ocid": "task-edit-btn",
                children: "Edit"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                className: "h-7 text-xs text-destructive hover:text-destructive hover:bg-destructive/10",
                onClick: () => {
                  onDelete(task.id);
                  onClose();
                },
                "data-ocid": "task-delete-btn",
                children: "Delete"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              className: "h-7 text-xs",
              onClick: onClose,
              "data-ocid": "task-close-btn",
              children: "Close"
            }
          )
        ] })
      ]
    }
  ) });
}
function Execution() {
  const [tasks, setTasks] = reactExports.useState(executionTasks);
  const [alerts, setAlerts] = reactExports.useState(executionAlerts);
  const [selectedTask, setSelectedTask] = reactExports.useState(null);
  const [isRefreshing, setIsRefreshing] = reactExports.useState(false);
  const [filterProject, setFilterProject] = reactExports.useState("all");
  const [filterMember, setFilterMember] = reactExports.useState("all");
  const [filterPriority, setFilterPriority] = reactExports.useState("all");
  const projectNames = reactExports.useMemo(
    () => [
      ...new Set(executionTasks.map((t) => t.projectName).filter(Boolean))
    ],
    []
  );
  const memberNames = reactExports.useMemo(
    () => [
      ...new Set(executionTasks.map((t) => t.assigneeName).filter(Boolean))
    ],
    []
  );
  const filteredTasks = reactExports.useMemo(
    () => tasks.filter((t) => {
      if (filterProject !== "all" && t.projectName !== filterProject)
        return false;
      if (filterMember !== "all" && t.assigneeName !== filterMember)
        return false;
      if (filterPriority !== "all" && t.priority !== filterPriority)
        return false;
      return true;
    }),
    [tasks, filterProject, filterMember, filterPriority]
  );
  const totalTasks = filteredTasks.length;
  const inProgressCount = filteredTasks.filter(
    (t) => t.status === "in-progress"
  ).length;
  const blockedCount = filteredTasks.filter(
    (t) => t.status === "blocked"
  ).length;
  const doneCount = filteredTasks.filter((t) => t.status === "done").length;
  const completionPct = totalTasks > 0 ? Math.round(doneCount / totalTasks * 100) : 0;
  const tasksByStatus = reactExports.useMemo(
    () => KANBAN_COLUMNS.reduce((acc, col) => {
      acc[col.id] = filteredTasks.filter((t) => t.status === col.id);
      return acc;
    }, {}),
    [filteredTasks]
  );
  const handleRefresh = reactExports.useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1200);
  }, []);
  const handleClearFilters = reactExports.useCallback(() => {
    setFilterProject("all");
    setFilterMember("all");
    setFilterPriority("all");
  }, []);
  const handleDeleteTask = reactExports.useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const handleDismissAlert = reactExports.useCallback((id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  }, []);
  const hasActiveFilters = filterProject !== "all" || filterMember !== "all" || filterPriority !== "all";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 p-4 md:p-6 min-h-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Execution Control",
        subtitle: "Real-time operational overview across all active projects",
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: handleRefresh,
            className: "gap-1.5 h-8 text-xs",
            "data-ocid": "execution-refresh-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RefreshCw,
                {
                  size: 13,
                  className: isRefreshing ? "animate-spin" : ""
                }
              ),
              "Refresh"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-warning/8 border border-warning/20 text-[13px] text-warning font-medium",
        "data-ocid": "mock-data-alert",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 14, className: "flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Using sample data — connect to API for live updates" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      FilterBar,
      {
        onRefresh: handleRefresh,
        onClear: hasActiveFilters ? handleClearFilters : void 0,
        isRefreshing,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterProject, onValueChange: setFilterProject, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-xs w-full sm:w-44",
                "data-ocid": "filter-project-select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Projects" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Projects" }),
              projectNames.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: name, children: name }, name))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterMember, onValueChange: setFilterMember, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-xs w-full sm:w-40",
                "data-ocid": "filter-member-select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Members" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Members" }),
              memberNames.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: name, children: name }, name))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterPriority, onValueChange: setFilterPriority, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-xs w-full sm:w-36",
                "data-ocid": "filter-priority-select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Priorities" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Priorities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "critical", children: "Critical" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Total Tasks",
          value: totalTasks,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { size: 15 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "In Progress",
          value: inProgressCount,
          trend: "neutral",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 15 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "At Risk",
          value: blockedCount,
          trend: blockedCount > 0 ? "down" : "neutral",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { size: 15 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          label: "Completion",
          value: `${completionPct}%`,
          trend: completionPct > 50 ? "up" : "neutral",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 15 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionCard,
      {
        title: "Task Status Board",
        headerAction: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            filteredTasks.length,
            " task",
            filteredTasks.length !== 1 ? "s" : ""
          ] }),
          blockedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive/12 text-destructive text-[10px] font-semibold border border-destructive/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { size: 10 }),
            blockedCount,
            " blocked"
          ] })
        ] }),
        noPadding: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "overflow-x-auto pb-1 scrollbar-thin",
            "data-ocid": "kanban-board",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 p-3 min-w-max", children: KANBAN_COLUMNS.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              KanbanColumn,
              {
                column: col,
                tasks: tasksByStatus[col.id] ?? [],
                onTaskClick: setSelectedTask
              },
              col.id
            )) })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionCard,
          {
            title: "Project Health",
            headerAction: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              projectHealthData.length,
              " projects"
            ] }),
            noPadding: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "divide-y divide-border",
                "data-ocid": "project-health-list",
                children: projectHealthData.map((proj) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-4 py-3.5 hover:bg-muted/30 transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground truncate leading-tight", children: proj.projectName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                            proj.completedTasks,
                            "/",
                            proj.totalTasks,
                            " tasks",
                            proj.daysRemaining > 0 && ` · ${proj.daysRemaining}d left`,
                            proj.daysRemaining < 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-destructive font-medium", children: [
                              " ",
                              "· ",
                              Math.abs(proj.daysRemaining),
                              "d overdue"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                          proj.blockers > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-warning font-medium bg-warning/10 px-1.5 py-0.5 rounded border border-warning/20", children: [
                            proj.blockers,
                            " blocker",
                            proj.blockers > 1 ? "s" : ""
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(HealthStatusBadge, { status: proj.status })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: cn(
                              "h-full rounded-full transition-all duration-700",
                              proj.status === "green" && "bg-success",
                              proj.status === "yellow" && "bg-warning",
                              proj.status === "red" && "bg-destructive"
                            ),
                            style: { width: `${proj.progress}%` }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-muted-foreground w-8 text-right flex-shrink-0", children: [
                          proj.progress,
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  proj.projectId
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionCard,
          {
            title: "Team Load",
            headerAction: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12 }),
              teamLoadData.length,
              " members"
            ] }),
            noPadding: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", "data-ocid": "team-load-list", children: teamLoadData.map((member) => {
              const cappedPct = Math.min(member.utilizationPct, 150);
              const overloaded = member.utilizationPct > 100;
              const heavy = member.utilizationPct >= 85;
              const barFill = cappedPct / 150 * 100;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarChip, { name: member.memberName, size: "md" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground truncate leading-tight", children: member.memberName }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0 ml-2", children: [
                          overloaded && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TriangleAlert,
                            {
                              size: 11,
                              className: "text-destructive"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: cn(
                                "text-[11px] font-bold",
                                overloaded ? "text-destructive" : heavy ? "text-warning" : "text-success"
                              ),
                              children: [
                                member.utilizationPct,
                                "%"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
                            member.activeTasks,
                            "/",
                            member.maxCapacity
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: cn(
                            "h-full rounded-full transition-all duration-700",
                            overloaded ? "bg-destructive" : heavy ? "bg-warning" : "bg-success"
                          ),
                          style: { width: `${barFill}%` }
                        }
                      ) })
                    ] })
                  ]
                },
                member.memberId
              );
            }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionCard,
          {
            title: "Alerts",
            headerAction: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: cn(
                  "inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border",
                  alerts.length > 0 ? "bg-destructive/10 text-destructive border-destructive/20" : "bg-muted text-muted-foreground border-border"
                ),
                children: [
                  alerts.length,
                  " active"
                ]
              }
            ),
            noPadding: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1.5", "data-ocid": "alerts-panel", children: alerts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 px-4 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 28, className: "text-success/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "All clear — no active alerts" })
            ] }) : alerts.map((alert) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertRow,
              {
                alert,
                onDismiss: handleDismissAlert
              },
              alert.id
            )) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionCard,
          {
            title: "Bottleneck Detection",
            headerAction: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-warning bg-warning/10 px-2 py-0.5 rounded-full border border-warning/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 9 }),
              BOTTLENECKS.length,
              " detected"
            ] }),
            noPadding: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", "data-ocid": "bottleneck-list", children: BOTTLENECKS.map((bn) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-4 py-3.5 hover:bg-muted/30 transition-colors",
                "data-ocid": `bottleneck-${bn.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground leading-snug", children: bn.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-[10px] flex-shrink-0 leading-none",
                        children: bn.area
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground leading-relaxed mb-2", children: bn.impact }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "inline-flex items-center gap-1 text-[12px] text-primary font-semibold hover:underline transition-colors",
                      "data-ocid": `bottleneck-action-${bn.id}`,
                      children: [
                        bn.action,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 11 })
                      ]
                    }
                  )
                ]
              },
              bn.id
            )) })
          }
        )
      ] })
    ] }),
    selectedTask && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TaskDetailDialog,
      {
        task: selectedTask,
        onClose: () => setSelectedTask(null),
        onDelete: handleDeleteTask
      }
    )
  ] });
}
export {
  Execution as default
};
