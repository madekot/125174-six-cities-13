export { store } from './store';

export { getSelectedCity, getSelectedSortType } from './slices/app-process/selectors';

export { getHasError } from './slices/app-data/selectors';

export { useAppSelector, useAppDispatch } from './hooks';
export { getIsOffersLoading } from '@/store/slices/multiple-offers-data/selectors';
export { getOffers } from '@/store/slices/multiple-offers-data/selectors';
export { getIsOfferLoading } from '@/store/slices/single-offer-data/selectors';
export { getOffer } from '@/store/slices/single-offer-data/selectors';
export { getIsReviewsLoading } from '@/store/slices/reviews-data/selectors';
export { getReviews } from '@/store/slices/reviews-data/selectors';
export { getIsNearbyLoading } from '@/store/slices/nearby-data/selectors';
export { getNearby } from '@/store/slices/nearby-data/selectors';
export { getIsFavoritesLoading } from '@/store/slices/favorites-data/selectors';
export { getFavoriteCount } from '@/store/slices/favorites-data/selectors';
export { getFavorites } from '@/store/slices/favorites-data/selectors';
export { getIsFavoriteStatusSubmitting } from '@/store/slices/favorites-data/selectors';
export { getIsReviewsStatusSubmitting } from '@/store/slices/reviews-data/selectors';
export { getReviewsHasError } from '@/store/slices/reviews-data/selectors';

// тут мы делаем реэкспорт из модуля публичного интерфейса, селекторов, экшенов, всем чем другие модулю пользуются
