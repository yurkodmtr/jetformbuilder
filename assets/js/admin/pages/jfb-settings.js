(()=>{var e={452:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(994),r=n.n(a),i=n(3476),o=n.n(i)()(r());o.push([e.id,".jet-form-builder-page p.fb-description{font-size:13px;color:#7b7e81;margin:0 0 1.5rem 0}","",{version:3,sources:["webpack://./../scss/admin/default.scss"],names:[],mappings:"AACC,wCACC,cAAA,CACA,aAAA,CACA,mBAAA",sourcesContent:[".jet-form-builder-page {\r\n\tp.fb-description {\r\n\t\tfont-size: 13px;\r\n\t\tcolor: #7b7e81;\r\n\t\tmargin: 0 0 1.5rem 0;\r\n\t}\r\n}\r\n\r\n\r\n\r\n"],sourceRoot:""}]);const s=o},3476:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},994:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}e.exports=function(e){var n,a,r=(a=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return i}}(n,a)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,n):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[1],o=r[3];if(!o)return i;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),c="/*# ".concat(l," */"),u=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[i].concat(u).concat([c]).join("\n")}return[i].join("\n")}},8823:(e,t,n)=>{var a=n(452);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(9441).Z)("3468b97e",a,!1,{})},9441:(e,t,n)=>{"use strict";function a(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],o=i[0],s={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}n.d(t,{Z:()=>b});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,u=function(){},p=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(e,t,n,r){c=n,p=r||{};var o=a(e,t);return m(o),function(t){for(var n=[],r=0;r<o.length;r++){var s=o[r];(l=i[s.id]).refs--,n.push(l)}for(t?m(o=a(e,t)):o=[],r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],a=i[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(v(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(v(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:o}}}}function h(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function v(e){var t,n,a=document.querySelector("style["+f+'~="'+e.id+'"]');if(a){if(c)return u;a.parentNode.removeChild(a)}if(d){var r=l++;a=s||(s=h()),t=_.bind(null,a,r,!1),n=_.bind(null,a,r,!0)}else a=h(),t=w.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var y,g=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function w(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),p.ssrId&&e.setAttribute(f,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};n.r(e),n.d(e,{component:()=>h,title:()=>m});var t={};n.r(t),n.d(t,{component:()=>A,title:()=>S});var a={};n.r(a),n.d(a,{component:()=>L,title:()=>E});var r={};n.r(r),n.d(r,{component:()=>N,title:()=>U});var i={};n.r(i),n.d(i,{component:()=>ne,title:()=>te});var o={};n.r(o),n.d(o,{component:()=>_e,displayButton:()=>we,title:()=>ge});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jet-form-builder-page jet-form-builder-page--settings wrap"},[n("h1",{staticClass:"cs-vui-title"},[e._v(e._s("JetFormBuilder Settings"))]),e._v(" "),n("div",{staticClass:"cx-vui-panel"},[n("cx-vui-tabs",{attrs:{"in-panel":!1,value:e.activeTabSlug,layout:"vertical"},on:{input:e.onChangeActiveTab}},e._l(e.tabs,(function(t,a){var r=t.displayButton;void 0===r&&(r=!0);var i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(t,["displayButton"]);return n("cx-vui-tabs-panel",{key:i.component.name,attrs:{name:i.component.name,label:i.title}},[n("keep-alive",[n(i.component,{ref:"tabComponents",refInFor:!0,tag:"component",attrs:{incoming:e.getIncoming(i.component.name),"inner-slugs":e.activeTabInnerSlugs||[]}})],1),e._v(" "),r?n("cx-vui-button",{attrs:{"button-style":"accent",loading:e.loadingTab[i.component.name]},on:{click:function(t){return e.onSaveTab(a,i.component.name)}},scopedSlots:e._u([{key:"label",fn:function(){return[n("span",[e._v("Save")])]},proxy:!0}],null,!0)}):e._e()],1)})),1)],1)])};s._withStripped=!0;var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("cx-vui-input",{attrs:{label:e.label.key,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}}),e._v(" "),n("cx-vui-input",{attrs:{label:e.label.secret,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.secret,callback:function(t){e.secret=t},expression:"secret"}}),e._v(" "),n("p",{staticClass:"fb-description"},[e._v(e._s(e.help.apiPref)+" "),n("a",{attrs:{href:e.help.apiLink,target:"_blank"}},[e._v(e._s(e.help.apiLinkLabel))])])],1)};l._withStripped=!0;var c=wp.i18n.__,u={key:c("Site Key","jet-form-builder"),secret:c("Secret Key","jet-form-builder")},p={apiPref:c("Register reCAPTCHA v3 keys"),apiLinkLabel:c("here"),apiLink:"https://www.google.com/recaptcha/admin/create"};function f(e,t,n,a,r,i,o,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}var d=f({name:"captcha-tab",props:{incoming:{type:Object,default:{}}},data:function(){return{label:u,help:p,key:"",secret:""}},created:function(){this.key=this.incoming.key||"",this.secret=this.incoming.secret||""},methods:{getRequestOnSave:function(){return{data:{secret:this.secret,key:this.key}}}}},l,[],!1,null,null,null);d.options.__file="admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue";const b=d.exports;var m=(0,wp.i18n.__)("Captcha Settings","jet-form-builder"),h=b,v=function(){var e=this,t=e.$createElement;return(e._self._c||t)("cx-vui-input",{attrs:{label:e.label.api_key,"wrapper-css":["equalwidth"],description:e.help.apiPref+' <a href="'+e.help.apiLink+'" target="_blank">'+e.help.apiLinkLabel+"</a>",size:"fullwidth"},model:{value:e.api_key,callback:function(t){e.api_key=t},expression:"api_key"}})};v._withStripped=!0;var y=wp.i18n.__,g={api_key:y("API Key","jet-form-builder")},w={apiPref:y("How to obtain your MailChimp API Key? More info"),apiLinkLabel:y("here"),apiLink:"https://mailchimp.com/help/about-api-keys/"},j=f({name:"mailchimp-tab",props:{incoming:{type:Object,default:{}}},data:function(){return{label:g,help:w,api_key:""}},created:function(){this.api_key=this.incoming.api_key||""},methods:{getRequestOnSave:function(){return{data:{api_key:this.api_key}}}}},v,[],!1,null,null,null);j.options.__file="admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue";const k=j.exports;var S=(0,wp.i18n.__)("MailChimp API","jet-form-builder"),A=k,O=function(){var e=this,t=e.$createElement;return(e._self._c||t)("cx-vui-input",{attrs:{label:e.label.api_key,"wrapper-css":["equalwidth"],description:e.help.apiPref+' <a href="'+e.help.apiLink+'" target="_blank">'+e.help.apiLinkLabel+"</a>",size:"fullwidth"},model:{value:e.api_key,callback:function(t){e.api_key=t},expression:"api_key"}})};O._withStripped=!0;var x=wp.i18n.__,C={api_key:x("API Key","jet-form-builder")},P={apiPref:x("How to obtain your GetResponse API Key? More info"),apiLinkLabel:x("here"),apiLink:"https://app.getresponse.com/api"},T=f({name:"get-response-tab",props:{incoming:{type:Object,default:{}}},data:function(){return{label:C,help:P,api_key:""}},created:function(){this.api_key=this.incoming.api_key||""},methods:{getRequestOnSave:function(){return{data:{api_key:this.api_key}}}}},O,[],!1,null,null,null);T.options.__file="admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue";const I=T.exports;var E=(0,wp.i18n.__)("GetResponse API","jet-form-builder"),L=I,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("cx-vui-input",{attrs:{label:e.label.api_key,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.api_key,callback:function(t){e.api_key=t},expression:"api_key"}}),e._v(" "),n("cx-vui-input",{attrs:{label:e.label.api_url,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.api_url,callback:function(t){e.api_url=t},expression:"api_url"}}),e._v(" "),n("p",{staticClass:"fb-description"},[e._v(e._s(e.help.apiPref)+" "),n("a",{attrs:{href:e.help.apiLink,target:"_blank"}},[e._v(e._s(e.help.apiLinkLabel))])])],1)};$._withStripped=!0;var B=wp.i18n.__,R={api_key:B("API Key","jet-form-builder"),api_url:B("API URL","jet-form-builder")},G={apiPref:B("How to obtain your ActiveCampaign API URL and Key? More info"),apiLinkLabel:B("here"),apiLink:"https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API"},M=f({name:"active-campaign-tab",props:{incoming:{type:Object,default:{}}},data:function(){return{label:R,help:G,api_key:"",api_url:""}},created:function(){this.api_key=this.incoming.api_key||"",this.api_url=this.incoming.api_url||""},methods:{getRequestOnSave:function(){return{data:{api_key:this.api_key,api_url:this.api_url}}}}},$,[],!1,null,null,null);M.options.__file="admin/pages/jfb-settings/tabs/activecampaign/ActiveCampaignTab.vue";const q=M.exports;var U=(0,wp.i18n.__)("ActiveCampaign API","jet-form-builder"),N=q,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("cx-vui-switcher",{attrs:{name:"use_gateways","wrapper-css":["equalwidth"],label:e.label.use_gateways,description:e.help.use_gateways,value:e.storage.use_gateways},on:{input:function(t){return e.changeVal("use_gateways",t)}}}),e._v(" "),e.storage.use_gateways?n("cx-vui-switcher",{attrs:{name:"enable_test_mode","wrapper-css":["equalwidth"],description:e.help.enable_test_mode,label:e.label.enable_test_mode,value:e.storage.enable_test_mode},on:{input:function(t){return e.changeVal("enable_test_mode",t)}}}):e._e(),e._v(" "),e.storage.use_gateways?[n("div",{staticClass:"cx-vui-inner-panel"},e._l(e.gateways,(function(t,a){return n("CxVuiCollapseMini",{key:t.component.name,attrs:{"with-panel":"",desc:t.desc||"",label:t.title,"initial-active":e.isActive(t.component.name)},on:{change:function(n){return e.onChangeActive(n,t.component.name)}}},[n("keep-alive",[n(t.component,{ref:"gateways",refInFor:!0,tag:"component",attrs:{incoming:e.getIncoming(t.component.name)}})],1),e._v(" "),n("cx-vui-button",{attrs:{"button-style":"accent",loading:e.loadingGateways[t.component.name]},on:{click:function(n){return e.onSaveGateway(a,t.component.name)}}},[n("span",{attrs:{slot:"label"},slot:"label"},[e._v("Save")])])],1)})),1)]:e._e()],2)};D._withStripped=!0;var J=wp.i18n.__,z={use_gateways:J("Enable Gateways","jet-form-builder"),enable_test_mode:J("Enable Test Mode","jet-form-builder")},F={enable_test_mode:J("This option takes precedence over the <code>jet-form-builder/gateways/paypal/sandbox-mode</code> filter. \n\t\tAs of right now, works only for PayPal payment system","jet-form-builder"),use_gateways:J("Activate payment gateways for the forms. This option takes precedence over the \n\t\t<code>jet-form-builder/allow-gateways</code> filter","jet-form-builder")},V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("cx-vui-input",{attrs:{label:e.label.client_id,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.storage.client_id,callback:function(t){e.$set(e.storage,"client_id",t)},expression:"storage.client_id"}}),e._v(" "),n("cx-vui-input",{attrs:{label:e.label.secret,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.storage.secret,callback:function(t){e.$set(e.storage,"secret",t)},expression:"storage.secret"}})],1)};V._withStripped=!0;var K=wp.i18n.__,H={client_id:K("Client ID","jet-form-builder"),secret:K("Secret Key","jet-form-builder")},X={};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=f({name:"paypal",props:{incoming:{type:Object,default:function(){return{}}}},data:function(){return{label:H,help:X,storage:{}}},created:function(){this.storage=JSON.parse(JSON.stringify(this.incoming))},methods:{getRequestOnSave:function(){return{data:W({},this.storage)}}}},V,[],!1,null,null,null);Y.options.__file="admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue";const ee=Y.exports;var te=(0,wp.i18n.__)("PayPal Gateway API","jet-form-builder"),ne=ee;function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||le(e)||se(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}function le(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ue=wp.hooks.applyFilters,pe=window.JetFBMixins,fe=pe.SaveTabByAjax,de=pe.GetIncoming,be=window.JetFBComponents.CxVuiCollapseMini;window.jfbEventBus=window.jfbEventBus||new Vue;var me=ue("jet.fb.register.gateways",[i]),he=function(){},ve=f({name:"payments-gateways",props:{incoming:{type:Object,default:function(){return{}}},innerSlugs:Array},components:{CxVuiCollapseMini:be},mixins:[fe,de],data:function(){return{label:z,help:F,storage:JSON.parse(JSON.stringify(this.incoming)),gateways:me,loadingGateways:{},activeGatewaysTabs:[]}},created:function(){var e=this;jfbEventBus.$on("request-state",(function(t){var n=t.state,a=t.slug;e.$set(e.loadingGateways,a,"begin"===n)})),jfbEventBus.$on("change-tab",function(e){if(e.slug!==this.$options.name)return!1;window.location.hash="#"+[this.$options.name].concat(oe(this.activeGatewaysTabs)).join("__")}.bind(this)),this.activeGatewaysTabs=this.innerSlugs,he=_.debounce((function(){e.saveByAjax(e,e.$options.name)}),1e3)},methods:{onChangeActive:function(e,t){var n,a=function(e){if(Array.isArray(e))return e}(n=window.location.hash.replace("#","").split("__"))||le(n)||se(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=(a[0],a.slice(1));e?r.push(t):r=r.filter((function(n){return t!==n||e})),this.changeGatewaysTabs(r),window.location.hash=[this.$options.name].concat(oe(r)).join("__")},changeGatewaysTabs:function(e){this.activeGatewaysTabs=e},isActive:function(e){return Boolean(this.activeGatewaysTabs.length&&this.activeGatewaysTabs.includes(e))},changeVal:function(e,t){this.$set(this.storage,e,t),he()},onSaveGateway:function(e,t){var n=this.$refs.gateways[e];this.saveByAjax(n,t)},getRequestOnSave:function(){return{data:re({},this.storage)}}}},D,[],!1,null,null,null);ve.options.__file="admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue";const ye=ve.exports;var ge=(0,wp.i18n.__)("Payments Gateways","jet-form-builder"),_e=ye,we=!1;function je(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ke(e,t){if(e){if("string"==typeof e)return Se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Se(e,t):void 0}}function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Ae(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function Oe(e){if(Array.isArray(e))return e}n(8823);var xe=wp.hooks,Ce=xe.applyFilters,Pe=(xe.doAction,window.JetFBMixins),Te=Pe.SaveTabByAjax,Ie=Pe.GetIncoming;window.jfbEventBus=window.jfbEventBus||new Vue;var Ee=Ce("jet.fb.register.settings-page.tabs",[o,e,t,a,r]),Le=function(e){window.location.hash="#"+e},$e=function(){var e=Ee[0].component.name;if(!window.location.hash)return Le(e),[e];var t,n=Oe(t=window.location.hash.replace("#","").split("__"))||Ae(t)||ke(t)||je(),a=n[0],r=n.slice(1),i=Ee.find((function(e){return e.component.name===a}));return i?(Le([i.component.name].concat(function(e){return function(e){if(Array.isArray(e))return Se(e)}(e)||Ae(e)||ke(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r)).join("__")),[i.component.name,r]):(Le(e),[e])},Be=f({name:"jfb-settings",data:function(){var e,t,n=(e=$e(),t=2,Oe(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||ke(e,t)||je());return{activeTabSlug:n[0],activeTabInnerSlugs:n[1],tabs:Ee,loadingTab:{}}},mixins:[Te,Ie],created:function(){var e=this;jfbEventBus.$on("request-state",(function(t){var n=t.state,a=t.slug;e.$set(e.loadingTab,a,"begin"===n)}))},methods:{onChangeActiveTab:function(e){var t=new URL(document.URL);t.hash="#"+e,document.location.href=t.href,jfbEventBus.$emit("change-tab",{slug:e})},onSaveTab:function(e,t){var n=this.$refs.tabComponents[e];this.saveByAjax(n,t)}}},s,[],!1,null,null,null);Be.options.__file="admin/pages/jfb-settings/SettingsPage.vue";const Re=Be.exports;(0,window.JetFBActions.renderCurrentPage)(Re)})()})();