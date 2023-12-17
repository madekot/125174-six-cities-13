import { OfferFull } from '../../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferAction } from './api-actions';

export type SingleOfferData = {
  offer: OfferFull | null;
  isOfferLoading: boolean;
};

export const initialSingleOfferData: SingleOfferData = {
  offer: null,
  isOfferLoading: false,
};

export const singleOfferSlice = createSlice({
  name: 'singleOffer',
  initialState: initialSingleOfferData,
  reducers: {},
  extraReducers(builder) {
    builder
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
      });
  },
});
