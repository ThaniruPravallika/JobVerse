import { create } from "zustand";

export const useJobStore = create((set) => ({
  jobs: [],
  darkMode: false,
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
