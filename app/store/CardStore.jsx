import { create } from "zustand";
import { useAuthStore } from "./AuthStore";

const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

export const useCardStore = create((set, get) => ({
  cards: [],
  cardsLoading: false,
  addingCard: false,
  verifyingCard: false,
  updatingCardId: null,
  deletingCardId: null,

  getCards: async () => {
    try {
      set({ cardsLoading: true });
      const { getAuthHeader } = useAuthStore.getState();

      const response = await fetch(`${SERVER_API}/cards`, {
        headers: getAuthHeader(),
      });

      const data = await response.json();
      if (data.status === "success") {
        set({
          cards: data.data.cards,
          cardsLoading: false,
        });
        return { success: true, data: data.data.cards };
      }
      set({ cardsLoading: false });
      return { success: false, message: data.message };
    } catch (error) {
      console.error("Get cards error:", error);
      set({ cardsLoading: false });
      return { success: false, message: "Failed to fetch cards" };
    }
  },

  initializeCardVerification: async () => {
    try {
      set({ addingCard: true });
      const { getAuthHeader } = useAuthStore.getState();

      const response = await fetch(`${SERVER_API}/cards/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeader(),
        },
      });

      const data = await response.json();
      if (data.status === "success") {
        set({ addingCard: false });
        return { success: true, data: data.data };
      }
      set({ addingCard: false });
      return { success: false, message: data.message };
    } catch (error) {
      console.error("Initialize card verification error:", error);
      set({ addingCard: false });
      return { success: false, message: "Failed to start card verification" };
    }
  },

  verifyCardAuthorization: async (reference) => {
    try {
      set({ verifyingCard: true });
      const { getAuthHeader } = useAuthStore.getState();

      const response = await fetch(`${SERVER_API}/cards/verify/${reference}`, {
        headers: getAuthHeader(),
      });

      const data = await response.json();
      if (data.status === "success") {
        set({ verifyingCard: false });
        await get().getCards();
        return {
          success: true,
          data: data.data,
          message: data.message || "Card verified and saved successfully!",
        };
      }
      set({ verifyingCard: false });
      return { success: false, message: data.message };
    } catch (error) {
      console.error("Verify card authorization error:", error);
      set({ verifyingCard: false });
      return { success: false, message: "Failed to verify card" };
    }
  },

  setDefaultCard: async (cardId) => {
    try {
      set({ updatingCardId: cardId });
      const { getAuthHeader } = useAuthStore.getState();

      const response = await fetch(`${SERVER_API}/cards/${cardId}/default`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeader(),
        },
      });

      const data = await response.json();
      if (data.status === "success") {
        set((state) => ({
          cards: state.cards.map((card) => ({
            ...card,
            isDefault: card._id === cardId,
          })),
          updatingCardId: null,
        }));
        return { success: true, message: "Default card updated" };
      }
      set({ updatingCardId: null });
      return { success: false, message: data.message };
    } catch (error) {
      console.error("Set default card error:", error);
      set({ updatingCardId: null });
      return { success: false, message: "Failed to update default card" };
    }
  },

  deleteCard: async (cardId) => {
    try {
      set({ deletingCardId: cardId });
      const { getAuthHeader } = useAuthStore.getState();

      const response = await fetch(`${SERVER_API}/cards/${cardId}`, {
        method: "DELETE",
        headers: getAuthHeader(),
      });

      const data = await response.json();
      if (data.status === "success") {
        set({ deletingCardId: null });
        await get().getCards();
        return { success: true, message: "Card removed successfully" };
      }
      set({ deletingCardId: null });
      return { success: false, message: data.message };
    } catch (error) {
      console.error("Delete card error:", error);
      set({ deletingCardId: null });
      return { success: false, message: "Failed to remove card" };
    }
  },
}));
