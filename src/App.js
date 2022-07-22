import React, { useState, useEffect } from "react";

//components
import MovieCard from "./components/MovieCard";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import Search from "./components/Search";
import MovieList from "./components/MovieList";

//styles
import "./App.css";
import SearchIcon from "./search.svg";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(`${apiUrl}&s=${searchValue}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, [searchValue]);

  //updating favourites from local storage when the page loads
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    if (favourites.includes(movie)) {
      alert("This movie is on your favourites list already!!");
    } else {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchMovies={searchMovies}
        SearchIcon={SearchIcon}
      />

      {!movies && (
        <div className="firstMessage">
          Type your search to find movies or series!
        </div>
      )}
      {movies && movies.length > 0 && (
        <MovieList
          MovieCard={MovieCard}
          movies={movies}
          FavouriteBtn={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      )}

      <h2 className="headingFav">Favourites</h2>

      {favourites.length === 0 && (
        <div className="firstMessage">No favourites on your list yet </div>
      )}
      {favourites.length > 0 && (
        <MovieList
          MovieCard={MovieCard}
          movies={favourites}
          FavouriteBtn={RemoveFavourites}
          handleFavouritesClick={removeFavouriteMovie}
        />
      )}
    </div>
  );
}

export default App;
