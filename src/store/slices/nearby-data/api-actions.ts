import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferPreview } from '../../../types';
import { AsyncThunkConfig } from '../../types';
import { APIRoute, NameSpace } from '../../../const';

export const fetchNearbyAction = createAsyncThunk<OfferPreview[], string, AsyncThunkConfig>(
  `${NameSpace.Data}/fetchNearby`,
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    return data;
  },
);
