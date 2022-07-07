"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./_normalize.scss */ "./node_modules/css-loader/dist/cjs.js!./src/sass/_normalize.scss");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/NotoSans-Light.ttf */ "./src/font/NotoSans-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'NotoSans';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\nbody {\n  height: 100vh;\n  display: flex;\n  font-family: 'NotoSans', sans-serif; }\n\nul {\n  list-style-type: none; }\n\n#lists-container {\n  display: flex;\n  flex-direction: column;\n  background-color: #f3f3f3;\n  min-width: 280px; }\n  #lists-container .section {\n    overflow: auto;\n    flex-grow: 1; }\n  #lists-container ul {\n    display: flex;\n    flex-direction: column;\n    gap: 1px; }\n    #lists-container ul li {\n      position: relative;\n      right: 30px;\n      display: flex;\n      align-items: center; }\n      #lists-container ul li:hover {\n        background-color: #e0e0e0; }\n  #lists-container img {\n    padding-right: 1rem;\n    width: 15px; }\n  #lists-container #default-projects-container {\n    border-bottom: #e0e0e0 2px solid; }\n  #lists-container .footer {\n    display: flex;\n    align-items: center;\n    gap: 5px; }\n    #lists-container .footer img {\n      position: relative;\n      left: 10px;\n      top: 1px; }\n      #lists-container .footer imghover {\n        background-color: #e0e0e0; }\n\n#tasks-container {\n  background-color: #687ccc;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column; }\n  #tasks-container .header h2 {\n    color: #fff; }\n  #tasks-container .section {\n    flex-grow: 1; }\n  #tasks-container ul {\n    display: flex;\n    flex-direction: column;\n    gap: 2px; }\n  #tasks-container li {\n    background-color: #f3f3f3;\n    position: relative;\n    right: 30px;\n    display: flex;\n    border-radius: 3px;\n    gap: 4px; }\n    #tasks-container liactive {\n      background-color: #ffffff; }\n    #tasks-container li p {\n      display: inline;\n      cursor: pointer; }\n  #tasks-container .footer div {\n    background-color: #e0e0e0;\n    display: flex;\n    position: relative;\n    bottom: 15px; }\n    #tasks-container .footer div img {\n      width: 25px; }\n  #tasks-container .task-child-done {\n    color: grey;\n    text-decoration: line-through; }\n\n#task-customization {\n  margin: 1rem 1rem;\n  background-color: grey; }\n  #task-customization #first-header > div {\n    display: flex; }\n  #task-customization #task-customization-header ul {\n    position: relative;\n    right: 40px; }\n  #task-customization #rmd-container {\n    display: flex;\n    flex-direction: column; }\n    #task-customization #rmd-container div {\n      display: inline;\n      margin-bottom: 2px 0; }\n      #task-customization #rmd-container div p {\n        display: inline; }\n  #task-customization #notes-container {\n    display: flex;\n    flex-direction: column; }\n  #task-customization text-area {\n    resize: none; }\n", "",{"version":3,"sources":["webpack://./src/sass/style.scss"],"names":[],"mappings":"AACA;EACI,uBAAuB;EACvB,4CAAsC,EAAA;;AAI1C;EACI,aAAa;EACb,aAAc;EACd,mCAAmC,EAAA;;AAGvC;EACI,qBAAqB,EAAA;;AAMzB;EACI,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,gBAAgB,EAAA;EAJpB;IAMQ,cAAa;IACb,YAAY,EAAA;EAPpB;IAUQ,aAAa;IACb,sBAAsB;IACtB,QAAQ,EAAA;IAZhB;MAcY,kBAAkB;MAClB,WAAW;MACX,aAAa;MACb,mBAAmB,EAAA;MAjB/B;QAmBgB,yBAAyB,EAAA;EAnBzC;IAyBQ,mBAAmB;IACnB,WAAW,EAAA;EA1BnB;IA8BQ,gCAAgC,EAAA;EA9BxC;IAkCQ,aAAa;IACb,mBAAmB;IACnB,QAAQ,EAAA;IApChB;MAsCY,kBAAkB;MAClB,UAAU;MACV,QAAQ,EAAA;MAxCpB;QA0CgB,yBAAyB,EAAA;;AAQzC;EACI,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB,EAAA;EAJ1B;IAOY,WAAW,EAAA;EAPvB;IAWQ,YAAY,EAAA;EAXpB;IAcQ,aAAa;IACb,sBAAsB;IACtB,QAAQ,EAAA;EAhBhB;IAmBQ,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,QAAQ,EAAA;IAxBhB;MA0BY,yBAAyB,EAAA;IA1BrC;MA6BY,eAAe;MACf,eAAe,EAAA;EA9B3B;IAoCY,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,YAAY,EAAA;IAvCxB;MAyCgB,WAAW,EAAA;EAzC3B;IA+CQ,WAAW;IACX,6BAA6B,EAAA;;AAQrC;EACI,iBAAiB;EACjB,sBAAsB,EAAA;EAF1B;IAMQ,aAAa,EAAA;EANrB;IAUY,kBAAkB;IAClB,WAAW,EAAA;EAXvB;IAgBQ,aAAa;IACb,sBAAsB,EAAA;IAjB9B;MAmBY,eAAe;MACf,oBAAoB,EAAA;MApBhC;QAsBgB,eAAe,EAAA;EAtB/B;IA2BQ,aAAa;IACb,sBAAsB,EAAA;EA5B9B;IAgCQ,YAAY,EAAA","sourcesContent":["@import url('./_normalize.scss');\n@font-face {\n    font-family: 'NotoSans';\n    src: url('../font/NotoSans-Light.ttf');\n\n}\n// in general, the whole app is flexed\nbody {\n    height: 100vh;\n    display: flex ;\n    font-family: 'NotoSans', sans-serif;\n}\n\nul {\n    list-style-type: none;\n}\n\n\n\n\n#lists-container {\n    display: flex;\n    flex-direction: column;\n    background-color: #f3f3f3;\n    min-width: 280px;\n    .section {\n        overflow:auto;\n        flex-grow: 1;\n    }\n    ul {\n        display: flex;\n        flex-direction: column;\n        gap: 1px;\n        li {\n            position: relative;\n            right: 30px;\n            display: flex;\n            align-items: center;\n            &:hover {\n                background-color: #e0e0e0;\n            }\n        }\n\n    }\n    img {\n        padding-right: 1rem;\n        width: 15px;\n    }\n\n    #default-projects-container{\n        border-bottom: #e0e0e0 2px solid;\n    }\n\n    .footer {\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        img {\n            position: relative;\n            left: 10px;\n            top: 1px;\n            &hover {\n                background-color: #e0e0e0;\n            }\n        }\n\n    }\n\n}\n\n#tasks-container{\n    background-color: #687ccc;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;    \n    .header {\n        h2 {\n            color: #fff;\n        }\n    }\n    .section {\n        flex-grow: 1;\n    }\n    ul {\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n    }\n    li {\n        background-color: #f3f3f3;\n        position: relative;\n        right: 30px;\n        display: flex;\n        border-radius: 3px;\n        gap: 4px;\n        &active{\n            background-color: #ffffff;\n        }\n        p {\n            display: inline;\n            cursor: pointer;\n        }\n    }\n\n    .footer {\n        div {\n            background-color: #e0e0e0;\n            display: flex;\n            position: relative;\n            bottom: 15px;\n            img {\n                width: 25px;\n            }\n            \n        }\n    }\n    .task-child-done{\n        color: grey;\n        text-decoration: line-through;\n    }\n    .task-child-undone{\n        \n    }\n}\n\n\n#task-customization {\n    margin: 1rem 1rem;\n    background-color: grey;\n\n    \n    #first-header > div {\n        display: flex;\n    }\n    #task-customization-header {\n        ul {\n            position: relative;\n            right: 40px;\n        }\n    }\n\n    #rmd-container {\n        display: flex;\n        flex-direction: column;\n        div {\n            display: inline;\n            margin-bottom: 2px 0;\n            p{\n                display: inline;\n            }\n        }\n    }\n    #notes-container {\n        display: flex;\n        flex-direction: column;\n    }\n    \n    text-area {\n        resize: none;\n    }\n}\n\n\n.hidden{\n    //display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sass/_normalize.scss":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sass/_normalize.scss ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "//src/scss/_normalize.scsss\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }", "",{"version":3,"sources":["webpack://./src/sass/_normalize.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;IAaI,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["//src/scss/_normalize.scsss\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domManager.ts":
/*!***************************!*\
  !*** ./src/domManager.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DOMManager = void 0;
const home_FILL0_wght400_GRAD0_opsz48_svg_1 = __importDefault(__webpack_require__(/*! ./img/home_FILL0_wght400_GRAD0_opsz48.svg */ "./src/img/home_FILL0_wght400_GRAD0_opsz48.svg"));
const crisis_alert_FILL0_wght400_GRAD0_opsz48_svg_1 = __importDefault(__webpack_require__(/*! ./img/crisis_alert_FILL0_wght400_GRAD0_opsz48.svg */ "./src/img/crisis_alert_FILL0_wght400_GRAD0_opsz48.svg"));
const event_upcoming_FILL0_wght400_GRAD0_opsz48_svg_1 = __importDefault(__webpack_require__(/*! ./img/event_upcoming_FILL0_wght400_GRAD0_opsz48.svg */ "./src/img/event_upcoming_FILL0_wght400_GRAD0_opsz48.svg"));
const grade_FILL0_wght400_GRAD0_opsz48_svg_1 = __importDefault(__webpack_require__(/*! ./img/grade_FILL0_wght400_GRAD0_opsz48.svg */ "./src/img/grade_FILL0_wght400_GRAD0_opsz48.svg"));
const list_FILL0_wght400_GRAD0_opsz48_svg_1 = __importDefault(__webpack_require__(/*! ./img/list_FILL0_wght400_GRAD0_opsz48.svg */ "./src/img/list_FILL0_wght400_GRAD0_opsz48.svg"));
const priority_FILL0_wght400_GRAD0_opsz48_svg_1 = __importDefault(__webpack_require__(/*! ./img/priority_FILL0_wght400_GRAD0_opsz48.svg */ "./src/img/priority_FILL0_wght400_GRAD0_opsz48.svg"));
const todos_1 = __webpack_require__(/*! ./todos */ "./src/todos.ts");
/**
 * DOMManager manages the I/O and handling of the DOM the user interacts with
 * it takes the values from the forms and input and saves them for the
 * use later for the TaskManager.
 */
