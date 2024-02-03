import { render, screen } from '@testing-library/react';
import OfferGallery from './offer-gallery';
import { MAX_IMAGES } from './const';
import { OfferGalleryProps } from './types';

const containerTestId = 'container';
const valueTestId = 'value';

function mockImagesProp(numImages: number): OfferGalleryProps['images'] {
  return Array.from(
    { length: numImages },
    (_, index) => `https://example.com/image${index + 1}.jpg`,
  );
}

describe('Component: OfferGallery - Rendering', () => {
  it('should render correctly with non-empty images array', () => {
    // Arrange
    const mockImages = mockImagesProp(3);
    const expectedCount = mockImages.length;

    // Act
    render(<OfferGallery images={mockImages} />);
    const container = screen.getByTestId(containerTestId);
    const valuesCount = screen.getAllByTestId(valueTestId).length;

    // Assert
    expect(container).toBeInTheDocument();
    expect(valuesCount).toBe(expectedCount);
  });

  it('should not render when images array is empty', () => {
    // Arrange
    const mockImages = mockImagesProp(0);

    // Act
    render(<OfferGallery images={mockImages} />);
    const containerElement = screen.queryByTestId(containerTestId);

    // Assert
    expect(containerElement).toBeNull();
  });
});

describe('Component: OfferGallery - Image Handling', () => {
  it('should handle more than MAX_IMAGES images', () => {
    // Arrange
    const mockImages = mockImagesProp(42);
    const expectedCount = MAX_IMAGES;

    // Act
    render(<OfferGallery images={mockImages} />);
    const container = screen.getByTestId(containerTestId);
    const valuesCount = screen.getAllByTestId(valueTestId).length;

    // Assert
    expect(container).toBeInTheDocument();
    expect(valuesCount).toBe(expectedCount);
  });
});
