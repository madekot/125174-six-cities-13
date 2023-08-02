import { OfferPreview, offerPreviewList } from '../mocks/offer.ts';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers } from './action.ts';
import { CityName } from '../const.ts';

const DEFAULT_SELECTED_CITY = CityName.Paris;

type InitialState = {
  selectedCity: CityName;
  offers: OfferPreview[];
}

const initialState: InitialState = {
  selectedCity: DEFAULT_SELECTED_CITY,
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offerPreviewList;
    });
});

export {reducer};
