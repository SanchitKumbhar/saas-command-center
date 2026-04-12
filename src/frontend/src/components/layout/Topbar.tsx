import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useNotificationStore } from "@/stores/notificationStore";
import { useUserStore } from "@/stores/userStore";
import { useRouterState } from "@tanstack/react-router";
import { formatDistanceToNow } from "date-fns";
import {
  Bell,
  LogOut,
  Menu,
  Moon,
  Send,
  Settings,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const routeLabels: Record<string, string> = {
  "/app/dashboard": "Dashboard",
  "/app/planner": "AI Planner",
  "/app/execution": "Execution Center",
  "/app/projects": "Projects",
  "/app/tasks": "Tasks",
  "/app/team": "Team",
  "/app/updates": "Updates",
};

interface TopbarProps {
  onMobileMenuClick: () => void;
  showMobileMenu: boolean;
}

export default function Topbar({
  onMobileMenuClick,
  showMobileMenu,
}: TopbarProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, setTheme } = useTheme();
  const { notifications, unreadCount, markAllRead, clearAll, addNotification } =
    useNotificationStore();
  const { currentUser } = useUserStore();
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [notifMessage, setNotifMessage] = useState("");

  const pageTitle = routeLabels[pathname] ?? "Apex";

  const handleSendNotification = () => {
    if (!notifMessage.trim()) return;
    addNotification("info", "Team Notification", notifMessage);
    setNotifMessage("");
    setSendDialogOpen(false);
  };

  const initials = currentUser.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <TooltipProvider delayDuration={300}>
      <header
        className="h-14 flex items-center gap-3 px-4 md:px-5 border-b border-border bg-card flex-shrink-0 z-10"
        data-ocid="topbar"
      >
        {/* Mobile menu button */}
        {showMobileMenu && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onMobileMenuClick}
            aria-label="Open navigation"
            data-ocid="mobile-menu-btn"
            className="h-8 w-8 text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            <Menu size={18} />
          </Button>
        )}

        {/* Page title */}
        <h1 className="text-sm sm:text-[0.9375rem] font-semibold text-foreground flex-1 truncate min-w-0 tracking-tight">
          {pageTitle}
        </h1>

        {/* Right actions */}
        <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
          {/* Send Notification */}
          <Tooltip>
            <Popover open={sendDialogOpen} onOpenChange={setSendDialogOpen}>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors duration-150"
                    aria-label="Send notification"
                    data-ocid="send-notification-btn"
                  >
                    <Send size={15} />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Send notification
              </TooltipContent>
              <PopoverContent
                align="end"
                className="w-72 sm:w-80 p-4 space-y-3 shadow-lg"
              >
                <div>
                  <p className="text-sm font-semibold">
                    Send Team Notification
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Broadcast a message to all team members.
                  </p>
                </div>
                <Textarea
                  placeholder="Type your message..."
                  value={notifMessage}
                  onChange={(e) => setNotifMessage(e.target.value)}
                  rows={3}
                  className="resize-none text-sm"
                  data-ocid="notification-message-input"
                />
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSendDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSendNotification}
                    data-ocid="send-notification-submit"
                  >
                    Send
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </Tooltip>

          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative h-8 w-8 text-muted-foreground hover:text-foreground transition-colors duration-150"
                aria-label="Notifications"
                data-ocid="notifications-btn"
              >
                <Bell size={15} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-[14px] h-[14px] bg-destructive text-destructive-foreground rounded-full text-[9px] flex items-center justify-center font-bold leading-none px-0.5 pointer-events-none">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-72 sm:w-80 p-0 shadow-lg animate-fade-in"
              data-ocid="notifications-panel"
            >
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Notifications</span>
                  {unreadCount > 0 && (
                    <Badge
                      variant="secondary"
                      className="text-[10px] h-4 px-1.5 leading-none"
                    >
                      {unreadCount}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-[11px] text-muted-foreground px-2"
                    onClick={markAllRead}
                    data-ocid="mark-all-read-btn"
                  >
                    Mark read
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-[11px] text-muted-foreground px-2"
                    onClick={clearAll}
                    data-ocid="clear-notifications-btn"
                  >
                    Clear
                  </Button>
                </div>
              </div>
              <ScrollArea className="max-h-80">
                {notifications.length === 0 ? (
                  <div className="py-10 text-center text-sm text-muted-foreground">
                    No notifications
                  </div>
                ) : (
                  <div className="divide-y divide-border">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={cn(
                          "px-4 py-3 text-sm transition-colors hover:bg-muted/40",
                          !n.read && "bg-primary/[0.03]",
                        )}
                        data-ocid={`notification-${n.id}`}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <span
                            className={cn(
                              "mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0",
                              n.type === "error" && "bg-destructive",
                              n.type === "warning" && "bg-warning",
                              n.type === "success" && "bg-success",
                              n.type === "info" && "bg-primary",
                            )}
                          />
                          <div className="min-w-0 flex-1">
                            <p
                              className={cn(
                                "font-medium leading-tight truncate text-xs",
                                !n.read
                                  ? "text-foreground"
                                  : "text-muted-foreground",
                              )}
                            >
                              {n.title}
                            </p>
                            <p className="text-muted-foreground text-[11px] mt-0.5 line-clamp-2 leading-relaxed">
                              {n.message}
                            </p>
                            <p className="text-[10px] text-muted-foreground/70 mt-1">
                              {formatDistanceToNow(new Date(n.timestamp), {
                                addSuffix: true,
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </PopoverContent>
          </Popover>

          {/* Theme toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors duration-150"
                aria-label="Toggle theme"
                data-ocid="theme-toggle-btn"
              >
                <span className="relative flex items-center justify-center">
                  <Sun
                    size={15}
                    className={cn(
                      "absolute transition-all duration-200",
                      theme === "dark"
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-90 scale-75",
                    )}
                  />
                  <Moon
                    size={15}
                    className={cn(
                      "transition-all duration-200",
                      theme === "dark"
                        ? "opacity-0 -rotate-90 scale-75"
                        : "opacity-100 rotate-0 scale-100",
                    )}
                  />
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </TooltipContent>
          </Tooltip>

          <Separator orientation="vertical" className="h-4 mx-1 opacity-50" />

          {/* Profile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 h-8 px-2 text-sm font-medium hover:bg-muted/80 transition-colors duration-150"
                aria-label="User menu"
                data-ocid="profile-menu-btn"
              >
                <Avatar className="w-6 h-6 ring-1 ring-border ring-offset-1 ring-offset-background transition-all duration-150 hover:ring-primary/50">
                  <AvatarFallback className="bg-primary/15 text-primary text-[10px] font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:block text-xs font-medium text-foreground max-w-[5rem] truncate">
                  {currentUser.name.split(" ")[0]}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 sm:w-52 shadow-lg animate-fade-in"
              data-ocid="profile-dropdown"
            >
              <DropdownMenuLabel className="py-2.5">
                <p className="text-sm font-semibold leading-tight">
                  {currentUser.name}
                </p>
                <p className="text-[11px] text-muted-foreground font-normal mt-0.5 leading-tight">
                  {currentUser.email}
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="gap-2 text-sm cursor-pointer"
                data-ocid="profile-settings-btn"
              >
                <Settings size={13} className="text-muted-foreground" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className="gap-2 text-sm cursor-pointer"
                data-ocid="profile-account-btn"
              >
                <User size={13} className="text-muted-foreground" />
                Account
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="gap-2 text-sm text-destructive focus:text-destructive cursor-pointer"
                data-ocid="logout-btn"
              >
                <LogOut size={13} />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </TooltipProvider>
  );
}
