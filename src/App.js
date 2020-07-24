import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/Navigationbar";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";

// function App() {
//   return (
//     <main className="container">
//       <div className="row">
//         <NavBar />
//         <Switch>
//           <Route path="/discover" component={DiscoverMoviesPage} />
//           {/* <Route path="/about" component={AboutPage} />
//         <Route path="/" component={HomePage} /> */}
//         </Switch>
//       </div>
//     </main>
//   );
// }

function App() {
  return (
    <main className="container">
      <div className="menuBar"></div>

      <div className="row">
        <div className="col-md-6 col-lg-4">
          <NavBar class="topTitle" sticky="top" />

          <Switch>
            <Route path="/discover/:title/:imdb_id" component={MoviePage} />
            <Route path="/discover/:title" component={DiscoverMoviesPage} />
            <Route path="/" component={Search} />
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default App;
