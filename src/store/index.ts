export { store } from './store';

export { useAppSelector, useAppDispatch } from './hooks';

export {
  fetchOfferAction,
  updateSingleOffer,
  getOffer,
  getIsOfferLoading,
} from './slices/single-offer-data/index';

export {
  fetchReviewsAction,
  postReviewAction,
  setReviewsErrorStatus,
  getReviewsHasError,
  getHasError,
  getReviews,
  getIsReviewsLoading,
  getIsReviewsStatusSubmitting,
} from './slices/reviews-data/index';

export {
  fetchNearbyAction,
  updateMultipleNearby,
  getNearby,
  getIsNearbyLoading,
} from './slices/nearby-data/index';

export {
  changeFavoriteStatusAction,
  fetchFavoritesAction,
  updateMultipleFavorites,
  getFavorites,
  getIsFavoriteStatusSubmitting,
  getFavoriteCount,
  getIsFavoritesLoading,
} from './slices/favorites-data/index';

export {
  changeSortingType,
  changeCity,
  getSelectedSortType,
  getSelectedCity,
} from './slices/app-process/index';

export {
  fetchOffersAction,
  updateMultipleOffers,
  getOffers,
  getIsOffersLoading,
} from './slices/multiple-offers-data/index';

export {
  checkAuthAction,
  loginAction,
  logoutAction,
  getIsSubmittingLogin,
  getAuthCheckedStatus,
  getUserInfo,
  getAuthorizationStatus,
} from './slices/user-process/index';
