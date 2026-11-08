import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import MovieDetails from "./components/MovieDetails";

import { trendingMovies } from "./data/movies";

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
                title="이런 애니는 어떠신가요?"
                movies={trendingMovies}
                myList={myList}
                toggleMyList={toggleMyList}
              />

             
              <section className="my-list-section" id="my-list">
                <h2>나의 라이브러리</h2>

                {myList.length === 0 ? (
                  <p className="empty-list">
                    +버튼을 눌러서 나만의 라이브러리를 만들어 보세요!
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
                            라이브러리에서 제거
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