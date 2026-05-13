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
        "bg-card border border-border/90 rounded-xl p-3 sm:p-4 lg:p-5 flex flex-col gap-3",
        "shadow-[0_10px_28px_-22px_oklch(0_0_0_/_0.6)] transition-all duration-200",
        "hover:-translate-y-px hover:border-border-strong/75 hover:shadow-[0_20px_38px_-22px_oklch(0_0_0_/_0.68)]",
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
      <div className="flex min-w-0 flex-col gap-1.5">
        <p className="min-w-0 break-words text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground leading-none tracking-tight">
          {value}
        </p>
        {change !== undefined && (
          <div
            className={cn(
              "flex flex-wrap items-center gap-1 text-[11px] sm:text-xs font-semibold",
              trendColor,
            )}
          >
            <TrendIcon size={12} />
            <span>{Math.abs(change)}%</span>
            {changeLabel && (
              <span className="text-muted-foreground font-normal text-[11px]">
                {changeLabel}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
