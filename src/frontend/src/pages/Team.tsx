import { EmptyState } from "@/components/shared/EmptyState";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockTeam } from "@/data/team";
import { cn } from "@/lib/utils";
import type { Member } from "@/types";
import {
  Activity,
  Briefcase,
  CheckCircle2,
  Clock,
  Mail,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  UserCircle2,
  UserPlus,
  Users,
  Wifi,
  WifiOff,
} from "lucide-react";
import { useMemo, useState } from "react";

// ── Avatar palette ───────────────────────────────────────────────────────────
const AVATAR_COLORS = [
  "bg-primary/20 text-primary",
  "bg-success/20 text-success",
  "bg-warning/20 text-warning",
  "bg-destructive/20 text-destructive",
  "bg-info/20 text-info",
  "bg-primary/30 text-primary",
  "bg-success/30 text-success",
  "bg-warning/30 text-warning",
];

function getAvatarColor(index: number) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length];
}

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  return parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
}

// ── Status dot styles ────────────────────────────────────────────────────────
const STATUS_DOT: Record<Member["status"], string> = {
  active: "bg-success shadow-[0_0_0_2px_oklch(var(--card))]",
  away: "bg-warning shadow-[0_0_0_2px_oklch(var(--card))]",
  offline: "bg-muted-foreground/50 shadow-[0_0_0_2px_oklch(var(--card))]",
};

// ── Role badge colors ────────────────────────────────────────────────────────
const ROLE_BADGE: Record<string, string> = {
  owner:
    "bg-primary/10 text-primary border border-primary/20 text-[10px] font-semibold",
  admin: "bg-info/10 text-info border border-info/20 text-[10px] font-semibold",
  member:
    "bg-muted text-muted-foreground border border-border text-[10px] font-semibold",
  viewer:
    "bg-muted/60 text-muted-foreground border border-border text-[10px] font-semibold",
};

// ── Member Card ───────────────────────────────────────────────────────────────
interface MemberCardProps {
  member: Member;
  colorIndex: number;
  onRemove: (id: string) => void;
}

