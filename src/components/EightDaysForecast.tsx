import { FaDroplet } from "react-icons/fa6";
import "../styles/EightDaysForecast.css";
import type React from "react";

interface Props {}

const EightDaysForecast: React.FC<Props> = ({}) => {
  return (
    <>
      <h3>Eight-day forecast</h3>
      <div className="week-container">
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
          <div className="precipitation">
            <span>10 mm/h</span>
            <FaDroplet />
          </div>
        </div>
      </div>
    </>
  );
};

export default EightDaysForecast;
