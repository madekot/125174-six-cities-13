import { OfferPreview, offerPreviewList } from '../mocks/offer.ts';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingType, getOffers } from './action.ts';
import { CityName, SortingType } from '../const.ts';

const DEFAULT_SELECTED_CITY = CityName.Paris;
const DEFAULT_SELECTED_SORTING = SortingType.Popular;

type InitialState = {
  selectedCity: CityName;
  offers: OfferPreview[];
  selectedSortType: SortingType;
}

const initialState: InitialState = {
  selectedCity: DEFAULT_SELECTED_CITY,
  offers: [],
  selectedSortType: DEFAULT_SELECTED_SORTING,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offerPreviewList;
    })
    .addCase(changeSortingType, (state, action) => {
      state.selectedSortType = action.payload;
    });
});

export {reducer};
