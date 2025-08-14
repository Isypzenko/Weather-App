import "./App.css";
import Header from "./components/Header";
import DayForecast from "./components/DayForecast";
import HourlyForecast from "./components/HourlyForecast";
import EightDaysForecast from "./components/EightDaysForecast";
import ErrorWindow from "./components/UI/ErrorWindow";
import { useEffect, useState } from "react";
import { geoCodingByCityName, getForecast } from "./api/weather";
import type {
  CurrentWeatherDetail,
  CurrentWeather,
} from "./types/weatherTypes";

function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState<CurrentWeather>();
  let [weatherDetails, setWeatherDetails] =
    useState<CurrentWeatherDetail | null>(null);
  let [errorInput, setErrorInput] = useState<boolean>(false);

  useEffect(() => {
    if (!city) return;
    const fetchData = async () => {
      try {
        const data = await geoCodingByCityName(city);
        setErrorInput(false);
        return data;
      } catch (error: any) {
        setErrorInput(true);
        throw new Error(error.message);
      }
    };
    const res = fetchData();
    res
      .then((res) => getForecast(res.lat, res.lon))
      .then((res) => {
        setWeather(res.current);

        const { pressure, humidity, wind_speed, uvi, clouds, visibility } =
          res.current;
        const detailsObj: CurrentWeatherDetail = {
          pressure,
          wind_speed,
          uvi,
          clouds,
          visibility,
          humidity,
        };
        setWeatherDetails(detailsObj);
      });
  }, [city]);
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
