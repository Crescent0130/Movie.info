import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

function History() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?genre=History")
      .then((response) => response.json())
      .then((json) => setMovie(json.data.movies));
  }, []);

  return (
    <>
      {movie.map((movie) => (
        <div key={movie.id} className="info">
          <img
            className="image"
            src={movie.medium_cover_image}
            alt={movie.title}
          ></img>
          <div className="description">
            <h2 className="title">
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </h2>
            <p className="summary">
              {movie.summary.length > 200
                ? movie.summary.slice(0, 200)
                : movie.summary}
              ...
            </p>
            <ul>
              {movie.genres.map((g) => (
                <li className="genres" key={movie.id}>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default History;

//sort only history genre
