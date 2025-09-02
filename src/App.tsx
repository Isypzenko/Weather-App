import "./App.css";
import Header from "./components/Header";
import DayForecast from "./components/DayForecast";
import HourlyForecast from "./components/HourlyForecast";
import EightDaysForecast from "./components/EightDaysForecast";
import ErrorWindow from "./components/UI/ErrorWindow";
import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import { Loader } from "./components/UI/Loader.module";
import { makeBigFirstLetter } from "./helpers/letter-formatter";
import type { HourlyWeather } from "./types/weatherTypes";

function App() {
  let [city, setCity] = useState("");
  let { weather, weatherDetails, errorInput, hourly, daily, isLoading } =
    useWeather(city);
  let TwentyFourHours = hourly?.slice(0, 24);

  return (
    <>
      {isLoading && <Loader></Loader>}
      {errorInput && <ErrorWindow></ErrorWindow>}
      <Header
        inputError={errorInput}
        fetchDataCityWeather={setCity}
        label={makeBigFirstLetter(city)}
      ></Header>
      {weather && weatherDetails && !errorInput && (
        <DayForecast
          temp={weather.temp}
          feels_like={weather.feels_like}
          weather_data={weather.weather}
          details={weatherDetails}
        />
      )}
      {TwentyFourHours && !errorInput && <h3>Hourly Forecast</h3>}
      {TwentyFourHours && !errorInput && (
        <div className="row-container scroll">
          {TwentyFourHours &&
            !errorInput &&
            TwentyFourHours.map((hour: HourlyWeather) => (
              <HourlyForecast key={hour.dt} data={hour} />
            ))}
        </div>
      )}
      {daily && !errorInput && <h3>Eight-day forecast</h3>}
      {daily && !errorInput && (
        <div className="row-container row-container--daily scroll">
          <EightDaysForecast data={daily}></EightDaysForecast>
        </div>
      )}
    </>
  );
}

export default App;
