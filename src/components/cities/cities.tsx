import { Location, OfferPreview } from '../../mocks/offer.ts';
import PlaceList from '../place-list/place-list.tsx';
import Map from '../map/map.tsx';
import cn from 'classnames';

interface CitiesProps {
  offers: OfferPreview[];
  handleCardMouseEnter: (id: OfferPreview['id']) => void;
  handleCardMouseLeave: () => void;
  selectedCityCoordinates: Location;
  selectedOfferId: string;
}

function Cities({
  offers,
  handleCardMouseEnter,
  handleCardMouseLeave,
  selectedCityCoordinates,
  selectedOfferId
}: CitiesProps) {
  const isNoPlaces = offers.length === 0;

  return (
    <div className="cities">
      <div className={cn('cities__places-container container', {'cities__places-container--empty': isNoPlaces})}>
        <section className="cities__places places">
          {isNoPlaces ? '' :
            <>
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {offers[0]?.city?.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
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
                  cardType={'cities'}
                  offers={offers}
                  handleCardMouseEnter={handleCardMouseEnter}
                  handleCardMouseLeave={handleCardMouseLeave}
                />
              </div>
            </>}
        </section>
        <div className="cities__right-section">
          {Boolean(offers.length) &&
            <section className="cities__map map">
              <Map
                centerCoordinates={selectedCityCoordinates}
                offers={offers}
                selectedOfferId={selectedOfferId}
              />
            </section>}
        </div>
      </div>
    </div>
  );
}

export default Cities;
