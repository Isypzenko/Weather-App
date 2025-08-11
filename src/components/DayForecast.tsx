import React from "react";
import "../styles/DayForecast.css";
import ForecastDetail from "./ForecastDetail";
import type {
  WeatherDescription,
  CurrentWeatherDetail,
} from "../types/weatherTypes";

interface Props {
  temp: number;
  feels_like: number;
  weather_data: WeatherDescription[];
  details: CurrentWeatherDetail | null;
}

const DayForecast: React.FC<Props> = ({
  temp,
  feels_like,
  weather_data,
  details,
}) => {
  return (
    <div className="forecast-container">
      <div className="wrapper-forecast">
        <div className="weather-icon">
          <img
            src={`https://openweathermap.org/img/wn/${"02d"}@2x.png`}
            alt="weather icon"
          />
        </div>
        <div className="weather-temp">
          {temp ? `${Math.round(Number(temp))} °C` : "Error"}
        </div>
        <div className="weather-feel">
          {feels_like ? `${Math.round(Number(feels_like))} °C` : "Error"}
        </div>
        <div className="weather-text">
          {weather_data ? weather_data[0]?.main : "Error"}
        </div>
      </div>
      <ForecastDetail details={details}></ForecastDetail>
    </div>
  );
};

export default DayForecast;
