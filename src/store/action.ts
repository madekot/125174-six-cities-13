import {createAction} from '@reduxjs/toolkit';

import { CityName, SortingType } from '../const.ts';
import { OfferPreview } from '../mocks/offer.ts';

export const changeCity = createAction('app/changeCity', (city: CityName) => ({
  payload: city
}));

export const getOffers = createAction('offers/getOffers');

export const changeSortingType = createAction('offers/changeSortingType', (sortingType: SortingType) => ({
  payload: sortingType
}));

export const loadOffers = createAction<OfferPreview[]>('data/loadOffers');

export const changeLoadingStatus = createAction<boolean>('data/changeLoadingStatus');
