import { Fragment, useState } from 'react';
import { getPluralSuffix } from '../../utils.ts';

const ratingTitlesToValues: Record<string, number> = {
  'terribly': 1,
  'badly': 2,
  'not bad': 3,
  'good': 4,
  'perfect': 5,
};

const MIN_LENGTH_COMMENT = 3;
const DEFAULT_RATING = 0;

function FormComment(): JSX.Element {
  const [textComment, setTextComment] = useState('');
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [invalid, setInvalid] = useState(true);

  const validateForm = (commentLength: number, newRating: number) => {
    const isInvalid = !(commentLength >= MIN_LENGTH_COMMENT && newRating !== DEFAULT_RATING);
    setInvalid(isInvalid);
  };

  const handleClickStar = (evt: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const newRating = ratingTitlesToValues[evt.currentTarget.title];
    setRating(newRating);
    validateForm(textComment.length, newRating);
  };

  const handleChangeComment = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value: text } = evt.target;
    setTextComment(text);
    validateForm(text.length, rating);
  };

  const ratingFormMarkup = (
    Object.entries(ratingTitlesToValues).map(([title, ratingStar]) => (
      <Fragment key={title}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={ratingStar}
          id={`${ratingStar}-stars`}
          type="radio"
          required
        />
        <label
          htmlFor={`${ratingStar}-stars`}
          className="reviews__rating-label form__rating-label"
          title={title}
          onClick={handleClickStar}
        >
          <svg
            className="form__star-image"
            width={37}
            height={33}
          >
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </Fragment>
    ))
      .reverse()
  );

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingFormMarkup}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={textComment}
        required
        onChange={handleChangeComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{`${MIN_LENGTH_COMMENT} character${getPluralSuffix(MIN_LENGTH_COMMENT)}`}</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={invalid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
