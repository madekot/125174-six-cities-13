import { calculateRatingPercentage, convertCapitalizeFirstLetter, getPluralSuffix } from '../../utils';
import { OfferFull } from '../../types.ts';

type OfferDescriptionProps = {
  offer: OfferFull;
}

function OfferDescription({ offer }: OfferDescriptionProps) {
  const {
    isPremium,
    isFavorite,
    rating,
    title,
    type,
    bedrooms,
    goods,
    maxAdults,
    price,
  } = offer;

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
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">{title}</h1>
        <button
          className={`offer__bookmark-button button ${
            isFavorite ? 'offer__bookmark-button--active' : ''
          }`}
          type="button"
        >
          <svg className="offer__bookmark-icon" width={31} height={33}>
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
        <li className="offer__feature offer__feature--entire">
          {convertCapitalizeFirstLetter(type)}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} {`Bedroom${getPluralSuffix(bedrooms)}`}
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} {`adult${getPluralSuffix(maxAdults)}`}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        {offerGoodsList}
      </div>
    </>
  );
}

export default OfferDescription;
