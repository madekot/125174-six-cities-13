import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from "../../store/api-actions";
import { useAppOutletContext } from "../../components/layout/hooks";
import { OfferFull } from '../../types';

export function useOfferData(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchReviewsAction(id));
    dispatch(fetchNearbyAction(id));
  }, [dispatch, id]);
}

export function usePageInfo(offer: OfferFull | null) {
  const { setPageInfo } = useAppOutletContext();

  useEffect(() => {
    setPageInfo({ title: offer?.title || '', description: offer?.description || '' });
  }, [offer?.description, offer?.title, setPageInfo]);
}
