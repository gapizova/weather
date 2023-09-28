import { displayQueryHistory } from './displayQueryHistory.js';

describe('testing function displayQueryHistory', () => {
  let el;
  let arrQuery;
  beforeEach(() => {
    el = document.createElement('div');
    arrQuery = ['1', '2', '3', '4', '5'];
  });

  it('should render element', () => {
    displayQueryHistory(el, arrQuery);
    expect(el.querySelector('h2')).toBeTruthy();
    expect(el.querySelectorAll('.link')).toHaveLength(5);
    expect(el.querySelectorAll('.link')[0].innerText).toBe('1');
    expect(el.querySelectorAll('.link')[1].innerText).toBe('2');
    expect(el.querySelectorAll('.link')[2].innerText).toBe('3');
    expect(el.querySelectorAll('.link')[3].innerText).toBe('4');
    expect(el.querySelectorAll('.link')[4].innerText).toBe('5');
  });
});
