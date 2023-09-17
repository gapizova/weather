/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** *** */ (() => {
  // webpackBootstrap
  /** *** */

  /** *** */ const __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles/style.css':
      /*! ********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \******************************************************************* */
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \'Montserrat\', sans-serif;\n  font-size: 1rem;\n  line-height: 1.2;\n}\n\n.container {\n  max-width: 14rem;\n  margin: 1em auto;\n  padding: 1em;\n}\n\n#app {\n  display: flex;\n  gap: 0.2rem;\n  flex-wrap: wrap;\n  background: rgb(225,174,238);\n  background: radial-gradient(circle, rgba(225,174,238,1) 0%, rgba(148,187,233,1) 100%);\n  border: 0.01rem solid transparent;\n  border-radius: .5rem;\n}\n\nh1 {\n  padding: 1em 1em 2em 1em;\n  text-align: center;\n  flex-basis: 100%;\n  color: #ffffff;\n  font-size: 2.312rem;\n  font-weight: 700;\n}\n\nform {\n  width: 100%;\n  display: flex;\n  gap: 0.02rem;\n}\n\n.input-form {\n  display: block;\n  width: 20%;\n  height: calc(2rem + 0.02rem);\n  padding: 0.375rem 0.75rem;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0.01rem solid #bdbdbd;\n  border-radius: .25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.input-form:focus {\n  color: #212529;\n  background-color: #ffffff;\n  border-color: #bdbdbd;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);\n}\n\n.input-form::placeholder {\n  color: #212529;\n  opacity: 0.4;\n}\n\n.button-form {\n  display: inline-block;\n  width: 10%;\n  font-family: inherit;\n  font-weight: 400;\n  color: #ffffff;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: #212529;\n  border: 0.01rem solid #bdbdbd;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  border-radius: .25rem;\n  transition: background-color .15s ease-in-out;\n}\n\n.button-form:hover {\n  background-color: #bdbdbd;\n}\n\n.history {\n  order: 1;\n  flex-basis: 48%;\n}\n\n.info {\n  flex-basis: 48%;\n}\n\n.info h2 {\n  color: #ffffff;\n  font-size: 1.25rem;\n}\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js',
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*! **************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \************************************************************* */
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?',
        );

        /***/
      },

    /***/ './src/styles/style.css':
      /*! ******************************!*\
  !*** ./src/styles/style.css ***!
  \***************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://weather/./src/styles/style.css?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?',
        );

        /***/
      },

    /***/ './src/index.js':
      /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");\n/* harmony import */ var _runApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runApp */ "./src/runApp.js");\n\n\n\n\n(0,_runApp__WEBPACK_IMPORTED_MODULE_1__.runApp)(document.getElementById(\'app\'));\n\n\n//# sourceURL=webpack://weather/./src/index.js?',
        );

        /***/
      },

    /***/ './src/modules/displayQueryHistory.js':
      /*! ********************************************!*\
  !*** ./src/modules/displayQueryHistory.js ***!
  \******************************************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayQueryHistory: () => (/* binding */ displayQueryHistory)\n/* harmony export */ });\n/**\n * Displays the last 10 requests on the page\n * @param el - an element is passed in which 10 lasts query will be paint\n * @param arrLocalStorage - 10 lasts query in localStorage\n */\nfunction displayQueryHistory( el, arrLocalStorage) {\n  // Added to section \"history\"\n  el.innerHTML = `\n    <h2>История запросов</h2>\n  `;\n\n  arrLocalStorage.forEach((query) => {\n    const link = document.createElement('a');\n    link.innerText = query;\n    link.setAttribute('href', '#');\n    link.setAttribute('class', 'link');\n\n    const item = document.createElement('p');\n    item.setAttribute('class', 'text-link');\n    item.appendChild(link);\n    el.appendChild(item);\n  });\n}\n\n\n//# sourceURL=webpack://weather/./src/modules/displayQueryHistory.js?",
        );

        /***/
      },

    /***/ './src/modules/displayWeatherApp.js':
      /*! ******************************************!*\
  !*** ./src/modules/displayWeatherApp.js ***!
  \***************************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeatherApp: () => (/* binding */ displayWeatherApp)\n/* harmony export */ });\n/**\n * Preparation of the application interface\n * @param wrapperEl - an element is passed in which all components will be paint\n */\nfunction displayWeatherApp( wrapperEl) {\n  // Added to section "app"\n  wrapperEl.innerHTML = `\n    <h1>Прогноз погоды</h1>\n\n    <form>\n      <input class="input-form" name="cityName" required placeholder="Введите название города" />\n      <button class="button-form" type="submit">Показать</button>\n    </form>\n\n    <section class="history container-history"></section>\n\n    <section class="info container-info"></section>\n  `;\n}\n\n\n//# sourceURL=webpack://weather/./src/modules/displayWeatherApp.js?',
        );

        /***/
      },

    /***/ './src/modules/displayWeatherInfo.js':
      /*! *******************************************!*\
  !*** ./src/modules/displayWeatherInfo.js ***!
  \****************************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeatherInfo: () => (/* binding */ displayWeatherInfo)\n/* harmony export */ });\nconst YANDEX_API_KEY = \'4f68df8e-cab0-4360-8ebb-d6a2b6c2248c\';\n\n/**\n * Displays weather information on the page\n * @param el - an element is passed in which all components will be paint\n * @param data - weather data received in the module getWeather\n */\nfunction displayWeatherInfo( el, data) {\n  const mapUrl = `https://static-maps.yandex.ru/v1?apikey=${YANDEX_API_KEY}&l=map&ll=${data.coord.lon},${data.coord.lat}&z=10`;\n  const dataToday = new Date();\n\n  // Added to section "info"\n  el.innerHTML = `\n    <h2>${data.name}</h2>\n    <p>${dataToday.toLocaleDateString(\'ru-RU\')}</p>\n    <p class="text-weather">${data.weather[0].main}<br>${data.weather[0].description}</p>\n    <img class="icon-weather" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Icon weather"></img>\n    <p class="text-temp">Температура: ${data.main.temp} °C</p>\n    <img class="map-weather" src="${mapUrl}" alt="Yandex map"></img>\n  `;\n}\n\n\n//# sourceURL=webpack://weather/./src/modules/displayWeatherInfo.js?',
        );

        /***/
      },

    /***/ './src/modules/getCurrentCityName.js':
      /*! *******************************************!*\
  !*** ./src/modules/getCurrentCityName.js ***!
  \****************************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentCityName: () => (/* binding */ getCurrentCityName)\n/* harmony export */ });\n/**\n * This function gets the name of the city in which the user is located using IP\n * @returns {Promise<*>} - Returns name of the city\n */\nasync function getCurrentCityName() {\n  const response = await fetch('https://get.geojs.io/v1/ip/geo.json');\n  const data = await response.json();\n\n  return data.city;\n}\n\n\n//# sourceURL=webpack://weather/./src/modules/getCurrentCityName.js?",
        );

        /***/
      },

    /***/ './src/modules/getWeather.js':
      /*! ***********************************!*\
  !*** ./src/modules/getWeather.js ***!
  \********************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nconst API_KEY = '32790d98ad9309fa58462b5dbf53af15';\n\n/**\n * This function receives weather data in the selected city\n * @param cityName\n * @returns {Promise<any>} - Data weather\n */\nasync function getWeather(cityName) {\n  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=${cityName}&appid=${API_KEY}`;\n\n  const response = await fetch(url);\n  return await response.json();\n}\n\n\n//# sourceURL=webpack://weather/./src/modules/getWeather.js?",
        );

        /***/
      },

    /***/ './src/runApp.js':
      /*! ***********************!*\
  !*** ./src/runApp.js ***!
  \********************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   runApp: () => (/* binding */ runApp)\n/* harmony export */ });\n/* harmony import */ var _modules_displayWeatherApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayWeatherApp */ \"./src/modules/displayWeatherApp.js\");\n/* harmony import */ var _modules_displayQueryHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayQueryHistory */ \"./src/modules/displayQueryHistory.js\");\n/* harmony import */ var _modules_getCurrentCityName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getCurrentCityName */ \"./src/modules/getCurrentCityName.js\");\n/* harmony import */ var _modules_getWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getWeather */ \"./src/modules/getWeather.js\");\n/* harmony import */ var _modules_displayWeatherInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/displayWeatherInfo */ \"./src/modules/displayWeatherInfo.js\");\n\n\n\n\n\n\n/**\n * Combining all functions in a single file for collaboration\n * @param el - an element is passed in which all components will be paint\n */\nasync function runApp(el) {\n  (0,_modules_displayWeatherApp__WEBPACK_IMPORTED_MODULE_0__.displayWeatherApp)(el);\n\n  const input = document.querySelector('.input-form');\n  const form = document.querySelector('form');\n  const infoWrapper = document.querySelector('.info');\n  const historyWrapper = document.querySelector('.history');\n  const recentQueries = JSON.parse(localStorage.getItem('recentQueries')) || [];\n\n  /**\n   * Checks the number of elements in the array in the localStorage, if there are 10,\n   * then the first one is deleted and the value from input is added\n   * @param query - The value entered in the input\n   */\n  function addQuery(query) {\n    if (recentQueries.length > 10) {\n      recentQueries.shift();\n    }\n    recentQueries.push(query);\n\n    localStorage.setItem('recentQueries', JSON.stringify(recentQueries));\n  }\n\n  (0,_modules_displayQueryHistory__WEBPACK_IMPORTED_MODULE_1__.displayQueryHistory)(historyWrapper, recentQueries);\n\n  /**\n   * The function calls function displayWeatherInfo and getWeather to display weather information\n   * @param cityName - currrent city name or city name in history or input value\n   */\n  async function finallyRenderWeather(cityName) {\n    try {\n      const weatherData = await (0,_modules_getWeather__WEBPACK_IMPORTED_MODULE_3__.getWeather)(cityName);\n      (0,_modules_displayWeatherInfo__WEBPACK_IMPORTED_MODULE_4__.displayWeatherInfo)(infoWrapper, weatherData);\n    } catch (finallyRenderWeatherError) {\n      console.error({ finallyRenderWeatherError });\n      infoWrapper.innerHTML = 'Возможно введено неверное название города';\n    }\n  }\n\n  const links = document.querySelectorAll('a');\n\n  form.addEventListener('submit', async (ev) => {\n    ev.preventDefault();\n\n    finallyRenderWeather(input.value);\n    addQuery(input.value);\n    (0,_modules_displayQueryHistory__WEBPACK_IMPORTED_MODULE_1__.displayQueryHistory)(historyWrapper, recentQueries);\n    input.value = '';\n  });\n\n  links.forEach((link) => {\n    link.addEventListener('click', async (ev) => {\n      ev.preventDefault();\n      const cityName = link.innerText;\n      finallyRenderWeather(cityName);\n    });\n  });\n\n  const currentLocationName = await (0,_modules_getCurrentCityName__WEBPACK_IMPORTED_MODULE_2__.getCurrentCityName)();\n\n  finallyRenderWeather(currentLocationName);\n}\n\n\n//# sourceURL=webpack://weather/./src/runApp.js?",
        );

        /***/
      },

    /** *** */
  };
  /** ********************************************************************* */
  /** *** */ // The module cache
  /** *** */ const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ // The require function
  /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ if (cachedModule !== undefined) {
      /** *** */ return cachedModule.exports;
      /** *** */
    }
    /** *** */ // Create a new module (and put it into the cache)
    /** *** */ const module = (__webpack_module_cache__[moduleId] = {
      /** *** */ id: moduleId,
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */
    });
    /** *** */
    /** *** */ // Execute the module function
    /** *** */ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /** *** */
    /** *** */ // Return the exports of the module
    /** *** */ return module.exports;
    /** *** */
  }
  /** *** */
  /** ********************************************************************* */
  /** *** */ /* webpack/runtime/compat get default export */
  /** *** */ (() => {
    /** *** */ // getDefaultExport function for compatibility with non-harmony modules
    /** *** */ __webpack_require__.n = (module) => {
      /** *** */ const getter =
        module && module.__esModule
          ? /** *** */ () => module.default
          : /** *** */ () => module;
      /** *** */ __webpack_require__.d(getter, { a: getter });
      /** *** */ return getter;
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/define property getters */
  /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (const key in definition) {
        /** *** */ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /** *** */ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /** *** */
        }
        /** *** */
      }
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/make namespace object */
  /** *** */ (() => {
    /** *** */ // define __esModule on exports
    /** *** */ __webpack_require__.r = (exports) => {
      /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/nonce */
  /** *** */ (() => {
    /** *** */ __webpack_require__.nc = undefined;
    /** *** */
  })();
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ // startup
  /** *** */ // Load entry module and return exports
  /** *** */ // This entry module can't be inlined because the eval devtool is used.
  /** *** */ const __webpack_exports__ = __webpack_require__('./src/index.js');
  /** *** */
  /** *** */
})();
