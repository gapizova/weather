const API_KEY = '32790d98ad9309fa58462b5dbf53af15';

/**
 * This function receives weather data in the selected city
 * @param cityName
 * @returns {Promise<any>} - Data weather
 */
export async function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=${cityName}&appid=${API_KEY}`;

  const response = await fetch(url);
  return await response.json();
}
