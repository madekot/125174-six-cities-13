export { store } from './store';

export { getSelectedCity, getSelectedSortType } from './slices/app-process/selectors';

export {
  getFavoriteCount,
  getFavorites,
  getIsFavoritesLoading,
  getIsNearbyLoading,
  getIsOfferLoading,
  getIsOffersLoading,
  getNearby,
  getOffers,
  getOffer,
  getIsReviewsLoading,
  getReviews,
  getHasError,
  getReviewsHasError,
  getIsFavoriteStatusSubmitting,
  getIsReviewsStatusSubmitting,
} from './slices/app-data/selectors';

export { useAppSelector, useAppDispatch } from './hooks';

// тут мы делаем реэкспорт из модуля публичного интерфейса, селекторов, экшенов, всем чем другие модулю пользуются
