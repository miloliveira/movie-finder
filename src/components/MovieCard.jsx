import React from "react";

const Movie = ({ movieDet, FavouriteBtn, handleFavouritesClick }) => {
  return (
    <div className="movie">
      <img
        className="moviePoster"
        src={
          movieDet.Poster !== "N/A"
            ? movieDet.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movieDet.Title}
      />
      <div className="movieDetDiv">
        <div className="movieDet">
          <h3>{movieDet.Title}</h3>
          <p>
            {movieDet.Type} - {movieDet.Year}
          </p>
          <div onClick={() => handleFavouritesClick(movieDet)}>
            <FavouriteBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