class DOMManager {
    constructor(storageManager) {
        //private task = ""
        this.done = false;
        this.storageManager = storageManager;
    }
    hookSVGToElements() {
        let myDayElement = document.getElementById("my-day");
        myDayElement.src = home_FILL0_wght400_GRAD0_opsz48_svg_1.default;
        let soonDueElement = document.getElementById("soon-due");
        soonDueElement.src = crisis_alert_FILL0_wght400_GRAD0_opsz48_svg_1.default;
        let plannedElement = document.getElementById("planned");
        plannedElement.src = event_upcoming_FILL0_wght400_GRAD0_opsz48_svg_1.default;
        let allTaskElement = document.getElementById("all-tasks");
        allTaskElement.src = grade_FILL0_wght400_GRAD0_opsz48_svg_1.default;
        let newProjectElement = document.getElementById('new-list');
        newProjectElement.src = list_FILL0_wght400_GRAD0_opsz48_svg_1.default;
        let newTaskElement = document.getElementById("add-task");
        newTaskElement.src = priority_FILL0_wght400_GRAD0_opsz48_svg_1.default;
    }
    /**
     * Listens to input in the task menu, upon entering "Enter".
     */
    readTaskFromDOM() {
        var _a;
        let addTaskInput = (_a = document.getElementById("add-task-container")) === null || _a === void 0 ? void 0 : _a.querySelector("input");
        addTaskInput === null || addTaskInput === void 0 ? void 0 : addTaskInput.addEventListener("keypress", (ev) => {
            if (ev.key === "Enter") {
                if ((addTaskInput === null || addTaskInput === void 0 ? void 0 : addTaskInput.value.length) === undefined)
                    return;
                if ((addTaskInput === null || addTaskInput === void 0 ? void 0 : addTaskInput.value.length) < 1) {
                    return;
                }
                else {
                    this.addTaskToToDoListDOM(addTaskInput.value, "not-done");
                    let newTask = new todos_1.Todo(`${addTaskInput.value}`);
                    this.storageManager.insertTaskObjectIntoStorage(addTaskInput.value, newTask);
                    addTaskInput.value = "";
                }
            }
        });
    }
    addTaskToToDoListDOM(task, whichContainer) {
        let taskContainer = document.getElementById(`${whichContainer}`);
        let newToDoList = document.createElement("li");
        newToDoList.dataset.name = `${task}`;
        newToDoList.innerHTML =
            `<button data-name="${task}" >+</button>${task}
        `;
        newToDoList.classList.add("task-child-undone");
        taskContainer === null || taskContainer === void 0 ? void 0 : taskContainer.insertBefore(newToDoList, taskContainer.firstChild);
    }
    repopulateTasksListDOM() {
        let todos = this.storageManager.populateTasksFromStorage();
        if (todos === undefined)
            return;
        else {
            todos.forEach(todo => {
                if (todo.done === false) {
                    this.addTaskToToDoListDOM(todo.title, "not-done");
                }
                else {
                    this.addTaskToToDoListDOM(todo.title, "done");
                }
            });
        }
    }
    listContext() {
        let taskChildrenParent = document.getElementById("tasks-list-container");
        taskChildrenParent === null || taskChildrenParent === void 0 ? void 0 : taskChildrenParent.addEventListener("click", (ev) => {
            let nodeTarget = ev.target;
            //if the target in this container clicked is a list, we call it either done, or undone
            if (nodeTarget.nodeName === "LI") {
                let target = ev.target;
                if (target.classList.contains("task-child-undone")) {
                    target.classList.remove("task-child-undone");
                    target.classList.add("task-child-done");
                    this.storageManager.changeDone(target.dataset.name, true);
                    this.pushToDoneOrUndoneContainer(target, "done");
                }
                else if (target.classList.contains("task-child-done")) {
                    target.classList.remove("task-child-done");
                    target.classList.add("task-child-undone");
                    this.storageManager.changeDone(target.dataset.name, false);
                    this.pushToDoneOrUndoneContainer(target, "not-done");
                }
            }
            else if (nodeTarget.nodeName === "BUTTON") {
                let target = ev.target;
                let taskName = document.getElementById("task-name");
                let taskBoard = document.getElementById("task-customization");
                if (target.classList.contains("active") === false) {
                    if ((taskBoard === null || taskBoard === void 0 ? void 0 : taskBoard.classList.contains("hidden")) === true) {
                        taskBoard === null || taskBoard === void 0 ? void 0 : taskBoard.classList.remove("hidden");
                    }
                    this.populateForm(target.dataset.name);
                    target.classList.add("active");
                    console.log(1);
                }
                else if (target.dataset.name !== taskName.value &&
                    target.classList.contains("active") === true) {
                    if ((taskBoard === null || taskBoard === void 0 ? void 0 : taskBoard.classList.contains("hidden")) === true) {
                        taskBoard.classList.remove("hidden");
                    }
                    else {
                        taskBoard === null || taskBoard === void 0 ? void 0 : taskBoard.classList.add("hidden");
                    }
                    this.populateForm(target.dataset.name);
                    console.log(2);
                }
                else if (target.dataset.name === taskName.value &&
                    target.classList.contains("active") === true &&
                    (taskBoard === null || taskBoard === void 0 ? void 0 : taskBoard.classList.contains("hidden")) === false) {
                    taskBoard === null || taskBoard === void 0 ? void 0 : taskBoard.classList.add("hidden");
                    this.removeActiveFromButtons();
                    console.log(3);
                }
                else if (taskBoard === null || taskBoard === void 0 ? void 0 : taskBoard.classList.contains("hidden")) {
                    taskBoard.classList.remove("hidden");
                }
            }
        });
    }
    removeActiveFromButtons() {
        var _a;
        let doneContainer = document.getElementById("done");
        let notDoneContainer = document.getElementById("not-done");
        if ((doneContainer === null || doneContainer === void 0 ? void 0 : doneContainer.children.length) === undefined)
            console.log("content is undefined");
        else {
            for (let index = 0; index < doneContainer.children.length - 1; index++) {
                console.log(doneContainer.children[index]);
            }
        }
        if ((notDoneContainer === null || notDoneContainer === void 0 ? void 0 : notDoneContainer.children.length) === undefined)
            console.log("content is undefined");
        else {
            for (let index = 0; index < notDoneContainer.children.length - 1; index++) {
                (_a = notDoneContainer.children[index].firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
            }
        }
    }
    pushToDoneOrUndoneContainer(target, id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.append(target);
    }
    // not done yet, should return a "true" for 
    populateForm(taskname) {
        let todo = this.storageManager.getTask(taskname);
        // get the task title
        let taskTitle = document.getElementById("task-name");
        taskTitle.textContent = todo.title;
        let taskDesc = document.getElementById("task-description");
        taskDesc.textContent = todo.description;
        let subTaskList = document.getElementById("subtask-list");
        // remove the children of the sublist-Task unordered list except the first one, in order to remove those
        // leftover children
        for (let element = subTaskList.children.length - 1; element > 0; element--) {
            subTaskList.children[element].remove();
        }
        for (let key in todo.checklist) {
            if (Object.prototype.hasOwnProperty.call(todo.checklist, key)) {
                let li = document.createElement("li");
                li.textContent = key;
                li.dataset.name = key;
                subTaskList.appendChild(li);
            }
        }
        let date = document.getElementById("due-date");
        date.value = todo.dueDate;
        let notesElement = document.getElementById("notes");
        if (todo.notes !== undefined) {
            notesElement.value = todo.notes;
        }
        let priorityElement = document.getElementById("priority-select");
        priorityElement.value = todo.priority.toString();
        this.done = true;
    }
    populateSubtask() {
        let subtaskBtn = document.getElementById("add-subtask");
        let subtaskEl = document.getElementById("subtask");
        subtaskBtn.onclick = () => {
            /* if (subtaskEl != undefined) {
                 let subTaskList = document.createElement("li")
                 subTaskList.textContent = subtaskEl.value
                 console.log(subTaskList)
                 document.getElementById("subtask-list")?.append(subTaskList)
                 // get the task title from task customization and the get the todo
                 let subtaskTitle = document.getElementById("task-name") as HTMLInputElement
                 this.storageManager.insertSubtask(subtaskTitle.value!, subTaskList.textContent)
 
             }*/
        };
    }
}
exports.DOMManager = DOMManager;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const todos_1 = __webpack_require__(/*! ./todos */ "./src/todos.ts");
__webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
const domManager_1 = __webpack_require__(/*! ./domManager */ "./src/domManager.ts");
const manager_1 = __webpack_require__(/*! ./manager */ "./src/manager.ts");
let storage = new manager_1.StorageManaging(window.localStorage);
let fullTask = new todos_1.Todo("This is a test", "We really just want to test this task", false, "24th january 2023", 3, { "get milk": false, "go jogging": false, "try to get a job": false }, "I took a mean ass shit");
let secondTask = new todos_1.Todo("second", "second", false, "24th january 2023", 3, { "first": false, "second": false, "third": false }, "second");
storage.insertTaskObjectIntoStorage("second", secondTask);
storage.insertTaskObjectIntoStorage("This is a test", fullTask);
console.log(fullTask);
let dom = new domManager_1.DOMManager(storage);
dom.hookSVGToElements();
dom.repopulateTasksListDOM();
dom.readTaskFromDOM();
dom.listContext();
dom.populateSubtask();
// this was instantiated and since the task variable was zero, it didn't work so well


/***/ }),

