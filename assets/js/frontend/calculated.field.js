/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/calculated.field/functions.js":
/*!************************************************!*\
  !*** ./frontend/calculated.field/functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isCalculated\": () => (/* binding */ isCalculated)\n/* harmony export */ });\n/**\r\n * @param node {HTMLElement}\r\n * @returns {boolean}\r\n */\nfunction isCalculated(node) {\n  var _node$parentElement$d, _node$parentElement$d2, _node$parentElement$d3;\n  return !!((_node$parentElement$d = (_node$parentElement$d2 = node.parentElement.dataset) === null || _node$parentElement$d2 === void 0 ? void 0 : (_node$parentElement$d3 = _node$parentElement$d2.formula) === null || _node$parentElement$d3 === void 0 ? void 0 : _node$parentElement$d3.length) !== null && _node$parentElement$d !== void 0 ? _node$parentElement$d : '');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL2Z1bmN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxZQUFZLENBQUVDLElBQUksRUFBRztFQUFBO0VBQzdCLE9BQU8sQ0FBQyxxREFDUEEsSUFBSSxDQUFDQyxhQUFhLENBQUNDLE9BQU8scUZBQTFCLHVCQUE0QkMsT0FBTywyREFBbkMsdUJBQXFDQyxNQUFNLHlFQUFJLEVBQUUsQ0FDakQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvZnVuY3Rpb25zLmpzPzRmYTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0NhbGN1bGF0ZWQoIG5vZGUgKSB7XHJcblx0cmV0dXJuICEhKFxyXG5cdFx0bm9kZS5wYXJlbnRFbGVtZW50LmRhdGFzZXQ/LmZvcm11bGE/Lmxlbmd0aCA/PyAnJ1xyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzQ2FsY3VsYXRlZCB9OyJdLCJuYW1lcyI6WyJpc0NhbGN1bGF0ZWQiLCJub2RlIiwicGFyZW50RWxlbWVudCIsImRhdGFzZXQiLCJmb3JtdWxhIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/calculated.field/functions.js\n");

/***/ }),

