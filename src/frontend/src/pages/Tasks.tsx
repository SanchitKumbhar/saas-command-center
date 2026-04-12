import { EmptyState } from "@/components/shared/EmptyState";
import { FilterBar } from "@/components/shared/FilterBar";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { mockTasks } from "@/data/tasks";
import { cn } from "@/lib/utils";
import type { Task, TaskPriority, TaskStatus } from "@/types";
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  CalendarDays,
  ChevronRight,
  GripVertical,
  KanbanSquare,
  List,
  MessageCircle,
  Minus,
  Pencil,
  Plus,
  Trash2,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ── Priority config ─────────────────────────────────────────────────────────
const priorityConfig: Record<
  TaskPriority,
  { label: string; icon: React.ReactNode; className: string }
> = {
  critical: {
    label: "Critical",
    icon: <AlertCircle size={12} className="text-destructive" />,
    className: "bg-destructive/10 text-destructive border-destructive/25",
  },
  high: {
    label: "High",
    icon: <ArrowUp size={12} className="text-warning" />,
    className: "bg-warning/10 text-warning border-warning/25",
  },
  medium: {
    label: "Medium",
    icon: <Minus size={12} className="text-info" />,
    className: "bg-info/10 text-info border-info/25",
  },
  low: {
    label: "Low",
    icon: <ArrowDown size={12} className="text-muted-foreground" />,
    className: "bg-muted text-muted-foreground border-border",
  },
};

