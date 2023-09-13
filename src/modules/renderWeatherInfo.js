const YANDEX_API_KEY = '4f68df8e-cab0-4360-8ebb-d6a2b6c2248c';

/**
 *
 * @param el - an element is passed in which all components will be paint
 * @param data - weather data received in the module getWeather
 */
export function renderWeatherInfo(el, data) {
  const mapUrl = `https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10`;

  el.innerHTML = `
    <h2>${data.name}</h2>
    <p class="text-weather">${data.weather[0].main} - ${data.weather[0].description}</p>
    <img class="icon-weather" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>
    <p class="text-temp">Температура: ${data.main.temp} °C</p>
    <img class="map-weather" src="${mapUrl}" alt="Yandex map"></img>
  `;
}