/***/ "./frontend/calculated.field/input.js":
/*!********************************************!*\
  !*** ./frontend/calculated.field/input.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.field/functions.js\");\nvar _window$JetFormBuilde2, _window, _window$JetFormBuilde3;\n\nvar _window$JetFormBuilde = window.JetFormBuilderAbstract,\n  InputData = _window$JetFormBuilde.InputData,\n  CalculatedFormula = _window$JetFormBuilde.CalculatedFormula;\nvar applyFilters = JetPlugins.hooks.applyFilters;\nvar _ref = (_window$JetFormBuilde2 = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde3 = _window.JetFormBuilderMain) === null || _window$JetFormBuilde3 === void 0 ? void 0 : _window$JetFormBuilde3.filters) !== null && _window$JetFormBuilde2 !== void 0 ? _window$JetFormBuilde2 : {},\n  _ref$applyFilters = _ref.applyFilters,\n  deprecatedApplyFilters = _ref$applyFilters === void 0 ? false : _ref$applyFilters;\nfunction CalculatedData() {\n  InputData.call(this);\n  this.formula = '';\n  this.precision = 0;\n  this.sepDecimal = '';\n  this.sepThousands = '';\n  this.visibleValNode = null;\n  this.valueTypeProp = 'number';\n  this.isSupported = function (node) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);\n  };\n  this.setValue = function () {\n    var _this = this;\n    var formula = new CalculatedFormula(this, {\n      forceFunction: true\n    });\n    formula.observe(this.formula);\n    formula.setResult = function () {\n      _this.value.current = formula.calculate();\n    };\n    formula.relatedCallback = function (input) {\n      var value = applyFilters('jet.fb.calculated.callback', false, input, _this);\n      if (false !== value) {\n        return value;\n      }\n      var response = 'number' === _this.valueTypeProp ? input.calcValue : input.value.current;\n      if (false === deprecatedApplyFilters) {\n        return response;\n      }\n      var filterResult = deprecatedApplyFilters('forms/calculated-field-value', input.value.current, jQuery(input.nodes[0]));\n      return filterResult === input.value.current ? response : filterResult;\n    };\n    formula.emptyValue = function () {\n      return 'number' === _this.valueTypeProp ? 0 : '';\n    };\n    formula.setResult();\n    this.onChange();\n    this.beforeSubmit(function (resolve) {\n      _this.value.silence();\n      _this.value.current = null;\n      _this.value.silence();\n      formula.setResult();\n      resolve();\n    });\n  };\n  this.makeReactive = function () {\n    InputData.prototype.makeReactive.call(this);\n\n    // run signals\n    this.value.notify();\n  };\n  this.setNode = function (node) {\n    InputData.prototype.setNode.call(this, node);\n    var _node$parentElement$d = node.parentElement.dataset,\n      formula = _node$parentElement$d.formula,\n      precision = _node$parentElement$d.precision,\n      sepDecimal = _node$parentElement$d.sepDecimal,\n      valueType = _node$parentElement$d.valueType;\n    this.formula = formula;\n    this.precision = +precision;\n    this.sepDecimal = sepDecimal;\n    this.visibleValNode = node.nextElementSibling;\n    this.valueTypeProp = valueType;\n  };\n  this.addListeners = function () {\n    // silence is golden\n  };\n}\nCalculatedData.prototype = Object.create(InputData.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0NhbGN1bGF0ZWQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgSW5wdXREYXRhLFxyXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxyXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnMsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxyXG4gICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmZvcm11bGEgICAgICAgID0gJyc7XHJcblx0dGhpcy5wcmVjaXNpb24gICAgICA9IDA7XHJcblx0dGhpcy5zZXBEZWNpbWFsICAgICA9ICcnO1xyXG5cdHRoaXMuc2VwVGhvdXNhbmRzICAgPSAnJztcclxuXHR0aGlzLnZpc2libGVWYWxOb2RlID0gbnVsbDtcclxuXHR0aGlzLnZhbHVlVHlwZVByb3AgID0gJ251bWJlcic7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5zZXRWYWx1ZSAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLCB7IGZvcmNlRnVuY3Rpb246IHRydWUgfSApO1xyXG5cclxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdGhpcy5mb3JtdWxhICk7XHJcblx0XHRmb3JtdWxhLnNldFJlc3VsdCAgICAgICA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHRcdH07XHJcblx0XHRmb3JtdWxhLnJlbGF0ZWRDYWxsYmFjayA9ICggaW5wdXQgKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdCdqZXQuZmIuY2FsY3VsYXRlZC5jYWxsYmFjaycsXHJcblx0XHRcdFx0ZmFsc2UsXHJcblx0XHRcdFx0aW5wdXQsXHJcblx0XHRcdFx0dGhpcyxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmICggZmFsc2UgIT09IHZhbHVlICkge1xyXG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAnbnVtYmVyJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgPyBpbnB1dC5jYWxjVmFsdWVcclxuXHRcdFx0ICAgICAgICAgICAgICAgICA6IGlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0XHRpZiAoIGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzICkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgZmlsdGVyUmVzdWx0ID0gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyhcclxuXHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1maWVsZC12YWx1ZScsXHJcblx0XHRcdFx0aW5wdXQudmFsdWUuY3VycmVudCxcclxuXHRcdFx0XHRqUXVlcnkoIGlucHV0Lm5vZGVzWyAwIF0gKSxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybiBmaWx0ZXJSZXN1bHQgPT09IGlucHV0LnZhbHVlLmN1cnJlbnRcclxuXHRcdFx0ICAgICAgID8gcmVzcG9uc2VcclxuXHRcdFx0ICAgICAgIDogZmlsdGVyUmVzdWx0O1xyXG5cdFx0fTtcclxuXHJcblx0XHRmb3JtdWxhLmVtcHR5VmFsdWUgPSAoKSA9PiAnbnVtYmVyJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XHJcblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZSgpO1xyXG5cclxuXHRcdHRoaXMuYmVmb3JlU3VibWl0KCAoIHJlc29sdmUgKSA9PiB7XHJcblx0XHRcdHRoaXMudmFsdWUuc2lsZW5jZSgpO1xyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcclxuXHJcblx0XHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblx0XHRcdHJlc29sdmUoKTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cdHRoaXMubWFrZVJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5tYWtlUmVhY3RpdmUuY2FsbCggdGhpcyApO1xyXG5cclxuXHRcdC8vIHJ1biBzaWduYWxzXHJcblx0XHR0aGlzLnZhbHVlLm5vdGlmeSgpO1xyXG5cdH07XHJcblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ICAgICAgZm9ybXVsYSxcclxuXHRcdFx0ICAgICAgcHJlY2lzaW9uLFxyXG5cdFx0XHQgICAgICBzZXBEZWNpbWFsLFxyXG5cdFx0XHQgICAgICB2YWx1ZVR5cGUsXHJcblx0XHQgICAgICB9ID0gbm9kZS5wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XHJcblxyXG5cdFx0dGhpcy5mb3JtdWxhICAgICAgICA9IGZvcm11bGE7XHJcblx0XHR0aGlzLnByZWNpc2lvbiAgICAgID0gK3ByZWNpc2lvbjtcclxuXHRcdHRoaXMuc2VwRGVjaW1hbCAgICAgPSBzZXBEZWNpbWFsO1xyXG5cdFx0dGhpcy52aXNpYmxlVmFsTm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdFx0dGhpcy52YWx1ZVR5cGVQcm9wICA9IHZhbHVlVHlwZTtcclxuXHR9O1xyXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8gc2lsZW5jZSBpcyBnb2xkZW5cclxuXHR9O1xyXG59XHJcblxyXG5DYWxjdWxhdGVkRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRGF0YTsiXSwibmFtZXMiOlsiaXNDYWxjdWxhdGVkIiwid2luZG93IiwiSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCIsIklucHV0RGF0YSIsIkNhbGN1bGF0ZWRGb3JtdWxhIiwiYXBwbHlGaWx0ZXJzIiwiSmV0UGx1Z2lucyIsImhvb2tzIiwiSmV0Rm9ybUJ1aWxkZXJNYWluIiwiZmlsdGVycyIsImRlcHJlY2F0ZWRBcHBseUZpbHRlcnMiLCJDYWxjdWxhdGVkRGF0YSIsImNhbGwiLCJmb3JtdWxhIiwicHJlY2lzaW9uIiwic2VwRGVjaW1hbCIsInNlcFRob3VzYW5kcyIsInZpc2libGVWYWxOb2RlIiwidmFsdWVUeXBlUHJvcCIsImlzU3VwcG9ydGVkIiwibm9kZSIsInNldFZhbHVlIiwiZm9yY2VGdW5jdGlvbiIsIm9ic2VydmUiLCJzZXRSZXN1bHQiLCJ2YWx1ZSIsImN1cnJlbnQiLCJjYWxjdWxhdGUiLCJyZWxhdGVkQ2FsbGJhY2siLCJpbnB1dCIsInJlc3BvbnNlIiwiY2FsY1ZhbHVlIiwiZmlsdGVyUmVzdWx0IiwialF1ZXJ5Iiwibm9kZXMiLCJlbXB0eVZhbHVlIiwib25DaGFuZ2UiLCJiZWZvcmVTdWJtaXQiLCJyZXNvbHZlIiwic2lsZW5jZSIsIm1ha2VSZWFjdGl2ZSIsInByb3RvdHlwZSIsIm5vdGlmeSIsInNldE5vZGUiLCJwYXJlbnRFbGVtZW50IiwiZGF0YXNldCIsInZhbHVlVHlwZSIsIm5leHRFbGVtZW50U2libGluZyIsImFkZExpc3RlbmVycyIsIk9iamVjdCIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/calculated.field/input.js\n");

/***/ }),

