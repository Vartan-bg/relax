"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateinsein_relax"]("main",{

/***/ "./src/modules/consultation.js":
/*!*************************************!*\
  !*** ./src/modules/consultation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar consultation = function consultation() {\n  var body = document.querySelector('body'),\n      consultButton = body.querySelector('button'),\n      popupConsult = document.querySelector('.popup-consultation'); //открытие окна консультации\n\n  body.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.textContent === 'Проконсультироваться') {\n      popupConsult.style.visibility = 'visible';\n    }\n  }); //закрытие окна консультации\n\n  popupConsult.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.close-consultation')) {\n      popupConsult.style.visibility = 'hidden';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consultation);\n\n//# sourceURL=webpack://insein-relax/./src/modules/consultation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("636cbeb484f9560b5ed3")
/******/ })();
/******/ 
/******/ }
);