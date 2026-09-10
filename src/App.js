import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import MovieDetails from "./components/MovieDetails";

import {
  trendingMovies,
  topRatedMovies,
  actionMovies,
  comedyMovies,
} from "./data/movies";

import "./App.css";

function App() {
  const [myList, setMyList] = useState([]);

  const toggleMyList = (movie) => {
    setMyList((currentList) => {
      const exists = currentList.some(
        (item) => item.id === movie.id
      );

      if (exists) {
        return currentList.filter(
          (item) => item.id !== movie.id
        );
      }

      return [...currentList, movie];
    });
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route
          path="/"
          element={
            <div className="app">

              <Hero />

              <MovieRow
                title="Trending Now"
                movies={trendingMovies}
                myList={myList}
                toggleMyList={toggleMyList}
              />

              <MovieRow
                title="Top Rated"
                movies={topRatedMovies}
                myList={myList}
                toggleMyList={toggleMyList}
              />

              <MovieRow
                title="Action Movies"
                movies={actionMovies}
                myList={myList}
                toggleMyList={toggleMyList}
              />

              <MovieRow
                title="Comedy Movies"
                movies={comedyMovies}
                myList={myList}
                toggleMyList={toggleMyList}
              />

             
              <section className="my-list-section" id="my-list">
                <h2>My List</h2>

                {myList.length === 0 ? (
                  <p className="empty-list">
                    No movies added to your list yet.
                  </p>
                ) : (
                  <div className="my-list-container">
                    {myList.map((movie) => (
                      <div
                        className="my-list-card"
                        key={movie.id}
                      >
                        <img
                          src={movie.image}
                          alt={movie.title}
                        />

                        <div className="my-list-info">
                          <h3>{movie.title}</h3>

                          <button
                            onClick={() => toggleMyList(movie)}
                          >
                            <i className="bi bi-check-circle-fill"></i>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

            </div>
          }
        />

        
        <Route
          path="/movie/:id"
          element={
            <MovieDetails
              myList={myList}
              toggleMyList={toggleMyList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;