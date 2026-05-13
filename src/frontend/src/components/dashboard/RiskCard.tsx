import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RiskCardProps {
  title: string;
  severity: "High" | "Medium" | "Low";
  impact: string;
  className?: string;
}

const severityStyles: Record<
  RiskCardProps["severity"],
  { badge: string; border: string; backdrop: string }
> = {
  High: {
    badge: "border-destructive/20 bg-destructive/10 text-destructive",
    border: "border-l-destructive",
    backdrop: "bg-destructive/[0.04]",
  },
  Medium: {
    badge: "border-warning/20 bg-warning/10 text-warning",
    border: "border-l-warning",
    backdrop: "bg-warning/[0.04]",
  },
  Low: {
    badge: "border-border bg-muted text-muted-foreground",
    border: "border-l-border",
    backdrop: "bg-muted/[0.35]",
  },
};

export function RiskCard({ title, severity, impact, className }: RiskCardProps) {
  const styles = severityStyles[severity];

  return (
    <div
      className={cn(
        "rounded-xl border border-border/80 border-l-4 p-3.5 shadow-[0_10px_26px_-24px_oklch(0_0_0_/_0.7)] transition-all duration-200 hover:-translate-y-px",
        styles.border,
        styles.backdrop,
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold leading-snug text-foreground">
          {title}
        </p>
        <Badge
          variant="secondary"
          className={cn("shrink-0 border text-[10px] font-semibold uppercase tracking-wide", styles.badge)}
        >
          {severity}
        </Badge>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
        {impact}
      </p>
    </div>
  );
}
