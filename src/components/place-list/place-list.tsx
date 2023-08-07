import CommonPlaceCard from '../common-place-card/common-place-card.tsx';
import { SortingType } from '../../const.ts';
import { useAppSelector } from '../../store/hooks.ts';
import { OfferPreview } from '../../types.ts';

const SortingFunctions: Record<SortingType, (offers: Readonly<OfferPreview[]>) => OfferPreview[]> = {
  [SortingType.Popular]: (offers) => [...offers],
  [SortingType.LowToHigh]: (offers) => [...offers].sort((a, b) => a.price - b.price),
  [SortingType.HighToLow]: (offers) => [...offers].sort((a, b) => b.price - a.price),
  [SortingType.TopRated]: (offers) => [...offers].sort((a, b) => b.rating - a.rating)
};

export type CardType = 'cities' | 'favorites' | 'near-places';

type OfferListProps = {
  offers: OfferPreview[];
  cardType: CardType;
  handleCardMouseEnter?: (id: OfferPreview['id']) => void;
  handleCardMouseLeave?: () => void;
};

function PlaceList({ offers, cardType, handleCardMouseLeave, handleCardMouseEnter }: OfferListProps): JSX.Element {
  const selectedSortType = useAppSelector((state) => state.selectedSortType);
  const sortedOffers = SortingFunctions[selectedSortType](offers);

  return (
    <>
      {sortedOffers.map((offer) => (
        <CommonPlaceCard
          key={offer.id}
          {...offer}
          cardType={cardType}
          handleCardMouseEnter={handleCardMouseEnter}
          handleCardMouseLeave={handleCardMouseLeave}
        />
      ))}
    </>
  );
}

export default PlaceList;
