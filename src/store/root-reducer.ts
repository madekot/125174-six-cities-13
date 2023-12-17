import { NameSpace } from '@/const';
import { combineReducers } from '@reduxjs/toolkit';

import { userProcess } from './slices/user-process/index';
import { multipleOffersData } from './slices/multiple-offers-data/index';
import { singleOfferData } from './slices/single-offer-data/index';
import { nearbyData } from './slices/nearby-data/index';
import { reviewsData } from './slices/reviews-data/index';
import { favoritesData } from './slices/favorites-data/index';
import { appProcess } from './slices/app-process/index';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MultipleOffersData]: multipleOffersData.reducer,
  [NameSpace.SingleOfferData]: singleOfferData.reducer,
  [NameSpace.FavoritesData]: favoritesData.reducer,
  [NameSpace.NearbyData]: nearbyData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
});
