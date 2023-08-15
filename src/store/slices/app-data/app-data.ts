import { FavoriteItem, OfferFull, OfferPreview, Review } from '../../../types.ts';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const.ts';
import {
  fetchFavoritesAction,
  fetchNearbyAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchReviewsAction
} from '../../api-actions.ts';

type AppData = {
  offer: OfferFull | null;
  offers: OfferPreview[];
  nearby: OfferPreview[];
  reviews: Review[];
  favorites: FavoriteItem[];
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  isNearbyLoading: boolean;
  isReviewsLoading: boolean;
  isFavoritesLoading: boolean;
  hasError: boolean;
}

const initialState: AppData = {
  offer: null,
  offers: [],
  nearby: [],
  reviews: [],
  favorites: [],
  isOffersLoading: false,
  isOfferLoading: false,
  isNearbyLoading: false,
  isReviewsLoading: false,
  isFavoritesLoading: false,
  hasError: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.hasError = false;
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.hasError = true;
        state.isOffersLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferLoading = false;
        // store.dispatch(redirectToRoute(AppRoute.PageNotFound))
      })
      .addCase(fetchNearbyAction.pending, (state) => {
        state.isNearbyLoading = true;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.isNearbyLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      });
  }
});
