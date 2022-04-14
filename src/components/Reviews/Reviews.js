import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from '../../services/moviesApi';
import Loader from '../../components/Loader/Loader';
import s from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = () => {
      setIsLoading(true);

      moviesApi
        .fetchMovieReviews(movieId)
        .then(({ results }) => {
          setReviews(results);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      <ul className={s.Reviews}>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h2 className={s.ReviewsTitle}>Author: {review.author}</h2>
              <p className={s.ReviewsText}>{review.content}</p>
            </li>
          ))
        ) : (
          <h1 className={s.ReviewsNoTitle}>
            We don't have any reviews for this movie!
          </h1>
        )}
      </ul>
    </>
  );
};

export default Reviews;
