import { runApp } from './runApp';
import { displayWeatherApp } from './modules/displayWeatherApp';
import { displayQueryHistory } from './modules/displayQueryHistory';
import { getCurrentCityName } from './modules/getCurrentCityName';
import { getWeather } from './modules/getWeather';
import { displayWeatherInfo } from './modules/displayWeatherInfo';

jest.mock('./modules/displayWeatherApp');
jest.mock('./modules/displayQueryHistory');
jest.mock('./modules/getCurrentCityName');
jest.mock('./modules/getWeather');
jest.mock('./modules/displayWeatherInfo');

describe('testing function runApp', () => {
  let el;
  let input;
  let form;
  let button;
  let infoWrapper;
  let historyWrapper;

  beforeEach(() => {
    el = document.createElement('div');
    input = document.createElement('input');
    form = document.createElement('form');
    button = document.createElement('button');
    infoWrapper = document.createElement('div');
    historyWrapper = document.createElement('div');

    el.setAttribute('id', 'app');
    input.setAttribute('class', 'input-form');
    infoWrapper.setAttribute('class', 'info');
    historyWrapper.setAttribute('class', 'history');

    el.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);
    el.appendChild(infoWrapper);
    el.appendChild(historyWrapper);
    document.body.appendChild(el);

    displayWeatherApp.mockClear();
    displayQueryHistory.mockClear();
    getCurrentCityName.mockClear();
    getWeather.mockClear();
    displayWeatherInfo.mockClear();
  });

  afterEach(() => {
    el.remove();
    form.remove();
  });

  it('should renders weather app', async () => {
    await runApp(el);
    expect(displayWeatherApp).toHaveBeenCalledWith(el);
    expect(el.querySelector('.input-form')).toBeTruthy();
    expect(el.querySelector('form')).toBeTruthy();
    expect(el.querySelector('.info')).toBeTruthy();
    expect(el.querySelector('.history')).toBeTruthy();
  });

  it('should calls getCurrentCityName and getWeather with current location name', async () => {
    const currentLocationName = 'New York';
    getCurrentCityName.mockResolvedValue(currentLocationName);

    await runApp(el);

    expect(getCurrentCityName).toHaveBeenCalled();
    expect(getWeather).toHaveBeenCalledWith(currentLocationName);
  });

  it('calls renderWeatherInfo on form submit', async () => {
    await runApp(el);

    const submitEvent = new Event('submit');
    form.dispatchEvent(submitEvent);

    expect(displayWeatherInfo).toHaveBeenCalled();
  });
});
