import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferPreview } from '../../../types';
import { AsyncThunkConfig } from '../../types';
import { APIRoute, NameSpace } from '../../../const';

export const fetchOffersAction = createAsyncThunk<OfferPreview[], undefined, AsyncThunkConfig>(
  `${NameSpace.Data}/fetchOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
    return data;
  },
);
