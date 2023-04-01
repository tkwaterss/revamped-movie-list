import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
import MovieDetails from "./components/MovieDetails";
import MovieContext from "./store/MovieContext";

function App() {
  const [page, setPage] = useState(1);
  const [display, setDisplay] = useState("MovieScreen");
  const { movieState, dispatchMovie } = useContext(MovieContext);

  const addMovie = (movie) =>
    dispatchMovie({ type: "ADD_MOVIE", payload: movie });

  const removeMovie = (movie) => {
    const newState = movieState.watchList.filter((mov) => {
      return mov !== movie;
    });
    dispatchMovie({ type: "REMOVE_MOVIE", payload: newState });
  };

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        dispatchMovie({ type: "GET_MOVIES", payload: res.data.results });
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const displayMovie = (movie) => {
    setDisplay("MovieDetails");
    dispatchMovie({ type: "CHANGE_MOVIE", payload: movie });
  };

  let content = (
    <MovieScreen
      page={page}
      setPage={setPage}
      addMovie={addMovie}
      removeMovie={removeMovie}
      displayMovie={displayMovie}
    />
  );

  if (display === "WatchList") {
    content = (
      <Watchlist removeMovie={removeMovie} displayMovie={displayMovie} />
    );
  }
  if (display === "MovieDetails") {
    content = <MovieDetails />;
  }

  return (
    <div className="App">
      <Header setDisplay={setDisplay} />
      <main>{content}</main>
    </div>
  );
}

export default App;
