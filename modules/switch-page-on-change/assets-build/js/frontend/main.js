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

/***/ "./frontend/main.js":
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar addAction = JetPlugins.hooks.addAction;\nvar _JetFormBuilderFuncti = JetFormBuilderFunctions,\n  isEmpty = _JetFormBuilderFuncti.isEmpty;\naddAction('jet.fb.multistep.page.init', 'jet-form-builder/switch-page-on-change',\n/**\r\n * @param page {PageState}\r\n */\nfunction (page) {\n  var wrappers = page.node.querySelectorAll('.jet-fb-switch-page-on-change');\n  if (!wrappers) {\n    return;\n  }\n  var _iterator = _createForOfIteratorHelper(wrappers),\n    _step;\n  try {\n    var _loop = function _loop() {\n      var _node;\n      var wrapper = _step.value;\n      var node = wrapper;\n      if (!wrapper.hasOwnProperty('jfbSync')) {\n        node = wrapper.querySelector('input, select');\n      }\n      if (!((_node = node) !== null && _node !== void 0 && _node.jfbSync) || !page.isNodeBelongThis(node)) {\n        return \"continue\";\n      }\n      node.jfbSync.watch(function () {\n        if (isEmpty(node.jfbSync.getValue())) {\n          return;\n        }\n        page.changePage(false).then(function () {}).catch(function () {});\n      });\n    };\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _ret = _loop();\n      if (_ret === \"continue\") continue;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9tYWluLmpzIiwibmFtZXMiOlsiYWRkQWN0aW9uIiwiSmV0UGx1Z2lucyIsImhvb2tzIiwiX0pldEZvcm1CdWlsZGVyRnVuY3RpIiwiSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMiLCJpc0VtcHR5IiwicGFnZSIsIndyYXBwZXJzIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwiX2xvb3AiLCJfbm9kZSIsIndyYXBwZXIiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5IiwicXVlcnlTZWxlY3RvciIsImpmYlN5bmMiLCJpc05vZGVCZWxvbmdUaGlzIiwid2F0Y2giLCJnZXRWYWx1ZSIsImNoYW5nZVBhZ2UiLCJ0aGVuIiwiY2F0Y2giLCJzIiwibiIsImRvbmUiLCJfcmV0IiwiZXJyIiwiZSIsImYiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1zd2l0Y2gtcGFnZS1vbi1jaGFuZ2UvLi9mcm9udGVuZC9tYWluLmpzPzkzYjciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhZGRBY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgaXNFbXB0eSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIubXVsdGlzdGVwLnBhZ2UuaW5pdCcsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvc3dpdGNoLXBhZ2Utb24tY2hhbmdlJyxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gcGFnZSB7UGFnZVN0YXRlfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggcGFnZSApIHtcclxuXHRcdGNvbnN0IHdyYXBwZXJzID0gcGFnZS5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdCcuamV0LWZiLXN3aXRjaC1wYWdlLW9uLWNoYW5nZScsXHJcblx0XHQpO1xyXG5cdFx0aWYgKCAhd3JhcHBlcnMgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGZvciAoIGNvbnN0IHdyYXBwZXIgb2Ygd3JhcHBlcnMgKSB7XHJcblx0XHRcdGxldCBub2RlID0gd3JhcHBlcjtcclxuXHJcblx0XHRcdGlmICggIXdyYXBwZXIuaGFzT3duUHJvcGVydHkoICdqZmJTeW5jJyApICkge1xyXG5cdFx0XHRcdG5vZGUgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dCwgc2VsZWN0JyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICFub2RlPy5qZmJTeW5jIHx8ICFwYWdlLmlzTm9kZUJlbG9uZ1RoaXMoIG5vZGUgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRub2RlLmpmYlN5bmMud2F0Y2goICgpID0+IHtcclxuXHRcdFx0XHRpZiAoIGlzRW1wdHkoIG5vZGUuamZiU3luYy5nZXRWYWx1ZSgpICkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHBhZ2UuY2hhbmdlUGFnZSggZmFsc2UgKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSxcclxuKTsiXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQVFBLFNBQVMsR0FBS0MsVUFBVSxDQUFDQyxLQUFLLENBQTlCRixTQUFTO0FBRWpCLElBQUFHLHFCQUFBLEdBRVVDLHVCQUF1QjtFQUQxQkMsT0FBTyxHQUFBRixxQkFBQSxDQUFQRSxPQUFPO0FBR2RMLFNBQVMsQ0FDUiw0QkFBNEIsRUFDNUIsd0NBQXdDO0FBQ3hDO0FBQ0Q7QUFDQTtBQUNDLFVBQVdNLElBQUksRUFBRztFQUNqQixJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FDMUMsK0JBQ0QsQ0FBQztFQUNELElBQUssQ0FBQ0YsUUFBUSxFQUFHO0lBQ2hCO0VBQ0Q7RUFBQyxJQUFBRyxTQUFBLEdBQUFDLDBCQUFBLENBQ3NCSixRQUFRO0lBQUFLLEtBQUE7RUFBQTtJQUFBLElBQUFDLEtBQUEsWUFBQUEsTUFBQSxFQUFHO01BQUEsSUFBQUMsS0FBQTtNQUFBLElBQXRCQyxPQUFPLEdBQUFILEtBQUEsQ0FBQUksS0FBQTtNQUNsQixJQUFJUixJQUFJLEdBQUdPLE9BQU87TUFFbEIsSUFBSyxDQUFDQSxPQUFPLENBQUNFLGNBQWMsQ0FBRSxTQUFVLENBQUMsRUFBRztRQUMzQ1QsSUFBSSxHQUFHTyxPQUFPLENBQUNHLGFBQWEsQ0FBRSxlQUFnQixDQUFDO01BQ2hEO01BRUEsSUFBSyxHQUFBSixLQUFBLEdBQUNOLElBQUksY0FBQU0sS0FBQSxlQUFKQSxLQUFBLENBQU1LLE9BQU8sS0FBSSxDQUFDYixJQUFJLENBQUNjLGdCQUFnQixDQUFFWixJQUFLLENBQUMsRUFBRztRQUFBO01BRXhEO01BQ0FBLElBQUksQ0FBQ1csT0FBTyxDQUFDRSxLQUFLLENBQUUsWUFBTTtRQUN6QixJQUFLaEIsT0FBTyxDQUFFRyxJQUFJLENBQUNXLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLENBQUUsQ0FBQyxFQUFHO1VBQ3pDO1FBQ0Q7UUFDQWhCLElBQUksQ0FBQ2lCLFVBQVUsQ0FBRSxLQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFFLFlBQU0sQ0FBQyxDQUFFLENBQUMsQ0FBQ0MsS0FBSyxDQUFFLFlBQU0sQ0FBQyxDQUFFLENBQUM7TUFDNUQsQ0FBRSxDQUFDO0lBQ0osQ0FBQztJQWhCRCxLQUFBZixTQUFBLENBQUFnQixDQUFBLE1BQUFkLEtBQUEsR0FBQUYsU0FBQSxDQUFBaUIsQ0FBQSxJQUFBQyxJQUFBO01BQUEsSUFBQUMsSUFBQSxHQUFBaEIsS0FBQTtNQUFBLElBQUFnQixJQUFBLGlCQVFFO0lBQVM7RUFRVixTQUFBQyxHQUFBO0lBQUFwQixTQUFBLENBQUFxQixDQUFBLENBQUFELEdBQUE7RUFBQTtJQUFBcEIsU0FBQSxDQUFBc0IsQ0FBQTtFQUFBO0FBQ0YsQ0FDRCxDQUFDIn0=\n//# sourceURL=webpack-internal:///./frontend/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./frontend/main.js"]();
/******/ 	
/******/ })()
;