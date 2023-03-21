import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

function Romance() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?genre=Romance")
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
          </div>
        </div>
      ))}
    </>
  );
}

export default Romance;

//sort only history genre