import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DiscoverMoviesPage.scss";
import { Switch, Route, Link, useParams } from "react-router-dom";
import Search from "./Search";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovies] = useState(["Search for movies!"]);
  const params = useParams();

  useEffect(() => {
    const search = async (title) => {
      const queryParam = encodeURIComponent(searchText);

      const url = `https://omdbapi.com/?apikey=32c1b1ff&s=${title}`;
      const { data } = await axios.get(url);
      console.log("Success!", data);

      const showMovies = data.Search;
      console.log(showMovies);
      setMovies(showMovies);
    };
    search(params.title);
  }, [params]);

  const titles = movies.map((movie) => (
    <Link to={`/discover/${movie.Title}/${movie.imdbID}`}>
      <div className="card shadow-sm mb-4 my-5">
        <div class="card-body pb-0">
          <h5 class="card-title">{movie.Title}</h5>
          <ul className="list-group list-group-flush">
            <h6 class="card-subtitle mb-3 text-primary">{movie.Year}</h6>
            <p className="mb-4">{movie.imdbID}</p>
          </ul>

          <img src={movie.Poster} />
        </div>
      </div>
    </Link>
  ));

  const content = titles.length ? titles : "Loading...";

  return (
    <div>
      <p>
        <Search />
        <div>{content}</div>
      </p>
    </div>
  );
}
