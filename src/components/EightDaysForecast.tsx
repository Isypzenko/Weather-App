import "../styles/EightDaysForecast.css";
import type React from "react";
import type { DailyWeather } from "../types/weatherTypes";
import {
  dateFormater,
  getFormatDate,
  formatDateOrToday,
} from "../helpers/date-helper";

interface Props {
  data: DailyWeather[] | null;
}

const EightDaysForecast: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <>
      {data?.map((weather: DailyWeather) => {
        const date = formatDateOrToday(weather.dt);
        return (
          <div className="week-container" key={weather.dt}>
            <h5>{date}</h5>
            <div className="week-container-item">
              <div className="week-icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>
              <div className="max-temp">
                {weather.temp.max
                  ? `${Math.round(Number(weather.temp.max))} °C`
                  : "Error"}
              </div>
              <div className="min-temp">
                {weather.temp.min
                  ? `${Math.round(Number(weather.temp.min))} °C`
                  : "Error"}
              </div>
              <div className="description">
                <span>{weather.weather[0].main}</span>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="week-container">
        <h5>Today</h5>
        <div className="week-container-item">
          <div className="week-icon">
            <img
              src={`https://openweathermap.org/img/wn/${"02d"}@2x.png`}
              alt="weather icon"
            />
          </div>
          <div className="max-temp">24 °C</div>
          <div className="min-temp">13 °C</div>
          <div className="description">
            <span></span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default EightDaysForecast;
