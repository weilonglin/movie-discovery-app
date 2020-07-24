import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DiscoverMoviesPage.scss";
import { Switch, Route, Link, useParams } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovies] = useState(["Search for movies!"]);

  const search = async () => {
    const queryParam = encodeURIComponent(searchText);

    const url = `https://omdbapi.com/?apikey=32c1b1ff&s=${queryParam}`;
    const { data } = await axios.get(url);
    console.log("Success!", data);

    const showMovies = data.Search;
    console.log(showMovies);
    setMovies(showMovies);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <Link to={`/discover/${searchText}`}>
          <button onClick={search}>Search</button>
        </Link>
      </p>
    </div>
  );
}
