import {createAction} from '@reduxjs/toolkit';

import { CityName } from '../const.ts';

export const changeCity = createAction('app/changeCity', (city: CityName) => ({
  payload: city
}));

export const getOffers = createAction('app/getOffers');

