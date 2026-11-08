import React, { useState } from "react";
import "./Hero.css";
import { trendingMovies } from "../data/movies";

function Hero() {
  const movie = trendingMovies[0];
  const [showInfo, setShowInfo] = useState(false);

  const playMovie = () => {
    if (movie.youtube) window.open(movie.youtube, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.25)), url("${movie.image}")` }}>

      <div className="hero-overlay">

        <div className="hero-content">

          <p className="hero-tag">
            ANION
          </p>

          <h1>{movie.title}</h1>

          <p className="hero-description">
            ANION에서 원하는 애니메이션을 마음껏 감상하세요!
          </p>

          <div className="hero-buttons">

            <button
              className="play-btn"
              onClick={playMovie}
              disabled={!movie.youtube}
            >
              <i className="bi bi-play-fill"></i>
              {movie.youtube ? "바로 시청" : "URL 준비 중"}
            </button>

            <button
              className="info-btn"
              onClick={() => setShowInfo(!showInfo)}
            >
              <i className="bi bi-info-circle-fill"></i>
              More Info
            </button>

          </div>

          {showInfo && (
            <div className="hero-info">

              <p>
                <strong>{movie.title}</strong>
              </p>

              <p>
                {movie.description || "작품 소개를 준비 중입니다."}
              </p>

              <p>
                <strong>장르:</strong> {movie.genre}
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default Hero;