import { j as jsxRuntimeExports, o as cn } from "./index-C4CKXjXp.js";
function SectionCard({
  title,
  headerAction,
  children,
  className,
  bodyClassName,
  noPadding = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "bg-card border border-border rounded-xl overflow-hidden",
        "shadow-xs hover:shadow-sm transition-shadow duration-200",
        className
      ),
      "data-ocid": "section-card",
      children: [
        (title || headerAction) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/80", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: title }),
          headerAction && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 ml-auto", children: headerAction })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(!noPadding && "p-4 sm:p-5", bodyClassName), children })
      ]
    }
  );
}
export {
  SectionCard as S
};
