/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/repeater.field/ObservableRow.js":
/*!**************************************************!*\
  !*** ./frontend/repeater.field/ObservableRow.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _JetFormBuilderAbstra = JetFormBuilderAbstract,\n    Observable = _JetFormBuilderAbstra.Observable,\n    CalculatedFormula = _JetFormBuilderAbstra.CalculatedFormula;\n\nfunction ObservableRow(parent) {\n  Observable.call(this, parent); // By default we return the number of repeater rows\n\n  this.calc = 1;\n}\n\nObservableRow.prototype = Object.create(Observable.prototype);\nObservableRow.prototype.calc = 1;\n\nObservableRow.prototype.observe = function (root) {\n  Observable.prototype.observe.call(this, root);\n  this.initCalc();\n};\n\nObservableRow.prototype.initCalc = function () {\n  var _node$dataset,\n      _this = this;\n\n  var _this$parent$nodes = _slicedToArray(this.parent.nodes, 1),\n      node = _this$parent$nodes[0];\n\n  var formulaString = (_node$dataset = node.dataset) === null || _node$dataset === void 0 ? void 0 : _node$dataset.formula;\n\n  if (!formulaString) {\n    return;\n  }\n\n  var formula = new CalculatedFormula(formulaString, this);\n\n  formula.setResult = function () {\n    _this.calc = formula.calculate();\n\n    _this.parent.value.notify();\n  };\n\n  formula.setResult();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObservableRow);\n\n//# sourceURL=webpack:///./frontend/repeater.field/ObservableRow.js?");

/***/ }),

/***/ "./frontend/repeater.field/functions.js":
/*!**********************************************!*\
  !*** ./frontend/repeater.field/functions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isRepeater\": () => (/* binding */ isRepeater)\n/* harmony export */ });\n/**\r\n * @param node {HTMLElement}\r\n * @returns {boolean}\r\n */\nfunction isRepeater(node) {\n  return 1 === +node.dataset.repeater;\n}\n\n\n\n//# sourceURL=webpack:///./frontend/repeater.field/functions.js?");

/***/ }),

/***/ "./frontend/repeater.field/input.js":
/*!******************************************!*\
  !*** ./frontend/repeater.field/input.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/repeater.field/functions.js\");\n/* harmony import */ var _ObservableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObservableRow */ \"./frontend/repeater.field/ObservableRow.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar _JetFormBuilderAbstra = JetFormBuilderAbstract,\n    InputData = _JetFormBuilderAbstra.InputData;\n\nfunction RepeaterData() {\n  InputData.call(this);\n  this.buttonNode = false;\n  this.template = null;\n  this.container = null;\n\n  this.isSupported = function (node) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isRepeater)(node);\n  };\n\n  this.valueType = function () {\n    return false;\n  };\n\n  this.addListeners = function () {\n    var _this = this;\n\n    this.buttonNode.addEventListener('click', function () {\n      _this.value.current = [].concat(_toConsumableArray(_this.value.current), [new _ObservableRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_this)]);\n    });\n  };\n\n  this.setValue = function () {\n    var _this$nodes = _slicedToArray(this.nodes, 1),\n        node = _this$nodes[0];\n\n    this.value.current = [];\n\n    var _iterator = _createForOfIteratorHelper(node.querySelectorAll('.jet-form-builder-repeater__row')),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var row = _step.value;\n        var current = new _ObservableRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n        current.observe(row);\n        this.value.current.push(current);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  this.setNode = function (node) {\n    InputData.prototype.setNode.call(this, node);\n    this.nodes = [node];\n    this.name = node.dataset.fieldName;\n    this.rawName = this.name;\n    this.buttonNode = node.querySelector('.jet-form-builder-repeater__new');\n    this.template = node.querySelector('.jet-form-builder-repeater__initial');\n    this.container = node.querySelector('.jet-form-builder-repeater__items');\n  };\n}\n\nRepeaterData.prototype = Object.create(InputData.prototype);\nRepeaterData.prototype.buttonNode = null;\nRepeaterData.prototype.template = null;\nRepeaterData.prototype.container = null;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterData);\n\n//# sourceURL=webpack:///./frontend/repeater.field/input.js?");

/***/ }),

/***/ "./frontend/repeater.field/main.js":
/*!*****************************************!*\
  !*** ./frontend/repeater.field/main.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./frontend/repeater.field/input.js\");\n/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ \"./frontend/repeater.field/signal.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('jet.fb.inputs', 'jet-form-builder/repeater-field', function (inputs) {\n  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]].concat(_toConsumableArray(inputs));\n  return inputs;\n});\naddFilter('jet.fb.signals', 'jet-form-builder/repeater-field', function (signals) {\n  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]].concat(_toConsumableArray(signals));\n  return signals;\n});\n\n//# sourceURL=webpack:///./frontend/repeater.field/main.js?");

/***/ }),

/***/ "./frontend/repeater.field/signal.js":
/*!*******************************************!*\
  !*** ./frontend/repeater.field/signal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/repeater.field/functions.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar BaseSignal = window.JetFormBuilderAbstract.BaseSignal;\n/**\r\n * @property {RepeaterData} input\r\n */\n\nfunction SignalRepeater() {\n  BaseSignal.call(this);\n\n  this.isSupported = function (node, inputData) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isRepeater)(node);\n  };\n\n  this.runSignal = function () {\n    var current = this.input.value.current;\n    this.input.calcValue = 0;\n\n    for (var _i = 0, _Object$entries = Object.entries(current); _i < _Object$entries.length; _i++) {\n      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n          index = _Object$entries$_i[0],\n          row = _Object$entries$_i[1];\n\n      if (!current.hasOwnProperty(index)) {\n        continue;\n      }\n\n      this.runItem(index);\n      this.input.calcValue += row.calc;\n    }\n  };\n  /**\r\n   * @param current {string}\r\n   */\n\n\n  this.runItem = function (current) {\n    var _this = this;\n\n    var observable = this.input.value.current[current];\n\n    if (observable.isObserved) {\n      return;\n    }\n\n    var template = document.createElement('template');\n    template.innerHTML = this.input.template.innerHTML.trim(); // set current index\n\n    var currentIndex = this.input.value.current.length - 1;\n    template.innerHTML = template.innerHTML.replace(/__i__/g, currentIndex);\n    template.content.firstChild.dataset.index = '' + currentIndex;\n    this.input.container.append(template.content.firstChild);\n    var appended = this.input.container.lastChild;\n    appended.querySelector('.jet-form-builder-repeater__remove').addEventListener('click', function () {\n      return _this.removeItem(appended);\n    });\n    observable.observe(appended);\n  };\n\n  this.removeItem = function (repeaterRow) {\n    repeaterRow.remove();\n    var value = this.input.value;\n    value.current = value.current.filter(function (item) {\n      if (!item.rootNode.isEqualNode(repeaterRow)) {\n        return true;\n      }\n\n      item.onRemove();\n      return false;\n    });\n  };\n}\n\nSignalRepeater.prototype = Object.create(BaseSignal.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalRepeater);\n\n//# sourceURL=webpack:///./frontend/repeater.field/signal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/repeater.field/main.js");
/******/ 	
/******/ })()
;