/***/ "./src/manager.ts":
/*!************************!*\
  !*** ./src/manager.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StorageManaging = void 0;
/**
 * There is StorageManager, but that name is already taken by the libraries.
 * It's job is to look for tasks in the background and pass it to the domManager
 * in order to populate the frontend
 *
 */
class StorageManaging {
    constructor(localstorage) {
        this.localStorage = localstorage;
    }
    insertTaskObjectIntoStorage(taskname, task) {
        this.localStorage.setItem(taskname, JSON.stringify(task));
    }
    populateTasksFromStorage() {
        let taskArray = [];
        if (this.localStorage.length === 0)
            return; //if the localstorage is empty, return
        Object.keys(this.localStorage).forEach((keys) => {
            taskArray.push(JSON.parse(this.localStorage.getItem(keys)));
        });
        return taskArray;
    }
    changeDone(task, bool) {
        let todo = JSON.parse(this.localStorage.getItem(task));
        console.log(todo.done);
        todo.done = bool;
        this.localStorage.removeItem(task);
        this.localStorage.setItem(task, JSON.stringify(todo));
    }
    getTask(title) {
        return JSON.parse(this.localStorage.getItem(title));
    }
    insertSubtask(taskTitle, subTask) {
        console.log(taskTitle);
        let todo = JSON.parse(this.localStorage.getItem(taskTitle));
        console.log(todo);
        todo.checklist[subTask] = false;
        this.localStorage.removeItem(taskTitle);
        this.localStorage.setItem(taskTitle, JSON.stringify(todo));
        console.log(todo.checklist);
    }
}
exports.StorageManaging = StorageManaging;


/***/ }),

/***/ "./src/todos.ts":
/*!**********************!*\
  !*** ./src/todos.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Todo = void 0;
class Todo {
    constructor(title, description = "", done = false, dueDate = "", priority = 0, checklist = {}, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.done = done;
        this.checklist = checklist;
    }
    info() {
        return {
            "title": this.title,
            "description": this.description,
            "due date": this.dueDate,
            "priority": this.priority,
            "notes": this.notes,
            "checklist": {}
        };
    }
}
exports.Todo = Todo;


/***/ }),

/***/ "./src/img/crisis_alert_FILL0_wght400_GRAD0_opsz48.svg":
/*!*************************************************************!*\
  !*** ./src/img/crisis_alert_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTI0IDQ0UTE5Ljg1IDQ0IDE2LjIgNDIuNDI1UTEyLjU1IDQwLjg1IDkuODUgMzguMTVRNy4xNSAzNS40NSA1LjU3NSAzMS44UTQgMjguMTUgNCAyNFE0IDE4LjE1IDcuMSAxMy4yNzVRMTAuMiA4LjQgMTUuNSA1LjlRMTUuNTUgNi43IDE1LjY1IDcuNDI1UTE1Ljc1IDguMTUgMTUuOTUgOVExMS44IDExLjI1IDkuNCAxNS4yNzVRNyAxOS4zIDcgMjRRNyAzMS4xIDExLjk1IDM2LjA1UTE2LjkgNDEgMjQgNDFRMzEuMSA0MSAzNi4wNSAzNi4wNVE0MSAzMS4xIDQxIDI0UTQxIDE5LjI1IDM4LjYgMTUuMjVRMzYuMiAxMS4yNSAzMiA5UTMyLjIgOC4xIDMyLjMyNSA3LjM3NVEzMi40NSA2LjY1IDMyLjUgNS45UTM3LjggOC40IDQwLjkgMTMuMjc1UTQ0IDE4LjE1IDQ0IDI0UTQ0IDI4LjE1IDQyLjQyNSAzMS44UTQwLjg1IDM1LjQ1IDM4LjE1IDM4LjE1UTM1LjQ1IDQwLjg1IDMxLjggNDIuNDI1UTI4LjE1IDQ0IDI0IDQ0Wk0yNCAzNlExOSAzNiAxNS41IDMyLjVRMTIgMjkgMTIgMjRRMTIgMjAuOTUgMTMuNCAxOC4zMjVRMTQuOCAxNS43IDE3LjM1IDE0UTE3LjU1IDE0LjU1IDE3Ljc3NSAxNS4yNzVRMTggMTYgMTguMzUgMTdRMTYuNzUgMTguMyAxNS44NzUgMjAuMVExNSAyMS45IDE1IDI0UTE1IDI3Ljc1IDE3LjYyNSAzMC4zNzVRMjAuMjUgMzMgMjQgMzNRMjcuNzUgMzMgMzAuMzc1IDMwLjM3NVEzMyAyNy43NSAzMyAyNFEzMyAyMS45IDMyLjEyNSAyMC4xUTMxLjI1IDE4LjMgMjkuNjUgMTdRMjkuOTUgMTYuMDUgMzAuMTc1IDE1LjMyNVEzMC40IDE0LjYgMzAuNiAxNFEzMy4xNSAxNS43IDM0LjU3NSAxOC4zMjVRMzYgMjAuOTUgMzYgMjRRMzYgMjkgMzIuNSAzMi41UTI5IDM2IDI0IDM2Wk0yMi40IDE2LjVRMjAuNTUgMTAuOTUgMjAuMDI1IDguODc1UTE5LjUgNi44IDE5LjUgNVExOS41IDMuMSAyMC44IDEuOFEyMi4xIDAuNSAyNCAwLjVRMjUuOSAwLjUgMjcuMiAxLjhRMjguNSAzLjEgMjguNSA1UTI4LjUgNi44IDI3Ljk3NSA4Ljg3NVEyNy40NSAxMC45NSAyNS42IDE2LjVaTTI0IDI3LjVRMjIuNTUgMjcuNSAyMS41MjUgMjYuNDc1UTIwLjUgMjUuNDUgMjAuNSAyNFEyMC41IDIyLjU1IDIxLjUyNSAyMS41MjVRMjIuNTUgMjAuNSAyNCAyMC41UTI1LjQ1IDIwLjUgMjYuNDc1IDIxLjUyNVEyNy41IDIyLjU1IDI3LjUgMjRRMjcuNSAyNS40NSAyNi40NzUgMjYuNDc1UTI1LjQ1IDI3LjUgMjQgMjcuNVoiLz48L3N2Zz4=";

/***/ }),

