import { j as jsxRuntimeExports, o as cn } from "./index-C4CKXjXp.js";
const statusConfig = {
  todo: {
    label: "To Do",
    className: "bg-muted/80 text-muted-foreground border-border",
    dotClass: "bg-muted-foreground"
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-info/10 text-info border-info/25",
    dotClass: "bg-info"
  },
  review: {
    label: "Review",
    className: "bg-warning/10 text-warning border-warning/25",
    dotClass: "bg-warning"
  },
  done: {
    label: "Done",
    className: "bg-success/10 text-success border-success/25",
    dotClass: "bg-success"
  },
  blocked: {
    label: "Blocked",
    className: "bg-destructive/10 text-destructive border-destructive/25",
    dotClass: "bg-destructive"
  },
  "on-track": {
    label: "On Track",
    className: "bg-success/10 text-success border-success/25",
    dotClass: "bg-success"
  },
  "at-risk": {
    label: "At Risk",
    className: "bg-warning/10 text-warning border-warning/25",
    dotClass: "bg-warning"
  },
  "off-track": {
    label: "Off Track",
    className: "bg-destructive/10 text-destructive border-destructive/25",
    dotClass: "bg-destructive"
  },
  completed: {
    label: "Completed",
    className: "bg-success/10 text-success border-success/25",
    dotClass: "bg-success"
  },
  paused: {
    label: "Paused",
    className: "bg-muted/80 text-muted-foreground border-border",
    dotClass: "bg-muted-foreground"
  },
  active: {
    label: "Active",
    className: "bg-success/10 text-success border-success/25",
    dotClass: "bg-success"
  },
  away: {
    label: "Away",
    className: "bg-warning/10 text-warning border-warning/25",
    dotClass: "bg-warning"
  },
  offline: {
    label: "Offline",
    className: "bg-muted/80 text-muted-foreground border-border",
    dotClass: "bg-muted-foreground"
  },
  green: {
    label: "On Track",
    className: "bg-success/10 text-success border-success/25",
    dotClass: "bg-success"
  },
  yellow: {
    label: "At Risk",
    className: "bg-warning/10 text-warning border-warning/25",
    dotClass: "bg-warning"
  },
  red: {
    label: "Off Track",
    className: "bg-destructive/10 text-destructive border-destructive/25",
    dotClass: "bg-destructive"
  }
};
function StatusBadge({
  status,
  showDot = false,
  className
}) {
  const config = statusConfig[status] ?? {
    label: status,
    className: "bg-muted/80 text-muted-foreground border-border",
    dotClass: "bg-muted-foreground"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 px-2 py-[3px] rounded-full text-[11px] font-medium border whitespace-nowrap",
        config.className,
        className
      ),
      "data-ocid": `status-badge-${status}`,
      children: [
        showDot && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "w-1.5 h-1.5 rounded-full flex-shrink-0",
              config.dotClass
            )
          }
        ),
        config.label
      ]
    }
  );
}
export {
  StatusBadge as S
};
