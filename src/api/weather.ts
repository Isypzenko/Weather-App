const API_KEY = "d9d3375df691d502162c65d7fe54b42d"; //

export async function geoCodingByCityName(city: string) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    city
  )}&limit=1&appid=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Ошибка при геокодировании города");
  }

  const data = await response.json();

  if (data.length === 0) {
    throw new Error("Город не найден");
  }
  const { lat, lon } = data[0];
  return { lat, lon };
}

export async function getForecast(lat: number, lon: number, flag?: string) {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,${flag},alerts&units=metric&lang=ru&appid=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  if (data.length === 0) {
    throw new Error("ошибка при получении погоды");
  } else return data;
}
