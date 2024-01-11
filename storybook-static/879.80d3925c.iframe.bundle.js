"use strict";(self.webpackChunkspectre_design_system=self.webpackChunkspectre_design_system||[]).push([[879],{"./src/lib/Task/Task.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:()=>Archived,Default:()=>Default,Pinned:()=>Pinned,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/lib/Task/Task.tsx").Z,title:"Task",tags:["autodocs"]};var Default={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},Pinned={args:{task:_object_spread_props(_object_spread({},Default.args.task),{state:"TASK_PINNED"})}},Archived={args:{task:_object_spread_props(_object_spread({},Default.args.task),{state:"TASK_ARCHIVED"})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    task: {\n      id: "1",\n      title: "Test Task",\n      state: "TASK_INBOX"\n    }\n  }\n}',...Default.parameters?.docs?.source}}},Pinned.parameters={...Pinned.parameters,docs:{...Pinned.parameters?.docs,source:{originalSource:'{\n  args: {\n    task: {\n      ...Default.args.task,\n      state: "TASK_PINNED"\n    }\n  }\n}',...Pinned.parameters?.docs?.source}}},Archived.parameters={...Archived.parameters,docs:{...Archived.parameters?.docs,source:{originalSource:'{\n  args: {\n    task: {\n      ...Default.args.task,\n      state: "TASK_ARCHIVED"\n    }\n  }\n}',...Archived.parameters?.docs?.source}}};let __namedExportsOrder=["Default","Pinned","Archived"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/lib/Task/Task.styles.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  margin: 0;
  padding: 0;
  font-size: 100%;
  outline: none;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: 400;
  color: #333;
  font-size: 16px;
  background-color: #26c6da;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
p,
label {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  font-style: normal;
  font-size: 100%;
  line-height: 1;
  font-family: inherit;
  vertical-align: baseline;
  vertical-align: middle;
  line-height: normal;
  overflow: visible;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
}

@keyframes glow {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

@font-face {
  font-family: "Nunito Sans";
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9lKcw.ttf) format("truetype");
}

@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I94.ttf) format("truetype");
}

@font-face {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8aBc5tU1Q.ttf) format("truetype");
}

.type-light {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
}

.type-bold {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 800;
}

.type-italic {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: italic;
}

input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  font-size: 14px;
  line-height: 20px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: 400;
  padding: 0.75rem 0;
  line-height: 1.5rem !important;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: #333;
  outline: none;
}

.checkbox {
  display: inline-block;
  height: 3rem;
  position: relative;
  vertical-align: middle;
  width: 44px;
}

.checkbox input[type="checkbox"] {
  font-size: 1em;
  visibility: hidden;
}

.checkbox input[type="checkbox"]+span:before {
  position: absolute;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  width: 0.85em;
  height: 0.85em;
  transform: translate3d(-50%, -50%, 0);
  background: transparent;
  box-shadow: #2cc5d2 0 0 0 1px inset;
  content: "";
  display: block;
}

.checkbox input[type="checkbox"]:checked+span:before {
  font-size: 16px;
  line-height: 24px;
  box-shadow: none;
  color: #2cc5d2;
  margin-top: -1px;
}

.input-symbol {
  display: inline-block;
  position: relative;
}

.input-symbol.error [class^="icon-"],
.input-symbol.error [class*=" icon-"] {
  color: #ff4400;
}

.input-symbol [class^="icon-"],
.input-symbol [class*=" icon-"] {
  left: 1em;
}

.input-symbol input {
  padding-left: 3em;
}

.input-symbol input {
  width: 100%;
}

.input-symbol input:focus+[class^="icon-"],
.input-symbol input:focus+[class*=" icon-"] {
  color: #2cc5d2;
}

.input-symbol [class^="icon-"],
.input-symbol [class*=" icon-"] {
  transition: all 300ms ease-in;
  transform: translate3d(0, -50%, 0);
  background: transparent;
  color: #aaa;
  font-size: 1em;
  height: 1em;
  position: absolute;
  top: 50%;
  width: 1em;
}

@font-face {}

[class^="icon-"],
[class*=" icon-"] {
  font-family: "percolate";

  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}

.icon-star:before {
  content: "\\e608";
}

.icon-face-sad:before {
  content: "\\e60f";
}

.icon-check:before {
  content: "\\e65e";
}

