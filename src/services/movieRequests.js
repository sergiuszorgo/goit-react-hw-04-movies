import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const APIkey = "f5571a4d0dffe86480c58c41c5dbcd23";

const fetchTrending = () => {
  return axios
    .get(`/trending/movie/day?api_key=${APIkey}`)
    .then((response) => response.data.results);
}; //

const fetchMovieId = (movieId) => {
  return axios
    .get(`/movie/${movieId}?api_key=${APIkey}&language=en-US`)
    .then((response) => response.data);
}; //

const fetchMovie = (query) => {
  return axios
    .get(
      `/search/movie?api_key=${APIkey}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => response.data);
}; //

const fetchCast = (movieId) => {
  return axios
    .get(`/movie/${movieId}/credits?api_key=${APIkey}&language=en-US`)
    .then((response) => response.data.cast);
}; //
const fetchReview = (movieId) => {
  return axios
    .get(`/movie/${movieId}/reviews?api_key=${APIkey}&language=en-US&page=1`)
    .then((response) => response.data.results);
};

export default {
  fetchTrending,
  fetchMovie,
  fetchMovieId,
  fetchCast,
  fetchReview,
};
