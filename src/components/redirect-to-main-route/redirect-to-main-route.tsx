import { Navigate } from 'react-router-dom';
import { AppRoute } from '../app/app-route.ts';
import { AuthorizationStatus } from '../private-route/private-route.tsx';

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
