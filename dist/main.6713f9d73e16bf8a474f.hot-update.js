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

/***/ "./src/modules/repairTypes.js":
/*!************************************!*\
  !*** ./src/modules/repairTypes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\nvar repairTypes = function repairTypes() {\n  var wrapper = document.querySelector('.repair-types'),\n      smallSlider = document.querySelector('.repair-types-slider'),\n      leftButtons = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(wrapper.querySelectorAll('.repair-types-nav__item')),\n      sliderCountCurrent = document.querySelector('.slider-counter-content__current'),\n      sliderCountTotal = document.querySelector('.slider-counter-content__total'),\n      navWrapper = wrapper.querySelector('.nav-list-repair');\n\n  var count = 1;\n  wrapper.addEventListener('click', function (event) {\n    var target = event.target;\n\n    var deleteTextNodes = function deleteTextNodes(elem) {\n      elem.childNodes.forEach(function (item) {\n        if (item.nodeName === '#text') {\n          item.remove();\n        }\n      });\n\n      if (elem === smallSlider) {\n        elem.childNodes[0].childNodes.forEach(function (item) {\n          if (item.nodeName === '#text') {\n            item.remove();\n          }\n        });\n      }\n    };\n\n    deleteTextNodes(smallSlider);\n    sliderCountTotal.textContent = smallSlider.firstChild.childNodes.length;\n\n    if (target.classList.contains('repair-types-nav__item') || target.classList.contains('nav-arrow_left') || target.classList.contains('nav-arrow_right')) {\n      if (target.classList.contains('repair-types-nav__item')) {\n        var sliderNumber = target.classList[2].match(/\\d/);\n        var slider = document.querySelector(\".types-repair\".concat(sliderNumber[0]));\n        smallSlider.prepend(slider);\n        leftButtons.forEach(function (item) {\n          item.classList.remove('active');\n        });\n        target.classList.add('active');\n      } else {\n        if (target.classList.contains('nav-arrow_right')) {\n          deleteTextNodes(navWrapper);\n          var slide = navWrapper.firstChild;\n          navWrapper.append(slide);\n          var slides = document.querySelector('.nav-list-repair').children;\n          navWrapper.lastChild.classList.remove('active');\n          slides[0].classList.add('active');\n        } else if (target.classList.contains('nav-arrow_left')) {\n          deleteTextNodes(navWrapper);\n          var _slide = navWrapper.lastChild;\n          navWrapper.prepend(_slide);\n          var _slides = document.querySelector('.nav-list-repair').children;\n\n          _slides[1].classList.remove('active');\n\n          _slides[0].classList.add('active');\n        }\n\n        var _sliderNumber = navWrapper.children[0].classList[2].match(/\\d/);\n\n        var _slider = document.querySelector(\".types-repair\".concat(_sliderNumber[0]));\n\n        smallSlider.prepend(_slider);\n      }\n\n      deleteTextNodes(smallSlider);\n      sliderCountTotal.textContent = smallSlider.firstChild.childNodes.length;\n      count = 1;\n      sliderCountCurrent.textContent = count;\n    } else if (target.closest('.slider-arrow_right')) {\n      smallSlider.firstChild.append(smallSlider.firstChild.firstChild);\n      count++;\n\n      if (count > smallSlider.firstChild.childNodes.length) {\n        count = 1;\n      }\n\n      sliderCountCurrent.textContent = count;\n    } else if (target.closest('.slider-arrow_left')) {\n      smallSlider.firstChild.prepend(smallSlider.firstChild.lastChild);\n      count--;\n\n      if (count < 1) {\n        count = smallSlider.firstChild.childNodes.length;\n      }\n\n      sliderCountCurrent.textContent = count;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairTypes);\n\n//# sourceURL=webpack://insein-relax/./src/modules/repairTypes.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2538b6014c8cdd0d56dd")
/******/ })();
/******/ 
/******/ }
);