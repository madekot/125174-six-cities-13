import { OfferPreview } from '../../mocks/offer.ts';
import { useState } from 'react';
import LocationsTabs from '../../components/locations-tabs/locations-tabs.tsx';
import Cities from '../../components/cities/cities.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import cn from 'classnames';

type MainPageProps = {
  offers: OfferPreview[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<OfferPreview['id']>('');
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const offersByCity = offers.filter((offer) => offer.city.name === selectedCity);

  const handleCardMouseEnter = (id: OfferPreview['id']) => setSelectedOfferId(id);
  const handleCardMouseLeave = () => setSelectedOfferId('');

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a
                    className="header__nav-link"
                    href="#"
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={cn('page__main page__main--index', {'page__main--index-empty': offersByCity.length === 0})}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs/>
        <Cities
          offers={offersByCity}
          selectedOfferId={selectedOfferId}
          handleCardMouseLeave={handleCardMouseLeave}
          handleCardMouseEnter={handleCardMouseEnter}
        />
      </main>
    </div>
  );
}

export default MainPage;
