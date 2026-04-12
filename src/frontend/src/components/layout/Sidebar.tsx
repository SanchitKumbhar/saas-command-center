import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  LayoutDashboard,
  Radio,
  Rss,
  Users,
  Wand2,
} from "lucide-react";
import WorkspaceSwitcher from "./WorkspaceSwitcher";

const navItems = [
  { label: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { label: "AI Planner", href: "/app/planner", icon: Wand2 },
  { label: "Execution Center", href: "/app/execution", icon: Radio },
  { label: "Projects", href: "/app/projects", icon: FolderKanban },
  { label: "Tasks", href: "/app/tasks", icon: CheckSquare },
  { label: "Team", href: "/app/team", icon: Users },
  { label: "Updates", href: "/app/updates", icon: Rss },
];

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ collapsed, onToggleCollapse }: SidebarProps) {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex flex-col h-full">
        {/* Logo + workspace */}
        <div
          className={cn(
            "flex items-center border-b border-sidebar-border",
            collapsed ? "px-2 py-[14px] justify-center" : "px-3 py-3",
          )}
        >
          {collapsed ? (
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-primary-foreground font-bold text-sm select-none">
                A
              </span>
            </div>
          ) : (
            <WorkspaceSwitcher />
          )}
        </div>

        {/* Navigation */}
        <nav
          className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto scrollbar-thin"
          data-ocid="sidebar-nav"
        >
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);

            const item = (
              <Link
                key={href}
                to={href}
                className={cn(
                  "relative flex items-center gap-3 rounded-md text-sm font-medium",
                  "transition-all duration-150 group min-w-0 overflow-hidden",
                  collapsed ? "px-0 py-2.5 justify-center" : "px-2.5 py-2",
                  isActive
                    ? [
                        "bg-primary/10 text-sidebar-primary",
                        "before:absolute before:left-0 before:inset-y-1",
                        "before:w-[3px] before:rounded-r-full before:bg-sidebar-primary",
                      ]
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/70 hover:text-sidebar-foreground",
                )}
                data-ocid={`nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Icon
                  size={17}
                  className={cn(
                    "flex-shrink-0 transition-colors",
                    collapsed && "mx-auto",
                    isActive
                      ? "text-sidebar-primary"
                      : "text-muted-foreground group-hover:text-sidebar-foreground",
                  )}
                />
                {!collapsed && (
                  <span className="truncate min-w-0 leading-none">{label}</span>
                )}
              </Link>
            );

            if (collapsed) {
              return (
                <Tooltip key={href}>
                  <TooltipTrigger asChild>{item}</TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="text-xs font-medium"
                    sideOffset={8}
                  >
                    {label}
                  </TooltipContent>
                </Tooltip>
              );
            }
            return item;
          })}
        </nav>

        {/* Collapse toggle */}
        <div className="border-t border-sidebar-border p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={onToggleCollapse}
                className={cn(
                  "flex items-center gap-2 w-full px-2.5 py-2 rounded-md text-xs",
                  "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/70",
                  "transition-all duration-150 min-w-0",
                  collapsed && "justify-center px-0",
                )}
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                data-ocid="sidebar-collapse-toggle"
              >
                <span
                  className={cn(
                    "flex-shrink-0 transition-transform duration-300",
                    collapsed && "rotate-180",
                  )}
                >
                  <ChevronLeft size={14} />
                </span>
                {!collapsed && <span className="truncate">Collapse</span>}
              </button>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right" className="text-xs" sideOffset={8}>
                Expand sidebar
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
