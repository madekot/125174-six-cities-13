import { State } from '../../types';
import { NameSpace, Status } from '@/const';
import { Review } from '@/types';

export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getIsReviewsLoading = (state: State): boolean =>
  state[NameSpace.Data].isReviewsLoading;
export const getIsReviewsStatusSubmitting = (state: State): boolean =>
  state[NameSpace.Data].isReviewsStatusSubmitting;
export const getReviewsHasError = (state: State): Status => state[NameSpace.Data].reviewsStatus;