/***/ "./frontend/calculated.field/main.js":
/*!*******************************************!*\
  !*** ./frontend/calculated.field/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./frontend/calculated.field/input.js\");\n/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ \"./frontend/calculated.field/signal.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\nvar addFilter = JetPlugins.hooks.addFilter;\naddFilter('jet.fb.inputs', 'jet-form-builder/calculated-field', function (inputs) {\n  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]].concat(_toConsumableArray(inputs));\n  return inputs;\n});\naddFilter('jet.fb.signals', 'jet-form-builder/calculated-field', function (signals) {\n  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]].concat(_toConsumableArray(signals));\n  return signals;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL21haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBQ0c7QUFFeEMsSUFBUUUsU0FBUyxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBOUJGLFNBQVM7QUFFakJBLFNBQVMsQ0FDUixlQUFlLEVBQ2YsbUNBQW1DLEVBQ25DLFVBQVdHLE1BQU0sRUFBRztFQUNuQkEsTUFBTSxJQUFLTCw4Q0FBYyw0QkFBS0ssTUFBTSxFQUFFO0VBRXRDLE9BQU9BLE1BQU07QUFDZCxDQUFDLENBQ0Q7QUFFREgsU0FBUyxDQUNSLGdCQUFnQixFQUNoQixtQ0FBbUMsRUFDbkMsVUFBV0ksT0FBTyxFQUFHO0VBQ3BCQSxPQUFPLElBQUtMLCtDQUFnQiw0QkFBS0ssT0FBTyxFQUFFO0VBRTFDLE9BQU9BLE9BQU87QUFDZixDQUFDLENBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL21haW4uanM/Yjc2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRlZERhdGEgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBTaWduYWxDYWxjdWxhdGVkIGZyb20gJy4vc2lnbmFsJztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jYWxjdWxhdGVkLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgQ2FsY3VsYXRlZERhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnNpZ25hbHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcclxuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbENhbGN1bGF0ZWQsIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6WyJDYWxjdWxhdGVkRGF0YSIsIlNpZ25hbENhbGN1bGF0ZWQiLCJhZGRGaWx0ZXIiLCJKZXRQbHVnaW5zIiwiaG9va3MiLCJpbnB1dHMiLCJzaWduYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/calculated.field/main.js\n");

/***/ }),