/***/ "./src/img/event_upcoming_FILL0_wght400_GRAD0_opsz48.svg":
/*!***************************************************************!*\
  !*** ./src/img/event_upcoming_FILL0_wght400_GRAD0_opsz48.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTI4LjMgNDRWNDFIMzlRMzkgNDEgMzkgNDFRMzkgNDEgMzkgNDFWMTkuNUg5VjMwLjVINlYxMFE2IDguOCA2LjkgNy45UTcuOCA3IDkgN0gxMi4yNVY0SDE1LjVWN0gzMi41VjRIMzUuNzVWN0gzOVE0MC4yIDcgNDEuMSA3LjlRNDIgOC44IDQyIDEwVjQxUTQyIDQyLjIgNDEuMSA0My4xUTQwLjIgNDQgMzkgNDRaTTE2IDQ3LjMgMTMuOSA0NS4yIDE5LjU1IDM5LjVIMi41VjM2LjVIMTkuNTVMMTMuOSAzMC44TDE2IDI4LjdMMjUuMyAzOFpNOSAxNi41SDM5VjEwUTM5IDEwIDM5IDEwUTM5IDEwIDM5IDEwSDlROSAxMCA5IDEwUTkgMTAgOSAxMFpNOSAxNi41VjEwUTkgMTAgOSAxMFE5IDEwIDkgMTBROSAxMCA5IDEwUTkgMTAgOSAxMFYxNi41WiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/img/grade_FILL0_wght400_GRAD0_opsz48.svg":
/*!******************************************************!*\
  !*** ./src/img/grade_FILL0_wght400_GRAD0_opsz48.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTE3LjE1IDM1Ljg1IDI0IDMwLjY1IDMwLjg1IDM1Ljg1IDI4LjEgMjcuMiAzNC40IDIzLjFIMjYuODVMMjQgMTQuNDVMMjEuMTUgMjMuMUgxMy42TDE5LjkgMjcuMlpNMTEuNjUgNDQgMTYuMyAyOC44IDQgMjBIMTkuMkwyNCA0TDI4LjggMjBINDRMMzEuNyAyOC44TDM2LjM1IDQ0TDI0IDM0LjZaTTI0IDI1LjE1WiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/img/home_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************!*\
  !*** ./src/img/home_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTggNDJWMThMMjQuMSA2TDQwIDE4VjQySDI4LjNWMjcuNzVIMTkuNjVWNDJaTTExIDM5SDE2LjY1VjI0Ljc1SDMxLjNWMzlIMzdWMTkuNUwyNC4xIDkuNzVMMTEgMTkuNVpNMjQgMjQuMzVaIi8+PC9zdmc+";

/***/ }),

/***/ "./src/img/list_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************!*\
  !*** ./src/img/list_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTcuNSAzNFE2Ljg1IDM0IDYuNDI1IDMzLjU3NVE2IDMzLjE1IDYgMzIuNVE2IDMxLjg1IDYuNDI1IDMxLjQyNVE2Ljg1IDMxIDcuNSAzMVE4LjE1IDMxIDguNTc1IDMxLjQyNVE5IDMxLjg1IDkgMzIuNVE5IDMzLjE1IDguNTc1IDMzLjU3NVE4LjE1IDM0IDcuNSAzNFpNNy41IDI1LjVRNi44NSAyNS41IDYuNDI1IDI1LjA3NVE2IDI0LjY1IDYgMjRRNiAyMy4zNSA2LjQyNSAyMi45MjVRNi44NSAyMi41IDcuNSAyMi41UTguMTUgMjIuNSA4LjU3NSAyMi45MjVROSAyMy4zNSA5IDI0UTkgMjQuNjUgOC41NzUgMjUuMDc1UTguMTUgMjUuNSA3LjUgMjUuNVpNNy41IDE3UTYuODUgMTcgNi40MjUgMTYuNTc1UTYgMTYuMTUgNiAxNS41UTYgMTQuODUgNi40MjUgMTQuNDI1UTYuODUgMTQgNy41IDE0UTguMTUgMTQgOC41NzUgMTQuNDI1UTkgMTQuODUgOSAxNS41UTkgMTYuMTUgOC41NzUgMTYuNTc1UTguMTUgMTcgNy41IDE3Wk0xNC41IDM0VjMxSDQyVjM0Wk0xNC41IDI1LjVWMjIuNUg0MlYyNS41Wk0xNC41IDE3VjE0SDQyVjE3WiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/img/priority_FILL0_wght400_GRAD0_opsz48.svg":
/*!*********************************************************!*\
  !*** ./src/img/priority_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTE3LjU1IDQyUTEyLjc1IDQyIDkuMzc1IDM4LjYyNVE2IDM1LjI1IDYgMzAuNDVWMTcuNTVRNiAxMi43NSA5LjM3NSA5LjM3NVExMi43NSA2IDE3LjU1IDZIMzAuNDVRMzUuMjUgNiAzOC42MjUgOS4zNzVRNDIgMTIuNzUgNDIgMTcuNTVWMzAuNDVRNDIgMzUuMjUgMzguNjI1IDM4LjYyNVEzNS4yNSA0MiAzMC40NSA0MlpNMjEuOTUgMzEuNzUgMzMuOTUgMTkuNzUgMzEuOCAxNy42IDIxLjk1IDI3LjQ1IDE3LjEgMjIuNiAxNC45NSAyNC43NVpNMTcuNTUgMzlIMzAuNDVRMzQgMzkgMzYuNSAzNi41UTM5IDM0IDM5IDMwLjQ1VjE3LjU1UTM5IDE0IDM2LjUgMTEuNVEzNCA5IDMwLjQ1IDlIMTcuNTVRMTQgOSAxMS41IDExLjVROSAxNCA5IDE3LjU1VjMwLjQ1UTkgMzQgMTEuNSAzNi41UTE0IDM5IDE3LjU1IDM5Wk0yNCAyNFEyNCAyNCAyNCAyNFEyNCAyNCAyNCAyNFEyNCAyNCAyNCAyNFEyNCAyNCAyNCAyNFEyNCAyNCAyNCAyNFEyNCAyNCAyNCAyNFEyNCAyNCAyNCAyNFEyNCAyNCAyNCAyNFoiLz48L3N2Zz4=";

/***/ }),

