import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import defaultImg from '../../images/no-poster.jpg';
import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.Galery}>
      {movies.map(({ id, poster_path, title, name }) => (
        <li key={id} className={s.GaleryCard}>
          <div className={s.GalleryBox}>
            <Link
              to={{
                pathname: `movies/${id}`,
                state: { from: location },
              }}
            >
              <img
                className={s.GalleryBoxImage}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultImg
                }
                alt={title}
              />
            </Link>
          </div>
          <p className={s.GaleryCardTitle}> {name ?? title}</p>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
