import { cn } from "@/lib/utils";
import { Minus, TrendingDown, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  trend?: "up" | "down" | "neutral";
  icon?: ReactNode;
  className?: string;
}

export function StatCard({
  label,
  value,
  change,
  changeLabel,
  trend = "neutral",
  icon,
  className,
}: StatCardProps) {
  const trendColor =
    trend === "up"
      ? "text-success"
      : trend === "down"
        ? "text-destructive"
        : "text-muted-foreground";

  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col gap-3",
        "shadow-xs hover:shadow-md transition-all duration-200",
        "hover:-translate-y-px",
        className,
      )}
      data-ocid="stat-card"
    >
      {/* Label row */}
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-tight">
          {label}
        </p>
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 [&>svg]:h-4 [&>svg]:w-4">
            {icon}
          </div>
        )}
      </div>

      {/* Value + trend */}
      <div className="flex items-end justify-between gap-3">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-none tracking-tight">
          {value}
        </p>
        {change !== undefined && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-semibold flex-shrink-0 pb-0.5",
              trendColor,
            )}
          >
            <TrendIcon size={12} />
            <span>{Math.abs(change)}%</span>
            {changeLabel && (
              <span className="text-muted-foreground font-normal hidden sm:block text-[11px]">
                {changeLabel}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
