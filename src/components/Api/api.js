import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'b3a08fdd3c8f2c01f2754fee7d5e3f69';

export const getTrandingMovie = async () => {
  try {
    const response = await axios.get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    return null;
  }
};

export const getMovieByWord = async word => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: API_KEY,
        query: word,
      },
    });
    return response.data.results;
  } catch {}
};

export const getMovieById = async id => {
  try {
    const response = await axios.get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch {}
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch {}
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch {}
};
