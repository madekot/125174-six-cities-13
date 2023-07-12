import Main from '../../pages/main/main.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PageNotFound from '../../pages/page-not-found/page-not-found.tsx';
import PrivateRoute, { AuthorizationStatus } from '../private-route/private-route.tsx';

export enum AppRoute {
  MAIN = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id',
  PAGE_NOT_FOUND = '*'
}

type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path={AppRoute.MAIN}
          element={<Main offersCount={offersCount} />}
        />
        <Route
          path={AppRoute.LOGIN}
          element={<Login />}
        />
        <Route
          path={AppRoute.FAVORITES}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NO_AUTH}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.OFFER}
          element={<Offer />}
        />
        <Route
          path={AppRoute.PAGE_NOT_FOUND}
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
