import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './index.ts';
import { AxiosInstance } from 'axios';
import { AuthData, FavoriteItem, OfferFull, OfferPreview, Review, ReviewData, UserData } from '../types.ts';
import { APIRoute } from '../const.ts';

type AsyncThunkConfig = { dispatch: AppDispatch; state: State; extra: AxiosInstance };

export const fetchOffersAction = createAsyncThunk<OfferPreview[], undefined, AsyncThunkConfig>(
  'data/fetchOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<OfferFull, string, AsyncThunkConfig>(
  'data/fetchOffer',
  async (id, { extra: api}) => {
    const {data} = await api.get<OfferFull>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, AsyncThunkConfig>(
  'data/fetchReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Review}/${id}`);
    return data;
  }
);

export const fetchNearbyAction = createAsyncThunk<OfferPreview[], string, AsyncThunkConfig>(
  'data/fetchNearby',
  async (id, { extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<FavoriteItem[], undefined, AsyncThunkConfig>(
  'data/fetchFavorites',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<FavoriteItem[]>(APIRoute.Favorite);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<ReviewData[], ReviewData, AsyncThunkConfig>(
  'data/postReview',
  async ({comment, rating, offerId}, { extra: api}) => {
    const { data } = await api.post<ReviewData[]>(`${APIRoute.Review}/${offerId}`, {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, AsyncThunkConfig>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, AsyncThunkConfig>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
  },
);
