import React from "react";

const Search = ({ searchValue, setSearchValue, SearchIcon, searchMovies }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movies or series"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => {
          searchMovies(searchValue);
        }}
      />
    </div>
  );
};

export default Search;
