import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { RefreshCw, Search, X } from "lucide-react";
import type { ReactNode } from "react";

interface FilterBarProps {
  children?: ReactNode;
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  onRefresh?: () => void;
  onClear?: () => void;
  isRefreshing?: boolean;
  className?: string;
}

export function FilterBar({
  children,
  searchValue,
  searchPlaceholder = "Search...",
  onSearchChange,
  onRefresh,
  onClear,
  isRefreshing = false,
  className,
}: FilterBarProps) {
  const hasSearchValue = !!searchValue;

  return (
    <TooltipProvider delayDuration={300}>
      <div
        className={cn(
          "flex flex-wrap items-center gap-2 px-3 py-2.5 bg-card border border-border rounded-xl",
          className,
        )}
        data-ocid="filter-bar"
      >
        {/* Search — full width on mobile, constrained on sm+ */}
        {onSearchChange && (
          <div className="relative w-full sm:flex-1 sm:min-w-40 sm:max-w-64">
            <Search
              size={13}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              placeholder={searchPlaceholder}
              value={searchValue ?? ""}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-8 pr-8 h-8 text-sm w-full bg-background/60"
              data-ocid="filter-search-input"
            />
            {hasSearchValue && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-100"
                aria-label="Clear search"
              >
                <X size={12} />
              </button>
            )}
          </div>
        )}

        {/* Filter slots */}
        {children && (
          <div className="flex flex-wrap items-center gap-2">{children}</div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-1 ml-auto">
          {onClear && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onClear}
              className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              data-ocid="filter-clear-btn"
            >
              <X size={12} />
              <span className="hidden sm:inline">Clear</span>
            </Button>
          )}
          {onRefresh && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={onRefresh}
                  disabled={isRefreshing}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  aria-label="Refresh"
                  data-ocid="filter-refresh-btn"
                >
                  <RefreshCw
                    size={13}
                    className={cn(isRefreshing && "animate-spin")}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Refresh
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
