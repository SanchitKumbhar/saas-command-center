import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SuggestionCardProps {
  title: string;
  reason: string;
  className?: string;
}

export function SuggestionCard({ title, reason, className }: SuggestionCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-background p-3.5 shadow-[0_12px_28px_-24px_oklch(0_0_0_/_0.55)] transition-all duration-200 hover:-translate-y-px",
        className,
      )}
    >
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
        {reason}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button type="button" size="sm" className="h-8 px-3 text-xs">
          Accept
        </Button>
        <Button type="button" size="sm" variant="outline" className="h-8 px-3 text-xs">
          Modify
        </Button>
        <Button type="button" size="sm" variant="ghost" className="h-8 px-3 text-xs text-muted-foreground">
          Ignore
        </Button>
      </div>
    </div>
  );
}
