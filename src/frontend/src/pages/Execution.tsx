import { FilterBar } from "@/components/shared/FilterBar";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  executionAlerts,
  executionTasks,
  projectHealthData,
  teamLoadData,
} from "@/data/execution";
import { cn } from "@/lib/utils";
import type { Task, TaskPriority, TaskStatus } from "@/types";
import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  ChevronRight,
  Clock,
  GripVertical,
  Info,
  ListChecks,
  RefreshCw,
  ShieldAlert,
  Users,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import { useCallback, useMemo, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Alert {
  id: string;
  severity: "error" | "warning" | "info";
  message: string;
  timestamp: string;
}

interface Bottleneck {
  id: string;
  title: string;
  impact: string;
  area: string;
  action: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

interface KanbanColumnDef {
  id: TaskStatus;
  label: string;
  accent: string;
  headerBg: string;
  countBg: string;
  emptyLabel: string;
}

const KANBAN_COLUMNS: KanbanColumnDef[] = [
  {
    id: "todo",
    label: "Not Started",
    accent: "text-muted-foreground",
    headerBg: "bg-muted/40 border-b border-border/60",
    countBg: "bg-muted text-muted-foreground",
    emptyLabel: "No tasks yet",
  },
  {
    id: "in-progress",
    label: "In Progress",
    accent: "text-info",
    headerBg: "bg-info/5 border-b border-info/20",
    countBg: "bg-info/15 text-info",
    emptyLabel: "Nothing in progress",
  },
  {
    id: "blocked",
    label: "At Risk",
    accent: "text-destructive",
    headerBg: "bg-destructive/8 border-b border-destructive/20",
    countBg: "bg-destructive/15 text-destructive",
    emptyLabel: "No blockers",
  },
  {
    id: "done",
    label: "Complete",
    accent: "text-success",
    headerBg: "bg-success/5 border-b border-success/20",
    countBg: "bg-success/15 text-success",
    emptyLabel: "Nothing completed",
  },
];

const PRIORITY_ORDER: Record<TaskPriority, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

const PRIORITY_CONFIG: Record<
  TaskPriority,
  { label: string; className: string; dot: string }
> = {
  critical: {
    label: "Critical",
    className: "bg-destructive/12 text-destructive border-destructive/25",
    dot: "bg-destructive",
  },
  high: {
    label: "High",
    className: "bg-warning/12 text-warning border-warning/25",
    dot: "bg-warning",
  },
  medium: {
    label: "Medium",
    className: "bg-info/12 text-info border-info/25",
    dot: "bg-info",
  },
  low: {
    label: "Low",
    className: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground",
  },
};

const BOTTLENECKS: Bottleneck[] = [
  {
    id: "bn-1",
    title: "Auth security review stalled",
    impact: "Blocking 3 dependent tasks across team",
    area: "Auth Redesign",
    action: "Assign dedicated reviewer",
  },
  {
    id: "bn-2",
    title: "Alex Rivera over-capacity",
    impact: "Sprint velocity reduced by ~25%",
    area: "Multiple projects",
    action: "Redistribute 2 tasks to team",
  },
  {
    id: "bn-3",
    title: "Analytics Pipeline overdue",
    impact: "ETL migration delayed 4 days",
    area: "Analytics Pipeline",
    action: "Schedule emergency sync",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function isOverdue(dueDate: string | undefined): boolean {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date();
}

function formatDate(iso: string | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatRelative(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diff / 3_600_000);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AvatarChip({
  name,
  size = "sm",
}: { name: string; size?: "sm" | "md" }) {
  const sizeClass =
    size === "md" ? "w-7 h-7 text-[11px]" : "w-5 h-5 text-[9px]";
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "bg-primary/15 text-primary font-bold leading-none flex-shrink-0",
        sizeClass,
      )}
      title={name}
    >
      {getInitials(name)}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: TaskPriority }) {
  const cfg = PRIORITY_CONFIG[priority];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold border leading-none",
        cfg.className,
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", cfg.dot)} />
      {cfg.label}
    </span>
  );
}

function TaskCard({
  task,
  onClick,
}: {
  task: Task;
  onClick: (t: Task) => void;
}) {
  const overdue = isOverdue(task.dueDate);
  return (
    <button
      type="button"
      onClick={() => onClick(task)}
      className={cn(
        "w-full text-left rounded-lg border border-border bg-card",
        "hover:border-primary/35 hover:shadow-sm transition-smooth cursor-pointer group",
        "flex flex-col gap-2 p-3",
        task.status === "blocked" &&
          "border-destructive/20 bg-destructive/[0.02]",
      )}
      data-ocid={`task-card-${task.id}`}
    >
      {/* Drag handle + title row */}
      <div className="flex items-start gap-1.5">
        <GripVertical
          size={14}
          className="text-muted-foreground/30 group-hover:text-muted-foreground/60 flex-shrink-0 mt-0.5 transition-colors"
          aria-hidden="true"
        />
        <p className="text-[13px] font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1 min-w-0">
          {task.title}
        </p>
      </div>

      {/* Priority + assignee row */}
      <div className="flex items-center justify-between gap-1 pl-5">
        <PriorityBadge priority={task.priority} />
        {task.assigneeName && (
          <div className="flex items-center gap-1 min-w-0">
            <AvatarChip name={task.assigneeName} />
            <span className="text-[10px] text-muted-foreground truncate max-w-[70px]">
              {task.assigneeName.split(" ")[0]}
            </span>
          </div>
        )}
      </div>

      {/* Due date */}
      {task.dueDate && (
        <div className="flex items-center gap-1 pl-5">
          <Clock
            size={10}
            className={cn(
              "flex-shrink-0",
              overdue ? "text-destructive" : "text-muted-foreground/60",
            )}
          />
          <p
            className={cn(
              "text-[10px] font-medium leading-none",
              overdue ? "text-destructive" : "text-muted-foreground",
            )}
          >
            {overdue ? "Overdue · " : "Due "}
            {formatDate(task.dueDate)}
          </p>
        </div>
      )}
    </button>
  );
}

function KanbanColumn({
  column,
  tasks,
  onTaskClick,
}: {
  column: KanbanColumnDef;
  tasks: Task[];
  onTaskClick: (t: Task) => void;
}) {
  const sorted = [...tasks].sort(
    (a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority],
  );

  return (
    <div className="flex flex-col min-w-[264px] sm:min-w-[288px] flex-1 bg-card rounded-xl border border-border overflow-hidden">
      {/* Column header */}
      <div
        className={cn(
          "flex items-center justify-between px-3.5 py-2.5",
          column.headerBg,
        )}
      >
        <span
          className={cn(
            "text-[11px] font-bold uppercase tracking-widest",
            column.accent,
          )}
        >
          {column.label}
        </span>
        <span
          className={cn(
            "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold",
            column.countBg,
          )}
        >
          {tasks.length}
        </span>
      </div>

      {/* Tasks list */}
      <div className="flex flex-col gap-2 p-2.5 min-h-[120px]">
        {sorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-20 rounded-lg border border-dashed border-border/60 gap-1">
            <span className="text-[11px] text-muted-foreground/60">
              {column.emptyLabel}
            </span>
          </div>
        ) : (
          sorted.map((task) => (
            <TaskCard key={task.id} task={task} onClick={onTaskClick} />
          ))
        )}
      </div>
    </div>
  );
}

