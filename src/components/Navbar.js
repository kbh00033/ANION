import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        NETFLIX
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </button>

      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#movies">Movies</a>
        </li>

        <li>
          <a href="#series">Series</a>
        </li>

        <li>
          <a href="#my-list">My List</a>
        </li>

      </ul>

      <div className="navbar-profile">
        <i className="bi bi-person-circle"></i>
      </div>

    </nav>
  );
}

export default Navbar;