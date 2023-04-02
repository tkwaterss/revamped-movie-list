import React from "react";

const Header = (props) => {
  const { setDisplay, getData } = props;

  const homeClickHandler = () => {
    setDisplay("MovieScreen");
    getData();
  }

  return (
    <header>
      <div className="nav-link" onClick={homeClickHandler}>
        <h3>Movies List</h3>
      </div>
      <h2>Tobin's Movie App</h2>
      <div className="nav-link" onClick={() => setDisplay("WatchList")}>
        <h3>Your Watchlist</h3>
      </div>
    </header>
  );
};

export default Header;
