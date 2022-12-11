import { getMovieById } from 'components/Api/api';
import { MoviesNavLink } from 'components/Movies/Movies.styled';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MoviesDetailsWrapper,
  MoviesInfoButton,
  MoviesInfoWrapper,
  MoviesInformationBox,
  MoviesInfoList,
  MoviesAditionalInformation,
  MoviesAdditionalInformationList,
  MoviesAdditionalInformationItem,
  MoviesInfoGenres,
} from './MoviesInfo.styled';

const MoviesInfo = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const nav = useRef(location);
  const IMG_REGUEST = 'https://image.tmdb.org/t/p/w342';
  const backLink = nav.current.state?.from ?? '/movies';

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovies)
      .catch(error => {
        setError(error.message);
      });
  }, [movieId]);

  if (movies) {
    const { genres } = movies;

    return (
      <MoviesInfoWrapper>
        <MoviesInfoButton to={backLink}>Back</MoviesInfoButton>
        {error && <h1>There is no detailed information about the film!!!</h1>}
        {movies && (
          <MoviesInformationBox>
            <MoviesDetailsWrapper>
              <div>
                <img
                  src={IMG_REGUEST + movies.poster_path}
                  alt={movies.title || movies.name}
                />
              </div>
              <div>
                <MoviesInfoList>
                  <li>
                    <h2>{movies.title || movies.name} </h2>
                    <p>User score {(movies.vote_average * 10).toFixed()} %</p>
                  </li>
                  <li>
                    <h2>Overview</h2>
                    <p>{movies.overview}</p>
                  </li>
                  <li>
                    <h2>Genres</h2>
                    <MoviesInfoGenres>
                      {genres.map(genre => {
                        return <li key={genre.id}>{genre.name}</li>;
                      })}
                    </MoviesInfoGenres>
                  </li>
                </MoviesInfoList>
              </div>
            </MoviesDetailsWrapper>
            <MoviesAditionalInformation>
              <h3>Additional information</h3>
              <MoviesAdditionalInformationList>
                <MoviesAdditionalInformationItem>
                  <MoviesNavLink to={'cast'}>Cast</MoviesNavLink>
                </MoviesAdditionalInformationItem>
                <MoviesAdditionalInformationItem>
                  <MoviesNavLink to={'reviews'}>Reviews</MoviesNavLink>
                </MoviesAdditionalInformationItem>
              </MoviesAdditionalInformationList>
            </MoviesAditionalInformation>
          </MoviesInformationBox>
        )}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MoviesInfoWrapper>
    );
  }
};

export default MoviesInfo;
