import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionCardProps {
  title?: string;
  headerAction?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  noPadding?: boolean;
}

export function SectionCard({
  title,
  headerAction,
  children,
  className,
  bodyClassName,
  noPadding = false,
}: SectionCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border/90 rounded-xl overflow-hidden",
        "shadow-[0_8px_26px_-20px_oklch(0_0_0_/_0.55)] transition-all duration-200",
        "hover:border-border-strong/70 hover:shadow-[0_16px_32px_-20px_oklch(0_0_0_/_0.6)]",
        className,
      )}
      data-ocid="section-card"
    >
      {(title || headerAction) && (
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/80">
          {title && (
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {title}
            </h3>
          )}
          {headerAction && (
            <div className="flex items-center gap-2 ml-auto">
              {headerAction}
            </div>
          )}
        </div>
      )}
      <div className={cn(!noPadding && "p-4 sm:p-5", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}