function HealthStatusBadge({ status }: { status: "green" | "yellow" | "red" }) {
  const config = {
    green: {
      label: "On Track",
      className: "bg-success/12 text-success border-success/25",
    },
    yellow: {
      label: "At Risk",
      className: "bg-warning/12 text-warning border-warning/25",
    },
    red: {
      label: "Critical",
      className: "bg-destructive/12 text-destructive border-destructive/25",
    },
  }[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border leading-none",
        config.className,
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          status === "green" && "bg-success",
          status === "yellow" && "bg-warning",
          status === "red" && "bg-destructive",
        )}
      />
      {config.label}
    </span>
  );
}

function AlertIcon({ severity }: { severity: Alert["severity"] }) {
  if (severity === "error")
    return (
      <XCircle size={15} className="text-destructive flex-shrink-0 mt-0.5" />
    );
  if (severity === "warning")
    return (
      <AlertTriangle size={15} className="text-warning flex-shrink-0 mt-0.5" />
    );
  return <Info size={15} className="text-info flex-shrink-0 mt-0.5" />;
}

function AlertRow({
  alert,
  onDismiss,
}: {
  alert: Alert;
  onDismiss: (id: string) => void;
}) {
  const accentColor = {
    error: "border-destructive/60",
    warning: "border-warning/60",
    info: "border-info/60",
  }[alert.severity];

  return (
    <div
      className={cn(
        "flex items-start gap-3 px-4 py-3.5 group",
        "border-l-2 mx-3 my-1.5 rounded-r-lg",
        alert.severity === "error" && "bg-destructive/[0.04]",
        alert.severity === "warning" && "bg-warning/[0.04]",
        alert.severity === "info" && "bg-info/[0.04]",
        accentColor,
      )}
      data-ocid={`alert-${alert.id}`}
    >
      <AlertIcon severity={alert.severity} />
      <div className="flex-1 min-w-0">
        <p className="text-[13px] leading-relaxed text-foreground font-medium">
          {alert.message}
        </p>
        <p className="text-[11px] text-muted-foreground mt-0.5">
          {formatRelative(alert.timestamp)}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onDismiss(alert.id)}
        className="flex-shrink-0 p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted opacity-0 group-hover:opacity-100 transition-smooth"
        aria-label="Dismiss alert"
        data-ocid={`alert-dismiss-${alert.id}`}
      >
        <X size={12} />
      </button>
    </div>
  );
}

