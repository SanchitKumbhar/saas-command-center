import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { samplePlannerOutput } from "@/data/planner";
import { cn } from "@/lib/utils";
import type {
  PhaseStatus,
  PlannerOutput,
  PlannerTask,
  TaskStatus,
} from "@/types";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Circle,
  Clock,
  DollarSign,
  Download,
  Layers,
  PenLine,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

// ─── Form State ───────────────────────────────────────────────────────────────
interface PlannerForm {
  startupIdea: string;
  industry: string;
  stage: string;
  teamSize: string;
  timeline: string;
  goal: string;
}

const defaultForm: PlannerForm = {
  startupIdea: "",
  industry: "",
  stage: "",
  teamSize: "",
  timeline: "",
  goal: "",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
type SortKey = keyof Pick<
  PlannerTask,
  "title" | "owner" | "status" | "priority" | "week"
>;
type SortDir = "asc" | "desc";

const priorityOrder: Record<string, number> = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
};
const riskSeverityOrder: Record<string, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

function getPriorityBadgeClass(priority: string) {
  switch (priority) {
    case "critical":
      return "bg-destructive/10 text-destructive border-destructive/25";
    case "high":
      return "bg-warning/10 text-warning border-warning/25";
    case "medium":
      return "bg-info/10 text-info border-info/25";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
}

function getRiskSeverityConfig(level: string) {
  switch (level) {
    case "high":
      return {
        badge: "bg-destructive/10 text-destructive border-destructive/25",
        border: "border-l-destructive",
        icon: "text-destructive",
        label: "High",
      };
    case "medium":
      return {
        badge: "bg-warning/10 text-warning border-warning/25",
        border: "border-l-warning",
        icon: "text-warning",
        label: "Medium",
      };
    default:
      return {
        badge: "bg-info/10 text-info border-info/25",
        border: "border-l-info",
        icon: "text-info",
        label: "Low",
      };
  }
}

function getMetricIcon(category: string) {
  switch (category) {
    case "revenue":
      return <DollarSign className="w-4 h-4" />;
    case "growth":
      return <TrendingUp className="w-4 h-4" />;
    case "product":
      return <BarChart3 className="w-4 h-4" />;
    case "customer":
      return <Target className="w-4 h-4" />;
    case "team":
      return <Users className="w-4 h-4" />;
    default:
      return <Target className="w-4 h-4" />;
  }
}

function getMetricCategoryColor(category: string) {
  switch (category) {
    case "revenue":
      return "text-success bg-success/10 border-success/20";
    case "growth":
      return "text-primary bg-primary/10 border-primary/20";
    case "product":
      return "text-info bg-info/10 border-info/20";
    case "customer":
      return "text-warning bg-warning/10 border-warning/20";
    default:
      return "text-muted-foreground bg-muted border-border";
  }
}

function getPhaseTimelineColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-success/80 border-success";
    case "active":
      return "bg-primary/80 border-primary";
    default:
      return "bg-muted border-border";
  }
}

function getPhaseTimelineTextColor(status: string) {
  switch (status) {
    case "completed":
      return "text-success-foreground";
    case "active":
      return "text-primary-foreground";
    default:
      return "text-muted-foreground";
  }
}

const TOTAL_WEEKS = 52;

// ─── Sub-components ───────────────────────────────────────────────────────────

function phaseStatusToVariant(
  status: PhaseStatus,
): "completed" | "in-progress" | "todo" {
  if (status === "completed") return "completed";
  if (status === "active") return "in-progress";
  return "todo";
}

// ─── Roadmap Stats Row ────────────────────────────────────────────────────────

