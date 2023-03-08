import React, { useState } from "react";
import axios from "axios";
import "./Clima.css";

export default function Clima() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6d1ff654fe0899df5181431058e23039";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="clima"
        type="search"
        placeholder="Introduce ciudad..."
        onChange={updateCity}
      />
      <button className="boton-clima ms-3" type="Submit">
        Buscar
      </button>
    </form>
  );

  if (loaded) {
    return (
      <>
        <div className="card border-0 shadow-sm ">
          {form}
          <ul className="list-group">
            <li className="list-group-item">
              {" "}
              <i className="bi bi-thermometer-sun"></i> Temperatura:{" "}
              {Math.round(weather.temperature)}°C
            </li>
            <li className="list-group-item">
              Descripcion: {weather.description}
            </li>
            <li className="list-group-item">
              <i class="bi bi-moisture"></i> Humedad: {weather.humidity}%
            </li>
            <li className="list-group-item">
              {" "}
              <i className="bi bi-wind"></i> Viento: {weather.wind}km/h
            </li>
            <li className="list-group-item text-center">
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return form;
  }
}
