import { Review } from '@/types';
import { Status } from '@/const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReviewsAction } from './api-actions';

export type ReviewsData = {
  reviews: Review[];
  isReviewsLoading: boolean;
  isReviewsStatusSubmitting: boolean;
  reviewsStatus: Status;
};

export const initialReviewsData: ReviewsData = {
  reviews: [],
  isReviewsLoading: false,
  isReviewsStatusSubmitting: false,
  reviewsStatus: Status.Idle,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialReviewsData,
  reducers: {
    setReviewsErrorStatus: (state, action: PayloadAction<Status>) => {
      state.reviewsStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.hasError = false;
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasError = true;
        state.isReviewsLoading = false;
      });
  },
});
