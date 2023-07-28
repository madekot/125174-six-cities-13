import { OfferPreview } from '../../mocks/offer.ts';
import CommonPlaceCard from '../common-place-card/common-place-card.tsx';

export type CardType = 'cities' | 'favorites' | 'near-places';

type OfferListProps = {
  offers: OfferPreview[];
  cardType: CardType;
  handleCardMouseEnter?: (id: OfferPreview['id']) => void;
  handleCardMouseLeave?: () => void;
};

function CommonPlaceCardList({ offers, cardType, handleCardMouseLeave, handleCardMouseEnter }: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <CommonPlaceCard
          key={offer.id} {...offer}
          cardType={cardType}
          handleCardMouseEnter={handleCardMouseEnter}
          handleCardMouseLeave={handleCardMouseLeave}
        />
      ))}
    </>
  );
}

export default CommonPlaceCardList;
