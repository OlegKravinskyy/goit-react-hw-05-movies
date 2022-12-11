import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Movies = lazy(() => import('./Movies/Movies'));
const MoviesList = lazy(() => import('./MovieList/MoviesList'));
const MoviesInfo = lazy(() => import('./MoviesInfo/MoviesInfo'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </>
  );
};

// b3a08fdd3c8f2c01f2754fee7d5e3f69;
// https://api.themoviedb.org/3/movie/550?api_key=b3a08fdd3c8f2c01f2754fee7d5e3f69
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2EwOGZkZDNjOGYyYzAxZjI3NTRmZWU3ZDVlM2Y2OSIsInN1YiI6IjYzOGU3NzY2NTgwMGM0MDBkOTk4NTMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0NF-fyiheUJuut3p0ZJ9PEjixeizFqI1WzrNJrz4x2U

// -/ Layout
//   -/movies
//   -/movies/:movieId
//   -/movies/:movieId/cast
//   -/movies/:movieId/reviews
