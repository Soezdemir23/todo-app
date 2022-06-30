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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'NotoSans';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\nbody {\n  height: 100vh;\n  display: flex;\n  font-family: 'NotoSans', sans-serif; }\n\nul {\n  list-style-type: none; }\n\n#lists-container {\n  display: flex;\n  flex-direction: column;\n  background-color: #f3f3f3;\n  min-width: 280px; }\n  #lists-container .section {\n    overflow: auto;\n    flex-grow: 1; }\n  #lists-container ul {\n    display: flex;\n    flex-direction: column;\n    gap: 1px; }\n    #lists-container ul li {\n      position: relative;\n      right: 30px;\n      display: flex;\n      align-items: center; }\n      #lists-container ul li:hover {\n        background-color: #e0e0e0; }\n  #lists-container img {\n    padding-right: 1rem;\n    width: 15px; }\n  #lists-container #default-projects-container {\n    border-bottom: #e0e0e0 2px solid; }\n  #lists-container .footer {\n    display: flex;\n    align-items: center;\n    gap: 5px; }\n    #lists-container .footer img {\n      position: relative;\n      left: 10px;\n      top: 1px; }\n      #lists-container .footer imghover {\n        background-color: #e0e0e0; }\n\n#tasks-container {\n  background-color: #687ccc;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column; }\n  #tasks-container .header h2 {\n    color: #fff; }\n  #tasks-container .section {\n    flex-grow: 1; }\n  #tasks-container ul {\n    display: flex;\n    flex-direction: column;\n    gap: 2px; }\n  #tasks-container li {\n    background-color: #f3f3f3;\n    position: relative;\n    right: 30px;\n    display: flex;\n    border-radius: 3px;\n    gap: 4px; }\n    #tasks-container liactive {\n      background-color: #ffffff; }\n    #tasks-container li p {\n      display: inline;\n      cursor: pointer; }\n  #tasks-container .footer div {\n    background-color: #e0e0e0;\n    display: flex;\n    position: relative;\n    bottom: 15px; }\n    #tasks-container .footer div img {\n      width: 25px; }\n  #tasks-container .task-child-done {\n    color: grey;\n    text-decoration: line-through; }\n\n#task-customization {\n  margin: 1rem 1rem; }\n  #task-customization #task-customization-header ul {\n    position: relative;\n    right: 40px; }\n  #task-customization #rmd-container {\n    display: flex;\n    flex-direction: column; }\n    #task-customization #rmd-container div {\n      display: inline;\n      margin-bottom: 2px 0; }\n      #task-customization #rmd-container div p {\n        display: inline; }\n  #task-customization #notes-container {\n    display: flex;\n    flex-direction: column; }\n  #task-customization text-area {\n    resize: none; }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/sass/style.scss"],"names":[],"mappings":"AACA;EACI,uBAAuB;EACvB,4CAAsC,EAAA;;AAI1C;EACI,aAAa;EACb,aAAc;EACd,mCAAmC,EAAA;;AAGvC;EACI,qBAAqB,EAAA;;AAMzB;EACI,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,gBAAgB,EAAA;EAJpB;IAMQ,cAAa;IACb,YAAY,EAAA;EAPpB;IAUQ,aAAa;IACb,sBAAsB;IACtB,QAAQ,EAAA;IAZhB;MAcY,kBAAkB;MAClB,WAAW;MACX,aAAa;MACb,mBAAmB,EAAA;MAjB/B;QAmBgB,yBAAyB,EAAA;EAnBzC;IAyBQ,mBAAmB;IACnB,WAAW,EAAA;EA1BnB;IA8BQ,gCAAgC,EAAA;EA9BxC;IAkCQ,aAAa;IACb,mBAAmB;IACnB,QAAQ,EAAA;IApChB;MAsCY,kBAAkB;MAClB,UAAU;MACV,QAAQ,EAAA;MAxCpB;QA0CgB,yBAAyB,EAAA;;AAQzC;EACI,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB,EAAA;EAJ1B;IAOY,WAAW,EAAA;EAPvB;IAWQ,YAAY,EAAA;EAXpB;IAcQ,aAAa;IACb,sBAAsB;IACtB,QAAQ,EAAA;EAhBhB;IAmBQ,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,QAAQ,EAAA;IAxBhB;MA0BY,yBAAyB,EAAA;IA1BrC;MA6BY,eAAe;MACf,eAAe,EAAA;EA9B3B;IAoCY,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,YAAY,EAAA;IAvCxB;MAyCgB,WAAW,EAAA;EAzC3B;IA+CQ,WAAW;IACX,6BAA6B,EAAA;;AAQrC;EACI,iBAAiB,EAAA;EADrB;IAKY,kBAAkB;IAClB,WAAW,EAAA;EANvB;IAWQ,aAAa;IACb,sBAAsB,EAAA;IAZ9B;MAcY,eAAe;MACf,oBAAoB,EAAA;MAfhC;QAiBgB,eAAe,EAAA;EAjB/B;IAsBQ,aAAa;IACb,sBAAsB,EAAA;EAvB9B;IA2BQ,YAAY,EAAA;;AAKpB;EACI,aAAa,EAAA","sourcesContent":["@import url('./_normalize.scss');\n@font-face {\n    font-family: 'NotoSans';\n    src: url('../font/NotoSans-Light.ttf');\n\n}\n// in general, the whole app is flexed\nbody {\n    height: 100vh;\n    display: flex ;\n    font-family: 'NotoSans', sans-serif;\n}\n\nul {\n    list-style-type: none;\n}\n\n\n\n\n#lists-container {\n    display: flex;\n    flex-direction: column;\n    background-color: #f3f3f3;\n    min-width: 280px;\n    .section {\n        overflow:auto;\n        flex-grow: 1;\n    }\n    ul {\n        display: flex;\n        flex-direction: column;\n        gap: 1px;\n        li {\n            position: relative;\n            right: 30px;\n            display: flex;\n            align-items: center;\n            &:hover {\n                background-color: #e0e0e0;\n            }\n        }\n\n    }\n    img {\n        padding-right: 1rem;\n        width: 15px;\n    }\n\n    #default-projects-container{\n        border-bottom: #e0e0e0 2px solid;\n    }\n\n    .footer {\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        img {\n            position: relative;\n            left: 10px;\n            top: 1px;\n            &hover {\n                background-color: #e0e0e0;\n            }\n        }\n\n    }\n\n}\n\n#tasks-container{\n    background-color: #687ccc;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;    \n    .header {\n        h2 {\n            color: #fff;\n        }\n    }\n    .section {\n        flex-grow: 1;\n    }\n    ul {\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n    }\n    li {\n        background-color: #f3f3f3;\n        position: relative;\n        right: 30px;\n        display: flex;\n        border-radius: 3px;\n        gap: 4px;\n        &active{\n            background-color: #ffffff;\n        }\n        p {\n            display: inline;\n            cursor: pointer;\n        }\n    }\n\n    .footer {\n        div {\n            background-color: #e0e0e0;\n            display: flex;\n            position: relative;\n            bottom: 15px;\n            img {\n                width: 25px;\n            }\n            \n        }\n    }\n    .task-child-done{\n        color: grey;\n        text-decoration: line-through;\n    }\n    .task-child-undone{\n        \n    }\n}\n\n\n#task-customization {\n    margin: 1rem 1rem;\n\n    #task-customization-header {\n        ul {\n            position: relative;\n            right: 40px;\n        }\n    }\n\n    #rmd-container {\n        display: flex;\n        flex-direction: column;\n        div {\n            display: inline;\n            margin-bottom: 2px 0;\n            p{\n                display: inline;\n            }\n        }\n    }\n    #notes-container {\n        display: flex;\n        flex-direction: column;\n    }\n    \n    text-area {\n        resize: none;\n    }\n}\n\n\n.hidden{\n    display: none;\n}"],"sourceRoot":""}]);
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
        this.task = "";
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
     * Listens to input in the task menu, upon entering "Enter" it checks if the v
     */
    readTaskFromDOM() {
        var _a;
        let addTaskInput = (_a = document.getElementById("add-task-container")) === null || _a === void 0 ? void 0 : _a.querySelector("input");
        addTaskInput === null || addTaskInput === void 0 ? void 0 : addTaskInput.addEventListener("keypress", (ev) => {
            if (ev.key === "Enter") {
                this.task = addTaskInput.value;
                console.log(this.task);
                if (this.task.length < 1) {
                    return;
                }
                else {
                    this.addTaskToToDoListDOM(this.task, "not-done");
                    let newTask = new todos_1.Todo(`${this.task}`);
                    this.storageManager.insertTaskObjectIntoStorage(this.task, newTask);
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
        /* let taskButton = document.createElement("button")
        taskButton.textContent="change"
        newToDoList.appendChild(taskButton)
        
        newToDoList.textContent = `${task}`*/
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
            } // 
            else if (nodeTarget.nodeName === "BUTTON") {
                let target = ev.target;
                this.populateForm(target.dataset.name);
            }
        });
    }
    pushToDoneOrUndoneContainer(target, id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.append(target);
    }
    // not done yet
    populateForm(taskname) {
        var _a;
        (_a = document.getElementById("task-customization")) === null || _a === void 0 ? void 0 : _a.classList.toggle("hidden");
        let todo = this.storageManager.getTask(taskname);
        // get the task title
        let taskTitle = document.getElementById("task-name");
        taskTitle.value = todo.title;
        let taskDesc = document.getElementById("task-description");
        taskDesc.value = todo.description;
        let subTaskList = document.getElementById("subtask-list");
        for (let key in todo.checklist) {
            if (Object.prototype.hasOwnProperty.call(todo.checklist, key)) {
                let li = document.createElement("li");
                li.textContent = key;
                subTaskList.appendChild(li);
            }
        }
        let date = document.getElementById("due-date");
        console.log(todo.dueDate);
        date.value = todo.dueDate;
        let notesElement = document.getElementById("notes");
        if (todo.notes !== undefined) {
            notesElement.value = todo.notes;
        }
        let priorityElement = document.getElementById("priority-select");
        priorityElement.value = todo.priority.toString();
    }
    populateSubtask() {
        let subtaskBtn = document.getElementById("add-subtask");
        let subtaskEl = document.getElementById("subtask");
        subtaskBtn === null || subtaskBtn === void 0 ? void 0 : subtaskBtn.addEventListener("click", () => {
            var _a;
            if (subtaskEl != undefined) {
                let subTaskList = document.createElement("li");
                subTaskList.textContent = subtaskEl.value;
                console.log(subTaskList);
                (_a = document.getElementById("subtask-list")) === null || _a === void 0 ? void 0 : _a.append(subTaskList);
                // get the task title from task customization and the get the todo
                let subtaskTitle = document.getElementById("task-name");
                this.storageManager.insertSubtask(subtaskTitle.value, subTaskList.textContent);
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNrQjtBQUNYO0FBQ25HLDRDQUE0QyxnSUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwQkFBMEIsMkZBQWlDO0FBQzNELHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsNEJBQTRCLDJEQUEyRCxVQUFVLGtCQUFrQixrQkFBa0IsMENBQTBDLFFBQVEsNEJBQTRCLHNCQUFzQixrQkFBa0IsMkJBQTJCLDhCQUE4Qix1QkFBdUIsK0JBQStCLHFCQUFxQixxQkFBcUIseUJBQXlCLG9CQUFvQiw2QkFBNkIsaUJBQWlCLDhCQUE4QiwyQkFBMkIsb0JBQW9CLHNCQUFzQiw4QkFBOEIsc0NBQXNDLHNDQUFzQywwQkFBMEIsMEJBQTBCLG9CQUFvQixrREFBa0QseUNBQXlDLDhCQUE4QixvQkFBb0IsMEJBQTBCLGlCQUFpQixvQ0FBb0MsMkJBQTJCLG1CQUFtQixtQkFBbUIsMkNBQTJDLHNDQUFzQyxzQkFBc0IsOEJBQThCLGlCQUFpQixrQkFBa0IsNkJBQTZCLGlDQUFpQyxvQkFBb0IsK0JBQStCLHFCQUFxQix5QkFBeUIsb0JBQW9CLDZCQUE2QixpQkFBaUIseUJBQXlCLGdDQUFnQyx5QkFBeUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsaUJBQWlCLGlDQUFpQyxvQ0FBb0MsNkJBQTZCLHdCQUF3QiwwQkFBMEIsa0NBQWtDLGdDQUFnQyxvQkFBb0IseUJBQXlCLHFCQUFxQix3Q0FBd0Msc0JBQXNCLHVDQUF1QyxrQkFBa0Isc0NBQXNDLHlCQUF5Qix3QkFBd0IsdURBQXVELHlCQUF5QixvQkFBb0Isd0NBQXdDLG9CQUFvQiwrQkFBK0IsOENBQThDLHdCQUF3QiwrQkFBK0Isa0RBQWtELDRCQUE0QiwwQ0FBMEMsb0JBQW9CLCtCQUErQixtQ0FBbUMscUJBQXFCLGFBQWEsb0JBQW9CLFNBQVMsc0ZBQXNGLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsZUFBZSxNQUFNLFVBQVUsWUFBWSxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxtQkFBbUIsT0FBTyxhQUFhLGdCQUFnQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsWUFBWSxnQkFBZ0IsT0FBTyxhQUFhLFdBQVcsZUFBZSxPQUFPLG9CQUFvQixNQUFNLFlBQVksV0FBVyxVQUFVLGlCQUFpQixNQUFNLGVBQWUsTUFBTSxlQUFlLE1BQU0sVUFBVSxZQUFZLGdCQUFnQixPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxXQUFXLGVBQWUsT0FBTyxhQUFhLFdBQVcsWUFBWSxnQkFBZ0IsT0FBTyxpQkFBaUIsT0FBTyxXQUFXLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLFlBQVksZ0JBQWdCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxVQUFVLGlCQUFpQixNQUFNLGlCQUFpQixPQUFPLFdBQVcsaUJBQWlCLE9BQU8saUJBQWlCLE1BQU0sb0VBQW9FLGNBQWMsOEJBQThCLDZDQUE2QyxLQUFLLGdEQUFnRCxvQkFBb0IscUJBQXFCLDBDQUEwQyxHQUFHLFFBQVEsNEJBQTRCLEdBQUcsNEJBQTRCLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHVCQUF1QixnQkFBZ0Isd0JBQXdCLHVCQUF1QixPQUFPLFVBQVUsd0JBQXdCLGlDQUFpQyxtQkFBbUIsY0FBYyxpQ0FBaUMsMEJBQTBCLDRCQUE0QixrQ0FBa0MsdUJBQXVCLDRDQUE0QyxlQUFlLFdBQVcsU0FBUyxXQUFXLDhCQUE4QixzQkFBc0IsT0FBTyxvQ0FBb0MsMkNBQTJDLE9BQU8saUJBQWlCLHdCQUF3Qiw4QkFBOEIsbUJBQW1CLGVBQWUsaUNBQWlDLHlCQUF5Qix1QkFBdUIsc0JBQXNCLDRDQUE0QyxlQUFlLFdBQVcsU0FBUyxLQUFLLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLG9CQUFvQixpQ0FBaUMsZUFBZSxjQUFjLDBCQUEwQixXQUFXLE9BQU8sZ0JBQWdCLHVCQUF1QixPQUFPLFVBQVUsd0JBQXdCLGlDQUFpQyxtQkFBbUIsT0FBTyxVQUFVLG9DQUFvQyw2QkFBNkIsc0JBQXNCLHdCQUF3Qiw2QkFBNkIsbUJBQW1CLGtCQUFrQix3Q0FBd0MsV0FBVyxhQUFhLDhCQUE4Qiw4QkFBOEIsV0FBVyxPQUFPLGlCQUFpQixlQUFlLHdDQUF3Qyw0QkFBNEIsaUNBQWlDLDJCQUEyQixtQkFBbUIsOEJBQThCLGVBQWUseUJBQXlCLE9BQU8sdUJBQXVCLHNCQUFzQix3Q0FBd0MsT0FBTyx5QkFBeUIsaUJBQWlCLEdBQUcsMkJBQTJCLHdCQUF3QixvQ0FBb0MsY0FBYyxpQ0FBaUMsMEJBQTBCLFdBQVcsT0FBTyx3QkFBd0Isd0JBQXdCLGlDQUFpQyxlQUFlLDhCQUE4QixtQ0FBbUMsZ0JBQWdCLGtDQUFrQyxlQUFlLFdBQVcsT0FBTyx3QkFBd0Isd0JBQXdCLGlDQUFpQyxPQUFPLHVCQUF1Qix1QkFBdUIsT0FBTyxHQUFHLGNBQWMsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQy91TjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSx1WUFBdVkseUJBQXlCLDZDQUE2QyxZQUFZLGdMQUFnTCxnQkFBZ0IsS0FBSyxvRkFBb0YscUJBQXFCLEtBQUssb0tBQW9LLHFCQUFxQix1QkFBdUIsS0FBSyx3T0FBd08sK0JBQStCLHdCQUF3QixnQ0FBZ0MsWUFBWSxxS0FBcUsseUNBQXlDLDZCQUE2QixZQUFZLDJNQUEyTSxvQ0FBb0MsS0FBSyx3S0FBd0ssMkJBQTJCLHlDQUF5QyxnREFBZ0QsWUFBWSx1R0FBdUcsMEJBQTBCLEtBQUssdUxBQXVMLHlDQUF5Qyw2QkFBNkIsWUFBWSxrRkFBa0YscUJBQXFCLEtBQUssb0lBQW9JLHFCQUFxQixxQkFBcUIseUJBQXlCLCtCQUErQixLQUFLLGFBQWEsc0JBQXNCLEtBQUssYUFBYSxrQkFBa0IsS0FBSyx1TUFBdU0seUJBQXlCLEtBQUssd1JBQXdSLDRCQUE0Qiw4QkFBOEIsZ0NBQWdDLHdCQUF3QixZQUFZLGdIQUFnSCwrQkFBK0IsS0FBSyxxTEFBcUwsa0NBQWtDLEtBQUssMktBQTJLLGlDQUFpQyxLQUFLLGlPQUFpTyx5QkFBeUIsaUJBQWlCLEtBQUssME5BQTBOLHFDQUFxQyxLQUFLLDBFQUEwRSxxQ0FBcUMsS0FBSywwUkFBMFIsOEJBQThCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLHlCQUF5QixrQ0FBa0MsWUFBWSw0R0FBNEcsK0JBQStCLEtBQUssMkZBQTJGLHFCQUFxQixLQUFLLHdKQUF3Siw4QkFBOEIseUJBQXlCLFlBQVksc01BQXNNLG1CQUFtQixLQUFLLHFKQUFxSixxQ0FBcUMsbUNBQW1DLFlBQVksc0lBQXNJLCtCQUErQixLQUFLLDJMQUEyTCxrQ0FBa0MsNEJBQTRCLFlBQVksd01BQXdNLHFCQUFxQixLQUFLLGlGQUFpRix5QkFBeUIsS0FBSyxnTEFBZ0wsb0JBQW9CLEtBQUssNEVBQTRFLG9CQUFvQixLQUFLLE9BQU8sdUdBQXVHLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsc1hBQXNYLHlCQUF5Qiw2Q0FBNkMsWUFBWSxnTEFBZ0wsZ0JBQWdCLEtBQUssb0ZBQW9GLHFCQUFxQixLQUFLLG9LQUFvSyxxQkFBcUIsdUJBQXVCLEtBQUssd09BQXdPLCtCQUErQix3QkFBd0IsZ0NBQWdDLFlBQVkscUtBQXFLLHlDQUF5Qyw2QkFBNkIsWUFBWSwyTUFBMk0sb0NBQW9DLEtBQUssd0tBQXdLLDJCQUEyQix5Q0FBeUMsZ0RBQWdELFlBQVksdUdBQXVHLDBCQUEwQixLQUFLLHVMQUF1TCx5Q0FBeUMsNkJBQTZCLFlBQVksa0ZBQWtGLHFCQUFxQixLQUFLLG9JQUFvSSxxQkFBcUIscUJBQXFCLHlCQUF5QiwrQkFBK0IsS0FBSyxhQUFhLHNCQUFzQixLQUFLLGFBQWEsa0JBQWtCLEtBQUssdU1BQXVNLHlCQUF5QixLQUFLLHdSQUF3Uiw0QkFBNEIsOEJBQThCLGdDQUFnQyx3QkFBd0IsWUFBWSxnSEFBZ0gsK0JBQStCLEtBQUsscUxBQXFMLGtDQUFrQyxLQUFLLDJLQUEySyxpQ0FBaUMsS0FBSyxpT0FBaU8seUJBQXlCLGlCQUFpQixLQUFLLDBOQUEwTixxQ0FBcUMsS0FBSywwRUFBMEUscUNBQXFDLEtBQUssMFJBQTBSLDhCQUE4Qiw2QkFBNkIsNkJBQTZCLDhCQUE4Qix5QkFBeUIsa0NBQWtDLFlBQVksNEdBQTRHLCtCQUErQixLQUFLLDJGQUEyRixxQkFBcUIsS0FBSyx3SkFBd0osOEJBQThCLHlCQUF5QixZQUFZLHNNQUFzTSxtQkFBbUIsS0FBSyxxSkFBcUoscUNBQXFDLG1DQUFtQyxZQUFZLHNJQUFzSSwrQkFBK0IsS0FBSywyTEFBMkwsa0NBQWtDLDRCQUE0QixZQUFZLHdNQUF3TSxxQkFBcUIsS0FBSyxpRkFBaUYseUJBQXlCLEtBQUssZ0xBQWdMLG9CQUFvQixLQUFLLDRFQUE0RSxvQkFBb0IsS0FBSyxtQkFBbUI7QUFDM21nQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFrSjtBQUNsSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSTRGO0FBQ3BILE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLHFMQUE2RDtBQUM3RCw2TUFBdUU7QUFDdkUsbU5BQXlFO0FBQ3pFLHdMQUFpRTtBQUNqRSxxTEFBK0Q7QUFDL0QsaU1BQW1FO0FBRW5FLHFFQUE4QjtBQUM5Qjs7OztHQUlHO0FBQ0gsTUFBYSxVQUFVO0lBSW5CLFlBQVksY0FBK0I7UUFIbkMsU0FBSSxHQUFHLEVBQUU7UUFJYixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7SUFDeEMsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFxQjtRQUN4RSxZQUFZLENBQUMsR0FBRyxHQUFHLDZDQUFLO1FBQ3hCLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFxQjtRQUM1RSxjQUFjLENBQUMsR0FBRyxHQUFHLHFEQUFPO1FBQzVCLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFxQjtRQUMzRSxjQUFjLENBQUMsR0FBRyxHQUFHLHVEQUFPO1FBQzVCLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFxQjtRQUM3RSxjQUFjLENBQUMsR0FBRyxHQUFHLDhDQUFRO1FBQzdCLElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCO1FBQy9FLGlCQUFpQixDQUFDLEdBQUcsR0FBRyw2Q0FBTztRQUMvQixJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBcUI7UUFDNUUsY0FBYyxDQUFDLEdBQUcsR0FBRyxpREFBTztJQUNoQyxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxlQUFlOztRQUNYLElBQUksWUFBWSxHQUFHLGNBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsMENBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN4RixZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBaUIsRUFBRSxFQUFFO1lBQzdELElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBYSxDQUFDLEtBQUs7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLE9BQU07aUJBQ1Q7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO29CQUNoRCxJQUFJLE9BQU8sR0FBRyxJQUFJLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztvQkFDbkUsWUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFO2lCQUMzQjthQUNKO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUdELG9CQUFvQixDQUFDLElBQVksRUFBRSxjQUFzQjtRQUNyRCxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFDaEUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDOUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUU7UUFDcEMsV0FBVyxDQUFDLFNBQVM7WUFDckIsc0JBQXNCLElBQUksZ0JBQWdCLElBQUk7U0FDN0M7UUFDRCxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUU5Qzs7Ozs2Q0FJcUM7UUFDckMsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLEVBQUU7UUFDMUQsSUFBSSxLQUFLLEtBQUssU0FBUztZQUFFLE9BQU07YUFDMUI7WUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO29CQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7aUJBQ3BEO3FCQUFNO29CQUNILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQztpQkFDL0M7WUFDTCxDQUFDLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDO1FBQ3hFLGtCQUFrQixhQUFsQixrQkFBa0IsdUJBQWxCLGtCQUFrQixDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQWEsRUFBRSxFQUFFO1lBQzVELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFjO1lBQ2xDLHNGQUFzRjtZQUN0RixJQUFJLFVBQVUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFDO2dCQUM3QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBcUI7Z0JBQ3JDLElBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsRUFBQztvQkFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7b0JBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO29CQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUssRUFBRSxJQUFJLENBQUM7b0JBQzFELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO2lCQUVuRDtxQkFBSyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUM7b0JBQ25ELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO29CQUMxQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFLLEVBQUUsS0FBSyxDQUFDO29CQUMzRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztpQkFDdkQ7YUFFSixJQUFHO2lCQUNDLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUM7Z0JBQ3RDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFxQjtnQkFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUssQ0FBQzthQUMxQztRQUVMLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCwyQkFBMkIsQ0FBQyxNQUFtQixFQUFFLEVBQVU7O1FBQ3ZELGNBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLDBDQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQztJQUNELGVBQWU7SUFDZixZQUFZLENBQUMsUUFBZTs7UUFDeEIsY0FBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQywwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN6RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDaEQscUJBQXFCO1FBQ3JCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFxQjtRQUN4RSxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQzVCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQXFCO1FBQzlFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFHakMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXFCO1FBQzdFLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUMzRCxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDckMsRUFBRSxDQUFDLFdBQVcsR0FBRyxHQUFHO2dCQUNwQixXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUM5QjtTQUNKO1FBRUQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ3pCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUF3QjtRQUMxRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFDO1lBQ3pCLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7U0FDbEM7UUFDRCxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFzQjtRQUNyRixlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO0lBQ3BELENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDdkQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXFCO1FBQ3RFLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFOztZQUN2QyxJQUFJLFNBQVMsSUFBRyxTQUFTLEVBQUU7Z0JBQ3ZCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUM5QyxXQUFXLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDeEIsY0FBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsMENBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDNUQsa0VBQWtFO2dCQUNsRSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBcUI7Z0JBQzNFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFNLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQzthQUVsRjtRQUNMLENBQUMsQ0FBQztJQUVOLENBQUM7Q0FHSjtBQTdKRCxnQ0E2SkM7Ozs7Ozs7Ozs7Ozs7QUMxS0QscUVBQThCO0FBRTlCLHNFQUEwQjtBQUMxQixvRkFBeUM7QUFDekMsMkVBQTJDO0FBRzNDLElBQUksT0FBTyxHQUFHLElBQUkseUJBQWUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3RELElBQUksUUFBUSxHQUFHLElBQUksWUFBSSxDQUFDLGdCQUFnQixFQUNwQyx1Q0FBdUMsRUFBRSxLQUFLLEVBQzlDLG1CQUFtQixFQUFFLENBQUMsRUFDdEIsRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFDLEVBQ2xFLHdCQUF3QixDQUFDO0FBQzdCLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUM7QUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckIsSUFBSSxHQUFHLEdBQUcsSUFBSSx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTtBQUN2QixHQUFHLENBQUMsc0JBQXNCLEVBQUU7QUFDNUIsR0FBRyxDQUFDLGVBQWUsRUFBRTtBQUNyQixHQUFHLENBQUMsV0FBVyxFQUFFO0FBQ2pCLEdBQUcsQ0FBQyxlQUFlLEVBQUU7QUFDckIscUZBQXFGOzs7Ozs7Ozs7Ozs7OztBQ2xCckY7Ozs7O0dBS0c7QUFDSCxNQUFhLGVBQWU7SUFFeEIsWUFBWSxZQUFxQjtRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVk7SUFDcEMsQ0FBQztJQUVNLDJCQUEyQixDQUFDLFFBQWUsRUFBRSxJQUFVO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdELENBQUM7SUFFTSx3QkFBd0I7UUFDM0IsSUFBSSxTQUFTLEdBQVcsRUFBRTtRQUMxQixJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFJLENBQUM7WUFBRSxPQUFNLENBQUMsc0NBQXNDO1FBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQztRQUNGLE9BQU8sU0FBUztJQUNwQixDQUFDO0lBRU0sVUFBVSxDQUFDLElBQVcsRUFBRSxJQUFhO1FBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUN4RCxDQUFDO0lBQ00sYUFBYSxDQUFDLFNBQWlCLEVBQUUsT0FBZTtRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBRSxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQXhDRCwwQ0F3Q0M7Ozs7Ozs7Ozs7Ozs7O0FDL0NELE1BQWEsSUFBSTtJQVViLFlBQVksS0FBYSxFQUFFLGNBQW9CLEVBQUUsRUFBRSxPQUFlLEtBQUssRUFBRSxVQUFpQixFQUFFLEVBQUUsV0FBbUIsQ0FBQyxFQUFHLFlBQWlCLEVBQUUsRUFBRSxLQUF3QjtRQUM5SixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztJQUM5QixDQUFDO0lBQ00sSUFBSTtRQUNQLE9BQU87WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbkIsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTztZQUN4QixVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1NBQ2xCO0lBQ0wsQ0FBQztDQUNKO0FBN0JELG9CQTZCQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc2Fzcy9fbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2Rvcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fbm9ybWFsaXplLnNjc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Ob3RvU2Fucy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTm90b1NhbnMnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiAnTm90b1NhbnMnLCBzYW5zLXNlcmlmOyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuXFxuI2xpc3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XFxuICBtaW4td2lkdGg6IDI4MHB4OyB9XFxuICAjbGlzdHMtY29udGFpbmVyIC5zZWN0aW9uIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtZ3JvdzogMTsgfVxcbiAgI2xpc3RzLWNvbnRhaW5lciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXB4OyB9XFxuICAgICNsaXN0cy1jb250YWluZXIgdWwgbGkge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICByaWdodDogMzBweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAjbGlzdHMtY29udGFpbmVyIHVsIGxpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gICNsaXN0cy1jb250YWluZXIgaW1nIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDE1cHg7IH1cXG4gICNsaXN0cy1jb250YWluZXIgI2RlZmF1bHQtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogI2UwZTBlMCAycHggc29saWQ7IH1cXG4gICNsaXN0cy1jb250YWluZXIgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4OyB9XFxuICAgICNsaXN0cy1jb250YWluZXIgLmZvb3RlciBpbWcge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIHRvcDogMXB4OyB9XFxuICAgICAgI2xpc3RzLWNvbnRhaW5lciAuZm9vdGVyIGltZ2hvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4jdGFza3MtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODdjY2M7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3Rhc2tzLWNvbnRhaW5lciAuaGVhZGVyIGgyIHtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gICN0YXNrcy1jb250YWluZXIgLnNlY3Rpb24ge1xcbiAgICBmbGV4LWdyb3c6IDE7IH1cXG4gICN0YXNrcy1jb250YWluZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDsgfVxcbiAgI3Rhc2tzLWNvbnRhaW5lciBsaSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZ2FwOiA0cHg7IH1cXG4gICAgI3Rhc2tzLWNvbnRhaW5lciBsaWFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxcbiAgICAjdGFza3MtY29udGFpbmVyIGxpIHAge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICN0YXNrcy1jb250YWluZXIgLmZvb3RlciBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTVweDsgfVxcbiAgICAjdGFza3MtY29udGFpbmVyIC5mb290ZXIgZGl2IGltZyB7XFxuICAgICAgd2lkdGg6IDI1cHg7IH1cXG4gICN0YXNrcy1jb250YWluZXIgLnRhc2stY2hpbGQtZG9uZSB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgfVxcblxcbiN0YXNrLWN1c3RvbWl6YXRpb24ge1xcbiAgbWFyZ2luOiAxcmVtIDFyZW07IH1cXG4gICN0YXNrLWN1c3RvbWl6YXRpb24gI3Rhc2stY3VzdG9taXphdGlvbi1oZWFkZXIgdWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiA0MHB4OyB9XFxuICAjdGFzay1jdXN0b21pemF0aW9uICNybWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAjdGFzay1jdXN0b21pemF0aW9uICNybWQtY29udGFpbmVyIGRpdiB7XFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweCAwOyB9XFxuICAgICAgI3Rhc2stY3VzdG9taXphdGlvbiAjcm1kLWNvbnRhaW5lciBkaXYgcCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7IH1cXG4gICN0YXNrLWN1c3RvbWl6YXRpb24gI25vdGVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICN0YXNrLWN1c3RvbWl6YXRpb24gdGV4dC1hcmVhIHtcXG4gICAgcmVzaXplOiBub25lOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLHVCQUF1QjtFQUN2Qiw0Q0FBc0MsRUFBQTs7QUFJMUM7RUFDSSxhQUFhO0VBQ2IsYUFBYztFQUNkLG1DQUFtQyxFQUFBOztBQUd2QztFQUNJLHFCQUFxQixFQUFBOztBQU16QjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBO0VBSnBCO0lBTVEsY0FBYTtJQUNiLFlBQVksRUFBQTtFQVBwQjtJQVVRLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUSxFQUFBO0lBWmhCO01BY1ksa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxhQUFhO01BQ2IsbUJBQW1CLEVBQUE7TUFqQi9CO1FBbUJnQix5QkFBeUIsRUFBQTtFQW5CekM7SUF5QlEsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtFQTFCbkI7SUE4QlEsZ0NBQWdDLEVBQUE7RUE5QnhDO0lBa0NRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUSxFQUFBO0lBcENoQjtNQXNDWSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFFBQVEsRUFBQTtNQXhDcEI7UUEwQ2dCLHlCQUF5QixFQUFBOztBQVF6QztFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBSjFCO0lBT1ksV0FBVyxFQUFBO0VBUHZCO0lBV1EsWUFBWSxFQUFBO0VBWHBCO0lBY1EsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRLEVBQUE7RUFoQmhCO0lBbUJRLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUSxFQUFBO0lBeEJoQjtNQTBCWSx5QkFBeUIsRUFBQTtJQTFCckM7TUE2QlksZUFBZTtNQUNmLGVBQWUsRUFBQTtFQTlCM0I7SUFvQ1kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0lBdkN4QjtNQXlDZ0IsV0FBVyxFQUFBO0VBekMzQjtJQStDUSxXQUFXO0lBQ1gsNkJBQTZCLEVBQUE7O0FBUXJDO0VBQ0ksaUJBQWlCLEVBQUE7RUFEckI7SUFLWSxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0VBTnZCO0lBV1EsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0lBWjlCO01BY1ksZUFBZTtNQUNmLG9CQUFvQixFQUFBO01BZmhDO1FBaUJnQixlQUFlLEVBQUE7RUFqQi9CO0lBc0JRLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQXZCOUI7SUEyQlEsWUFBWSxFQUFBOztBQUtwQjtFQUNJLGFBQWEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9fbm9ybWFsaXplLnNjc3MnKTtcXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvU2Fucyc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250L05vdG9TYW5zLUxpZ2h0LnR0ZicpO1xcblxcbn1cXG4vLyBpbiBnZW5lcmFsLCB0aGUgd2hvbGUgYXBwIGlzIGZsZXhlZFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4IDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5cXG5cXG5cXG4jbGlzdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG4gICAgbWluLXdpZHRoOiAyODBweDtcXG4gICAgLnNlY3Rpb24ge1xcbiAgICAgICAgb3ZlcmZsb3c6YXV0bztcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgfVxcbiAgICB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgbGkge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICByaWdodDogMzBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICB9XFxuICAgIGltZyB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgI2RlZmF1bHQtcHJvamVjdHMtY29udGFpbmVye1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogI2UwZTBlMCAycHggc29saWQ7XFxuICAgIH1cXG5cXG4gICAgLmZvb3RlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgICAgICB0b3A6IDFweDtcXG4gICAgICAgICAgICAmaG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgfVxcblxcbn1cXG5cXG4jdGFza3MtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3Y2NjO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxcbiAgICAuaGVhZGVyIHtcXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuc2VjdGlvbiB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgIH1cXG4gICAgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDJweDtcXG4gICAgfVxcbiAgICBsaSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgcmlnaHQ6IDMwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgZ2FwOiA0cHg7XFxuICAgICAgICAmYWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgICAgICB9XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5mb290ZXIge1xcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGJvdHRvbTogMTVweDtcXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnRhc2stY2hpbGQtZG9uZXtcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIH1cXG4gICAgLnRhc2stY2hpbGQtdW5kb25le1xcbiAgICAgICAgXFxuICAgIH1cXG59XFxuXFxuXFxuI3Rhc2stY3VzdG9taXphdGlvbiB7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xcblxcbiAgICAjdGFzay1jdXN0b21pemF0aW9uLWhlYWRlciB7XFxuICAgICAgICB1bCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICNybWQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4IDA7XFxuICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAjbm90ZXMtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIFxcbiAgICB0ZXh0LWFyZWEge1xcbiAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICB9XFxufVxcblxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8vc3JjL3Njc3MvX25vcm1hbGl6ZS5zY3Nzc1xcblxcbi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbiBodG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuICBcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxuICB9XFxuICBcXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuICBcXG4gIGhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBwcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBhYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBiLFxcbiAgc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGNvZGUsXFxuICBrYmQsXFxuICBzYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdWIsXFxuICBzdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICBzdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxuICB9XFxuICBcXG4gIHN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbiAgfVxcbiAgXFxuICAvKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBpbnB1dCxcXG4gIG9wdGdyb3VwLFxcbiAgc2VsZWN0LFxcbiAgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0IHsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBzZWxlY3QgeyAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcbiAgXFxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG4gIFxcbiAgcHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4gIFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBkZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG4gIH1cXG4gIFxcbiAgLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9fbm9ybWFsaXplLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSSxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLDhCQUE4QixFQUFFLE1BQU07RUFDeEM7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7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Ly9zcmMvc2Nzcy9fbm9ybWFsaXplLnNjc3NzXFxuXFxuLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG4gIFxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG4gIH1cXG4gIFxcbiAgLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG4gIFxcbiAgaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGIsXFxuICBzdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgY29kZSxcXG4gIGtiZCxcXG4gIHNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1YixcXG4gIHN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIHN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG4gIH1cXG4gIFxcbiAgc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxuICB9XFxuICBcXG4gIC8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBpbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0LFxcbiAgb3B0Z3JvdXAsXFxuICBzZWxlY3QsXFxuICB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQgeyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIHNlbGVjdCB7IC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBmaWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgbGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcbiAgXFxuICBwcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbiAgW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgfVxcbiAgXFxuICAvKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE15RGF5IGZyb20gJy4vaW1nL2hvbWVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJ1xuaW1wb3J0IFNvb25EdWUgZnJvbSAnLi9pbWcvY3Jpc2lzX2FsZXJ0X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbmltcG9ydCBQbGFubmVkIGZyb20gJy4vaW1nL2V2ZW50X3VwY29taW5nX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbmltcG9ydCBBbGxUYXNrcyBmcm9tICcuL2ltZy9ncmFkZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL2ltZy9saXN0X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbmltcG9ydCBOZXdUYXNrIGZyb20gJy4vaW1nL3ByaW9yaXR5X0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2ZydcbmltcG9ydCB7IFN0b3JhZ2VNYW5hZ2luZyB9IGZyb20gJy4vbWFuYWdlcidcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG9zJ1xuLyoqXG4gKiBET01NYW5hZ2VyIG1hbmFnZXMgdGhlIEkvTyBhbmQgaGFuZGxpbmcgb2YgdGhlIERPTSB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aFxuICogaXQgdGFrZXMgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtcyBhbmQgaW5wdXQgYW5kIHNhdmVzIHRoZW0gZm9yIHRoZVxuICogdXNlIGxhdGVyIGZvciB0aGUgVGFza01hbmFnZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBET01NYW5hZ2VyIHtcbiAgICBwcml2YXRlIHRhc2sgPSBcIlwiXG4gICAgc3RvcmFnZU1hbmFnZXI6IFN0b3JhZ2VNYW5hZ2luZ1xuXG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZU1hbmFnZXI6IFN0b3JhZ2VNYW5hZ2luZykge1xuICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXJcbiAgICB9XG5cbiAgICBob29rU1ZHVG9FbGVtZW50cygpIHtcbiAgICAgICAgbGV0IG15RGF5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktZGF5XCIpIGFzIEhUTUxJbWFnZUVsZW1lbnRcbiAgICAgICAgbXlEYXlFbGVtZW50LnNyYyA9IE15RGF5XG4gICAgICAgIGxldCBzb29uRHVlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29vbi1kdWVcIikgYXMgSFRNTEltYWdlRWxlbWVudFxuICAgICAgICBzb29uRHVlRWxlbWVudC5zcmMgPSBTb29uRHVlXG4gICAgICAgIGxldCBwbGFubmVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbm5lZFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgICAgIHBsYW5uZWRFbGVtZW50LnNyYyA9IFBsYW5uZWRcbiAgICAgICAgbGV0IGFsbFRhc2tFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtdGFza3NcIikgYXMgSFRNTEltYWdlRWxlbWVudFxuICAgICAgICBhbGxUYXNrRWxlbWVudC5zcmMgPSBBbGxUYXNrc1xuICAgICAgICBsZXQgbmV3UHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3QnKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LnNyYyA9IFByb2plY3RcbiAgICAgICAgbGV0IG5ld1Rhc2tFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgICAgIG5ld1Rhc2tFbGVtZW50LnNyYyA9IE5ld1Rhc2tcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVucyB0byBpbnB1dCBpbiB0aGUgdGFzayBtZW51LCB1cG9uIGVudGVyaW5nIFwiRW50ZXJcIiBpdCBjaGVja3MgaWYgdGhlIHZcbiAgICAgKi9cbiAgICByZWFkVGFza0Zyb21ET00oKSB7XG4gICAgICAgIGxldCBhZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWNvbnRhaW5lclwiKT8ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgICAgIGFkZFRhc2tJbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrID0gYWRkVGFza0lucHV0IS52YWx1ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFzaylcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YXNrLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYXNrVG9Ub0RvTGlzdERPTSh0aGlzLnRhc2ssIFwibm90LWRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVG9kbyhgJHt0aGlzLnRhc2t9YClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5pbnNlcnRUYXNrT2JqZWN0SW50b1N0b3JhZ2UodGhpcy50YXNrLCBuZXdUYXNrKVxuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrSW5wdXQhLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGFkZFRhc2tUb1RvRG9MaXN0RE9NKHRhc2s6IHN0cmluZywgd2hpY2hDb250YWluZXI6IHN0cmluZykge1xuICAgICAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3doaWNoQ29udGFpbmVyfWApXG4gICAgICAgIGxldCBuZXdUb0RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBuZXdUb0RvTGlzdC5kYXRhc2V0Lm5hbWUgPSBgJHt0YXNrfWBcbiAgICAgICAgbmV3VG9Eb0xpc3QuaW5uZXJIVE1MID0gXG4gICAgICAgIGA8YnV0dG9uIGRhdGEtbmFtZT1cIiR7dGFza31cIiA+KzwvYnV0dG9uPiR7dGFza31cbiAgICAgICAgYFxuICAgICAgICBuZXdUb0RvTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGlsZC11bmRvbmVcIilcbiAgICAgICAgXG4gICAgICAgIC8qIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICB0YXNrQnV0dG9uLnRleHRDb250ZW50PVwiY2hhbmdlXCJcbiAgICAgICAgbmV3VG9Eb0xpc3QuYXBwZW5kQ2hpbGQodGFza0J1dHRvbilcbiAgICAgICAgXG4gICAgICAgIG5ld1RvRG9MaXN0LnRleHRDb250ZW50ID0gYCR7dGFza31gKi8gXG4gICAgICAgIHRhc2tDb250YWluZXI/Lmluc2VydEJlZm9yZShuZXdUb0RvTGlzdCwgdGFza0NvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIH1cblxuICAgIHJlcG9wdWxhdGVUYXNrc0xpc3RET00oKXtcbiAgICAgICAgbGV0IHRvZG9zID0gdGhpcy5zdG9yYWdlTWFuYWdlci5wb3B1bGF0ZVRhc2tzRnJvbVN0b3JhZ2UoKVxuICAgICAgICBpZiAodG9kb3MgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9kby5kb25lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRhc2tUb1RvRG9MaXN0RE9NKHRvZG8udGl0bGUsIFwibm90LWRvbmVcIikgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRhc2tUb1RvRG9MaXN0RE9NKHRvZG8udGl0bGUsXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3RDb250ZXh0KCl7XG4gICAgICAgIGxldCB0YXNrQ2hpbGRyZW5QYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWxpc3QtY29udGFpbmVyXCIpXG4gICAgICAgIHRhc2tDaGlsZHJlblBhcmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldjpNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZVRhcmdldCA9IGV2LnRhcmdldCBhcyBOb2RlXG4gICAgICAgICAgICAvL2lmIHRoZSB0YXJnZXQgaW4gdGhpcyBjb250YWluZXIgY2xpY2tlZCBpcyBhIGxpc3QsIHdlIGNhbGwgaXQgZWl0aGVyIGRvbmUsIG9yIHVuZG9uZVxuICAgICAgICAgICAgaWYgKG5vZGVUYXJnZXQubm9kZU5hbWUgPT09IFwiTElcIil7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWNoaWxkLXVuZG9uZVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1jaGlsZC11bmRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoaWxkLWRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5jaGFuZ2VEb25lKHRhcmdldC5kYXRhc2V0Lm5hbWUhLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb0RvbmVPclVuZG9uZUNvbnRhaW5lcih0YXJnZXQsIFwiZG9uZVwiKVxuXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWNoaWxkLWRvbmVcIikpe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stY2hpbGQtZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcInRhc2stY2hpbGQtdW5kb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuY2hhbmdlRG9uZSh0YXJnZXQuZGF0YXNldC5uYW1lISwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvRG9uZU9yVW5kb25lQ29udGFpbmVyKHRhcmdldCwgXCJub3QtZG9uZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfS8vIFxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZVRhcmdldC5ub2RlTmFtZSA9PT0gXCJCVVRUT05cIil7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGb3JtKHRhcmdldC5kYXRhc2V0Lm5hbWUhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVzaFRvRG9uZU9yVW5kb25lQ29udGFpbmVyKHRhcmdldDogSFRNTEVsZW1lbnQsIGlkOiBzdHJpbmcpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpPy5hcHBlbmQodGFyZ2V0KVxuICAgIH1cbiAgICAvLyBub3QgZG9uZSB5ZXRcbiAgICBwb3B1bGF0ZUZvcm0odGFza25hbWU6c3RyaW5nKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWN1c3RvbWl6YXRpb25cIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcbiAgICAgICAgbGV0IHRvZG8gPSB0aGlzLnN0b3JhZ2VNYW5hZ2VyLmdldFRhc2sodGFza25hbWUpXG4gICAgICAgIC8vIGdldCB0aGUgdGFzayB0aXRsZVxuICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICB0YXNrVGl0bGUudmFsdWUgPSB0b2RvLnRpdGxlXG4gICAgICAgIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgIHRhc2tEZXNjLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvblxuXG5cbiAgICAgICAgbGV0IHN1YlRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJ0YXNrLWxpc3RcIikgYXMgSFRNTFVMaXN0RWxlbWVudFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdG9kby5jaGVja2xpc3QpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodG9kby5jaGVja2xpc3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IGtleVxuICAgICAgICAgICAgICAgIHN1YlRhc2tMaXN0LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgY29uc29sZS5sb2codG9kby5kdWVEYXRlKVxuICAgICAgICBkYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlXG4gICAgICAgIGxldCBub3Rlc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnRcbiAgICAgICAgaWYgKHRvZG8ubm90ZXMgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBub3Rlc0VsZW1lbnQudmFsdWUgPSB0b2RvLm5vdGVzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByaW9yaXR5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktc2VsZWN0XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gICAgICAgIHByaW9yaXR5RWxlbWVudC52YWx1ZSA9IHRvZG8ucHJpb3JpdHkudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHBvcHVsYXRlU3VidGFzaygpe1xuICAgICAgICBsZXQgc3VidGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXN1YnRhc2tcIilcbiAgICAgICAgbGV0IHN1YnRhc2tFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VidGFza1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgIHN1YnRhc2tCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIGlmIChzdWJ0YXNrRWwgIT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3ViVGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgICAgICBzdWJUYXNrTGlzdC50ZXh0Q29udGVudCA9IHN1YnRhc2tFbC52YWx1ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1YlRhc2tMaXN0KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VidGFzay1saXN0XCIpPy5hcHBlbmQoc3ViVGFza0xpc3QpXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSB0YXNrIHRpdGxlIGZyb20gdGFzayBjdXN0b21pemF0aW9uIGFuZCB0aGUgZ2V0IHRoZSB0b2RvXG4gICAgICAgICAgICAgICAgbGV0IHN1YnRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLmluc2VydFN1YnRhc2soc3VidGFza1RpdGxlLnZhbHVlISwgc3ViVGFza0xpc3QudGV4dENvbnRlbnQpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb3NcIlxuaW1wb3J0IHsgUHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdHNcIlxuaW1wb3J0ICcuL3Nhc3Mvc3R5bGUuc2NzcydcbmltcG9ydCB7IERPTU1hbmFnZXIgfSBmcm9tIFwiLi9kb21NYW5hZ2VyXCJcbmltcG9ydCB7IFN0b3JhZ2VNYW5hZ2luZyB9IGZyb20gXCIuL21hbmFnZXJcIlxuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0fSBmcm9tICdkYXRlLWZucydcblxubGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZU1hbmFnaW5nKHdpbmRvdy5sb2NhbFN0b3JhZ2UpXG5sZXQgZnVsbFRhc2sgPSBuZXcgVG9kbyhcIlRoaXMgaXMgYSB0ZXN0XCIsIFxuICAgIFwiV2UgcmVhbGx5IGp1c3Qgd2FudCB0byB0ZXN0IHRoaXMgdGFza1wiLCBmYWxzZSxcbiAgICBcIjI0dGggamFudWFyeSAyMDIzXCIsIDMgLFxuICAgIHtcImdldCBtaWxrXCI6IGZhbHNlLFwiZ28gam9nZ2luZ1wiOiBmYWxzZSwgXCJ0cnkgdG8gZ2V0IGEgam9iXCI6IGZhbHNlfSwgXG4gICAgXCJJIHRvb2sgYSBtZWFuIGFzcyBzaGl0XCIpXG5zdG9yYWdlLmluc2VydFRhc2tPYmplY3RJbnRvU3RvcmFnZShcIlRoaXMgaXMgYSB0ZXN0XCIsIGZ1bGxUYXNrKVxuY29uc29sZS5sb2coZnVsbFRhc2spXG5sZXQgZG9tID0gbmV3IERPTU1hbmFnZXIoc3RvcmFnZSk7XG5kb20uaG9va1NWR1RvRWxlbWVudHMoKVxuZG9tLnJlcG9wdWxhdGVUYXNrc0xpc3RET00oKVxuZG9tLnJlYWRUYXNrRnJvbURPTSgpXG5kb20ubGlzdENvbnRleHQoKVxuZG9tLnBvcHVsYXRlU3VidGFzaygpXG4vLyB0aGlzIHdhcyBpbnN0YW50aWF0ZWQgYW5kIHNpbmNlIHRoZSB0YXNrIHZhcmlhYmxlIHdhcyB6ZXJvLCBpdCBkaWRuJ3Qgd29yayBzbyB3ZWxsXG4iLCJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2Rvc1wiO1xuXG4vKipcbiAqIFRoZXJlIGlzIFN0b3JhZ2VNYW5hZ2VyLCBidXQgdGhhdCBuYW1lIGlzIGFscmVhZHkgdGFrZW4gYnkgdGhlIGxpYnJhcmllcy5cbiAqIEl0J3Mgam9iIGlzIHRvIGxvb2sgZm9yIHRhc2tzIGluIHRoZSBiYWNrZ3JvdW5kIGFuZCBwYXNzIGl0IHRvIHRoZSBkb21NYW5hZ2VyXG4gKiBpbiBvcmRlciB0byBwb3B1bGF0ZSB0aGUgZnJvbnRlbmRcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgU3RvcmFnZU1hbmFnaW5nIHtcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTogU3RvcmFnZTtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbHN0b3JhZ2U6IFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2VcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5zZXJ0VGFza09iamVjdEludG9TdG9yYWdlKHRhc2tuYW1lOnN0cmluZyAsdGFzazogVG9kbykge1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2tuYW1lLCBKU09OLnN0cmluZ2lmeSh0YXNrKSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIHBvcHVsYXRlVGFza3NGcm9tU3RvcmFnZSgpOiBUb2RvW10gfHZvaWQge1xuICAgICAgICBsZXQgdGFza0FycmF5OiBUb2RvW10gPSBbXVxuICAgICAgICBpZih0aGlzLmxvY2FsU3RvcmFnZS5sZW5ndGg9PT0gMCkgcmV0dXJuIC8vaWYgdGhlIGxvY2Fsc3RvcmFnZSBpcyBlbXB0eSwgcmV0dXJuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMubG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXlzKSA9PiB7XG4gICAgICAgICAgICB0YXNrQXJyYXkucHVzaChKU09OLnBhcnNlKHRoaXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5cykhKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRhc2tBcnJheVxuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VEb25lKHRhc2s6c3RyaW5nLCBib29sOiBib29sZWFuKSB7XG4gICAgICAgIGxldCB0b2RvOiBUb2RvID0gSlNPTi5wYXJzZSh0aGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spISlcbiAgICAgICAgY29uc29sZS5sb2codG9kby5kb25lKVxuICAgICAgICB0b2RvLmRvbmUgPSBib29sXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGFzaylcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YXNrLCBKU09OLnN0cmluZ2lmeSh0b2RvKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGFzayh0aXRsZTogc3RyaW5nKTpUb2Rve1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRpdGxlKSEpXG4gICAgfVxuICAgIHB1YmxpYyBpbnNlcnRTdWJ0YXNrKHRhc2tUaXRsZTogc3RyaW5nLCBzdWJUYXNrOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2codGFza1RpdGxlKVxuICAgICAgICBsZXQgdG9kbzogVG9kbyA9IEpTT04ucGFyc2UodGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrVGl0bGUpISlcbiAgICAgICAgY29uc29sZS5sb2codG9kbylcbiAgICAgICAgdG9kby5jaGVja2xpc3Rbc3ViVGFza10gPSBmYWxzZVxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRhc2tUaXRsZSlcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YXNrVGl0bGUsIEpTT04uc3RyaW5naWZ5KHRvZG8pKVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmNoZWNrbGlzdClcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBjbGFzcyBUb2RvIHtcbiAgICAgdGl0bGVcbiAgICAgZGVzY3JpcHRpb25cbiAgICAgZHVlRGF0ZVxuICAgICBwcmlvcml0eVxuICAgICBub3Rlc1xuICAgICBkb25lO1xuICAgICBjaGVja2xpc3RcblxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmc9XCJcIiwgZG9uZTpib29sZWFuID0gZmFsc2UsIGR1ZURhdGU6IHN0cmluZyA9XCJcIiwgcHJpb3JpdHk6IG51bWJlciA9IDAsICBjaGVja2xpc3Q6IGFueSA9IHt9LCBub3Rlcz86IHN0cmluZ3x1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzXG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3RcbiAgICB9XG4gICAgcHVibGljIGluZm8oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBcImR1ZSBkYXRlXCI6IHRoaXMuZHVlRGF0ZSxcbiAgICAgICAgICAgIFwicHJpb3JpdHlcIjogdGhpcy5wcmlvcml0eSxcbiAgICAgICAgICAgIFwibm90ZXNcIjogdGhpcy5ub3RlcyxcbiAgICAgICAgICAgIFwiY2hlY2tsaXN0XCI6IHt9XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9