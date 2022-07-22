import React from "react";

const MovieList = ({
  movies,
  MovieCard,
  FavouriteBtn,
  handleFavouritesClick,
}) => {
  return (
    <div className="container">
      {movies.map((movie) => (
        <div className="containerChild" key={movie.imdbID}>
          <MovieCard
            movieDet={movie}
            FavouriteBtn={FavouriteBtn}
            handleFavouritesClick={handleFavouritesClick}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
