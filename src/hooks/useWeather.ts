import { useEffect, useState } from "react";
import { geoCodingByCityName } from "../api/weather";
import { getForecast } from "../api/weather";
import type {
  CurrentWeather,
  CurrentWeatherDetail,
  HourlyWeather,
  DailyWeather,
} from "../types/weatherTypes";

interface UseWeatherResult {
  weather: CurrentWeather | null;
  weatherDetails: CurrentWeatherDetail | null;
  errorInput: boolean;
  hourly: HourlyWeather[] | undefined;
  daily: DailyWeather[] | null;
  isLoading: boolean;
}

export function useWeather(city: string): UseWeatherResult {
  let [isLoading, setLoading] = useState<boolean>(false);
  let [weather, setWeather] = useState<CurrentWeather | null>(null);
  let [daily, setDaily] = useState<DailyWeather[] | null>(null);
  let [hourly, setHourly] = useState<HourlyWeather[]>();
  let [weatherDetails, setWeatherDetails] =
    useState<CurrentWeatherDetail | null>(null);
  let [errorInput, setErrorInput] = useState<boolean>(false);
  useEffect(() => {
    if (!city) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await geoCodingByCityName(city);
        setErrorInput(false);
        return data;
      } catch (error: any) {
        setErrorInput(true);
        setLoading(false);
        throw new Error(error.message);
      }
    };
    const res = fetchData();
    setLoading(true);
    res
      .then((res) => getForecast(res.lat, res.lon))
      .then((res) => {
        setWeather(res.current);
        setHourly(res.hourly);
        setDaily(res.daily);
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
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [city]);

  return { weather, weatherDetails, errorInput, hourly, daily, isLoading };
}
