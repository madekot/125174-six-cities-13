import { Navigate } from 'react-router-dom';
import { AppRoute } from '../app/app.tsx';

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN'
}

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({ children, authorizationStatus }: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? children
      : <Navigate to={AppRoute.LOGIN}/>
  );
}

export default PrivateRoute;
