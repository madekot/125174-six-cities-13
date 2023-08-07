import { offerPreviewList } from './offer.ts';
import { OfferPreview } from '../types.ts';

export type FavoriteItem = OfferPreview;

const favoriteList: FavoriteItem[] = offerPreviewList;

export { favoriteList };
