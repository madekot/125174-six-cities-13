import MainPage from '../../pages/main-page/main-page.tsx';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import { AppRoute } from '../../const.ts';
import RedirectToMainRoute from '../redirect-to-main-route/redirect-to-main-route.tsx';
import {
  getHasError,
  getIsOffersLoading,
  getOffers,
} from '../../store/slices/app-data/selectors.ts';
import {
  getAuthCheckedStatus,
  getAuthorizationStatus,
} from '../../store/slices/user-process/selectors.ts';
import { fetchFavoritesAction } from '../../store/api-actions.ts';
import { useEffect } from 'react';
import ErrorScreen from '../error-screen/error-screen.tsx';
import Layout from '../layout/layout.tsx';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector(getOffers);
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);
  const authCheckedStatus = useAppSelector(getAuthCheckedStatus);
  const hasError = useAppSelector(getHasError);

  useEffect(() => {
    if (authCheckedStatus) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, authCheckedStatus]);

  if (isOffersDataLoading) {
    return <LoadingScreen />;
  }

  if (hasError) {
    return <ErrorScreen />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />}>
        <Route index element={<MainPage offers={offers} />} />
        <Route
          path={AppRoute.Login}
          element={
            <RedirectToMainRoute authorizationStatus={userAuthorizationStatus}>
              <LoginPage />
            </RedirectToMainRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={userAuthorizationStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path={AppRoute.PageNotFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
