import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const CARD_KEYS = ["sk-c1", "sk-c2", "sk-c3", "sk-c4"];
const LIST_KEYS = ["sk-l1", "sk-l2", "sk-l3", "sk-l4", "sk-l5", "sk-l6"];
const ROW_KEYS = ["sk-r1", "sk-r2", "sk-r3", "sk-r4", "sk-r5"];
const DOT_KEYS = ["sk-d1", "sk-d2", "sk-d3"];

interface LoadingStateProps {
  variant?: "page" | "cards" | "list" | "fullscreen";
  className?: string;
}

export function LoadingState({
  variant = "page",
  className,
}: LoadingStateProps) {
  if (variant === "fullscreen") {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-sm select-none">
              A
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {DOT_KEYS.map((k, i) => (
              <div
                key={k}
                className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
          className,
        )}
      >
        {CARD_KEYS.map((k) => (
          <div
            key={k}
            className="bg-card border border-border rounded-xl p-5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-2.5 w-20" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-2.5 w-16" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className={cn("space-y-2", className)}>
        {LIST_KEYS.map((k) => (
          <div
            key={k}
            className="bg-card border border-border rounded-xl p-3.5 flex items-center gap-3"
          >
            <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-48" />
              <Skeleton className="h-2.5 w-32" />
            </div>
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        ))}
      </div>
    );
  }

  // Default "page" variant
  return (
    <div className={cn("space-y-6", className)}>
      {/* Page header skeleton */}
      <div className="flex items-start justify-between pb-5 border-b border-border/60">
        <div className="space-y-2">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>
        <Skeleton className="h-9 w-28 rounded-lg" />
      </div>
      {/* Stat cards row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARD_KEYS.map((k) => (
          <div
            key={k}
            className="bg-card border border-border rounded-xl p-5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-2.5 w-20" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-2.5 w-16" />
          </div>
        ))}
      </div>
      {/* Section card skeleton */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-3.5 w-32" />
          <Skeleton className="h-7 w-20 rounded-md" />
        </div>
        <div className="space-y-2.5">
          {ROW_KEYS.map((k) => (
            <div key={k} className="flex items-center gap-3">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 flex-1 max-w-sm" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
