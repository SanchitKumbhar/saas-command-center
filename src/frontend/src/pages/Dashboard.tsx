import { ActionCard } from "@/components/dashboard/ActionCard";
import { DeltaCard } from "@/components/dashboard/DeltaCard";
import { RiskCard } from "@/components/dashboard/RiskCard";
import { SuggestionCard } from "@/components/dashboard/SuggestionCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  dashboardDataByProject,
  dashboardProjects,
} from "@/data/aiDashboard";
import { mockProjects } from "@/data/projects";
import { CircleHelp, Download, Send, Wand2 } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [selectedProjectId, setSelectedProjectId] = useState("proj-2");
  const [askQuestion, setAskQuestion] = useState("");

  const selectedProject =
    mockProjects.find((project) => project.id === selectedProjectId) ??
    mockProjects[0];
  const currentData = dashboardDataByProject[selectedProject.id];

  return (
    <div
      className="flex flex-col gap-5 sm:gap-6 p-3 sm:p-4 md:p-6 pb-10"
      data-ocid="dashboard-page"
    >
      <PageHeader
        title="AI Action Center"
        subtitle="Project-specific decisions, automated actions, and live risks"
        action={
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="btn-lift"
            data-ocid="dashboard-export-btn"
          >
            <Download size={14} className="mr-1.5" />
            Export Snapshot
          </Button>
        }
      />

      <SectionCard noPadding className="overflow-visible">
        <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Project Filter
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {selectedProject.name}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              AI decisions update instantly when you switch projects.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="project-filter" className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Select project
            </Label>
            <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
              <SelectTrigger id="project-filter" className="h-11 rounded-xl bg-background/70">
                <SelectValue placeholder="Choose a project" />
              </SelectTrigger>
              <SelectContent>
                {dashboardProjects.map((project) => (
                  <SelectItem key={project.id} value={project.id}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        className="border-primary/15 bg-gradient-to-r from-primary/6 via-background to-background"
        noPadding
      >
        <div className="flex flex-col gap-3 p-4 sm:p-5 md:flex-row md:items-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Wand2 size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Ask AI
            </p>
            <p className="text-sm text-muted-foreground">
              Ask about scope, blockers, next moves, or who should own the next task.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row md:max-w-xl">
            <Input
              value={askQuestion}
              onChange={(e) => setAskQuestion(e.target.value)}
              placeholder="Ask AI about this project..."
              className="h-11 rounded-xl bg-background/80"
            />
            <Button type="button" className="h-11 rounded-xl px-4">
              <Send size={14} className="mr-2" />
              Ask AI
            </Button>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="AI Summary" noPadding>
        <div className="flex flex-col gap-4 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={selectedProject.status} showDot />
            <span className="text-xs text-muted-foreground">
              {selectedProject.progress}% complete · {selectedProject.description}
            </span>
          </div>
          <p className="max-w-4xl text-base leading-7 text-foreground sm:text-[1.05rem]">
            {currentData.summary}
          </p>
        </div>
      </SectionCard>

      <section aria-label="Executed Actions">
        <SectionCard title="Executed Actions (by AI)" noPadding>
          <div className="space-y-3 p-4 sm:p-5">
            {currentData.executed_actions.map((action) => (
              <ActionCard
                key={`${action.title}-${action.timestamp}`}
                icon={action.icon}
                title={action.title}
                impact={action.impact}
                timestamp={action.timestamp}
              />
            ))}
          </div>
        </SectionCard>
      </section>

      <section aria-label="What Changed">
        <TooltipProvider delayDuration={250}>
          <SectionCard
            noPadding
            title="What Changed"
            headerAction={
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  AI Impact
                </span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Shows impact of AI decisions"
                    >
                      <CircleHelp size={14} />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">
                    Shows impact of AI decisions
                  </TooltipContent>
                </Tooltip>
              </div>
            }
          >
            <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-4">
              {currentData.delta_data.map((item) => (
                <DeltaCard
                  key={item.label}
                  label={item.label}
                  before={item.before}
                  after={item.after}
                />
              ))}
            </div>
          </SectionCard>
        </TooltipProvider>
      </section>

      <section aria-label="Suggested Actions and Risks" className="grid gap-4 xl:grid-cols-2">
        <SectionCard
          title="Suggested Actions"
          noPadding
          className="border-primary/20 bg-gradient-to-b from-primary/5 to-background shadow-[0_18px_42px_-34px_oklch(0_0_0_/_0.58)]"
        >
          <div className="space-y-3 p-4 sm:p-5">
            {currentData.suggested_actions.map((suggestion) => (
              <SuggestionCard
                key={suggestion.title}
                title={suggestion.title}
                reason={suggestion.reason}
              />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Risks & Warnings" noPadding>
          <div className="space-y-3 p-4 sm:p-5">
            {currentData.risks.map((risk) => (
              <RiskCard
                key={risk.title}
                title={risk.title}
                severity={risk.severity}
                impact={risk.impact}
              />
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  );
}
