import { FavoriteItem, OfferFull, OfferPreview, Review } from '../../../types.ts';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const.ts';

function updateFavoritesList(state: AppData, offer: OfferPreview) {
  if (offer.isFavorite) {
    state.favorites.push(offer);
  } else {
    state.favorites = state.favorites.filter((el) => el.id !== offer.id);
  }
}

function updateOfferStatus(offer: OfferFull | null, id: string) {
  if (offer && offer.id === id) {
    offer.isFavorite = !offer.isFavorite;
  }
}

function updateNearbyStatus(nearbyOffers: OfferPreview[], id: string) {
  const offerNearbyIndex = nearbyOffers.findIndex((el) => el.id === id);
  if (offerNearbyIndex !== -1) {
    nearbyOffers[offerNearbyIndex].isFavorite = !nearbyOffers[offerNearbyIndex].isFavorite;
  }
}

import {
  changeFavoriteStatusAction,
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
  isFavoriteStatusSubmitting: boolean;
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
  isFavoriteStatusSubmitting: false,
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
        state.hasError = false;
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.hasError = true;
        state.isOfferLoading = false;
      })
      .addCase(fetchNearbyAction.pending, (state) => {
        state.isNearbyLoading = true;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.isNearbyLoading = false;
      })
      .addCase(fetchNearbyAction.rejected, (state) => {
        state.isNearbyLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsLoading = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoritesLoading = false;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.isFavoriteStatusSubmitting = true;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.isFavoriteStatusSubmitting = false;

        const { id } = action.payload;
        const offerIndex = state.offers.findIndex((el) => el.id === id);

        if (offerIndex !== -1) {
          const offer = state.offers[offerIndex];
          offer.isFavorite = !offer.isFavorite;
          updateFavoritesList(state, offer);
        }

        updateOfferStatus(state.offer, id);
        updateNearbyStatus(state.nearby, id);
      })
      .addCase(changeFavoriteStatusAction.rejected, (state) => {
        state.isFavoriteStatusSubmitting = false;
      });
  }
});
