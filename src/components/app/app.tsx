import Main from '../../pages/main/main.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PageNotFound from '../../pages/page-not-found/page-not-found.tsx';
import PrivateRoute, { AuthorizationStatus } from '../private-route/private-route.tsx';
import { AppRoute } from './app-route.ts';
import RedirectToMainRoute from '../redirect-to-main-route/redirect-to-main-route.tsx';
import { offerPageList, OfferPreview } from '../../mocks/offer.ts';

type AppProps = {
  offers: OfferPreview[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path={AppRoute.Main}
          element={<Main offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={
            <RedirectToMainRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Login/>
            </RedirectToMainRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites favoriteList={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer offers={offerPageList} />}
        />
        <Route
          path={AppRoute.PageNotFound}
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
