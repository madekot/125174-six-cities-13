import { OfferPreview, Location } from '../../types.ts';
import Map from '../../components/map/map.tsx';

type OfferMapProps = {
  offers: OfferPreview[];
  centerCoordinates: Location;
  selectedOfferId: string;
}

function OfferMap({ offers, centerCoordinates, selectedOfferId }: OfferMapProps) {
  return (
    <section className="offer__map map">
      <Map
        offers={offers}
        centerCoordinates={centerCoordinates}
        selectedOfferId={selectedOfferId}
        scrollWheelZoom={false}
      />
    </section>
  );
}

export default OfferMap;