// ── Status columns for kanban ────────────────────────────────────────────────
const KANBAN_COLUMNS: { status: TaskStatus; label: string }[] = [
  { status: "todo", label: "To Do" },
  { status: "in-progress", label: "In Progress" },
  { status: "review", label: "Review" },
  { status: "blocked", label: "Blocked" },
  { status: "done", label: "Done" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function isOverdue(dueDate?: string): boolean {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date();
}

function formatDate(dueDate?: string): string {
  if (!dueDate) return "—";
  return new Date(dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function getInitials(name?: string): string {
  if (!name) return "?";
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function generateId(): string {
  return `task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

// ── Priority Badge ────────────────────────────────────────────────────────────
function PriorityBadge({ priority }: { priority: TaskPriority }) {
  const cfg = priorityConfig[priority];
  return (
    <Badge
      variant="outline"
      className={cn(
        "text-[10px] sm:text-xs px-1.5 py-0 h-5 font-medium border gap-1 items-center",
        cfg.className,
      )}
    >
      {cfg.icon}
      <span className="hidden sm:inline">{cfg.label}</span>
    </Badge>
  );
}

// ── Assignee Avatar ───────────────────────────────────────────────────────────
function AssigneeAvatar({
  name,
  size = "sm",
}: {
  name?: string;
  size?: "sm" | "md";
}) {
  const dim = size === "md" ? "h-7 w-7 text-xs" : "h-6 w-6 text-[10px]";
  if (!name)
    return (
      <span
        className={cn(
          "rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground flex-shrink-0",
          dim,
        )}
      >
        ?
      </span>
    );
  return (
    <span
      className={cn(
        "rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary flex-shrink-0",
        dim,
      )}
      title={name}
    >
      {getInitials(name)}
    </span>
  );
}

// ── Empty task form state ─────────────────────────────────────────────────────
interface TaskForm {
  title: string;
  description: string;
  assigneeName: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

const emptyForm: TaskForm = {
  title: "",
  description: "",
  assigneeName: "",
  status: "todo",
  priority: "medium",
  dueDate: "",
};

function taskToForm(task: Task): TaskForm {
  return {
    title: task.title,
    description: task.description ?? "",
    assigneeName: task.assigneeName ?? "",
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate ? task.dueDate.slice(0, 10) : "",
  };
}

// ── Task Form Dialog ──────────────────────────────────────────────────────────
interface TaskFormDialogProps {
  open: boolean;
  onClose: () => void;
  initialValues?: TaskForm;
  title: string;
  submitLabel: string;
  onSubmit: (form: TaskForm) => void;
}

function TaskFormDialog({
  open,
  onClose,
  initialValues = emptyForm,
  title,
  submitLabel,
  onSubmit,
}: TaskFormDialogProps) {
  const [form, setForm] = useState<TaskForm>(initialValues);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) setForm(initialValues);
    else onClose();
  };

  const handleSubmit = () => {
    if (!form.title.trim()) return;
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[92vw] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg font-semibold">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-1.5">
            <Label htmlFor="task-title" className="text-sm font-medium">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="task-title"
              placeholder="Task name"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
              className="h-9 sm:h-10"
              data-ocid="task-form-title"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="task-description" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="task-description"
              placeholder="What needs to be done?"
              rows={3}
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
              data-ocid="task-form-description"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="task-assignee" className="text-sm font-medium">
              Assignee
            </Label>
            <Input
              id="task-assignee"
              placeholder="Assignee name"
              value={form.assigneeName}
              onChange={(e) =>
                setForm((f) => ({ ...f, assigneeName: e.target.value }))
              }
              className="h-9 sm:h-10"
              data-ocid="task-form-assignee"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label className="text-sm font-medium">Status</Label>
              <Select
                value={form.status}
                onValueChange={(v) =>
                  setForm((f) => ({ ...f, status: v as TaskStatus }))
                }
              >
                <SelectTrigger
                  className="h-9 sm:h-10"
                  data-ocid="task-form-status"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label className="text-sm font-medium">Priority</Label>
              <Select
                value={form.priority}
                onValueChange={(v) =>
                  setForm((f) => ({ ...f, priority: v as TaskPriority }))
                }
              >
                <SelectTrigger
                  className="h-9 sm:h-10"
                  data-ocid="task-form-priority"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="task-due" className="text-sm font-medium">
              Due Date
            </Label>
            <Input
              id="task-due"
              type="date"
              value={form.dueDate}
              onChange={(e) =>
                setForm((f) => ({ ...f, dueDate: e.target.value }))
              }
              className="h-9 sm:h-10"
              data-ocid="task-form-due-date"
            />
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!form.title.trim()}
            className="btn-lift"
            data-ocid="task-form-submit"
          >
            {submitLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Task Detail Dialog ────────────────────────────────────────────────────────
interface TaskDetailDialogProps {
  task: Task | null;
  onClose: () => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onAddComment: (taskId: string, text: string) => void;
}

function TaskDetailDialog({
  task,
  onClose,
  onEdit,
  onDelete,
  onAddComment,
}: TaskDetailDialogProps) {
  const [commentInput, setCommentInput] = useState("");

  if (!task) return null;

  const overdue = isOverdue(task.dueDate);

  const handlePostComment = () => {
    if (!commentInput.trim()) return;
    onAddComment(task.id, commentInput.trim());
    setCommentInput("");
  };

  const handleDelete = () => {
    if (window.confirm(`Delete "${task.title}"? This cannot be undone.`)) {
      onDelete(task.id);
      onClose();
    }
  };

  return (
    <Dialog open={!!task} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[92vw] sm:max-w-xl max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-start gap-3 pr-6">
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-sm sm:text-base leading-snug break-words font-semibold">
                {task.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2 mt-2.5">
                <StatusBadge status={task.status} showDot />
                <PriorityBadge priority={task.priority} />
                {task.projectName && (
                  <Badge
                    variant="secondary"
                    className="text-[10px] h-5 px-1.5 font-normal"
                  >
                    {task.projectName}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 min-h-0">
          <div className="px-1 pb-2 space-y-4">
            {/* Meta row */}
            <div className="grid grid-cols-2 gap-3 p-3 bg-muted/30 rounded-lg border border-border/40">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User size={13} className="flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium mb-0.5">
                    Assignee
                  </p>
                  <div className="flex items-center gap-1.5">
                    <AssigneeAvatar name={task.assigneeName} />
                    <span className="text-xs font-medium text-foreground">
                      {task.assigneeName ?? "Unassigned"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={13}
                  className={cn(
                    "flex-shrink-0",
                    overdue ? "text-destructive" : "text-muted-foreground",
                  )}
                />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium mb-0.5">
                    Due Date
                  </p>
                  <span
                    className={cn(
                      "text-xs font-medium",
                      overdue ? "text-destructive" : "text-foreground",
                    )}
                  >
                    {formatDate(task.dueDate)}
                    {overdue && (
                      <span className="ml-1.5 text-[10px] bg-destructive/15 text-destructive px-1.5 py-0.5 rounded-full font-semibold">
                        Overdue
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            {task.description && (
              <div className="space-y-1.5">
                <p className="text-overline text-muted-foreground">
                  Description
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {task.description}
                </p>
              </div>
            )}

            <Separator />

            {/* Comments */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle size={14} className="text-muted-foreground" />
                <span className="text-overline text-muted-foreground">
                  Comments ({task.comments.length})
                </span>
              </div>

              {task.comments.length === 0 ? (
                <p className="text-sm text-muted-foreground italic py-2">
                  No comments yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {task.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-2.5">
                      <AssigneeAvatar name={comment.authorName} />
                      <div className="flex-1 min-w-0 bg-muted/30 rounded-lg px-3 py-2">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-xs font-semibold text-foreground">
                            {comment.authorName}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {new Date(comment.createdAt).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric" },
                            )}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed break-words">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add comment */}
              <div className="mt-4 space-y-2">
                <Textarea
                  placeholder="Add a comment..."
                  rows={2}
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  data-ocid="task-detail-comment-input"
                  className="text-sm resize-none"
                />
                <Button
                  type="button"
                  size="sm"
                  onClick={handlePostComment}
                  disabled={!commentInput.trim()}
                  className="btn-lift"
                  data-ocid="task-detail-post-comment"
                >
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex-shrink-0 pt-3 border-t border-border">
          <div className="flex items-center gap-2 w-full">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                onClose();
                onEdit(task);
              }}
              className="gap-1.5"
              data-ocid="task-detail-edit-btn"
            >
              <Pencil size={13} />
              Edit
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDelete}
              className="gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/10"
              data-ocid="task-detail-delete-btn"
            >
              <Trash2 size={13} />
              Delete
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="ml-auto"
              data-ocid="task-detail-close-btn"
            >
              Close
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Kanban Card ───────────────────────────────────────────────────────────────
interface KanbanCardProps {
  task: Task;
  onClick: () => void;
  onDragStart: (taskId: string) => void;
}

function KanbanCard({ task, onClick, onDragStart }: KanbanCardProps) {
  const overdue = isOverdue(task.dueDate);

  return (
    <button
      type="button"
      draggable
      onDragStart={() => onDragStart(task.id)}
      onClick={onClick}
      className={cn(
        "group relative w-full text-left bg-card border border-border rounded-lg p-3 cursor-pointer",
        "hover:shadow-md hover:-translate-y-0.5 transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        overdue && "border-l-[3px] border-l-destructive",
      )}
      data-ocid={`kanban-card-${task.id}`}
    >
      {/* drag handle + title */}
      <div className="flex items-start gap-1.5 mb-2.5">
        <GripVertical
          size={13}
          className="text-muted-foreground/30 mt-0.5 flex-shrink-0 group-hover:text-muted-foreground/60 transition-colors"
        />
        <p className="text-xs sm:text-sm font-medium text-foreground leading-snug break-words flex-1 min-w-0">
          {task.title}
        </p>
      </div>

      {/* footer row */}
      <div className="flex items-center justify-between gap-2">
        <PriorityBadge priority={task.priority} />
        <div className="flex items-center gap-1.5">
          {task.comments.length > 0 && (
            <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
              <MessageCircle size={10} />
              {task.comments.length}
            </span>
          )}
          <AssigneeAvatar name={task.assigneeName} />
          {task.dueDate && (
            <span
              className={cn(
                "text-[10px] tabular-nums",
                overdue
                  ? "text-destructive font-semibold"
                  : "text-muted-foreground",
              )}
            >
              {formatDate(task.dueDate)}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

// ── Kanban Column ─────────────────────────────────────────────────────────────
interface KanbanColumnProps {
  status: TaskStatus;
  label: string;
  tasks: Task[];
  onCardClick: (task: Task) => void;
  onDragStart: (taskId: string) => void;
  onDrop: (status: TaskStatus) => void;
  onCreateClick: () => void;
}

const COLUMN_HEADER_COLORS: Record<TaskStatus, string> = {
  todo: "bg-muted-foreground/15 text-muted-foreground",
  "in-progress": "bg-info/15 text-info",
  review: "bg-warning/15 text-warning",
  blocked: "bg-destructive/15 text-destructive",
  done: "bg-success/15 text-success",
};

function KanbanColumn({
  status,
  label: _label,
  tasks,
  onCardClick,
  onDragStart,
  onDrop,
  onCreateClick,
}: KanbanColumnProps) {
  const [dragOver, setDragOver] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col min-w-[240px] sm:min-w-[260px] flex-1 rounded-xl bg-muted/20 border border-border/50 p-3 min-h-[400px] transition-colors duration-150",
        dragOver && "bg-primary/5 border-primary/40 ring-1 ring-primary/20",
      )}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={() => {
        setDragOver(false);
        onDrop(status);
      }}
      data-ocid={`kanban-column-${status}`}
    >
      {/* Column header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <StatusBadge status={status} showDot />
          <span
            className={cn(
              "text-xs font-semibold px-1.5 py-0.5 rounded-md min-w-[20px] text-center tabular-nums",
              COLUMN_HEADER_COLORS[status],
            )}
          >
            {tasks.length}
          </span>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onCreateClick}
          className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
          aria-label="Add task"
          data-ocid={`kanban-add-${status}`}
        >
          <Plus size={13} />
        </Button>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2 flex-1">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 py-8 text-center">
            <div className="w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center mb-2">
              <ChevronRight size={14} className="text-muted-foreground/50" />
            </div>
            <p className="text-xs text-muted-foreground/60">Drop here</p>
          </div>
        ) : (
          tasks.map((task) => (
            <KanbanCard
              key={task.id}
              task={task}
              onClick={() => onCardClick(task)}
              onDragStart={onDragStart}
            />
          ))
        )}
      </div>
    </div>
  );
}

// ── Main Tasks Page ───────────────────────────────────────────────────────────
export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [view, setView] = useState<"kanban" | "list">("kanban");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | "all">(
    "all",
  );
  const [memberFilter, setMemberFilter] = useState<string>("all");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  // Unique assignees for filter
  const assignees = Array.from(
    new Set(tasks.map((t) => t.assigneeName).filter((n): n is string => !!n)),
  ).sort();

  // Filtered tasks
  const filteredTasks = tasks.filter((task) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      task.title.toLowerCase().includes(q) ||
      (task.assigneeName ?? "").toLowerCase().includes(q) ||
      (task.description ?? "").toLowerCase().includes(q);
    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;
    const matchesMember =
      memberFilter === "all" || task.assigneeName === memberFilter;
    return matchesSearch && matchesStatus && matchesPriority && matchesMember;
  });

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleCreateTask = (form: TaskForm) => {
    const now = new Date().toISOString();
    const newTask: Task = {
      id: generateId(),
      title: form.title,
      description: form.description || undefined,
      status: form.status,
      priority: form.priority,
      assigneeName: form.assigneeName || undefined,
      dueDate: form.dueDate ? `${form.dueDate}T00:00:00Z` : undefined,
      createdAt: now,
      updatedAt: now,
      tags: [],
      comments: [],
    };
    setTasks((prev) => [newTask, ...prev]);
    toast.success("Task created");
  };

  const handleUpdateTask = (form: TaskForm) => {
    if (!editingTask) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === editingTask.id
          ? {
              ...t,
              title: form.title,
              description: form.description || undefined,
              status: form.status,
              priority: form.priority,
              assigneeName: form.assigneeName || undefined,
              dueDate: form.dueDate ? `${form.dueDate}T00:00:00Z` : undefined,
              updatedAt: new Date().toISOString(),
            }
          : t,
      ),
    );
    setSelectedTask((prev) =>
      prev?.id === editingTask.id
        ? {
            ...prev,
            title: form.title,
            description: form.description || undefined,
            status: form.status,
            priority: form.priority,
            assigneeName: form.assigneeName || undefined,
            dueDate: form.dueDate ? `${form.dueDate}T00:00:00Z` : undefined,
            updatedAt: new Date().toISOString(),
          }
        : prev,
    );
    toast.success("Task updated");
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    toast.success("Task deleted");
  };

  const handleAddComment = (taskId: string, text: string) => {
    const comment = {
      id: generateId(),
      authorId: "user-current",
      authorName: "You",
      content: text,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, comments: [...t.comments, comment] } : t,
      ),
    );
    setSelectedTask((prev) =>
      prev?.id === taskId
        ? { ...prev, comments: [...prev.comments, comment] }
        : prev,
    );
  };

  const handleDrop = (targetStatus: TaskStatus) => {
    if (!draggingId) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === draggingId
          ? { ...t, status: targetStatus, updatedAt: new Date().toISOString() }
          : t,
      ),
    );
    setDraggingId(null);
  };

  const openEditDialog = (task: Task) => {
    setEditingTask(task);
    setEditDialogOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setPriorityFilter("all");
    setMemberFilter("all");
  };

  const hasActiveFilters =
    searchQuery ||
    statusFilter !== "all" ||
    priorityFilter !== "all" ||
    memberFilter !== "all";

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 min-h-0">
      {/* Page Header */}
      <PageHeader
        title="Tasks"
        subtitle={`${filteredTasks.length} of ${tasks.length} tasks`}
        action={
          <div className="flex items-center gap-2">
            {/* View Toggle */}
            <div
              className="flex items-center bg-muted/60 rounded-lg p-0.5 border border-border/60"
              aria-label="View toggle"
            >
              <Button
                type="button"
                variant={view === "kanban" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setView("kanban")}
                className={cn(
                  "h-7 px-2.5 gap-1.5 text-xs rounded-md transition-smooth",
                  view === "kanban" && "shadow-sm",
                )}
                aria-pressed={view === "kanban"}
                data-ocid="view-toggle-kanban"
              >
                <KanbanSquare size={13} />
                <span className="hidden sm:inline">Kanban</span>
              </Button>
              <Button
                type="button"
                variant={view === "list" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setView("list")}
                className={cn(
                  "h-7 px-2.5 gap-1.5 text-xs rounded-md transition-smooth",
                  view === "list" && "shadow-sm",
                )}
                aria-pressed={view === "list"}
                data-ocid="view-toggle-list"
              >
                <List size={13} />
                <span className="hidden sm:inline">List</span>
              </Button>
            </div>
            {/* Create Task */}
            <Button
              type="button"
              size="sm"
              onClick={() => setCreateDialogOpen(true)}
              className="gap-1.5 btn-lift"
              data-ocid="create-task-btn"
            >
              <Plus size={14} />
              <span className="hidden sm:inline">New Task</span>
              <span className="sm:hidden">New</span>
            </Button>
          </div>
        }
      />

      {/* Filter Bar */}
      <FilterBar
        searchValue={searchQuery}
        searchPlaceholder="Search tasks…"
        onSearchChange={setSearchQuery}
        onClear={hasActiveFilters ? clearFilters : undefined}
      >
        {/* Status filter */}
        <Select
          value={statusFilter}
          onValueChange={(v) => setStatusFilter(v as TaskStatus | "all")}
        >
          <SelectTrigger
            className="h-8 text-xs w-32 sm:w-36"
            data-ocid="filter-status"
          >
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="todo">To Do</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="review">Review</SelectItem>
            <SelectItem value="blocked">Blocked</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>

        {/* Priority filter */}
        <Select
          value={priorityFilter}
          onValueChange={(v) => setPriorityFilter(v as TaskPriority | "all")}
        >
          <SelectTrigger
            className="h-8 text-xs w-32 sm:w-36"
            data-ocid="filter-priority"
          >
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>

        {/* Member filter */}
        <Select value={memberFilter} onValueChange={setMemberFilter}>
          <SelectTrigger
            className="h-8 text-xs w-36 sm:w-40"
            data-ocid="filter-member"
          >
            <SelectValue placeholder="Assignee" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Members</SelectItem>
            {assignees.map((name) => (
              <SelectItem key={name} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FilterBar>

      {/* KANBAN VIEW */}
      {view === "kanban" && (
        <div
          className="flex gap-3 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-thin"
          data-ocid="kanban-board"
        >
          {KANBAN_COLUMNS.map((col) => (
            <KanbanColumn
              key={col.status}
              status={col.status}
              label={col.label}
              tasks={filteredTasks.filter((t) => t.status === col.status)}
              onCardClick={(task) => setSelectedTask(task)}
              onDragStart={(id) => setDraggingId(id)}
              onDrop={handleDrop}
              onCreateClick={() => setCreateDialogOpen(true)}
            />
          ))}
        </div>
      )}

      {/* LIST VIEW */}
      {view === "list" && (
        <div
          className="rounded-xl border border-border bg-card overflow-hidden shadow-sm"
          data-ocid="task-list-table"
        >
          {filteredTasks.length === 0 ? (
            <EmptyState
              title="No tasks found"
              description="Try adjusting your search or filters."
              action={{ label: "Clear filters", onClick: clearFilters }}
            />
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30 hover:bg-muted/30 border-b border-border">
                    <TableHead className="text-overline text-muted-foreground w-[40%] min-w-[180px] pl-4">
                      Task
                    </TableHead>
                    <TableHead className="text-overline text-muted-foreground min-w-[100px]">
                      Status
                    </TableHead>
                    <TableHead className="text-overline text-muted-foreground min-w-[90px]">
                      Priority
                    </TableHead>
                    <TableHead className="text-overline text-muted-foreground min-w-[120px]">
                      Assignee
                    </TableHead>
                    <TableHead className="text-overline text-muted-foreground min-w-[100px]">
                      Due Date
                    </TableHead>
                    <TableHead className="text-overline text-muted-foreground text-right min-w-[80px] pr-4">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTasks.map((task, i) => {
                    const overdue = isOverdue(task.dueDate);
                    return (
                      <TableRow
                        key={task.id}
                        className={cn(
                          "cursor-pointer transition-smooth group",
                          overdue && "border-l-2 border-l-destructive",
                          i % 2 === 0 ? "bg-card" : "bg-muted/10",
                        )}
                        onClick={() => setSelectedTask(task)}
                        data-ocid={`task-row-${task.id}`}
                      >
                        <TableCell className="py-3 pl-4">
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-sm font-medium text-foreground truncate max-w-[220px] sm:max-w-xs">
                              {task.title}
                            </span>
                            {task.projectName && (
                              <span className="text-xs text-muted-foreground">
                                {task.projectName}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={task.status} showDot />
                        </TableCell>
                        <TableCell>
                          <PriorityBadge priority={task.priority} />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <AssigneeAvatar name={task.assigneeName} />
                            <span className="text-xs text-muted-foreground truncate max-w-[80px] sm:max-w-[100px] hidden sm:block">
                              {task.assigneeName ?? "—"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span
                            className={cn(
                              "text-xs tabular-nums",
                              overdue
                                ? "text-destructive font-semibold"
                                : "text-muted-foreground",
                            )}
                          >
                            {formatDate(task.dueDate)}
                            {overdue && (
                              <span className="ml-1.5 text-[10px] bg-destructive/12 text-destructive px-1.5 py-0.5 rounded-full font-semibold hidden sm:inline">
                                Overdue
                              </span>
                            )}
                          </span>
                        </TableCell>
                        <TableCell
                          className="text-right pr-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-smooth">
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => openEditDialog(task)}
                              className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                              aria-label="Edit task"
                              data-ocid={`task-edit-${task.id}`}
                            >
                              <Pencil size={12} />
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    `Delete "${task.title}"? This cannot be undone.`,
                                  )
                                ) {
                                  handleDeleteTask(task.id);
                                }
                              }}
                              className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive"
                              aria-label="Delete task"
                              data-ocid={`task-delete-${task.id}`}
                            >
                              <Trash2 size={12} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      )}

      {/* ── Dialogs ─────────────────────────────────────────────────────────── */}

      {/* Create Dialog */}
      <TaskFormDialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
        title="New Task"
        submitLabel="Create Task"
        onSubmit={handleCreateTask}
      />

      {/* Edit Dialog */}
      {editingTask && (
        <TaskFormDialog
          open={editDialogOpen}
          onClose={() => {
            setEditDialogOpen(false);
            setEditingTask(null);
          }}
          initialValues={taskToForm(editingTask)}
          title="Edit Task"
          submitLabel="Save Changes"
          onSubmit={handleUpdateTask}
        />
      )}

      {/* Task Detail Dialog */}
      <TaskDetailDialog
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
        onEdit={(task) => {
          setSelectedTask(null);
          openEditDialog(task);
        }}
        onDelete={handleDeleteTask}
        onAddComment={handleAddComment}
      />
    </div>
  );
}
