/**
 * Preparation of the application interface
 * @param wrapperEl - an element is passed in which all components will be paint
 */
export function displayWeatherApp(wrapperEl) {
  // Added to section "app"
  wrapperEl.innerHTML = `
    <h1>Прогноз погоды</h1>

    <form>
      <input class="input-form" name="cityName" required placeholder="Введите название города" />
      <button class="button-form" type="submit">Показать</button>
    </form>

    <section class="history container-history"></section>

    <section class="info container-info"></section>
  `;
}
