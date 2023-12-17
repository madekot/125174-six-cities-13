import { FavoriteItem } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoritesAction } from './api-actions';

export type FavoritesData = {
  favorites: FavoriteItem[];
  isFavoritesLoading: boolean;
  isFavoriteStatusSubmitting: boolean;
};

export const initialFavoritesData: FavoritesData = {
  favorites: [],
  isFavoritesLoading: false,
  isFavoriteStatusSubmitting: false,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavoritesData,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.hasError = false;
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.hasError = true;
        state.isFavoritesLoading = false;
      });
  },
});
