import { useState, useEffect } from 'react';
import { getTrandingMovie } from 'components/Api/api';
import { useLocation } from 'react-router-dom';
import {
  MoviesWrapper,
  MoviesItem,
  MoviesNavLink,
} from '../Movies/Movies.styled';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrandingMovie().then(setMovies);
  }, []);

  if (!movies) {
    return <MoviesWrapper>Sorry. Don't found this films</MoviesWrapper>;
  }
  return (
    <>
      {' '}
      <MoviesWrapper>
        {movies.map(movie => {
          return (
            <MoviesItem key={movie.id}>
              <MoviesNavLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title || movie.name}
              </MoviesNavLink>
            </MoviesItem>
          );
        })}
      </MoviesWrapper>
    </>
  );
};
export default MoviesList;

// import { getTrandingMovie } from 'components/Api/api';
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import {
//   MoviesWrapper,
//   MoviesItem,
//   MoviesNavLink,
// } from '../Movies/Movies.styled';

// const MoviesList = () => {
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();

//   getTrandingMovie().then(response => {
//     const result = response.data.results;
//     console.log(result);
//     setMovies([...result]);
//   });

//   console.log('hi');

//   // useEffect(() => {
//   //   getTrandingMovie().then(response => {
//   //     const result = response.data.results;
//   //     console.log(result);
//   //     setMovies([...result]);
//   //   });
//   // }, []);
//   // console.log('movies:', movies);

//   // if (movies === []) {
//   //   return;
//   // }

//   return (
//   );
// };

// export default MoviesList;
// <MoviesWrapper>
//   {movies.map(movie => (
//     <MoviesItem key={movie.id}>
//       <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
//         {movie.name || movie.title}
//       </NavLink>
//     </MoviesItem>
//   ))}
// </MoviesWrapper>;
