import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './index.ts';
import { AxiosInstance } from 'axios';
import { OfferPreview } from '../mocks/offer.ts';
import { loadOffers, setOffersDataLoadingStatus } from './action.ts';

enum APIRoute {
  Offers = '/offers',
}

type AsyncThunkConfig = { dispatch: AppDispatch; state: State; extra: AxiosInstance };

export const fetchQuestionAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);
