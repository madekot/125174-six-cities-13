import { OfferPreview } from '../../mocks/offer.ts';
import { Link } from 'react-router-dom';
import { convertCapitalizeFirstLetter, calculateRatingPercentage } from '../../utils.ts';

export type PlaceCardProps = OfferPreview & {
  onMouseEnter?: (id: OfferPreview['id']) => void;
  onMouseLeave?: () => void;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {
    price,
    type,
    title,
    previewImage,
    isFavorite,
    rating,
    id,
    isPremium,
    onMouseEnter,
    onMouseLeave
  } = props;

  const pathCard = `/offer/${id}`;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={pathCard}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${calculateRatingPercentage(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={pathCard}>{title}</Link>
        </h2>
        <p className="place-card__type">{convertCapitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
