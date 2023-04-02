import React, {useRef} from 'react'

const SearchMovies = (props) => {
    const {movieSearch} = props;
    const searchRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        movieSearch(searchRef.current.value);

        searchRef.current.value = '';
        searchRef.current.focus();
    }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Search" ref={searchRef} type="text" />
        <button>Search</button>
    </form>
  )
}

export default SearchMovies;