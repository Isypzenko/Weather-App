import React from "react";
import "../styles/ForecastDetail.css";
import { WiBarometer } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { BsFillCloudsFill } from "react-icons/bs";
import { MdOutlineVisibility } from "react-icons/md";

import type { CurrentWeatherDetail } from "../types/weatherTypes";
interface Props {
  details: CurrentWeatherDetail | null;
}

const ForecastDetail: React.FC<Props> = ({ details }) => {
  return (
    <>
      <div className="wrapper">
        <div className="weather-precip">
          <div className="data-container">
            <WiBarometer />
            <span>{details?.pressure} hPa</span>
          </div>
          <span>Pressure</span>
        </div>
        <div className="weather-wind">
          <div className="data-container">
            <LuWind />
            <span>{details?.wind_speed} m/sec</span>
          </div>
          <span>Wind</span>
        </div>
        <div className="weather-humidity">
          <div className="data-container">
            <WiHumidity />
            <span>{details?.humidity} %</span>
          </div>
          <span>Humidity</span>
        </div>
        <div className="weather-uv">
          <div className="data-container">
            <TbUvIndex />
            <span>{details?.uvi}</span>
          </div>
          <span>Index UV</span>
        </div>
        <div className="weather-clouds">
          <div className="data-container">
            <BsFillCloudsFill></BsFillCloudsFill>
            <span>{details?.clouds} %</span>
          </div>
          <span>Clouds</span>
        </div>
        <div className="weather-visibility">
          <div className="data-container">
            <MdOutlineVisibility />
            <span>{details?.visibility} m</span>
          </div>
          <span>Visibility</span>
        </div>
      </div>
    </>
  );
};

export default ForecastDetail;
