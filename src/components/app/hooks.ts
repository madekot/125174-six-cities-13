import { useAppDispatch, useAppSelector } from '@/store';
import { fetchFavoritesAction } from '@/store/slices/favorites-data/api-actions';
import { useEffect } from 'react';
import { getAuthCheckedStatus } from '@/store/slices/user-process/selectors';

const useFetchFavorites = () => {
  const dispatch = useAppDispatch();
  const authCheckedStatus = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    if (authCheckedStatus) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, authCheckedStatus]);
};

export { useFetchFavorites };
