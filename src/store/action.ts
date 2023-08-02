import {createAction} from '@reduxjs/toolkit';

import { CityName, SortingType } from '../const.ts';

export const changeCity = createAction('app/changeCity', (city: CityName) => ({
  payload: city
}));

export const getOffers = createAction('offers/getOffers');

export const changeSortingType = createAction('offers/changeSortingType', (sortingType: SortingType) => ({
  payload: sortingType
}));
