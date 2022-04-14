import axios from 'axios';

const api_key = 'c02b36da545a5844f0cde427ebff9c5c';
const baseURL = `https://api.themoviedb.org/3`;

const fetchTrending = async () => {
  const { data } = await axios.get(
    `${baseURL}/trending/all/day?api_key=${api_key}`
  );

  return data;
};

const fetcnOnSearch = async searchQuery => {
  const { data } = await axios.get(
    `${baseURL}/search/movie?api_key=${api_key}&query=${searchQuery}`
  );

  return data;
};

const fetchMovieDetail = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}?api_key=${api_key}&language=en-US`
  );

  return data;
};

const fetchMovieCredits = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}/credits?api_key=${api_key}&language=en-US`
  );

  return data;
};

const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}/reviews?api_key=${api_key}&language=en-US`
  );

  return data;
};

const api = {
  fetchTrending,
  fetcnOnSearch,
  fetchMovieDetail,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default api;
