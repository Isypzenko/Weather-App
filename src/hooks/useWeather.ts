import { geoCodingByCityName } from "../api/weather";
import { getForecast } from "../api/weather";
import { useQuery } from "@tanstack/react-query";
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
  const geoQuery = useQuery({
    queryKey: ["geoCoding", city],
    queryFn: () => geoCodingByCityName(city),
    enabled: city.trim().length > 0,
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });

  const forecastQuery = useQuery({
    queryKey: ["forecast", geoQuery.data?.lat, geoQuery.data?.lon],
    queryFn: () => getForecast(geoQuery.data!.lat, geoQuery.data!.lon),
    enabled: Boolean(geoQuery.data),
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  const isLoading = geoQuery.isLoading || forecastQuery.isLoading;
  const errorInput = geoQuery.isError || forecastQuery.isError;
  const data = forecastQuery.data;

  const weather = data?.current ?? null;
  const weatherDetails = data
    ? {
        pressure: data.current.pressure,
        humidity: data.current.humidity,
        wind_speed: data.current.wind_speed,
        uvi: data.current.uvi,
        clouds: data.current.clouds,
        visibility: data.current.visibility,
      }
    : null;

  const hourly = data?.hourly ?? null;
  const daily = data?.daily ?? null;

  return { weather, weatherDetails, errorInput, hourly, daily, isLoading };
}
