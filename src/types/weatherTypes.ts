export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
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
