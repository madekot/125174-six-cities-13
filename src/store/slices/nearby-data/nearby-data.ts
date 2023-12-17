import { OfferPreview } from '../../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNearbyAction } from './api-actions';

export type NearbyData = {
  nearby: OfferPreview[];
  isNearbyLoading: boolean;
};

export const initialNearbyData: NearbyData = {
  nearby: [],
  isNearbyLoading: false,
};

export const nearbySlice = createSlice({
  name: 'nearby',
  initialState: initialNearbyData,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyAction.pending, (state) => {
        state.hasError = false;
        state.isNearbyLoading = true;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.isNearbyLoading = false;
      })
      .addCase(fetchNearbyAction.rejected, (state) => {
        state.hasError = true;
        state.isNearbyLoading = false;
      });
  },
});
