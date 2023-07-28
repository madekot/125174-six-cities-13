import { OfferPreview } from '../../mocks/offer.ts';
import CommonPlaceCard from '../common-place-card/common-place-card.tsx';

type OfferListProps = {
  offers: OfferPreview[];
  handleCardMouseEnter?: (id: OfferPreview['id']) => void;
  handleCardMouseLeave?: () => void;
};

function OfferList({ offers, handleCardMouseLeave, handleCardMouseEnter }: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((item) => (
        <CommonPlaceCard
          key={item.id} {...item}
          cardType={'cities'}
          handleCardMouseEnter={handleCardMouseEnter}
          handleCardMouseLeave={handleCardMouseLeave}
        />
      ))}
    </>
  );
}

export default OfferList;
