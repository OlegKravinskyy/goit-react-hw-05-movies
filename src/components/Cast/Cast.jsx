import { getMovieCast } from 'components/Api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastItem,
  CastImg,
  CastInfoWrapper,
  CastInfoTitle,
} from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();
  const IMG_REGUEST = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieCast(movieId).then(setActors);
  }, [movieId]);

  if (!actors) {
    return;
  }

  return (
    <div>
      <CastList>
        {actors.map(actor => {
          return (
            <CastItem key={actor.id}>
              <div>
                <CastImg
                  src={IMG_REGUEST + actor.profile_path}
                  alt={actor.name}
                />
              </div>
              <div>
                <CastInfoWrapper>
                  <CastInfoTitle>Actor:</CastInfoTitle>
                  <span>{actor.name}.</span>
                </CastInfoWrapper>
                <CastInfoWrapper>
                  <CastInfoTitle>Сharacter:</CastInfoTitle>
                  <span>{actor.character}.</span>
                </CastInfoWrapper>
              </div>
            </CastItem>
          );
        })}
      </CastList>
    </div>
  );
};

export default Cast;
