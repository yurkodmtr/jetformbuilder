(()=>{"use strict";const e=window.React,{globalTab:t,Tools:{withPlaceholder:l},getFormFieldsBlocks:c,convertListToFieldsMap:a}=JetFBActions,{ActionFieldsMap:i,WrapperRequiredControl:s,ActionFetchButton:n,DynamicPropertySelect:o,ToggleControl:r}=JetFBComponents,{withRequestFields:m,withSelectActionLoading:p}=JetFBHooks,{TextControl:h,SelectControl:v,BaseControl:d}=wp.components,{__:u}=wp.i18n,{useState:_,useEffect:g}=wp.element,{withSelect:f}=wp.data,{compose:b}=wp.compose,w={first_name:"firstName",last_name:"lastName"},E=b(f(m),f(p))((function(m){var p;const{settings:f,onChangeSettingObj:b,source:E,label:k,help:y,requestFields:Z,loadingState:C}=m,V=t({slug:"active-campaign-tab"}),[F]=_((()=>[...c([],"--"),...Z]));g((()=>{const e={};for(const[l,c]of Object.entries(null!==(t=f.fields_map)&&void 0!==t?t:{})){var t;w.hasOwnProperty(l)?e[w[l]]=c:e[l]=c}b({fields_map:e})}),[]),g((()=>{if(!C.success)return;const e=new Set(C.response.fields.map((e=>e.value))),t={};for(const[l,c]of Object.entries(f.fields_map))e.has(l)&&(t[l]=c);b({fields_map:t})}),[C.success]);const j=e=>{var t;return f.use_global?V[e]:null!==(t=f[e])&&void 0!==t?t:""};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r,{checked:f.use_global,onChange:e=>b({use_global:Boolean(e)})},u("Use","jet-form-builder")+" ",(0,e.createElement)("a",{href:JetFormEditorData.global_settings_url+"#active-campaign-tab"},u("Global Settings","jet-form-builder"))),(0,e.createElement)(d,{label:k("api_data"),key:"activecampaign_input_key"},(0,e.createElement)("div",{className:"jet-control-clear-full jet-d-flex-between"},(0,e.createElement)("div",null,(0,e.createElement)(h,{key:"api_url",help:k("api_url"),className:"jet-control-clear",disabled:f.use_global,value:j("api_url"),onChange:e=>b({api_url:e})}),(0,e.createElement)(h,{key:"api_key",help:k("api_key"),className:"jet-control-clear",disabled:f.use_global,value:j("api_key"),onChange:e=>b({api_key:e})})),(0,e.createElement)(n,{initialLabel:k("validate_api_key"),label:k("retry_request"),apiArgs:{...E.fetch,headers:{"API-TOKEN":j("api_key"),"API-URL":j("api_url")}}}))),(0,e.createElement)("div",{style:{paddingBottom:"1.2em"}},y("api_key_link_prefix")," ",(0,e.createElement)("a",{href:y("api_key_link")},y("api_key_link_suffix"))),C.success&&(0,e.createElement)(React.Fragment,null,(0,e.createElement)(v,{key:"activecampaign_select_lists",label:k("list_id"),labelPosition:"side",value:f.list_id,onChange:e=>b({list_id:e}),options:l(null!==(p=C.response.lists)&&void 0!==p?p:[])}),(0,e.createElement)(h,{key:"activecampaign_tags",label:k("tags"),value:f.tags,help:y("tags"),onChange:e=>b({tags:e})}),(0,e.createElement)(i,{label:k("fields_map"),fields:a(C.response.fields)},(0,e.createElement)(s,null,(0,e.createElement)(o,{properties:F})))))})),k=window.wp.i18n,y=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 516 53",focusable:"false","aria-label":"ActiveCampaign","aria-hidden":"true"},(0,e.createElement)("path",{fill:"currentColor",d:"M387.3 1.2h-3.5v3.5c0 .9.4 2 2.2 2h3.5V3.2c0-.8-.3-2-2.2-2Zm-.3 11.3h-2.8v28.9c0 1.2.8 2 1.9 2.1v.1h3.2v-29c-.1-1.3-.8-2.1-2.3-2.1ZM217.6 35.1c-1.2-1.2-2.7-.9-3.6-.1-3.7 3.1-7.1 4.3-11.5 4.3-8.8 0-15.8-7.4-15.8-16.9 0-9.5 6.8-16.8 15.8-16.8 4.3 0 7.9 1.3 11.3 4.2.8.7 2.2 1 3.2-.1.9-.9 1.8-1.9 1.8-1.9l.2-.2-.2-.2c-3.6-3.5-8.1-6.7-16.3-6.7-11.9 0-21.1 9.6-21.1 21.8 0 12.3 9 21.6 21 21.6 6.7 0 11.6-2.2 16.6-7.4l.1-.2-.1-.2c0 .2-.3-.2-1.4-1.2Zm76-23.3c-4.4 0-7.9 1.9-10.6 5.7-1.2-2.4-4-5.9-9.8-5.9-5 0-7.7 2.6-9.7 5.2v-2.2c0-1.5-.9-2.4-2.3-2.4h-2.8v31.1h2.8c1.4 0 2.2-.4 2.2-2.1V25.7c0-5.4 3.5-9.4 8.2-9.4 4.8 0 7.6 3.3 7.6 8.9v16c0 1.5.8 2.2 2.2 2.2h2.8V25.6c0-6.4 4.1-9.2 8.2-9.2 4.9 0 7.7 3.3 7.7 8.9v15.6c0 1.3.3 2.5 2.3 2.5h2.7V24.3c.1-7.7-4.3-12.5-11.5-12.5Zm36.1.1c-4.6 0-8.4 2-11.5 6.3V15c0-1.6-.9-2.4-2.5-2.4h-2.5v38.2c0 1.5.7 2.2 2.2 2.2h2.8V38.2c3.1 4 6.8 6 11.5 6 7.2 0 14.8-5.7 14.8-16.2s-7.6-16.1-14.8-16.1Zm9.6 16.1c0 6.8-4.3 11.5-10.5 11.5-5.3 0-10.8-4.4-10.8-11.6 0-7.2 5.5-11.6 10.8-11.6 5.2.1 10.5 4.1 10.5 11.7Zm82.9-13.3v2.6c-2.1-2.7-5.8-5.7-11.7-5.7-3.7 0-7.4 1.4-10.1 3.9-2.9 2.7-4.5 6.6-4.5 10.8 0 9.5 7.5 14.6 14.6 14.6 4.6 0 8.5-1.9 11.8-5.9v3c0 6.8-4 10.7-10.8 10.7-3.3 0-6.5-.8-9.5-2.5-.8-.5-1.4-.7-1.9-.7-.6 0-1.2.3-1.6 1-.8 1.3-1.1 1.9-1.1 1.9l-.1.2.2.1c4.1 2.9 8.8 4.3 14 4.3 10 0 15.8-5.5 15.8-15.1V12.4h-2.8c-.9 0-2.3.8-2.3 2.3Zm.3 11.9c0 6.4-5.6 10.2-11 10.2-5.9 0-10.3-4.4-10.3-10.2 0-5.9 4.4-10.1 10.3-10.1 5.3-.1 11 3.4 11 10.1Zm28.4-14.7c-4.4 0-7.8 1.8-10.2 5.4v-2.6c0-1.5-1.2-2.1-2.4-2.1h-2.8v31.1h5.1l-.1-17.8c0-5.5 3.7-9.3 9-9.3 5.2 0 8.2 3.3 8.2 9v16c0 1.5.7 2.1 2 2.1h3V24.3c.1-7.6-4.5-12.4-11.8-12.4Zm-87.6.1c-3.9 0-7.4.8-11.2 2.5l-.2.1.1.2s.5 1.4.9 2.4 1.6 1.1 2.5.7c2.6-1 4.9-1.5 7.5-1.5 5.7 0 8.8 2.9 8.8 8.1V32c0 4.7-4.2 8-10 8-3.6 0-7.5-1.8-7.5-5.8 0-3.8 3.1-5.9 8.7-5.9h2.5c1.5 0 2.2-.7 2.2-2.1v-1.7h-5.2c-8.5 0-13.3 3.6-13.3 9.8 0 4.7 3.6 9.9 11.7 9.9 4.4 0 8.1-1.7 10.8-4.9v2.1c0 1.4.7 2 2.2 2h2.8v-19c-.1-7.9-4.8-12.4-13.3-12.4Zm-125.9 0c-4.8 0-8.2 1.2-11.2 2.5l-.2.2.1.2s.5 1.4.9 2.4 1.6 1.1 2.5.7c2.6-1 4.9-1.5 7.5-1.5 5.7 0 8.9 2.9 8.9 8.1V32c0 4.7-4.2 8-10 8-3.6 0-7.4-1.8-7.4-5.8 0-3.8 3.1-5.9 8.6-5.9h2.5c1.5 0 2.2-.7 2.2-2.1v-1.7h-5.1c-8.5 0-13.4 3.6-13.4 9.8 0 4.7 3.6 9.9 11.6 9.9 4.4 0 8.1-1.7 10.9-4.9v2.1c0 1.4.7 2 2.1 2h2.8v-19c-.1-7.9-4.8-12.4-13.3-12.4Zm276.8 11.6c-.7-.6-29.2-20.5-30.5-21.3l-.4-.3v4.9c0 1.6.8 2.1 1.8 2.9l.2.1c1.4 1 21.7 15.1 24.4 17-2.7 1.9-23.3 16.2-24.6 17-1.6 1-1.7 1.7-1.7 3.1v4.7s30.3-21.1 30.9-21.6c1.4-1 1.7-2.3 1.7-3.1v-.6c0-1-.6-2-1.8-2.8Z"}),(0,e.createElement)("path",{fill:"currentColor",d:"M496.4 29.1c.8 0 1.6-.3 2.4-.9 1-.7 1.9-1.3 1.9-1.3l.3-.2-.3-.2c-.1-.1-13.4-9.3-14.8-10.2-.6-.5-1.4-.6-1.9-.3s-.9.8-.9 1.6v3.1l.1.1c.1.1 9.2 6.4 11 7.6.8.5 1.5.7 2.2.7ZM72.3 36.4c-1.1-1.1-2.5-.4-3.1.1-2.3 2.1-4.9 3.1-7.7 3.1-6.1 0-10.9-5.1-10.9-11.7 0-6.5 4.7-11.6 10.6-11.6 3.4 0 5.6 1.5 7.4 2.9 1.3 1.1 2.4 1.2 3.3.2.8-.8 1.7-1.8 1.7-1.8l.2-.2-.2-.2c-3.5-3.8-7.4-5.5-12.4-5.5-8.9 0-16 7.1-16 16.2 0 8.9 7.2 16.2 16 16.2 6.5 0 10.2-3.3 12.6-6.1h.2l-.2-.2s-.5-.4-1.5-1.4Zm33.2-35.2H102v3.5c0 .9.4 2 2.2 2h3.5V3.6c.1-1.4-.8-2.4-2.2-2.4Zm-.4 11.3h-2.9v28.9c0 1.2.8 2 1.9 2.1v.1h3.2v-29c.1-1.3-.7-2.1-2.2-2.1Zm32.9 1.7c-.4 1.1-8 19.5-9.5 22.9-1.4-3.5-9-21.9-9.4-22.9-.5-1.2-1.5-1.9-2.8-1.9h-3.6l.2.3c.1.4 12.2 28.3 12.7 29.4.5 1.3 1.3 1.6 2.6 1.6h.6c1.2 0 2-.5 2.5-1.6s12.6-28.8 12.7-29.1l.2-.4h-3.5c-1.3 0-2.2.5-2.7 1.7Zm31.3 12h-11.9c-1.3 0-2.1.8-2.1 2.1v2h.3c5.7-.1 12.3-.1 15-.1 1.6 0 2.8-.4 3.7-1.3.8-.9 1.2-2.3 1.1-3.9-.9-8-6.6-13.2-14.4-13.2-8.5 0-15 7-15 16.2 0 9.3 6.7 16.2 15.6 16.2 5.2 0 9.1-1.8 12.8-5.8l.2-.2-.2-.2s-.7-.6-1.5-1.3c-1.2-1-2.3-.6-2.9 0-2.2 2-4.9 3-8.2 3-5.7 0-9.9-4.1-10.6-10.2 0 0-.1-.7-.1-1.6 0-1 .1-1.7.1-1.7.6-6 4.6-10.2 9.7-10.2s8.8 3.4 9.3 8.6c.1.5 0 .9-.1 1.1-.3.4-.5.5-.8.5ZM25.5 2.8c-.6-1.2-1.3-1.6-2.6-1.6h-1.2c-1 0-1.9.6-2.4 1.5-.4.9-18 40.1-18.2 40.5l-.2.4h3.3c1.4 0 2.3-.6 3-2 .6-1.2 3.5-7.8 4-8.9h12.9c1.6 0 2.6-1 2.6-2.5V28H13.2l9.1-20.4c1.9 4.2 14.6 33.2 15.2 34.4.8 1.6 2.7 1.6 3.3 1.6h3l-.2-.4c0-.4-17.5-39.1-18.1-40.4Zm69.3 36.3c-.5-.3-1.2-.4-1.9-.2-1.1.3-1.9.5-2.9.5-3.2 0-4.9-1.6-4.9-4.9V17h9.7v-2.1c0-1.6-1.4-2.4-2.6-2.4H85V3.7c0-1.4-1-2.4-2.5-2.4H80v33.9c0 5.7 3.1 8.9 8.9 8.9 2.2 0 4.7-.5 6.3-1.3l.1-.1v-.1s.1-.9.1-2c.1-.8-.3-1.2-.6-1.5Z"})),Z={type:"active_campaign",label:(0,k.__)("Active Campaign","jet-form-builder"),edit:E,icon:y,docHref:"https://jetformbuilder.com/features/activecampaign/"};(0,window.wp.data.dispatch)("jet-forms/actions").registerAction(Z)})();