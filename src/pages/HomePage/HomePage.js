import { useState, useEffect } from 'react';
import moviesApi from '../../services/moviesApi';
import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = () => {
      setIsLoading(true);

      moviesApi
        .fetchTrending()
        .then(({ results }) => {
          setMovies(results);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
