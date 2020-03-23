import React from "react";
import "../styles/styles.css";
import "../styles/WeatherForecast.css";
import "../styles/WeatherDay.css";
import WeatherDay from "./WeatherDay";

export default function WeatherForecast() {
  const fakeWeather = [
    {
      day: "Monday",
      min: 0,
      max: 17,
      image: "/images/snowy.png"
    },
    {
      day: "Tuesday",
      min: 0,
      max: 17,
      image: "/images/cloudy.png"
    },
    {
      day: "Wednesday",
      min: 0,
      max: 17,
      image: "/images/rainy.png"
    },
    {
      day: "Thursday",
      min: 0,
      max: 17,
      image: "/images/cloudy.png"
    },
    {
      day: "Friday",
      min: 10,
      max: 25,
      image: "/images/sunny.png"
    }
  ];

  const getWeatherForecast = fakeWeather.map((element, index) => {
    return (
      <WeatherDay
        key={index}
        dayOfWeek={element.day}
        minTemp={element.min}
        maxTemp={element.max}
        weatherIcon={element.image}
      />
    );
  });

  return (
    <div>
      <div className="forecast-wrapper">{getWeatherForecast}</div>
    </div>
  );
}
