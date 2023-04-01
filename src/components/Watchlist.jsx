import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import MovieContext from "../store/MovieContext";

const Watchlist = (props) => {
  const { removeMovie, displayMovie } = props;
  const { movieState } = useContext(MovieContext);

  const movieDisplay = movieState.watchList.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        removeMovie={removeMovie}
        displayMovie={displayMovie}
      />
    );
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
