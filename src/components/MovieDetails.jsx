import React, { useContext } from "react";
import MovieContext from "../store/MovieContext";

const MovieDetails = () => {
  const { movieState } = useContext(MovieContext);

  return (
    <div className="details-container">
      <img
        className="detail-image"
        src={`https://image.tmdb.org/t/p/original${movieState.movie.poster_path}`}
        alt="Movie Poster"
      />
      <div className="movie-details">
        <h1>{movieState.movie.original_title}</h1>
        <h3>{`Release Date: ${movieState.movie.release_date}`}</h3>
        <h4>{`Movie Rating: ${movieState.movie.vote_average}`}</h4>
        <p>{movieState.movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
