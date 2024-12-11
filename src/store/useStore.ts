import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilmState {
  filters: {
    director: string;
    releaseYear: string;
  };
  sortBy: string;
  language: string;
  setFilters: (filters: { director: string; releaseYear: string }) => void;
  setSortBy: (sortBy: string) => void;
  setLanguage: (language: string) => void;
}

export const useStore = create<FilmState>()(
  persist(
    (set) => ({
      filters: { director: "", releaseYear: "" },
      sortBy: "title",
      language: "en",
      setFilters: (filters) => set({ filters }),
      setSortBy: (sortBy) => set({ sortBy }),
      setLanguage: (language) => set({ language }),
    }),
    { name: "film-storage" }
  )
);
