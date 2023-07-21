import { FavoriteItem } from '../../mocks/favorite.ts';
import { OfferPreview } from '../../mocks/offer.ts';
import PlaceCardFavorite from '../../components/place-card-favorite/place-card-favorite.tsx';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/app/app-route.ts';

type FavoritesProps = {
  favoriteList: FavoriteItem[];
}

function Favorites({ favoriteList }: FavoritesProps): JSX.Element {
  const convertedFavorites: Record<string, OfferPreview[]> = {};

  favoriteList.forEach((item: OfferPreview) => {
    if (!(item.city.name in convertedFavorites)) {
      convertedFavorites[item.city.name] = [];
    }
    convertedFavorites[item.city.name].push(item);
  });

  const favoritesList = Object.entries(convertedFavorites).map((item: [string, OfferPreview[]]) => {
    const [cityName, cards] = item;

    const placesList = (
      <ul className="favorites__list">
        {cards.map((card) => (
          <PlaceCardFavorite
            key={card.id} {...card}
          />
        ))}
      </ul>
    );

    return (
      <li
        key={cityName}
        className="favorites__locations-items"
      >
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a
              className="locations__item-link"
              href="#"
            >
              <span>{cityName}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {placesList}
        </div>
      </li>
    );
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link"
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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {favoritesList}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a
          className="footer__logo-link"
          href="main.html"
        >
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>

  );
}

export default Favorites;
