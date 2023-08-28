import Map from '../map/map.tsx';
import cn from 'classnames';
import { OfferPreview } from '../../types.ts';
import { useCallback, useState } from 'react';
import NoPlacesAvailable from '../no-places-available/no-places-available.tsx';
import AvailablePlaces from '../available-places/available-places.tsx';

interface CitiesProps {
  offers: OfferPreview[];
}

function Cities({ offers }: CitiesProps) {
  const [selectedOfferId, setSelectedOfferId] = useState<OfferPreview['id']>('');

  const noPlacesAvailable = offers.length === 0;
  const firstOfferCity = offers[0]?.city;
  const selectedCityCoordinates = firstOfferCity?.location;

  const handleCardMouseEnter = useCallback((id: OfferPreview['id']) => setSelectedOfferId(id), []);
  const handleCardMouseLeave = useCallback(() => setSelectedOfferId(''), []);

  return (
    <div className="cities">
      <div className={cn('cities__places-container container', {'cities__places-container--empty': noPlacesAvailable})}>
        {noPlacesAvailable ? (
          <NoPlacesAvailable />
        ) : (
          <AvailablePlaces
            cityName={firstOfferCity?.name}
            offers={offers}
            handleCardMouseEnter={handleCardMouseEnter}
            handleCardMouseLeave={handleCardMouseLeave}
          />
        )}
        <div className="cities__right-section">
          {!noPlacesAvailable && (
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
