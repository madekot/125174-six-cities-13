import { State } from '../../types';
import { OfferPreview } from '@/types';
import { NameSpace } from '@/const';

export const getOffers = (state: State): OfferPreview[] => state[NameSpace.Data].offers;
export const getIsOffersLoading = (state: State): boolean => state[NameSpace.Data].isOffersLoading;
