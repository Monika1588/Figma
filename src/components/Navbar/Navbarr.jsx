import React from "react";
import "./Navbarr.css";

function Navbarr() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div className="nav-left">
          <img src="/icons/pet 1.svg" alt="logo" className="logo" />
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Blog</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </nav>

        <div className="nav-actions">
          <img src="/icons/bell-outline.svg" alt="fav" className="icon" />
          <img src="/icons/person-outline.svg" alt="user" className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Navbarr;