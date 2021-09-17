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

/***/ "./src/modules/tBody.js":
/*!******************************!*\
  !*** ./src/modules/tBody.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar tBody = function tBody() {\n  var table = document.querySelector('.popup-repair-types-content-table'),\n      navList = document.querySelector('.nav-list-popup-repair'),\n      navListMobile = document.querySelector('.popup-repair-types-tab'),\n      popupTitle = document.querySelector('.popup-repair-types-content__head-title'),\n      popup = document.querySelector('.popup-repair-types');\n  table.innerHTML = '';\n  navList.innerHTML = '';\n\n  var getData = /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('http://localhost:3000/api/items');\n\n            case 2:\n              data = _context.sent;\n\n              if (!data.ok) {\n                _context.next = 7;\n                break;\n              }\n\n              return _context.abrupt(\"return\", data.json());\n\n            case 7:\n              throw new Error(\"\\u0414\\u0430\\u043D\\u043D\\u044B\\u0435 \\u043D\\u0435\\u0431\\u044B\\u043B\\u0438 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u044B, \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \".concat(data.status, \" \").concat(data.statusText));\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  getData().then(function (data) {\n    var obj = new Map();\n    data.forEach(function (item) {\n      obj.set(item.type);\n    });\n\n    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj.keys()).forEach(function (elem) {\n      var tableList = document.createElement('div');\n      tableList.classList.add('popup-repair-types-content-table__list');\n      var tBody = document.createElement('tbody');\n      var typeButton = document.createElement('button');\n      typeButton.classList = 'button_o popup-repair-types-nav__item';\n      typeButton.textContent = elem;\n      navList.append(typeButton);\n      data.forEach(function (item) {\n        if (item.type === elem) {\n          var tr = document.createElement('tr');\n          tr.classList.add('mobile-row');\n          var unit = item.units.replace(/\\d/, function (a) {\n            return \"<sup>\".concat(a, \"</sup>\");\n          });\n          tr.innerHTML = \"\\n                        <td class=\\\"repair-types-name\\\">\".concat(item.name, \"</td>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\\"mobile-col-title tablet-hide desktop-hide\\\">\\u0415\\u0434.\\u0438\\u0437\\u043C\\u0435\\u0440\\u0435\\u043D\\u0438\\u044F</td>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\\"mobile-col-title tablet-hide desktop-hide\\\">\\u0426\\u0435\\u043D\\u0430 \\u0437\\u0430 \\u0435\\u0434.</td>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\\"repair-types-value\\\">\").concat(unit, \"</td>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\\"repair-types-value\\\">\").concat(item.cost, \" \\u0440\\u0443\\u0431.</td>\\n                        \");\n          tBody.append(tr);\n        }\n      });\n      tBody.children[0].classList.add('showHide');\n      tableList.append(tBody);\n      table.append(tableList);\n    });\n\n    if (document.documentElement.clientWidth <= 1024) {\n      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navList.children).forEach(function (item, index) {\n        if (index !== 0) item.style.display = 'none';else item.style.display = 'inline';\n      });\n    }\n  })[\"catch\"](function (err) {\n    console.error(err);\n  });\n\n  if (document.documentElement.clientWidth > 1024) {\n    navList.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.closest('.popup-repair-types-nav__item')) {\n        (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(table.children).forEach(function (item) {\n          item.style.display = 'none';\n        });\n\n        (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navList.children).forEach(function (item, index) {\n          item.classList.remove('active');\n\n          if (item === target) {\n            target.classList.add('active');\n            table.children[index].style.display = 'block';\n          }\n        });\n\n        popupTitle.textContent = target.textContent;\n      }\n    });\n  } else {\n    navListMobile.addEventListener('click', function (event) {\n      var target = event.target;\n      var count = 0;\n\n      if (target.closest('#nav-arrow-popup-repair_left')) {\n        (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navList.children).forEach(function (item) {\n          if (count === 0) {\n            if (item.style.display === 'inline') {\n              item.style.display = 'none';\n\n              if (item.previousElementSibling) {\n                item.previousElementSibling.style.display = 'inline';\n                count++;\n              } else {\n                navList.children[navList.children.length - 1].style.display = 'inline';\n                count++;\n              }\n            }\n          }\n        });\n      } else if (target.closest('#nav-arrow-popup-repair_right')) {\n        (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navList.children).forEach(function (item) {\n          if (count === 0) {\n            if (item.style.display === 'inline') {\n              item.style.display = 'none';\n\n              if (item.nextElementSibling) {\n                item.nextElementSibling.style.display = 'inline';\n                count++;\n              } else {\n                navList.children[0].style.display = 'inline';\n                count++;\n              }\n            }\n          }\n        });\n      }\n\n      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navList.children).forEach(function (item, index) {\n        if (item.style.display === 'inline') {\n          popupTitle.textContent = item.textContent;\n\n          (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(table.children).forEach(function (item) {\n            item.style.display = 'none';\n          });\n\n          table.children[index].style.display = 'block';\n        }\n      });\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tBody);\n\n//# sourceURL=webpack://insein-relax/./src/modules/tBody.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91ef269ece4d31259194")
/******/ })();
/******/ 
/******/ }
);