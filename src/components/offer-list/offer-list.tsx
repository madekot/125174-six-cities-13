import PlaceCard from '../place-card/place-card.tsx';
import { OfferPreview } from '../../mocks/offer.ts';
import { useState } from 'react';

type OfferListProps = {
  offers: OfferPreview[];
};

function OfferList({ offers }: OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setActiveCardId] = useState<OfferPreview['id']>('');

  return (
    <>
      {offers.map((item) => (
        <PlaceCard
          key={item.id} {...item}
          onMouseEnter={(id: OfferPreview['id']) => setActiveCardId(id)}
          onMouseLeave={() => setActiveCardId('')}
        />
      ))}
    </>
  );
}

export default OfferList;
