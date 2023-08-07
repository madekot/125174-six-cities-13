import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './index.ts';
import { AxiosInstance } from 'axios';
import { loadOffers, changeLoadingStatus, requireAuthorization, redirectToRoute } from './action.ts';
import { OfferPreview } from '../types.ts';
import { AppRoute, AuthorizationStatus } from '../const.ts';
import { dropToken, saveToken } from '../services/token.ts';

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

type AsyncThunkConfig = { dispatch: AppDispatch; state: State; extra: AxiosInstance };

export const fetchOffersAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(changeLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, AsyncThunkConfig>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
