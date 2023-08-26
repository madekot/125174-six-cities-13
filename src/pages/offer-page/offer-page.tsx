import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import LoadingPage from '../loading-page/loading-page';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferDescription from '../../components/offer-description/offer-description';
import OfferHost from '../../components/offer-host/offer-host';
import Reviews from '../../components/reviews/reviews';
import FormComment from '../../components/form-comment/form-comment';
import OfferMap from '../../components/offer-map/offer-map';
import NearbyPlaces from '../../components/nearby-places/nearby-places';
import {
  getHasError,
  getIsNearbyLoading,
  getIsOfferLoading,
  getIsReviewsLoading,
  getNearby,
  getOffer, getOffers,
  getReviews
} from '../../store/slices/app-data/selectors.ts';
import { getAuthCheckedStatus } from '../../store/slices/user-process/selectors.ts';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import ErrorPage from '../error-page/error-page.tsx';
import { OfferPreview } from '../../types.ts';

const MAX_OFFERS_PREVIEW = 3;

const getShuffledNearby = (nearby: readonly OfferPreview[]): OfferPreview[] => (
  [...nearby].sort(() => Math.random() - 0.5)
);

function OfferPage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const id = String(useParams().id);

  const offer = useAppSelector(getOffer);
  const reviews = useAppSelector(getReviews);
  const nearbyList = useAppSelector(getNearby);
  const offersPreview = useAppSelector(getOffers);

  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const isNearbyLoading = useAppSelector(getIsNearbyLoading);
  const isAuthorization = useAppSelector(getAuthCheckedStatus);
  const hasError = useAppSelector(getHasError);

  const isAllLoading = isOfferLoading || isNearbyLoading || isReviewsLoading;


  const limitedNearby = getShuffledNearby(nearbyList).slice(0, MAX_OFFERS_PREVIEW);

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchReviewsAction(id));
    dispatch(fetchNearbyAction(id));
  }, [dispatch, id]);

  if (isAllLoading) {
    return <LoadingPage />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  if (hasError) {
    return <ErrorPage />;
  }

  const targetOfferPreview = offersPreview.find(
    (offerPreview) => offerPreview.id === id
  );

  const offersMap = targetOfferPreview
    ? [targetOfferPreview, ...limitedNearby]
    : limitedNearby;

  const mapCenter = offer.city.location;

  const {
    images,
    description,
    host,
  } = offer;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDescription offer={offer}/>
              <OfferHost host={host} description={description} />
              <Reviews reviews={reviews}>
                {isAuthorization && <FormComment offerId={id} />}
              </Reviews>
            </div>
          </div>
          <OfferMap offers={offersMap} centerCoordinates={mapCenter} selectedOfferId={id} />
        </section>
        <div className="container">
          <NearbyPlaces nearPlaces={limitedNearby} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
