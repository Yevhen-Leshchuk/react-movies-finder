import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  useLocation,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import moviesApi from '../../services/moviesApi';
import defaultImg from '../../images/no-poster.jpg';
import plug from '../../images/plug.png';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const voteAverage = movie.vote_average * 10;

  useEffect(() => {
    const fetchMovies = () => {
      moviesApi
        .fetchMovieDetail(movieId)
        .then(movie => {
          setMovie(movie);
          setGenres(movie.genres);
        })
        .catch(error => {
          setError(error);
        });
    };
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {error && (
        <div className={s.PlugBox}>
          <img className={s.PlugImage} src={plug} alt="Movies not found" />
          <h1 className={s.PlugTitle}>Movies not found</h1>
        </div>
      )}

      {movie.length !== 0 && (
        <div className={s.MovieDetails}>
          <div className={s.MovieBox}>
            <div>
              <img
                className={s.MovieBoxImage}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
              />
            </div>

            <div className={s.MovieInfo}>
              <h1 className={s.MovieTitle}>{movie.original_title}</h1>

              <div className={s.MovieDesc}>
                <div className={s.MovieGenres}>
                  <h2 className={s.MovieGenresTitle}>Genres:</h2>
                  <ul className={s.Genres}>
                    {genres.map(genre => (
                      <li key={genre.id} className={s.GenresItem}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={s.MovieScore}>
                  <h2 className={s.MovieScoreTitle}>User Score:</h2>
                  <span className={s.MovieScoreValue}>{voteAverage}%</span>
                </div>
              </div>

              <h2 className={s.MovieOverviewTitle}>Overview</h2>
              <p className={s.MovieOverviewText}>{movie.overview}</p>
            </div>
          </div>

          <div className={s.AdditionalInformation}>
            <h2 className={s.AdditionalTitle}>Additional information</h2>

            <ul className={s.MovieNavBox}>
              <li className={s.MovieNavBtn}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${s.MovieNavLinkActiv}` : `${s.MovieNavLink}`
                  }
                  to={{
                    pathname: 'cast',
                    state: { from: location },
                  }}
                >
                  Cast
                </NavLink>
              </li>

              <li className={s.MovieNavBtn}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${s.MovieNavLinkActiv}` : `${s.MovieNavLink}`
                  }
                  to={{
                    pathname: 'reviews',
                    state: { from: location },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Outlet />
          </div>
        </div>
      )}

      <button className={s.Button} type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
};

export default MovieDetailsPage;
