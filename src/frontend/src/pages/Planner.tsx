import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockTeam } from "@/data/team";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  GitBranch,
  LayoutDashboard,
  ListTodo,
  Plus,
  Sparkles,
  Target,
  TimerReset,
  TrendingUp,
  Trash2,
  Undo2,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

type TaskPriority = "critical" | "high" | "medium" | "low";
type TaskStatus = "todo" | "in-progress" | "review" | "done" | "blocked";
type RiskLevel = "high" | "medium" | "low";
type AiChangeType = "moved" | "delayed" | "unchanged";

interface PlanTask {
  id: string;
  name: string;
  priority: TaskPriority;
  status: TaskStatus;
  deadline: string;
  assignee: string;
  dependencies: string[];
  startWeek: number;
  endWeek: number;
}

interface ProjectRisk {
  id: string;
  title: string;
  severity: RiskLevel;
  probability: RiskLevel;
  impact: RiskLevel;
  mitigation: string;
}

interface AiChange {
  id: string;
  taskName: string;
  type: AiChangeType;
  note: string;
}

interface EffortEstimate {
  id: string;
  taskName: string;
  estimate: string;
  load: number;
  note: string;
}

interface OutcomeEstimate {
  id: string;
  label: string;
  summary: string;
  benefits: string[];
}

interface TeamMemberInput {
  id: string;
  name: string;
}

interface PlanInputForm {
  projectName: string;
  productIdea: string;
  problemStatement: string;
  targetUsers: string;
  goals: string;
  timeline: string;
  budget: string;
  constraints: string;
}

const timelineWeeks = 16;

const defaultPlanInputForm: PlanInputForm = {
  projectName: "",
  productIdea: "",
  problemStatement: "",
  targetUsers: "",
  goals: "",
  timeline: "",
  budget: "",
  constraints: "",
};

const defaultTeamMemberInput: TeamMemberInput = {
  id: "member-1",
  name: "",
};

const initialTasks: PlanTask[] = [
  {
    id: "T-01",
    name: "Requirements and product scope",
    priority: "high",
    status: "done",
    deadline: "2026-04-10",
    assignee: "Rina",
    dependencies: [],
    startWeek: 1,
    endWeek: 2,
  },
  {
    id: "T-02",
    name: "Architecture and technical design",
    priority: "critical",
    status: "done",
    deadline: "2026-04-17",
    assignee: "Alex",
    dependencies: ["T-01"],
    startWeek: 2,
    endWeek: 4,
  },
  {
    id: "T-03",
    name: "Core API implementation",
    priority: "critical",
    status: "in-progress",
    deadline: "2026-05-08",
    assignee: "Maya",
    dependencies: ["T-02"],
    startWeek: 4,
    endWeek: 8,
  },
  {
    id: "T-04",
    name: "UI module development",
    priority: "high",
    status: "in-progress",
    deadline: "2026-05-14",
    assignee: "Jules",
    dependencies: ["T-02"],
    startWeek: 5,
    endWeek: 9,
  },
  {
    id: "T-05",
    name: "Integration and QA cycle",
    priority: "high",
    status: "review",
    deadline: "2026-05-22",
    assignee: "Noah",
    dependencies: ["T-03", "T-04"],
    startWeek: 9,
    endWeek: 11,
  },
  {
    id: "T-06",
    name: "Security and performance testing",
    priority: "medium",
    status: "todo",
    deadline: "2026-05-27",
    assignee: "Ivy",
    dependencies: ["T-05"],
    startWeek: 11,
    endWeek: 13,
  },
  {
    id: "T-07",
    name: "Release preparation",
    priority: "high",
    status: "blocked",
    deadline: "2026-05-30",
    assignee: "Rina",
    dependencies: ["T-06"],
    startWeek: 13,
    endWeek: 14,
  },
  {
    id: "T-08",
    name: "Launch and handoff",
    priority: "medium",
    status: "todo",
    deadline: "2026-06-07",
    assignee: "Alex",
    dependencies: ["T-07"],
    startWeek: 15,
    endWeek: 16,
  },
];

