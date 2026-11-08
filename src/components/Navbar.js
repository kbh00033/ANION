import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        ANION
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </button>

      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#home">홈</a>
        </li>

        <li>
          <a href="#movies">최신 애니</a>
        </li>

        <li>
          <a href="#series">극장판</a>
        </li>

        <li>
          <a href="#my-list">내 라이브러리</a>
        </li>

      </ul>

      <div className="navbar-profile">
        <i className="bi bi-person-circle"></i>
      </div>

    </nav>
  );
}

export default Navbar;