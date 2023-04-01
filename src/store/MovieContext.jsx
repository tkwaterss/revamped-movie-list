import React, { createContext, useReducer } from "react";

let initialMovieState = {
  movie: {},
};

const MovieContext = createContext();

const movieReducer = (state, action) => {

  switch (action.type) {
    case "CHANGE_MOVIE":
      return {...state, movie: action.payload};
    default:
      return state;
  }
};

const MovieContextProvider = (props) => {
  const [movieState, dispatchMovie] = useReducer(
    movieReducer,
    initialMovieState
  );

  return (
    <MovieContext.Provider value={{ movieState, dispatchMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContextProvider };
export default MovieContext;
