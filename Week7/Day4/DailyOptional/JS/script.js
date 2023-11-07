document.addEventListener("DOMContentLoaded", () => {
  const cityForm = document.getElementById("city-form");
  const city1Lat = document.getElementById("city1-lat");
  const city1Lon = document.getElementById("city1-lon");
  const city2Lat = document.getElementById("city2-lat");
  const city2Lon = document.getElementById("city2-lon");
  const city1Sunrise = document.getElementById("city1-sunrise");
  const city2Sunrise = document.getElementById("city2-sunrise");
  const resultDiv = document.getElementById("result");

  cityForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city1Coords = { lat: city1Lat.value, lon: city1Lon.value };
    const city2Coords = { lat: city2Lat.value, lon: city2Lon.value };

    try {
      const [city1Data, city2Data] = await Promise.all([
        getSunrise(city1Coords),
        getSunrise(city2Coords),
      ]);

      city1Sunrise.textContent = `City 1 Sunrise: ${city1Data.results.sunrise}`;
      city2Sunrise.textContent = `City 2 Sunrise: ${city2Data.results.sunrise}`;

      resultDiv.style.display = "block";
    } catch (error) {
      console.error(error);
    }
  });

  function getSunrise(coords) {
    return fetch(
      `https://api.sunrise-sunset.org/json?lat=${coords.lat}&lng=${coords.lon}`
    )
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
});

// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242
