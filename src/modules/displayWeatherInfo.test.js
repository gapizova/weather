import { displayWeatherInfo } from './displayWeatherInfo.js';

describe('testing function displayWeatherInfo', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render weather information correctly', () => {
    const data = {
      name: 'London',
      weather: [
        {
          main: 'Cloudy',
          description: 'Overcast clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 15,
      },
      coord: {
        lon: 0,
        lat: 0,
      },
    };

    displayWeatherInfo(el, data);

    expect(el.innerHTML).toMatchSnapshot();
  });

  it('should set the correct src attribute for the weather icon image', () => {
    const data = {
      name: 'London',
      weather: [
        {
          main: 'Sunny',
          description: 'Clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 25,
      },
      coord: {
        lon: 0,
        lat: 0,
      },
    };

    displayWeatherInfo(el, data);

    const iconImage = el.querySelector('.icon-weather');
    expect(iconImage.src).toContain(data.weather[0].icon);
  });

  it('should set the correct src attribute for the map image', () => {
    const data = {
      name: 'London',
      weather: [
        {
          main: 'Sunny',
          description: 'Clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 25,
      },
      coord: {
        lon: 0,
        lat: 0,
      },
    };

    displayWeatherInfo(el, data);

    const expectedUrl =
      `https://static-maps.yandex.ru/v1?apikey=${process.env.YANDEX_API_KEY}&l=map&ll=` +
      `${data.coord.lon},${data.coord.lat}&z=10`;

    const mapImage = el.querySelector('.map-weather');
    expect(mapImage.src).toBe(expectedUrl);
  });
});
