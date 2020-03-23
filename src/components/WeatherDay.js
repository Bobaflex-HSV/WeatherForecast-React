import React from "react";
import "../styles/styles.css";
import "../styles/WeatherDay.css";

export default function WeatherDay({
  dayOfWeek,
  minTemp,
  maxTemp,
  weatherIcon
}) {
  return (
    <div className="weatherday-wrapper">
      <div className="dayofweek">{dayOfWeek}</div>
      <img src={weatherIcon} alt="myImage" />
      <div>
        {maxTemp}&#8451; / {minTemp}&#8451;
      </div>
    </div>
  );
}
