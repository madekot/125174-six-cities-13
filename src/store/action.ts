import {createAction} from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus, CityName, SortingType } from '../const.ts';

import { OfferFull, OfferPreview, Review, UserData } from '../types.ts';

export const REDIRECT_TO_ROUTE_TYPE = 'app/redirectToRoute';

export const changeCity = createAction('app/changeCity', (city: CityName) => ({
  payload: city
}));

export const changeSortingType = createAction('offers/changeSortingType', (sortingType: SortingType) => ({
  payload: sortingType
}));

export const setOffers = createAction<OfferPreview[]>('data/setOffers');

export const isOffersLoading = createAction<boolean>('data/isOffersLoading');

export const setAuthorization = createAction<AuthorizationStatus>('user/setAuthorization');

export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE_TYPE);

export const isOfferLoading = createAction<boolean>('data/isOfferLoading');

export const setOffer = createAction<OfferFull>('data/setOffer');

export const isReviewsLoading = createAction<boolean>('data/isReviewsLoading');

export const setReviews = createAction<Review[]>('data/setReviews');

export const setUserInfo = createAction<UserData | null>('user/setUserInfo');

export const isNearbyLoading = createAction<boolean>('user/isNearbyLoading');

export const setNearby = createAction<OfferPreview[]>('user/setNearby');
