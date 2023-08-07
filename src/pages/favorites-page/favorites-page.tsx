import { FavoriteItem } from '../../mocks/favorite.ts';
import FavoriteList from '../../components/favorite-list/favorite-list.tsx';
import Header from '../../components/header/header.tsx';

type FavoritesProps = {
  favoriteList: FavoriteItem[];
}

function FavoritesPage({ favoriteList }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList favoriteList={favoriteList}/>
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

export default FavoritesPage;