const initialAiChanges: AiChange[] = [
  {
    id: "A-01",
    taskName: "Integration and QA cycle",
    type: "moved",
    note: "Moved 1 week earlier to reduce release crunch.",
  },
  {
    id: "A-02",
    taskName: "Security and performance testing",
    type: "delayed",
    note: "Delayed by 3 days due to dependency on QA signoff.",
  },
  {
    id: "A-03",
    taskName: "Release preparation",
    type: "unchanged",
    note: "Kept unchanged because critical path remains valid.",
  },
];

const navItems = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "timeline", label: "Timeline", icon: GitBranch },
  { id: "tasks", label: "Tasks", icon: ListTodo },
  { id: "effort", label: "Effort", icon: TimerReset },
  { id: "outcome", label: "Outcome", icon: TrendingUp },
];

function levelClass(level: RiskLevel | TaskPriority) {
  if (level === "high" || level === "critical") {
    return "bg-destructive/20 text-destructive border-destructive/40";
  }
  if (level === "medium") {
    return "bg-warning/20 text-warning border-warning/40";
  }
  return "bg-info/20 text-info border-info/40";
}

function statusClass(status: TaskStatus) {
  if (status === "done") return "bg-success/20 text-success border-success/40";
  if (status === "in-progress") return "bg-primary/20 text-primary border-primary/40";
  if (status === "review") return "bg-info/20 text-info border-info/40";
  if (status === "blocked") return "bg-destructive/20 text-destructive border-destructive/40";
  return "bg-muted/70 text-muted-foreground border-border";
}

function aiTypeClass(type: AiChangeType) {
  if (type === "moved") return "text-info";
  if (type === "delayed") return "text-warning";
  return "text-success";
}

function deriveEffortEstimate(task: PlanTask): EffortEstimate {
  const duration = task.endWeek - task.startWeek + 1;
  const multiplier =
    task.priority === "critical"
      ? 14
      : task.priority === "high"
        ? 10
        : task.priority === "medium"
          ? 7
          : 5;

  const effortHours = duration * multiplier;

  return {
    id: task.id,
    taskName: task.name,
    estimate: `${effortHours}h`,
    load: Math.min(100, Math.round((effortHours / 140) * 100)),
    note:
      task.dependencies.length > 1
        ? "Higher coordination load due to multiple dependencies."
        : task.dependencies.length === 1
          ? "Moderate delivery load with one prerequisite."
          : "Low dependency load and simpler scheduling.",
  };
}

function buildOutcomeEstimates(tasks: PlanTask[], overdueCount: number): OutcomeEstimate[] {
  const doneCount = tasks.filter((task) => task.status === "done").length;
  const blockedCount = tasks.filter((task) => task.status === "blocked").length;
  const completionGain = Math.min(4, Math.max(1, doneCount));
  const scheduleWin = overdueCount === 0 ? "stronger schedule reliability" : "fewer deadline slips";
  const launchWin = blockedCount > 0 ? "clearer unblock path before launch" : "cleaner launch handoff";

  return [
    {
      id: "o-01",
      label: "Delivery Momentum",
      summary: "The plan should keep the team moving through execution with less churn.",
      benefits: [
        `${completionGain}+ major milestones already completed or underway`,
        "Less context switching because dependencies are mapped up front",
        "Clear weekly focus for each phase",
      ],
    },
    {
      id: "o-02",
      label: "Team Alignment",
      summary: "Following the plan should improve coordination across product, engineering, and QA.",
      benefits: [
        "Shared priorities across every task owner",
        "Fewer handoff gaps between build and review work",
        "More predictable ownership during execution",
      ],
    },
    {
      id: "o-03",
      label: "Delivery Upside",
      summary: "Sticking to the plan should create a cleaner release path and reduce rework.",
      benefits: [
        `Expected ${scheduleWin}`,
        launchWin,
        "Better release confidence for stakeholders and leadership",
      ],
    },
  ];
}

