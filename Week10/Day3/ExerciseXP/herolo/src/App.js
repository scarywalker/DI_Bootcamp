// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WeatherPage from "./WeatherPage";
import FavoritesPage from "./FavoritesPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Weather</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Router>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="/">
            <WeatherPage />
          </Route>
      </Router>
    </div>
  );
}

export default App;