.list-heading {
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  text-transform: uppercase;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 800;
  font-size: 11px;
  padding-left: 15px;
  line-height: 40px;
  background: #f8f8f8;
  color: #aaa;
}

.list-heading .icon-sync {
  opacity: 1;
  animation: spin 2s infinite linear;
  display: inline-block;
  margin-right: 4px;
}

.list-item {
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 3rem;
  width: 100%;
  background: white;
  transition: all ease-out 150ms;
}

.list-item .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.list-item input[type="text"] {
  background: transparent;
  width: 100%;
}

.list-item input[type="text"]:focus {
  cursor: text;
}

.pin-button {
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  text-align: center;
  transition: all 200ms ease-in;
  color: #eee;
  font-size: 16px;
  line-height: 3rem;
  outline: none;
}

.pin-button:hover {
  color: #2cc5d2;
}

.pin-button:focus {
  outline-color: transparent;
}

.pin-button:active {
  color: #555;
}

.list-item.TASK_PINNED .icon-star {
  color: #2cc5d2;
}

.list-item.TASK_ARCHIVED input[type="text"] {
  color: #4a5568;
  text-decoration: line-through;
}

.list-item:hover {
  background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
}

.list-item:hover .checkbox {
  cursor: pointer;
}

.list-item+.list-item {
  border-top: 1px solid #f0f9fb;
}

.list-item.checked input[type="text"] {
  color: #ccc;
  text-decoration: line-through;
}

.list-item.checked .delete-item {
  display: inline-block;
}

.loading-item {
  height: 3rem;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  line-height: 1rem;
  padding-left: 16px;
}

.loading-item .glow-checkbox,
.loading-item .glow-text span {
  animation: glow 1.5s ease-in-out infinite;
  background: #eee;
  color: transparent;
  cursor: progress;
  display: inline-block;
}

.loading-item .glow-checkbox {
  margin-right: 16px;
  width: 12px;
  height: 12px;
}

.loading-item+.loading-item {
  border-top: 1px solid #f0f9fb;
}

.list-items {
  position: relative;
  background: white;
  min-height: 288px;
}

.list-items .select-placeholder {
  border: none;
  width: 48px;
}

.wrapper-message {
  position: absolute;
  top: 45%;
  right: 0;
  bottom: auto;
  left: 0;
  width: auto;
  height: auto;
  transform: translate3d(0, -50%, 0);
  text-align: center;
}

.wrapper-message [class^="icon-"],
.wrapper-message [class*=" icon-"] {
  font-size: 48px;
  line-height: 56px;
  color: #2cc5d2;
  display: block;
}

.wrapper-message .title-message {
  font-size: 16px;
  line-height: 24px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 800;
  color: #4a5568;
}

.wrapper-message .subtitle-message {
  font-size: 14px;
  line-height: 20px;
  color: #4a5568;
}

.page.lists-show {
  min-height: 100vh;
  background: white;
}

.page.lists-show nav {
  background: #d3edf4;
  padding: 1.5rem 1.25rem;
  text-align: center;
}

@media screen and (min-width: 40em) {
  .page.lists-show nav {
    text-align: left;
  }
}

