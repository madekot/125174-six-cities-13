import cn from 'classnames';
import { useAppSelector } from '../../store/hooks.ts';
import LoadingPage from '../loading-page/loading-page.tsx';
import EmptyFavorites from '../../components/empty-favorites/empty-favorites.tsx';
import NonEmptyFavorites from '../../components/non-empty-favorites/non-empty-favorites.tsx';
import { getFavorites, getIsFavoritesLoading } from '../../store/slices/app-data/selectors.ts';

function FavoritesPage(): JSX.Element {
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const favorites = useAppSelector(getFavorites);
  const isEmptyFavorites = favorites.length === 0;

  if (isFavoritesLoading) {
    return <LoadingPage />;
  }

  return (
    <main
      className={cn('page__main page__main--favorites', {
        'page__main--favorites-empty': isEmptyFavorites,
      })}
    >
      <div className="page__favorites-container container">
        {isEmptyFavorites ? <EmptyFavorites /> : <NonEmptyFavorites favorites={favorites} />}
      </div>
    </main>
  );
}

export default FavoritesPage;
