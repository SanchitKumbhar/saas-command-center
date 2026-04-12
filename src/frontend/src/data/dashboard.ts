import type {
  Bottleneck,
  ChartDataPoint,
  KpiMetric,
  TopPerformer,
  Update,
} from "../types";

export const kpiMetrics: KpiMetric[] = [
  {
    id: "kpi-1",
    label: "Monthly Revenue",
    value: "$148,200",
    change: 12.4,
    changeLabel: "vs last month",
    trend: "up",
    icon: "DollarSign",
    unit: "$",
  },
  {
    id: "kpi-2",
    label: "Active Users",
    value: "8,342",
    change: 8.7,
    changeLabel: "vs last month",
    trend: "up",
    icon: "Users",
  },
  {
    id: "kpi-3",
    label: "Tasks Completed",
    value: 284,
    change: 15.2,
    changeLabel: "vs last sprint",
    trend: "up",
    icon: "CheckSquare",
  },
  {
    id: "kpi-4",
    label: "Avg Cycle Time",
    value: "3.2d",
    change: -18.5,
    changeLabel: "vs last sprint",
    trend: "up",
    icon: "Clock",
  },
];

export const growthScore = {
  score: 87,
  label: "Growth Score",
  delta: +5,
  breakdown: [
    { label: "Velocity", value: 92 },
    { label: "Quality", value: 85 },
    { label: "Delivery", value: 88 },
    { label: "Morale", value: 83 },
  ],
};

export const revenueChartData: ChartDataPoint[] = [
  { label: "Jan", revenue: 98000, target: 90000 },
  { label: "Feb", revenue: 105000, target: 95000 },
  { label: "Mar", revenue: 112000, target: 100000 },
  { label: "Apr", revenue: 108000, target: 105000 },
  { label: "May", revenue: 124000, target: 110000 },
  { label: "Jun", revenue: 131000, target: 115000 },
  { label: "Jul", revenue: 129000, target: 120000 },
  { label: "Aug", revenue: 136000, target: 125000 },
  { label: "Sep", revenue: 141000, target: 130000 },
  { label: "Oct", revenue: 148200, target: 135000 },
];

export const userGrowthData: ChartDataPoint[] = [
  { label: "Jan", users: 4200, churned: 180 },
  { label: "Feb", users: 4850, churned: 210 },
  { label: "Mar", users: 5400, churned: 195 },
  { label: "Apr", users: 5900, churned: 220 },
  { label: "May", users: 6350, churned: 198 },
  { label: "Jun", users: 6900, churned: 215 },
  { label: "Jul", users: 7200, churned: 230 },
  { label: "Aug", users: 7650, churned: 205 },
  { label: "Sep", users: 8050, churned: 190 },
  { label: "Oct", users: 8342, churned: 175 },
];

export const dashboardAlerts = [
  {
    id: "alert-1",
    type: "warning" as const,
    title: "Sprint velocity dropped 12%",
    description:
      "Team velocity in the current sprint is below target. Consider re-prioritizing backlog.",
    timestamp: "2026-04-12T08:30:00Z",
  },
  {
    id: "alert-2",
    type: "error" as const,
    title: "3 critical tasks overdue",
    description:
      "Tasks on the Payments API, Auth redesign, and Data pipeline are past their due dates.",
    timestamp: "2026-04-12T07:15:00Z",
  },
  {
    id: "alert-3",
    type: "info" as const,
    title: "Quarterly review next week",
    description:
      "Q2 all-hands review is scheduled for April 18th. Prepare your team updates.",
    timestamp: "2026-04-11T16:00:00Z",
  },
];

export const recentUpdates: Update[] = [
  {
    id: "upd-1",
    type: "milestone",
    title: "Payments API v2 shipped to production",
    content:
      "The new Payments API is live with 40% lower latency and full Stripe webhook support.",
    authorId: "member-1",
    authorName: "Sarah Chen",
    createdAt: "2026-04-12T10:00:00Z",
    projectName: "Payments Platform",
    pinned: false,
    reactions: [
      { emoji: "🚀", count: 8 },
      { emoji: "✅", count: 5 },
    ],
  },
  {
    id: "upd-2",
    type: "announcement",
    title: "Team offsite confirmed for May",
    content:
      "We're heading to Austin for a 3-day offsite focused on Q3 planning and team building.",
    authorId: "user-1",
    authorName: "Jordan Ellis",
    createdAt: "2026-04-11T14:30:00Z",
    pinned: true,
    reactions: [
      { emoji: "🎉", count: 12 },
      { emoji: "❤️", count: 7 },
    ],
  },
  {
    id: "upd-3",
    type: "alert",
    title: "Database migration window tonight",
    content:
      "Scheduled maintenance for the primary DB at 2am UTC. Expect ~15 min downtime.",
    authorId: "member-3",
    authorName: "Marcus Webb",
    createdAt: "2026-04-11T09:00:00Z",
    pinned: false,
    reactions: [],
  },
];

export const topPerformers: TopPerformer[] = [
  {
    memberId: "member-1",
    memberName: "Sarah Chen",
    tasksCompleted: 42,
    score: 96,
    department: "Engineering",
  },
  {
    memberId: "member-2",
    memberName: "Alex Rivera",
    tasksCompleted: 38,
    score: 91,
    department: "Product",
  },
  {
    memberId: "member-4",
    memberName: "Priya Nair",
    tasksCompleted: 35,
    score: 88,
    department: "Engineering",
  },
  {
    memberId: "member-5",
    memberName: "Tom Okafor",
    tasksCompleted: 31,
    score: 84,
    department: "Design",
  },
];

export const bottlenecks: Bottleneck[] = [
  {
    id: "bt-1",
    title: "Auth service blocked on security review",
    type: "blocked-task",
    severity: "high",
    affectedItem: "Auth Redesign — Sprint 8",
    description:
      "Security audit is blocking 3 downstream tasks from proceeding.",
  },
  {
    id: "bt-2",
    title: "Data pipeline 2 weeks overdue",
    type: "overdue",
    severity: "high",
    affectedItem: "Analytics Pipeline",
    description:
      "ETL migration is significantly delayed due to schema conflicts.",
  },
  {
    id: "bt-3",
    title: "Alex Rivera at 140% utilization",
    type: "resource-conflict",
    severity: "medium",
    affectedItem: "Product team",
    description: "Over-allocated across three concurrent projects this sprint.",
  },
];
