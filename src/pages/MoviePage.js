import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const params = useParams();

  const [specificMovie, setSpecificMovie] = useState({});

  useEffect(() => {
    async function movieSomething(movieid) {
      console.log(movieid);
      const url = `https://omdbapi.com/?apikey=32c1b1ff&i=${movieid}`;
      const data = await axios.get(url);
      console.log("data", data.data);
      setSpecificMovie(data.data);
    }
    movieSomething(params.imdb_id);
  }, []);

  // import json van omdb
  // data laten zien van een specifieke film

  console.log("test", specificMovie);

  return (
    <div>
      <h3>{specificMovie.Title}</h3>
      <img src={specificMovie.Poster} />
      <p>
        {" "}
        <h5>Actors:</h5> {specificMovie.Actors}
      </p>
      <p>
        {" "}
        <h5>Plot:</h5> {specificMovie.Plot}
      </p>
      <p>
        {" "}
        <h5>Runtime: </h5>
        {specificMovie.Runtime}
      </p>
      <p>
        {" "}
        <h5>Awards:</h5> {specificMovie.Awards}
      </p>
      <p>
        {" "}
        <h5>Box Office:</h5> {specificMovie.BoxOffice}
      </p>
      <p>
        {" "}
        <h5>Release year:</h5> {specificMovie.Year}
      </p>
      <p>
        {" "}
        <h5>Genre:</h5> {specificMovie.Genre}
      </p>
      <p>
        {" "}
        <h5>IMDB Rating:</h5> {specificMovie.imdbRating}
      </p>
      <p>
        {" "}
        <h5>Rated:</h5> {specificMovie.Rated}
      </p>
    </div>
  );
}
