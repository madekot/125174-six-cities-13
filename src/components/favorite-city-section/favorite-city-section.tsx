import PlaceList from '../place-list/place-list.tsx';
import { OfferPreview } from '../../types.ts';

type FavoriteCitySectionProps = {
  cityName: string;
  cards: OfferPreview[];
}

function FavoriteCitySection({ cityName, cards }: FavoriteCitySectionProps): JSX.Element {
  return (
    <li key={cityName} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceList offers={cards} cardType={'favorites'}/>
      </div>
    </li>
  );
}

export default FavoriteCitySection;
