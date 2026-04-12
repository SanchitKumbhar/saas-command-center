import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockUser } from "../data/user";
import type { User } from "../types";

interface UserState {
  currentUser: User;
  setUser: (user: Partial<User>) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      currentUser: mockUser,
      setUser: (user) =>
        set((state) => ({ currentUser: { ...state.currentUser, ...user } })),
    }),
    { name: "apex-user" },
  ),
);
