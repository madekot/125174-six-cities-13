import PlaceList from '../place-list/place-list.tsx';
import { OfferPreview } from '../../types.ts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

type FavoriteCitySectionProps = {
  cityName: string;
  cards: OfferPreview[];
}

function FavoriteCitySection({ cityName, cards }: FavoriteCitySectionProps): JSX.Element {
  return (
    <li key={cityName} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceList offers={cards} cardType={'favorites'}/>
      </div>
    </li>
  );
}

export default FavoriteCitySection;
