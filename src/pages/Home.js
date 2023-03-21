import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="content">
      <form>
        <input></input>
        <button>Search</button>
      </form>
      <nav>
        <button className="dropbtn">
          <Link to="/" className="dropbtn">
            Home
          </Link>
        </button>
        <div className="dropdown">
          <button className="dropbtn">Genres</button>

          <div className="dropdown-content">
            <Link to="/movie/genre/action">Action</Link>
            <Link to="/movie/genre/animation">Animation</Link>
            <Link to="/movie/genre/comedy">Comedy</Link>
            <Link to="/movie/genre/history">History</Link>
            <Link to="/movie/genre/horror">Horror</Link>
            <Link to="/movie/genre/romance">Romance</Link>
            <Link to="/movie/genre/sci-fi">Sci-Fi</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Search by</button>

          <div className="dropdown-content">
            <Link to="/movie/recent">New Releases</Link>
            <Link to="/movie/rating">Ratings</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
