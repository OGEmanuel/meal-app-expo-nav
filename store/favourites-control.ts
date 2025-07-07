import { create } from "zustand";

interface Favourites {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

export const useFavouritesStore = create<Favourites>((set) => ({
  ids: [],
  addFavourite: (id: string) => {
    set((state) => ({
      ids: [...state.ids, id],
    }));
  },
  removeFavourite: (id: string) => {
    set((state) => ({
      ids: state.ids.filter((item) => item !== id),
    }));
  },
}));
