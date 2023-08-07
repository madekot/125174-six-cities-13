import ReviewItem from '../review-item/review-item.tsx';
import { Review } from '../../types.ts';

type ReviewsProps = {
  reviews: Review[];
  children?: React.ReactNode;
};

function Reviews({reviews, children}: ReviewsProps): JSX.Element {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
      {children}
    </section>
  );
}

export default Reviews;
