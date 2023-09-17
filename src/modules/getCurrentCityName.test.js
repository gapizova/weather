import { getCurrentCityName } from './getCurrentCityName.js';

describe('testing function getCurrentCityName', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ city: 'Moscow' }),
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetch with the correct URL', async () => {
    await getCurrentCityName();
    expect(global.fetch).toHaveBeenCalledWith(
      'https://get.geojs.io/v1/ip/geo.json',
    );
  });

  it('should return the city name from the response', async () => {
    const result = await getCurrentCityName();
    expect(result).toEqual('Moscow');
  });
});
