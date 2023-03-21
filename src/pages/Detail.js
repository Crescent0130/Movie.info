import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);
  function getMovie() {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovie(json.data.movie);
      });
  }
  return (
    <div className="whole">
      <img
        className="backimg"
        src={movie.background_image}
        alt={movie.title}
      ></img>
      <img
        className="images"
        src={movie.medium_cover_image}
        alt={movie.title}
      ></img>
      <div>
        <h2 className="idtitle">{movie.title}</h2>
        <h3 className="idinfo">
          {movie.year} &#x2022; {movie.runtime}m &#x2022; IMDB rating:{" "}
          {movie.rating}
        </h3>
      </div>
      <div>
        <p className="summaries">{movie.description_intro}</p>
      </div>
    </div>
  );
}

export default Detail;
