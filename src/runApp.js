import { displayWeatherApp } from './modules/displayWeatherApp';
import { displayQueryHistory } from './modules/displayQueryHistory';
import { getCurrentCityName } from './modules/getCurrentCityName';
import { getWeather } from './modules/getWeather';
import { displayWeatherInfo } from './modules/displayWeatherInfo';

/**
 * Combining all functions in a single file for collaboration
 * @param el - an element is passed in which all components will be paint
 */
export async function runApp(el) {
  displayWeatherApp(el);

  const input = document.querySelector('.input-form');
  const form = document.querySelector('form');
  const infoWrapper = document.querySelector('.info');
  const historyWrapper = document.querySelector('.history');
  const recentQueries = JSON.parse(localStorage.getItem('recentQueries')) || [];

  /**
   * Checks the number of elements in the array in the localStorage, if there are 10,
   * then the first one is deleted and the value from input is added
   * @param query - The value entered in the input
   */
  function addQuery(query) {
    if (recentQueries.length > 10) {
      recentQueries.shift();
    }
    recentQueries.push(query);

    localStorage.setItem('recentQueries', JSON.stringify(recentQueries));
  }

  displayQueryHistory(historyWrapper, recentQueries);

  /**
   * The function calls function displayWeatherInfo and getWeather to display weather information
   * @param cityName - currrent city name or city name in history or input value
   */
  async function finallyRenderWeather(cityName) {
    try {
      const weatherData = await getWeather(cityName);
      displayWeatherInfo(infoWrapper, weatherData);
    } catch (finallyRenderWeatherError) {
      console.error({ finallyRenderWeatherError });
      infoWrapper.innerHTML = 'Возможно введено неверное название города';
    }
  }

  const links = document.querySelectorAll('a');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    finallyRenderWeather(input.value);
    addQuery(input.value);
    displayQueryHistory(historyWrapper, recentQueries);
    input.value = '';
  });

  links.forEach((link) => {
    link.addEventListener('click', async (ev) => {
      ev.preventDefault();
      const cityName = link.innerText;
      finallyRenderWeather(cityName);
    });
  });

  const currentLocationName = await getCurrentCityName();

  finallyRenderWeather(currentLocationName);
}
