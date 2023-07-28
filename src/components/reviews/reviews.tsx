import { Review } from '../../mocks/reviews.ts';
import ReviewItem from '../review-item/review-item.tsx';

type ReviewsProps = {
  reviews: Review[];
  children?: React.ReactNode;
};

function Reviews({reviews, children}: ReviewsProps): JSX.Element {
  const titleMarkup = reviews.length > 1
    ? (<>Reviews · <span className="reviews__amount">{reviews.length}</span></>)
    : <>Review</>;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        {titleMarkup}
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
      {children}
    </section>
  );
}

export default Reviews;
