import { j as jsxRuntimeExports, a6 as TooltipProvider, I as Input, Y as X, B as Button, a7 as Tooltip, a8 as TooltipTrigger, o as cn, a9 as TooltipContent } from "./index-C4CKXjXp.js";
import { S as Search } from "./search-D5EmAB3J.js";
import { R as RefreshCw } from "./refresh-cw-CWyKD-C3.js";
function FilterBar({
  children,
  searchValue,
  searchPlaceholder = "Search...",
  onSearchChange,
  onRefresh,
  onClear,
  isRefreshing = false,
  className
}) {
  const hasSearchValue = !!searchValue;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center gap-2 px-3 py-2.5 bg-card border border-border rounded-xl",
        className
      ),
      "data-ocid": "filter-bar",
      children: [
        onSearchChange && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:flex-1 sm:min-w-40 sm:max-w-64", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Search,
            {
              size: 13,
              className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: searchPlaceholder,
              value: searchValue ?? "",
              onChange: (e) => onSearchChange(e.target.value),
              className: "pl-8 pr-8 h-8 text-sm w-full bg-background/60",
              "data-ocid": "filter-search-input"
            }
          ),
          hasSearchValue && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => onSearchChange(""),
              className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-100",
              "aria-label": "Clear search",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
            }
          )
        ] }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [
          onClear && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: onClear,
              className: "h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground",
              "data-ocid": "filter-clear-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Clear" })
              ]
            }
          ),
          onRefresh && /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                onClick: onRefresh,
                disabled: isRefreshing,
                className: "h-8 w-8 text-muted-foreground hover:text-foreground",
                "aria-label": "Refresh",
                "data-ocid": "filter-refresh-btn",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RefreshCw,
                  {
                    size: 13,
                    className: cn(isRefreshing && "animate-spin")
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "bottom", className: "text-xs", children: "Refresh" })
          ] })
        ] })
      ]
    }
  ) });
}
export {
  FilterBar as F
};
