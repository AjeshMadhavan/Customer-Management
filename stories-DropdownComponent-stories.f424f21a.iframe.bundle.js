"use strict";(self.webpackChunkcustomer_management=self.webpackChunkcustomer_management||[]).push([[833],{"./src/stories/DropdownComponent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DropdownWithIcon:()=>DropdownWithIcon,DropdownWithoutIcon:()=>DropdownWithoutIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropdownComponent_stories});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js");let DropdownComponentvue_type_script_lang_ts_setup_true=(0,vue_esm.defineComponent)({__name:"DropdownComponent",props:{dropdownButtonStyle:null,dropdownContainerStyle:null,prependIcon:null,text:null},setup(__props){let showDropdownItems=(0,vue_esm.ref)(!1),dropdownArrow=(0,vue_esm.computed)(()=>__props.prependIcon?showDropdownItems.value?"mdi-chevron-down":"mdi-chevron-right":showDropdownItems.value?"mdi-chevron-up":"mdi-chevron-down");return{__sfc:!0,props:__props,showDropdownItems,toggleDropdownItems:()=>{showDropdownItems.value=!showDropdownItems.value},dropdownArrow}}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DropdownComponentvue_type_style_index_0_id_94795f2e_prod_lang_scss_scoped_true=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/DropdownComponent.vue?vue&type=style&index=0&id=94795f2e&prod&lang=scss&scoped=true"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(DropdownComponentvue_type_style_index_0_id_94795f2e_prod_lang_scss_scoped_true.A,options),DropdownComponentvue_type_style_index_0_id_94795f2e_prod_lang_scss_scoped_true.A&&DropdownComponentvue_type_style_index_0_id_94795f2e_prod_lang_scss_scoped_true.A.locals&&DropdownComponentvue_type_style_index_0_id_94795f2e_prod_lang_scss_scoped_true.A.locals;let __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").A)(DropdownComponentvue_type_script_lang_ts_setup_true,function render(){var _c=this._self._c,_setup=this._self._setupProxy;return _c("div",{class:["dropdown-menu",_setup.props.dropdownContainerStyle]},[_c("button",{class:["toggle-button",_setup.props.dropdownButtonStyle],on:{click:_setup.toggleDropdownItems}},[_c("div",{staticClass:"toggle-button__title flex justify-start items-center"},[_setup.props.prependIcon?_c("v-icon",{staticClass:"prepend-icon"},[this._v("\n        "+this._s(_setup.props.prependIcon)+"\n      ")]):this._e(),this._v(" "),_c("span",[this._v(this._s(_setup.props.text))])],1),this._v(" "),_c("v-icon",{staticClass:"arrow-icon"},[this._v(" "+this._s(_setup.dropdownArrow)+" ")])],1),this._v(" "),_setup.showDropdownItems?this._t("item-slot"):this._e()],2)},[],!1,null,"94795f2e",null).exports;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"DropdownComponent",description:"",tags:{},props:[{name:"dropdownButtonStyle",required:!1,type:{name:"string"}},{name:"dropdownContainerStyle",required:!1,type:{name:"string"}},{name:"prependIcon",required:!1,type:{name:"string"}},{name:"text",required:!0,type:{name:"string"}}],slots:[{name:"item-slot"}],sourceFiles:["/home/ajesh/Documents/me/Project/exercises/customer-management/src/components/DropdownComponent.vue"]};let DropdownComponent_stories={component:__vuedocgen_export_0,tags:["autodocs"],argTypes:{text:{control:"text"},prependIcon:{control:"text"},dropdownButtonStyle:{control:"text"},dropdownContainerStyle:{control:"text"}},render:function(args,param){return{props:Object.keys(param.argTypes),components:{DropdownComponent:__vuedocgen_export_0},template:'<dropdown-component v-bind="$props">\n            <template v-slot:item-slot>\n                <div v-if="itemSlot" v-html="itemSlot" />\n            </template>\n        </dropdown-component>'}}};var DropdownWithIcon={args:{text:"CRM",prependIcon:"mdi-account",dropdownButtonStyle:"py-2.5 pr-4",itemSlot:'<ul class="text-xs ">\n                <li>Contact List</li>\n                <li>Contact Details</li>\n            </ul>'}},DropdownWithoutIcon={args:{text:"Oppertunities",dropdownButtonStyle:"py-1.5 pr-2.5 pl-3",dropdownContainerStyle:"bg-white dropdown-shadow]",itemSlot:'<ul class="text-sm p-3">\n                <li>Incoming Request</li>\n                <li>POS Touch Screens</li>\n            </ul>'}};DropdownWithIcon.parameters={...DropdownWithIcon.parameters,docs:{...DropdownWithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "CRM",\n    prependIcon: "mdi-account",\n    dropdownButtonStyle: "py-2.5 pr-4",\n    itemSlot: `<ul class="text-xs ">\n                <li>Contact List</li>\n                <li>Contact Details</li>\n            </ul>`\n  }\n}',...DropdownWithIcon.parameters?.docs?.source}}},DropdownWithoutIcon.parameters={...DropdownWithoutIcon.parameters,docs:{...DropdownWithoutIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "Oppertunities",\n    dropdownButtonStyle: "py-1.5 pr-2.5 pl-3",\n    dropdownContainerStyle: "bg-white dropdown-shadow]",\n    itemSlot: `<ul class="text-sm p-3">\n                <li>Incoming Request</li>\n                <li>POS Touch Screens</li>\n            </ul>`\n  }\n}',...DropdownWithoutIcon.parameters?.docs?.source}}};let __namedExportsOrder=["DropdownWithIcon","DropdownWithoutIcon"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/DropdownComponent.vue?vue&type=style&index=0&id=94795f2e&prod&lang=scss&scoped=true":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropdown-menu[data-v-94795f2e]{width:100% !important;height:-moz-max-content;height:max-content}.dropdown-menu .toggle-button[data-v-94795f2e]{width:100%;display:flex;justify-content:space-between;align-items:center;font-size:13px;line-height:16px}.dropdown-menu .toggle-button__title[data-v-94795f2e]{width:100%;font-size:inherit;font-weight:inherit;line-height:inherit}.dropdown-menu .toggle-button .prepend-icon[data-v-94795f2e]{min-width:48px;font-size:18px;color:rgba(0,0,0,.87)}.dropdown-menu .toggle-button .arrow-icon[data-v-94795f2e]{font-size:18px}","",{version:3,sources:["webpack://./src/components/DropdownComponent.vue"],names:[],mappings:"AACA,gCACE,qBAAA,CACA,uBAAA,CAAA,kBAAA,CAEA,+CACE,UAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CAEA,sDACE,UAAA,CACA,iBAAA,CACA,mBAAA,CACA,mBAAA,CAGF,6DACE,cAAA,CACA,cAAA,CACA,qBAAA,CAGF,2DACE,cAAA",sourcesContent:['\n.dropdown-menu {\n  width: 100% !important;\n  height: max-content;\n\n  .toggle-button {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 13px;\n    line-height: 16px;\n\n    &__title {\n      width: 100%;\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n\n    .prepend-icon {\n      min-width: 48px;\n      font-size: 18px;\n      color: rgba(0, 0, 0, 0.87);\n    }\n\n    .arrow-icon {\n      font-size: 18px;\n    }\n  }\n}\n\n// <dropdown-component\n//   text="CRM"\n//   prependIcon="mdi-magnify"\n//   :dropdownButtonStyle="buttonStyle1"\n//   :dropdownContainerStyle="container1"\n// >\n//   <template v-slot:item-slot>\n//     <ul>\n//       <li\n//         v-for="option in content.options"\n//         :key="option.text"\n//         class="dropdown-item pt-2.5 pr-4 pb-2.5 pl-12 cursor-pointer"\n//       >\n//         {{ option.text }}\n//       </li>\n// </ul>\n//   </template>\n// </dropdown-component>\n\n// const buttonStyle1 = \'!font-bold pt-2.5 pr-4 pb-2.5\'\n// const container2 = \'bg-white dropdown-shadow\'\n'],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map(function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content}).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]&&(item[1]="@media ".concat(item[2]," {").concat(item[1],"}")),item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));return[content].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64)," */")]).join("\n")}return[content].join("\n")}},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>normalizeComponent});function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook){if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}}return{exports:scriptExports,options:options}}}}]);