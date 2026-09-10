import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  const [showInfo, setShowInfo] = useState(false);

  const playMovie = () => {
    window.open(
      "https://www.youtube.com/watch?v=b9EkMc79ZSU",
      "_blank"
    );
  };

  return (
    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <p className="hero-tag">
            NETFLIX ORIGINAL
          </p>

          <h1>Stranger Things</h1>

          <p className="hero-description">
            When a young boy disappears, a small town uncovers a mystery
            involving secret experiments, terrifying forces, and a strange
            girl with extraordinary abilities.
          </p>

          <div className="hero-buttons">

            <button
              className="play-btn"
              onClick={playMovie}
            >
              <i className="bi bi-play-fill"></i>
              Play
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
                <strong>Stranger Things</strong>
              </p>

              <p>
                A science-fiction mystery series filled with friendship,
                adventure, supernatural events, and suspense.
              </p>

              <p>
                <strong>Genre:</strong> Sci-Fi, Drama, Thriller
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default Hero;