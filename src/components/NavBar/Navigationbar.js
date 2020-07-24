import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="Navbar">
      <a>
        <NavLink exact to="/">
          Home
        </NavLink>
      </a>
      <a>
        <NavLink exact to="/about">
          About us
        </NavLink>
      </a>
      <a>
        <NavLink exact to="/discover/:title">
          Discover Movies
        </NavLink>
      </a>
      <a>
        <NavLink exact to="/discover/detail/:imdb_id">
          Movie details
        </NavLink>
      </a>
    </div>
  );
}
