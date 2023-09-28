import { getWeather } from './getWeather';

describe('testing function getWeather', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ weather: 'sunny', temperature: 25 }),
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetch with the correct URL', async () => {
    const cityName = 'London';
    const API_KEY = '32790d98ad9309fa58462b5dbf53af15';

    await getWeather(cityName);

    const expectedUrl =
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=` +
      `${cityName}&appid=${API_KEY}`;

    expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return the weather data from the response', async () => {
    const cityName = 'London';

    const result = await getWeather(cityName);

    expect(result.weather).toEqual('sunny');
    expect(result.temperature).toEqual(25);
  });
});
