import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moviesApi from '../../services/moviesApi';
import Form from '../../components/Form/Form';
import Loader from '../../components/Loader/Loader';
import defaultImg from '../../images/no-poster.jpg';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchQuery = new URLSearchParams(location.search).get('query');

  const handleFormSubmit = movieName => {
    movieName && navigate({ ...location, search: `query=${movieName}` });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    console.log(searchQuery);

    const fetchMovies = () => {
      setIsLoading(true);

      moviesApi
        .fetcnOnSearch(searchQuery)
        .then(({ results }) => {
          console.log(results.length);

          if (results.length === 0) {
            toast.error('Movie not found!');
            navigate({ ...location, search: '' });
            return;
          }

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
  }, [searchQuery, location, navigate]);

  return (
    <>
      <Form onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}

      <ul className={s.Galery}>
        {movies.map(movie => (
          <li key={movie.id} className={s.GaleryCard}>
            <div className={s.GalleryBox}>
              <Link
                to={{
                  pathname: `${movie.id}`,
                  state: { from: location },
                }}
              >
                <img
                  className={s.GalleryBoxImage}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                />
              </Link>
            </div>
            <p className={s.GaleryCardTitle}> {movie.name ?? movie.title}</p>
          </li>
        ))}
      </ul>

      <ToastContainer autoClose={3000} position="top-right" type="default" />
    </>
  );
};

export default MoviesPage;
