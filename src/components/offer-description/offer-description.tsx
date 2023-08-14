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
    price,
    goods,
    type,
    bedrooms,
    maxAdults,
  } = offer;

  const offerFeatures = [
    { label: convertCapitalizeFirstLetter(type), className: 'offer__feature offer__feature--entire' },
    { label: `${bedrooms} Bedroom${getPluralSuffix(bedrooms)}`, className: 'offer__feature offer__feature--bedrooms' },
    { label: `Max ${maxAdults} adult${getPluralSuffix(maxAdults)}`, className: 'offer__feature offer__feature--adults' }
  ];

  const ratingPercentage = calculateRatingPercentage(rating);
  const bookmarkButtonClass = isFavorite ? 'offer__bookmark-button--active' : '';

  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">{title}</h1>
        <button className={`offer__bookmark-button button ${bookmarkButtonClass}`} type="button">
          <svg className="offer__bookmark-icon" width={31} height={33}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: `${ratingPercentage}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        {offerFeatures.map(({ label, className }) =>
          <li key={className} className={className}>{label}</li>)}
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {goods.map((good) =>
            <li key={good} className="offer__inside-item">{good}</li>)}
        </ul>
      </div>
    </>
  );
}

export default OfferDescription;
