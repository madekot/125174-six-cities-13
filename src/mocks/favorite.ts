import { offerPreviewList, OfferPreview } from './offer.ts';

export type FavoriteItem = OfferPreview;

const favoriteList: FavoriteItem[] = offerPreviewList;

export { favoriteList };
