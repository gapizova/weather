import { renderWeatherApp } from './renderWeatherApp.js';

describe('testing function renderWeatherApp', () => {
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    renderWeatherApp(el);
  });

  it('should that all the elements have been paint', () => {
    expect(el.querySelector('h1')).toBeTruthy();
    expect(el.querySelector('.input-form')).toBeTruthy();
    expect(el.querySelector('.button-form')).toBeTruthy();
    expect(el.querySelector('.history')).toBeTruthy();
    expect(el.querySelector('.info')).toBeTruthy();
  });
});
