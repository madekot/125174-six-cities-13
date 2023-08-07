import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortingType,
  loadOffers,
  changeLoadingStatus,
  requireAuthorization,
} from './action.ts';
import { AuthorizationStatus, CityName, SortingType } from '../const.ts';
import { OfferPreview } from '../types.ts';

const DEFAULT_SELECTED_CITY = CityName.Paris;
const DEFAULT_SELECTED_SORTING = SortingType.Popular;

type InitialState = {
  selectedCity: CityName;
  offers: OfferPreview[];
  selectedSortType: SortingType;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  selectedCity: DEFAULT_SELECTED_CITY,
  offers: [],
  selectedSortType: DEFAULT_SELECTED_SORTING,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.selectedSortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
