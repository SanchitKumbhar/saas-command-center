import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, _ as Plus, $ as ue, o as cn, a0 as DropdownMenu, a1 as DropdownMenuTrigger, a2 as DropdownMenuContent, a3 as DropdownMenuItem, a4 as DropdownMenuSeparator, U as Users, d as Badge, D as Dialog, v as DialogContent, w as DialogHeader, x as DialogTitle, i as Label, I as Input, T as Textarea, y as DialogFooter } from "./index-C4CKXjXp.js";
import { F as FilterBar } from "./FilterBar-CHXHbbMO.js";
import { P as PageHeader, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, e as ChevronUp, C as ChevronDown } from "./select-B6RXNDin.js";
import { S as StatusBadge } from "./StatusBadge-gn_ynDox.js";
import { E as Ellipsis } from "./ellipsis-YZpbMzW_.js";
import { P as Pencil } from "./pencil-BmQJMJB-.js";
import { T as Trash2 } from "./trash-2-DXVP-fAP.js";
import { C as CalendarDays } from "./calendar-days-CuWg3qab.js";
import { C as CircleCheck } from "./circle-check-DOINDs4j.js";
import { C as Circle } from "./circle-DM4Kj-2x.js";
import "./search-D5EmAB3J.js";
import "./refresh-cw-CWyKD-C3.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
];
const Archive = createLucideIcon("archive", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
];
const ArrowUpDown = createLucideIcon("arrow-up-down", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
];
const Flag = createLucideIcon("flag", __iconNode);
const mockProjects = [
  {
    id: "proj-1",
    name: "Payments Platform",
    description: "Rebuild the payments stack with Stripe v2 integration, webhook support, and sub-second latency.",
    status: "on-track",
    progress: 75,
    ownerId: "member-1",
    ownerName: "Sarah Chen",
    startDate: "2026-01-15T00:00:00Z",
    endDate: "2026-04-30T00:00:00Z",
    tags: ["api", "payments", "infrastructure"],
    taskCount: 24,
    completedTaskCount: 18,
    memberIds: ["member-1", "member-3", "member-6"],
    milestones: [
      {
        id: "ms-1",
        projectId: "proj-1",
        title: "API v2 design approved",
        dueDate: "2026-02-01T00:00:00Z",
        completed: true,
        order: 1
      },
      {
        id: "ms-2",
        projectId: "proj-1",
        title: "Stripe webhook integration complete",
        dueDate: "2026-03-15T00:00:00Z",
        completed: true,
        order: 2
      },
      {
        id: "ms-3",
        projectId: "proj-1",
        title: "Production load testing passed",
        dueDate: "2026-04-15T00:00:00Z",
        completed: false,
        order: 3
      },
      {
        id: "ms-4",
        projectId: "proj-1",
        title: "Full production rollout",
        dueDate: "2026-04-30T00:00:00Z",
        completed: false,
        order: 4
      }
    ]
  },
  {
    id: "proj-2",
    name: "Auth Redesign",
    description: "Modernize authentication with SSO, MFA, and a security-first architecture aligned with SOC 2.",
    status: "at-risk",
    progress: 30,
    ownerId: "member-3",
    ownerName: "Marcus Webb",
    startDate: "2026-02-01T00:00:00Z",
    endDate: "2026-04-15T00:00:00Z",
    tags: ["security", "auth", "infrastructure"],
    taskCount: 20,
    completedTaskCount: 6,
    memberIds: ["member-3", "member-4"],
    milestones: [
      {
        id: "ms-5",
        projectId: "proj-2",
        title: "Architecture review complete",
        dueDate: "2026-02-20T00:00:00Z",
        completed: true,
        order: 1
      },
      {
        id: "ms-6",
        projectId: "proj-2",
        title: "SSO integration shipped",
        dueDate: "2026-03-20T00:00:00Z",
        completed: false,
        order: 2
      },
      {
        id: "ms-7",
        projectId: "proj-2",
        title: "Security audit passed",
        dueDate: "2026-04-10T00:00:00Z",
        completed: false,
        order: 3
      }
    ]
  },
  {
    id: "proj-3",
    name: "Analytics Pipeline",
    description: "Migrate legacy ETL jobs to a scalable Spark-based pipeline with real-time dashboards.",
    status: "off-track",
    progress: 67,
    ownerId: "member-6",
    ownerName: "Lin Zhao",
    startDate: "2026-01-20T00:00:00Z",
    endDate: "2026-04-08T00:00:00Z",
    tags: ["data", "analytics", "infrastructure"],
    taskCount: 18,
    completedTaskCount: 12,
    memberIds: ["member-6", "member-3"],
    milestones: [
      {
        id: "ms-8",
        projectId: "proj-3",
        title: "Legacy ETL mapped",
        dueDate: "2026-02-15T00:00:00Z",
        completed: true,
        order: 1
      },
      {
        id: "ms-9",
        projectId: "proj-3",
        title: "Spark cluster deployed",
        dueDate: "2026-03-01T00:00:00Z",
        completed: true,
        order: 2
      },
      {
        id: "ms-10",
        projectId: "proj-3",
        title: "All pipelines migrated",
        dueDate: "2026-04-08T00:00:00Z",
        completed: false,
        order: 3
      }
    ]
  },
  {
    id: "proj-4",
    name: "Mobile App v3",
    description: "Complete redesign of the mobile app with a new design system and improved onboarding flow.",
    status: "on-track",
    progress: 79,
    ownerId: "member-5",
    ownerName: "Tom Okafor",
    startDate: "2026-02-10T00:00:00Z",
    endDate: "2026-05-10T00:00:00Z",
    tags: ["mobile", "design", "product"],
    taskCount: 28,
    completedTaskCount: 22,
    memberIds: ["member-5", "member-2", "member-4"],
    milestones: [
      {
        id: "ms-11",
        projectId: "proj-4",
        title: "Design system v3 complete",
        dueDate: "2026-03-01T00:00:00Z",
        completed: true,
        order: 1
      },
      {
        id: "ms-12",
        projectId: "proj-4",
        title: "Onboarding flow shipped",
        dueDate: "2026-04-20T00:00:00Z",
        completed: false,
        order: 2
      },
      {
        id: "ms-13",
        projectId: "proj-4",
        title: "App store submission",
        dueDate: "2026-05-10T00:00:00Z",
        completed: false,
        order: 3
      }
    ]
  },
  {
    id: "proj-5",
    name: "Design System",
    description: "Build and document a comprehensive design system with React component library and Storybook.",
    status: "completed",
    progress: 94,
    ownerId: "member-5",
    ownerName: "Tom Okafor",
    startDate: "2025-11-01T00:00:00Z",
    endDate: "2026-04-15T00:00:00Z",
    tags: ["design", "frontend", "docs"],
    taskCount: 16,
    completedTaskCount: 15,
    memberIds: ["member-5", "member-2"],
    milestones: [
      {
        id: "ms-14",
        projectId: "proj-5",
        title: "Component library v1",
        dueDate: "2026-01-15T00:00:00Z",
        completed: true,
        order: 1
      },
      {
        id: "ms-15",
        projectId: "proj-5",
        title: "Storybook published",
        dueDate: "2026-03-01T00:00:00Z",
        completed: true,
        order: 2
      },
      {
        id: "ms-16",
        projectId: "proj-5",
        title: "Final documentation",
        dueDate: "2026-04-15T00:00:00Z",
        completed: false,
        order: 3
      }
    ]
  }
];
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function toInputDate(iso) {
  return iso.split("T")[0];
}
function projectInitial(name) {
  return name.charAt(0).toUpperCase();
}
const PROJECT_COLORS = {
  "proj-1": "bg-primary text-primary-foreground",
  "proj-2": "bg-success text-primary-foreground",
  "proj-3": "bg-warning text-primary-foreground",
  "proj-4": "bg-info text-primary-foreground",
  "proj-5": "bg-destructive text-destructive-foreground"
};
function getProjectColorClass(id) {
  return PROJECT_COLORS[id] ?? "bg-primary text-primary-foreground";
}
function getProgressColor(status) {
  if (status === "on-track" || status === "completed") return "bg-success";
  if (status === "at-risk") return "bg-warning";
  if (status === "off-track") return "bg-destructive";
  return "bg-muted-foreground";
}
function getAccentColor(status) {
  if (status === "on-track" || status === "completed") return "bg-success";
  if (status === "at-risk") return "bg-warning";
  if (status === "off-track") return "bg-destructive";
  return "bg-muted-foreground/40";
}
function toMilestoneWithStatus(m) {
  return {
    ...m,
    status: m.completed ? "completed" : "not-started"
  };
}
const TEAM_MEMBERS = [
  { id: "member-1", name: "Sarah Chen" },
  { id: "member-2", name: "Priya Sharma" },
  { id: "member-3", name: "Marcus Webb" },
  { id: "member-4", name: "James Liu" },
  { id: "member-5", name: "Tom Okafor" },
  { id: "member-6", name: "Lin Zhao" }
];
const MEMBER_COLORS = [
  "bg-primary/20 text-primary",
  "bg-success/20 text-success",
  "bg-warning/20 text-warning",
  "bg-info/20 text-info",
  "bg-destructive/20 text-destructive",
  "bg-accent/20 text-accent-foreground"
];
function getMemberColor(index) {
  return MEMBER_COLORS[index % MEMBER_COLORS.length];
}
function getInitials(name) {
  return name.split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2);
}
function MemberAvatars({ memberIds }) {
  const visible = memberIds.slice(0, 3);
  const extra = memberIds.length - 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center -space-x-1.5", children: [
    visible.map((id, i) => {
      const member = TEAM_MEMBERS.find((m) => m.id === id);
      const colorClass = getMemberColor(i);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          title: member == null ? void 0 : member.name,
          className: cn(
            "w-6 h-6 rounded-full border-2 border-card flex items-center justify-center text-[9px] font-bold flex-shrink-0",
            colorClass
          ),
          children: member ? getInitials(member.name) : "?"
        },
        id
      );
    }),
    extra > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-6 h-6 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[9px] font-semibold text-muted-foreground flex-shrink-0", children: [
      "+",
      extra
    ] })
  ] });
}
function AddProjectDialog({ open, onClose, onAdd }) {
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [ownerId, setOwnerId] = reactExports.useState("");
  const [startDate, setStartDate] = reactExports.useState("");
  const [endDate, setEndDate] = reactExports.useState("");
  const [nameError, setNameError] = reactExports.useState(false);
  function handleSubmit() {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    const owner = TEAM_MEMBERS.find((m) => m.id === ownerId);
    const newProject = {
      id: `proj-${Date.now()}`,
      name: name.trim(),
      description: description.trim(),
      status: "on-track",
      progress: 0,
      ownerId: ownerId || "member-1",
      ownerName: (owner == null ? void 0 : owner.name) ?? "Sarah Chen",
      startDate: startDate ? `${startDate}T00:00:00Z` : (/* @__PURE__ */ new Date()).toISOString(),
      endDate: endDate ? `${endDate}T00:00:00Z` : (/* @__PURE__ */ new Date()).toISOString(),
      milestones: [],
      tags: [],
      taskCount: 0,
      completedTaskCount: 0,
      memberIds: ownerId ? [ownerId] : []
    };
    onAdd(newProject);
    setName("");
    setDescription("");
    setOwnerId("");
    setStartDate("");
    setEndDate("");
    setNameError(false);
    onClose();
    ue.success(`Project "${newProject.name}" created`);
  }
  function handleClose() {
    setName("");
    setDescription("");
    setOwnerId("");
    setStartDate("");
    setEndDate("");
    setNameError(false);
    onClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && handleClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[92vw] sm:max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-base sm:text-lg font-semibold", children: "New Project" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "proj-name", className: "text-sm font-medium", children: [
          "Project Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "proj-name",
            placeholder: "e.g. Payments Platform v3",
            value: name,
            onChange: (e) => {
              setName(e.target.value);
              setNameError(false);
            },
            className: cn(
              "h-9 sm:h-10",
              nameError && "border-destructive focus-visible:ring-destructive"
            ),
            "data-ocid": "add-project-name"
          }
        ),
        nameError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Project name is required." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "proj-desc", className: "text-sm font-medium", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "proj-desc",
            placeholder: "Briefly describe the project goal…",
            value: description,
            onChange: (e) => setDescription(e.target.value),
            rows: 3,
            "data-ocid": "add-project-description"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "proj-owner", className: "text-sm font-medium", children: "Owner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: ownerId, onValueChange: setOwnerId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              id: "proj-owner",
              className: "h-9 sm:h-10",
              "data-ocid": "add-project-owner",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select owner" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TEAM_MEMBERS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.id, children: m.name }, m.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "proj-start", className: "text-sm font-medium", children: "Start Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "proj-start",
              type: "date",
              value: startDate,
              onChange: (e) => setStartDate(e.target.value),
              className: "h-9 sm:h-10",
              "data-ocid": "add-project-start-date"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "proj-end", className: "text-sm font-medium", children: "End Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "proj-end",
              type: "date",
              value: endDate,
              onChange: (e) => setEndDate(e.target.value),
              className: "h-9 sm:h-10",
              "data-ocid": "add-project-end-date"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "pt-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: handleClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          onClick: handleSubmit,
          className: "btn-lift",
          "data-ocid": "add-project-submit",
          children: "Create Project"
        }
      )
    ] })
  ] }) });
}
function EditProjectDialog({
  open,
  project,
  onClose,
  onSave
}) {
  const [name, setName] = reactExports.useState((project == null ? void 0 : project.name) ?? "");
  const [description, setDescription] = reactExports.useState((project == null ? void 0 : project.description) ?? "");
  const [ownerId, setOwnerId] = reactExports.useState((project == null ? void 0 : project.ownerId) ?? "");
  const [startDate, setStartDate] = reactExports.useState(
    (project == null ? void 0 : project.startDate) ? toInputDate(project.startDate) : ""
  );
  const [endDate, setEndDate] = reactExports.useState(
    (project == null ? void 0 : project.endDate) ? toInputDate(project.endDate) : ""
  );
  const [nameError, setNameError] = reactExports.useState(false);
  const handleOpenChange = (isOpen) => {
    if (isOpen && project) {
      setName(project.name);
      setDescription(project.description ?? "");
      setOwnerId(project.ownerId ?? "");
      setStartDate(project.startDate ? toInputDate(project.startDate) : "");
      setEndDate(project.endDate ? toInputDate(project.endDate) : "");
      setNameError(false);
    }
    if (!isOpen) onClose();
  };
  function handleSubmit() {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    if (!project) return;
    const owner = TEAM_MEMBERS.find((m) => m.id === ownerId);
    const updated = {
      ...project,
      name: name.trim(),
      description: description.trim(),
      ownerId: ownerId || project.ownerId,
      ownerName: (owner == null ? void 0 : owner.name) ?? project.ownerName,
      startDate: startDate ? `${startDate}T00:00:00Z` : project.startDate,
      endDate: endDate ? `${endDate}T00:00:00Z` : project.endDate
    };
    onSave(updated);
    onClose();
    ue.success(`Project "${updated.name}" updated`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[92vw] sm:max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-base sm:text-lg font-semibold", children: "Edit Project" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "edit-proj-name", className: "text-sm font-medium", children: [
          "Project Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "edit-proj-name",
            placeholder: "e.g. Payments Platform v3",
            value: name,
            onChange: (e) => {
              setName(e.target.value);
              setNameError(false);
            },
            className: cn(
              "h-9 sm:h-10",
              nameError && "border-destructive focus-visible:ring-destructive"
            ),
            "data-ocid": "edit-project-name"
          }
        ),
        nameError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Project name is required." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-proj-desc", className: "text-sm font-medium", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "edit-proj-desc",
            placeholder: "Briefly describe the project goal…",
            value: description,
            onChange: (e) => setDescription(e.target.value),
            rows: 3,
            "data-ocid": "edit-project-description"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-proj-owner", className: "text-sm font-medium", children: "Owner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: ownerId, onValueChange: setOwnerId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              id: "edit-proj-owner",
              className: "h-9 sm:h-10",
              "data-ocid": "edit-project-owner",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select owner" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TEAM_MEMBERS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m.id, children: m.name }, m.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-proj-start", className: "text-sm font-medium", children: "Start Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "edit-proj-start",
              type: "date",
              value: startDate,
              onChange: (e) => setStartDate(e.target.value),
              className: "h-9 sm:h-10",
              "data-ocid": "edit-project-start-date"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-proj-end", className: "text-sm font-medium", children: "End Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "edit-proj-end",
              type: "date",
              value: endDate,
              onChange: (e) => setEndDate(e.target.value),
              className: "h-9 sm:h-10",
              "data-ocid": "edit-project-end-date"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "pt-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          onClick: handleSubmit,
          className: "btn-lift",
          "data-ocid": "edit-project-submit",
          children: "Save Changes"
        }
      )
    ] })
  ] }) });
}
function AddMilestoneDialog({
  open,
  projectId,
  onClose,
  onAdd
}) {
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [dueDate, setDueDate] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("not-started");
  const [titleError, setTitleError] = reactExports.useState(false);
  function handleSubmit() {
    if (!title.trim()) {
      setTitleError(true);
      return;
    }
    const milestone = {
      id: `ms-${Date.now()}`,
      projectId,
      title: title.trim(),
      description: description.trim(),
      dueDate: dueDate ? `${dueDate}T00:00:00Z` : (/* @__PURE__ */ new Date()).toISOString(),
      completed: status === "completed",
      order: 99,
      status
    };
    onAdd(projectId, milestone);
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("not-started");
    setTitleError(false);
    onClose();
    ue.success(`Milestone "${milestone.title}" added`);
  }
  function handleClose() {
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("not-started");
    setTitleError(false);
    onClose();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && handleClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[92vw] sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-base sm:text-lg font-semibold", children: "Add Milestone" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ms-title", className: "text-sm font-medium", children: [
          "Milestone Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ms-title",
            placeholder: "e.g. Beta launch",
            value: title,
            onChange: (e) => {
              setTitle(e.target.value);
              setTitleError(false);
            },
            className: cn(
              "h-9 sm:h-10",
              titleError && "border-destructive focus-visible:ring-destructive"
            ),
            "data-ocid": "add-milestone-title"
          }
        ),
        titleError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Milestone name is required." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ms-desc", className: "text-sm font-medium", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "ms-desc",
            placeholder: "Optional context…",
            value: description,
            onChange: (e) => setDescription(e.target.value),
            rows: 2
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ms-due", className: "text-sm font-medium", children: "Due Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "ms-due",
              type: "date",
              value: dueDate,
              onChange: (e) => setDueDate(e.target.value),
              className: "h-9 sm:h-10",
              "data-ocid": "add-milestone-due-date"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ms-status", className: "text-sm font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: status,
              onValueChange: (v) => setStatus(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    id: "ms-status",
                    className: "h-9 sm:h-10",
                    "data-ocid": "add-milestone-status",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "not-started", children: "Not Started" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in-progress", children: "In Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "completed", children: "Completed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", children: "Blocked" })
                ] })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "pt-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: handleClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          onClick: handleSubmit,
          className: "btn-lift",
          "data-ocid": "add-milestone-submit",
          children: "Add Milestone"
        }
      )
    ] })
  ] }) });
}
function MilestoneRow({ milestone, onEdit, onDelete }) {
  const [editing, setEditing] = reactExports.useState(false);
  const [editTitle, setEditTitle] = reactExports.useState(milestone.title);
  const [editDate, setEditDate] = reactExports.useState(toInputDate(milestone.dueDate));
  const [editStatus, setEditStatus] = reactExports.useState(
    milestone.status
  );
  function handleSave() {
    onEdit(milestone.id, {
      title: editTitle.trim() || milestone.title,
      dueDate: editDate ? `${editDate}T00:00:00Z` : milestone.dueDate,
      status: editStatus,
      completed: editStatus === "completed"
    });
    setEditing(false);
  }
  function handleCancel() {
    setEditTitle(milestone.title);
    setEditDate(toInputDate(milestone.dueDate));
    setEditStatus(milestone.status);
    setEditing(false);
  }
  const statusMap = {
    "not-started": "todo",
    "in-progress": "in-progress",
    completed: "done",
    blocked: "blocked"
  };
  if (editing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 px-3 py-2.5 rounded-lg bg-muted/60 border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "h-7 text-xs sm:text-sm flex-1 min-w-[120px]",
          value: editTitle,
          onChange: (e) => setEditTitle(e.target.value),
          "data-ocid": "milestone-edit-title"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "date",
          className: "h-7 text-xs sm:text-sm w-32 sm:w-36",
          value: editDate,
          onChange: (e) => setEditDate(e.target.value),
          "data-ocid": "milestone-edit-date"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: editStatus,
          onValueChange: (v) => setEditStatus(v),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-7 text-xs w-28 sm:w-32",
                "data-ocid": "milestone-edit-status",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "not-started", children: "Not Started" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in-progress", children: "In Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "completed", children: "Completed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", children: "Blocked" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "sm",
            className: "h-7 px-2.5 text-xs",
            onClick: handleSave,
            "data-ocid": "milestone-save",
            children: "Save"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "sm",
            variant: "ghost",
            className: "h-7 px-2.5 text-xs",
            onClick: handleCancel,
            children: "Cancel"
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/40 transition-smooth",
      "data-ocid": `milestone-row-${milestone.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 text-muted-foreground", children: milestone.completed ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-success" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "flex-1 text-xs sm:text-sm font-medium truncate",
              milestone.completed && "line-through text-muted-foreground"
            ),
            children: milestone.title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap hidden sm:block", children: formatDate(milestone.dueDate) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatusBadge,
          {
            status: statusMap[milestone.status]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
              onClick: () => setEditing(true),
              "aria-label": "Edit milestone",
              "data-ocid": `milestone-edit-${milestone.id}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              className: "h-7 w-7 p-0 text-muted-foreground hover:text-destructive",
              onClick: () => onDelete(milestone.id),
              "aria-label": "Delete milestone",
              "data-ocid": `milestone-delete-${milestone.id}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ]
    }
  );
}
function ProjectCard({
  project,
  milestones,
  onDelete,
  onEdit,
  onArchive,
  onAddMilestone,
  onEditMilestone,
  onDeleteMilestone
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const [sortAsc, setSortAsc] = reactExports.useState(true);
  const sortedMilestones = reactExports.useMemo(() => {
    return [...milestones].sort((a, b) => {
      const diff = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      return sortAsc ? diff : -diff;
    });
  }, [milestones, sortAsc]);
  const completedCount = milestones.filter((m) => m.completed).length;
  const accentColor = getAccentColor(project.status);
  const progressColor = getProgressColor(project.status);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "card-interactive rounded-xl overflow-hidden flex flex-col",
        "transition-all duration-200",
        expanded && "shadow-sm"
      ),
      "data-ocid": `project-card-${project.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-0.5 w-full flex-shrink-0", accentColor) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm",
                    getProjectColorClass(project.id)
                  ),
                  children: projectInitial(project.name)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-base font-semibold text-foreground truncate leading-snug tracking-tight", children: project.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: project.ownerName })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: project.status }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "ghost",
                    className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground transition-smooth",
                    "aria-label": "Project options",
                    "data-ocid": `project-menu-${project.id}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "w-4 h-4" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-44", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownMenuItem,
                    {
                      onClick: () => onEdit(project.id),
                      "data-ocid": `project-edit-${project.id}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5 mr-2" }),
                        "Edit Project"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownMenuItem,
                    {
                      onClick: () => onArchive(project.id),
                      "data-ocid": `project-archive-${project.id}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-3.5 h-3.5 mr-2" }),
                        "Archive"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownMenuItem,
                    {
                      onClick: () => onDelete(project.id),
                      className: "text-destructive focus:text-destructive focus:bg-destructive/10",
                      "data-ocid": `project-delete-${project.id}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5 mr-2" }),
                        "Delete Project"
                      ]
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          project.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2", children: project.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: "Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold tabular-nums text-foreground", children: [
                project.progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "h-full rounded-full transition-all duration-500",
                  progressColor
                ),
                style: { width: `${project.progress}%` }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  completedCount,
                  "/",
                  milestones.length
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline truncate max-w-[110px]", children: formatDate(project.endDate) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: new Date(project.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatars, { memberIds: project.memberIds }),
              project.memberIds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
                project.memberIds.length
              ] })
            ] })
          ] }),
          project.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-3", children: project.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "text-[10px] px-1.5 py-0 font-normal h-4",
              children: tag
            },
            tag
          )) }),
          milestones.length > 0 && !expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-3 flex-wrap", children: [
            milestones.slice(0, 8).map((ms) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                title: ms.title,
                className: cn(
                  "w-2 h-2 rounded-full flex-shrink-0",
                  ms.completed ? "bg-success" : ms.status === "blocked" ? "bg-destructive" : ms.status === "in-progress" ? "bg-info" : "bg-border"
                )
              },
              ms.id
            )),
            milestones.length > 8 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              "+",
              milestones.length - 8
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              className: "w-full h-7 text-xs text-muted-foreground hover:text-foreground gap-1.5 mt-auto transition-smooth",
              onClick: () => setExpanded((v) => !v),
              "data-ocid": `project-expand-${project.id}`,
              children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }),
                " Collapse"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" }),
                " Show Details"
              ] })
            }
          )
        ] }),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-muted/20 px-4 sm:px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-overline text-muted-foreground", children: [
              "Milestones (",
              milestones.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  size: "sm",
                  variant: "ghost",
                  className: "h-6 px-2 text-xs text-muted-foreground gap-1",
                  onClick: () => setSortAsc((v) => !v),
                  "data-ocid": `milestone-sort-${project.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "w-3 h-3" }),
                    sortAsc ? "Oldest" : "Newest"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  size: "sm",
                  variant: "outline",
                  className: "h-6 px-2 text-xs gap-1 btn-lift",
                  onClick: () => onAddMilestone(project.id),
                  "data-ocid": `add-milestone-btn-${project.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                    " Add"
                  ]
                }
              )
            ] })
          ] }),
          sortedMilestones.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-xs text-muted-foreground", children: "No milestones yet — add one to track progress." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 min-w-[280px] px-1", children: sortedMilestones.map((ms) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            MilestoneRow,
            {
              milestone: ms,
              onEdit: (msId, updates) => onEditMilestone(project.id, msId, updates),
              onDelete: (msId) => onDeleteMilestone(project.id, msId)
            },
            ms.id
          )) }) })
        ] })
      ]
    }
  );
}
function Projects() {
  const [projects, setProjects] = reactExports.useState(
    () => mockProjects.map((p) => ({
      ...p,
      milestones: p.milestones.map(toMilestoneWithStatus)
    }))
  );
  const [milestonesMap, setMilestonesMap] = reactExports.useState(() => {
    const map = {};
    for (const p of mockProjects) {
      map[p.id] = p.milestones.map(toMilestoneWithStatus);
    }
    return map;
  });
  const [addProjectOpen, setAddProjectOpen] = reactExports.useState(false);
  const [addMilestoneForProject, setAddMilestoneForProject] = reactExports.useState(null);
  const [editingProject, setEditingProject] = reactExports.useState(null);
  const [statusFilter, setStatusFilter] = reactExports.useState(
    "all"
  );
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filteredProjects = reactExports.useMemo(() => {
    return projects.filter((p) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || (p.description ?? "").toLowerCase().includes(q) || p.ownerName.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "all" || p.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [projects, statusFilter, searchQuery]);
  function handleAddProject(project) {
    setProjects((prev) => [project, ...prev]);
    setMilestonesMap((prev) => ({ ...prev, [project.id]: [] }));
  }
  function handleDeleteProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setMilestonesMap((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    ue.success("Project deleted");
  }
  function handleArchiveProject(id) {
    const project = projects.find((p) => p.id === id);
    if (!project) return;
    setProjects(
      (prev) => prev.map(
        (p) => p.id === id ? { ...p, status: "paused" } : p
      )
    );
    ue.success(`"${project.name}" archived`);
  }
  function handleEditProject(id) {
    const project = projects.find((p) => p.id === id);
    if (project) setEditingProject(project);
  }
  function handleSaveProject(updated) {
    setProjects((prev) => prev.map((p) => p.id === updated.id ? updated : p));
  }
  function handleAddMilestone(projectId, milestone) {
    setMilestonesMap((prev) => ({
      ...prev,
      [projectId]: [...prev[projectId] ?? [], milestone]
    }));
  }
  function handleEditMilestone(projectId, milestoneId, updates) {
    setMilestonesMap((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] ?? []).map(
        (ms) => ms.id === milestoneId ? { ...ms, ...updates } : ms
      )
    }));
    ue.success("Milestone updated");
  }
  function handleDeleteMilestone(projectId, milestoneId) {
    setMilestonesMap((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] ?? []).filter(
        (ms) => ms.id !== milestoneId
      )
    }));
    ue.success("Milestone removed");
  }
  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 max-w-screen-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Projects",
        subtitle: `${projects.length} project${projects.length !== 1 ? "s" : ""} · ${filteredProjects.length} shown`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            onClick: () => setAddProjectOpen(true),
            className: "gap-2 btn-lift",
            "data-ocid": "add-project-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New Project" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "New" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterBar,
      {
        searchValue: searchQuery,
        searchPlaceholder: "Search projects…",
        onSearchChange: setSearchQuery,
        onClear: clearFilters,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: statusFilter,
            onValueChange: (v) => setStatusFilter(v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 text-xs w-36",
                  "data-ocid": "filter-project-status",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Statuses" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Statuses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "on-track", children: "On Track" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "at-risk", children: "At Risk" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "off-track", children: "Off Track" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "completed", children: "Completed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "paused", children: "Paused" })
              ] })
            ]
          }
        )
      }
    ) }),
    filteredProjects.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/10 py-16 sm:py-20 text-center px-4",
        "data-ocid": "projects-empty-state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "w-5 h-5 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm sm:text-base font-semibold text-foreground mb-1", children: projects.length === 0 ? "No projects yet" : "No matching projects" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground mb-5 max-w-xs", children: projects.length === 0 ? "Create your first project to start tracking progress, milestones, and team velocity." : "Try adjusting your search or filters." }),
          projects.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: () => setAddProjectOpen(true),
              className: "gap-2 btn-lift",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                " New Project"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: clearFilters,
              className: "gap-2",
              children: "Clear Filters"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4",
        "data-ocid": "projects-grid",
        children: filteredProjects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProjectCard,
          {
            project,
            milestones: milestonesMap[project.id] ?? [],
            onDelete: handleDeleteProject,
            onEdit: handleEditProject,
            onArchive: handleArchiveProject,
            onAddMilestone: (pid) => setAddMilestoneForProject(pid),
            onEditMilestone: handleEditMilestone,
            onDeleteMilestone: handleDeleteMilestone
          },
          project.id
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddProjectDialog,
      {
        open: addProjectOpen,
        onClose: () => setAddProjectOpen(false),
        onAdd: handleAddProject
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditProjectDialog,
      {
        open: !!editingProject,
        project: editingProject,
        onClose: () => setEditingProject(null),
        onSave: handleSaveProject
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddMilestoneDialog,
      {
        open: !!addMilestoneForProject,
        projectId: addMilestoneForProject ?? "",
        onClose: () => setAddMilestoneForProject(null),
        onAdd: handleAddMilestone
      }
    )
  ] });
}
export {
  Projects as default
};
