import { Link, Navigate, useParams } from 'react-router-dom';
import { OfferFull, OfferPreview } from '../../mocks/offer.ts';
import Map from '../../components/map/map.tsx';
import { AppRoute } from '../../components/app/app.tsx';
import FormComment from '../../components/form-comment/form-comment.tsx';
import { calculateRatingPercentage, convertCapitalizeFirstLetter, getPluralSuffix } from '../../utils.ts';
import Reviews from '../../components/reviews/reviews.tsx';
import { Review } from '../../mocks/reviews.ts';
import PlaceList from '../../components/place-list/place-list.tsx';

type PageParams = {
  id: string;
}

type OfferProps = {
  offersFull: OfferFull[];
  offersPreview: OfferPreview[];
  reviews: Review[];
}

const MAX_IMAGES = 6;
const MAX_OFFERS_PREVIEW = 3;

function OfferPage({ offersFull, offersPreview, reviews }: OfferProps): JSX.Element {
  const { id } = useParams<PageParams>();
  const offerPage = offersFull.find((offer) => offer.id === id);
  const limitedNearPlaces = offersPreview.slice(0, MAX_OFFERS_PREVIEW);
  const mapCenter = offersPreview[0].city;
  const targetOfferPreview = offersPreview.find((offer) => offer.id === id);
  const offersMap = targetOfferPreview ? [targetOfferPreview, ...offersPreview] : offersPreview;

  if (!offerPage) {
    return <Navigate to={AppRoute.Main} replace />;
  }

  const {
    images,
    isPremium,
    isFavorite,
    rating,
    title,
    type,
    bedrooms,
    description,
    goods,
    host,
    maxAdults,
    price,
  } = offerPage;

  const limitedImageGallery = (
    <div className="offer__gallery">
      {images.slice(0, MAX_IMAGES).map((image) => (
        <div key={image} className="offer__image-wrapper">
          <img className="offer__image" src={image} alt="Photo studio" />
        </div>
      ))}
    </div>
  );

  const offerGoodsList = (
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <li key={good} className="offer__inside-item">
          {good}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link"
                to={AppRoute.Main}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Main}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a
                    className="header__nav-link"
                    href="#"
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            {limitedImageGallery}
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                >
                  <svg
                    className="offer__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${calculateRatingPercentage(rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{convertCapitalizeFirstLetter(type)}</li>
                <li className="offer__feature offer__feature--bedrooms">{bedrooms} {`Bedroom${getPluralSuffix(bedrooms)}`}</li>
                <li className="offer__feature offer__feature--adults">Max {maxAdults} {`adult${getPluralSuffix(maxAdults)}`}</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {offerGoodsList}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <Reviews reviews={reviews}>
                <FormComment />
              </Reviews>
            </div>
          </div>
          <section className="offer__map map">
            <Map offers={offersMap} city={mapCenter} selectedOfferId={id}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <PlaceList offers={limitedNearPlaces} cardType={'near-places'}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
