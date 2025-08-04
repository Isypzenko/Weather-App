import React from "react";
import "../styles/DayForecast.css";
import ForecastDetail from "./ForecastDetail";
interface Props {}

const DayForecast: React.FC<Props> = ({}) => {
  return (
    <div className="forecast-container">
      <div className="wrapper-forecast">
        <div className="weather-icon">
          <img
            src={`https://openweathermap.org/img/wn/${"02d"}@2x.png`}
            alt="weather icon"
          />
        </div>
        <div className="weather-temp">21 °C</div>
        <div className="weather-feel">feels like 21 °C</div>
        <div className="weather-text">Partly sunny</div>
      </div>
      <ForecastDetail></ForecastDetail>
    </div>
  );
};

export default DayForecast;
