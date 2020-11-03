/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./editor/others.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./editor/others.js":
/*!**************************!*\
  !*** ./editor/others.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar _wp$blockEditor = wp.blockEditor,\n    ColorPalette = _wp$blockEditor.ColorPalette,\n    RichText = _wp$blockEditor.RichText,\n    Editable = _wp$blockEditor.Editable,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    ServerSideRender = _wp$blockEditor.ServerSideRender,\n    BlockControls = _wp$blockEditor.BlockControls,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Button = _wp$components.Button;\n\nfunction FormEdit(props) {\n  this.name = 'jet-forms/form';\n\n  this.keyControls = function () {\n    return this.name + '-controls-edit';\n  };\n\n  this.keyGeneral = function () {\n    return this.name + '-general-edit';\n  };\n\n  var attributes = props.attributes;\n  return props.isSelected && wp.element.createElement(InspectorControls, {\n    key: this.keyControls()\n  }, wp.element.createElement(PanelBody, {\n    title: __('Form Settings'),\n    key: this.keyGeneral()\n  }));\n}\n\nfunction FormSave(props) {\n  return null;\n}\n\nvar formBlock = window.jetFormBuilderBlocks ? window.jetFormBuilderBlocks[0] : false;\nregisterBlockType(formBlock.blockName, {\n  title: formBlock.title,\n  category: 'layout',\n  icon: 'feedback',\n  attributes: formBlock.attributes,\n  edit: FormEdit,\n  save: FormSave,\n  supports: {\n    html: false,\n    multiple: false\n  }\n});\n\n//# sourceURL=webpack:///./editor/others.js?");

/***/ })

/******/ });