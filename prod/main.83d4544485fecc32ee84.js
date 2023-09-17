(() => {
  'use strict';
  var n = {
      237: (n, e, t) => {
        t.d(e, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          n.id,
          '* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: Montserrat, sans-serif;\n  font-size: 1rem;\n  line-height: 1.2;\n}\n\n.container {\n  max-width: 1400px;\n  margin: 1em auto;\n  padding: 1em;\n}\n\n#app {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  background: rgb(225, 174, 238);\n  background: radial-gradient(\n    circle,\n    rgb(225 174 238 / 100%) 0%,\n    rgb(148 187 233 / 100%) 100%\n  );\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\nh1 {\n  padding: 1em 1em 2em;\n  text-align: center;\n  flex-basis: 100%;\n  color: #fff;\n  font-size: 2.312rem;\n  font-weight: 700;\n}\n\nform {\n  width: 100%;\n  display: flex;\n  gap: 2px;\n}\n\n.input-form {\n  display: block;\n  width: 20%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #bdbdbd;\n  border-radius: 0.25rem;\n  transition:\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.input-form:focus {\n  color: #212529;\n  background-color: #fff;\n  border-color: #bdbdbd;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);\n}\n\n.input-form::-moz-placeholder {\n  color: #212529;\n  opacity: 0.4;\n}\n\n.input-form::placeholder {\n  color: #212529;\n  opacity: 0.4;\n}\n\n.button-form {\n  display: inline-block;\n  width: 10%;\n  font-family: inherit;\n  font-weight: 400;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: #212529;\n  border: 1px solid #bdbdbd;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: background-color 0.15s ease-in-out;\n}\n\n.button-form:hover {\n  background-color: #bdbdbd;\n}\n\n.history {\n  order: 1;\n  flex-basis: 48%;\n}\n\n.info {\n  flex-basis: 48%;\n}\n\n.info h2 {\n  color: #fff;\n  font-size: 1.25rem;\n}\n',
          '',
        ]);
        const c = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {',
                    )),
                  (t += n(e)),
                  r && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, r, o, a) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var d = [].concat(n[l]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'
                        .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                        .concat(d[1], '}')),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = '@media '
                          .concat(d[2], ' {')
                          .concat(d[1], '}')),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = '@supports ('
                          .concat(d[4], ') {')
                          .concat(d[1], '}')),
                        (d[4] = o))
                      : (d[4] = ''.concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              l = r.base ? s[0] + r.base : s[0],
              d = a[l] || 0,
              u = ''.concat(l, ' ').concat(d);
            a[l] = d + 1;
            var p = t(u),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: u, updater: m, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), l = 0; l < a.length; l++) {
              var d = t(a[l]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement('style');
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {',
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var a = t.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */',
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      var n = t(379),
        e = t.n(n),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        l = t(216),
        d = t.n(l),
        u = t(589),
        p = t.n(u),
        f = t(237),
        m = {};
      function h(n, e) {
        (n.innerHTML = '\n    <h2>История запросов</h2>\n  '),
          e.forEach((e) => {
            const t = document.createElement('a');
            (t.innerText = e),
              t.setAttribute('href', '#'),
              t.setAttribute('class', 'link');
            const r = document.createElement('p');
            r.setAttribute('class', 'text-link'),
              r.appendChild(t),
              n.appendChild(r);
          });
      }
      (m.styleTagTransform = p()),
        (m.setAttributes = s()),
        (m.insert = i().bind(null, 'head')),
        (m.domAPI = o()),
        (m.insertStyleElement = d()),
        e()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      !(async function (n) {
        document.getElementById('app').innerHTML =
          '\n    <h1>Прогноз погоды</h1>\n\n    <form>\n      <input class="input-form" name="cityName" required placeholder="Введите название города" />\n      <button class="button-form" type="submit">Показать</button>\n    </form>\n\n    <section class="history container-history"></section>\n\n    <section class="info container-info"></section>\n  ';
        const e = document.querySelector('.input-form'),
          t = document.querySelector('form'),
          r = document.querySelector('.info'),
          o = document.querySelector('.history'),
          a = JSON.parse(localStorage.getItem('recentQueries')) || [];
        async function i(n) {
          try {
            const e = await (async function (n) {
              const e = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=${n}&appid=32790d98ad9309fa58462b5dbf53af15`,
                t = await fetch(e);
              return await t.json();
            })(n);
            !(function (n, e) {
              const t = `https://static-maps.yandex.ru/v1?apikey=4f68df8e-cab0-4360-8ebb-d6a2b6c2248c&l=map&ll=${e.coord.lon},${e.coord.lat}&z=10`,
                r = new Date();
              n.innerHTML = `\n    <h2>${
                e.name
              }</h2>\n    <p>${r.toLocaleDateString(
                'ru-RU',
              )}</p>\n    <p class="text-weather">${e.weather[0].main}<br>${
                e.weather[0].description
              }</p>\n    <img class="icon-weather" src="https://openweathermap.org/img/wn/${
                e.weather[0].icon
              }@2x.png" alt="Icon weather"></img>\n    <p class="text-temp">Температура: ${
                e.main.temp
              } °C</p>\n    <img class="map-weather" src="${t}" alt="Yandex map"></img>\n  `;
            })(r, e);
          } catch (n) {
            console.error({ finallyRenderWeatherError: n }),
              (r.innerHTML = 'Возможно введено неверное название города');
          }
        }
        h(o, a);
        const c = document.querySelectorAll('a');
        t.addEventListener('submit', async (n) => {
          var t;
          n.preventDefault(),
            i(e.value),
            (t = e.value),
            a.length > 10 && a.shift(),
            a.push(t),
            localStorage.setItem('recentQueries', JSON.stringify(a)),
            h(o, a),
            (e.value = '');
        }),
          c.forEach((n) => {
            n.addEventListener('click', async (e) => {
              e.preventDefault(), i(n.innerText);
            });
          }),
          i(
            await (async function () {
              const n = await fetch('https://get.geojs.io/v1/ip/geo.json');
              return (await n.json()).city;
            })(),
          );
      })();
    })();
})();
