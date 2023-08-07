import {createAction} from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus, CityName, SortingType } from '../const.ts';

import { OfferPreview } from '../types.ts';

export const REDIRECT_TO_ROUTE_TYPE = 'app/redirectToRoute';

export const changeCity = createAction('app/changeCity', (city: CityName) => ({
  payload: city
}));

export const changeSortingType = createAction('offers/changeSortingType', (sortingType: SortingType) => ({
  payload: sortingType
}));

export const loadOffers = createAction<OfferPreview[]>('data/loadOffers');

export const changeLoadingStatus = createAction<boolean>('data/changeLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE_TYPE);
