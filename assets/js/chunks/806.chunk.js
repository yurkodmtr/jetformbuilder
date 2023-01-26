"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[806],{4806:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,{default:()=>y});var i=JetFBHooks.useMetaState,c=wp.components,f=c.TextControl,s=c.SelectControl,b=c.ToggleControl,p=wp.i18n.__,m=window.JetFormEditorData.argumentsSource||{};function y(){var e,t,r=(e=i("_jf_args"),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,a,u=[],i=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=l.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],o=r[1];return wp.element.createElement(React.Fragment,null,wp.element.createElement(s,{label:p("Fields Layout","jet-form-builder"),value:n.fields_layout,options:m.fields_layout,onChange:function(e){o((function(t){return l(l({},t),{},{fields_layout:e})}))}}),wp.element.createElement(f,{label:p("Required Mark","jet-form-builder"),value:n.required_mark,onChange:function(e){o((function(t){return l(l({},t),{},{required_mark:e})}))}}),wp.element.createElement(s,{label:p("Fields label HTML tag","jet-form-builder"),value:n.fields_label_tag,options:m.fields_label_tag,onChange:function(e){o((function(t){return l(l({},t),{},{fields_label_tag:e})}))}}),wp.element.createElement(s,{label:p("Submit Type","jet-form-builder"),value:n.submit_type,options:m.submit_type,onChange:function(e){o((function(t){return l(l({},t),{},{submit_type:e})}))}}),wp.element.createElement(b,{key:"enable_progress",label:p("Enable form pages progress","jet-from-builder"),checked:n.enable_progress,help:p("Displays the progress of a multi-page form","jet-form-builder"),onChange:function(){o((function(e){var t=!Boolean(e.enable_progress);return l(l({},e),{},{enable_progress:t})}))}}),wp.element.createElement(b,{key:"clear_on_ajax",label:p("Clear data on success submit","jet-from-builder"),checked:n.clear,help:p("Remove input values on successful submit","jet-form-builder"),onChange:function(){o((function(e){return l(l({},e),{},{clear:!Boolean(e.clear)})}))}}))}}}]);