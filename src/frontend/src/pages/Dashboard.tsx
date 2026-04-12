import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { StatCard } from "@/components/shared/StatCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  bottlenecks,
  dashboardAlerts,
  growthScore,
  kpiMetrics,
  recentUpdates,
  revenueChartData,
  topPerformers,
  userGrowthData,
} from "@/data/dashboard";
import { cn } from "@/lib/utils";
import { useNotificationStore } from "@/stores/notificationStore";
import type { NotificationType } from "@/types";
import {
  AlertCircle,
  AlertTriangle,
  Award,
  Bell,
  CheckSquare,
  Clock,
  DollarSign,
  Download,
  Info,
  Megaphone,
  Pin,
  Send,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ── KPI icon map ──────────────────────────────────────────────────────────────
const KPI_ICONS: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign size={16} />,
  Users: <Users size={16} />,
  CheckSquare: <CheckSquare size={16} />,
  Clock: <Clock size={16} />,
};

// ── Chart tooltip ─────────────────────────────────────────────────────────────
interface TooltipPayloadItem {
  name: string;
  value: number;
  color: string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-popover text-popover-foreground border border-border shadow-lg rounded-lg px-3 py-2.5 text-xs min-w-[130px]">
      <p className="font-semibold mb-1.5 text-foreground text-[11px] uppercase tracking-wide">
        {label}
      </p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 py-0.5">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: entry.color }}
          />
          <span className="capitalize text-muted-foreground">{entry.name}</span>
          <span className="font-semibold ml-auto pl-2 tabular-nums">
            {typeof entry.value === "number" && entry.value > 999
              ? entry.value.toLocaleString()
              : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Severity config ────────────────────────────────────────────────────────────
const SEVERITY_CONFIG = {
  high: {
    border: "border-l-destructive",
    bg: "bg-destructive/5",
    badge: "bg-destructive/10 text-destructive border-destructive/20",
  },
  medium: {
    border: "border-l-warning",
    bg: "bg-warning/5",
    badge: "bg-warning/10 text-warning border-warning/20",
  },
  low: {
    border: "border-l-muted-foreground/30",
    bg: "bg-muted/30",
    badge: "bg-muted text-muted-foreground border-border",
  },
} as const;

// ── Alert type config ─────────────────────────────────────────────────────────
const ALERT_TYPE_CONFIG = {
  error: {
    icon: AlertCircle,
    iconClass: "text-destructive",
    border: "border-l-destructive",
    bg: "hover:bg-destructive/5",
  },
  warning: {
    icon: AlertTriangle,
    iconClass: "text-warning",
    border: "border-l-warning",
    bg: "hover:bg-warning/5",
  },
  info: {
    icon: Info,
    iconClass: "text-info",
    border: "border-l-info",
    bg: "hover:bg-info/5",
  },
} as const;

// ── Update type icon ──────────────────────────────────────────────────────────
const UPDATE_TYPE_ICONS = {
  milestone: <CheckSquare size={14} className="text-success" />,
  announcement: <Megaphone size={14} className="text-primary" />,
  alert: <AlertTriangle size={14} className="text-warning" />,
  update: <Info size={14} className="text-info" />,
} as const;

// ── Growth Score Card ─────────────────────────────────────────────────────────
function GrowthScoreCard() {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col gap-4 h-full",
        "shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-px",
      )}
      data-ocid="growth-score-card"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
          Growth Score
        </p>
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-success/10 text-success text-[11px] font-semibold">
          <TrendingUp size={11} />
          <span>+{growthScore.delta}</span>
        </div>
      </div>

      {/* Score */}
      <div className="flex items-end gap-2">
        <p className="text-4xl sm:text-5xl font-bold text-foreground leading-none tabular-nums tracking-tight">
          {growthScore.score}
        </p>
        <span className="text-sm text-muted-foreground pb-1 font-medium">
          / 100
        </span>
      </div>

