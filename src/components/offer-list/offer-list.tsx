import { OfferPreview } from '../../mocks/offer.ts';
import { useState } from 'react';
import CommonPlaceCard from '../common-place-card/common-place-card.tsx';

type OfferListProps = {
  offers: OfferPreview[];
};

function OfferList({ offers }: OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveCardId] = useState<OfferPreview['id']>('');

  return (
    <>
      {offers.map((item) => (
        <CommonPlaceCard
          key={item.id} {...item}
          cardType={'cities'}
          onMouseEnter={(id: OfferPreview['id']) => setActiveCardId(id)}
          onMouseLeave={() => setActiveCardId('')}
        />
      ))}
    </>
  );
}

export default OfferList;