/***/ "./frontend/calculated.field/signal.js":
/*!*********************************************!*\
  !*** ./frontend/calculated.field/signal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.field/functions.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar BaseSignal = window.JetFormBuilderAbstract.BaseSignal;\n\n/**\r\n * @property {CalculatedData} input\r\n */\nfunction SignalCalculated() {\n  BaseSignal.call(this);\n  this.isSupported = function (node, inputData) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);\n  };\n  this.runSignal = function () {\n    var _this$input$nodes = _slicedToArray(this.input.nodes, 1),\n      node = _this$input$nodes[0];\n    node.value = this.input.value.current;\n    this.input.visibleValNode.textContent = this.convertValue();\n  };\n  this.convertValue = function () {\n    var _this$input = this.input,\n      sepThousands = _this$input.sepThousands,\n      sepDecimal = _this$input.sepDecimal,\n      valueTypeProp = _this$input.valueTypeProp,\n      precision = _this$input.precision;\n    var current = this.input.value.current;\n    if ('number' !== valueTypeProp) {\n      return current;\n    }\n    if (Number.isNaN(Number(current))) {\n      return 0;\n    }\n    var parts = Number(current).toFixed(precision).toString().split('.');\n    parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, sepThousands);\n    return parts.join(sepDecimal);\n  };\n}\nSignalCalculated.prototype = Object.create(BaseSignal.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalCalculated);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL3NpZ25hbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUUzQyxJQUNPQyxVQUFVLEdBQ1BDLE1BQU0sQ0FBQ0Msc0JBQXNCLENBRGhDRixVQUFVOztBQUdqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTRyxnQkFBZ0IsR0FBRztFQUMzQkgsVUFBVSxDQUFDSSxJQUFJLENBQUUsSUFBSSxDQUFFO0VBRXZCLElBQUksQ0FBQ0MsV0FBVyxHQUFJLFVBQVdDLElBQUksRUFBRUMsU0FBUyxFQUFHO0lBQ2hELE9BQU9SLHdEQUFZLENBQUVPLElBQUksQ0FBRTtFQUM1QixDQUFDO0VBQ0QsSUFBSSxDQUFDRSxTQUFTLEdBQU0sWUFBWTtJQUMvQix1Q0FBaUIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLEtBQUs7TUFBekJKLElBQUk7SUFDWkEsSUFBSSxDQUFDSyxLQUFLLEdBQU8sSUFBSSxDQUFDRixLQUFLLENBQUNFLEtBQUssQ0FBQ0MsT0FBTztJQUV6QyxJQUFJLENBQUNILEtBQUssQ0FBQ0ksY0FBYyxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDQyxZQUFZLEVBQUU7RUFDNUQsQ0FBQztFQUNELElBQUksQ0FBQ0EsWUFBWSxHQUFHLFlBQVk7SUFDL0Isa0JBS1UsSUFBSSxDQUFDTixLQUFLO01BSmJPLFlBQVksZUFBWkEsWUFBWTtNQUNaQyxVQUFVLGVBQVZBLFVBQVU7TUFDVkMsYUFBYSxlQUFiQSxhQUFhO01BQ2JDLFNBQVMsZUFBVEEsU0FBUztJQUdoQixJQUFRUCxPQUFPLEdBQUssSUFBSSxDQUFDSCxLQUFLLENBQUNFLEtBQUssQ0FBNUJDLE9BQU87SUFFZixJQUFLLFFBQVEsS0FBS00sYUFBYSxFQUFHO01BQ2pDLE9BQU9OLE9BQU87SUFDZjtJQUVBLElBQUtRLE1BQU0sQ0FBQ0MsS0FBSyxDQUFFRCxNQUFNLENBQUVSLE9BQU8sQ0FBRSxDQUFFLEVBQUc7TUFDeEMsT0FBTyxDQUFDO0lBQ1Q7SUFFQSxJQUFNVSxLQUFLLEdBQUdGLE1BQU0sQ0FBRVIsT0FBTyxDQUFFLENBQzlCVyxPQUFPLENBQUVKLFNBQVMsQ0FBRSxDQUNwQkssUUFBUSxFQUFFLENBQ1ZDLEtBQUssQ0FBRSxHQUFHLENBQUU7SUFFYkgsS0FBSyxDQUFFLENBQUMsQ0FBRSxHQUFHQSxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUNJLE9BQU8sQ0FDOUIsdUJBQXVCLEVBQ3ZCVixZQUFZLENBQ1o7SUFFRCxPQUFPTSxLQUFLLENBQUNLLElBQUksQ0FBRVYsVUFBVSxDQUFFO0VBQ2hDLENBQUM7QUFDRjtBQUVBZCxnQkFBZ0IsQ0FBQ3lCLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUU5QixVQUFVLENBQUM0QixTQUFTLENBQUU7QUFFbEUsaUVBQWV6QixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL3NpZ25hbC5qcz9hNTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQ2FsY3VsYXRlZCB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBCYXNlU2lnbmFsLFxyXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtDYWxjdWxhdGVkRGF0YX0gaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbENhbGN1bGF0ZWQoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XHJcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLnJ1blNpZ25hbCAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHRcdG5vZGUudmFsdWUgICAgID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdHRoaXMuaW5wdXQudmlzaWJsZVZhbE5vZGUudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRWYWx1ZSgpO1xyXG5cdH07XHJcblx0dGhpcy5jb252ZXJ0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdCAgICAgIHNlcFRob3VzYW5kcyxcclxuXHRcdFx0ICAgICAgc2VwRGVjaW1hbCxcclxuXHRcdFx0ICAgICAgdmFsdWVUeXBlUHJvcCxcclxuXHRcdFx0ICAgICAgcHJlY2lzaW9uLFxyXG5cdFx0ICAgICAgfSA9IHRoaXMuaW5wdXQ7XHJcblxyXG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmlucHV0LnZhbHVlO1xyXG5cclxuXHRcdGlmICggJ251bWJlcicgIT09IHZhbHVlVHlwZVByb3AgKSB7XHJcblx0XHRcdHJldHVybiBjdXJyZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBOdW1iZXIoIGN1cnJlbnQgKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBwYXJ0cyA9IE51bWJlciggY3VycmVudCApLlxyXG5cdFx0XHR0b0ZpeGVkKCBwcmVjaXNpb24gKS5cclxuXHRcdFx0dG9TdHJpbmcoKS5cclxuXHRcdFx0c3BsaXQoICcuJyApO1xyXG5cclxuXHRcdHBhcnRzWyAwIF0gPSBwYXJ0c1sgMCBdLnJlcGxhY2UoXHJcblx0XHRcdC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFxyXG5cdFx0XHRzZXBUaG91c2FuZHMsXHJcblx0XHQpO1xyXG5cclxuXHRcdHJldHVybiBwYXJ0cy5qb2luKCBzZXBEZWNpbWFsICk7XHJcblx0fTtcclxufVxyXG5cclxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsQ2FsY3VsYXRlZDsiXSwibmFtZXMiOlsiaXNDYWxjdWxhdGVkIiwiQmFzZVNpZ25hbCIsIndpbmRvdyIsIkpldEZvcm1CdWlsZGVyQWJzdHJhY3QiLCJTaWduYWxDYWxjdWxhdGVkIiwiY2FsbCIsImlzU3VwcG9ydGVkIiwibm9kZSIsImlucHV0RGF0YSIsInJ1blNpZ25hbCIsImlucHV0Iiwibm9kZXMiLCJ2YWx1ZSIsImN1cnJlbnQiLCJ2aXNpYmxlVmFsTm9kZSIsInRleHRDb250ZW50IiwiY29udmVydFZhbHVlIiwic2VwVGhvdXNhbmRzIiwic2VwRGVjaW1hbCIsInZhbHVlVHlwZVByb3AiLCJwcmVjaXNpb24iLCJOdW1iZXIiLCJpc05hTiIsInBhcnRzIiwidG9GaXhlZCIsInRvU3RyaW5nIiwic3BsaXQiLCJyZXBsYWNlIiwiam9pbiIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/calculated.field/signal.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/calculated.field/main.js");
/******/ 	
/******/ })()
;