import { MAX_IMAGES } from './const';
import { OfferGalleryProps } from './types';

function OfferGallery({ images }: OfferGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <div className="offer__gallery-container container" data-testid={'container'}>
      <div className="offer__gallery">
        {images.slice(0, MAX_IMAGES).map((image) => (
          <div key={image} className="offer__image-wrapper" data-testid={'value'}>
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
