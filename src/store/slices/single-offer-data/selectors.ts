import { State } from '../../types';
import { OfferFull } from '@/types';
import { NameSpace } from '@/const';

export const getOffer = (state: State): OfferFull | null => state[NameSpace.Data].offer;
export const getIsOfferLoading = (state: State): boolean => state[NameSpace.Data].isOfferLoading;
