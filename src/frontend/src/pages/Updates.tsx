import { EmptyState } from "@/components/shared/EmptyState";
import { PageHeader } from "@/components/shared/PageHeader";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { mockTeam } from "@/data/team";
import { mockUpdates } from "@/data/updates";
import { cn } from "@/lib/utils";
import type { Update, UpdateType } from "@/types";
import {
  AlertTriangle,
  ChevronDown,
  Megaphone,
  MoreHorizontal,
  Pencil,
  Pin,
  Plus,
  SmilePlus,
  Trash2,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type { ComponentType } from "react";

// ── Type config ───────────────────────────────────────────────────────────────

const UPDATE_TYPE_CONFIG: Record<
  UpdateType,
  {
    label: string;
    icon: ComponentType<{ size?: number; className?: string }>;
    borderClass: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
  }
> = {
  announcement: {
    label: "Announcement",
    icon: Megaphone,
    borderClass: "border-l-primary",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    iconBg: "bg-primary/10 text-primary",
  },
  milestone: {
    label: "Milestone",
    icon: Trophy,
    borderClass: "border-l-success",
    badgeBg: "bg-success/10",
    badgeText: "text-success",
    iconBg: "bg-success/10 text-success",
  },
  alert: {
    label: "Blocker",
    icon: AlertTriangle,
    borderClass: "border-l-destructive",
    badgeBg: "bg-destructive/10",
    badgeText: "text-destructive",
    iconBg: "bg-destructive/10 text-destructive",
  },
  release: {
    label: "Release",
    icon: Zap,
    borderClass: "border-l-info",
    badgeBg: "bg-info/10",
    badgeText: "text-info",
    iconBg: "bg-info/10 text-info",
  },
  retrospective: {
    label: "Retrospective",
    icon: ChevronDown,
    borderClass: "border-l-warning",
    badgeBg: "bg-warning/10",
    badgeText: "text-warning",
    iconBg: "bg-warning/10 text-warning",
  },
};

const UPDATE_TYPES: UpdateType[] = [
  "announcement",
  "milestone",
  "alert",
  "release",
  "retrospective",
];

// ── Utilities ─────────────────────────────────────────────────────────────────

function formatRelativeTime(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60_000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatFullDate(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ── Type badge ────────────────────────────────────────────────────────────────
function UpdateTypeBadge({ type }: { type: UpdateType }) {
  const cfg = UPDATE_TYPE_CONFIG[type];
  const Icon = cfg.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-transparent",
        cfg.badgeBg,
        cfg.badgeText,
      )}
    >
      <Icon size={10} />
      {cfg.label}
    </span>
  );
}

// ── Update card ───────────────────────────────────────────────────────────────
interface UpdateCardProps {
  update: Update;
  onDelete: (id: string) => void;
  onEdit: (update: Update) => void;
  onTogglePin: (id: string) => void;
}

