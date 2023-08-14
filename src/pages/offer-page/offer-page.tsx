import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { AuthorizationStatus } from '../../const';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferDescription from '../../components/offer-description/offer-description';
import OfferHost from '../../components/offer-host/offer-host';
import Reviews from '../../components/reviews/reviews';
import FormComment from '../../components/form-comment/form-comment';
import OfferMap from '../../components/offer-map/offer-map';
import NearbyPlaces from '../../components/nearby-places/nearby-places';
import { OfferPreview } from '../../types';

const MAX_OFFERS_PREVIEW = 3;

const getShuffledNearby = (nearby: readonly OfferPreview[]): OfferPreview[] => {
  const shuffledNearby = [...nearby].sort(() => Math.random() - 0.5);
  return shuffledNearby.slice(0, MAX_OFFERS_PREVIEW);
};

type OfferProps = {
  offersPreview: OfferPreview[];
}

function OfferPage({ offersPreview }: OfferProps): JSX.Element | null {
  const dispatch = useAppDispatch();
  const id = String(useParams().id);

  const offer = useAppSelector((state) => state.offer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyList = useAppSelector((state) => state.nearby);

  const isOfferLoading = useAppSelector((state) => state.isOfferLoading);
  const isNearbyLoading = useAppSelector((state) => state.isNearbyLoading);
  const isReviewsLoading = useAppSelector((state) => state.isReviewsLoading);
  const isAllLoading = isOfferLoading || isNearbyLoading || isReviewsLoading;
  const isAuthorization = useAppSelector(
    (state) => state.authorizationStatus) === AuthorizationStatus.Auth;

  const shuffledNearby = getShuffledNearby(nearbyList);

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

  const targetOfferPreview = offersPreview.find(
    (offerPreview) => offerPreview.id === id
  );

  const offersMap = targetOfferPreview
    ? [targetOfferPreview, ...shuffledNearby]
    : shuffledNearby;

  const mapCenter = offer.city.location;
  const showNearbyMap = shuffledNearby.length !== 0;
  const showNearbyPlaces = shuffledNearby.length !== 0;

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
          {showNearbyMap && <OfferMap offers={offersMap} centerCoordinates={mapCenter} selectedOfferId={id} />}
        </section>
        <div className="container">
          {showNearbyPlaces && <NearbyPlaces nearPlaces={shuffledNearby} />}
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
