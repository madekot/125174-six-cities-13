import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review, ReviewData } from '../../../types';
import { AsyncThunkConfig } from '../../types';
import { APIRoute, NameSpace } from '../../../const';

export const fetchReviewsAction = createAsyncThunk<Review[], string, AsyncThunkConfig>(
  `${NameSpace.Data}/fetchReviews`,
  async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Review}/${id}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<Review, ReviewData, AsyncThunkConfig>(
  `${NameSpace.Data}/postReview`,
  async ({ comment, rating, offerId }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Review}/${offerId}`, { comment, rating });
    return data;
  },
);
