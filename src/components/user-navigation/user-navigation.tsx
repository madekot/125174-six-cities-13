import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions.ts';

function UserNavigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isLoggedIn ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isLoggedIn &&
              <>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">3</span>
              </>}
          </Link>
        </li>
        <li className="header__nav-item">
          {isLoggedIn ?
            <Link
              className="header__nav-link"
              onClick={handleLogoutClick}
              to={AppRoute.Main}
            >
              <span className="header__signout">Sign out</span>
            </Link>
            :
            <Link className="header__nav-link" to={AppRoute.Login}>
              <span className="header__login">Sign in</span>
            </Link>}
        </li>
      </ul>
    </nav>
  );
}

export default UserNavigation;
