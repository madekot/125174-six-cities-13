import cn from 'classnames';
import UserNavigation from '../user-navigation/user-navigation.tsx';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { memo } from 'react';

function Header(): JSX.Element | null {
  const { pathname } = useLocation();

  const isMainPage = pathname === AppRoute.Main;
  const isLoginPage = pathname !== AppRoute.Login;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={cn('header__logo-link', { 'header__logo-link--active': isMainPage })}
              to={AppRoute.Main}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          {isLoginPage && <UserNavigation />}
        </div>
      </div>
    </header>
  );
}

const HeaderMemo = memo(Header);

export default HeaderMemo;
