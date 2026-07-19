import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Batch } from '@/types';

interface FavoritesState {
  favorites: Batch[];
  addFavorite: (batch: Batch) => void;
  removeFavorite: (batchId: string) => void;
  isFavorite: (batchId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (batch) => set((state) => ({ favorites: [...state.favorites, batch] })),
      removeFavorite: (batchId) => set((state) => ({
        favorites: state.favorites.filter((b) => b._id !== batchId)
      })),
      isFavorite: (batchId) => get().favorites.some((b) => b._id === batchId),
    }),
    {
      name: 'favorites-storage',
    }
  )
);
