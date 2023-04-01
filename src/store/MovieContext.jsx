import React, { createContext, useReducer } from "react";

let initialMovieState = {
  movie: {},
  movieList: [],
  watchList: [],
};

const MovieContext = createContext();

const movieReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MOVIE":
      return { ...state, movie: action.payload };
    case "GET_MOVIES":
      return { ...state, movieList: action.payload };
    case "ADD_MOVIE":
      return { ...state, watchList: [...state.watchList, action.payload] };
    case "REMOVE_MOVIE":
      return { ...state, watchList: action.payload };
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
