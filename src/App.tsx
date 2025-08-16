import "./App.css";
import Header from "./components/Header";
import DayForecast from "./components/DayForecast";
import HourlyForecast from "./components/HourlyForecast";
import EightDaysForecast from "./components/EightDaysForecast";
import ErrorWindow from "./components/UI/ErrorWindow";
import { useEffect, useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {
  let [city, setCity] = useState("");
  let { weather, weatherDetails, errorInput } = useWeather(city);
  const makeBigFirstLetter = (city: string): string => {
    if (!city) return "Your Location";
    const regex = /\p{L}+/gu;
    const words = city.match(regex) || [];
    return words
      .map(
        (word) =>
          word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      )
      .join(" ");
  };
  return (
    <>
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
      <HourlyForecast></HourlyForecast>
      <EightDaysForecast></EightDaysForecast>
    </>
  );
}

export default App;
