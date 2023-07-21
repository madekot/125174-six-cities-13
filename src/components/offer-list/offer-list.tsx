import PlaceCard from '../place-card/place-card.tsx';
import { OfferPreview } from '../../mocks/offer.ts';
import { useState } from 'react';

type OfferListProps = {
  offers: OfferPreview[];
};

function OfferList({ offers }: OfferListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<OfferPreview['id'] | null>(null);
  const handleMouseEnterCard = (id: OfferPreview['id']) => setActiveCardId(id);
  // eslint-disable-next-line no-console
  console.log(activeCardId ? `Активная карточка: ${activeCardId}` : 'Активной карточки нет');

  return (
    <>
      {offers.map((item) => (
        <PlaceCard
          key={item.id} {...item}
          onMouseEnter={handleMouseEnterCard}
        />
      ))}
    </>
  );
}

export default OfferList;
