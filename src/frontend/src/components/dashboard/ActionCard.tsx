import { cn } from "@/lib/utils";

interface ActionCardProps {
  icon: string;
  title: string;
  impact: string;
  timestamp: string;
  className?: string;
}

export function ActionCard({
  icon,
  title,
  impact,
  timestamp,
  className,
}: ActionCardProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-border/80 bg-card p-3.5 shadow-[0_10px_26px_-24px_oklch(0_0_0_/_0.7)] transition-all duration-200 hover:-translate-y-px hover:border-border hover:shadow-[0_18px_30px_-24px_oklch(0_0_0_/_0.75)]",
        className,
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-base">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold leading-snug text-foreground">
            {title}
          </p>
          <span className="flex-shrink-0 text-[11px] tabular-nums text-muted-foreground">
            {timestamp}
          </span>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {impact}
        </p>
      </div>
    </div>
  );
}
