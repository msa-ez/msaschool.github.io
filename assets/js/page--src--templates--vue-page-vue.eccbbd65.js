(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--templates--vue-page-vue"],{

/***/ "06yB":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/gridsome/node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/VuePage.vue?vue&type=style&index=0&id=3cff5d16&prod&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/gridsome/node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "TAdU":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/VuePage.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_VueSubLayoutHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/VueSubLayoutHeader */ \"/+9c\");\n/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ \"CjXH\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VuePage',\n  components: {\n    MenuIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__[\"MenuIcon\"],\n    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__[\"XIcon\"],\n    VueSubLayoutHeader: _components_VueSubLayoutHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  mounted() {\n    // 콘솔에 쿼리 결과 출력\n    console.log('thisPage:', this.$page.thisPage);\n    console.log('allPagesByName:', this.$page.allPagesByName);\n    console.log('allPages:', this.$page.allPages);\n  },\n  computed: {\n    getComponentName() {\n      this.track();\n      if (this.$page.thisPage.fileInfo.name == 'index') {\n        var dir = this.$page.thisPage.fileInfo.directory.replace(/\\//gi, '_');\n        if (dir) {\n          return `<${dir}_${this.$page.thisPage.name}/>`;\n        }\n        return `<${this.$page.thisPage.name}/>`;\n      }\n      return `<${this.$page.thisPage.name}/>`;\n    }\n  },\n  props: {\n    name: String\n  },\n  methods: {\n    track() {\n      if (typeof window !== \"undefined\") {\n        var getTitle = this.$page.thisPage && this.$page.thisPage.props[0] ? this.$page.thisPage.props[0].name : this.$page.thisPage.name ? this.$page.thisPage.name : this.$route.path;\n        var location = window.location.hostname;\n        if (location && location != 'localhost') {\n          getTitle = `${location}_${getTitle}`;\n        }\n        this.$ga.page({\n          page: this.$route.path,\n          title: getTitle\n        });\n      }\n    }\n  },\n  data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "TEJ+":
/*!************************************************************************************!*\
  !*** ./src/templates/VuePage.vue?vue&type=style&index=0&id=3cff5d16&prod&lang=css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_gridsome_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_style_index_0_id_3cff5d16_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/gridsome/node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./VuePage.vue?vue&type=style&index=0&id=3cff5d16&prod&lang=css */ \"06yB\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_gridsome_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_style_index_0_id_3cff5d16_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_gridsome_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_style_index_0_id_3cff5d16_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_gridsome_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_style_index_0_id_3cff5d16_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_gridsome_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_style_index_0_id_3cff5d16_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?");

/***/ }),

/***/ "kR1t":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/VuePage.vue?vue&type=custom&index=0&blockType=page-query ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (null);\n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?./node_modules/babel-loader/lib??ref--13-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "nXBB":
/*!***********************************!*\
  !*** ./src/templates/VuePage.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VuePage_vue_vue_type_template_id_3cff5d16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuePage.vue?vue&type=template&id=3cff5d16 */ \"sjvO\");\n/* harmony import */ var _VuePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuePage.vue?vue&type=script&lang=js */ \"u64h\");\n/* empty/unused harmony star reexport *//* harmony import */ var _VuePage_vue_vue_type_style_index_0_id_3cff5d16_prod_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VuePage.vue?vue&type=style&index=0&id=3cff5d16&prod&lang=css */ \"TEJ+\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _VuePage_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VuePage.vue?vue&type=custom&index=0&blockType=page-query */ \"zibN\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _VuePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VuePage_vue_vue_type_template_id_3cff5d16__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VuePage_vue_vue_type_template_id_3cff5d16__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _VuePage_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === 'function') Object(_VuePage_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?");

/***/ }),

/***/ "rIjw":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"574f3ce1-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/VuePage.vue?vue&type=template&id=3cff5d16 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('vueLayout', [_c('div', {\n    staticClass: \"flex flex-wrap items-start justify-start\"\n  }, [_c('v-runtime-template', {\n    attrs: {\n      \"template\": _vm.getComponentName\n    }\n  })], 1)]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22574f3ce1-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "sjvO":
/*!*****************************************************************!*\
  !*** ./src/templates/VuePage.vue?vue&type=template&id=3cff5d16 ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_574f3ce1_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_template_id_3cff5d16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"574f3ce1-vue-loader-template\"}!../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./VuePage.vue?vue&type=template&id=3cff5d16 */ \"rIjw\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_574f3ce1_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_template_id_3cff5d16__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_574f3ce1_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_template_id_3cff5d16__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?");

/***/ }),

/***/ "u64h":
/*!***********************************************************!*\
  !*** ./src/templates/VuePage.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./VuePage.vue?vue&type=script&lang=js */ \"TAdU\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?");

/***/ }),

/***/ "zibN":
/*!********************************************************************************!*\
  !*** ./src/templates/VuePage.vue?vue&type=custom&index=0&blockType=page-query ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--13-0!../../node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./VuePage.vue?vue&type=custom&index=0&blockType=page-query */ \"kR1t\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuePage_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/templates/VuePage.vue?");

/***/ })

}]);