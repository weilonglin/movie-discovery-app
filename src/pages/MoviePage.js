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

  return <div>{specificMovie.Actors}</div>;
}
