import React from "react";

export default function Forecast(props) {
  return (
    <div className="col">
      <div className="Forecast">
        <div>{props.day}</div>
        ☀️
        <div> {props.temp}°</div>
      </div>
    </div>
  );
}
