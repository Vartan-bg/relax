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

/***/ "./src/modules/portfolio.js":
/*!**********************************!*\
  !*** ./src/modules/portfolio.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\nvar portfolio = function portfolio() {\n  var popup = document.querySelector('.popup-portfolio'),\n      portfolioWrapper = document.getElementById('portfolio'),\n      sliderText = document.querySelectorAll('.popup-portfolio-text'),\n      sliderPopupCount = document.getElementById('popup-portfolio-counter'),\n      popupSlider = document.querySelector('.popup-portfolio-slider');\n  portfolioWrapper.addEventListener('click', function (event) {\n    var target = event.target;\n    sliderPopupCount.children[0].children[1].textContent = popupSlider.children.length;\n\n    if (target.closest('.portfolio-slider__slide-frame')) {\n      popup.style.visibility = 'visible';\n      var count = 0;\n\n      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(popupSlider.children).forEach(function (item) {\n        item.style.display = 'none';\n\n        if (count > 0) {\n          return;\n        } else {\n          var slideNumber = item.children[0].getAttribute('src').match(/\\d/),\n              targetNumber = target.children[0].getAttribute('alt').match(/\\d/);\n\n          if (+slideNumber === +targetNumber) {\n            count++;\n            item.style.display = 'block';\n            sliderText[+slideNumber - 1].style.display = 'flex';\n            sliderPopupCount.children[0].children[0].textContent = slideNumber;\n\n            if (document.documentElement.clientWidth <= 1024) {\n              sliderText[+slideNumber - 1].style.cssText += 'flex-wrap: wrap;';\n            }\n          }\n        }\n      });\n\n      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(popupSlider.children).forEach(function (elem, index) {\n        if (elem.style.display === 'block') {}\n      });\n    }\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n    var slideNumber = +sliderPopupCount.children[0].children[0].textContent;\n\n    if (target.closest('#popup_portfolio_left')) {\n      var check = 0;\n\n      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(popupSlider.children).forEach(function (item, index) {\n        if (check === 0) {\n          if (item.style.display === 'block') {\n            sliderText.forEach(function (elem) {\n              elem.style.display = 'none';\n            });\n            item.style.display = 'none';\n\n            if (item.previousElementSibling) {\n              item.previousElementSibling.style.display = 'block';\n              sliderText[index - 1].style.display = 'flex';\n\n              if (document.documentElement.clientWidth <= 1024) {\n                sliderText[index - 1].style.cssText += 'flex-wrap: wrap;';\n              }\n\n              check++;\n              slideNumber--;\n            } else {\n              popupSlider.children[popupSlider.children.length - 1].style.display = 'block';\n              sliderText[popupSlider.children.length - 1].style.display = 'flex';\n\n              if (document.documentElement.clientWidth <= 1024) {\n                sliderText[popupSlider.children.length - 1].style.cssText += 'flex-wrap: wrap;';\n              }\n\n              check++;\n              slideNumber--;\n            }\n          }\n\n          if (slideNumber < 1) slideNumber = popupSlider.children.length;\n          sliderPopupCount.children[0].children[0].textContent = slideNumber;\n        }\n      });\n    } else if (target.closest('#popup_portfolio_right')) {\n      var _check = 0;\n\n      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(popupSlider.children).forEach(function (item, index) {\n        if (_check === 0) {\n          if (item.style.display === 'block') {\n            sliderText.forEach(function (elem) {\n              elem.style.display = 'none';\n            });\n            item.style.display = 'none';\n\n            if (item.nextElementSibling) {\n              item.nextElementSibling.style.display = 'block';\n              sliderText[index + 1].style.display = 'flex';\n\n              if (document.documentElement.clientWidth <= 1024) {\n                sliderText[index + 1].style.cssText += 'flex-wrap: wrap;';\n              }\n\n              _check++;\n              slideNumber++;\n            } else {\n              popupSlider.children[0].style.display = 'block';\n              sliderText[0].style.display = 'flex';\n\n              if (document.documentElement.clientWidth <= 1024) {\n                sliderText[0].style.cssText += 'flex-wrap: wrap;';\n              }\n\n              _check++;\n              slideNumber++;\n            }\n          }\n\n          if (slideNumber > popupSlider.children.length) slideNumber = 1;\n          sliderPopupCount.children[0].children[0].textContent = slideNumber;\n        }\n      });\n    } else if (target.closest('.close')) {\n      popup.style.visibility = 'hidden';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolio);\n\n//# sourceURL=webpack://insein-relax/./src/modules/portfolio.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6e97108ff62c1c22782f")
/******/ })();
/******/ 
/******/ }
);