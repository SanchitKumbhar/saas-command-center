import { j as jsxRuntimeExports, B as Button, o as cn } from "./index-C4CKXjXp.js";
function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center py-16 px-6 text-center",
        className
      ),
      "data-ocid": "empty-state",
      children: [
        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-muted/70 flex items-center justify-center mb-5 border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, className: "text-muted-foreground", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground mb-1.5", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-[360px] leading-relaxed", children: description }),
        action && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: action.onClick,
            className: "mt-5",
            "data-ocid": "empty-state-action",
            children: action.label
          }
        ),
        children
      ]
    }
  );
}
export {
  EmptyState as E
};
