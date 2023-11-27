// FavoritesPage.js
import React, { useState } from "react";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (city) => {
    setFavorites([...favorites, city]);
  };

  return (
    <div>
      <h2>Favorites Page</h2>
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>
            {city.LocalizedName}, {city.Country.LocalizedName}
          </li>
        ))}
      </ul>
      <p>Add a city to favorites from the Weather page.</p>
    </div>
  );
}

export default FavoritesPage;
