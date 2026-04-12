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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { mockProjects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Milestone, Project, ProjectStatus } from "@/types";
import {
  Archive,
  ArrowUpDown,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Flag,
  MoreHorizontal,
  Pencil,
  Plus,
  Trash2,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

// ─── helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function toInputDate(iso: string) {
  return iso.split("T")[0];
}

function projectInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

const PROJECT_COLORS: Record<string, string> = {
  "proj-1": "bg-primary text-primary-foreground",
  "proj-2": "bg-success text-primary-foreground",
  "proj-3": "bg-warning text-primary-foreground",
  "proj-4": "bg-info text-primary-foreground",
  "proj-5": "bg-destructive text-destructive-foreground",
};

function getProjectColorClass(id: string) {
  return PROJECT_COLORS[id] ?? "bg-primary text-primary-foreground";
}

function getProgressColor(status: ProjectStatus) {
  if (status === "on-track" || status === "completed") return "bg-success";
  if (status === "at-risk") return "bg-warning";
  if (status === "off-track") return "bg-destructive";
  return "bg-muted-foreground";
}

function getAccentColor(status: ProjectStatus) {
  if (status === "on-track" || status === "completed") return "bg-success";
  if (status === "at-risk") return "bg-warning";
  if (status === "off-track") return "bg-destructive";
  return "bg-muted-foreground/40";
}

// ─── types ────────────────────────────────────────────────────────────────────

type MilestoneStatus = "not-started" | "in-progress" | "completed" | "blocked";

interface MilestoneWithStatus extends Milestone {
  status: MilestoneStatus;
}

function toMilestoneWithStatus(m: Milestone): MilestoneWithStatus {
  return {
    ...m,
    status: m.completed ? "completed" : "not-started",
  };
}

const TEAM_MEMBERS = [
  { id: "member-1", name: "Sarah Chen" },
  { id: "member-2", name: "Priya Sharma" },
  { id: "member-3", name: "Marcus Webb" },
  { id: "member-4", name: "James Liu" },
  { id: "member-5", name: "Tom Okafor" },
  { id: "member-6", name: "Lin Zhao" },
];

const MEMBER_COLORS = [
  "bg-primary/20 text-primary",
  "bg-success/20 text-success",
  "bg-warning/20 text-warning",
  "bg-info/20 text-info",
  "bg-destructive/20 text-destructive",
  "bg-accent/20 text-accent-foreground",
];

function getMemberColor(index: number) {
  return MEMBER_COLORS[index % MEMBER_COLORS.length];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ─── MemberAvatars ────────────────────────────────────────────────────────────

function MemberAvatars({ memberIds }: { memberIds: string[] }) {
  const visible = memberIds.slice(0, 3);
  const extra = memberIds.length - 3;
  return (
    <div className="flex items-center -space-x-1.5">
      {visible.map((id, i) => {
        const member = TEAM_MEMBERS.find((m) => m.id === id);
        const colorClass = getMemberColor(i);
        return (
          <span
            key={id}
            title={member?.name}
            className={cn(
              "w-6 h-6 rounded-full border-2 border-card flex items-center justify-center text-[9px] font-bold flex-shrink-0",
              colorClass,
            )}
          >
            {member ? getInitials(member.name) : "?"}
          </span>
        );
      })}
      {extra > 0 && (
        <span className="w-6 h-6 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[9px] font-semibold text-muted-foreground flex-shrink-0">
          +{extra}
        </span>
      )}
    </div>
  );
}

// ─── AddProjectDialog ─────────────────────────────────────────────────────────

interface AddProjectDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (project: Project) => void;
}

