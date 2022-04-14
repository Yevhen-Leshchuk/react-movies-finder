import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from '../../services/moviesApi';
import Loader from '../../components/Loader/Loader';
import defaultImg from '../../images/no-actor.jpg';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = () => {
      setIsLoading(true);

      moviesApi
        .fetchMovieCredits(movieId)
        .then(({ cast }) => {
          setCast(cast);
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
    <div className={s.Cast}>
      {isLoading && <Loader />}

      <ul className={s.CastGalery}>
        {cast.length !== 0 ? (
          cast.map(actor => (
            <li key={actor.id} className={s.CastCard}>
              <div className={s.CastBox}>
                <img
                  className={s.CastBoxImage}
                  src={
                    actor.profile_path
                      ? `http://image.tmdb.org/t/p/w200/${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.name}
                />
              </div>
              <p className={s.CastName}>{actor.name}</p>
              <p className={s.CastCharacter}>
                Character:
                <span className={s.CastCharacterInfo}>{actor.character}</span>
              </p>
            </li>
          ))
        ) : (
          <h1 className={s.CastNoTitle}>
            We don't have any casts for this movie!
          </h1>
        )}
      </ul>
    </div>
  );
};

export default Cast;
