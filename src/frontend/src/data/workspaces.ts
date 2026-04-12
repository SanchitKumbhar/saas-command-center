import type { Workspace } from "../types";

export const mockWorkspaces: Workspace[] = [
  {
    id: "ws-1",
    name: "Apex Engineering",
    slug: "apex-engineering",
    plan: "pro",
    memberCount: 12,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "ws-2",
    name: "Product Studio",
    slug: "product-studio",
    plan: "pro",
    memberCount: 6,
    createdAt: "2024-03-20T00:00:00Z",
  },
  {
    id: "ws-3",
    name: "Marketing Ops",
    slug: "marketing-ops",
    plan: "free",
    memberCount: 4,
    createdAt: "2024-06-01T00:00:00Z",
  },
];
