import "../styles/HourlyForecast.css";
import type React from "react";
import { BsFillCloudsFill } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import type { HourlyWeather } from "../types/weatherTypes";
import { dateFormater, getFormatDate } from "../helpers/date-helper";

interface Props {
  data: HourlyWeather;
}

const HourlyForecast: React.FC<Props> = ({ data }) => {
  const { day: date, month, year, hours, minutes } = dateFormater(data.dt);

  // const getFormatDate = function (date: number): string {
  //   return `${date < 10 ? `0${date}` : date}`;
  // };

  return (
    <>
      <div className="hourly-container">
        <div className="hourly-container-item">
          <div className="hourly-time">
            {getFormatDate(hours)}:{getFormatDate(minutes)}
            <br />
            {getFormatDate(date)}.{getFormatDate(month)}.{getFormatDate(year)}
          </div>
          <div className="hourly-icon">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`}
              alt="weather icon"
            />
          </div>
          <div className="hourly-temp">
            {data.temp ? `${Math.round(Number(data.temp))} °C` : "Error"}
          </div>
          <div className="hourly-clouds">
            <BsFillCloudsFill></BsFillCloudsFill>
            <span>{data?.clouds} %</span>
          </div>
          <div className="hourly-wind">
            <span>{data.wind_speed.toFixed(1)} m/sec</span> <LuWind />
          </div>
        </div>
      </div>
    </>
  );
};

export default HourlyForecast;
