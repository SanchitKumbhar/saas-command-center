import { c as createLucideIcon, j as jsxRuntimeExports, o as cn } from "./index-C4CKXjXp.js";
import { T as TrendingUp } from "./trending-up-Bcd0qdYK.js";
import { M as Minus } from "./minus-Dw6Dv1p-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
function StatCard({
  label,
  value,
  change,
  changeLabel,
  trend = "neutral",
  icon,
  className
}) {
  const trendColor = trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground";
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col gap-3",
        "shadow-xs hover:shadow-md transition-all duration-200",
        "hover:-translate-y-px",
        className
      ),
      "data-ocid": "stat-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-tight", children: label }),
          icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:h-4 [&>svg]:w-4", children: icon })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-none tracking-tight", children: value }),
          change !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1 text-xs font-semibold flex-shrink-0 pb-0.5",
                trendColor
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendIcon, { size: 12 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  Math.abs(change),
                  "%"
                ] }),
                changeLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal hidden sm:block text-[11px]", children: changeLabel })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  StatCard as S
};
