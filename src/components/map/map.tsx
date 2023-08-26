import { useEffect, useRef } from 'react';
import useMap from './use-map.ts';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location, OfferPreview } from '../../types.ts';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

type MapProps = {
  centerCoordinates: Location;
  offers: OfferPreview[];
  selectedOfferId?: OfferPreview['id'];
  scrollWheelZoom?: boolean;
};

function Map(props: MapProps): JSX.Element {
  const {
    centerCoordinates,
    offers,
    selectedOfferId,
    scrollWheelZoom
  } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, centerCoordinates, scrollWheelZoom);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOfferId !== undefined && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOfferId]);

  useEffect(() => {
    if (map) {
      map.flyTo([centerCoordinates.latitude, centerCoordinates.longitude]);
    }
  }, [centerCoordinates, map]);


  return (
    <div ref={mapRef} style={{height: '100%'}}></div>
  );
}

export default Map;
