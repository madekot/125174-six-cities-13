import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { AppRoute } from '../../const.ts';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions.ts';
import { getFavorites } from '../../store/slices/app-data/selectors.ts';
import { getAuthCheckedStatus, getUserInfo } from '../../store/slices/user-process/selectors.ts';

function UserNavigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const userInfo = useAppSelector(getUserInfo);
  const favoriteCount = useAppSelector(getFavorites).length;
  const isLoggedIn = useAppSelector(getAuthCheckedStatus);

  const userAvatar = userInfo?.avatarUrl ? { backgroundImage: `url(${userInfo?.avatarUrl})`} : {};

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isLoggedIn ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper" style={{...userAvatar, borderRadius: '50%'}}></div>
            {isLoggedIn &&
              <>
                <span className="header__user-name user__name">{userInfo?.email}</span>
                <span className="header__favorite-count">{favoriteCount}</span>
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
