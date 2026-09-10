import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie, myList = [], toggleMyList }) {

  const navigate = useNavigate();

  const isInMyList = myList.some(
    (item) => item.id === movie.id
  );

  const openMovie = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className="movie-card"
      onClick={openMovie}
    >

      <img
        src={movie.image}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="movie-overlay">

        <h3>{movie.title}</h3>

        <div className="movie-actions">

          <button
            className="movie-play"
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/movie/${movie.id}`);
            }}
          >
            <i className="bi bi-play-fill"></i>
          </button>

          <button
            className="movie-list-button"
            onClick={(event) => {
              event.stopPropagation();
              toggleMyList(movie);
            }}
          >
            <i
              className={
                isInMyList
                  ? "bi bi-check-circle-fill"
                  : "bi bi-plus-circle"
              }
            ></i>
          </button>

        </div>

      </div>

    </div>
  );
}

export default MovieCard;