// ============================================================
// Central type definitions for the Apex SaaS platform
// ============================================================

export type WorkspaceRole = "owner" | "admin" | "member" | "viewer";

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  plan: "free" | "pro" | "enterprise";
  memberCount: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: WorkspaceRole;
  jobTitle: string;
  department: string;
}

export type NotificationType = "info" | "success" | "warning" | "error";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionLabel?: string;
  actionHref?: string;
}

// ---- Tasks ----
export type TaskStatus = "todo" | "in-progress" | "review" | "done" | "blocked";
export type TaskPriority = "low" | "medium" | "high" | "critical";

export interface TaskComment {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId?: string;
  assigneeName?: string;
  assigneeAvatar?: string;
  projectId?: string;
  projectName?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  comments: TaskComment[];
  estimatedHours?: number;
  completedHours?: number;
}

// ---- Projects ----
export type ProjectStatus =
  | "on-track"
  | "at-risk"
  | "off-track"
  | "completed"
  | "paused";

export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  dueDate: string;
  completed: boolean;
  description?: string;
  order: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  ownerId: string;
  ownerName: string;
  startDate: string;
  endDate: string;
  milestones: Milestone[];
  tags: string[];
  taskCount: number;
  completedTaskCount: number;
  memberIds: string[];
}

// ---- Team ----
export interface Member {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: WorkspaceRole;
  jobTitle: string;
  department: string;
  skills: string[];
  activeTasks: number;
  completedTasks: number;
  joinedAt: string;
  status: "active" | "away" | "offline";
}

// ---- Updates ----
export type UpdateType =
  | "announcement"
  | "milestone"
  | "alert"
  | "release"
  | "retrospective";

export interface Update {
  id: string;
  type: UpdateType;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: string;
  projectId?: string;
  projectName?: string;
  pinned: boolean;
  reactions: { emoji: string; count: number }[];
}

// ---- AI Planner ----
export type PhaseStatus = "completed" | "active" | "upcoming";

export interface PlannerTask {
  id: string;
  phaseId: string;
  title: string;
  description: string;
  priority: TaskPriority;
  effort: "low" | "medium" | "high";
  owner: string;
  week: number;
  status: TaskStatus;
  tags: string[];
}

export interface PlannerPhase {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: PhaseStatus;
  startWeek: number;
  endWeek: number;
  tasks: PlannerTask[];
  objectives: string[];
}

export interface RiskItem {
  id: string;
  title: string;
  description: string;
  probability: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  mitigation: string;
}

export interface SuccessMetric {
  id: string;
  name: string;
  target: string;
  timeframe: string;
  category: "revenue" | "growth" | "product" | "team" | "customer";
}

export interface PlannerOutput {
  startupIdea: string;
  industry: string;
  stage: string;
  teamSize: number;
  timeline: string;
  goal: string;
  generatedAt: string;
  phases: PlannerPhase[];
  risks: RiskItem[];
  successMetrics: SuccessMetric[];
}

// ---- Dashboard ----
export interface KpiMetric {
  id: string;
  label: string;
  value: string | number;
  change: number;
  changeLabel: string;
  trend: "up" | "down" | "neutral";
  icon: string;
  unit?: string;
}

export interface ChartDataPoint {
  label: string;
  [key: string]: string | number;
}

export interface TopPerformer {
  memberId: string;
  memberName: string;
  avatarUrl?: string;
  tasksCompleted: number;
  score: number;
  department: string;
}

export interface Bottleneck {
  id: string;
  title: string;
  type: "blocked-task" | "overdue" | "resource-conflict" | "dependency";
  severity: "low" | "medium" | "high";
  affectedItem: string;
  description: string;
}

// ---- Execution ----
export type ProjectHealthStatus = "green" | "yellow" | "red";

export interface ProjectHealth {
  projectId: string;
  projectName: string;
  status: ProjectHealthStatus;
  completedTasks: number;
  totalTasks: number;
  progress: number;
  daysRemaining: number;
  blockers: number;
}

export interface TeamLoad {
  memberId: string;
  memberName: string;
  avatarUrl?: string;
  activeTasks: number;
  maxCapacity: number;
  utilizationPct: number;
}
