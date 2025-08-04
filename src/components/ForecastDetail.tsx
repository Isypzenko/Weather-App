import React from "react";
import "../styles/ForecastDetail.css";
import { FaDroplet } from "react-icons/fa6";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { BsFillCloudsFill } from "react-icons/bs";
import { MdOutlineVisibility } from "react-icons/md";
interface Props {}

const ForecastDetail: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="wrapper">
        <div className="weather-precip">
          <div className="data-container">
            <FaDroplet />
            <span>3 mm</span>
          </div>
          <span>Precipitation</span>
        </div>
        <div className="weather-wind">
          <div className="data-container">
            <LuWind />
            <span>30 m/sec</span>
          </div>
          <span>Wind</span>
        </div>
        <div className="weather-humidity">
          <div className="data-container">
            <WiHumidity />
            <span>39 %</span>
          </div>
          <span>Humidity</span>
        </div>
        <div className="weather-uv">
          <div className="data-container">
            <TbUvIndex />
            <span>4</span>
          </div>
          <span>Index UV</span>
        </div>
        <div className="weather-clouds">
          <div className="data-container">
            <BsFillCloudsFill></BsFillCloudsFill>
            <span>43 %</span>
          </div>
          <span>Clouds</span>
        </div>
        <div className="weather-visibility">
          <div className="data-container">
            <MdOutlineVisibility />
            <span>10000 m</span>
          </div>
          <span>Visibility</span>
        </div>
      </div>
    </>
  );
};

export default ForecastDetail;
