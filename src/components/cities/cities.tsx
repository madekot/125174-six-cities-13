import PlaceList from '../place-list/place-list.tsx';
import Map from '../map/map.tsx';
import cn from 'classnames';
import PlacesSorting from '../places-sorting/places-sorting.tsx';
import { OfferPreview } from '../../types.ts';

interface CitiesProps {
  offers: OfferPreview[];
  handleCardMouseEnter: (id: OfferPreview['id']) => void;
  handleCardMouseLeave: () => void;
  selectedOfferId: string;
}

function Cities({
  offers,
  handleCardMouseEnter,
  handleCardMouseLeave,
  selectedOfferId
}: CitiesProps) {
  const noPlacesAvailable = offers.length === 0;
  const firstOfferCity = offers[0]?.city;
  const selectedCityCoordinates = firstOfferCity?.location;

  return (
    <div className="cities">
      <div className={cn('cities__places-container container', {'cities__places-container--empty': noPlacesAvailable})}>
        {noPlacesAvailable
          ?
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">
                We could not find any property available at the moment in {firstOfferCity?.name}
              </p>
            </div>
          </section>
          :
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {firstOfferCity?.name}</b>
            <PlacesSorting/>
            <div className="cities__places-list places__list tabs__content">
              <PlaceList
                cardType="cities"
                offers={offers}
                handleCardMouseEnter={handleCardMouseEnter}
                handleCardMouseLeave={handleCardMouseLeave}
              />
            </div>
          </section>}
        <div className="cities__right-section">
          {Boolean(offers.length) && (
            <section className="cities__map map">
              <Map
                centerCoordinates={selectedCityCoordinates}
                offers={offers}
                selectedOfferId={selectedOfferId}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cities;
