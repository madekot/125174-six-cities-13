import MainPage from '../../pages/main-page/main-page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute, { AuthorizationStatus } from '../private-route/private-route.tsx';
import RedirectToMainRoute from '../redirect-to-main-route/redirect-to-main-route.tsx';
import { offerPageList } from '../../mocks/offer.ts';
import { Review } from '../../mocks/reviews.ts';
import { useAppSelector } from '../../store/hooks.ts';
import LoadingPage from '../../pages/loading-page/loading-page.tsx';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  PageNotFound = '*'
}

type AppProps = {
  reviews: Review[];
}

function App({ reviews }: AppProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path={AppRoute.Main}
          element={<MainPage offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={
            <RedirectToMainRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <LoginPage/>
            </RedirectToMainRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage favoriteList={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage offersFull={offerPageList} offersPreview={offers} reviews={reviews}/>}
        />
        <Route
          path={AppRoute.PageNotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
