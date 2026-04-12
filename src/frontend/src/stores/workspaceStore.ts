import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockWorkspaces } from "../data/workspaces";
import type { Workspace } from "../types";

interface WorkspaceState {
  workspaces: Workspace[];
  currentWorkspaceId: string;
  currentWorkspace: Workspace | undefined;
  setCurrentWorkspace: (id: string) => void;
  createWorkspace: (name: string) => Workspace;
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set, get) => ({
      workspaces: mockWorkspaces,
      currentWorkspaceId: mockWorkspaces[0].id,
      get currentWorkspace() {
        return get().workspaces.find((w) => w.id === get().currentWorkspaceId);
      },
      setCurrentWorkspace: (id: string) => set({ currentWorkspaceId: id }),
      createWorkspace: (name: string) => {
        const newWs: Workspace = {
          id: `ws-${Date.now()}`,
          name,
          slug: name.toLowerCase().replace(/\s+/g, "-"),
          plan: "free",
          memberCount: 1,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          workspaces: [...state.workspaces, newWs],
          currentWorkspaceId: newWs.id,
        }));
        return newWs;
      },
    }),
    { name: "apex-workspace" },
  ),
);
