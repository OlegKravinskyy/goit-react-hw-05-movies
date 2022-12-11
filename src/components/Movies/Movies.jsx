import { getMovieByWord } from 'components/Api/api';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  MovieList,
  MoviesButton,
  MoviesInput,
  MoviesWrapper,
  MoviesItem,
  MoviesNavLink,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.name.value });
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }

    getMovieByWord(searchName).then(setMovies);
  }, [searchName]);

  return (
    <MoviesWrapper>
      <form onSubmit={handleSubmit}>
        <MoviesInput type="text" name="name" />
        <MoviesButton type="submit">Search</MoviesButton>
      </form>
      <div>
        {' '}
        {movies && (
          <MovieList>
            {movies.map(movie => {
              return (
                <MoviesItem key={movie.id}>
                  <MoviesNavLink to={`${movie.id}`} state={{ from: location }}>
                    {movie.title || movie.name}
                  </MoviesNavLink>
                </MoviesItem>
              );
            })}
          </MovieList>
        )}
      </div>
    </MoviesWrapper>
  );
};

export default Movies;
