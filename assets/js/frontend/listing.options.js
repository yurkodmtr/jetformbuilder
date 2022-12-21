/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/listing.options/main.js":
/*!******************************************!*\
  !*** ./frontend/listing.options/main.js ***!
  \******************************************/
/***/ (() => {

eval("var _window$JetFormBuilde;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar addAction = JetPlugins.hooks.addAction;\n/**\r\n * @param input {InputData}\r\n */\n\nfunction isSupported(input) {\n  var _iterator = _createForOfIteratorHelper(input.nodes),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var node = _step.value;\n\n      if (['radio', 'checkbox'].includes(node === null || node === void 0 ? void 0 : node.type)) {\n        return true;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return false;\n}\n\nfunction ListingTemplateClick(_ref) {\n  var pointerId = _ref.pointerId,\n      target = _ref.target;\n\n  // prevent recursive call by .click()\n  if (-1 === pointerId) {\n    return;\n  }\n\n  if (!target.classList.contains('jet-form-builder__field-template')) {\n    target = target.closest('.jet-form-builder__field-template');\n  } // click on <label> programmatically\n  // it has <input> inside\n\n\n  target.nextElementSibling.click();\n}\n/**\r\n * @param input {InputData}\r\n */\n\n\nfunction ListingAddTemplateWatcher(input) {\n  input.watch(function () {\n    var _input$nodes = _slicedToArray(input.nodes, 1),\n        node = _input$nodes[0];\n\n    var row = node.closest('.jet-form-builder-row');\n\n    var _iterator2 = _createForOfIteratorHelper(row.querySelectorAll('input.checkradio-field')),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var _node = _step2.value;\n\n        var currentTemp = _node.closest('.jet-form-builder__field-wrap').querySelector('.jet-form-builder__field-template');\n\n        currentTemp.classList.toggle('jet-form-builder__field-template--checked', _node.checked);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  });\n}\n\naddAction('jet.fb.input.makeReactive', 'jet-form-builder/listing-options',\n/**\r\n * @param input {InputData}\r\n */\nfunction (input) {\n  if (!isSupported(input)) {\n    return;\n  }\n\n  var template = null;\n\n  var _iterator3 = _createForOfIteratorHelper(input.nodes),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var node = _step3.value;\n\n      /**\r\n       * @type {Element}\r\n       */\n      template = node.closest('.jet-form-builder__field-wrap').querySelector('.jet-form-builder__field-template');\n\n      if (!template) {\n        continue;\n      }\n\n      template.addEventListener('click', ListingTemplateClick);\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  if (!template) {\n    return;\n  }\n\n  ListingAddTemplateWatcher(input);\n\n  if (input.getValue()) {\n    input.value.notify();\n  }\n});\nwindow.JetFormBuilderFunctions = _objectSpread(_objectSpread({}, (_window$JetFormBuilde = window.JetFormBuilderFunctions) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {}), {}, {\n  ListingAddTemplateWatcher: ListingAddTemplateWatcher,\n  ListingTemplateClick: ListingTemplateClick\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9saXN0aW5nLm9wdGlvbnMvbWFpbi5qcy5qcyIsIm5hbWVzIjpbImFkZEFjdGlvbiIsIkpldFBsdWdpbnMiLCJob29rcyIsImlzU3VwcG9ydGVkIiwiaW5wdXQiLCJub2RlcyIsIm5vZGUiLCJpbmNsdWRlcyIsInR5cGUiLCJMaXN0aW5nVGVtcGxhdGVDbGljayIsInBvaW50ZXJJZCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xvc2VzdCIsIm5leHRFbGVtZW50U2libGluZyIsImNsaWNrIiwiTGlzdGluZ0FkZFRlbXBsYXRlV2F0Y2hlciIsIndhdGNoIiwicm93IiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRUZW1wIiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsImNoZWNrZWQiLCJ0ZW1wbGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRWYWx1ZSIsInZhbHVlIiwibm90aWZ5Iiwid2luZG93IiwiSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL2xpc3Rpbmcub3B0aW9ucy9tYWluLmpzP2E3NTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1N1cHBvcnRlZCggaW5wdXQgKSB7XHJcblx0Zm9yICggY29uc3Qgbm9kZSBvZiBpbnB1dC5ub2RlcyApIHtcclxuXHRcdGlmICggWyAncmFkaW8nLCAnY2hlY2tib3gnIF0uaW5jbHVkZXMoIG5vZGU/LnR5cGUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExpc3RpbmdUZW1wbGF0ZUNsaWNrKCB7IHBvaW50ZXJJZCwgdGFyZ2V0IH0gKSB7XHJcblx0Ly8gcHJldmVudCByZWN1cnNpdmUgY2FsbCBieSAuY2xpY2soKVxyXG5cdGlmICggLTEgPT09IHBvaW50ZXJJZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICggIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdGVtcGxhdGUnLFxyXG5cdCkgKSB7XHJcblx0XHR0YXJnZXQgPSB0YXJnZXQuY2xvc2VzdChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC10ZW1wbGF0ZScsXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Ly8gY2xpY2sgb24gPGxhYmVsPiBwcm9ncmFtbWF0aWNhbGx5XHJcblx0Ly8gaXQgaGFzIDxpbnB1dD4gaW5zaWRlXHJcblx0dGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBMaXN0aW5nQWRkVGVtcGxhdGVXYXRjaGVyKCBpbnB1dCApIHtcclxuXHRpbnB1dC53YXRjaCggKCkgPT4ge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcclxuXHRcdGNvbnN0IHJvdyAgICAgID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygcm93LnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dC5jaGVja3JhZGlvLWZpZWxkJyApICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50VGVtcCA9IG5vZGUuY2xvc2VzdChcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnLFxyXG5cdFx0XHQpLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC10ZW1wbGF0ZScsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRjdXJyZW50VGVtcC5jbGFzc0xpc3QudG9nZ2xlKFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyX19maWVsZC10ZW1wbGF0ZS0tY2hlY2tlZCcsXHJcblx0XHRcdFx0bm9kZS5jaGVja2VkLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxufVxyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9saXN0aW5nLW9wdGlvbnMnLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRpZiAoICFpc1N1cHBvcnRlZCggaW5wdXQgKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB0ZW1wbGF0ZSA9IG51bGw7XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBpbnB1dC5ub2RlcyApIHtcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIEB0eXBlIHtFbGVtZW50fVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0dGVtcGxhdGUgPSBub2RlLmNsb3Nlc3QoXHJcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyxcclxuXHRcdFx0KS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdGVtcGxhdGUnLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKCAhdGVtcGxhdGUgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIExpc3RpbmdUZW1wbGF0ZUNsaWNrICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhdGVtcGxhdGUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRMaXN0aW5nQWRkVGVtcGxhdGVXYXRjaGVyKCBpbnB1dCApO1xyXG5cclxuXHRcdGlmICggaW5wdXQuZ2V0VmFsdWUoKSApIHtcclxuXHRcdFx0aW5wdXQudmFsdWUubm90aWZ5KCk7XHJcblx0XHR9XHJcblx0fSxcclxuKTtcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPz8ge31cclxuXHQpLFxyXG5cdExpc3RpbmdBZGRUZW1wbGF0ZVdhdGNoZXIsXHJcblx0TGlzdGluZ1RlbXBsYXRlQ2xpY2ssXHJcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFDT0EsU0FEUCxHQUVVQyxVQUFVLENBQUNDLEtBRnJCLENBQ09GLFNBRFA7QUFJQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0csV0FBVCxDQUFzQkMsS0FBdEIsRUFBOEI7RUFBQSwyQ0FDVEEsS0FBSyxDQUFDQyxLQURHO0VBQUE7O0VBQUE7SUFDN0Isb0RBQWtDO01BQUEsSUFBdEJDLElBQXNCOztNQUNqQyxJQUFLLENBQUUsT0FBRixFQUFXLFVBQVgsRUFBd0JDLFFBQXhCLENBQWtDRCxJQUFsQyxhQUFrQ0EsSUFBbEMsdUJBQWtDQSxJQUFJLENBQUVFLElBQXhDLENBQUwsRUFBc0Q7UUFDckQsT0FBTyxJQUFQO01BQ0E7SUFDRDtFQUw0QjtJQUFBO0VBQUE7SUFBQTtFQUFBOztFQU83QixPQUFPLEtBQVA7QUFDQTs7QUFFRCxTQUFTQyxvQkFBVCxPQUF1RDtFQUFBLElBQXRCQyxTQUFzQixRQUF0QkEsU0FBc0I7RUFBQSxJQUFYQyxNQUFXLFFBQVhBLE1BQVc7O0VBQ3REO0VBQ0EsSUFBSyxDQUFDLENBQUQsS0FBT0QsU0FBWixFQUF3QjtJQUN2QjtFQUNBOztFQUVELElBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUNMLGtDQURLLENBQU4sRUFFSTtJQUNIRixNQUFNLEdBQUdBLE1BQU0sQ0FBQ0csT0FBUCxDQUNSLG1DQURRLENBQVQ7RUFHQSxDQVpxRCxDQWN0RDtFQUNBOzs7RUFDQUgsTUFBTSxDQUFDSSxrQkFBUCxDQUEwQkMsS0FBMUI7QUFDQTtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0MseUJBQVQsQ0FBb0NiLEtBQXBDLEVBQTRDO0VBQzNDQSxLQUFLLENBQUNjLEtBQU4sQ0FBYSxZQUFNO0lBQ2xCLGtDQUFpQmQsS0FBSyxDQUFDQyxLQUF2QjtJQUFBLElBQVFDLElBQVI7O0lBQ0EsSUFBTWEsR0FBRyxHQUFRYixJQUFJLENBQUNRLE9BQUwsQ0FBYyx1QkFBZCxDQUFqQjs7SUFGa0IsNENBSUVLLEdBQUcsQ0FBQ0MsZ0JBQUosQ0FBc0Isd0JBQXRCLENBSkY7SUFBQTs7SUFBQTtNQUlsQix1REFBdUU7UUFBQSxJQUEzRGQsS0FBMkQ7O1FBQ3RFLElBQU1lLFdBQVcsR0FBR2YsS0FBSSxDQUFDUSxPQUFMLENBQ25CLCtCQURtQixFQUVsQlEsYUFGa0IsQ0FHbkIsbUNBSG1CLENBQXBCOztRQU1BRCxXQUFXLENBQUNULFNBQVosQ0FBc0JXLE1BQXRCLENBQ0MsMkNBREQsRUFFQ2pCLEtBQUksQ0FBQ2tCLE9BRk47TUFJQTtJQWZpQjtNQUFBO0lBQUE7TUFBQTtJQUFBO0VBZ0JsQixDQWhCRDtBQWlCQTs7QUFFRHhCLFNBQVMsQ0FDUiwyQkFEUSxFQUVSLGtDQUZRO0FBR1I7QUFDRDtBQUNBO0FBQ0MsVUFBV0ksS0FBWCxFQUFtQjtFQUNsQixJQUFLLENBQUNELFdBQVcsQ0FBRUMsS0FBRixDQUFqQixFQUE2QjtJQUM1QjtFQUNBOztFQUVELElBQUlxQixRQUFRLEdBQUcsSUFBZjs7RUFMa0IsNENBT0VyQixLQUFLLENBQUNDLEtBUFI7RUFBQTs7RUFBQTtJQU9sQix1REFBa0M7TUFBQSxJQUF0QkMsSUFBc0I7O01BQ2pDO0FBQ0g7QUFDQTtNQUNHbUIsUUFBUSxHQUFHbkIsSUFBSSxDQUFDUSxPQUFMLENBQ1YsK0JBRFUsRUFFVFEsYUFGUyxDQUdWLG1DQUhVLENBQVg7O01BTUEsSUFBSyxDQUFDRyxRQUFOLEVBQWlCO1FBQ2hCO01BQ0E7O01BRURBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkIsT0FBM0IsRUFBb0NqQixvQkFBcEM7SUFDQTtFQXRCaUI7SUFBQTtFQUFBO0lBQUE7RUFBQTs7RUF3QmxCLElBQUssQ0FBQ2dCLFFBQU4sRUFBaUI7SUFDaEI7RUFDQTs7RUFFRFIseUJBQXlCLENBQUViLEtBQUYsQ0FBekI7O0VBRUEsSUFBS0EsS0FBSyxDQUFDdUIsUUFBTixFQUFMLEVBQXdCO0lBQ3ZCdkIsS0FBSyxDQUFDd0IsS0FBTixDQUFZQyxNQUFaO0VBQ0E7QUFDRCxDQXZDTyxDQUFUO0FBMENBQyxNQUFNLENBQUNDLHVCQUFQLDREQUVFRCxNQUFNLENBQUNDLHVCQUZULHlFQUVvQyxFQUZwQztFQUlDZCx5QkFBeUIsRUFBekJBLHlCQUpEO0VBS0NSLG9CQUFvQixFQUFwQkE7QUFMRCJ9\n//# sourceURL=webpack-internal:///./frontend/listing.options/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./frontend/listing.options/main.js"]();
/******/ 	
/******/ })()
;