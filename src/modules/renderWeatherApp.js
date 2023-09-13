export function renderWeatherApp(wrapperEl) {
  wrapperEl.innerHTML = `
    <h1>Прогноз погоды</h1>

    <form>
      <input class="input-form" name="cityName" required autofocus />
      <button class="button-form" type="submit">Показать</button>
    </form>

    <div class="history"></div>

    <div class="info"></div>
  `;
}
