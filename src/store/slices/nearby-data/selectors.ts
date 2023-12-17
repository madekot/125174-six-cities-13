import { State } from '../../types';
import { OfferPreview } from '@/types';
import { NameSpace } from '@/const';

export const getNearby = (state: State): OfferPreview[] => state[NameSpace.Data].nearby;
export const getIsNearbyLoading = (state: State): boolean => state[NameSpace.Data].isNearbyLoading;