      {/* Breakdown bars */}
      <div className="flex flex-col gap-2.5">
        {growthScore.breakdown.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground font-medium">
                {item.label}
              </span>
              <span className="text-[11px] font-bold text-foreground tabular-nums">
                {item.value}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Send Notification Dialog ──────────────────────────────────────────────────
interface SendNotifDialogProps {
  open: boolean;
  onClose: () => void;
}

function SendNotificationDialog({ open, onClose }: SendNotifDialogProps) {
  const addNotification = useNotificationStore((s) => s.addNotification);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<NotificationType>("info");

  function handleSend() {
    if (!message.trim()) return;
    addNotification(type, "Dashboard Notification", message.trim());
    setMessage("");
    setType("info");
    onClose();
  }

  const typeLabels: Record<NotificationType, string> = {
    info: "Info",
    warning: "Warning",
    error: "Alert",
    success: "Success",
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-[90vw] sm:max-w-md"
        data-ocid="send-notif-dialog"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bell size={16} className="text-primary" />
            Send Notification
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="notif-message" className="text-sm">
              Message
            </Label>
            <Textarea
              id="notif-message"
              placeholder="Write your notification message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none min-h-[90px]"
              data-ocid="notif-message-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="notif-type" className="text-sm">
              Type
            </Label>
            <Select
              value={type}
              onValueChange={(v) => setType(v as NotificationType)}
            >
              <SelectTrigger id="notif-type" data-ocid="notif-type-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(
                  ["info", "warning", "error", "success"] as NotificationType[]
                ).map((t) => (
                  <SelectItem key={t} value={t}>
                    {typeLabels[t]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            data-ocid="notif-cancel-btn"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSend}
            disabled={!message.trim()}
            data-ocid="notif-send-btn"
          >
            <Send size={14} className="mr-1.5" />
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Timestamp formatter ───────────────────────────────────────────────────────
function formatTime(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffH = Math.floor(diffMs / 3_600_000);
  if (diffH < 1) return "just now";
  if (diffH < 24) return `${diffH}h ago`;
  return `${Math.floor(diffH / 24)}d ago`;
}

// ── Performer rank badge ──────────────────────────────────────────────────────
function RankBadge({ rank }: { rank: number }) {
  const styles = [
    "bg-warning/15 text-warning border border-warning/25",
    "bg-muted-foreground/10 text-muted-foreground border border-muted-foreground/20",
    "bg-chart-5/15 text-chart-5 border border-chart-5/20",
  ];
  return (
    <span
      className={cn(
        "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0",
        rank <= 3 ? styles[rank - 1] : "bg-muted text-muted-foreground",
      )}
    >
      {rank}
    </span>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [notifDialogOpen, setNotifDialogOpen] = useState(false);

  return (
    <div
      className="flex flex-col gap-5 sm:gap-6 p-3 sm:p-4 md:p-6 pb-10"
      data-ocid="dashboard-page"
    >
      {/* Header */}
      <PageHeader
        title="Dashboard"
        subtitle="Executive overview — real-time metrics, alerts, and team performance"
        action={
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="btn-lift"
            data-ocid="dashboard-export-btn"
          >
            <Download size={14} className="mr-1.5" />
            Export
          </Button>
        }
      />

      {/* ── Row 1: Growth Score + KPI Cards ── */}
      <section aria-label="Key Performance Indicators">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Growth Score spans 1 col on lg, full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <GrowthScoreCard />
          </div>
          {kpiMetrics.map((kpi) => (
            <StatCard
              key={kpi.id}
              label={kpi.label}
              value={kpi.value}
              change={kpi.change}
              changeLabel={kpi.changeLabel}
              trend={kpi.trend}
              icon={KPI_ICONS[kpi.icon]}
            />
          ))}
        </div>
      </section>

      {/* ── Row 2: Charts ── */}
      <section aria-label="Analytics Charts">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Revenue Chart */}
          <div className="bg-card border border-border rounded-xl shadow-xs hover:shadow-sm transition-shadow duration-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={12} className="text-primary" />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Revenue Over Time
                </h3>
              </div>
              <Badge
                variant="secondary"
                className="text-[10px] font-medium px-1.5 py-0"
              >
                YTD
              </Badge>
            </div>
            <div className="p-4 sm:p-5">
              <ResponsiveContainer width="100%" height={240}>
                <LineChart
                  data={revenueChartData}
                  margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="oklch(var(--border))"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="label"
                    tick={{
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
                    width={44}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: 11, paddingTop: "8px" }}
                    iconType="circle"
                    iconSize={7}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="oklch(var(--chart-1))"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="oklch(var(--chart-3))"
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                    dot={false}
                    activeDot={{ r: 3, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Growth Chart */}
          <div className="bg-card border border-border rounded-xl shadow-xs hover:shadow-sm transition-shadow duration-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                  <Users size={12} className="text-primary" />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  User Growth
                </h3>
              </div>
              <Badge
                variant="secondary"
                className="text-[10px] font-medium px-1.5 py-0"
              >
                Monthly
              </Badge>
            </div>
            <div className="p-4 sm:p-5">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart
                  data={userGrowthData}
                  margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                  barCategoryGap="30%"
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="oklch(var(--border))"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="label"
                    tick={{
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) =>
                      v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v)
                    }
                    width={40}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: 11, paddingTop: "8px" }}
                    iconType="circle"
                    iconSize={7}
                  />
                  <Bar
                    dataKey="users"
                    fill="oklch(var(--chart-1))"
                    radius={[3, 3, 0, 0]}
                  />
                  <Bar
                    dataKey="churned"
                    fill="oklch(var(--chart-5))"
                    radius={[3, 3, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── Row 3: Lower Grid ── */}
      <section aria-label="Operational Overview">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Column A: Alerts + Updates */}
          <div className="flex flex-col gap-4">
            {/* Alerts Panel */}
            <div
              className="bg-card border border-border rounded-xl shadow-xs hover:shadow-sm transition-shadow duration-200 overflow-hidden"
              data-ocid="alerts-panel"
            >
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/80">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Alerts
                  </h3>
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-destructive/10 text-destructive text-[10px] font-bold">
                    {dashboardAlerts.length}
                  </span>
                </div>
                <span className="text-[11px] text-muted-foreground">
                  Active
                </span>
              </div>
              <ul className="flex flex-col divide-y divide-border">
                {dashboardAlerts.map((alert) => {
                  const cfg = ALERT_TYPE_CONFIG[alert.type];
                  const Icon = cfg.icon;
                  return (
                    <li
                      key={alert.id}
                      className={cn(
                        "flex items-start gap-3 px-4 sm:px-5 py-3 sm:py-3.5",
                        "border-l-[3px] transition-colors duration-150",
                        cfg.border,
                        cfg.bg,
                      )}
                      data-ocid={`alert-item-${alert.id}`}
                    >
                      <Icon
                        size={14}
                        className={cn("flex-shrink-0 mt-0.5", cfg.iconClass)}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          {alert.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">
                          {alert.description}
                        </p>
                      </div>
                      <span className="text-[11px] text-muted-foreground flex-shrink-0 mt-0.5 tabular-nums whitespace-nowrap">
                        {formatTime(alert.timestamp)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Recent Updates */}
            <div
              className="bg-card border border-border rounded-xl shadow-xs hover:shadow-sm transition-shadow duration-200 overflow-hidden"
              data-ocid="updates-panel"
            >
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/80">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Recent Updates
                </h3>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs px-2.5 btn-lift"
                  onClick={() => setNotifDialogOpen(true)}
                  data-ocid="send-notif-trigger-btn"
                >
                  <Bell size={12} className="mr-1" />
                  Notify
                </Button>
              </div>
              <ul className="flex flex-col divide-y divide-border">
                {recentUpdates.map((update) => (
                  <li
                    key={update.id}
                    className="px-4 sm:px-5 py-3 sm:py-3.5 hover:bg-muted/30 transition-colors duration-150"
                    data-ocid={`update-item-${update.id}`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Type icon badge */}
                      <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        {UPDATE_TYPE_ICONS[
                          update.type as keyof typeof UPDATE_TYPE_ICONS
                        ] ?? <Info size={14} className="text-info" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-sm font-semibold text-foreground truncate">
                            {update.title}
                          </span>
                          {update.pinned && (
                            <Pin
                              size={11}
                              className="text-muted-foreground flex-shrink-0"
                            />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {update.content}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                          <span className="text-[11px] font-medium text-muted-foreground">
                            {update.authorName}
                          </span>
                          <span className="text-[11px] text-muted-foreground/60">
                            ·
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {formatTime(update.createdAt)}
                          </span>
                          {update.reactions.length > 0 && (
                            <div className="flex items-center gap-1.5 ml-auto">
                              {update.reactions.map((r) => (
                                <span
                                  key={r.emoji}
                                  className="inline-flex items-center gap-0.5 text-[11px] px-1 py-0.5 rounded bg-muted text-muted-foreground"
                                >
                                  {r.emoji}
                                  <span className="tabular-nums">
                                    {r.count}
                                  </span>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column B: Top Performers + Bottlenecks */}
          <div className="flex flex-col gap-4">
            {/* Top Performers */}
            <div
              className="bg-card border border-border rounded-xl shadow-xs hover:shadow-sm transition-shadow duration-200 overflow-hidden"
              data-ocid="performers-panel"
            >
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/80">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Top Performers
                  </h3>
                </div>
                <Award size={14} className="text-warning" />
              </div>
              <ul className="flex flex-col divide-y divide-border">
                {topPerformers.map((performer, idx) => (
                  <li
                    key={performer.memberId}
                    className="flex items-center gap-3 px-4 sm:px-5 py-3 hover:bg-muted/30 transition-colors duration-150"
                    data-ocid={`performer-item-${performer.memberId}`}
                  >
                    <RankBadge rank={idx + 1} />
                    <Avatar className="w-7 h-7 flex-shrink-0">
                      <AvatarFallback className="text-[10px] bg-primary/10 text-primary font-bold">
                        {performer.memberName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {performer.memberName}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {performer.department}
                      </p>
                    </div>
                    {/* Score + mini bar */}
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-foreground tabular-nums">
                          {performer.score}
                        </span>
                        <span className="text-[11px] text-muted-foreground tabular-nums">
                          pts
                        </span>
                      </div>
                      <div className="w-16 h-1 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${performer.score}%` }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottlenecks */}
            <div
              className="bg-card border border-border rounded-xl shadow-xs hover:shadow-sm transition-shadow duration-200 overflow-hidden"
              data-ocid="bottlenecks-panel"
            >
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/80">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Bottlenecks
                  </h3>
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-warning/10 text-warning text-[10px] font-bold">
                    {bottlenecks.length}
                  </span>
                </div>
                <Zap size={13} className="text-warning" />
              </div>
              <ul className="flex flex-col divide-y divide-border">
                {bottlenecks.map((bt) => {
                  const cfg = SEVERITY_CONFIG[bt.severity];
                  return (
                    <li
                      key={bt.id}
                      className={cn(
                        "px-4 sm:px-5 py-3 sm:py-3.5 border-l-[3px] transition-colors duration-150 hover:bg-muted/30",
                        cfg.border,
                      )}
                      data-ocid={`bottleneck-item-${bt.id}`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-semibold text-foreground leading-snug flex-1 min-w-0">
                          {bt.title}
                        </p>
                        <span
                          className={cn(
                            "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border flex-shrink-0",
                            cfg.badge,
                          )}
                        >
                          {bt.severity.charAt(0).toUpperCase() +
                            bt.severity.slice(1)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {bt.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <StatusBadge
                          status={
                            bt.type === "blocked-task"
                              ? "blocked"
                              : bt.type === "overdue"
                                ? "at-risk"
                                : "in-progress"
                          }
                        />
                        <span className="text-[11px] text-muted-foreground truncate">
                          {bt.affectedItem}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Send Notification Dialog */}
      <SendNotificationDialog
        open={notifDialogOpen}
        onClose={() => setNotifDialogOpen(false)}
      />
    </div>
  );
}
