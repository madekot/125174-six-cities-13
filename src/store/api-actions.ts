import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './index.ts';
import { AxiosInstance } from 'axios';
import {
  isFavoritesLoading, isSubmittingLogin,
  isNearbyLoading,
  isOfferLoading,
  isOffersLoading,
  isReviewsLoading,
  redirectToRoute,
  setAuthorization,
  setFavorites,
  setNearby,
  setOffer,
  setOffers,
  setReviews,
  setUserInfo
} from './action.ts';
import { AuthData, FavoriteItem, OfferFull, OfferPreview, Review, ReviewData, UserData } from '../types.ts';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const.ts';
import { dropToken, saveToken } from '../services/token.ts';

type AsyncThunkConfig = { dispatch: AppDispatch; state: State; extra: AxiosInstance };

export const fetchOffersAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(isOffersLoading(true));
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(setOffers(data));
    dispatch(isOffersLoading(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, AsyncThunkConfig>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(isOfferLoading(true));
      const {data} = await api.get<OfferFull>(`${APIRoute.Offers}/${id}`);
      dispatch(setOffer(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.PageNotFound));
    } finally {
      dispatch(isOfferLoading(false));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, AsyncThunkConfig>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(isReviewsLoading(true));
      const { data } = await api.get<Review[]>(`${APIRoute.Review}/${id}`);
      dispatch(setReviews(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.PageNotFound));
    } finally {
      dispatch(isReviewsLoading(false));
    }
  }
);

export const fetchNearbyAction = createAsyncThunk<void, string, AsyncThunkConfig>(
  'data/fetchNearby',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(isNearbyLoading(true));
      const {data} = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
      dispatch(setNearby(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.PageNotFound));
    } finally {
      dispatch(isNearbyLoading(false));
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(isFavoritesLoading(true));
    const {data} = await api.get<FavoriteItem[]>(APIRoute.Favorite);
    dispatch(setFavorites(data));
    dispatch(isFavoritesLoading(false));
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewData, AsyncThunkConfig>(
  'data/postReview',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    await api.post<ReviewData>(`${APIRoute.Review}/${offerId}`, {comment, rating});
    dispatch(fetchReviewsAction(offerId));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInfo(data));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, AsyncThunkConfig>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      dispatch(isSubmittingLogin(true));
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInfo(data));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    } finally {
      dispatch(isSubmittingLogin(false));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
  },
);
