import React from "react";

const MovieCard = (props) => {
  const { movie, addMovie, removeMovie, watchList, displayMovie } = props;

  const inWatchList = watchList.filter((mov) => {
    return mov.id === movie.id;
  });

  const button =
    inWatchList.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img
          className="card-image"
          onClick={() => displayMovie(movie)}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Movie Poster"
        />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