/***/ "./src/font/NotoSans-Light.ttf":
/*!*************************************!*\
  !*** ./src/font/NotoSans-Light.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cfb54d923b32fbd5525.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87WUFDeEIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztZQUNuQixXQUFXLEVBQUUsRUFBRTtTQUNsQjtJQUNMLENBQUM7Q0FDSjtBQTdCRCxvQkE2QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Nhc3MvX25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80ZDM3Iiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21NYW5hZ2VyLnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tYW5hZ2VyLnRzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vX25vcm1hbGl6ZS5zY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvTm90b1NhbnMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ05vdG9TYW5zJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogJ05vdG9TYW5zJywgc2Fucy1zZXJpZjsgfVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbiNsaXN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbiAgbWluLXdpZHRoOiAyODBweDsgfVxcbiAgI2xpc3RzLWNvbnRhaW5lciAuc2VjdGlvbiB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LWdyb3c6IDE7IH1cXG4gICNsaXN0cy1jb250YWluZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFweDsgfVxcbiAgICAjbGlzdHMtY29udGFpbmVyIHVsIGxpIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgcmlnaHQ6IDMwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgI2xpc3RzLWNvbnRhaW5lciB1bCBsaTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuICAjbGlzdHMtY29udGFpbmVyIGltZyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxNXB4OyB9XFxuICAjbGlzdHMtY29udGFpbmVyICNkZWZhdWx0LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1ib3R0b206ICNlMGUwZTAgMnB4IHNvbGlkOyB9XFxuICAjbGlzdHMtY29udGFpbmVyIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDsgfVxcbiAgICAjbGlzdHMtY29udGFpbmVyIC5mb290ZXIgaW1nIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICB0b3A6IDFweDsgfVxcbiAgICAgICNsaXN0cy1jb250YWluZXIgLmZvb3RlciBpbWdob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuI3Rhc2tzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3Y2NjO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICN0YXNrcy1jb250YWluZXIgLmhlYWRlciBoMiB7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAjdGFza3MtY29udGFpbmVyIC5zZWN0aW9uIHtcXG4gICAgZmxleC1ncm93OiAxOyB9XFxuICAjdGFza3MtY29udGFpbmVyIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7IH1cXG4gICN0YXNrcy1jb250YWluZXIgbGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGdhcDogNHB4OyB9XFxuICAgICN0YXNrcy1jb250YWluZXIgbGlhY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cXG4gICAgI3Rhc2tzLWNvbnRhaW5lciBsaSBwIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAjdGFza3MtY29udGFpbmVyIC5mb290ZXIgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDE1cHg7IH1cXG4gICAgI3Rhc2tzLWNvbnRhaW5lciAuZm9vdGVyIGRpdiBpbWcge1xcbiAgICAgIHdpZHRoOiAyNXB4OyB9XFxuICAjdGFza3MtY29udGFpbmVyIC50YXNrLWNoaWxkLWRvbmUge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cXG4jdGFzay1jdXN0b21pemF0aW9uIHtcXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgfVxcbiAgI3Rhc2stY3VzdG9taXphdGlvbiAjZmlyc3QtaGVhZGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgI3Rhc2stY3VzdG9taXphdGlvbiAjdGFzay1jdXN0b21pemF0aW9uLWhlYWRlciB1bCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDQwcHg7IH1cXG4gICN0YXNrLWN1c3RvbWl6YXRpb24gI3JtZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAgICN0YXNrLWN1c3RvbWl6YXRpb24gI3JtZC1jb250YWluZXIgZGl2IHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4IDA7IH1cXG4gICAgICAjdGFzay1jdXN0b21pemF0aW9uICNybWQtY29udGFpbmVyIGRpdiBwIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTsgfVxcbiAgI3Rhc2stY3VzdG9taXphdGlvbiAjbm90ZXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3Rhc2stY3VzdG9taXphdGlvbiB0ZXh0LWFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksdUJBQXVCO0VBQ3ZCLDRDQUFzQyxFQUFBOztBQUkxQztFQUNJLGFBQWE7RUFDYixhQUFjO0VBQ2QsbUNBQW1DLEVBQUE7O0FBR3ZDO0VBQ0kscUJBQXFCLEVBQUE7O0FBTXpCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7RUFKcEI7SUFNUSxjQUFhO0lBQ2IsWUFBWSxFQUFBO0VBUHBCO0lBVVEsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRLEVBQUE7SUFaaEI7TUFjWSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtNQWpCL0I7UUFtQmdCLHlCQUF5QixFQUFBO0VBbkJ6QztJQXlCUSxtQkFBbUI7SUFDbkIsV0FBVyxFQUFBO0VBMUJuQjtJQThCUSxnQ0FBZ0MsRUFBQTtFQTlCeEM7SUFrQ1EsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRLEVBQUE7SUFwQ2hCO01Bc0NZLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsUUFBUSxFQUFBO01BeENwQjtRQTBDZ0IseUJBQXlCLEVBQUE7O0FBUXpDO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFKMUI7SUFPWSxXQUFXLEVBQUE7RUFQdkI7SUFXUSxZQUFZLEVBQUE7RUFYcEI7SUFjUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVEsRUFBQTtFQWhCaEI7SUFtQlEseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRLEVBQUE7SUF4QmhCO01BMEJZLHlCQUF5QixFQUFBO0lBMUJyQztNQTZCWSxlQUFlO01BQ2YsZUFBZSxFQUFBO0VBOUIzQjtJQW9DWSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7SUF2Q3hCO01BeUNnQixXQUFXLEVBQUE7RUF6QzNCO0lBK0NRLFdBQVc7SUFDWCw2QkFBNkIsRUFBQTs7QUFRckM7RUFDSSxpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7RUFGMUI7SUFNUSxhQUFhLEVBQUE7RUFOckI7SUFVWSxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0VBWHZCO0lBZ0JRLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtJQWpCOUI7TUFtQlksZUFBZTtNQUNmLG9CQUFvQixFQUFBO01BcEJoQztRQXNCZ0IsZUFBZSxFQUFBO0VBdEIvQjtJQTJCUSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUE1QjlCO0lBZ0NRLFlBQVksRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9fbm9ybWFsaXplLnNjc3MnKTtcXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvU2Fucyc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250L05vdG9TYW5zLUxpZ2h0LnR0ZicpO1xcblxcbn1cXG4vLyBpbiBnZW5lcmFsLCB0aGUgd2hvbGUgYXBwIGlzIGZsZXhlZFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4IDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5cXG5cXG5cXG4jbGlzdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG4gICAgbWluLXdpZHRoOiAyODBweDtcXG4gICAgLnNlY3Rpb24ge1xcbiAgICAgICAgb3ZlcmZsb3c6YXV0bztcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgfVxcbiAgICB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgbGkge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICByaWdodDogMzBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICB9XFxuICAgIGltZyB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgI2RlZmF1bHQtcHJvamVjdHMtY29udGFpbmVye1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogI2UwZTBlMCAycHggc29saWQ7XFxuICAgIH1cXG5cXG4gICAgLmZvb3RlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgICAgICB0b3A6IDFweDtcXG4gICAgICAgICAgICAmaG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgfVxcblxcbn1cXG5cXG4jdGFza3MtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3Y2NjO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuc2VjdGlvbiB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgIH1cXG4gICAgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDJweDtcXG4gICAgfVxcbiAgICBsaSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgcmlnaHQ6IDMwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgZ2FwOiA0cHg7XFxuICAgICAgICAmYWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgICAgICB9XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5mb290ZXIge1xcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGJvdHRvbTogMTVweDtcXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnRhc2stY2hpbGQtZG9uZXtcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIH1cXG4gICAgLnRhc2stY2hpbGQtdW5kb25le1xcbiAgICAgICAgXFxuICAgIH1cXG59XFxuXFxuXFxuI3Rhc2stY3VzdG9taXphdGlvbiB7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcblxcbiAgICBcXG4gICAgI2ZpcnN0LWhlYWRlciA+IGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgICN0YXNrLWN1c3RvbWl6YXRpb24taGVhZGVyIHtcXG4gICAgICAgIHVsIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgI3JtZC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBkaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHggMDtcXG4gICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICNub3Rlcy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgXFxuICAgIHRleHQtYXJlYSB7XFxuICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuXFxuLmhpZGRlbntcXG4gICAgLy9kaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvL3NyYy9zY3NzL19ub3JtYWxpemUuc2Nzc3NcXG5cXG4vKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG4gaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcbiAgXFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbiAgfVxcbiAgXFxuICAvKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcbiAgXFxuICBociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICAgIGhlaWdodDogMDsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgcHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYixcXG4gIHN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBjb2RlLFxcbiAga2JkLFxcbiAgc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3ViLFxcbiAgc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbiAgfVxcbiAgXFxuICBzdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG4gIH1cXG4gIFxcbiAgLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQsXFxuICBvcHRncm91cCxcXG4gIHNlbGVjdCxcXG4gIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBpbnB1dCB7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgc2VsZWN0IHsgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBsZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuICBcXG4gIHByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuICBcXG4gIHRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuICBbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICB9XFxuICBcXG4gIC8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuICBcXG4gIHRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbaGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvX25vcm1hbGl6ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUksaUJBQWlCLEVBQUUsTUFBTTtJQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0VBQ3hDOztFQUVBO2lGQUMrRTs7RUFFL0U7O0lBRUU7O0VBRUY7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7aUZBQytFOztFQUUvRTs7O0lBR0U7O0VBRUY7SUFDRSx1QkFBdUIsRUFBRSxNQUFNO0lBQy9CLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGlCQUFpQixFQUFFLE1BQU07RUFDM0I7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsaUNBQWlDLEVBQUUsTUFBTTtJQUN6QyxjQUFjLEVBQUUsTUFBTTtFQUN4Qjs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLG1CQUFtQixFQUFFLE1BQU07SUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0VBQzNDOztFQUVBOztJQUVFOztFQUVGOztJQUVFLG1CQUFtQjtFQUNyQjs7RUFFQTs7O0lBR0U7O0VBRUY7OztJQUdFLGlDQUFpQyxFQUFFLE1BQU07SUFDekMsY0FBYyxFQUFFLE1BQU07RUFDeEI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOzs7SUFHRTs7RUFFRjs7SUFFRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO2lGQUMrRTs7RUFFL0U7O0lBRUU7O0VBRUY7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7aUZBQytFOztFQUUvRTs7O0lBR0U7O0VBRUY7Ozs7O0lBS0Usb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0VBQ25COztFQUVBOzs7SUFHRTs7RUFFRjtVQUNRLE1BQU07SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7OztJQUdFOztFQUVGO1dBQ1MsTUFBTTtJQUNiLG9CQUFvQjtFQUN0Qjs7RUFFQTs7SUFFRTs7RUFFRjs7OztJQUlFLDBCQUEwQjtFQUM1Qjs7RUFFQTs7SUFFRTs7RUFFRjs7OztJQUlFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7O0lBRUU7O0VBRUY7Ozs7SUFJRSw4QkFBOEI7RUFDaEM7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7Ozs7O0lBS0U7O0VBRUY7SUFDRSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLG1CQUFtQixFQUFFLE1BQU07RUFDN0I7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOzs7SUFHRTs7RUFFRjs7SUFFRSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLFVBQVUsRUFBRSxNQUFNO0VBQ3BCOztFQUVBOztJQUVFOztFQUVGOztJQUVFLFlBQVk7RUFDZDs7RUFFQTs7O0lBR0U7O0VBRUY7SUFDRSw2QkFBNkIsRUFBRSxNQUFNO0lBQ3JDLG9CQUFvQixFQUFFLE1BQU07RUFDOUI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxhQUFhLEVBQUUsTUFBTTtFQUN2Qjs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0UsYUFBYTtFQUNmOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsYUFBYTtFQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vc3JjL3Njc3MvX25vcm1hbGl6ZS5zY3Nzc1xcblxcbi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbiBodG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuICBcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxuICB9XFxuICBcXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuICBcXG4gIGhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBwcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBhYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBiLFxcbiAgc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGNvZGUsXFxuICBrYmQsXFxuICBzYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdWIsXFxuICBzdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICBzdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxuICB9XFxuICBcXG4gIHN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbiAgfVxcbiAgXFxuICAvKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBpbnB1dCxcXG4gIG9wdGdyb3VwLFxcbiAgc2VsZWN0LFxcbiAgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0IHsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBzZWxlY3QgeyAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcbiAgXFxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG4gIFxcbiAgcHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4gIFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBkZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG4gIH1cXG4gIFxcbiAgLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBNeURheSBmcm9tICcuL2ltZy9ob21lX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbmltcG9ydCBTb29uRHVlIGZyb20gJy4vaW1nL2NyaXNpc19hbGVydF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnXG5pbXBvcnQgUGxhbm5lZCBmcm9tICcuL2ltZy9ldmVudF91cGNvbWluZ19GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnXG5pbXBvcnQgQWxsVGFza3MgZnJvbSAnLi9pbWcvZ3JhZGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9pbWcvbGlzdF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnXG5pbXBvcnQgTmV3VGFzayBmcm9tICcuL2ltZy9wcmlvcml0eV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnXG5pbXBvcnQgeyBTdG9yYWdlTWFuYWdpbmcgfSBmcm9tICcuL21hbmFnZXInXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2Rvcydcbi8qKlxuICogRE9NTWFuYWdlciBtYW5hZ2VzIHRoZSBJL08gYW5kIGhhbmRsaW5nIG9mIHRoZSBET00gdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGhcbiAqIGl0IHRha2VzIHRoZSB2YWx1ZXMgZnJvbSB0aGUgZm9ybXMgYW5kIGlucHV0IGFuZCBzYXZlcyB0aGVtIGZvciB0aGVcbiAqIHVzZSBsYXRlciBmb3IgdGhlIFRhc2tNYW5hZ2VyLlxuICovXG5leHBvcnQgY2xhc3MgRE9NTWFuYWdlciB7XG4gICAgLy9wcml2YXRlIHRhc2sgPSBcIlwiXG4gICAgcHJpdmF0ZSBkb25lID0gZmFsc2VcbiAgICBzdG9yYWdlTWFuYWdlcjogU3RvcmFnZU1hbmFnaW5nXG5cbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlTWFuYWdlcjogU3RvcmFnZU1hbmFnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIgPSBzdG9yYWdlTWFuYWdlclxuICAgIH1cblxuICAgIGhvb2tTVkdUb0VsZW1lbnRzKCkge1xuICAgICAgICBsZXQgbXlEYXlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1kYXlcIikgYXMgSFRNTEltYWdlRWxlbWVudFxuICAgICAgICBteURheUVsZW1lbnQuc3JjID0gTXlEYXlcbiAgICAgICAgbGV0IHNvb25EdWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb29uLWR1ZVwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgICAgIHNvb25EdWVFbGVtZW50LnNyYyA9IFNvb25EdWVcbiAgICAgICAgbGV0IHBsYW5uZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFubmVkXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnRcbiAgICAgICAgcGxhbm5lZEVsZW1lbnQuc3JjID0gUGxhbm5lZFxuICAgICAgICBsZXQgYWxsVGFza0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC10YXNrc1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgICAgIGFsbFRhc2tFbGVtZW50LnNyYyA9IEFsbFRhc2tzXG4gICAgICAgIGxldCBuZXdQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdCcpIGFzIEhUTUxJbWFnZUVsZW1lbnRcbiAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuc3JjID0gUHJvamVjdFxuICAgICAgICBsZXQgbmV3VGFza0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnRcbiAgICAgICAgbmV3VGFza0VsZW1lbnQuc3JjID0gTmV3VGFza1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5zIHRvIGlucHV0IGluIHRoZSB0YXNrIG1lbnUsIHVwb24gZW50ZXJpbmcgXCJFbnRlclwiLlxuICAgICAqL1xuICAgIHJlYWRUYXNrRnJvbURPTSgpIHtcbiAgICAgICAgbGV0IGFkZFRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stY29udGFpbmVyXCIpPy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICAgICAgYWRkVGFza0lucHV0Py5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXYua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZihhZGRUYXNrSW5wdXQ/LnZhbHVlLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm5cbiAgICAgICAgICAgICAgICBpZiAoYWRkVGFza0lucHV0Py52YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFza1RvVG9Eb0xpc3RET00oYWRkVGFza0lucHV0LnZhbHVlLCBcIm5vdC1kb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRvZG8oYCR7YWRkVGFza0lucHV0LnZhbHVlfWApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuaW5zZXJ0VGFza09iamVjdEludG9TdG9yYWdlKGFkZFRhc2tJbnB1dC52YWx1ZSwgbmV3VGFzaylcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFza0lucHV0IS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBhZGRUYXNrVG9Ub0RvTGlzdERPTSh0YXNrOiBzdHJpbmcsIHdoaWNoQ29udGFpbmVyOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt3aGljaENvbnRhaW5lcn1gKVxuICAgICAgICBsZXQgbmV3VG9Eb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmV3VG9Eb0xpc3QuZGF0YXNldC5uYW1lID0gYCR7dGFza31gXG4gICAgICAgIG5ld1RvRG9MaXN0LmlubmVySFRNTCA9XG4gICAgICAgICAgICBgPGJ1dHRvbiBkYXRhLW5hbWU9XCIke3Rhc2t9XCIgPis8L2J1dHRvbj4ke3Rhc2t9XG4gICAgICAgIGBcbiAgICAgICAgbmV3VG9Eb0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2stY2hpbGQtdW5kb25lXCIpXG4gICAgICAgIHRhc2tDb250YWluZXI/Lmluc2VydEJlZm9yZShuZXdUb0RvTGlzdCwgdGFza0NvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIH1cblxuICAgIHJlcG9wdWxhdGVUYXNrc0xpc3RET00oKSB7XG4gICAgICAgIGxldCB0b2RvcyA9IHRoaXMuc3RvcmFnZU1hbmFnZXIucG9wdWxhdGVUYXNrc0Zyb21TdG9yYWdlKClcbiAgICAgICAgaWYgKHRvZG9zID09PSB1bmRlZmluZWQpIHJldHVyblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG8uZG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrVG9Ub0RvTGlzdERPTSh0b2RvLnRpdGxlLCBcIm5vdC1kb25lXCIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrVG9Ub0RvTGlzdERPTSh0b2RvLnRpdGxlLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlzdENvbnRleHQoKSB7XG4gICAgICAgIGxldCB0YXNrQ2hpbGRyZW5QYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3QtY29udGFpbmVyXCIpXG4gICAgICAgIHRhc2tDaGlsZHJlblBhcmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldjogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGVUYXJnZXQgPSBldi50YXJnZXQgYXMgTm9kZVxuICAgICAgICAgICAgLy9pZiB0aGUgdGFyZ2V0IGluIHRoaXMgY29udGFpbmVyIGNsaWNrZWQgaXMgYSBsaXN0LCB3ZSBjYWxsIGl0IGVpdGhlciBkb25lLCBvciB1bmRvbmVcbiAgICAgICAgICAgIGlmIChub2RlVGFyZ2V0Lm5vZGVOYW1lID09PSBcIkxJXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWNoaWxkLXVuZG9uZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stY2hpbGQtdW5kb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGlsZC1kb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuY2hhbmdlRG9uZSh0YXJnZXQuZGF0YXNldC5uYW1lISwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoVG9Eb25lT3JVbmRvbmVDb250YWluZXIodGFyZ2V0LCBcImRvbmVcIilcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2stY2hpbGQtZG9uZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stY2hpbGQtZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcInRhc2stY2hpbGQtdW5kb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuY2hhbmdlRG9uZSh0YXJnZXQuZGF0YXNldC5uYW1lISwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvRG9uZU9yVW5kb25lQ29udGFpbmVyKHRhcmdldCwgXCJub3QtZG9uZVwiKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlVGFyZ2V0Lm5vZGVOYW1lID09PSBcIkJVVFRPTlwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICBsZXQgdGFza0JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWN1c3RvbWl6YXRpb25cIilcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza0JvYXJkPy5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0JvYXJkPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZvcm0odGFyZ2V0LmRhdGFzZXQubmFtZSEpXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRhcmdldC5kYXRhc2V0Lm5hbWUgIT09IHRhc2tOYW1lLnZhbHVlICYmXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRhc2tCb2FyZD8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tCb2FyZD8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRm9ybSh0YXJnZXQuZGF0YXNldC5uYW1lISlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMilcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5kYXRhc2V0Lm5hbWUgPT09IHRhc2tOYW1lLnZhbHVlICYmIFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpID09PSB0cnVlICYmIFxuICAgICAgICAgICAgICAgICAgICB0YXNrQm9hcmQ/LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tCb2FyZD8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFjdGl2ZUZyb21CdXR0b25zKClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coMylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2tCb2FyZD8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgdGFza0JvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQWN0aXZlRnJvbUJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb25lXCIpXG4gICAgICAgIGxldCBub3REb25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3QtZG9uZVwiKVxuICAgICAgICBpZiAoZG9uZUNvbnRhaW5lcj8uY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQpIGNvbnNvbGUubG9nKFwiY29udGVudCBpcyB1bmRlZmluZWRcIilcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb25lQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aC0xOyBpbmRleCsrKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb25lQ29udGFpbmVyLmNoaWxkcmVuW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdERvbmVDb250YWluZXI/LmNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmxvZyhcImNvbnRlbnQgaXMgdW5kZWZpbmVkXCIpXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm90RG9uZUNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgtMTsgaW5kZXgrKyl7XG4gICAgICAgICAgICAgICAgbm90RG9uZUNvbnRhaW5lci5jaGlsZHJlbltpbmRleF0uZmlyc3RFbGVtZW50Q2hpbGQ/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVzaFRvRG9uZU9yVW5kb25lQ29udGFpbmVyKHRhcmdldDogSFRNTEVsZW1lbnQsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpPy5hcHBlbmQodGFyZ2V0KVxuICAgIH1cbiAgICAvLyBub3QgZG9uZSB5ZXQsIHNob3VsZCByZXR1cm4gYSBcInRydWVcIiBmb3IgXG4gICAgcG9wdWxhdGVGb3JtKHRhc2tuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHRvZG8gPSB0aGlzLnN0b3JhZ2VNYW5hZ2VyLmdldFRhc2sodGFza25hbWUpXG4gICAgICAgIC8vIGdldCB0aGUgdGFzayB0aXRsZVxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnRcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuICAgICAgICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnRcbiAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uXG5cblxuICAgICAgICBsZXQgc3ViVGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YnRhc2stbGlzdFwiKSBhcyBIVE1MVUxpc3RFbGVtZW50XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgY2hpbGRyZW4gb2YgdGhlIHN1Ymxpc3QtVGFzayB1bm9yZGVyZWQgbGlzdCBleGNlcHQgdGhlIGZpcnN0IG9uZSwgaW4gb3JkZXIgdG8gcmVtb3ZlIHRob3NlXG4gICAgICAgIC8vIGxlZnRvdmVyIGNoaWxkcmVuXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBlbGVtZW50ID0gc3ViVGFza0xpc3QuY2hpbGRyZW4ubGVuZ3RoLTE7IGVsZW1lbnQ+IDA7IGVsZW1lbnQtLSkge1xuICAgICAgICAgICAgc3ViVGFza0xpc3QuY2hpbGRyZW5bZWxlbWVudF0ucmVtb3ZlKClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0b2RvLmNoZWNrbGlzdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0b2RvLmNoZWNrbGlzdCwga2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0ga2V5XG4gICAgICAgICAgICAgICAgbGkuZGF0YXNldC5uYW1lID0ga2V5XG4gICAgICAgICAgICAgICAgc3ViVGFza0xpc3QuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICBkYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlXG4gICAgICAgIGxldCBub3Rlc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgICAgICAgaWYgKHRvZG8ubm90ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbm90ZXNFbGVtZW50LnZhbHVlID0gdG9kby5ub3Rlc1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LXNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuICAgICAgICBwcmlvcml0eUVsZW1lbnQudmFsdWUgPSB0b2RvLnByaW9yaXR5LnRvU3RyaW5nKClcbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZVxuXG4gICAgfVxuXG4gICAgcG9wdWxhdGVTdWJ0YXNrKCkge1xuICAgICAgICBsZXQgc3VidGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXN1YnRhc2tcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICAgICAgbGV0IHN1YnRhc2tFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VidGFza1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgIHN1YnRhc2tCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgLyogaWYgKHN1YnRhc2tFbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3ViVGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgICAgICBzdWJUYXNrTGlzdC50ZXh0Q29udGVudCA9IHN1YnRhc2tFbC52YWx1ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1YlRhc2tMaXN0KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VidGFzay1saXN0XCIpPy5hcHBlbmQoc3ViVGFza0xpc3QpXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSB0YXNrIHRpdGxlIGZyb20gdGFzayBjdXN0b21pemF0aW9uIGFuZCB0aGUgZ2V0IHRoZSB0b2RvXG4gICAgICAgICAgICAgICAgbGV0IHN1YnRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLmluc2VydFN1YnRhc2soc3VidGFza1RpdGxlLnZhbHVlISwgc3ViVGFza0xpc3QudGV4dENvbnRlbnQpXG5cbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9zXCJcbmltcG9ydCB7IFByb2plY3R9IGZyb20gXCIuL3Byb2plY3RzXCJcbmltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyBET01NYW5hZ2VyIH0gZnJvbSBcIi4vZG9tTWFuYWdlclwiXG5pbXBvcnQgeyBTdG9yYWdlTWFuYWdpbmcgfSBmcm9tIFwiLi9tYW5hZ2VyXCJcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmxldCBzdG9yYWdlID0gbmV3IFN0b3JhZ2VNYW5hZ2luZyh3aW5kb3cubG9jYWxTdG9yYWdlKVxubGV0IGZ1bGxUYXNrID0gbmV3IFRvZG8oXCJUaGlzIGlzIGEgdGVzdFwiLCBcbiAgICBcIldlIHJlYWxseSBqdXN0IHdhbnQgdG8gdGVzdCB0aGlzIHRhc2tcIiwgZmFsc2UsXG4gICAgXCIyNHRoIGphbnVhcnkgMjAyM1wiLCAzICxcbiAgICB7XCJnZXQgbWlsa1wiOiBmYWxzZSxcImdvIGpvZ2dpbmdcIjogZmFsc2UsIFwidHJ5IHRvIGdldCBhIGpvYlwiOiBmYWxzZX0sIFxuICAgIFwiSSB0b29rIGEgbWVhbiBhc3Mgc2hpdFwiKVxuICAgIGxldCBzZWNvbmRUYXNrID0gbmV3IFRvZG8oXCJzZWNvbmRcIiwgXG4gICAgXCJzZWNvbmRcIiwgZmFsc2UsXG4gICAgXCIyNHRoIGphbnVhcnkgMjAyM1wiLCAzICxcbiAgICB7XCJmaXJzdFwiOiBmYWxzZSwgXCJzZWNvbmRcIjogZmFsc2UsIFwidGhpcmRcIjogZmFsc2V9LCBcbiAgICBcInNlY29uZFwiKVxuc3RvcmFnZS5pbnNlcnRUYXNrT2JqZWN0SW50b1N0b3JhZ2UoXCJzZWNvbmRcIiwgc2Vjb25kVGFzaylcbnN0b3JhZ2UuaW5zZXJ0VGFza09iamVjdEludG9TdG9yYWdlKFwiVGhpcyBpcyBhIHRlc3RcIiwgZnVsbFRhc2spXG5jb25zb2xlLmxvZyhmdWxsVGFzaylcbmxldCBkb20gPSBuZXcgRE9NTWFuYWdlcihzdG9yYWdlKTtcbmRvbS5ob29rU1ZHVG9FbGVtZW50cygpXG5kb20ucmVwb3B1bGF0ZVRhc2tzTGlzdERPTSgpXG5kb20ucmVhZFRhc2tGcm9tRE9NKClcbmRvbS5saXN0Q29udGV4dCgpXG5kb20ucG9wdWxhdGVTdWJ0YXNrKClcbi8vIHRoaXMgd2FzIGluc3RhbnRpYXRlZCBhbmQgc2luY2UgdGhlIHRhc2sgdmFyaWFibGUgd2FzIHplcm8sIGl0IGRpZG4ndCB3b3JrIHNvIHdlbGxcbiIsIlxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9zXCI7XG5cbi8qKlxuICogVGhlcmUgaXMgU3RvcmFnZU1hbmFnZXIsIGJ1dCB0aGF0IG5hbWUgaXMgYWxyZWFkeSB0YWtlbiBieSB0aGUgbGlicmFyaWVzLlxuICogSXQncyBqb2IgaXMgdG8gbG9vayBmb3IgdGFza3MgaW4gdGhlIGJhY2tncm91bmQgYW5kIHBhc3MgaXQgdG8gdGhlIGRvbU1hbmFnZXJcbiAqIGluIG9yZGVyIHRvIHBvcHVsYXRlIHRoZSBmcm9udGVuZFxuICogXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlTWFuYWdpbmcge1xuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBTdG9yYWdlO1xuICAgIGNvbnN0cnVjdG9yKGxvY2Fsc3RvcmFnZTogU3RvcmFnZSkge1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IGxvY2Fsc3RvcmFnZVxuICAgIH1cblxuICAgIHB1YmxpYyBpbnNlcnRUYXNrT2JqZWN0SW50b1N0b3JhZ2UodGFza25hbWU6c3RyaW5nICx0YXNrOiBUb2RvKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGFza25hbWUsIEpTT04uc3RyaW5naWZ5KHRhc2spKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdWxhdGVUYXNrc0Zyb21TdG9yYWdlKCk6IFRvZG9bXSB8dm9pZCB7XG4gICAgICAgIGxldCB0YXNrQXJyYXk6IFRvZG9bXSA9IFtdXG4gICAgICAgIGlmKHRoaXMubG9jYWxTdG9yYWdlLmxlbmd0aD09PSAwKSByZXR1cm4gLy9pZiB0aGUgbG9jYWxzdG9yYWdlIGlzIGVtcHR5LCByZXR1cm5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5sb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleXMpID0+IHtcbiAgICAgICAgICAgIHRhc2tBcnJheS5wdXNoKEpTT04ucGFyc2UodGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlzKSEpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGFza0FycmF5XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZURvbmUodGFzazpzdHJpbmcsIGJvb2w6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHRvZG86IFRvZG8gPSBKU09OLnBhcnNlKHRoaXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGFzaykhKVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmRvbmUpXG4gICAgICAgIHRvZG8uZG9uZSA9IGJvb2xcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0YXNrKVxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2ssIEpTT04uc3RyaW5naWZ5KHRvZG8pKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUYXNrKHRpdGxlOiBzdHJpbmcpOlRvZG97XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGl0bGUpISlcbiAgICB9XG4gICAgcHVibGljIGluc2VydFN1YnRhc2sodGFza1RpdGxlOiBzdHJpbmcsIHN1YlRhc2s6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrVGl0bGUpXG4gICAgICAgIGxldCB0b2RvOiBUb2RvID0gSlNPTi5wYXJzZSh0aGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2tUaXRsZSkhKVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKVxuICAgICAgICB0b2RvLmNoZWNrbGlzdFtzdWJUYXNrXSA9IGZhbHNlXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGFza1RpdGxlKVxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2tUaXRsZSwgSlNPTi5zdHJpbmdpZnkodG9kbykpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8uY2hlY2tsaXN0KVxuICAgIH1cbn0iLCJcblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgICB0aXRsZVxuICAgICBkZXNjcmlwdGlvblxuICAgICBkdWVEYXRlXG4gICAgIHByaW9yaXR5XG4gICAgIG5vdGVzXG4gICAgIGRvbmU7XG4gICAgIGNoZWNrbGlzdFxuXG4gICAgXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZz1cIlwiLCBkb25lOmJvb2xlYW4gPSBmYWxzZSwgZHVlRGF0ZTogc3RyaW5nID1cIlwiLCBwcmlvcml0eTogbnVtYmVyID0gMCwgIGNoZWNrbGlzdDogYW55ID0ge30sIG5vdGVzPzogc3RyaW5nfHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZVxuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdFxuICAgIH1cbiAgICBwdWJsaWMgaW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIFwiZHVlIGRhdGVcIjogdGhpcy5kdWVEYXRlLFxuICAgICAgICAgICAgXCJwcmlvcml0eVwiOiB0aGlzLnByaW9yaXR5LFxuICAgICAgICAgICAgXCJub3Rlc1wiOiB0aGlzLm5vdGVzLFxuICAgICAgICAgICAgXCJjaGVja2xpc3RcIjoge31cbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=