function MemberCard({ member, colorIndex, onRemove }: MemberCardProps) {
  const initials = getInitials(member.name);
  const avatarColor = getAvatarColor(colorIndex);
  const totalTasks = member.activeTasks + member.completedTasks;
  const completionRate =
    totalTasks > 0 ? Math.round((member.completedTasks / totalTasks) * 100) : 0;

  const barColor =
    completionRate >= 80
      ? "bg-success"
      : completionRate >= 50
        ? "bg-warning"
        : "bg-primary";

  return (
    <div
      className={cn(
        "group relative bg-card border border-border rounded-xl",
        "hover:border-border-strong hover:shadow-md",
        "transition-all duration-200 ease-out flex flex-col",
        "overflow-hidden",
      )}
      data-ocid="team-member-card"
    >
      {/* Card top accent bar based on status */}
      <div
        className={cn(
          "h-0.5 w-full",
          member.status === "active"
            ? "bg-success"
            : member.status === "away"
              ? "bg-warning"
              : "bg-border",
        )}
      />

      <div className="flex flex-col gap-4 p-4 sm:p-5 flex-1">
        {/* Header: Avatar + Info + Actions */}
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div
              className={cn(
                "h-11 w-11 sm:h-12 sm:w-12 rounded-full flex items-center justify-center",
                "text-sm font-bold tracking-wide select-none ring-1 ring-border",
                avatarColor,
              )}
            >
              {initials}
            </div>
            <span
              className={cn(
                "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full",
                STATUS_DOT[member.status],
              )}
              title={member.status}
            />
          </div>

          {/* Name + role */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-1">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground leading-snug truncate">
                  {member.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 truncate flex items-center gap-1">
                  <Briefcase size={10} className="flex-shrink-0 opacity-70" />
                  {member.jobTitle}
                </p>
              </div>
              {/* Role pill */}
              <span
                className={cn(
                  "inline-flex items-center px-1.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0",
                  ROLE_BADGE[member.role] ?? ROLE_BADGE.member,
                )}
              >
                {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
              </span>
            </div>
            <StatusBadge status={member.status} showDot className="mt-1.5" />
          </div>
        </div>

        {/* Email */}
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors truncate"
        >
          <Mail size={11} className="flex-shrink-0" />
          <span className="truncate">{member.email}</span>
        </a>

        {/* Skills */}
        {member.skills.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {member.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 5 && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                +{member.skills.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Stats footer */}
        <div className="mt-auto pt-3 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={11} className="text-warning flex-shrink-0" />
              <span>
                <span className="font-semibold text-foreground">
                  {member.activeTasks}
                </span>{" "}
                active
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CheckCircle2 size={11} className="text-success flex-shrink-0" />
              <span>
                <span className="font-semibold text-foreground">
                  {member.completedTasks}
                </span>{" "}
                done
              </span>
            </div>
            {/* Progress bar */}
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-14 h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all", barColor)}
                  style={{ width: `${completionRate}%` }}
                />
              </div>
              <span className="text-[10px] tabular-nums text-muted-foreground">
                {completionRate}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover actions */}
      <div
        className={cn(
          "border-t border-border bg-muted/30 px-4 py-2.5",
          "flex items-center gap-2",
          "opacity-0 group-hover:opacity-100 transition-all duration-150",
          "translate-y-1 group-hover:translate-y-0",
        )}
      >
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs gap-1.5 flex-1"
          data-ocid={`view-profile-${member.id}`}
        >
          <UserCircle2 size={12} />
          View Profile
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 flex-shrink-0"
              data-ocid={`member-menu-${member.id}`}
            >
              <MoreHorizontal size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem data-ocid={`edit-member-${member.id}`}>
              <UserCircle2 size={13} className="mr-2" />
              Edit Member
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              onClick={() => onRemove(member.id)}
              data-ocid={`remove-member-${member.id}`}
            >
              <Trash2 size={13} className="mr-2" />
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

// ── Add Member Dialog ─────────────────────────────────────────────────────────
const ROLE_OPTIONS = [
  "Developer",
  "Designer",
  "Manager",
  "Marketing",
  "Sales",
  "Support",
  "Other",
] as const;

interface AddMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (member: Member) => void;
}

function AddMemberDialog({ open, onOpenChange, onAdd }: AddMemberDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  function reset() {
    setName("");
    setEmail("");
    setJobTitle("");
    setSkillsInput("");
    setErrors({});
  }

  function handleClose() {
    reset();
    onOpenChange(false);
  }

  function validate() {
    const next: { name?: string; email?: string } = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    const skills = skillsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const newMember: Member = {
      id: `member-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      role: "member",
      jobTitle: jobTitle.trim() || "Team Member",
      department: "General",
      skills,
      activeTasks: 0,
      completedTasks: 0,
      joinedAt: new Date().toISOString(),
      status: "active",
    };
    onAdd(newMember);
    handleClose();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[92vw] sm:max-w-lg"
        data-ocid="add-member-dialog"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base font-semibold">
            <UserPlus size={16} className="text-primary" />
            Invite Team Member
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="member-name" className="text-sm font-medium">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="member-name"
              placeholder="e.g., Alex Rivera"
              className="h-9 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-ocid="add-member-name"
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="member-email" className="text-sm font-medium">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="member-email"
              type="email"
              placeholder="alex@company.io"
              className="h-9 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-ocid="add-member-email"
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="member-role" className="text-sm font-medium">
              Role
            </Label>
            <Select value={jobTitle} onValueChange={setJobTitle}>
              <SelectTrigger
                id="member-role"
                className="h-9 text-sm"
                data-ocid="add-member-role"
              >
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {ROLE_OPTIONS.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="member-skills" className="text-sm font-medium">
              Skills
            </Label>
            <Input
              id="member-skills"
              placeholder="e.g., React, TypeScript, Design"
              className="h-9 text-sm"
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              data-ocid="add-member-skills"
            />
            <p className="text-[11px] text-muted-foreground">
              Comma-separated: React, TypeScript, Figma
            </p>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClose}
            data-ocid="add-member-cancel"
          >
            Cancel
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={handleSubmit}
            data-ocid="add-member-submit"
          >
            <UserPlus size={13} className="mr-1.5" />
            Invite Member
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Team Page ─────────────────────────────────────────────────────────────────
export default function Team() {
  const [members, setMembers] = useState<Member[]>(mockTeam);
  const [searchQuery, setSearchQuery] = useState("");
  const [addMemberDialogOpen, setAddMemberDialogOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return members;
    return members.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.jobTitle.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.department.toLowerCase().includes(q) ||
        m.skills.some((s) => s.toLowerCase().includes(q)),
    );
  }, [members, searchQuery]);

  function handleAdd(member: Member) {
    setMembers((prev) => [...prev, member]);
  }

  function handleRemove(id: string) {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }

  const activeCount = members.filter((m) => m.status === "active").length;
  const awayCount = members.filter((m) => m.status === "away").length;
  const avgCapacity =
    members.length > 0
      ? Math.round(
          members.reduce((sum, m) => {
            const total = m.activeTasks + m.completedTasks;
            return sum + (total > 0 ? (m.completedTasks / total) * 100 : 0);
          }, 0) / members.length,
        )
      : 0;

  const STATS = [
    {
      label: "Total Members",
      value: members.length,
      icon: <Users size={16} />,
      trend: "neutral" as const,
    },
    {
      label: "Online Now",
      value: activeCount,
      icon: <Wifi size={16} />,
      trend: "up" as const,
    },
    {
      label: "Away",
      value: awayCount,
      icon: <WifiOff size={16} />,
      trend: "neutral" as const,
    },
    {
      label: "Avg. Completion",
      value: `${avgCapacity}%`,
      icon: <Activity size={16} />,
      trend: avgCapacity >= 60 ? ("up" as const) : ("neutral" as const),
    },
  ];

  return (
    <div className="flex flex-col gap-5 sm:gap-6 p-4 sm:p-6 min-h-0">
      {/* Page Header */}
      <PageHeader
        title="Team"
        subtitle={`${members.length} member${members.length !== 1 ? "s" : ""} · ${activeCount} online`}
        action={
          <Button
            type="button"
            size="sm"
            onClick={() => setAddMemberDialogOpen(true)}
            data-ocid="add-member-trigger"
            className="gap-1.5"
          >
            <UserPlus size={14} />
            <span className="hidden xs:inline">Invite Member</span>
            <span className="xs:hidden">Invite</span>
          </Button>
        }
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STATS.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            icon={s.icon}
            trend={s.trend}
          />
        ))}
      </div>

      {/* Search */}
      <div className="relative w-full sm:max-w-sm">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <Input
          placeholder="Search by name, role, or skill…"
          className="pl-9 h-9 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          data-ocid="team-search"
        />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No members found"
          description={
            searchQuery
              ? `No members match "${searchQuery}". Try a different search.`
              : "Your team is empty. Invite the first member to get started."
          }
          action={
            !searchQuery
              ? {
                  label: "Invite Member",
                  onClick: () => setAddMemberDialogOpen(true),
                }
              : undefined
          }
        />
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          data-ocid="team-grid"
        >
          {filtered.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              colorIndex={index}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}

      <AddMemberDialog
        open={addMemberDialogOpen}
        onOpenChange={setAddMemberDialogOpen}
        onAdd={handleAdd}
      />
    </div>
  );
}
