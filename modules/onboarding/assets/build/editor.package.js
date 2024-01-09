(()=>{"use strict";const e="jet-forms/patterns",t="REGISTER",r="UNREGISTER",n="UPDATE_SETTING";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var a={getTypeIndex:function(e,t){return e.types.findIndex((function(e){return e.name===t}))},getTypes:function(e){return e.types.filter((function(e){return"default"!==e.name}))},getType:function(e,t){var r=a.getTypeIndex(e,t);return e.types[r]},getSetting:function(e,t){return e.settings[t]},getSettings:function(e){return e.settings}};const l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){var n,i,a;n=e,i=t,a=r[t],(i=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},a);var c=wp.blockEditor.useBlockEditContext,s=wp.data.useSelect;const u=function(){var e=c();return s((function(t){return t("core/block-editor").getBlocks().filter((function(t){return t.clientId!==e.clientId}))}),[e.isSelected,e.clientId])};function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var f=["actions","blocks","name","icon","title","description"];function m(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=wp.blockEditor.useBlockEditContext,w=wp.blocks.createBlocksFromInnerBlocksTemplate,h=wp.data,O=h.useDispatch,j=h.useSelect,S=(wp.hooks.doAction,JetFBActions.convertFlow),P=JetFBHooks.useActions;const k=function(t){var r,n,o=t.name,i=t.onApply,a=void 0===i?function(){}:i,l=g().clientId,c=u(),s=O("core/editor").editPost,p=(r=P(),n=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(r,n)||d(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=p[0],v=p[1],h=O("core/block-editor"),k=h.removeBlocks,E=h.replaceBlocks,_=h.insertBlocks,A=j((function(t){return t(e).getType(o)}),[]),x=j((function(e){return e("jet-forms/patterns").getSetting("saveRecord")}));function I(){var e,t,r,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o=y(y({},A),o),l?E([l],w(null!==(e=null===(t=o)||void 0===t?void 0:t.blocks)&&void 0!==e?e:[]),0):_(w(null!==(r=null===(n=o)||void 0===n?void 0:n.blocks)&&void 0!==r?r:[]));var i=o,a=(i.actions,i.blocks,i.name,i.icon,i.title,i.description,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(i,f));s(a)}return{pattern:A,insert:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};I(r),r=y(y({},A),r),k(c.map((function(e){return e.clientId})));var n=S(null!==(e=null===(t=r)||void 0===t?void 0:t.actions)&&void 0!==e?e:[]);x&&n.add("save_record"),v(n.list),a()},append:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};I(r),r=y(y({},A),r);var n=S(null!==(e=null===(t=r)||void 0===t?void 0:t.actions)&&void 0!==e?e:[]);x&&n.add("save_record"),v([].concat(m(b),m(n.list))),a()},blocks:c}};var E=["patternName","withPatternIcon","onClick","onApply"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}var A=wp.components,x=A.Button,I=A.Popover,B=wp.i18n.__,T=JetFBHooks.useTriggerPopover;const Z=function(e){var t=e.patternName,r=e.withPatternIcon,n=void 0!==r&&r,o=e.onClick,i=void 0!==o&&o,a=e.onApply,l=void 0===a?function(){}:a,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,E),s=T(),p=s.ref,f=s.showPopover,m=s.setShowPopover,b=s.popoverProps,y=u(),d=k({name:t,onApply:l}),v=d.pattern,g=d.insert,w=d.append;return wp.element.createElement(React.Fragment,null,wp.element.createElement(x,_({ref:p,icon:n&&wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:v.icon}}),onClick:function(){"function"!=typeof i?y.length?m((function(e){return!e})):g():i()},label:v.description||v.title},c)),f&&wp.element.createElement(I,_({position:"top-start",noArrow:!1,isAlternate:!0},b),wp.element.createElement("div",{style:{padding:"0.5em",width:"max-content"}},wp.element.createElement("span",null,B("I want to","jet-form-builder"))," ",wp.element.createElement(x,{isLink:!0,isDestructive:!0,onClick:g},B("replace","jet-form-builder"))," / ",wp.element.createElement(x,{isLink:!0,onClick:w},B("append","jet-form-builder"))," ",wp.element.createElement("span",null,B("form settings and blocks","jet-form-builder")))))},D=function(e){var t=e.pattern;return wp.element.createElement("li",null,wp.element.createElement(Z,{key:t.name,variant:"secondary",patternName:t.name,withPatternIcon:!0,iconSize:48,className:"block-editor-block-variation-picker__variation"}),wp.element.createElement("span",{className:"block-editor-block-variation-picker__variation-label"},t.title))};function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}var N;function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===M(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const R=(F(N={},t,(function(e,t){Array.isArray(t.items)||(t.items=[t.items]);var r,n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}(t.items);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(o.hasOwnProperty("name")){var i=l.getTypeIndex(e,o.name);-1===i?(o.hasOwnProperty("view")||(o.view=D),e.types.push(C({},o))):e.types[i]=C(C({},e.types[i]),o)}}}catch(e){n.e(e)}finally{n.f()}return e})),F(N,r,(function(e,t){var r=t.types;return e.types=e.types.filter((function(e){var t=e.name;return!r.includes(t)})),e})),F(N,n,(function(e,t){var r=t.settings;return C(C({},e),{},{settings:C(C({},e.settings),r)})})),N);var H={types:[],settings:{saveRecord:!1}};const L={register:function(e){return{type:t,items:e}},unRegister:function(e){return{type:r,types:e}},updateSettings:function(e){return{type:n,settings:e}}},U=(0,wp.data.createReduxStore)(e,{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,r=R[null==t?void 0:t.type];return r?r(e,t):e},actions:L,selectors:l}),G=JSON.parse('{"name":"insert_post","title":"Insert Post","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\" width=\\"36\\" height=\\"36\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill-rule=\\"evenodd\\" d=\\"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z\\" clip-rule=\\"evenodd\\"></path></svg>","actions":[{"type":"insert_post","settings":{"fields_map":{"title":"post_title","excerpt":"post_excerpt","content":"post_content"},"post_type":"post"}}],"blocks":[["jet-forms/text-field",{"name":"title","label":"Post Tile"}],["jet-forms/textarea-field",{"name":"excerpt","label":"Post Excerpt"}],["jet-forms/wysiwyg-field",{"name":"content","label":"Post Content"}],["jet-forms/submit-field"]]}'),z=JSON.parse('{"name":"default","title":"From scratch","blocks":[],"actions":[]}'),Y=JSON.parse('{"name":"feedback","title":"Feedback","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\" width=\\"36\\" height=\\"36\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill-rule=\\"evenodd\\" d=\\"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z\\" clip-rule=\\"evenodd\\"></path></svg>","actions":[{"type":"send_email","settings":{"mail_to":"form","from_field":"email","subject":"%subject%","content":"%message%"}}],"blocks":[["jet-forms/text-field",{"name":"email","label":"Email","field_type":"email"}],["jet-forms/text-field",{"name":"subject","label":"Subject"}],["jet-forms/wysiwyg-field",{"name":"message","label":"Message"}],["jet-forms/submit-field"]]}'),$=JSON.parse('{"name":"register_user","title":"Register User","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\" width=\\"36\\" height=\\"36\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill-rule=\\"evenodd\\" d=\\"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z\\" clip-rule=\\"evenodd\\"></path></svg>","actions":[{"type":"verification","mail_to":"email"},{"type":"register_user","settings":{"fields_map":{"email":"email","login":"login","password":"_jfb_verification_token","confirm_password":"_jfb_verification_token"},"log_in":true}}],"blocks":[["jet-forms/text-field",{"name":"email","label":"Email","field_type":"email"}],["jet-forms/text-field",{"name":"login","label":"Login"}],["jet-forms/submit-field"]]}'),W=JSON.parse('{"name":"reset_password","title":"Reset Password","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\" width=\\"36\\" height=\\"36\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill-rule=\\"evenodd\\" d=\\"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z\\" clip-rule=\\"evenodd\\"></path></svg>","blocks":[],"actions":[]}'),q=JSON.parse('{"name":"user_login","title":"User Login","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\" width=\\"36\\" height=\\"36\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill-rule=\\"evenodd\\" d=\\"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z\\" clip-rule=\\"evenodd\\"></path></svg>","blocks":[],"actions":[]}'),K=JSON.parse('{"name":"donation","title":"Paypal donation","icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\" width=\\"36\\" height=\\"36\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path fill-rule=\\"evenodd\\" d=\\"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z\\" clip-rule=\\"evenodd\\"></path></svg>","actions":[],"blocks":[["jet-forms/number-field",{"name":"amount","label":"Amount"}],["jet-forms/submit-field"]],"meta":{"_jf_gateways":"{\\"gateway\\":\\"paypal\\",\\"paypal\\":{\\"use_global\\":true,\\"currency\\":\\"USD\\",\\"scenario\\":{\\"id\\":\\"PAY_NOW\\"}},\\"price_field\\":\\"price\\"}"}}');function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q.apply(this,arguments)}var X=JetFBHooks.useTriggerPopover,ee=wp.components,te=ee.Button,re=ee.Popover,ne=ee.ExternalLink,oe=wp.i18n.__;const ie=function(e){var t=e.pattern,r=X(),n=r.ref,o=r.showPopover,i=r.setShowPopover,a=r.popoverProps;return wp.element.createElement("li",null,wp.element.createElement(te,{ref:n,icon:wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:t.icon}}),onClick:function(){return i((function(e){return!e}))},label:t.description||t.title,variant:"secondary",iconSize:48,className:"block-editor-block-variation-picker__variation is-pro"}),wp.element.createElement("span",{className:"block-editor-block-variation-picker__variation-label"},t.title),o&&wp.element.createElement(re,Q({position:"top-start",noArrow:!1,isAlternate:!0},a),wp.element.createElement("div",{style:{padding:"0.5em",width:"max-content"}},wp.element.createElement("span",null,oe("This is paid addon. You can buy it here:","jet-form-builder"))," ",wp.element.createElement(ne,{href:"https://jetformbuilder.com/pricing/"},oe("jetformbuilder.com","jet-form-builder")))))};var ae,le;function ce(e){return ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce(e)}function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==ce(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==ce(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===ce(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=wp.data,fe=pe.register,me=pe.dispatch;fe(U),me(e).register([z,Y,G,$,K,ue(ue({},W),{},{view:ie}),ue(ue({},q),{},{view:ie})]),window.JetFBComponents=ue(ue({},null!==(ae=window.JetFBComponents)&&void 0!==ae?ae:{}),{},{PatternInserterButton:Z}),window.JetFBHooks=ue(ue({},null!==(le=window.JetFBHooks)&&void 0!==le?le:{}),{},{usePattern:k})})();