import { State } from '@/store/types';
import { NameSpace } from '@/const';
import { OfferPreview } from '@/types';

export const getFavorites = (state: State): OfferPreview[] => state[NameSpace.Data].favorites;
export const getFavoriteCount = (state: State): number => state[NameSpace.Data].favorites.length;
export const getIsFavoritesLoading = (state: State): boolean =>
  state[NameSpace.Data].isFavoritesLoading;
export const getIsFavoriteStatusSubmitting = (state: State): boolean =>
  state[NameSpace.Data].isFavoriteStatusSubmitting;
