import { OfferPreview } from '../../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction } from './api-actions';

export const initialMultipleOffersData: MultipleOffersData = {
  offers: [],
  isOffersLoading: false,
};

export type MultipleOffersData = {
  offers: OfferPreview[];
  isOffersLoading: boolean;
};

export const multipleOffersSlice = createSlice({
  name: 'multipleOffers',
  initialState: initialMultipleOffersData,
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
      });
  },
});
