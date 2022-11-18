
 const API_KEY="1893904dce9ca0b73aaa7d3cc950b88c";
 const base_url="https://api.themoviedb.org/3";

const requests={
    fetchNetflixOrignal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending:`/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;