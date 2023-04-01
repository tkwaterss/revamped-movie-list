import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = (props) => {
  const { watchList, removeMovie, displayMovie } = props;

  const movieDisplay = watchList.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        removeMovie={removeMovie}
        watchList={watchList}
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
