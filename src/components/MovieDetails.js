import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  trendingMovies,
  topRatedMovies,
  actionMovies,
  comedyMovies,
} from "../data/movies";
import "./MovieDetails.css";

function MovieDetails({ myList, toggleMyList }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const allMovies = [
    ...trendingMovies,
    ...topRatedMovies,
    ...actionMovies,
    ...comedyMovies,
  ];

  const movie = allMovies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="movie-not-found">
        <h2>Movie not found</h2>

        <button onClick={() => navigate("/")}>
          <i className="bi bi-arrow-left"></i>
          Back Home
        </button>
      </div>
    );
  }

  const isInMyList = myList.some(
    (item) => item.id === movie.id
  );

  const playTrailer = () => {
    if (movie.youtube) window.open(movie.youtube, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(0, 0, 0, 0.95),
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.3)
          ),
          url(${movie.image})
        `,
      }}
    >
      <div className="movie-details-content">

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left"></i>
          뒤로 이동
        </button>

        <div className="movie-details-info">

          <h1>{movie.title}</h1>

          <div className="movie-meta">
            {movie.year && <><span>{movie.year}</span><span>•</span></>}
            {movie.rating && <><span>⭐ {movie.rating}</span><span>•</span></>}
            <span>{movie.genre}</span>
          </div>

          <p>
            {movie.description}
          </p>

          <div className="movie-details-buttons">

            <button
              className="details-play"
              onClick={playTrailer}
              disabled={!movie.youtube}
            >
              <i className="bi bi-play-fill"></i>
              {movie.youtube ? "바로 시청" : "URL 준비 중"}
            </button>

            <button
              className="details-list"
              onClick={() => toggleMyList(movie)}
            >
              <i
                className={
                  isInMyList
                    ? "bi bi-check-lg"
                    : "bi bi-plus-lg"
                }
              ></i>

              {isInMyList
                ? " 내 라이브러리에서 제거"
                : " 내 라이브러리에 추가"}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default MovieDetails;