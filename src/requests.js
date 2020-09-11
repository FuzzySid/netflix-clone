import API_KEY from './key';

export default requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
