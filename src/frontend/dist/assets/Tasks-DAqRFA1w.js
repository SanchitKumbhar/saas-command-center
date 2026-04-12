import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, o as cn, _ as Plus, $ as ue, d as Badge, D as Dialog, v as DialogContent, w as DialogHeader, x as DialogTitle, i as Label, I as Input, T as Textarea, y as DialogFooter, Z as ScrollArea, h as User, a5 as Separator } from "./index-C4CKXjXp.js";
import { E as EmptyState } from "./EmptyState-ZlpUrdjq.js";
import { F as FilterBar } from "./FilterBar-CHXHbbMO.js";
import { P as PageHeader, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-B6RXNDin.js";
import { S as StatusBadge } from "./StatusBadge-gn_ynDox.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CWoRJUYW.js";
import { P as Pencil } from "./pencil-BmQJMJB-.js";
import { T as Trash2 } from "./trash-2-DXVP-fAP.js";
import { C as ChevronRight, G as GripVertical } from "./grip-vertical-7NtAFA8f.js";
import { C as CalendarDays } from "./calendar-days-CuWg3qab.js";
import { M as Minus } from "./minus-Dw6Dv1p-.js";
import { C as CircleAlert } from "./circle-alert-C7wnz-RF.js";
import "./search-D5EmAB3J.js";
import "./refresh-cw-CWyKD-C3.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = createLucideIcon("arrow-up", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
];
const List = createLucideIcon("list", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }]
];
const SquareKanban = createLucideIcon("square-kanban", __iconNode);
const mockTasks = [
  {
    id: "task-1",
    title: "Implement token bucket rate limiting",
    description: "Add token bucket algorithm for API rate limiting on all v2 endpoints. Include burst allowance and proper 429 response headers.",
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
    estimatedHours: 12,
    completedHours: 7,
    comments: [
      {
        id: "c1",
        authorId: "member-3",
        authorName: "Marcus Webb",
        content: "Should we use Redis for the shared counter across instances?",
        createdAt: "2026-04-10T14:00:00Z"
      },
      {
        id: "c2",
        authorId: "member-1",
        authorName: "Sarah Chen",
        content: "Yes, using Redis Sorted Sets. PR in draft — will share EOD.",
        createdAt: "2026-04-10T15:30:00Z"
      }
    ]
  },
  {
    id: "task-2",
    title: "Security audit — auth service",
    description: "Complete the internal security checklist for the auth service before external pen test.",
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
    estimatedHours: 16,
    completedHours: 4,
    comments: [
      {
        id: "c3",
        authorId: "user-1",
        authorName: "Jordan Ellis",
        content: "What's blocking this? Need to escalate if it's the external vendor.",
        createdAt: "2026-04-11T09:00:00Z"
      }
    ]
  },
  {
    id: "task-3",
    title: "ETL pipeline schema migration",
    description: "Migrate all legacy ETL schemas to the new Spark-compatible format. Update 12 pipeline definitions.",
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
    estimatedHours: 40,
    completedHours: 28,
    comments: []
  },
  {
    id: "task-4",
    title: "Mobile onboarding — step 3 redesign",
    description: "Redesign the permissions request step with new illustration and clearer copy.",
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
    estimatedHours: 8,
    completedHours: 8,
    comments: [
      {
        id: "c4",
        authorId: "member-2",
        authorName: "Alex Rivera",
        content: "Looks great — just add the accessibility label on the skip button.",
        createdAt: "2026-04-12T10:00:00Z"
      }
    ]
  },
  {
    id: "task-5",
    title: "Stripe webhook test suite",
    description: "Write end-to-end tests for all 14 Stripe webhook event types including payment_intent and subscription events.",
    status: "todo",
    priority: "medium",
    assigneeId: "member-1",
    assigneeName: "Sarah Chen",
    projectId: "proj-1",
    projectName: "Payments Platform",
    dueDate: "2026-04-18T00:00:00Z",
    createdAt: "2026-04-07T00:00:00Z",
    updatedAt: "2026-04-07T00:00:00Z",
    tags: ["testing", "payments"],
    estimatedHours: 8,
    completedHours: 0,
    comments: []
  },
  {
    id: "task-6",
    title: "Storybook component documentation",
    description: "Write comprehensive Storybook stories for all 24 design system components with usage examples.",
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
    estimatedHours: 12,
    completedHours: 12,
    comments: []
  },
  {
    id: "task-7",
    title: "SSO integration — Okta provider",
    description: "Integrate Okta as SAML 2.0 SSO provider for enterprise customers.",
    status: "todo",
    priority: "high",
    assigneeId: "member-3",
    assigneeName: "Marcus Webb",
    projectId: "proj-2",
    projectName: "Auth Redesign",
    dueDate: "2026-04-25T00:00:00Z",
    createdAt: "2026-04-08T00:00:00Z",
    updatedAt: "2026-04-08T00:00:00Z",
    tags: ["auth", "enterprise"],
    estimatedHours: 20,
    completedHours: 0,
    comments: []
  },
  {
    id: "task-8",
    title: "Real-time dashboard — WebSocket layer",
    description: "Add WebSocket support for live metric updates on the analytics dashboard.",
    status: "in-progress",
    priority: "high",
    assigneeId: "member-4",
    assigneeName: "Priya Nair",
    projectId: "proj-3",
    projectName: "Analytics Pipeline",
    dueDate: "2026-04-20T00:00:00Z",
    createdAt: "2026-04-06T00:00:00Z",
    updatedAt: "2026-04-12T00:00:00Z",
    tags: ["frontend", "realtime"],
    estimatedHours: 16,
    completedHours: 6,
    comments: []
  },
  {
    id: "task-9",
    title: "Push notification infrastructure",
    description: "Set up APNs + FCM infrastructure for mobile push notifications.",
    status: "todo",
    priority: "medium",
    assigneeId: "member-6",
    assigneeName: "Lin Zhao",
    projectId: "proj-4",
    projectName: "Mobile App v3",
    dueDate: "2026-04-28T00:00:00Z",
    createdAt: "2026-04-09T00:00:00Z",
    updatedAt: "2026-04-09T00:00:00Z",
    tags: ["mobile", "infrastructure"],
    estimatedHours: 10,
    completedHours: 0,
    comments: []
  },
  {
    id: "task-10",
    title: "Design token export to Figma",
    description: "Export all design tokens to Figma variables using Token Studio.",
    status: "done",
    priority: "low",
    assigneeId: "member-5",
    assigneeName: "Tom Okafor",
    projectId: "proj-5",
    projectName: "Design System",
    dueDate: "2026-04-05T00:00:00Z",
    createdAt: "2026-03-30T00:00:00Z",
    updatedAt: "2026-04-05T00:00:00Z",
    tags: ["design"],
    estimatedHours: 4,
    completedHours: 4,
    comments: []
  },
  {
    id: "task-11",
    title: "API gateway — request logging",
    description: "Add structured JSON logging to all API gateway requests with correlation IDs.",
    status: "review",
    priority: "medium",
    assigneeId: "member-4",
    assigneeName: "Priya Nair",
    projectId: "proj-1",
    projectName: "Payments Platform",
    dueDate: "2026-04-15T00:00:00Z",
    createdAt: "2026-04-04T00:00:00Z",
    updatedAt: "2026-04-11T00:00:00Z",
    tags: ["api", "observability"],
    estimatedHours: 6,
    completedHours: 6,
    comments: []
  },
  {
    id: "task-12",
    title: "MFA — TOTP implementation",
    description: "Add time-based OTP (Google Authenticator compatible) as second factor option.",
    status: "in-progress",
    priority: "high",
    assigneeId: "member-3",
    assigneeName: "Marcus Webb",
    projectId: "proj-2",
    projectName: "Auth Redesign",
    dueDate: "2026-04-22T00:00:00Z",
    createdAt: "2026-04-07T00:00:00Z",
    updatedAt: "2026-04-12T00:00:00Z",
    tags: ["auth", "security"],
    estimatedHours: 14,
    completedHours: 5,
    comments: []
  }
];
const priorityConfig = {
  critical: {
    label: "Critical",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 12, className: "text-destructive" }),
    className: "bg-destructive/10 text-destructive border-destructive/25"
  },
  high: {
    label: "High",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 12, className: "text-warning" }),
    className: "bg-warning/10 text-warning border-warning/25"
  },
  medium: {
    label: "Medium",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 12, className: "text-info" }),
    className: "bg-info/10 text-info border-info/25"
  },
  low: {
    label: "Low",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 12, className: "text-muted-foreground" }),
    className: "bg-muted text-muted-foreground border-border"
  }
};
const KANBAN_COLUMNS = [
  { status: "todo", label: "To Do" },
  { status: "in-progress", label: "In Progress" },
  { status: "review", label: "Review" },
  { status: "blocked", label: "Blocked" },
  { status: "done", label: "Done" }
];
function isOverdue(dueDate) {
  if (!dueDate) return false;
  return new Date(dueDate) < /* @__PURE__ */ new Date();
}
function formatDate(dueDate) {
  if (!dueDate) return "—";
  return new Date(dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}
function getInitials(name) {
  if (!name) return "?";
  return name.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2);
}
function generateId() {
  return `task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
function PriorityBadge({ priority }) {
  const cfg = priorityConfig[priority];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Badge,
    {
      variant: "outline",
      className: cn(
        "text-[10px] sm:text-xs px-1.5 py-0 h-5 font-medium border gap-1 items-center",
        cfg.className
      ),
      children: [
        cfg.icon,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: cfg.label })
      ]
    }
  );
}
function AssigneeAvatar({
  name,
  size = "sm"
}) {
  const dim = size === "md" ? "h-7 w-7 text-xs" : "h-6 w-6 text-[10px]";
  if (!name)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground flex-shrink-0",
          dim
        ),
        children: "?"
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary flex-shrink-0",
        dim
      ),
      title: name,
      children: getInitials(name)
    }
  );
}
const emptyForm = {
  title: "",
  description: "",
  assigneeName: "",
  status: "todo",
  priority: "medium",
  dueDate: ""
};
function taskToForm(task) {
  return {
    title: task.title,
    description: task.description ?? "",
    assigneeName: task.assigneeName ?? "",
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate ? task.dueDate.slice(0, 10) : ""
  };
}
function TaskFormDialog({
  open,
  onClose,
  initialValues = emptyForm,
  title,
  submitLabel,
  onSubmit
}) {
  const [form, setForm] = reactExports.useState(initialValues);
  const handleOpenChange = (isOpen) => {
    if (isOpen) setForm(initialValues);
    else onClose();
  };
  const handleSubmit = () => {
    if (!form.title.trim()) return;
    onSubmit(form);
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[92vw] sm:max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-base sm:text-lg font-semibold", children: title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "task-title", className: "text-sm font-medium", children: [
          "Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "task-title",
            placeholder: "Task name",
            value: form.title,
            onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
            className: "h-9 sm:h-10",
            "data-ocid": "task-form-title"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "task-description", className: "text-sm font-medium", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "task-description",
            placeholder: "What needs to be done?",
            rows: 3,
            value: form.description,
            onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })),
            "data-ocid": "task-form-description"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "task-assignee", className: "text-sm font-medium", children: "Assignee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "task-assignee",
            placeholder: "Assignee name",
            value: form.assigneeName,
            onChange: (e) => setForm((f) => ({ ...f, assigneeName: e.target.value })),
            className: "h-9 sm:h-10",
            "data-ocid": "task-form-assignee"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.status,
              onValueChange: (v) => setForm((f) => ({ ...f, status: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-9 sm:h-10",
                    "data-ocid": "task-form-status",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "todo", children: "To Do" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in-progress", children: "In Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "review", children: "Review" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", children: "Blocked" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "done", children: "Done" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Priority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.priority,
              onValueChange: (v) => setForm((f) => ({ ...f, priority: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-9 sm:h-10",
                    "data-ocid": "task-form-priority",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "critical", children: "Critical" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "task-due", className: "text-sm font-medium", children: "Due Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "task-due",
            type: "date",
            value: form.dueDate,
            onChange: (e) => setForm((f) => ({ ...f, dueDate: e.target.value })),
            className: "h-9 sm:h-10",
            "data-ocid": "task-form-due-date"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          onClick: handleSubmit,
          disabled: !form.title.trim(),
          className: "btn-lift",
          "data-ocid": "task-form-submit",
          children: submitLabel
        }
      )
    ] })
  ] }) });
}
function TaskDetailDialog({
  task,
  onClose,
  onEdit,
  onDelete,
  onAddComment
}) {
  const [commentInput, setCommentInput] = reactExports.useState("");
  if (!task) return null;
  const overdue = isOverdue(task.dueDate);
  const handlePostComment = () => {
    if (!commentInput.trim()) return;
    onAddComment(task.id, commentInput.trim());
    setCommentInput("");
  };
  const handleDelete = () => {
    if (window.confirm(`Delete "${task.title}"? This cannot be undone.`)) {
      onDelete(task.id);
      onClose();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!task, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[92vw] sm:max-w-xl max-h-[90vh] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-3 pr-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-sm sm:text-base leading-snug break-words font-semibold", children: task.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status, showDot: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority }),
        task.projectName && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "secondary",
            className: "text-[10px] h-5 px-1.5 font-normal",
            children: task.projectName
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-1 pb-2 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 p-3 bg-muted/30 rounded-lg border border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 13, className: "flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide font-medium mb-0.5", children: "Assignee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AssigneeAvatar, { name: task.assigneeName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: task.assigneeName ?? "Unassigned" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CalendarDays,
            {
              size: 13,
              className: cn(
                "flex-shrink-0",
                overdue ? "text-destructive" : "text-muted-foreground"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide font-medium mb-0.5", children: "Due Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: cn(
                  "text-xs font-medium",
                  overdue ? "text-destructive" : "text-foreground"
                ),
                children: [
                  formatDate(task.dueDate),
                  overdue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[10px] bg-destructive/15 text-destructive px-1.5 py-0.5 rounded-full font-semibold", children: "Overdue" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      task.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-overline text-muted-foreground", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: task.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 14, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-overline text-muted-foreground", children: [
            "Comments (",
            task.comments.length,
            ")"
          ] })
        ] }),
        task.comments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic py-2", children: "No comments yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: task.comments.map((comment) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AssigneeAvatar, { name: comment.authorName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 bg-muted/30 rounded-lg px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: comment.authorName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(comment.createdAt).toLocaleDateString(
                "en-US",
                { month: "short", day: "numeric" }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed break-words", children: comment.content })
          ] })
        ] }, comment.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              placeholder: "Add a comment...",
              rows: 2,
              value: commentInput,
              onChange: (e) => setCommentInput(e.target.value),
              "data-ocid": "task-detail-comment-input",
              className: "text-sm resize-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              onClick: handlePostComment,
              disabled: !commentInput.trim(),
              className: "btn-lift",
              "data-ocid": "task-detail-post-comment",
              children: "Post Comment"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { className: "flex-shrink-0 pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: () => {
            onClose();
            onEdit(task);
          },
          className: "gap-1.5",
          "data-ocid": "task-detail-edit-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 13 }),
            "Edit"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: handleDelete,
          className: "gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/10",
          "data-ocid": "task-detail-delete-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 }),
            "Delete"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: onClose,
          className: "ml-auto",
          "data-ocid": "task-detail-close-btn",
          children: "Close"
        }
      )
    ] }) })
  ] }) });
}
function KanbanCard({ task, onClick, onDragStart }) {
  const overdue = isOverdue(task.dueDate);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      draggable: true,
      onDragStart: () => onDragStart(task.id),
      onClick,
      className: cn(
        "group relative w-full text-left bg-card border border-border rounded-lg p-3 cursor-pointer",
        "hover:shadow-md hover:-translate-y-0.5 transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        overdue && "border-l-[3px] border-l-destructive"
      ),
      "data-ocid": `kanban-card-${task.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 mb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GripVertical,
            {
              size: 13,
              className: "text-muted-foreground/30 mt-0.5 flex-shrink-0 group-hover:text-muted-foreground/60 transition-colors"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm font-medium text-foreground leading-snug break-words flex-1 min-w-0", children: task.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            task.comments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-[10px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 10 }),
              task.comments.length
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AssigneeAvatar, { name: task.assigneeName }),
            task.dueDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-[10px] tabular-nums",
                  overdue ? "text-destructive font-semibold" : "text-muted-foreground"
                ),
                children: formatDate(task.dueDate)
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const COLUMN_HEADER_COLORS = {
  todo: "bg-muted-foreground/15 text-muted-foreground",
  "in-progress": "bg-info/15 text-info",
  review: "bg-warning/15 text-warning",
  blocked: "bg-destructive/15 text-destructive",
  done: "bg-success/15 text-success"
};
function KanbanColumn({
  status,
  label: _label,
  tasks,
  onCardClick,
  onDragStart,
  onDrop,
  onCreateClick
}) {
  const [dragOver, setDragOver] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col min-w-[240px] sm:min-w-[260px] flex-1 rounded-xl bg-muted/20 border border-border/50 p-3 min-h-[400px] transition-colors duration-150",
        dragOver && "bg-primary/5 border-primary/40 ring-1 ring-primary/20"
      ),
      onDragOver: (e) => {
        e.preventDefault();
        setDragOver(true);
      },
      onDragLeave: () => setDragOver(false),
      onDrop: () => {
        setDragOver(false);
        onDrop(status);
      },
      "data-ocid": `kanban-column-${status}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status, showDot: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-xs font-semibold px-1.5 py-0.5 rounded-md min-w-[20px] text-center tabular-nums",
                  COLUMN_HEADER_COLORS[status]
                ),
                children: tasks.length
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: onCreateClick,
              className: "h-6 w-6 p-0 text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth",
              "aria-label": "Add task",
              "data-ocid": `kanban-add-${status}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 flex-1", children: tasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center flex-1 py-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground/50" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60", children: "Drop here" })
        ] }) : tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          KanbanCard,
          {
            task,
            onClick: () => onCardClick(task),
            onDragStart
          },
          task.id
        )) })
      ]
    }
  );
}
function Tasks() {
  const [tasks, setTasks] = reactExports.useState(mockTasks);
  const [view, setView] = reactExports.useState("kanban");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [priorityFilter, setPriorityFilter] = reactExports.useState(
    "all"
  );
  const [memberFilter, setMemberFilter] = reactExports.useState("all");
  const [selectedTask, setSelectedTask] = reactExports.useState(null);
  const [createDialogOpen, setCreateDialogOpen] = reactExports.useState(false);
  const [editDialogOpen, setEditDialogOpen] = reactExports.useState(false);
  const [editingTask, setEditingTask] = reactExports.useState(null);
  const [draggingId, setDraggingId] = reactExports.useState(null);
  const assignees = Array.from(
    new Set(tasks.map((t) => t.assigneeName).filter((n) => !!n))
  ).sort();
  const filteredTasks = tasks.filter((task) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || task.title.toLowerCase().includes(q) || (task.assigneeName ?? "").toLowerCase().includes(q) || (task.description ?? "").toLowerCase().includes(q);
    const matchesStatus = statusFilter === "all" || task.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;
    const matchesMember = memberFilter === "all" || task.assigneeName === memberFilter;
    return matchesSearch && matchesStatus && matchesPriority && matchesMember;
  });
  const handleCreateTask = (form) => {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const newTask = {
      id: generateId(),
      title: form.title,
      description: form.description || void 0,
      status: form.status,
      priority: form.priority,
      assigneeName: form.assigneeName || void 0,
      dueDate: form.dueDate ? `${form.dueDate}T00:00:00Z` : void 0,
      createdAt: now,
      updatedAt: now,
      tags: [],
      comments: []
    };
    setTasks((prev) => [newTask, ...prev]);
    ue.success("Task created");
  };
  const handleUpdateTask = (form) => {
    if (!editingTask) return;
    setTasks(
      (prev) => prev.map(
        (t) => t.id === editingTask.id ? {
          ...t,
          title: form.title,
          description: form.description || void 0,
          status: form.status,
          priority: form.priority,
          assigneeName: form.assigneeName || void 0,
          dueDate: form.dueDate ? `${form.dueDate}T00:00:00Z` : void 0,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        } : t
      )
    );
    setSelectedTask(
      (prev) => (prev == null ? void 0 : prev.id) === editingTask.id ? {
        ...prev,
        title: form.title,
        description: form.description || void 0,
        status: form.status,
        priority: form.priority,
        assigneeName: form.assigneeName || void 0,
        dueDate: form.dueDate ? `${form.dueDate}T00:00:00Z` : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      } : prev
    );
    ue.success("Task updated");
  };
  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    ue.success("Task deleted");
  };
  const handleAddComment = (taskId, text) => {
    const comment = {
      id: generateId(),
      authorId: "user-current",
      authorName: "You",
      content: text,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setTasks(
      (prev) => prev.map(
        (t) => t.id === taskId ? { ...t, comments: [...t.comments, comment] } : t
      )
    );
    setSelectedTask(
      (prev) => (prev == null ? void 0 : prev.id) === taskId ? { ...prev, comments: [...prev.comments, comment] } : prev
    );
  };
  const handleDrop = (targetStatus) => {
    if (!draggingId) return;
    setTasks(
      (prev) => prev.map(
        (t) => t.id === draggingId ? { ...t, status: targetStatus, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } : t
      )
    );
    setDraggingId(null);
  };
  const openEditDialog = (task) => {
    setEditingTask(task);
    setEditDialogOpen(true);
  };
  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setPriorityFilter("all");
    setMemberFilter("all");
  };
  const hasActiveFilters = searchQuery || statusFilter !== "all" || priorityFilter !== "all" || memberFilter !== "all";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Tasks",
        subtitle: `${filteredTasks.length} of ${tasks.length} tasks`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center bg-muted/60 rounded-lg p-0.5 border border-border/60",
              "aria-label": "View toggle",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: view === "kanban" ? "secondary" : "ghost",
                    size: "sm",
                    onClick: () => setView("kanban"),
                    className: cn(
                      "h-7 px-2.5 gap-1.5 text-xs rounded-md transition-smooth",
                      view === "kanban" && "shadow-sm"
                    ),
                    "aria-pressed": view === "kanban",
                    "data-ocid": "view-toggle-kanban",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SquareKanban, { size: 13 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Kanban" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: view === "list" ? "secondary" : "ghost",
                    size: "sm",
                    onClick: () => setView("list"),
                    className: cn(
                      "h-7 px-2.5 gap-1.5 text-xs rounded-md transition-smooth",
                      view === "list" && "shadow-sm"
                    ),
                    "aria-pressed": view === "list",
                    "data-ocid": "view-toggle-list",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 13 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "List" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              size: "sm",
              onClick: () => setCreateDialogOpen(true),
              className: "gap-1.5 btn-lift",
              "data-ocid": "create-task-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New Task" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "New" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      FilterBar,
      {
        searchValue: searchQuery,
        searchPlaceholder: "Search tasks…",
        onSearchChange: setSearchQuery,
        onClear: hasActiveFilters ? clearFilters : void 0,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: statusFilter,
              onValueChange: (v) => setStatusFilter(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-8 text-xs w-32 sm:w-36",
                    "data-ocid": "filter-status",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Statuses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "todo", children: "To Do" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in-progress", children: "In Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "review", children: "Review" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", children: "Blocked" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "done", children: "Done" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: priorityFilter,
              onValueChange: (v) => setPriorityFilter(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-8 text-xs w-32 sm:w-36",
                    "data-ocid": "filter-priority",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Priority" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Priorities" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "critical", children: "Critical" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: memberFilter, onValueChange: setMemberFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-xs w-36 sm:w-40",
                "data-ocid": "filter-member",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assignee" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Members" }),
              assignees.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: name, children: name }, name))
            ] })
          ] })
        ]
      }
    ),
    view === "kanban" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-3 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-thin",
        "data-ocid": "kanban-board",
        children: KANBAN_COLUMNS.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          KanbanColumn,
          {
            status: col.status,
            label: col.label,
            tasks: filteredTasks.filter((t) => t.status === col.status),
            onCardClick: (task) => setSelectedTask(task),
            onDragStart: (id) => setDraggingId(id),
            onDrop: handleDrop,
            onCreateClick: () => setCreateDialogOpen(true)
          },
          col.status
        ))
      }
    ),
    view === "list" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-xl border border-border bg-card overflow-hidden shadow-sm",
        "data-ocid": "task-list-table",
        children: filteredTasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            title: "No tasks found",
            description: "Try adjusting your search or filters.",
            action: { label: "Clear filters", onClick: clearFilters }
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/30 hover:bg-muted/30 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-overline text-muted-foreground w-[40%] min-w-[180px] pl-4", children: "Task" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-overline text-muted-foreground min-w-[100px]", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-overline text-muted-foreground min-w-[90px]", children: "Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-overline text-muted-foreground min-w-[120px]", children: "Assignee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-overline text-muted-foreground min-w-[100px]", children: "Due Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-overline text-muted-foreground text-right min-w-[80px] pr-4", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredTasks.map((task, i) => {
            const overdue = isOverdue(task.dueDate);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                className: cn(
                  "cursor-pointer transition-smooth group",
                  overdue && "border-l-2 border-l-destructive",
                  i % 2 === 0 ? "bg-card" : "bg-muted/10"
                ),
                onClick: () => setSelectedTask(task),
                "data-ocid": `task-row-${task.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-3 pl-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground truncate max-w-[220px] sm:max-w-xs", children: task.title }),
                    task.projectName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: task.projectName })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status, showDot: true }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AssigneeAvatar, { name: task.assigneeName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate max-w-[80px] sm:max-w-[100px] hidden sm:block", children: task.assigneeName ?? "—" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: cn(
                        "text-xs tabular-nums",
                        overdue ? "text-destructive font-semibold" : "text-muted-foreground"
                      ),
                      children: [
                        formatDate(task.dueDate),
                        overdue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-[10px] bg-destructive/12 text-destructive px-1.5 py-0.5 rounded-full font-semibold hidden sm:inline", children: "Overdue" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      className: "text-right pr-4",
                      onClick: (e) => e.stopPropagation(),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-smooth", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: () => openEditDialog(task),
                            className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
                            "aria-label": "Edit task",
                            "data-ocid": `task-edit-${task.id}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 12 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: () => {
                              if (window.confirm(
                                `Delete "${task.title}"? This cannot be undone.`
                              )) {
                                handleDeleteTask(task.id);
                              }
                            },
                            className: "h-7 w-7 p-0 text-muted-foreground hover:text-destructive",
                            "aria-label": "Delete task",
                            "data-ocid": `task-delete-${task.id}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                          }
                        )
                      ] })
                    }
                  )
                ]
              },
              task.id
            );
          }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TaskFormDialog,
      {
        open: createDialogOpen,
        onClose: () => setCreateDialogOpen(false),
        title: "New Task",
        submitLabel: "Create Task",
        onSubmit: handleCreateTask
      }
    ),
    editingTask && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TaskFormDialog,
      {
        open: editDialogOpen,
        onClose: () => {
          setEditDialogOpen(false);
          setEditingTask(null);
        },
        initialValues: taskToForm(editingTask),
        title: "Edit Task",
        submitLabel: "Save Changes",
        onSubmit: handleUpdateTask
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TaskDetailDialog,
      {
        task: selectedTask,
        onClose: () => setSelectedTask(null),
        onEdit: (task) => {
          setSelectedTask(null);
          openEditDialog(task);
        },
        onDelete: handleDeleteTask,
        onAddComment: handleAddComment
      }
    )
  ] });
}
export {
  Tasks as default
};
