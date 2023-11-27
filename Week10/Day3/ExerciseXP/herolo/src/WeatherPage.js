// WeatherPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const AUTOCOMPLETE_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/search";
const CURRENT_WEATHER_URL =
  "http://dataservice.accuweather.com/currentconditions/v1/";
const FORECAST_URL =
  "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";

function WeatherPage() {
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (selectedLocation) {
      fetchCurrentWeather(selectedLocation.Key);
      fetchForecast(selectedLocation.Key);
    }
  }, [selectedLocation]);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query.length >= 3) {
      try {
        const response = await axios.get(AUTOCOMPLETE_URL, {
          params: {
            apiKey: API_KEY,
            q: query,
          },
        });
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    } else {
      setLocations([]);
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSearch("");
    setLocations([]);
  };

  const fetchCurrentWeather = async (locationKey) => {
    try {
      const response = await axios.get(`${CURRENT_WEATHER_URL}${locationKey}`, {
        params: {
          apiKey: API_KEY,
        },
      });
      setCurrentWeather(response.data[0]);
    } catch (error) {
      console.error("Error fetching current weather:", error);
    }
  };

  const fetchForecast = async (locationKey) => {
    try {
      const response = await axios.get(`${FORECAST_URL}${locationKey}`, {
        params: {
          apiKey: API_KEY,
        },
      });
      setForecast(response.data.DailyForecasts);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };

  return (
    <div>
      <h2>Weather Page</h2>
      <input
        type="text"
        placeholder="Search for a city"
        value={search}
        onChange={handleSearchChange}
      />
      {locations.length > 0 && (
        <ul>
          {locations.map((location) => (
            <li
              key={location.Key}
              onClick={() => handleLocationSelect(location)}
            >
              {location.LocalizedName}, {location.Country.LocalizedName}
            </li>
          ))}
        </ul>
      )}
      {currentWeather && (
        <div>
          <h3>Current Weather</h3>
          <p>{currentWeather.WeatherText}</p>
          <p>Temperature: {currentWeather.Temperature.Metric.Value}&deg;C</p>
        </div>
      )}
      {forecast && (
        <div>
          <h3>5-Day Forecast</h3>
          <ul>
            {forecast.map((day) => (
              <li key={day.Date}>
                {new Date(day.Date).toLocaleDateString()}: {day.Day.IconPhrase}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