function AddProjectDialog({ open, onClose, onAdd }: AddProjectDialogProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [nameError, setNameError] = useState(false);

  function handleSubmit() {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    const owner = TEAM_MEMBERS.find((m) => m.id === ownerId);
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      name: name.trim(),
      description: description.trim(),
      status: "on-track" as ProjectStatus,
      progress: 0,
      ownerId: ownerId || "member-1",
      ownerName: owner?.name ?? "Sarah Chen",
      startDate: startDate
        ? `${startDate}T00:00:00Z`
        : new Date().toISOString(),
      endDate: endDate ? `${endDate}T00:00:00Z` : new Date().toISOString(),
      milestones: [],
      tags: [],
      taskCount: 0,
      completedTaskCount: 0,
      memberIds: ownerId ? [ownerId] : [],
    };
    onAdd(newProject);
    setName("");
    setDescription("");
    setOwnerId("");
    setStartDate("");
    setEndDate("");
    setNameError(false);
    onClose();
    toast.success(`Project "${newProject.name}" created`);
  }

  function handleClose() {
    setName("");
    setDescription("");
    setOwnerId("");
    setStartDate("");
    setEndDate("");
    setNameError(false);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent className="max-w-[92vw] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg font-semibold">
            New Project
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-1">
          <div className="space-y-1.5">
            <Label htmlFor="proj-name" className="text-sm font-medium">
              Project Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="proj-name"
              placeholder="e.g. Payments Platform v3"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              className={cn(
                "h-9 sm:h-10",
                nameError &&
                  "border-destructive focus-visible:ring-destructive",
              )}
              data-ocid="add-project-name"
            />
            {nameError && (
              <p className="text-xs text-destructive">
                Project name is required.
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="proj-desc" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="proj-desc"
              placeholder="Briefly describe the project goal…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              data-ocid="add-project-description"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="proj-owner" className="text-sm font-medium">
              Owner
            </Label>
            <Select value={ownerId} onValueChange={setOwnerId}>
              <SelectTrigger
                id="proj-owner"
                className="h-9 sm:h-10"
                data-ocid="add-project-owner"
              >
                <SelectValue placeholder="Select owner" />
              </SelectTrigger>
              <SelectContent>
                {TEAM_MEMBERS.map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    {m.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="proj-start" className="text-sm font-medium">
                Start Date
              </Label>
              <Input
                id="proj-start"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-9 sm:h-10"
                data-ocid="add-project-start-date"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="proj-end" className="text-sm font-medium">
                End Date
              </Label>
              <Input
                id="proj-end"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="h-9 sm:h-10"
                data-ocid="add-project-end-date"
              />
            </div>
          </div>
        </div>
        <DialogFooter className="pt-2 gap-2">
          <Button type="button" variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="btn-lift"
            data-ocid="add-project-submit"
          >
            Create Project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ─── EditProjectDialog ────────────────────────────────────────────────────────

interface EditProjectDialogProps {
  open: boolean;
  project: Project | null;
  onClose: () => void;
  onSave: (updated: Project) => void;
}

function EditProjectDialog({
  open,
  project,
  onClose,
  onSave,
}: EditProjectDialogProps) {
  const [name, setName] = useState(project?.name ?? "");
  const [description, setDescription] = useState(project?.description ?? "");
  const [ownerId, setOwnerId] = useState(project?.ownerId ?? "");
  const [startDate, setStartDate] = useState(
    project?.startDate ? toInputDate(project.startDate) : "",
  );
  const [endDate, setEndDate] = useState(
    project?.endDate ? toInputDate(project.endDate) : "",
  );
  const [nameError, setNameError] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen && project) {
      setName(project.name);
      setDescription(project.description ?? "");
      setOwnerId(project.ownerId ?? "");
      setStartDate(project.startDate ? toInputDate(project.startDate) : "");
      setEndDate(project.endDate ? toInputDate(project.endDate) : "");
      setNameError(false);
    }
    if (!isOpen) onClose();
  };

  function handleSubmit() {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    if (!project) return;
    const owner = TEAM_MEMBERS.find((m) => m.id === ownerId);
    const updated: Project = {
      ...project,
      name: name.trim(),
      description: description.trim(),
      ownerId: ownerId || project.ownerId,
      ownerName: owner?.name ?? project.ownerName,
      startDate: startDate ? `${startDate}T00:00:00Z` : project.startDate,
      endDate: endDate ? `${endDate}T00:00:00Z` : project.endDate,
    };
    onSave(updated);
    onClose();
    toast.success(`Project "${updated.name}" updated`);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[92vw] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Edit Project
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-1">
          <div className="space-y-1.5">
            <Label htmlFor="edit-proj-name" className="text-sm font-medium">
              Project Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-proj-name"
              placeholder="e.g. Payments Platform v3"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              className={cn(
                "h-9 sm:h-10",
                nameError &&
                  "border-destructive focus-visible:ring-destructive",
              )}
              data-ocid="edit-project-name"
            />
            {nameError && (
              <p className="text-xs text-destructive">
                Project name is required.
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="edit-proj-desc" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="edit-proj-desc"
              placeholder="Briefly describe the project goal…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              data-ocid="edit-project-description"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="edit-proj-owner" className="text-sm font-medium">
              Owner
            </Label>
            <Select value={ownerId} onValueChange={setOwnerId}>
              <SelectTrigger
                id="edit-proj-owner"
                className="h-9 sm:h-10"
                data-ocid="edit-project-owner"
              >
                <SelectValue placeholder="Select owner" />
              </SelectTrigger>
              <SelectContent>
                {TEAM_MEMBERS.map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    {m.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="edit-proj-start" className="text-sm font-medium">
                Start Date
              </Label>
              <Input
                id="edit-proj-start"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-9 sm:h-10"
                data-ocid="edit-project-start-date"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="edit-proj-end" className="text-sm font-medium">
                End Date
              </Label>
              <Input
                id="edit-proj-end"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="h-9 sm:h-10"
                data-ocid="edit-project-end-date"
              />
            </div>
          </div>
        </div>
        <DialogFooter className="pt-2 gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="btn-lift"
            data-ocid="edit-project-submit"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ─── AddMilestoneDialog ───────────────────────────────────────────────────────

interface AddMilestoneDialogProps {
  open: boolean;
  projectId: string;
  onClose: () => void;
  onAdd: (projectId: string, milestone: MilestoneWithStatus) => void;
}

function AddMilestoneDialog({
  open,
  projectId,
  onClose,
  onAdd,
}: AddMilestoneDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState<MilestoneStatus>("not-started");
  const [titleError, setTitleError] = useState(false);

  function handleSubmit() {
    if (!title.trim()) {
      setTitleError(true);
      return;
    }
    const milestone: MilestoneWithStatus = {
      id: `ms-${Date.now()}`,
      projectId,
      title: title.trim(),
      description: description.trim(),
      dueDate: dueDate ? `${dueDate}T00:00:00Z` : new Date().toISOString(),
      completed: status === "completed",
      order: 99,
      status,
    };
    onAdd(projectId, milestone);
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("not-started");
    setTitleError(false);
    onClose();
    toast.success(`Milestone "${milestone.title}" added`);
  }

  function handleClose() {
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("not-started");
    setTitleError(false);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent className="max-w-[92vw] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg font-semibold">
            Add Milestone
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-1">
          <div className="space-y-1.5">
            <Label htmlFor="ms-title" className="text-sm font-medium">
              Milestone Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="ms-title"
              placeholder="e.g. Beta launch"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError(false);
              }}
              className={cn(
                "h-9 sm:h-10",
                titleError &&
                  "border-destructive focus-visible:ring-destructive",
              )}
              data-ocid="add-milestone-title"
            />
            {titleError && (
              <p className="text-xs text-destructive">
                Milestone name is required.
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ms-desc" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="ms-desc"
              placeholder="Optional context…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="ms-due" className="text-sm font-medium">
                Due Date
              </Label>
              <Input
                id="ms-due"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="h-9 sm:h-10"
                data-ocid="add-milestone-due-date"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ms-status" className="text-sm font-medium">
                Status
              </Label>
              <Select
                value={status}
                onValueChange={(v) => setStatus(v as MilestoneStatus)}
              >
                <SelectTrigger
                  id="ms-status"
                  className="h-9 sm:h-10"
                  data-ocid="add-milestone-status"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="not-started">Not Started</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter className="pt-2 gap-2">
          <Button type="button" variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="btn-lift"
            data-ocid="add-milestone-submit"
          >
            Add Milestone
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ─── MilestoneRow ─────────────────────────────────────────────────────────────

interface MilestoneRowProps {
  milestone: MilestoneWithStatus;
  onEdit: (id: string, updates: Partial<MilestoneWithStatus>) => void;
  onDelete: (id: string) => void;
}

function MilestoneRow({ milestone, onEdit, onDelete }: MilestoneRowProps) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(milestone.title);
  const [editDate, setEditDate] = useState(toInputDate(milestone.dueDate));
  const [editStatus, setEditStatus] = useState<MilestoneStatus>(
    milestone.status,
  );

  function handleSave() {
    onEdit(milestone.id, {
      title: editTitle.trim() || milestone.title,
      dueDate: editDate ? `${editDate}T00:00:00Z` : milestone.dueDate,
      status: editStatus,
      completed: editStatus === "completed",
    });
    setEditing(false);
  }

  function handleCancel() {
    setEditTitle(milestone.title);
    setEditDate(toInputDate(milestone.dueDate));
    setEditStatus(milestone.status);
    setEditing(false);
  }

  const statusMap: Record<MilestoneStatus, string> = {
    "not-started": "todo",
    "in-progress": "in-progress",
    completed: "done",
    blocked: "blocked",
  };

  if (editing) {
    return (
      <div className="flex flex-wrap items-center gap-2 px-3 py-2.5 rounded-lg bg-muted/60 border border-border/60">
        <Input
          className="h-7 text-xs sm:text-sm flex-1 min-w-[120px]"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          data-ocid="milestone-edit-title"
        />
        <Input
          type="date"
          className="h-7 text-xs sm:text-sm w-32 sm:w-36"
          value={editDate}
          onChange={(e) => setEditDate(e.target.value)}
          data-ocid="milestone-edit-date"
        />
        <Select
          value={editStatus}
          onValueChange={(v) => setEditStatus(v as MilestoneStatus)}
        >
          <SelectTrigger
            className="h-7 text-xs w-28 sm:w-32"
            data-ocid="milestone-edit-status"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="not-started">Not Started</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="blocked">Blocked</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1.5">
          <Button
            type="button"
            size="sm"
            className="h-7 px-2.5 text-xs"
            onClick={handleSave}
            data-ocid="milestone-save"
          >
            Save
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="h-7 px-2.5 text-xs"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/40 transition-smooth"
      data-ocid={`milestone-row-${milestone.id}`}
    >
      <span className="flex-shrink-0 text-muted-foreground">
        {milestone.completed ? (
          <CheckCircle2 className="w-4 h-4 text-success" />
        ) : (
          <Circle className="w-4 h-4" />
        )}
      </span>
      <span
        className={cn(
          "flex-1 text-xs sm:text-sm font-medium truncate",
          milestone.completed && "line-through text-muted-foreground",
        )}
      >
        {milestone.title}
      </span>
      <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:block">
        {formatDate(milestone.dueDate)}
      </span>
      <StatusBadge
        status={
          statusMap[milestone.status] as Parameters<
            typeof StatusBadge
          >[0]["status"]
        }
      />
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-smooth">
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
          onClick={() => setEditing(true)}
          aria-label="Edit milestone"
          data-ocid={`milestone-edit-${milestone.id}`}
        >
          <Pencil className="w-3.5 h-3.5" />
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive"
          onClick={() => onDelete(milestone.id)}
          aria-label="Delete milestone"
          data-ocid={`milestone-delete-${milestone.id}`}
        >
          <Trash2 className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  milestones: MilestoneWithStatus[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onArchive: (id: string) => void;
  onAddMilestone: (projectId: string) => void;
  onEditMilestone: (
    projectId: string,
    milestoneId: string,
    updates: Partial<MilestoneWithStatus>,
  ) => void;
  onDeleteMilestone: (projectId: string, milestoneId: string) => void;
}

function ProjectCard({
  project,
  milestones,
  onDelete,
  onEdit,
  onArchive,
  onAddMilestone,
  onEditMilestone,
  onDeleteMilestone,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [sortAsc, setSortAsc] = useState(true);

  const sortedMilestones = useMemo(() => {
    return [...milestones].sort((a, b) => {
      const diff =
        new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      return sortAsc ? diff : -diff;
    });
  }, [milestones, sortAsc]);

  const completedCount = milestones.filter((m) => m.completed).length;
  const accentColor = getAccentColor(project.status);
  const progressColor = getProgressColor(project.status);

  return (
    <div
      className={cn(
        "card-interactive rounded-xl overflow-hidden flex flex-col",
        "transition-all duration-200",
        expanded && "shadow-sm",
      )}
      data-ocid={`project-card-${project.id}`}
    >
      {/* Status accent bar */}
      <div className={cn("h-0.5 w-full flex-shrink-0", accentColor)} />

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm",
                getProjectColorClass(project.id),
              )}
            >
              {projectInitial(project.name)}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-foreground truncate leading-snug tracking-tight">
                {project.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                {project.ownerName}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <StatusBadge status={project.status} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground transition-smooth"
                  aria-label="Project options"
                  data-ocid={`project-menu-${project.id}`}
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem
                  onClick={() => onEdit(project.id)}
                  data-ocid={`project-edit-${project.id}`}
                >
                  <Pencil className="w-3.5 h-3.5 mr-2" />
                  Edit Project
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onArchive(project.id)}
                  data-ocid={`project-archive-${project.id}`}
                >
                  <Archive className="w-3.5 h-3.5 mr-2" />
                  Archive
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => onDelete(project.id)}
                  className="text-destructive focus:text-destructive focus:bg-destructive/10"
                  data-ocid={`project-delete-${project.id}`}
                >
                  <Trash2 className="w-3.5 h-3.5 mr-2" />
                  Delete Project
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Description */}
        {project.description && (
          <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground font-medium">
              Progress
            </span>
            <span className="text-xs font-semibold tabular-nums text-foreground">
              {project.progress}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                progressColor,
              )}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Flag className="w-3.5 h-3.5 flex-shrink-0" />
              <span>
                {completedCount}/{milestones.length}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="hidden sm:inline truncate max-w-[110px]">
                {formatDate(project.endDate)}
              </span>
              <span className="sm:hidden">
                {new Date(project.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <MemberAvatars memberIds={project.memberIds} />
            {project.memberIds.length > 0 && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="w-3 h-3" />
                {project.memberIds.length}
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] px-1.5 py-0 font-normal h-4"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Milestone dots preview */}
        {milestones.length > 0 && !expanded && (
          <div className="flex items-center gap-1 mb-3 flex-wrap">
            {milestones.slice(0, 8).map((ms) => (
              <span
                key={ms.id}
                title={ms.title}
                className={cn(
                  "w-2 h-2 rounded-full flex-shrink-0",
                  ms.completed
                    ? "bg-success"
                    : ms.status === "blocked"
                      ? "bg-destructive"
                      : ms.status === "in-progress"
                        ? "bg-info"
                        : "bg-border",
                )}
              />
            ))}
            {milestones.length > 8 && (
              <span className="text-[10px] text-muted-foreground">
                +{milestones.length - 8}
              </span>
            )}
          </div>
        )}

        {/* Expand toggle */}
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="w-full h-7 text-xs text-muted-foreground hover:text-foreground gap-1.5 mt-auto transition-smooth"
          onClick={() => setExpanded((v) => !v)}
          data-ocid={`project-expand-${project.id}`}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> Collapse
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> Show Details
            </>
          )}
        </Button>
      </div>

      {/* Expanded state */}
      {expanded && (
        <div className="border-t border-border bg-muted/20 px-4 sm:px-5 py-4">
          {/* Milestones header */}
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <span className="text-overline text-muted-foreground">
              Milestones ({milestones.length})
            </span>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-6 px-2 text-xs text-muted-foreground gap-1"
                onClick={() => setSortAsc((v) => !v)}
                data-ocid={`milestone-sort-${project.id}`}
              >
                <ArrowUpDown className="w-3 h-3" />
                {sortAsc ? "Oldest" : "Newest"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="h-6 px-2 text-xs gap-1 btn-lift"
                onClick={() => onAddMilestone(project.id)}
                data-ocid={`add-milestone-btn-${project.id}`}
              >
                <Plus className="w-3 h-3" /> Add
              </Button>
            </div>
          </div>

          {/* Milestone list */}
          {sortedMilestones.length === 0 ? (
            <div className="text-center py-6 text-xs text-muted-foreground">
              No milestones yet — add one to track progress.
            </div>
          ) : (
            <div className="overflow-x-auto -mx-1">
              <div className="space-y-1 min-w-[280px] px-1">
                {sortedMilestones.map((ms) => (
                  <MilestoneRow
                    key={ms.id}
                    milestone={ms}
                    onEdit={(msId, updates) =>
                      onEditMilestone(project.id, msId, updates)
                    }
                    onDelete={(msId) => onDeleteMilestone(project.id, msId)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Projects page ────────────────────────────────────────────────────────────

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(() =>
    mockProjects.map((p) => ({
      ...p,
      milestones: p.milestones.map(toMilestoneWithStatus) as Milestone[],
    })),
  );

  const [milestonesMap, setMilestonesMap] = useState<
    Record<string, MilestoneWithStatus[]>
  >(() => {
    const map: Record<string, MilestoneWithStatus[]> = {};
    for (const p of mockProjects) {
      map[p.id] = p.milestones.map(toMilestoneWithStatus);
    }
    return map;
  });

  const [addProjectOpen, setAddProjectOpen] = useState(false);
  const [addMilestoneForProject, setAddMilestoneForProject] = useState<
    string | null
  >(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.description ?? "").toLowerCase().includes(q) ||
        p.ownerName.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "all" || p.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [projects, statusFilter, searchQuery]);

  function handleAddProject(project: Project) {
    setProjects((prev) => [project, ...prev]);
    setMilestonesMap((prev) => ({ ...prev, [project.id]: [] }));
  }

  function handleDeleteProject(id: string) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setMilestonesMap((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    toast.success("Project deleted");
  }

  function handleArchiveProject(id: string) {
    const project = projects.find((p) => p.id === id);
    if (!project) return;
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "paused" as ProjectStatus } : p,
      ),
    );
    toast.success(`"${project.name}" archived`);
  }

  function handleEditProject(id: string) {
    const project = projects.find((p) => p.id === id);
    if (project) setEditingProject(project);
  }

  function handleSaveProject(updated: Project) {
    setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  }

  function handleAddMilestone(
    projectId: string,
    milestone: MilestoneWithStatus,
  ) {
    setMilestonesMap((prev) => ({
      ...prev,
      [projectId]: [...(prev[projectId] ?? []), milestone],
    }));
  }

  function handleEditMilestone(
    projectId: string,
    milestoneId: string,
    updates: Partial<MilestoneWithStatus>,
  ) {
    setMilestonesMap((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] ?? []).map((ms) =>
        ms.id === milestoneId ? { ...ms, ...updates } : ms,
      ),
    }));
    toast.success("Milestone updated");
  }

  function handleDeleteMilestone(projectId: string, milestoneId: string) {
    setMilestonesMap((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] ?? []).filter(
        (ms) => ms.id !== milestoneId,
      ),
    }));
    toast.success("Milestone removed");
  }

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
  };

  return (
    <div className="p-4 sm:p-6 max-w-screen-2xl mx-auto">
      <PageHeader
        title="Projects"
        subtitle={`${projects.length} project${projects.length !== 1 ? "s" : ""} · ${filteredProjects.length} shown`}
        action={
          <Button
            type="button"
            onClick={() => setAddProjectOpen(true)}
            className="gap-2 btn-lift"
            data-ocid="add-project-btn"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Project</span>
            <span className="sm:hidden">New</span>
          </Button>
        }
      />

      {/* Filter bar */}
      <div className="mb-5">
        <FilterBar
          searchValue={searchQuery}
          searchPlaceholder="Search projects…"
          onSearchChange={setSearchQuery}
          onClear={clearFilters}
        >
          <Select
            value={statusFilter}
            onValueChange={(v) => setStatusFilter(v as ProjectStatus | "all")}
          >
            <SelectTrigger
              className="h-8 text-xs w-36"
              data-ocid="filter-project-status"
            >
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="on-track">On Track</SelectItem>
              <SelectItem value="at-risk">At Risk</SelectItem>
              <SelectItem value="off-track">Off Track</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="paused">Paused</SelectItem>
            </SelectContent>
          </Select>
        </FilterBar>
      </div>

      {filteredProjects.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/10 py-16 sm:py-20 text-center px-4"
          data-ocid="projects-empty-state"
        >
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <Flag className="w-5 h-5 text-muted-foreground" />
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
            {projects.length === 0 ? "No projects yet" : "No matching projects"}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-5 max-w-xs">
            {projects.length === 0
              ? "Create your first project to start tracking progress, milestones, and team velocity."
              : "Try adjusting your search or filters."}
          </p>
          {projects.length === 0 ? (
            <Button
              type="button"
              onClick={() => setAddProjectOpen(true)}
              className="gap-2 btn-lift"
            >
              <Plus className="w-4 h-4" /> New Project
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              onClick={clearFilters}
              className="gap-2"
            >
              Clear Filters
            </Button>
          )}
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          data-ocid="projects-grid"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              milestones={milestonesMap[project.id] ?? []}
              onDelete={handleDeleteProject}
              onEdit={handleEditProject}
              onArchive={handleArchiveProject}
              onAddMilestone={(pid) => setAddMilestoneForProject(pid)}
              onEditMilestone={handleEditMilestone}
              onDeleteMilestone={handleDeleteMilestone}
            />
          ))}
        </div>
      )}

      <AddProjectDialog
        open={addProjectOpen}
        onClose={() => setAddProjectOpen(false)}
        onAdd={handleAddProject}
      />

      <EditProjectDialog
        open={!!editingProject}
        project={editingProject}
        onClose={() => setEditingProject(null)}
        onSave={handleSaveProject}
      />

      <AddMilestoneDialog
        open={!!addMilestoneForProject}
        projectId={addMilestoneForProject ?? ""}
        onClose={() => setAddMilestoneForProject(null)}
        onAdd={handleAddMilestone}
      />
    </div>
  );
}