function RoadmapStats({ output }: { output: PlannerOutput }) {
  const totalTasks = output.phases.reduce((s, p) => s + p.tasks.length, 0);
  const completedPhases = output.phases.filter(
    (p) => p.status === "completed",
  ).length;

  const stats = [
    {
      icon: <Layers className="w-3.5 h-3.5" />,
      label: "Phases",
      value: String(output.phases.length),
    },
    {
      icon: <CheckCircle2 className="w-3.5 h-3.5" />,
      label: "Completed",
      value: String(completedPhases),
    },
    {
      icon: <Target className="w-3.5 h-3.5" />,
      label: "Total Tasks",
      value: String(totalTasks),
    },
    {
      icon: <Timer className="w-3.5 h-3.5" />,
      label: "Timeline",
      value: output.timeline,
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-xs"
        >
          <span className="text-muted-foreground">{s.icon}</span>
          <span className="text-muted-foreground">{s.label}:</span>
          <span className="font-semibold text-foreground">{s.value}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Phases Section ───────────────────────────────────────────────────────────

function PhasesSection({ output }: { output: PlannerOutput }) {
  return (
    <SectionCard
      title="Phases"
      headerAction={
        <span className="text-xs text-muted-foreground">
          {output.phases.length} phases
        </span>
      }
    >
      <Accordion
        type="multiple"
        className="space-y-2"
        defaultValue={["phase-2"]}
      >
        {output.phases.map((phase) => (
          <AccordionItem
            key={phase.id}
            value={phase.id}
            className={cn(
              "border border-border rounded-lg overflow-hidden border-l-[3px]",
              phase.status === "completed" && "border-l-success/70",
              phase.status === "active" && "border-l-primary",
              phase.status === "upcoming" && "border-l-border",
            )}
          >
            <AccordionTrigger
              className="px-4 py-3 hover:bg-muted/30 transition-colors [&[data-state=open]]:bg-muted/20 [&>svg]:hidden"
              data-ocid={`phase-accordion-${phase.id}`}
            >
              <div className="flex items-center gap-3 w-full min-w-0">
                <div className="flex-shrink-0">
                  {phase.status === "completed" ? (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  ) : phase.status === "active" ? (
                    <Clock className="w-4 h-4 text-primary" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground/50" />
                  )}
                </div>
                <span className="text-sm font-semibold text-foreground truncate flex-1 text-left">
                  {phase.title}
                </span>
                <span className="text-xs text-muted-foreground flex-shrink-0 hidden sm:block tabular-nums">
                  {phase.duration}
                </span>
                <StatusBadge
                  status={phaseStatusToVariant(phase.status)}
                  className="flex-shrink-0"
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2 border-t border-border/60">
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                {phase.description}
              </p>
              {phase.objectives.length > 0 && (
                <div>
                  <p className="text-overline text-muted-foreground mb-2">
                    Key Objectives
                  </p>
                  <ul className="space-y-1.5">
                    {phase.objectives.map((obj) => (
                      <li
                        key={obj}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border/60">
                {phase.tasks.length} task{phase.tasks.length !== 1 ? "s" : ""}{" "}
                in this phase
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionCard>
  );
}

// ─── Tasks Section ────────────────────────────────────────────────────────────

function TasksSection({ output }: { output: PlannerOutput }) {
  const allTasks = useMemo(
    () => output.phases.flatMap((p) => p.tasks),
    [output.phases],
  );
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("week");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const filtered = useMemo(() => {
    let rows = allTasks;
    if (search) {
      const q = search.toLowerCase();
      rows = rows.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.owner.toLowerCase().includes(q),
      );
    }
    if (filterStatus !== "all") {
      rows = rows.filter((t) => t.status === filterStatus);
    }
    return [...rows].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "priority") {
        cmp =
          (priorityOrder[a.priority] ?? 0) - (priorityOrder[b.priority] ?? 0);
      } else if (sortKey === "week") {
        cmp = a.week - b.week;
      } else {
        cmp = String(a[sortKey]).localeCompare(String(b[sortKey]));
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [allTasks, search, filterStatus, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col)
      return <ChevronsUpDown className="w-3 h-3 opacity-40" />;
    return sortDir === "asc" ? (
      <ChevronUp className="w-3 h-3" />
    ) : (
      <ChevronDown className="w-3 h-3" />
    );
  }

  const statusOptions: { value: string; label: string }[] = [
    { value: "all", label: "All Statuses" },
    { value: "todo", label: "To Do" },
    { value: "in-progress", label: "In Progress" },
    { value: "review", label: "Review" },
    { value: "done", label: "Done" },
    { value: "blocked", label: "Blocked" },
  ];

  return (
    <SectionCard
      title="Tasks"
      headerAction={
        <span className="text-xs text-muted-foreground">
          {filtered.length} of {allTasks.length}
        </span>
      }
    >
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <Input
          placeholder="Search tasks or assignees…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-9 text-sm sm:max-w-64"
          data-ocid="tasks-search"
        />
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger
            className="h-9 text-sm sm:w-44"
            data-ocid="tasks-filter-status"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-4 sm:-mx-5 scrollbar-thin">
        <Table className="text-xs sm:text-sm min-w-[560px]">
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent bg-muted/30">
              <TableHead
                className="cursor-pointer select-none whitespace-nowrap pl-4 sm:pl-5 text-overline text-muted-foreground font-semibold"
                onClick={() => toggleSort("title")}
                data-ocid="sort-title"
              >
                <span className="flex items-center gap-1.5">
                  Task <SortIcon col="title" />
                </span>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none whitespace-nowrap hidden md:table-cell text-overline text-muted-foreground font-semibold"
                onClick={() => toggleSort("owner")}
                data-ocid="sort-owner"
              >
                <span className="flex items-center gap-1.5">
                  Assignee <SortIcon col="owner" />
                </span>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none whitespace-nowrap text-overline text-muted-foreground font-semibold"
                onClick={() => toggleSort("status")}
                data-ocid="sort-status"
              >
                <span className="flex items-center gap-1.5">
                  Status <SortIcon col="status" />
                </span>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none whitespace-nowrap text-right text-overline text-muted-foreground font-semibold"
                onClick={() => toggleSort("week")}
                data-ocid="sort-week"
              >
                <span className="flex items-center justify-end gap-1.5">
                  Due Week <SortIcon col="week" />
                </span>
              </TableHead>
              <TableHead
                className="cursor-pointer select-none whitespace-nowrap hidden sm:table-cell text-overline text-muted-foreground font-semibold"
                onClick={() => toggleSort("priority")}
                data-ocid="sort-priority"
              >
                <span className="flex items-center gap-1.5">
                  Priority <SortIcon col="priority" />
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-muted-foreground py-10 text-sm"
                >
                  No tasks match your filters.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((task, i) => (
                <TableRow
                  key={task.id}
                  className={cn(
                    "border-border transition-colors cursor-default",
                    i % 2 === 0 ? "bg-transparent" : "bg-muted/20",
                    "hover:bg-muted/40",
                  )}
                  data-ocid={`task-row-${task.id}`}
                >
                  <TableCell className="pl-4 sm:pl-5">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                        {task.title}
                      </p>
                      {task.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {task.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm text-muted-foreground hidden md:table-cell">
                    {task.owner}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={task.status as TaskStatus} />
                  </TableCell>
                  <TableCell className="text-right text-xs sm:text-sm tabular-nums text-muted-foreground font-mono">
                    Wk {task.week}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border capitalize",
                        getPriorityBadgeClass(task.priority),
                      )}
                    >
                      {task.priority}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </SectionCard>
  );
}

// ─── Timeline Section ─────────────────────────────────────────────────────────

function TimelineSection({ output }: { output: PlannerOutput }) {
  return (
    <SectionCard title="Timeline">
      <div className="space-y-3">
        <div className="overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-1 mb-4 min-w-[400px]">
            <div className="w-28 sm:w-32 flex-shrink-0" />
            <div className="flex-1 relative h-4 min-w-0">
              <div className="flex justify-between text-xs text-muted-foreground select-none font-mono">
                {[1, 13, 26, 39, 52].map((w) => (
                  <span key={w}>Wk {w}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2.5 min-w-[400px]">
            {output.phases.map((phase) => {
              const startPct = ((phase.startWeek - 1) / TOTAL_WEEKS) * 100;
              const widthPct =
                ((phase.endWeek - phase.startWeek + 1) / TOTAL_WEEKS) * 100;
              return (
                <div key={phase.id} className="flex items-center gap-3">
                  <div className="w-28 sm:w-32 flex-shrink-0 text-right">
                    <p className="text-xs font-medium text-foreground leading-tight truncate">
                      {phase.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono">
                      {phase.duration}
                    </p>
                  </div>
                  <div className="flex-1 relative h-7 bg-muted/50 rounded-md overflow-hidden min-w-0 border border-border/40">
                    <div
                      className={cn(
                        "absolute top-0 h-full rounded flex items-center px-2 transition-all border",
                        getPhaseTimelineColor(phase.status),
                      )}
                      style={{ left: `${startPct}%`, width: `${widthPct}%` }}
                    >
                      <span
                        className={cn(
                          "text-[11px] font-semibold truncate",
                          getPhaseTimelineTextColor(phase.status),
                          phase.status === "upcoming"
                            ? "text-muted-foreground"
                            : "",
                        )}
                      >
                        {phase.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-5 pt-3 mt-1 border-t border-border/60 flex-wrap">
          {(["completed", "active", "upcoming"] as const).map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <span
                className={cn(
                  "w-3 h-3 rounded border",
                  getPhaseTimelineColor(s),
                )}
              />
              <span className="text-xs text-muted-foreground capitalize">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

// ─── Risk Panel ───────────────────────────────────────────────────────────────

function RiskPanel({ output }: { output: PlannerOutput }) {
  const sorted = useMemo(
    () =>
      [...output.risks].sort(
        (a, b) =>
          (riskSeverityOrder[b.impact] ?? 0) -
          (riskSeverityOrder[a.impact] ?? 0),
      ),
    [output.risks],
  );

  return (
    <SectionCard
      title="Risk Assessment"
      headerAction={
        <span className="text-xs text-muted-foreground">
          {sorted.length} risks identified
        </span>
      }
    >
      <div className="space-y-2.5">
        {sorted.map((risk) => {
          const cfg = getRiskSeverityConfig(risk.impact);
          return (
            <div
              key={risk.id}
              className={cn(
                "p-4 rounded-lg border border-border bg-background hover:bg-muted/20 transition-colors border-l-[3px]",
                cfg.border,
              )}
              data-ocid={`risk-${risk.id}`}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className={cn("w-4 h-4 mt-0.5 flex-shrink-0", cfg.icon)}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <p className="text-sm font-semibold text-foreground">
                      {risk.title}
                    </p>
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border",
                        cfg.badge,
                      )}
                    >
                      {cfg.label} Impact
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border",
                        getRiskSeverityConfig(risk.probability).badge,
                      )}
                    >
                      {getRiskSeverityConfig(risk.probability).label} Prob.
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2.5">
                    {risk.description}
                  </p>
                  <div className="text-xs bg-muted/50 rounded-md p-2.5 border border-border/70">
                    <span className="font-semibold text-foreground">
                      Mitigation:{" "}
                    </span>
                    <span className="text-muted-foreground">
                      {risk.mitigation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

// ─── Success Metrics Section ──────────────────────────────────────────────────

function SuccessMetricsSection({ output }: { output: PlannerOutput }) {
  return (
    <SectionCard title="Success Metrics">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {output.successMetrics.map((metric) => (
          <div
            key={metric.id}
            className="p-4 rounded-lg border border-border bg-background hover:bg-muted/20 hover:border-border-strong transition-colors group"
            data-ocid={`metric-${metric.id}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className={cn(
                  "inline-flex items-center justify-center w-8 h-8 rounded-lg border text-xs",
                  getMetricCategoryColor(metric.category),
                )}
              >
                {getMetricIcon(metric.category)}
              </span>
              <span className="text-xs text-muted-foreground capitalize font-medium">
                {metric.category}
              </span>
            </div>
            <p className="text-xs font-semibold text-foreground leading-tight mb-1.5">
              {metric.name}
            </p>
            <p className="text-2xl font-bold text-foreground tabular-nums tracking-tight">
              {metric.target}
            </p>
            <p className="text-xs text-muted-foreground mt-1.5 font-medium">
              by {metric.timeframe}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

// ─── Input Tab ────────────────────────────────────────────────────────────────

interface InputTabProps {
  form: PlannerForm;
  setForm: React.Dispatch<React.SetStateAction<PlannerForm>>;
  onGenerate: () => void;
}

function InputTab({ form, setForm, onGenerate }: InputTabProps) {
  function update(key: keyof PlannerForm, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleReset() {
    setForm(defaultForm);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card-base space-y-0">
        {/* Card header */}
        <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-border/70">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Generate Your Roadmap
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Fill in your startup details and get a structured AI-powered
              roadmap.
            </p>
          </div>
          <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        </div>

        {/* Fields */}
        <div className="space-y-5">
          {/* Idea — full width */}
          <div className="space-y-1.5">
            <Label htmlFor="startup-idea" className="text-sm font-medium">
              Startup Idea{" "}
              <span className="text-destructive ml-0.5" aria-hidden>
                *
              </span>
            </Label>
            <Textarea
              id="startup-idea"
              placeholder="Describe your startup idea in a few sentences…"
              value={form.startupIdea}
              onChange={(e) => update("startupIdea", e.target.value)}
              rows={3}
              className="resize-none text-sm"
              data-ocid="input-startup-idea"
            />
          </div>

          {/* 2-column grid for shorter fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="industry" className="text-sm font-medium">
                Industry
              </Label>
              <Select
                value={form.industry}
                onValueChange={(v) => update("industry", v)}
              >
                <SelectTrigger
                  id="industry"
                  className="h-9 text-sm"
                  data-ocid="input-industry"
                >
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Technology",
                    "Healthcare",
                    "Finance",
                    "Education",
                    "Retail",
                    "Other",
                  ].map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="stage" className="text-sm font-medium">
                Stage
              </Label>
              <Select
                value={form.stage}
                onValueChange={(v) => update("stage", v)}
              >
                <SelectTrigger
                  id="stage"
                  className="h-9 text-sm"
                  data-ocid="input-stage"
                >
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  {["Idea", "MVP", "Early Traction", "Growth", "Scale"].map(
                    (opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="team-size" className="text-sm font-medium">
                Team Size
              </Label>
              <Input
                id="team-size"
                type="number"
                min={1}
                placeholder="e.g., 8"
                value={form.teamSize}
                onChange={(e) => update("teamSize", e.target.value)}
                className="h-9 text-sm"
                data-ocid="input-team-size"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="timeline" className="text-sm font-medium">
                Timeline
              </Label>
              <Input
                id="timeline"
                placeholder="e.g., 6 months"
                value={form.timeline}
                onChange={(e) => update("timeline", e.target.value)}
                className="h-9 text-sm"
                data-ocid="input-timeline"
              />
            </div>
          </div>

          {/* Goal — full width */}
          <div className="space-y-1.5">
            <Label htmlFor="goal" className="text-sm font-medium">
              Primary Goal
            </Label>
            <Textarea
              id="goal"
              placeholder="What's your primary goal for this roadmap? (e.g., reach $10k MRR, launch beta, close seed round)"
              value={form.goal}
              onChange={(e) => update("goal", e.target.value)}
              rows={2}
              className="resize-none text-sm"
              data-ocid="input-goal"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-1 border-t border-border/60 mt-1">
            <Button
              type="button"
              onClick={onGenerate}
              className="gap-2 h-10 text-sm font-medium btn-lift flex-1 sm:flex-none"
              data-ocid="btn-generate"
            >
              <Sparkles className="w-4 h-4" />
              Generate Roadmap
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="gap-2 h-10 text-sm font-medium btn-lift"
              data-ocid="btn-reset"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Roadmap Tab ──────────────────────────────────────────────────────────────

interface RoadmapTabProps {
  output: PlannerOutput;
  onEditInputs: () => void;
}

function RoadmapTab({ output, onEditInputs }: RoadmapTabProps) {
  return (
    <div className="space-y-5">
      {/* Roadmap heading bar */}
      <div className="card-base space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <div className="flex-1 min-w-0">
            <h2 className="text-h4 font-bold text-foreground leading-tight">
              {output.startupIdea || "Your Startup Roadmap"}
            </h2>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <Badge variant="outline" className="text-xs font-normal">
                {output.industry}
              </Badge>
              <Badge variant="outline" className="text-xs font-normal">
                {output.stage}
              </Badge>
              <Badge variant="outline" className="text-xs font-normal">
                {output.teamSize} people
              </Badge>
              <Badge variant="outline" className="text-xs font-normal">
                {output.timeline}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs h-8"
              data-ocid="btn-import"
            >
              <Download className="w-3.5 h-3.5" />
              Import
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs h-8"
              data-ocid="btn-regenerate"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Regenerate
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs h-8"
              onClick={onEditInputs}
              data-ocid="btn-edit-inputs"
            >
              <PenLine className="w-3.5 h-3.5" />
              Edit Inputs
            </Button>
          </div>
        </div>
        {/* Stats row */}
        <div className="pt-3 border-t border-border/60">
          <RoadmapStats output={output} />
        </div>
      </div>

      {/* Sections */}
      <PhasesSection output={output} />
      <TasksSection output={output} />
      <TimelineSection output={output} />
      <RiskPanel output={output} />
      <SuccessMetricsSection output={output} />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Planner() {
  const [activeTab, setActiveTab] = useState<"input" | "roadmap">("input");
  const [form, setForm] = useState<PlannerForm>(defaultForm);
  const [plannerOutput, setPlannerOutput] =
    useState<PlannerOutput>(samplePlannerOutput);

  function handleGenerate() {
    setPlannerOutput({
      ...samplePlannerOutput,
      ...(form.startupIdea && { startupIdea: form.startupIdea }),
      ...(form.industry && { industry: form.industry }),
      ...(form.stage && { stage: form.stage }),
      ...(form.teamSize && { teamSize: Number(form.teamSize) }),
      ...(form.timeline && { timeline: form.timeline }),
      ...(form.goal && { goal: form.goal }),
    });
    setActiveTab("roadmap");
  }

  return (
    <div className="space-y-6" data-ocid="planner-page">
      <PageHeader
        title="AI Planner"
        subtitle="Generate a structured, phase-by-phase roadmap for your startup using AI-powered planning."
      />

      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as "input" | "roadmap")}
        className="space-y-5"
      >
        <TabsList
          className="h-auto p-0 bg-transparent border-b border-border rounded-none w-full justify-start gap-0"
          data-ocid="planner-tabs"
        >
          <TabsTrigger
            value="input"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground px-4 py-2.5 text-sm font-medium transition-colors"
            data-ocid="tab-input"
          >
            Planner Input
          </TabsTrigger>
          <TabsTrigger
            value="roadmap"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground px-4 py-2.5 text-sm font-medium transition-colors"
            data-ocid="tab-roadmap"
          >
            Roadmap
          </TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="mt-0">
          <InputTab form={form} setForm={setForm} onGenerate={handleGenerate} />
        </TabsContent>

        <TabsContent value="roadmap" className="mt-0">
          <RoadmapTab
            output={plannerOutput}
            onEditInputs={() => setActiveTab("input")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
