import type { Update } from "../types";

export const mockUpdates: Update[] = [
  {
    id: "upd-1",
    type: "milestone",
    title: "Payments API v2 shipped to production",
    content:
      "After 3 months of development and 2 weeks of load testing, the new Payments API is live. Highlights: 40% lower latency, full Stripe webhook support, and improved error handling with structured responses.",
    authorId: "member-1",
    authorName: "Sarah Chen",
    createdAt: "2026-04-12T10:00:00Z",
    projectId: "proj-1",
    projectName: "Payments Platform",
    pinned: true,
    reactions: [
      { emoji: "🚀", count: 8 },
      { emoji: "✅", count: 5 },
      { emoji: "🎉", count: 4 },
    ],
  },
  {
    id: "upd-2",
    type: "announcement",
    title: "Team offsite confirmed — Austin, May 14–16",
    content:
      "We're heading to Austin for a 3-day offsite. Agenda: Q3 planning, team building, and engineering deep-dives. Travel and accommodation is covered. Full itinerary shared in Notion.",
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
    title: "Database maintenance window tonight at 2am UTC",
    content:
      "Scheduled maintenance for primary PostgreSQL cluster. Expected downtime: 10–15 minutes. Read replicas will remain available. No action needed from the team — infra will handle the failover.",
    authorId: "member-7",
    authorName: "Jordan Kim",
    createdAt: "2026-04-11T09:00:00Z",
    pinned: false,
    reactions: [],
  },
  {
    id: "upd-4",
    type: "release",
    title: "Design System v1.4 — 6 new components",
    content:
      "Just shipped DS v1.4 to npm. New additions: DataTable, CommandPalette, DateRangePicker, Timeline, Stepper, and RichTextEditor. All components have Storybook stories and accessibility tests.",
    authorId: "member-5",
    authorName: "Tom Okafor",
    createdAt: "2026-04-10T16:00:00Z",
    projectId: "proj-5",
    projectName: "Design System",
    pinned: false,
    reactions: [
      { emoji: "💎", count: 9 },
      { emoji: "🙌", count: 6 },
    ],
  },
  {
    id: "upd-5",
    type: "retrospective",
    title: "Sprint 7 retrospective — key takeaways",
    content:
      "Velocity was down 12% due to the auth blocker. Wins: payments shipped on time, mobile onboarding in review. Actions: unblock auth audit by Friday, reallocate 2 points from Alex to free up capacity.",
    authorId: "user-1",
    authorName: "Jordan Ellis",
    createdAt: "2026-04-09T17:00:00Z",
    pinned: false,
    reactions: [{ emoji: "👍", count: 5 }],
  },
  {
    id: "upd-6",
    type: "milestone",
    title: "Analytics Spark cluster fully provisioned",
    content:
      "The new Spark cluster is live in staging. 3 of 12 ETL pipelines migrated successfully. Running schema migration scripts now — estimate full migration complete by next Friday.",
    authorId: "member-6",
    authorName: "Lin Zhao",
    createdAt: "2026-04-08T11:00:00Z",
    projectId: "proj-3",
    projectName: "Analytics Pipeline",
    pinned: false,
    reactions: [{ emoji: "⚡", count: 4 }],
  },
  {
    id: "upd-7",
    type: "announcement",
    title: "New hire: Ava Thompson joins as QA Engineer",
    content:
      "Excited to welcome Ava to the team! Ava brings 5 years of QA experience with a focus on end-to-end testing automation. She'll be working across all product squads to improve our test coverage.",
    authorId: "user-1",
    authorName: "Jordan Ellis",
    createdAt: "2026-04-07T09:00:00Z",
    pinned: false,
    reactions: [
      { emoji: "👋", count: 11 },
      { emoji: "🎉", count: 8 },
    ],
  },
  {
    id: "upd-8",
    type: "alert",
    title: "Auth Redesign deadline at risk",
    content:
      "The security audit dependency is blocking 3 critical tasks. Current timeline projects a 1-week slip unless we resolve the external vendor coordination today. Escalating to leadership.",
    authorId: "member-3",
    authorName: "Marcus Webb",
    createdAt: "2026-04-06T15:00:00Z",
    projectId: "proj-2",
    projectName: "Auth Redesign",
    pinned: false,
    reactions: [],
  },
  {
    id: "upd-9",
    type: "release",
    title: "Mobile App v3 — beta to TestFlight",
    content:
      "Beta build is live on TestFlight for internal testers. Focus areas for feedback: onboarding flow, dark mode consistency, and navigation transitions. Feedback deadline is April 15.",
    authorId: "member-5",
    authorName: "Tom Okafor",
    createdAt: "2026-04-05T13:00:00Z",
    projectId: "proj-4",
    projectName: "Mobile App v3",
    pinned: false,
    reactions: [
      { emoji: "📱", count: 7 },
      { emoji: "🔥", count: 5 },
    ],
  },
];
