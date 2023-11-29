import { createSignal } from 'solid-js';

import { Typography } from '../Typography';

interface StarProps {
  filled: boolean;
  onClick: () => void;
}

const Star = ({ filled, onClick }: StarProps) => (
  <span class={`star ${filled ? 'filled' : 'unfilled'}`} onClick={onClick}>
    {filled ? '★' : '☆'}
  </span>
);

export interface RatingProps {
  readOnly: boolean;
  currentRating: number;
  totalRatings: number;
}

const Rating = ({ readOnly, currentRating, totalRatings }: RatingProps) => {
  const [rating, setRating] = createSignal(currentRating);

  const handleRatingChange = (newRating: number) => {
    if (!readOnly) {
      setRating(newRating);
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starIndex = index + 1;
      return (
        <Star
          filled={starIndex <= rating()}
          onClick={() => handleRatingChange(starIndex)}
        />
      );
    });
  };

  return (
    <div>
      {renderStars()}
      <Typography
        variant="subtitle1"
        sxProps={{ fontSize: '12px', fontWeight: '400' }}
      >
        {totalRatings} Ratings
      </Typography>
    </div>
  );
};

export default Rating;
