import { create } from "zustand";

const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

export const usePublicStatsStore = create((set) => ({
  stats: { totalUsers: 0, weeklyUsers: 0, weeklyGrowth: 0 },
  loading: true,

  fetchStats: async () => {
    try {
      const response = await fetch(`${SERVER_API}/auth/stats/public`);
      const data = await response.json();

      if (data.status === "success") {
        const { totalUsers, weeklyUsers, weeklyGrowth } = data.data;
        set({ stats: { totalUsers, weeklyUsers, weeklyGrowth } });
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
