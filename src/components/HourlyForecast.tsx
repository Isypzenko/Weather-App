import "../styles/HourlyForecast.css";
import type React from "react";
import { FaDroplet } from "react-icons/fa6";
import { LuWind } from "react-icons/lu";
interface Props {}

const HourlyForecast: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="hourly-container">
        <div className="hourly-container-item">
          <div className="hourly-time">10:00</div>
          <div className="hourly-icon">
            <img
              src={`https://openweathermap.org/img/wn/${"02d"}@2x.png`}
              alt="weather icon"
            />
          </div>
          <div className="hourly-temp">24 °C</div>
          <div className="hourly-precipitation">
            <span>10 mm/h</span>
            <FaDroplet />
          </div>
          <div className="hourly-wind">
            <span>15 km/h</span> <LuWind />
          </div>
        </div>
      </div>
    </>
  );
};

export default HourlyForecast;
