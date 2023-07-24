import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../private-route/private-route.tsx';
import { AppRoute } from '../app/app.tsx';

type RedirectToMainRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function RedirectToMainRoute({ children, authorizationStatus }: RedirectToMainRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main}/>
      : children
  );
}

export default RedirectToMainRoute;
