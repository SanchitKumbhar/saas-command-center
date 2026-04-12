import { create } from "zustand";
import type { Notification, NotificationType } from "../types";

const seedNotifications: Notification[] = [
  {
    id: "notif-1",
    type: "error",
    title: "Auth Redesign deadline at risk",
    message:
      "The auth service security audit is blocked. 3 tasks are affected.",
    timestamp: "2026-04-12T08:45:00Z",
    read: false,
  },
  {
    id: "notif-2",
    type: "success",
    title: "Payments API v2 shipped",
    message: "Sarah Chen deployed Payments API v2 to production successfully.",
    timestamp: "2026-04-12T10:00:00Z",
    read: false,
  },
  {
    id: "notif-3",
    type: "warning",
    title: "Alex Rivera over capacity",
    message: "Alex is at 138% utilization across 3 active projects.",
    timestamp: "2026-04-12T07:30:00Z",
    read: false,
  },
  {
    id: "notif-4",
    type: "info",
    title: "Team offsite confirmed",
    message:
      "Austin offsite dates confirmed: May 14–16. Details shared in Notion.",
    timestamp: "2026-04-11T14:30:00Z",
    read: true,
  },
];

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (
    type: NotificationType,
    title: string,
    message: string,
    actionLabel?: string,
    actionHref?: string,
  ) => void;
  markAllRead: () => void;
  markRead: (id: string) => void;
  clearAll: () => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: seedNotifications,
  get unreadCount() {
    return get().notifications.filter((n) => !n.read).length;
  },
  addNotification: (type, title, message, actionLabel, actionHref) => {
    const newNotif: Notification = {
      id: `notif-${Date.now()}`,
      type,
      title,
      message,
      timestamp: new Date().toISOString(),
      read: false,
      actionLabel,
      actionHref,
    };
    set((state) => ({ notifications: [newNotif, ...state.notifications] }));
  },
  markRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n,
      ),
    })),
  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
    })),
  clearAll: () => set({ notifications: [] }),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
