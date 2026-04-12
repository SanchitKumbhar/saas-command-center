import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  children?: ReactNode;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  children,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 px-6 text-center",
        className,
      )}
      data-ocid="empty-state"
    >
      {Icon && (
        <div className="w-14 h-14 rounded-2xl bg-muted/70 flex items-center justify-center mb-5 border border-border/60">
          <Icon size={26} className="text-muted-foreground" strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-sm font-semibold text-foreground mb-1.5">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground max-w-[360px] leading-relaxed">
          {description}
        </p>
      )}
      {action && (
        <Button
          size="sm"
          onClick={action.onClick}
          className="mt-5"
          data-ocid="empty-state-action"
        >
          {action.label}
        </Button>
      )}
      {children}
    </div>
  );
}
