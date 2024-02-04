const RATING_STARS = 5;

const calculateRatingPercentage = (rating: number, stars: number = RATING_STARS) =>
  (window.Math.round(rating) * 100) / stars;

export { calculateRatingPercentage };
