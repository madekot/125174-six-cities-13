import { FavoriteItem } from '../../mocks/favorite.ts';
import { OfferPreview } from '../../mocks/offer.ts';
import FavoriteCitySection from '../favorite-city-section/favorite-city-section.tsx';
import { groupFavoritesByCity } from '../../utils.ts';

type FavoriteListProps = {
  favoriteList: FavoriteItem[];
};

function FavoriteList({ favoriteList }: FavoriteListProps): JSX.Element {
  const favoritesByCity = groupFavoritesByCity(favoriteList);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesByCity).map(([cityName, cards]: [string, OfferPreview[]]) => (
        <FavoriteCitySection key={cityName} cityName={cityName} cards={cards} />
      ))}
    </ul>
  );
}

export default FavoriteList;
