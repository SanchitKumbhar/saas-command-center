import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ListTodo,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

interface DeltaCardProps {
  label: string;
  before: number;
  after: number;
  className?: string;
}

export function DeltaCard({ label, before, after, className }: DeltaCardProps) {
  const diff = after - before;
  const state: "positive" | "negative" | "neutral" =
    diff < 0 ? "positive" : diff > 0 ? "negative" : "neutral";
  const [animatedAfter, setAnimatedAfter] = useState(before);

  useEffect(() => {
    if (before === after) {
      setAnimatedAfter(after);
      return;
    }

    const duration = 420;
    const startAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / duration, 1);
      const nextValue = Math.round(before + (after - before) * progress);
      setAnimatedAfter(nextValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [before, after]);

  const metricIcon = (() => {
    const normalized = label.toLowerCase();

    if (normalized.includes("task")) return ListTodo;
    if (normalized.includes("member") || normalized.includes("user")) return Users;
    if (normalized.includes("blocked") || normalized.includes("dependency")) {
      return ShieldAlert;
    }
    if (normalized.includes("scope") || normalized.includes("backlog")) {
      return TrendingDown;
    }

    return Sparkles;
  })();

  const MetricIcon = metricIcon;

  const stateStyles = {
    positive: {
      chip: "border-success/20 bg-success/10 text-success",
      value: "text-success",
      icon: "⬇️",
      label: "Improved",
      glow:
        "bg-gradient-to-br from-success/8 via-card to-card shadow-[0_20px_34px_-24px_oklch(var(--success)/0.85)]",
      iconBox: "bg-success/12 text-success",
    },
    negative: {
      chip: "border-destructive/20 bg-destructive/10 text-destructive",
      value: "text-destructive",
      icon: "⬆️",
      label: "Worsened",
      glow:
        "bg-gradient-to-br from-destructive/6 via-card to-card shadow-[0_18px_30px_-24px_oklch(var(--destructive)/0.8)]",
      iconBox: "bg-destructive/10 text-destructive",
    },
    neutral: {
      chip: "border-border bg-muted text-muted-foreground",
      value: "text-muted-foreground",
      icon: "⚡",
      label: "No change",
      glow:
        "bg-gradient-to-br from-muted/35 via-card to-card shadow-[0_16px_26px_-24px_oklch(0_0_0_/_0.45)]",
      iconBox: "bg-muted text-muted-foreground",
    },
  } as const;

  const ui = stateStyles[state];

  return (
    <div
      className={cn(
        "rounded-xl border border-border/80 p-4 transition-all duration-300 ease-out hover:-translate-y-px",
        ui.glow,
        className,
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-2.5">
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
              ui.iconBox,
            )}
          >
            <MetricIcon size={14} />
          </div>
          <p className="pt-0.5 text-sm font-semibold leading-snug text-foreground">
            {label}
          </p>
        </div>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
            ui.chip,
          )}
        >
          <span>{ui.icon}</span>
          <span>{ui.label}</span>
        </span>
      </div>

      <div className="flex items-center justify-start gap-3 sm:gap-4">
        <span className="text-2xl font-semibold tabular-nums text-muted-foreground transition-all duration-300">
          {before}
        </span>
        <ArrowRight size={16} className="text-muted-foreground/70" />
        <span
          className={cn(
            "text-2xl font-bold tabular-nums transition-all duration-300",
            ui.value,
          )}
        >
          {animatedAfter}
        </span>
      </div>
    </div>
  );
}
