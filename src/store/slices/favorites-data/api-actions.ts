import { createAsyncThunk } from '@reduxjs/toolkit';
import { FavoriteData, FavoriteItem, OfferPreview } from '@/types';
import { AsyncThunkConfig } from '../../types';
import { APIRoute, NameSpace } from '@/const';

export const fetchFavoritesAction = createAsyncThunk<FavoriteItem[], undefined, AsyncThunkConfig>(
  `${NameSpace.Data}/fetchFavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FavoriteItem[]>(APIRoute.Favorite);
    return data;
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<
  OfferPreview,
  FavoriteData,
  AsyncThunkConfig
>(`${NameSpace.Data}/changeFavoriteStatus`, async ({ status, offerId }, { extra: api }) => {
  const { data } = await api.post<OfferPreview>(`${APIRoute.Favorite}/${offerId}/${status}`);
  return data;
});
