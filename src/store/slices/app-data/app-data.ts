import { OfferPreview } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Status } from '@/const';
import { initialSingleOfferData, SingleOfferData } from '../single-offer-data/single-offer-data';
import {
  initialMultipleOffersData,
  MultipleOffersData,
} from '../multiple-offers-data/multiple-offers-data';
import { initialNearbyData, NearbyData } from '../nearby-data/nearby-data';
import { initialReviewsData, ReviewsData } from '../reviews-data/reviews-data';
import { FavoritesData, initialFavoritesData } from '../favorites-data/favorites-data';
import { fetchNearbyAction } from '../nearby-data/api-actions';
import { fetchReviewsAction, postReviewAction } from '../reviews-data/api-actions';
import { changeFavoriteStatusAction, fetchFavoritesAction } from '../favorites-data/api-actions';
import { fetchOffersAction } from '../multiple-offers-data/api-actions';
import { fetchOfferAction } from '../single-offer-data/api-actions';

export const updateOfferList = (offers: OfferPreview[], updatedOffer: OfferPreview) => {
  const offerIndex = offers.findIndex((el) => el.id === updatedOffer.id);
  if (offerIndex !== -1) {
    offers[offerIndex] = updatedOffer;
  }
};

export const updateFavoritesList = (
  favorites: OfferPreview[],
  updatedOffer: OfferPreview,
  isFavorite: boolean,
) => {
  const favoriteOfferIndex = favorites.findIndex((el) => el.id === updatedOffer.id);

  if (isFavorite && favoriteOfferIndex === -1) {
    favorites.push(updatedOffer);
  } else if (!isFavorite && favoriteOfferIndex !== -1) {
    favorites.splice(favoriteOfferIndex, 1);
  }
};

export const updateOfferNearbyList = (nearby: OfferPreview[], updatedOffer: OfferPreview) => {
  const offerNearbyIndex = nearby.findIndex((el) => el.id === updatedOffer.id);
  if (offerNearbyIndex !== -1) {
    nearby[offerNearbyIndex].isFavorite = !nearby[offerNearbyIndex].isFavorite;
  }
};

export const updateOfferIsFavorite = (state: AppData, id: string) => {
  if (state.offer && state.offer.id === id) {
    state.offer.isFavorite = !state.offer.isFavorite;
  }
};

export type AppData = SingleOfferData &
  MultipleOffersData &
  NearbyData &
  ReviewsData &
  FavoritesData & { hasError: boolean };

const initialState: AppData = {
  ...initialSingleOfferData,
  ...initialMultipleOffersData,
  ...initialNearbyData,
  ...initialReviewsData,
  ...initialFavoritesData,
  hasError: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setReviewsErrorStatus: (state, action: PayloadAction<Status>) => {
      state.reviewsStatus = action.payload;
    },
  },
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
      .addCase(postReviewAction.pending, (state) => {
        state.reviewsStatus = Status.Loading;
        state.isReviewsStatusSubmitting = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviewsStatus = Status.Success;
        state.isReviewsStatusSubmitting = false;
        state.reviews.push(action.payload);
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.reviewsStatus = Status.Error;
        state.isReviewsStatusSubmitting = false;
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
      .addCase(changeFavoriteStatusAction.fulfilled, (state, { payload: payloadOffer }) => {
        state.isFavoriteStatusSubmitting = false;

        const { id, isFavorite } = payloadOffer;

        updateOfferList(state.offers, payloadOffer);
        updateFavoritesList(state.favorites, payloadOffer, isFavorite);
        updateOfferNearbyList(state.nearby, payloadOffer);
        updateOfferIsFavorite(state, id);
      })
      .addCase(changeFavoriteStatusAction.rejected, (state) => {
        state.isFavoriteStatusSubmitting = false;
      });
  },
});

export const { setReviewsErrorStatus } = appData.actions;
