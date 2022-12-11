import { getMovieReviews } from 'components/Api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews && reviews.length > 0) {
    return (
      <div>
        <ReviewsList>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <span>{review.content}</span>
              </li>
            );
          })}
        </ReviewsList>
      </div>
    );
  } else {
    return "This movie don't have reviews";
  }
};

export default Reviews;