// ─── Task Detail Dialog ────────────────────────────────────────────────────────

function TaskDetailDialog({
  task,
  onClose,
  onDelete,
}: {
  task: Task;
  onClose: () => void;
  onDelete: (id: string) => void;
}) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(task.comments);

  function handleAddComment() {
    if (!comment.trim()) return;
    setComments((prev) => [
      ...prev,
      {
        id: `c-${Date.now()}`,
        authorId: "current-user",
        authorName: "You",
        content: comment.trim(),
        createdAt: new Date().toISOString(),
      },
    ]);
    setComment("");
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-lg p-0 gap-0"
        data-ocid="task-detail-dialog"
      >
        <DialogHeader className="px-5 py-4 border-b border-border">
          <DialogTitle className="text-sm font-semibold leading-snug pr-6">
            {task.title}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="px-5 py-4 space-y-4">
            {/* Meta row */}
            <div className="flex flex-wrap gap-2">
              <StatusBadge status={task.status} />
              <PriorityBadge priority={task.priority} />
              {task.projectName && (
                <Badge variant="outline" className="text-xs">
                  {task.projectName}
                </Badge>
              )}
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <div>
                <p className="text-muted-foreground mb-0.5">Assignee</p>
                <div className="flex items-center gap-1.5">
                  {task.assigneeName && <AvatarChip name={task.assigneeName} />}
                  <span className="font-medium">
                    {task.assigneeName ?? "Unassigned"}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-0.5">Due Date</p>
                <p
                  className={cn(
                    "font-medium",
                    isOverdue(task.dueDate) && "text-destructive",
                  )}
                >
                  {formatDate(task.dueDate)}
                  {isOverdue(task.dueDate) && " · Overdue"}
                </p>
              </div>
              {task.estimatedHours !== undefined && (
                <div>
                  <p className="text-muted-foreground mb-0.5">Est. Hours</p>
                  <p className="font-medium">{task.estimatedHours}h</p>
                </div>
              )}
              {task.completedHours !== undefined && (
                <div>
                  <p className="text-muted-foreground mb-0.5">Logged</p>
                  <p className="font-medium">{task.completedHours}h</p>
                </div>
              )}
            </div>

            {/* Description */}
            {task.description && (
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  Description
                </p>
                <p className="text-sm leading-relaxed">{task.description}</p>
              </div>
            )}

            {/* Tags */}
            {task.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {task.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Comments */}
            <div>
              <p className="text-xs font-semibold text-foreground mb-2">
                Comments ({comments.length})
              </p>
              {comments.length === 0 ? (
                <p className="text-xs text-muted-foreground italic">
                  No comments yet.
                </p>
              ) : (
                <div className="space-y-2">
                  {comments.map((c) => (
                    <div key={c.id} className="flex gap-2">
                      <AvatarChip name={c.authorName} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[11px] font-semibold">
                            {c.authorName}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {formatRelative(c.createdAt)}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-foreground">
                          {c.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add comment */}
              <div className="flex gap-2 mt-3">
                <Textarea
                  placeholder="Add a comment…"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="text-xs min-h-[60px] resize-none"
                  data-ocid="comment-input"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.metaKey || e.ctrlKey))
                      handleAddComment();
                  }}
                />
                <Button
                  type="button"
                  size="sm"
                  onClick={handleAddComment}
                  disabled={!comment.trim()}
                  className="self-end"
                  data-ocid="comment-send-btn"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-7 text-xs"
              data-ocid="task-edit-btn"
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={() => {
                onDelete(task.id);
                onClose();
              }}
              data-ocid="task-delete-btn"
            >
              Delete
            </Button>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 text-xs"
            onClick={onClose}
            data-ocid="task-close-btn"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function Execution() {
  const [tasks, setTasks] = useState<Task[]>(executionTasks);
  const [alerts, setAlerts] = useState<Alert[]>(executionAlerts);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Filters
  const [filterProject, setFilterProject] = useState("all");
  const [filterMember, setFilterMember] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");

  // Unique project names + member names
  const projectNames = useMemo(
    () =>
      [
        ...new Set(executionTasks.map((t) => t.projectName).filter(Boolean)),
      ] as string[],
    [],
  );
  const memberNames = useMemo(
    () =>
      [
        ...new Set(executionTasks.map((t) => t.assigneeName).filter(Boolean)),
      ] as string[],
    [],
  );

  // Filtered tasks
  const filteredTasks = useMemo(
    () =>
      tasks.filter((t) => {
        if (filterProject !== "all" && t.projectName !== filterProject)
          return false;
        if (filterMember !== "all" && t.assigneeName !== filterMember)
          return false;
        if (filterPriority !== "all" && t.priority !== filterPriority)
          return false;
        return true;
      }),
    [tasks, filterProject, filterMember, filterPriority],
  );

  // Stat counts
  const totalTasks = filteredTasks.length;
  const inProgressCount = filteredTasks.filter(
    (t) => t.status === "in-progress",
  ).length;
  const blockedCount = filteredTasks.filter(
    (t) => t.status === "blocked",
  ).length;
  const doneCount = filteredTasks.filter((t) => t.status === "done").length;
  const completionPct =
    totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0;

  // Kanban columns
  const tasksByStatus = useMemo(
    () =>
      KANBAN_COLUMNS.reduce<Record<string, Task[]>>((acc, col) => {
        acc[col.id] = filteredTasks.filter((t) => t.status === col.id);
        return acc;
      }, {}),
    [filteredTasks],
  );

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1200);
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterProject("all");
    setFilterMember("all");
    setFilterPriority("all");
  }, []);

  const handleDeleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleDismissAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const hasActiveFilters =
    filterProject !== "all" ||
    filterMember !== "all" ||
    filterPriority !== "all";

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 min-h-full bg-background">
      {/* Page Header */}
      <PageHeader
        title="Execution Control"
        subtitle="Real-time operational overview across all active projects"
        action={
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            className="gap-1.5 h-8 text-xs"
            data-ocid="execution-refresh-btn"
          >
            <RefreshCw
              size={13}
              className={isRefreshing ? "animate-spin" : ""}
            />
            Refresh
          </Button>
        }
      />

      {/* Mock data notice */}
      <div
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-warning/8 border border-warning/20 text-[13px] text-warning font-medium"
        data-ocid="mock-data-alert"
      >
        <Info size={14} className="flex-shrink-0" />
        <span>Using sample data — connect to API for live updates</span>
      </div>

      {/* Filter Bar */}
      <FilterBar
        onRefresh={handleRefresh}
        onClear={hasActiveFilters ? handleClearFilters : undefined}
        isRefreshing={isRefreshing}
      >
        <Select value={filterProject} onValueChange={setFilterProject}>
          <SelectTrigger
            className="h-8 text-xs w-full sm:w-44"
            data-ocid="filter-project-select"
          >
            <SelectValue placeholder="All Projects" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Projects</SelectItem>
            {projectNames.map((name) => (
              <SelectItem key={name} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filterMember} onValueChange={setFilterMember}>
          <SelectTrigger
            className="h-8 text-xs w-full sm:w-40"
            data-ocid="filter-member-select"
          >
            <SelectValue placeholder="All Members" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Members</SelectItem>
            {memberNames.map((name) => (
              <SelectItem key={name} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filterPriority} onValueChange={setFilterPriority}>
          <SelectTrigger
            className="h-8 text-xs w-full sm:w-36"
            data-ocid="filter-priority-select"
          >
            <SelectValue placeholder="All Priorities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </FilterBar>

      {/* ── Mission Summary Metrics ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          label="Total Tasks"
          value={totalTasks}
          icon={<ListChecks size={15} />}
        />
        <StatCard
          label="In Progress"
          value={inProgressCount}
          trend="neutral"
          icon={<Clock size={15} />}
        />
        <StatCard
          label="At Risk"
          value={blockedCount}
          trend={blockedCount > 0 ? "down" : "neutral"}
          icon={<Ban size={15} />}
        />
        <StatCard
          label="Completion"
          value={`${completionPct}%`}
          trend={completionPct > 50 ? "up" : "neutral"}
          icon={<CheckCircle2 size={15} />}
        />
      </div>

      {/* ── Kanban Board ── */}
      <SectionCard
        title="Task Status Board"
        headerAction={
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {filteredTasks.length} task{filteredTasks.length !== 1 ? "s" : ""}
            </span>
            {blockedCount > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive/12 text-destructive text-[10px] font-semibold border border-destructive/20">
                <ShieldAlert size={10} />
                {blockedCount} blocked
              </span>
            )}
          </div>
        }
        noPadding
      >
        <div
          className="overflow-x-auto pb-1 scrollbar-thin"
          data-ocid="kanban-board"
        >
          <div className="flex gap-3 p-3 min-w-max">
            {KANBAN_COLUMNS.map((col) => (
              <KanbanColumn
                key={col.id}
                column={col}
                tasks={tasksByStatus[col.id] ?? []}
                onTaskClick={setSelectedTask}
              />
            ))}
          </div>
        </div>
      </SectionCard>

      {/* ── Two-column lower grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Column A: Project Health + Team Load */}
        <div className="flex flex-col gap-5">
          {/* Project Health */}
          <SectionCard
            title="Project Health"
            headerAction={
              <span className="text-xs text-muted-foreground">
                {projectHealthData.length} projects
              </span>
            }
            noPadding
          >
            <div
              className="divide-y divide-border"
              data-ocid="project-health-list"
            >
              {projectHealthData.map((proj) => (
                <div
                  key={proj.projectId}
                  className="px-4 py-3.5 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-foreground truncate leading-tight">
                        {proj.projectName}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {proj.completedTasks}/{proj.totalTasks} tasks
                        {proj.daysRemaining > 0 &&
                          ` · ${proj.daysRemaining}d left`}
                        {proj.daysRemaining < 0 && (
                          <span className="text-destructive font-medium">
                            {" "}
                            · {Math.abs(proj.daysRemaining)}d overdue
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {proj.blockers > 0 && (
                        <span className="text-[10px] text-warning font-medium bg-warning/10 px-1.5 py-0.5 rounded border border-warning/20">
                          {proj.blockers} blocker{proj.blockers > 1 ? "s" : ""}
                        </span>
                      )}
                      <HealthStatusBadge status={proj.status} />
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-700",
                          proj.status === "green" && "bg-success",
                          proj.status === "yellow" && "bg-warning",
                          proj.status === "red" && "bg-destructive",
                        )}
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-muted-foreground w-8 text-right flex-shrink-0">
                      {proj.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Team Load */}
          <SectionCard
            title="Team Load"
            headerAction={
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Users size={12} />
                {teamLoadData.length} members
              </div>
            }
            noPadding
          >
            <div className="divide-y divide-border" data-ocid="team-load-list">
              {teamLoadData.map((member) => {
                const cappedPct = Math.min(member.utilizationPct, 150);
                const overloaded = member.utilizationPct > 100;
                const heavy = member.utilizationPct >= 85;
                const barFill = (cappedPct / 150) * 100;

                return (
                  <div
                    key={member.memberId}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors"
                  >
                    <AvatarChip name={member.memberName} size="md" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="min-w-0">
                          <p className="text-[13px] font-medium text-foreground truncate leading-tight">
                            {member.memberName}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                          {overloaded && (
                            <AlertTriangle
                              size={11}
                              className="text-destructive"
                            />
                          )}
                          <span
                            className={cn(
                              "text-[11px] font-bold",
                              overloaded
                                ? "text-destructive"
                                : heavy
                                  ? "text-warning"
                                  : "text-success",
                            )}
                          >
                            {member.utilizationPct}%
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {member.activeTasks}/{member.maxCapacity}
                          </span>
                        </div>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-700",
                            overloaded
                              ? "bg-destructive"
                              : heavy
                                ? "bg-warning"
                                : "bg-success",
                          )}
                          style={{ width: `${barFill}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionCard>
        </div>

        {/* Column B: Alerts + Bottlenecks */}
        <div className="flex flex-col gap-5">
          {/* Alerts */}
          <SectionCard
            title="Alerts"
            headerAction={
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border",
                  alerts.length > 0
                    ? "bg-destructive/10 text-destructive border-destructive/20"
                    : "bg-muted text-muted-foreground border-border",
                )}
              >
                {alerts.length} active
              </span>
            }
            noPadding
          >
            <div className="py-1.5" data-ocid="alerts-panel">
              {alerts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 px-4 gap-2">
                  <CheckCircle2 size={28} className="text-success/60" />
                  <p className="text-sm font-medium text-muted-foreground">
                    All clear — no active alerts
                  </p>
                </div>
              ) : (
                alerts.map((alert) => (
                  <AlertRow
                    key={alert.id}
                    alert={alert}
                    onDismiss={handleDismissAlert}
                  />
                ))
              )}
            </div>
          </SectionCard>

          {/* Bottleneck Detection */}
          <SectionCard
            title="Bottleneck Detection"
            headerAction={
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-warning bg-warning/10 px-2 py-0.5 rounded-full border border-warning/20">
                <Zap size={9} />
                {BOTTLENECKS.length} detected
              </span>
            }
            noPadding
          >
            <div className="divide-y divide-border" data-ocid="bottleneck-list">
              {BOTTLENECKS.map((bn) => (
                <div
                  key={bn.id}
                  className="px-4 py-3.5 hover:bg-muted/30 transition-colors"
                  data-ocid={`bottleneck-${bn.id}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <p className="text-[13px] font-semibold text-foreground leading-snug">
                      {bn.title}
                    </p>
                    <Badge
                      variant="outline"
                      className="text-[10px] flex-shrink-0 leading-none"
                    >
                      {bn.area}
                    </Badge>
                  </div>
                  <p className="text-[12px] text-muted-foreground leading-relaxed mb-2">
                    {bn.impact}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[12px] text-primary font-semibold hover:underline transition-colors"
                    data-ocid={`bottleneck-action-${bn.id}`}
                  >
                    {bn.action}
                    <ChevronRight size={11} />
                  </button>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>

      {/* Task Detail Dialog */}
      {selectedTask && (
        <TaskDetailDialog
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onDelete={handleDeleteTask}
        />
      )}
    </div>
  );
}
