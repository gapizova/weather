import { renderWeatherApp } from './modules/renderWeatherApp';
import { renderQueryHistory } from './modules/renderQueryHistory';
import { getCurrentCityName } from './modules/getCurrentCityName';
import { getWeather } from './modules/getWeather';
import { renderWeatherInfo } from './modules/renderWeatherInfo';

export async function runApp(el) {
  renderWeatherApp(el);

  const input = document.querySelector('.input-form');
  const form = document.querySelector('form');
  const infoWrapper = document.querySelector('.info');
  const historyWrapper = document.querySelector('.history');
  const recentQueries = JSON.parse(localStorage.getItem('recentQueries')) || [];

  function addQuery(query) {
    if (recentQueries.length > 10) {
      recentQueries.shift();
    }
    recentQueries.push(query);

    localStorage.setItem('recentQueries', JSON.stringify(recentQueries));
  }

  renderQueryHistory(historyWrapper, recentQueries);

  async function finallyRenderWheather(cityName) {
    try {
      const weatherData = await getWeather(cityName);
      renderWeatherInfo(infoWrapper, weatherData);
    } catch (finallyRenderWheatherError) {
      console.error({ finallyRenderWheatherError });
      infoWrapper.innerHTML = 'Возможно введено неверное название города';
    }
  }

  const links = document.querySelectorAll('a');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    finallyRenderWheather(input.value);
    addQuery(input.value);
    renderQueryHistory(historyWrapper, recentQueries);
    input.value = '';
  });

  links.forEach((link) => {
    link.addEventListener('click', async (ev) => {
      ev.preventDefault();
      const cityName = link.innerText;
      finallyRenderWheather(cityName);
    });
  });

  const currentLocationName = await getCurrentCityName();

  finallyRenderWheather(currentLocationName);
}
