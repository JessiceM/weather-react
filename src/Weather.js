import React from "react";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1>{props.city}</h1>
      <div className="border border-4 border-primary rounded-circle">
        <div className="weather">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="weather"
            id="icon"
          />
        </div>

        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <h2>{props.temp}</h2>
          </div>
          <div className="col-md-auto">
            <span className="units">°C</span>
          </div>
        </div>

        <ul className="weatherDesc">
          <li id="description">{props.description}</li>
          <li>
            Wind: {props.wind}
            <span id="wind"></span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
