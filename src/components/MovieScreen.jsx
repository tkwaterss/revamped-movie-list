import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { watchList, page, setPage, movieList, addMovie, removeMovie, displayMovie } = props;

  const decrement = () => {
    return setPage(page - 1);
  };

  const increment = () => {
    return setPage(page + 1);
  };

  const movieDisplay = movieList.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        watchList={watchList}
        displayMovie={displayMovie}
      />
    );
  });

  return (
    <div className="page">
      <h1>Tobin's Movie Theatre</h1>
      <h3>Add movies to your watchlist</h3>
      <div className="btn-container">
        <button className="page-btn" onClick={page > 1 ? decrement: undefined}>-</button>
        <h3>Page {page}</h3>
        <button className="page-btn" onClick={increment}>+</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
