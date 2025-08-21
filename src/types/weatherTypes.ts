export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface tempWeather {
  day: number;
  min: number;
  max: number;
}

export interface DailyWeather {
  dt: number;
  weather: WeatherDescription[];
  temp: tempWeather;
}

interface HourlyWeatherDetail {
  icon: string;
}

export interface HourlyWeather {
  dt: number;
  temp: string;
  clouds: number;
  wind_speed: number;
  weather: HourlyWeatherDetail[];
}

export interface CurrentWeather {
  temp: number;
  feels_like: number;
  weather: WeatherDescription[];
}

export interface CurrentWeatherDetail {
  pressure: number;
  wind_speed: number;
  uvi: number;
  clouds: number;
  visibility: number;
  humidity: number;
}

export interface ForecastResponse {
  current: CurrentWeather;
}

export interface GeoData {
  lat: number;
  lon: number;
}
