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

/***/ "./re-captcha-v3/frontend/main.js":
/*!****************************************!*\
  !*** ./re-captcha-v3/frontend/main.js ***!
  \****************************************/
/***/ (() => {

eval("(function ($) {\n  var CaptchaHandler = function CaptchaHandler(formID, _ref, resolve, reject) {\n    var key = _ref.key;\n    var script = document.querySelector('script#jet-form-builder-recaptcha-js'),\n      cpField = $('form[data-form-id=\"' + formID + '\"]').find('.captcha-token');\n    function setFormToken() {\n      if (window.grecaptcha) {\n        grecaptcha.execute(key, {\n          action: 'jet_form_builder_captcha__' + formID\n        }).then(function (token) {\n          cpField.val(token);\n          resolve();\n        });\n      } else {\n        resolve();\n      }\n    }\n    if (!script) {\n      script = document.createElement('script');\n      script.id = 'jet-form-builder-recaptcha-js';\n      script.src = 'https://www.google.com/recaptcha/api.js?render=' + key;\n      var currentInput = cpField[cpField.length - 1];\n      currentInput.parentNode.insertBefore(script, currentInput);\n      setFormToken();\n    } else {\n      setFormToken();\n    }\n  };\n  var setUpCaptcha = function setUpCaptcha(formID, resolve, reject) {\n    var _Object$values;\n    var current = window.JetFormBuilderCaptchaConfig[formID] || {};\n    if (!((_Object$values = Object.values(current)) !== null && _Object$values !== void 0 && _Object$values.length)) {\n      return resolve();\n    }\n    window.JetFormBuilderCaptcha(formID, current, resolve, reject);\n  };\n  var setUpMain = function setUpMain() {\n    var addFilter;\n    if (window.JetFormBuilderAbstract) {\n      addFilter = window.JetPlugins.hooks.addFilter;\n    } else {\n      addFilter = wp.hooks.addFilter;\n    }\n    if (!window.JetFormBuilderCaptcha) {\n      window.JetFormBuilderCaptcha = CaptchaHandler;\n    }\n    addFilter('jet.fb.submit.ajax.promises', 'jet-form-builder-recaptcha', function (promises, $form) {\n      promises.push(new Promise(function (resolve, reject) {\n        setUpCaptcha($form.data('form-id'), resolve, reject);\n      }));\n      return promises;\n    });\n    addFilter('jet.fb.submit.reload.promises', 'jet-form-builder-recaptcha', function (promises, event) {\n      var $form = $(event.target);\n      promises.push(new Promise(function (resolve, reject) {\n        setUpCaptcha($form.data('form-id'), resolve, reject);\n      }));\n      return promises;\n    });\n  };\n  $(setUpMain);\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZS1jYXB0Y2hhLXYzL2Zyb250ZW5kL21haW4uanMuanMiLCJuYW1lcyI6WyIkIiwiQ2FwdGNoYUhhbmRsZXIiLCJmb3JtSUQiLCJfcmVmIiwicmVzb2x2ZSIsInJlamVjdCIsImtleSIsInNjcmlwdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNwRmllbGQiLCJmaW5kIiwic2V0Rm9ybVRva2VuIiwid2luZG93IiwiZ3JlY2FwdGNoYSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJ0aGVuIiwidG9rZW4iLCJ2YWwiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzcmMiLCJjdXJyZW50SW5wdXQiLCJsZW5ndGgiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwic2V0VXBDYXB0Y2hhIiwiX09iamVjdCR2YWx1ZXMiLCJjdXJyZW50IiwiSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnIiwiT2JqZWN0IiwidmFsdWVzIiwiSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhIiwic2V0VXBNYWluIiwiYWRkRmlsdGVyIiwiSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCIsIkpldFBsdWdpbnMiLCJob29rcyIsIndwIiwicHJvbWlzZXMiLCIkZm9ybSIsInB1c2giLCJQcm9taXNlIiwiZGF0YSIsImV2ZW50IiwidGFyZ2V0IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL3JlLWNhcHRjaGEtdjMvZnJvbnRlbmQvbWFpbi5qcz80YjBjIl0sInNvdXJjZXNDb250ZW50IjpbIihcclxuXHRmdW5jdGlvbiAoICQgKSB7XHJcblx0XHRjb25zdCBDYXB0Y2hhSGFuZGxlciA9IGZ1bmN0aW9uIChcclxuXHRcdFx0Zm9ybUlELCB7IGtleSB9LCByZXNvbHZlLCByZWplY3QgKSB7XHJcblx0XHRcdHZhciBzY3JpcHQgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnc2NyaXB0I2pldC1mb3JtLWJ1aWxkZXItcmVjYXB0Y2hhLWpzJyApLFxyXG5cdFx0XHQgICAgY3BGaWVsZCA9ICQoICdmb3JtW2RhdGEtZm9ybS1pZD1cIicgKyBmb3JtSUQgKyAnXCJdJyApLlxyXG5cdFx0XHRcdCAgICBmaW5kKCAnLmNhcHRjaGEtdG9rZW4nICk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBzZXRGb3JtVG9rZW4oKSB7XHJcblx0XHRcdFx0aWYgKCB3aW5kb3cuZ3JlY2FwdGNoYSApIHtcclxuXHRcdFx0XHRcdGdyZWNhcHRjaGEuZXhlY3V0ZShcclxuXHRcdFx0XHRcdFx0a2V5LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiAnamV0X2Zvcm1fYnVpbGRlcl9jYXB0Y2hhX18nICsgZm9ybUlELFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KS50aGVuKCBmdW5jdGlvbiAoIHRva2VuICkge1xyXG5cdFx0XHRcdFx0XHRjcEZpZWxkLnZhbCggdG9rZW4gKTtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggIXNjcmlwdCApIHtcclxuXHJcblx0XHRcdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcclxuXHJcblx0XHRcdFx0c2NyaXB0LmlkICA9ICdqZXQtZm9ybS1idWlsZGVyLXJlY2FwdGNoYS1qcyc7XHJcblx0XHRcdFx0c2NyaXB0LnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanM/cmVuZGVyPScgK1xyXG5cdFx0XHRcdFx0a2V5O1xyXG5cclxuXHRcdFx0XHRjb25zdCBjdXJyZW50SW5wdXQgPSBjcEZpZWxkWyBjcEZpZWxkLmxlbmd0aCAtIDEgXTtcclxuXHJcblx0XHRcdFx0Y3VycmVudElucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBzY3JpcHQsIGN1cnJlbnRJbnB1dCApO1xyXG5cclxuXHRcdFx0XHRzZXRGb3JtVG9rZW4oKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2V0Rm9ybVRva2VuKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2V0VXBDYXB0Y2hhID0gZnVuY3Rpb24gKCBmb3JtSUQsIHJlc29sdmUsIHJlamVjdCApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWdbIGZvcm1JRCBdIHx8XHJcblx0XHRcdFx0e307XHJcblxyXG5cdFx0XHRpZiAoICFPYmplY3QudmFsdWVzKCBjdXJyZW50ICk/Lmxlbmd0aCApIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhKCBmb3JtSUQsIGN1cnJlbnQsIHJlc29sdmUsIHJlamVjdCApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzZXRVcE1haW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCBhZGRGaWx0ZXI7XHJcblxyXG5cdFx0XHRpZiAoIHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ICkge1xyXG5cdFx0XHRcdGFkZEZpbHRlciA9IHdpbmRvdy5KZXRQbHVnaW5zLmhvb2tzLmFkZEZpbHRlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhZGRGaWx0ZXIgPSB3cC5ob29rcy5hZGRGaWx0ZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggIXdpbmRvdy5KZXRGb3JtQnVpbGRlckNhcHRjaGEgKSB7XHJcblx0XHRcdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ2FwdGNoYSA9IENhcHRjaGFIYW5kbGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhZGRGaWx0ZXIoXHJcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQuYWpheC5wcm9taXNlcycsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXItcmVjYXB0Y2hhJyxcclxuXHRcdFx0XHRmdW5jdGlvbiAoIHByb21pc2VzLCAkZm9ybSApIHtcclxuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0VXBDYXB0Y2hhKFxyXG5cdFx0XHRcdFx0XHRcdCRmb3JtLmRhdGEoICdmb3JtLWlkJyApLFxyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUsXHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0LFxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fSApICk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRhZGRGaWx0ZXIoXHJcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQucmVsb2FkLnByb21pc2VzJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci1yZWNhcHRjaGEnLFxyXG5cdFx0XHRcdGZ1bmN0aW9uICggcHJvbWlzZXMsIGV2ZW50ICkge1xyXG5cdFx0XHRcdFx0Y29uc3QgJGZvcm0gPSAkKCBldmVudC50YXJnZXQgKTtcclxuXHJcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKCBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldFVwQ2FwdGNoYShcclxuXHRcdFx0XHRcdFx0XHQkZm9ybS5kYXRhKCAnZm9ybS1pZCcgKSxcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlLFxyXG5cdFx0XHRcdFx0XHRcdHJlamVjdCxcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH0gKSApO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0JCggc2V0VXBNYWluICk7XHJcblx0fVxyXG4pKCBqUXVlcnkgKTsiXSwibWFwcGluZ3MiOiJBQUFBLENBQ0MsVUFBV0EsQ0FBQyxFQUFHO0VBQ2QsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUNuQkMsTUFBTSxFQUFBQyxJQUFBLEVBQVdDLE9BQU8sRUFBRUMsTUFBTSxFQUFHO0lBQUEsSUFBekJDLEdBQUcsR0FBQUgsSUFBQSxDQUFIRyxHQUFHO0lBQ2IsSUFBSUMsTUFBTSxHQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FDbkMsc0NBQXVDLENBQUM7TUFDckNDLE9BQU8sR0FBR1YsQ0FBQyxDQUFFLHFCQUFxQixHQUFHRSxNQUFNLEdBQUcsSUFBSyxDQUFDLENBQ25EUyxJQUFJLENBQUUsZ0JBQWlCLENBQUM7SUFFN0IsU0FBU0MsWUFBWUEsQ0FBQSxFQUFHO01BQ3ZCLElBQUtDLE1BQU0sQ0FBQ0MsVUFBVSxFQUFHO1FBQ3hCQSxVQUFVLENBQUNDLE9BQU8sQ0FDakJULEdBQUcsRUFDSDtVQUNDVSxNQUFNLEVBQUUsNEJBQTRCLEdBQUdkO1FBQ3hDLENBQ0QsQ0FBQyxDQUFDZSxJQUFJLENBQUUsVUFBV0MsS0FBSyxFQUFHO1VBQzFCUixPQUFPLENBQUNTLEdBQUcsQ0FBRUQsS0FBTSxDQUFDO1VBQ3BCZCxPQUFPLENBQUMsQ0FBQztRQUNWLENBQUUsQ0FBQztNQUNKLENBQUMsTUFDSTtRQUNKQSxPQUFPLENBQUMsQ0FBQztNQUNWO0lBQ0Q7SUFFQSxJQUFLLENBQUNHLE1BQU0sRUFBRztNQUVkQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ1ksYUFBYSxDQUFFLFFBQVMsQ0FBQztNQUUzQ2IsTUFBTSxDQUFDYyxFQUFFLEdBQUksK0JBQStCO01BQzVDZCxNQUFNLENBQUNlLEdBQUcsR0FBRyxpREFBaUQsR0FDN0RoQixHQUFHO01BRUosSUFBTWlCLFlBQVksR0FBR2IsT0FBTyxDQUFFQSxPQUFPLENBQUNjLE1BQU0sR0FBRyxDQUFDLENBQUU7TUFFbERELFlBQVksQ0FBQ0UsVUFBVSxDQUFDQyxZQUFZLENBQUVuQixNQUFNLEVBQUVnQixZQUFhLENBQUM7TUFFNURYLFlBQVksQ0FBQyxDQUFDO0lBRWYsQ0FBQyxNQUNJO01BQ0pBLFlBQVksQ0FBQyxDQUFDO0lBQ2Y7RUFDRCxDQUFDO0VBRUQsSUFBTWUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQWN6QixNQUFNLEVBQUVFLE9BQU8sRUFBRUMsTUFBTSxFQUFHO0lBQUEsSUFBQXVCLGNBQUE7SUFDekQsSUFBTUMsT0FBTyxHQUFHaEIsTUFBTSxDQUFDaUIsMkJBQTJCLENBQUU1QixNQUFNLENBQUUsSUFDM0QsQ0FBQyxDQUFDO0lBRUgsSUFBSyxHQUFBMEIsY0FBQSxHQUFDRyxNQUFNLENBQUNDLE1BQU0sQ0FBRUgsT0FBUSxDQUFDLGNBQUFELGNBQUEsZUFBeEJBLGNBQUEsQ0FBMEJKLE1BQU0sR0FBRztNQUN4QyxPQUFPcEIsT0FBTyxDQUFDLENBQUM7SUFDakI7SUFFQVMsTUFBTSxDQUFDb0IscUJBQXFCLENBQUUvQixNQUFNLEVBQUUyQixPQUFPLEVBQUV6QixPQUFPLEVBQUVDLE1BQU8sQ0FBQztFQUNqRSxDQUFDO0VBRUQsSUFBTTZCLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQWU7SUFDN0IsSUFBSUMsU0FBUztJQUViLElBQUt0QixNQUFNLENBQUN1QixzQkFBc0IsRUFBRztNQUNwQ0QsU0FBUyxHQUFHdEIsTUFBTSxDQUFDd0IsVUFBVSxDQUFDQyxLQUFLLENBQUNILFNBQVM7SUFDOUMsQ0FBQyxNQUNJO01BQ0pBLFNBQVMsR0FBR0ksRUFBRSxDQUFDRCxLQUFLLENBQUNILFNBQVM7SUFDL0I7SUFFQSxJQUFLLENBQUN0QixNQUFNLENBQUNvQixxQkFBcUIsRUFBRztNQUNwQ3BCLE1BQU0sQ0FBQ29CLHFCQUFxQixHQUFHaEMsY0FBYztJQUM5QztJQUVBa0MsU0FBUyxDQUNSLDZCQUE2QixFQUM3Qiw0QkFBNEIsRUFDNUIsVUFBV0ssUUFBUSxFQUFFQyxLQUFLLEVBQUc7TUFDNUJELFFBQVEsQ0FBQ0UsSUFBSSxDQUFFLElBQUlDLE9BQU8sQ0FBRSxVQUFFdkMsT0FBTyxFQUFFQyxNQUFNLEVBQU07UUFDbERzQixZQUFZLENBQ1hjLEtBQUssQ0FBQ0csSUFBSSxDQUFFLFNBQVUsQ0FBQyxFQUN2QnhDLE9BQU8sRUFDUEMsTUFDRCxDQUFDO01BQ0YsQ0FBRSxDQUFFLENBQUM7TUFFTCxPQUFPbUMsUUFBUTtJQUNoQixDQUNELENBQUM7SUFFREwsU0FBUyxDQUNSLCtCQUErQixFQUMvQiw0QkFBNEIsRUFDNUIsVUFBV0ssUUFBUSxFQUFFSyxLQUFLLEVBQUc7TUFDNUIsSUFBTUosS0FBSyxHQUFHekMsQ0FBQyxDQUFFNkMsS0FBSyxDQUFDQyxNQUFPLENBQUM7TUFFL0JOLFFBQVEsQ0FBQ0UsSUFBSSxDQUFFLElBQUlDLE9BQU8sQ0FBRSxVQUFFdkMsT0FBTyxFQUFFQyxNQUFNLEVBQU07UUFDbERzQixZQUFZLENBQ1hjLEtBQUssQ0FBQ0csSUFBSSxDQUFFLFNBQVUsQ0FBQyxFQUN2QnhDLE9BQU8sRUFDUEMsTUFDRCxDQUFDO01BQ0YsQ0FBRSxDQUFFLENBQUM7TUFFTCxPQUFPbUMsUUFBUTtJQUNoQixDQUNELENBQUM7RUFFRixDQUFDO0VBRUR4QyxDQUFDLENBQUVrQyxTQUFVLENBQUM7QUFDZixDQUFDLEVBQ0NhLE1BQU8sQ0FBQyJ9\n//# sourceURL=webpack-internal:///./re-captcha-v3/frontend/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./re-captcha-v3/frontend/main.js"]();
/******/ 	
/******/ })()
;