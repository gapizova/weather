/**
 * Displays the last 10 requests on the page
 * @param el - an element is passed in which 10 lasts query will be paint
 * @param arrLocalStorage - 10 lasts query in localStorage
 */
export function displayQueryHistory(el, arrLocalStorage) {
  // Added to section "history"
  el.innerHTML = `
    <h2>История запросов</h2>
  `;

  arrLocalStorage.forEach((itemQuery) => {
    const link = document.createElement('a');
    link.innerText = itemQuery;
    link.setAttribute('href', '#');
    link.setAttribute('class', 'link');

    const item = document.createElement('p');
    item.setAttribute('class', 'text-link');
    item.appendChild(link);
    el.appendChild(item);
  });
}
