import { mockProjects } from "./projects";

export interface DashboardAction {
  icon: string;
  title: string;
  impact: string;
  timestamp: string;
}

export interface DashboardSuggestion {
  title: string;
  reason: string;
}

export interface DashboardRisk {
  title: string;
  severity: "High" | "Medium" | "Low";
  impact: string;
}

export interface DashboardDelta {
  label: string;
  before: number;
  after: number;
}

export interface ProjectDashboardData {
  projectId: string;
  project: string;
  summary: string;
  executed_actions: DashboardAction[];
  delta_data: DashboardDelta[];
  suggested_actions: DashboardSuggestion[];
  risks: DashboardRisk[];
}

export const dashboardProjects = mockProjects.map((project) => ({
  id: project.id,
  name: project.name,
  status: project.status,
  progress: project.progress,
}));

export const dashboardDataByProject: Record<string, ProjectDashboardData> = {
  "proj-1": {
    projectId: "proj-1",
    project: "Payments Platform",
    summary:
      "Payments Platform is on track, but delivery is slightly concentrated around the API workstream. AI has already rebalanced a few tasks, and the release window looks recoverable without slipping the launch date.",
    executed_actions: [
      {
        icon: "⚙️",
        title: "Reassigned 2 backend tasks",
        impact: "Reduced queue pressure on the payments API owner and kept the integration path moving.",
        timestamp: "2 min ago",
      },
      {
        icon: "🤖",
        title: "Auto-created webhook follow-up tasks",
        impact: "Converted review notes into 5 trackable tasks so the team can close gaps faster.",
        timestamp: "14 min ago",
      },
      {
        icon: "📉",
        title: "Trimmed launch scope by 8%",
        impact: "Deferred non-critical polish items to preserve the rollout target.",
        timestamp: "31 min ago",
      },
    ],
    delta_data: [
      { label: "Tasks Delayed", before: 5, after: 2 },
      { label: "Overloaded Members", before: 3, after: 1 },
      { label: "Blocked Tasks", before: 4, after: 1 },
      { label: "Scope Drift", before: 7, after: 5 },
    ],
    suggested_actions: [
      {
        title: "Approve a short API freeze",
        reason: "This would give QA a stable surface and lower the chance of late-cycle regressions.",
      },
      {
        title: "Move logging follow-ups into a maintenance lane",
        reason: "The logging work is useful but no longer on the critical path for launch readiness.",
      },
    ],
    risks: [
      {
        title: "Stripe webhook test coverage still incomplete",
        severity: "High",
        impact: "Launch confidence drops if event handling edge cases remain unverified.",
      },
      {
        title: "One review task has no backup owner",
        severity: "Medium",
        impact: "A single availability issue could delay the final sign-off loop.",
      },
    ],
  },
  "proj-2": {
    projectId: "proj-2",
    project: "Auth Redesign",
    summary:
      "Sprint is slightly overloaded but recoverable with backend optimization. AI has reduced near-term scope, shifted work toward security review, and kept the auth release within a controllable risk band.",
    executed_actions: [
      {
        icon: "🤖",
        title: "Reprioritized MFA and SSO work",
        impact: "Pulled security-critical items forward to reduce downstream dependency risk.",
        timestamp: "1 min ago",
      },
      {
        icon: "⚙️",
        title: "Reassigned 2 backend tasks",
        impact: "Reduced delay by moving implementation work to the least-loaded engineer.",
        timestamp: "8 min ago",
      },
      {
        icon: "📉",
        title: "Reduced sprint scope by 12%",
        impact: "Deferred secondary UX polish so the team can focus on security milestones.",
        timestamp: "22 min ago",
      },
    ],
    delta_data: [
      { label: "Tasks Delayed", before: 6, after: 3 },
      { label: "Overloaded Members", before: 4, after: 2 },
      { label: "Blocked Tasks", before: 5, after: 2 },
      { label: "Unassigned Critical Tasks", before: 3, after: 1 },
    ],
    suggested_actions: [
      {
        title: "Accept a one-week slip for SSO hardening",
        reason: "The security review is the highest-value constraint, and rushing it increases risk.",
      },
      {
        title: "Assign a temporary backup owner for audit tasks",
        reason: "Coverage is thin while the primary reviewer is blocked by vendor feedback.",
      },
    ],
    risks: [
      {
        title: "Security audit feedback is still pending",
        severity: "High",
        impact: "External sign-off may slip if the vendor response does not arrive this week.",
      },
      {
        title: "MFA implementation has two unassigned edge cases",
        severity: "Medium",
        impact: "Late fixes could extend QA time and push the release candidate.",
      },
      {
        title: "Copy review backlog is low priority",
        severity: "Low",
        impact: "Minor content drift may remain until the final pass.",
      },
    ],
  },
  "proj-3": {
    projectId: "proj-3",
    project: "Analytics Pipeline",
    summary:
      "The data migration is trending off track, but the biggest blockers are now isolated. AI is pushing the team toward dependency resolution instead of broad rework.",
    executed_actions: [
      {
        icon: "⚙️",
        title: "Re-routed migration tasks",
        impact: "Shifted ETL work toward the most dependency-heavy pipelines first.",
        timestamp: "4 min ago",
      },
      {
        icon: "🤖",
        title: "Generated schema-check follow-ups",
        impact: "Created validation tasks from review comments to reduce hidden migration risk.",
        timestamp: "19 min ago",
      },
      {
        icon: "📉",
        title: "Removed redundant dashboard work",
        impact: "Kept the team focused on migration completion rather than non-essential reporting polish.",
        timestamp: "35 min ago",
      },
    ],
    delta_data: [
      { label: "Tasks Delayed", before: 7, after: 5 },
      { label: "Overloaded Members", before: 3, after: 2 },
      { label: "Blocked Tasks", before: 6, after: 3 },
      { label: "Dependency Conflicts", before: 5, after: 3 },
    ],
    suggested_actions: [
      {
        title: "Pause new pipeline intake for 48 hours",
        reason: "This would let the team finish the migration backlog without creating fresh dependencies.",
      },
      {
        title: "Escalate schema conflict resolution today",
        reason: "The remaining migration blockers are unlikely to clear without direct ownership.",
      },
    ],
    risks: [
      {
        title: "Legacy schema conflicts remain unresolved",
        severity: "High",
        impact: "A direct cutover would fail if the format mismatch is not closed soon.",
      },
      {
        title: "ETL handoff is dependent on one engineer",
        severity: "Medium",
        impact: "Absence or context loss could slow the final migration stage.",
      },
    ],
  },
  "proj-4": {
    projectId: "proj-4",
    project: "Mobile App v3",
    summary:
      "The mobile release is healthy, and the AI layer mostly sees polish work rather than structural risk. The team can keep shipping while preserving the current pace.",
    executed_actions: [
      {
        icon: "🤖",
        title: "Auto-created onboarding review tasks",
        impact: "Converted design feedback into actionable tickets so nothing slips through the cracks.",
        timestamp: "3 min ago",
      },
      {
        icon: "⚙️",
        title: "Balanced design and engineering load",
        impact: "Distributed follow-up work to avoid bottlenecks around the onboarding flow.",
        timestamp: "17 min ago",
      },
      {
        icon: "📉",
        title: "Deferred non-essential animation tweaks",
        impact: "Protected the release schedule by pushing cosmetic polish out of the critical path.",
        timestamp: "41 min ago",
      },
    ],
    delta_data: [
      { label: "Tasks Delayed", before: 4, after: 2 },
      { label: "Overloaded Members", before: 2, after: 1 },
      { label: "Blocked Tasks", before: 2, after: 1 },
      { label: "Review Backlog", before: 5, after: 3 },
    ],
    suggested_actions: [
      {
        title: "Ship the onboarding change behind a flag",
        reason: "This lets the team gather feedback without blocking the app store timeline.",
      },
      {
        title: "Confirm accessibility review before final QA",
        reason: "A quick pass now is cheaper than a late mobile accessibility fix.",
      },
    ],
    risks: [
      {
        title: "App store approval timing is external",
        severity: "Medium",
        impact: "Release date could shift if the review queue is slower than expected.",
      },
      {
        title: "One onboarding task still lacks QA coverage",
        severity: "Low",
        impact: "A small regression could survive until the final sign-off pass.",
      },
    ],
  },
  "proj-5": {
    projectId: "proj-5",
    project: "Design System",
    summary:
      "The design system is effectively complete, and the remaining work is mostly documentation and cleanup. AI sees very little delivery risk and is keeping the final tasks tidy.",
    executed_actions: [
      {
        icon: "🤖",
        title: "Auto-closed duplicate component tickets",
        impact: "Removed redundant work items now that the library is stable.",
        timestamp: "5 min ago",
      },
      {
        icon: "⚙️",
        title: "Merged documentation follow-ups",
        impact: "Grouped small cleanup tasks to speed up the final handoff.",
        timestamp: "12 min ago",
      },
      {
        icon: "📉",
        title: "Reduced active workstream count",
        impact: "Narrowed the active scope to documentation and release notes only.",
        timestamp: "26 min ago",
      },
    ],
    delta_data: [
      { label: "Tasks Delayed", before: 2, after: 1 },
      { label: "Overloaded Members", before: 1, after: 1 },
      { label: "Blocked Tasks", before: 1, after: 0 },
      { label: "Backlog Noise", before: 4, after: 1 },
    ],
    suggested_actions: [
      {
        title: "Archive the completed component milestones",
        reason: "This will keep the board focused on the final documentation tasks.",
      },
      {
        title: "Invite one final consumer review",
        reason: "A quick external pass can validate the library before it is frozen.",
      },
    ],
    risks: [
      {
        title: "Documentation polish remains unfinished",
        severity: "Low",
        impact: "The product is usable, but the handoff is not yet fully closed.",
      },
    ],
  },
};
