import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import MovieContext from "../store/MovieContext";
import SearchMovies from "./SearchMovies";
import axios from "axios";

const MovieScreen = (props) => {
  const { page, setPage, addMovie, removeMovie, displayMovie } = props;
  const { movieState, dispatchMovie } = useContext(MovieContext);

  const decrement = () => {
    return setPage(page - 1);
  };

  const increment = () => {
    return setPage(page + 1);
  };

  const movieSearch = (searchTerm) => {
    let formattedSearch = searchTerm.split(' ').join('+');
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${formattedSearch}&language=en-US&page=${page}`
      )
      .then((res) => {
        dispatchMovie({type: "GET_MOVIES", payload: res.data.results})
      })
      .catch(error => console.log(error));
  };

  const movieDisplay = movieState.movieList.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        displayMovie={displayMovie}
      />
    );
  });

  return (
    <div className="page">
      <h1>Tobin's Movie Theatre</h1>
      <SearchMovies movieSearch={movieSearch} />
      <div className="btn-container">
        <button className="page-btn" onClick={page > 1 ? decrement : undefined}>
          -
        </button>
        <h3>Page {page}</h3>
        <button className="page-btn" onClick={increment}>
          +
        </button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
