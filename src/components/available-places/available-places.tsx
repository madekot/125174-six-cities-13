import PlacesSorting from '../places-sorting/places-sorting.tsx';
import PlaceList from '../place-list/place-list.tsx';
import { OfferPreview } from '../../types.ts';
import { memo } from 'react';
import { getPluralSuffix } from '../../utils.ts';

type AvailablePlacesProps = {
  cityName: string;
  offers: OfferPreview[];
  handleCardMouseEnter?: (id: OfferPreview['id']) => void;
  handleCardMouseLeave?: () => void;
}

function AvailablePlaces({ cityName, offers, handleCardMouseEnter, handleCardMouseLeave }: AvailablePlacesProps) {
  const quantityOffers = offers.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{quantityOffers} {`place${getPluralSuffix(quantityOffers)}`} to stay in {cityName}</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        <PlaceList
          cardType="cities"
          offers={offers}
          handleCardMouseEnter={handleCardMouseEnter}
          handleCardMouseLeave={handleCardMouseLeave}
        />
      </div>
    </section>
  );
}

const AvailablePlacesMemo = memo(AvailablePlaces);

export default AvailablePlacesMemo;
