import { OfferPreview } from '../../mocks/offer.ts';
import PlaceList from '../place-list/place-list.tsx';
import Map from '../map/map.tsx';
import cn from 'classnames';

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
  const selectedCityCoordinates = offers[0]?.city?.location;

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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
              Popular
                <svg className="places__sorting-arrow" width={7} height={4}><use xlinkHref="#icon-arrow-select" /></svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
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
