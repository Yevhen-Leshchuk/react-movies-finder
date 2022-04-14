import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NotFoundPage from 'pages/NotFoundPage';
import Loader from './Loader';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    'pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  )
);
const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
