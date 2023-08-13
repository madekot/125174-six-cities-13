import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortingType,
  setOffers,
  isOffersLoading,
  setAuthorization,
  isOfferLoading,
  setOffer,
  isReviewsLoading,
  setReviews,
  setUserInfo,
  isNearbyLoading,
  setNearby,
  isFavoritesLoading, setFavorites, isSubmittingLogin,
} from './action.ts';
import { AuthorizationStatus, CityName, SortingType } from '../const.ts';
import { FavoriteItem, OfferFull, OfferPreview, Review, UserData } from '../types.ts';

const DEFAULT_SELECTED_CITY = CityName.Paris;
const DEFAULT_SELECTED_SORTING = SortingType.Popular;

type InitialState = {
  selectedCity: CityName;
  offers: OfferPreview[];
  selectedSortType: SortingType;
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  offer: OfferFull | null;
  isReviewsLoading: boolean;
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | null;
  isNearbyLoading: boolean;
  nearby: OfferPreview[];
  isFavoritesLoading: boolean;
  favorites: FavoriteItem[];
  isSubmittingLogin: boolean;
}

const initialState: InitialState = {
  selectedCity: DEFAULT_SELECTED_CITY,
  offers: [],
  selectedSortType: DEFAULT_SELECTED_SORTING,
  isOffersLoading: false,
  isOfferLoading: false,
  offer: null,
  isReviewsLoading: false,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  isNearbyLoading: false,
  nearby: [],
  isFavoritesLoading: false,
  favorites: [],
  isSubmittingLogin: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.selectedSortType = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(isOffersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(isOfferLoading, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(isReviewsLoading, (state, action) => {
      state.isReviewsLoading = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(isNearbyLoading, (state, action) => {
      state.isNearbyLoading = action.payload;
    })
    .addCase(setNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(isFavoritesLoading, (state, action) => {
      state.isFavoritesLoading = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(isSubmittingLogin, (state, action) => {
      state.isSubmittingLogin = action.payload;
    })
    .addCase(setAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