function UpdateCard({
  update,
  onDelete,
  onEdit,
  onTogglePin,
}: UpdateCardProps) {
  const cfg = UPDATE_TYPE_CONFIG[update.type];
  const Icon = cfg.icon;

  return (
    <div
      className={cn(
        "group relative bg-card border border-border border-l-4 rounded-lg",
        "hover:bg-muted/20 hover:border-border-strong",
        "transition-all duration-150",
        cfg.borderClass,
      )}
      data-ocid={`update-card-${update.id}`}
    >
      {/* Pinned ribbon */}
      {update.pinned && (
        <div className="absolute top-0 right-0 flex items-center gap-1 px-2 py-1 text-[10px] font-semibold text-muted-foreground bg-muted/60 rounded-bl-lg rounded-tr-md border-l border-b border-border">
          <Pin size={9} className="fill-current" />
          Pinned
        </div>
      )}

      <div className="px-4 pt-4 pb-3 sm:px-5 sm:pt-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          {/* Type icon */}
          <div
            className={cn(
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5",
              cfg.iconBg,
            )}
          >
            <Icon size={14} />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1 pr-8">
            {/* Meta row */}
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <UpdateTypeBadge type={update.type} />
              {update.projectName && (
                <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-md border border-border">
                  {update.projectName}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-foreground leading-snug mb-1.5">
              {update.title}
            </h3>

            {/* Body */}
            <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed line-clamp-3 whitespace-pre-line">
              {update.content}
            </p>
          </div>

          {/* Actions menu */}
          <div className="absolute top-3 right-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-7 w-7 text-muted-foreground hover:text-foreground",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-150",
                  )}
                  data-ocid={`update-menu-${update.id}`}
                >
                  <MoreHorizontal size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem
                  onClick={() => onEdit(update)}
                  data-ocid={`update-edit-${update.id}`}
                >
                  <Pencil size={13} className="mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onTogglePin(update.id)}
                  data-ocid={`update-pin-${update.id}`}
                >
                  <Pin size={13} className="mr-2" />
                  {update.pinned ? "Unpin" : "Pin to top"}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:text-destructive"
                  onClick={() => onDelete(update.id)}
                  data-ocid={`update-delete-${update.id}`}
                >
                  <Trash2 size={13} className="mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-border/60 flex-wrap">
          {/* Author */}
          <div className="flex items-center gap-1.5 min-w-0">
            <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold flex-shrink-0">
              {getInitials(update.authorName)}
            </div>
            <span className="text-xs font-medium text-foreground truncate">
              {update.authorName}
            </span>
          </div>

          {/* Right: reactions + timestamp */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {update.reactions.length > 0 && (
              <div className="flex items-center gap-1">
                {update.reactions.map((r) => (
                  <span
                    key={r.emoji}
                    className="inline-flex items-center gap-0.5 text-xs bg-muted px-1.5 py-0.5 rounded-md text-muted-foreground border border-border cursor-pointer hover:bg-muted/80 transition-colors"
                  >
                    {r.emoji}{" "}
                    <span className="tabular-nums text-[10px]">{r.count}</span>
                  </span>
                ))}
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
              title="Add reaction"
            >
              <SmilePlus size={12} />
            </Button>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-[11px] text-muted-foreground cursor-default whitespace-nowrap">
                    {formatRelativeTime(update.createdAt)}
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-xs">{formatFullDate(update.createdAt)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Visual type selector ──────────────────────────────────────────────────────
interface TypeSelectorProps {
  value: UpdateType;
  onChange: (t: UpdateType) => void;
}

function TypeSelector({ value, onChange }: TypeSelectorProps) {
  return (
    <div className="grid grid-cols-5 gap-1.5" data-ocid="update-type-selector">
      {UPDATE_TYPES.map((t) => {
        const cfg = UPDATE_TYPE_CONFIG[t];
        const Icon = cfg.icon;
        const isSelected = value === t;
        return (
          <button
            key={t}
            type="button"
            onClick={() => onChange(t)}
            className={cn(
              "flex flex-col items-center gap-1.5 p-2 rounded-lg border text-center transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
              isSelected
                ? cn(
                    "border-transparent shadow-sm",
                    cfg.badgeBg,
                    cfg.badgeText,
                    "font-semibold",
                  )
                : "border-border bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            data-ocid={`type-option-${t}`}
          >
            <span
              className={cn(
                "w-7 h-7 rounded-md flex items-center justify-center",
                isSelected ? cfg.iconBg : "bg-background",
              )}
            >
              <Icon size={13} />
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium leading-tight truncate w-full">
              {cfg.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── Create/Edit Dialog ────────────────────────────────────────────────────────
interface UpdateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPost: (type: UpdateType, author: string, content: string) => void;
  editingUpdate?: Update | null;
}

function UpdateDialog({
  open,
  onOpenChange,
  onPost,
  editingUpdate,
}: UpdateDialogProps) {
  const editingAuthorMember = editingUpdate
    ? mockTeam.find((m) => m.name === editingUpdate.authorName)
    : undefined;

  const [type, setType] = useState<UpdateType>(
    editingUpdate?.type ?? "announcement",
  );
  const [authorId, setAuthorId] = useState(
    editingAuthorMember?.id ?? mockTeam[0]?.id ?? "",
  );
  const [content, setContent] = useState(editingUpdate?.content ?? "");
  const [contentError, setContentError] = useState(false);

  function handleClose() {
    setType("announcement");
    setAuthorId(mockTeam[0]?.id ?? "");
    setContent("");
    setContentError(false);
    onOpenChange(false);
  }

  function handlePost() {
    if (!content.trim()) {
      setContentError(true);
      return;
    }
    const author = mockTeam.find((m) => m.id === authorId);
    onPost(type, author?.name ?? "Unknown", content.trim());
    handleClose();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[92vw] sm:max-w-lg"
        data-ocid="create-update-dialog"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base font-semibold">
            <Megaphone size={16} className="text-primary" />
            {editingUpdate ? "Edit Update" : "Post an Update"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Type selector */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Update Type</Label>
            <TypeSelector
              value={type}
              onChange={(t) => {
                setType(t);
              }}
            />
          </div>

          {/* Author */}
          <div className="space-y-1.5">
            <Label
              htmlFor="update-author-select"
              className="text-sm font-medium"
            >
              Author
            </Label>
            <Select value={authorId} onValueChange={setAuthorId}>
              <SelectTrigger
                id="update-author-select"
                className="h-9 text-sm"
                data-ocid="update-author-select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {mockTeam.map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    {m.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Content */}
          <div className="space-y-1.5">
            <Label
              htmlFor="update-content-input"
              className="text-sm font-medium"
            >
              Content <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="update-content-input"
              data-ocid="update-content-input"
              placeholder="What's happening? Share a status, milestone, or blocker..."
              className={cn(
                "min-h-[100px] text-sm resize-none",
                contentError && "border-destructive",
              )}
              rows={4}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                if (e.target.value.trim()) setContentError(false);
              }}
            />
            {contentError && (
              <p className="text-xs text-destructive">Content is required.</p>
            )}
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClose}
            data-ocid="update-discard-btn"
          >
            Discard
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={handlePost}
            data-ocid="update-post-btn"
          >
            {editingUpdate ? "Save Changes" : "Post Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Filter tabs ───────────────────────────────────────────────────────────────
type FilterValue = UpdateType | "all";

const FILTER_TABS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "announcement", label: "Announcements" },
  { value: "milestone", label: "Milestones" },
  { value: "alert", label: "Blockers" },
  { value: "release", label: "Releases" },
  { value: "retrospective", label: "Retrospectives" },
];

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Updates() {
  const sorted = [...mockUpdates].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
  const [updates, setUpdates] = useState<Update[]>(sorted);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingUpdate, setEditingUpdate] = useState<Update | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  function handlePost(type: UpdateType, authorName: string, content: string) {
    const newUpdate: Update = {
      id: editingUpdate ? editingUpdate.id : `upd-${Date.now()}`,
      type,
      title: content.split("\n")[0].slice(0, 80),
      content,
      authorId: "user-current",
      authorName,
      createdAt: new Date().toISOString(),
      pinned: editingUpdate?.pinned ?? false,
      reactions: editingUpdate?.reactions ?? [],
    };
    if (editingUpdate) {
      setUpdates((prev) => [
        newUpdate,
        ...prev.filter((u) => u.id !== editingUpdate.id),
      ]);
      setEditingUpdate(null);
    } else {
      setUpdates((prev) => [newUpdate, ...prev]);
    }
    setDialogOpen(false);
  }

  function handleDelete(id: string) {
    setUpdates((prev) => prev.filter((u) => u.id !== id));
  }

  function handleEdit(update: Update) {
    setEditingUpdate(update);
    setDialogOpen(true);
  }

  function handleTogglePin(id: string) {
    setUpdates((prev) =>
      prev.map((u) => (u.id === id ? { ...u, pinned: !u.pinned } : u)),
    );
  }

  function handleDialogOpenChange(open: boolean) {
    setDialogOpen(open);
    if (!open) setEditingUpdate(null);
  }

  // Sort: pinned first, then by date
  const filteredUpdates = updates
    .filter((u) => activeFilter === "all" || u.type === activeFilter)
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col gap-5 sm:gap-6">
      {/* Page Header */}
      <PageHeader
        title="Updates"
        subtitle="Track team announcements, releases, milestones, and blockers."
        action={
          <Button
            type="button"
            size="sm"
            onClick={() => setDialogOpen(true)}
            data-ocid="new-update-toggle-btn"
            className="gap-1.5"
          >
            <Plus size={14} />
            <span className="hidden xs:inline">New Update</span>
            <span className="xs:hidden">New</span>
          </Button>
        }
      />

      {/* Filter tabs */}
      <div
        className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5"
        data-ocid="update-filter-tabs"
      >
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.value;
          const cfg =
            tab.value !== "all"
              ? UPDATE_TYPE_CONFIG[tab.value as UpdateType]
              : null;
          const count =
            tab.value === "all"
              ? updates.length
              : updates.filter((u) => u.type === tab.value).length;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap",
                "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                isActive
                  ? cfg
                    ? cn(cfg.badgeBg, cfg.badgeText)
                    : "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent",
              )}
              data-ocid={`filter-tab-${tab.value}`}
            >
              {cfg && <cfg.icon size={10} />}
              {tab.label}
              <span
                className={cn(
                  "text-[10px] tabular-nums px-1 rounded",
                  isActive
                    ? cfg
                      ? "opacity-70"
                      : "bg-primary-foreground/20"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feed */}
      {filteredUpdates.length === 0 ? (
        <EmptyState
          icon={Megaphone}
          title={
            activeFilter === "all"
              ? "No updates yet"
              : `No ${UPDATE_TYPE_CONFIG[activeFilter as UpdateType]?.label ?? ""} updates`
          }
          description={
            activeFilter === "all"
              ? "Post your first update to keep the team informed."
              : "No updates of this type have been posted yet."
          }
          action={
            activeFilter === "all"
              ? {
                  label: "Post Update",
                  onClick: () => setDialogOpen(true),
                }
              : undefined
          }
        />
      ) : (
        <div
          className="flex flex-col gap-2.5 sm:gap-3"
          data-ocid="updates-feed"
        >
          {filteredUpdates.map((update) => (
            <UpdateCard
              key={update.id}
              update={update}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onTogglePin={handleTogglePin}
            />
          ))}
        </div>
      )}

      {/* Create/Edit Dialog */}
      <UpdateDialog
        open={dialogOpen}
        onOpenChange={handleDialogOpenChange}
        onPost={handlePost}
        editingUpdate={editingUpdate}
      />
    </div>
  );
}
