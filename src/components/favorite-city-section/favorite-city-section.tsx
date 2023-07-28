import { OfferPreview } from '../../mocks/offer.ts';
import CommonPlaceCard from '../common-place-card/common-place-card.tsx';

type FavoriteCitySectionProps = {
  cityName: string;
  cards: OfferPreview[];
}

function FavoriteCitySection({ cityName, cards }: FavoriteCitySectionProps): JSX.Element {
  const favoritePlaceCards = cards.map((card) => (
    <CommonPlaceCard key={card.id} cardType={'favorites'} {...card} />
  ));

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
        {favoritePlaceCards}
      </div>
    </li>
  );
}

export default FavoriteCitySection;
