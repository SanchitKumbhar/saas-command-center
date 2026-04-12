import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  action,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-border/60",
        className,
      )}
    >
      <div className="min-w-0 flex flex-col gap-1">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground leading-relaxed font-normal max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className="flex flex-wrap items-center gap-2 flex-shrink-0 pt-0.5">
          {action}
        </div>
      )}
    </div>
  );
}
