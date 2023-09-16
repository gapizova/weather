/**
 * This function gets the name of the city in which the user is located using IP
 * @returns {Promise<*>} - Returns name of the city
 */
export async function getCurrentCityName() {
  const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
  const data = await response.json();

  return data.city;
}