.page.lists-show nav .title-page {
  font-size: 20px;
  line-height: 24px;
  line-height: 2rem;
  cursor: pointer;
  white-space: nowrap;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 800;
  color: #1c3f53;
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
}`,"",{version:3,sources:["webpack://./src/lib/Task/Task.styles.css"],names:[],mappings:"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",sourcesContent:['* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  outline: none;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: 400;\n  color: #333;\n  font-size: 16px;\n  background-color: #26c6da;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1,\np,\nlabel {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 100%;\n  line-height: 1;\n  font-family: inherit;\n  vertical-align: baseline;\n  vertical-align: middle;\n  line-height: normal;\n  overflow: visible;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\nbutton,\ninput[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes glow {\n\n  0%,\n  100% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.5;\n  }\n}\n\n@font-face {\n  font-family: "Nunito Sans";\n  font-style: italic;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9lKcw.ttf) format("truetype");\n}\n\n@font-face {\n  font-family: "Nunito Sans";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I94.ttf) format("truetype");\n}\n\n@font-face {\n  font-family: "Nunito Sans";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8aBc5tU1Q.ttf) format("truetype");\n}\n\n.type-light {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n}\n\n.type-bold {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n}\n\n.type-italic {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  font-style: italic;\n}\n\ninput[type="text"],\ninput[type="email"],\ninput[type="password"],\ntextarea {\n  font-size: 14px;\n  line-height: 20px;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: 400;\n  padding: 0.75rem 0;\n  line-height: 1.5rem !important;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: #333;\n  outline: none;\n}\n\n.checkbox {\n  display: inline-block;\n  height: 3rem;\n  position: relative;\n  vertical-align: middle;\n  width: 44px;\n}\n\n.checkbox input[type="checkbox"] {\n  font-size: 1em;\n  visibility: hidden;\n}\n\n.checkbox input[type="checkbox"]+span:before {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  width: 0.85em;\n  height: 0.85em;\n  transform: translate3d(-50%, -50%, 0);\n  background: transparent;\n  box-shadow: #2cc5d2 0 0 0 1px inset;\n  content: "";\n  display: block;\n}\n\n.checkbox input[type="checkbox"]:checked+span:before {\n  font-size: 16px;\n  line-height: 24px;\n  box-shadow: none;\n  color: #2cc5d2;\n  margin-top: -1px;\n}\n\n.input-symbol {\n  display: inline-block;\n  position: relative;\n}\n\n.input-symbol.error [class^="icon-"],\n.input-symbol.error [class*=" icon-"] {\n  color: #ff4400;\n}\n\n.input-symbol [class^="icon-"],\n.input-symbol [class*=" icon-"] {\n  left: 1em;\n}\n\n.input-symbol input {\n  padding-left: 3em;\n}\n\n.input-symbol input {\n  width: 100%;\n}\n\n.input-symbol input:focus+[class^="icon-"],\n.input-symbol input:focus+[class*=" icon-"] {\n  color: #2cc5d2;\n}\n\n.input-symbol [class^="icon-"],\n.input-symbol [class*=" icon-"] {\n  transition: all 300ms ease-in;\n  transform: translate3d(0, -50%, 0);\n  background: transparent;\n  color: #aaa;\n  font-size: 1em;\n  height: 1em;\n  position: absolute;\n  top: 50%;\n  width: 1em;\n}\n\n@font-face {}\n\n[class^="icon-"],\n[class*=" icon-"] {\n  font-family: "percolate";\n\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n}\n\n.icon-star:before {\n  content: "\\e608";\n}\n\n.icon-face-sad:before {\n  content: "\\e60f";\n}\n\n.icon-check:before {\n  content: "\\e65e";\n}\n\n.list-heading {\n  letter-spacing: 0.3em;\n  text-indent: 0.3em;\n  text-transform: uppercase;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  font-size: 11px;\n  padding-left: 15px;\n  line-height: 40px;\n  background: #f8f8f8;\n  color: #aaa;\n}\n\n.list-heading .icon-sync {\n  opacity: 1;\n  animation: spin 2s infinite linear;\n  display: inline-block;\n  margin-right: 4px;\n}\n\n.list-item {\n  font-size: 14px;\n  line-height: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  height: 3rem;\n  width: 100%;\n  background: white;\n  transition: all ease-out 150ms;\n}\n\n.list-item .title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n\n.list-item input[type="text"] {\n  background: transparent;\n  width: 100%;\n}\n\n.list-item input[type="text"]:focus {\n  cursor: text;\n}\n\n.pin-button {\n  width: 3rem;\n  height: 3rem;\n  background: transparent;\n  border: none;\n  text-align: center;\n  transition: all 200ms ease-in;\n  color: #eee;\n  font-size: 16px;\n  line-height: 3rem;\n  outline: none;\n}\n\n.pin-button:hover {\n  color: #2cc5d2;\n}\n\n.pin-button:focus {\n  outline-color: transparent;\n}\n\n.pin-button:active {\n  color: #555;\n}\n\n.list-item.TASK_PINNED .icon-star {\n  color: #2cc5d2;\n}\n\n.list-item.TASK_ARCHIVED input[type="text"] {\n  color: #4a5568;\n  text-decoration: line-through;\n}\n\n.list-item:hover {\n  background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);\n}\n\n.list-item:hover .checkbox {\n  cursor: pointer;\n}\n\n.list-item+.list-item {\n  border-top: 1px solid #f0f9fb;\n}\n\n.list-item.checked input[type="text"] {\n  color: #ccc;\n  text-decoration: line-through;\n}\n\n.list-item.checked .delete-item {\n  display: inline-block;\n}\n\n.loading-item {\n  height: 3rem;\n  width: 100%;\n  background: white;\n  display: flex;\n  align-items: center;\n  line-height: 1rem;\n  padding-left: 16px;\n}\n\n.loading-item .glow-checkbox,\n.loading-item .glow-text span {\n  animation: glow 1.5s ease-in-out infinite;\n  background: #eee;\n  color: transparent;\n  cursor: progress;\n  display: inline-block;\n}\n\n.loading-item .glow-checkbox {\n  margin-right: 16px;\n  width: 12px;\n  height: 12px;\n}\n\n.loading-item+.loading-item {\n  border-top: 1px solid #f0f9fb;\n}\n\n.list-items {\n  position: relative;\n  background: white;\n  min-height: 288px;\n}\n\n.list-items .select-placeholder {\n  border: none;\n  width: 48px;\n}\n\n.wrapper-message {\n  position: absolute;\n  top: 45%;\n  right: 0;\n  bottom: auto;\n  left: 0;\n  width: auto;\n  height: auto;\n  transform: translate3d(0, -50%, 0);\n  text-align: center;\n}\n\n.wrapper-message [class^="icon-"],\n.wrapper-message [class*=" icon-"] {\n  font-size: 48px;\n  line-height: 56px;\n  color: #2cc5d2;\n  display: block;\n}\n\n.wrapper-message .title-message {\n  font-size: 16px;\n  line-height: 24px;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 800;\n  color: #4a5568;\n}\n\n.wrapper-message .subtitle-message {\n  font-size: 14px;\n  line-height: 20px;\n  color: #4a5568;\n}\n\n.page.lists-show {\n  min-height: 100vh;\n  background: white;\n}\n\n.page.lists-show nav {\n  background: #d3edf4;\n  padding: 1.5rem 1.25rem;\n  text-align: center;\n}\n\n@media screen and (min-width: 40em) {\n  .page.lists-show nav {\n    text-align: left;\n  }\n}\n\n.page.lists-show nav .title-page {\n  font-size: 20px;\n  line-height: 24px;\n  line-height: 2rem;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 800;\n  color: #1c3f53;\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n}'],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/lib/Task/Task.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Task_Task});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Task_styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/lib/Task/Task.styles.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Task_styles.Z,options),Task_styles.Z&&Task_styles.Z.locals&&Task_styles.Z.locals;var Task=react.forwardRef(function(param,ref){var _param_task=param.task,id=_param_task.id,title=_param_task.title,state=_param_task.state,onArchiveTask=param.onArchiveTask,onPinTask=param.onPinTask;return(0,jsx_runtime.jsxs)("div",{className:"list-item ".concat(state),ref:ref,children:[(0,jsx_runtime.jsxs)("label",{htmlFor:"checked","aria-label":"archiveTask-".concat(id),className:"checkbox",children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",disabled:!0,name:"checked",id:"archiveTask-".concat(id),checked:"TASK_ARCHIVED"===state}),(0,jsx_runtime.jsx)("span",{className:"checkbox-custom",onClick:function(){return onArchiveTask&&onArchiveTask(id)}})]}),(0,jsx_runtime.jsx)("label",{htmlFor:"title","aria-label":title,className:"title",children:(0,jsx_runtime.jsx)("input",{type:"text",value:title,readOnly:!0,name:"title",placeholder:"Input title"})}),"TASK_ARCHIVED"!==state&&(0,jsx_runtime.jsx)("button",{className:"pin-button",onClick:function(){return onPinTask&&onPinTask(id)},id:"pinTask-".concat(id),"aria-label":"pinTask-".concat(id),children:(0,jsx_runtime.jsx)("span",{className:"icon-star"})},"pinTask-".concat(id))]})});let Task_Task=Task;try{Task.displayName="Task",Task.__docgenInfo={description:"",displayName:"Task",props:{task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"Task"}},onArchiveTask:{defaultValue:null,description:"",name:"onArchiveTask",required:!1,type:{name:"((id: string) => void)"}},onPinTask:{defaultValue:null,description:"",name:"onPinTask",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/Task/Task.tsx#Task"]={docgenInfo:Task.__docgenInfo,name:"Task",path:"src/lib/Task/Task.tsx#Task"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=879.80d3925c.iframe.bundle.js.map