export default function Planner() {
  const [tasks, setTasks] = useState<PlanTask[]>(initialTasks);
  const [aiChanges, setAiChanges] = useState<AiChange[]>(initialAiChanges);
  const [aiAccepted, setAiAccepted] = useState(false);
  const [planInputForm, setPlanInputForm] = useState<PlanInputForm>(defaultPlanInputForm);
  const [teamMembers, setTeamMembers] = useState<TeamMemberInput[]>([defaultTeamMemberInput]);

  const effortEstimates = useMemo(
    () => tasks.map((task) => deriveEffortEstimate(task)),
    [tasks],
  );

  const completedCount = useMemo(
    () => tasks.filter((task) => task.status === "done").length,
    [tasks],
  );

  const completionPercent = Math.round((completedCount / tasks.length) * 100);

  const overdueCount = useMemo(() => {
    const today = new Date("2026-04-29");
    return tasks.filter(
      (task) =>
        task.status !== "done" &&
        new Date(`${task.deadline}T00:00:00`) < today,
    ).length;
  }, [tasks]);

  const outcomeEstimates = useMemo(
    () => buildOutcomeEstimates(tasks, overdueCount),
    [tasks, overdueCount],
  );

  const statusDistribution = useMemo(() => {
    const counts: Record<TaskStatus, number> = {
      todo: 0,
      "in-progress": 0,
      review: 0,
      done: 0,
      blocked: 0,
    };

    for (const task of tasks) counts[task.status] += 1;
    return counts;
  }, [tasks]);

  const priorityDistribution = useMemo(() => {
    const counts: Record<TaskPriority, number> = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    };

    for (const task of tasks) counts[task.priority] += 1;
    return counts;
  }, [tasks]);

  const projectStatus = completionPercent >= 85 ? "On Track" : completionPercent >= 60 ? "At Risk" : "Behind";

  const totalEffortHours = effortEstimates.reduce(
    (sum, estimate) => sum + Number.parseInt(estimate.estimate, 10),
    0,
  );

  const aiPlanPayload = useMemo(
    () => ({
      ...planInputForm,
      teamMembers: teamMembers.filter(
        (member) => member.name.trim(),
      ),
    }),
    [planInputForm, teamMembers],
  );

  function updatePlanInput(field: keyof PlanInputForm, value: string) {
    setPlanInputForm((prev) => ({ ...prev, [field]: value }));
  }

  function addTeamMember() {
    setTeamMembers((prev) => [
      ...prev,
      {
        id: `member-${prev.length + 1}`,
        name: "",
      },
    ]);
  }

  function updateTeamMember(
    id: string,
    field: keyof Omit<TeamMemberInput, "id">,
    value: string,
  ) {
    setTeamMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, [field]: value } : member,
      ),
    );
  }

  function removeTeamMember(id: string) {
    setTeamMembers((prev) => {
      if (prev.length === 1) {
        return [{ ...defaultTeamMemberInput, id: "member-1" }];
      }
      return prev.filter((member) => member.id !== id);
    });
  }

  function handleAutoAdjust() {
    setAiAccepted(false);
    setAiChanges([
      {
        id: "A-10",
        taskName: "Core API implementation",
        type: "moved",
        note: "Moved 4 days ahead due to early architecture signoff.",
      },
      {
        id: "A-11",
        taskName: "Release preparation",
        type: "delayed",
        note: "Delayed 2 days to absorb security checklist workload.",
      },
      {
        id: "A-12",
        taskName: "Launch and handoff",
        type: "unchanged",
        note: "No change because slack remains on final milestone.",
      },
    ]);
  }

  function handleAcceptChanges() {
    setAiAccepted(true);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === "T-03"
          ? { ...task, startWeek: 3, endWeek: 7 }
          : task.id === "T-07"
            ? { ...task, startWeek: 14, endWeek: 15 }
            : task,
      ),
    );
  }

  function handleUndoChanges() {
    setAiAccepted(false);
    setAiChanges(initialAiChanges);
    setTasks(initialTasks);
  }

  return (
    <div className="space-y-6" data-ocid="planner-page">
      <PageHeader
        title="Project Planning Dashboard"
        subtitle="SDLC-first planning workspace with timeline, tasks, metrics, risks, and AI-assisted schedule adjustments."
        action={
          <Button className="gap-2" onClick={handleAutoAdjust} data-ocid="btn-auto-adjust-plan">
            <Sparkles className="h-4 w-4" />
            Auto Adjust Plan
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-2xl border border-white/10 bg-card/40 p-3 backdrop-blur-xl shadow-[0_20px_60px_-30px_oklch(0_0_0_/_0.8)]">
            <p className="mb-2 px-2 text-xs uppercase tracking-wider text-muted-foreground">
              Navigation
            </p>
            <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {navItems.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="group inline-flex items-center gap-2 rounded-lg border border-transparent bg-background/30 px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:text-foreground"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="space-y-5">
          <Tabs defaultValue="ai-input" className="space-y-4">
            <TabsList className="h-10">
              <TabsTrigger value="ai-input" className="px-4">
                AI Plan Input
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="px-4">
                Planning Dashboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai-input">
              <section className="rounded-2xl border border-white/10 bg-card/45 p-4 backdrop-blur-xl shadow-[0_16px_60px_-36px_oklch(0_0_0_/_0.8)] sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="text-lg font-semibold">AI Plan Input Form</h3>
              </div>
              <span className="rounded-full border border-info/30 bg-info/10 px-3 py-1 text-xs text-info">
                Descriptive Brief + Team Context
              </span>
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
              Fill this form with project context and team details so AI can generate a tailored project plan.
            </p>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Project name</span>
                <input
                  value={planInputForm.projectName}
                  onChange={(event) => updatePlanInput("projectName", event.target.value)}
                  placeholder="e.g. SaaS Command Center v5"
                  className="h-10 w-full rounded-lg border border-border/80 bg-background/45 px-3 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Timeline target</span>
                <input
                  value={planInputForm.timeline}
                  onChange={(event) => updatePlanInput("timeline", event.target.value)}
                  placeholder="e.g. MVP in 12 weeks, launch in 24 weeks"
                  className="h-10 w-full rounded-lg border border-border/80 bg-background/45 px-3 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Product idea</span>
                <textarea
                  value={planInputForm.productIdea}
                  onChange={(event) => updatePlanInput("productIdea", event.target.value)}
                  rows={3}
                  placeholder="Describe what you are building and why it matters."
                  className="w-full rounded-lg border border-border/80 bg-background/45 px-3 py-2 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Problem statement</span>
                <textarea
                  value={planInputForm.problemStatement}
                  onChange={(event) => updatePlanInput("problemStatement", event.target.value)}
                  rows={3}
                  placeholder="What core problem should this project solve?"
                  className="w-full rounded-lg border border-border/80 bg-background/45 px-3 py-2 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Target users / customers</span>
                <textarea
                  value={planInputForm.targetUsers}
                  onChange={(event) => updatePlanInput("targetUsers", event.target.value)}
                  rows={2}
                  placeholder="Who will use this product, and what are their key needs?"
                  className="w-full rounded-lg border border-border/80 bg-background/45 px-3 py-2 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Goals and success criteria</span>
                <textarea
                  value={planInputForm.goals}
                  onChange={(event) => updatePlanInput("goals", event.target.value)}
                  rows={3}
                  placeholder="e.g. Launch MVP, onboard 10 pilots, achieve 95% uptime"
                  className="w-full rounded-lg border border-border/80 bg-background/45 px-3 py-2 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Budget (optional)</span>
                <input
                  value={planInputForm.budget}
                  onChange={(event) => updatePlanInput("budget", event.target.value)}
                  placeholder="e.g. $80k for first 6 months"
                  className="h-10 w-full rounded-lg border border-border/80 bg-background/45 px-3 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Known constraints</span>
                <input
                  value={planInputForm.constraints}
                  onChange={(event) => updatePlanInput("constraints", event.target.value)}
                  placeholder="e.g. 4 engineers, SOC2 needed, fixed launch date"
                  className="h-10 w-full rounded-lg border border-border/80 bg-background/45 px-3 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>
            </div>

            <div className="mt-6 rounded-xl border border-border/80 bg-background/40 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-info" />
                  <p className="text-sm font-semibold">Team Members for AI Context</p>
                </div>
                <Button variant="outline" className="gap-2" onClick={addTeamMember} data-ocid="btn-add-team-member">
                  <Plus className="h-4 w-4" />
                  Add Member
                </Button>
              </div>

              <div className="space-y-3">
                {teamMembers.map((member, index) => (
                  <article key={member.id} className="rounded-lg border border-border/80 bg-background/45 p-3">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Member {index + 1}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1 text-muted-foreground hover:text-destructive"
                        onClick={() => removeTeamMember(member.id)}
                        data-ocid="btn-remove-team-member"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <label className="space-y-1.5">
                        <span className="text-xs text-muted-foreground">Name</span>
                        <select
                          value={member.name}
                          onChange={(event) =>
                            updateTeamMember(member.id, "name", event.target.value)
                          }
                          className="h-9 w-full rounded-md border border-border/80 bg-background/45 px-3 text-sm outline-none transition focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                        >
                          <option value="">Select team member</option>
                          {mockTeam.map((teamMember) => (
                            <option key={teamMember.id} value={teamMember.name}>
                              {teamMember.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-background/35 p-3">
              <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">AI input payload preview</p>
              <pre className="max-h-60 overflow-auto rounded-md border border-border/70 bg-background/60 p-3 text-xs text-muted-foreground">
                {JSON.stringify(aiPlanPayload, null, 2)}
              </pre>
            </div>
              </section>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-5">

          <section
            id="overview"
            className="rounded-2xl border border-white/10 bg-card/45 p-4 backdrop-blur-xl shadow-[0_16px_60px_-36px_oklch(0_0_0_/_0.8)] motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-3 sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">SaaS Command Center v4</h3>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  End-to-end planning dashboard for discovery, build, testing, and release phases with AI-guided schedule refinement.
                </p>
              </div>
              <span className={cn("rounded-full border px-3 py-1 text-xs font-medium", completionPercent >= 60 ? "bg-warning/15 text-warning border-warning/40" : "bg-destructive/15 text-destructive border-destructive/40")}>
                Status: {projectStatus}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border/80 bg-background/45 p-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Progress</p>
                <p className="mt-1 text-2xl font-bold">{completionPercent}%</p>
              </div>
              <div className="rounded-xl border border-border/80 bg-background/45 p-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Tasks Completed</p>
                <p className="mt-1 text-2xl font-bold">{completedCount}/{tasks.length}</p>
              </div>
              <div className="rounded-xl border border-border/80 bg-background/45 p-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Overdue</p>
                <p className="mt-1 text-2xl font-bold text-warning">{overdueCount}</p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted/60">
              <div className="h-full rounded-full bg-gradient-to-r from-info via-primary to-success transition-all duration-700" style={{ width: `${completionPercent}%` }} />
            </div>
          </section>

          <section
            id="timeline"
            className="rounded-2xl border border-white/10 bg-card/45 p-4 backdrop-blur-xl shadow-[0_16px_60px_-36px_oklch(0_0_0_/_0.8)] sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-primary" />
              <h3 className="text-lg font-semibold">Timeline View</h3>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[760px] space-y-3">
                <div className="grid grid-cols-[220px_minmax(0,1fr)] gap-3 text-xs text-muted-foreground">
                  <p>Task</p>
                  <div className="grid grid-cols-8 gap-1">
                    {Array.from({ length: 8 }, (_, i) => (
                      <span key={i} className="text-center">W{i * 2 + 1}-{i * 2 + 2}</span>
                    ))}
                  </div>
                </div>
                {tasks.map((task) => {
                  const left = ((task.startWeek - 1) / timelineWeeks) * 100;
                  const width = ((task.endWeek - task.startWeek + 1) / timelineWeeks) * 100;
                  return (
                    <div key={task.id} className="grid grid-cols-[220px_minmax(0,1fr)] gap-3">
                      <div>
                        <p className="text-sm font-medium">{task.id} • {task.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Depends on: {task.dependencies.length > 0 ? task.dependencies.join(", ") : "None"}
                        </p>
                      </div>
                      <div className="relative h-10 rounded-lg border border-border/70 bg-background/45">
                        <div
                          className={cn(
                            "absolute top-1.5 h-7 rounded-md border px-2 text-xs font-medium leading-6 transition-all duration-500",
                            statusClass(task.status),
                          )}
                          style={{ left: `${left}%`, width: `${Math.max(width, 8)}%` }}
                        >
                          {task.assignee}
                        </div>
                        {task.dependencies.length > 0 && (
                          <ArrowRight className="absolute right-2 top-3.5 h-3.5 w-3.5 text-muted-foreground/70" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="tasks"
            className="rounded-2xl border border-white/10 bg-card/45 p-4 backdrop-blur-xl shadow-[0_16px_60px_-36px_oklch(0_0_0_/_0.8)] sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <ListTodo className="h-4 w-4 text-info" />
              <h3 className="text-lg font-semibold">Task Management</h3>
            </div>

            <div className="hidden lg:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Assigned User</TableHead>
                    <TableHead>Dependencies</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.name}</TableCell>
                      <TableCell>
                        <span className={cn("rounded border px-2 py-1 text-xs capitalize", levelClass(task.priority))}>
                          {task.priority}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={cn("rounded border px-2 py-1 text-xs capitalize", statusClass(task.status))}>
                          {task.status}
                        </span>
                      </TableCell>
                      <TableCell>{task.deadline}</TableCell>
                      <TableCell>{task.assignee}</TableCell>
                      <TableCell>{task.dependencies.length > 0 ? task.dependencies.join(", ") : "None"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="grid grid-cols-1 gap-3 lg:hidden">
              {tasks.map((task) => (
                <article key={task.id} className="rounded-xl border border-border/80 bg-background/40 p-3">
                  <p className="font-medium">{task.name}</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <span className={cn("rounded border px-2 py-1 capitalize", levelClass(task.priority))}>{task.priority}</span>
                    <span className={cn("rounded border px-2 py-1 capitalize", statusClass(task.status))}>{task.status}</span>
                    <span>Deadline: {task.deadline}</span>
                    <span>User: {task.assignee}</span>
                    <span className="col-span-2 text-muted-foreground">
                      Dependencies: {task.dependencies.length > 0 ? task.dependencies.join(", ") : "None"}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="effort"
            className="rounded-2xl border border-white/10 bg-card/45 p-4 backdrop-blur-xl shadow-[0_16px_60px_-36px_oklch(0_0_0_/_0.8)] sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <TimerReset className="h-4 w-4 text-info" />
              <h3 className="text-lg font-semibold">Effort Estimation</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-border/80 bg-background/45 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Estimated Total Effort</p>
                <p className="mt-2 text-2xl font-bold">{totalEffortHours}h</p>
                <p className="mt-2 text-xs text-muted-foreground">Approximate workload across the active plan.</p>
              </div>

              <div className="rounded-xl border border-border/80 bg-background/45 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">High Load Tasks</p>
                <p className="mt-2 text-2xl font-bold text-warning">
                  {effortEstimates.filter((estimate) => estimate.load >= 60).length}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">Tasks with heavier coordination or build effort.</p>
              </div>

              <div className="rounded-xl border border-border/80 bg-background/45 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Average Load</p>
                <p className="mt-2 text-2xl font-bold text-primary">
                  {Math.round(
                    effortEstimates.reduce((sum, estimate) => sum + estimate.load, 0) /
                      effortEstimates.length,
                  )}%
                </p>
                <p className="mt-2 text-xs text-muted-foreground">Derived from duration, priority, and dependencies.</p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {effortEstimates.map((estimate) => (
                <article key={estimate.id} className="rounded-xl border border-border/80 bg-background/40 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{estimate.taskName}</p>
                      <p className="text-xs text-muted-foreground">{estimate.note}</p>
                    </div>
                    <span className="rounded-full border border-info/40 bg-info/15 px-3 py-1 text-xs font-medium text-info">
                      {estimate.estimate}
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-muted/60">
                    <div className="h-full rounded-full bg-gradient-to-r from-info to-primary transition-all duration-500" style={{ width: `${estimate.load}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="outcome"
            className="rounded-2xl border border-white/10 bg-card/45 p-4 backdrop-blur-xl shadow-[0_16px_60px_-36px_oklch(0_0_0_/_0.8)] sm:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <h3 className="text-lg font-semibold">Outcome Estimation</h3>
            </div>

            <div className="mb-4 rounded-xl border border-success/20 bg-success/10 p-4 text-sm text-success-foreground/90">
              What good things happen if we follow this plan: stronger delivery flow, fewer handoff gaps, and a cleaner path to launch.
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {outcomeEstimates.map((item) => (
                <div key={item.id} className="rounded-xl border border-border/80 bg-background/45 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{item.summary}</p>
                  <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                    {item.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-success flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-background/45 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Positive outcomes</p>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <div className="rounded-lg border border-border/70 bg-background/35 p-3">
                  <p className="text-xs text-muted-foreground">Milestone flow</p>
                  <p className="text-lg font-semibold">Smoother</p>
                </div>
                <div className="rounded-lg border border-border/70 bg-background/35 p-3">
                  <p className="text-xs text-muted-foreground">Team coordination</p>
                  <p className="text-lg font-semibold text-success">Clearer</p>
                </div>
                <div className="rounded-lg border border-border/70 bg-background/35 p-3">
                  <p className="text-xs text-muted-foreground">Release outcome</p>
                  <p className="text-lg font-semibold text-primary">More predictable</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-card/45 p-4 backdrop-blur-xl shadow-[0_16px_60px_-36px_oklch(0_0_0_/_0.8)] sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="text-lg font-semibold">AI Planning</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
              <div className="space-y-3">
                {aiChanges.map((change) => (
                  <div key={change.id} className="rounded-xl border border-border/80 bg-background/40 p-3">
                    <p className="text-sm font-medium">{change.taskName}</p>
                    <p className={cn("mt-1 text-xs font-semibold uppercase tracking-wide", aiTypeClass(change.type))}>
                      {change.type}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{change.note}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Button className="w-full gap-2" onClick={handleAcceptChanges} data-ocid="btn-accept-ai-changes">
                  <CheckCircle2 className="h-4 w-4" />
                  Accept
                </Button>
                <Button variant="outline" className="w-full gap-2" onClick={handleUndoChanges} data-ocid="btn-undo-ai-changes">
                  <Undo2 className="h-4 w-4" />
                  Undo
                </Button>
                <div className="rounded-lg border border-border/80 bg-background/40 p-3 text-xs text-muted-foreground">
                  <p className="mb-1 font-medium text-foreground">Plan Impact</p>
                  <p>
                    {aiAccepted
                      ? "AI changes applied to timeline bars."
                      : "Review AI changes before applying."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <AlertTriangle className="h-3.5 w-3.5" />
              No backend calls are used. This panel is UI-only state simulation.
            </div>
          </section>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Clock3 className="h-3.5 w-3.5" />
        Responsive layout: sidebar collapses to horizontal nav on mobile, timeline remains scrollable.
      </div>
    </div>
  );
}
