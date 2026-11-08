import React from "react";
import MovieCard from "./MovieCard";
import "./MovieRow.css";

function MovieRow({ title, movies, myList = [], toggleMyList }) {
  if (movies.length === 0) return null;

  return (
    <section
      className="movie-row"
      id={title.toLowerCase().replaceAll(" ", "-")}
    >
      <h2>{title}</h2>

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            myList={myList}
            toggleMyList={toggleMyList}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;