/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/template.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// html skeleton provider\nfunction template(title) {\n  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var scripts = ''; // Dynamically ship scripts based on render type\n\n  if (content) {\n    scripts = \" <script>\\n                   window.__STATE__ = \".concat(JSON.stringify(initialState), \"\\n                </script>\\n                \");\n  }\n\n  var page = \"<!DOCTYPE html>\\n              <html lang=\\\"en\\\">\\n              <head>\\n                <meta charset=\\\"utf-8\\\">\\n                <title> \".concat(title, \" </title>\\n                <link href=\\\"assets/style.css\\\" rel=\\\"stylesheet\\\">\\n              </head>\\n              <body>\\n                <div class=\\\"content\\\">\\n                   <div id=\\\"app\\\" class=\\\"wrap-inner\\\">\\n                      <!--- magic happens here -->  \").concat(content, \"\\n                   </div>\\n                </div>\\n\\n                  \").concat(scripts, \"\\n              </body>\\n              \");\n  return page;\n}\n\nmodule.exports = template;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVtcGxhdGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUuanM/ZTc2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodG1sIHNrZWxldG9uIHByb3ZpZGVyXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0aXRsZSwgaW5pdGlhbFN0YXRlID0ge30sIGNvbnRlbnQgPSBcIlwiKXtcbiAgbGV0IHNjcmlwdHMgPSAnJzsgLy8gRHluYW1pY2FsbHkgc2hpcCBzY3JpcHRzIGJhc2VkIG9uIHJlbmRlciB0eXBlXG4gIGlmKGNvbnRlbnQpe1xuICAgIHNjcmlwdHMgPSBgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgd2luZG93Ll9fU1RBVEVfXyA9ICR7SlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKX1cbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICBgXG4gIH1cbiAgbGV0IHBhZ2UgPSBgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgICAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cbiAgICAgICAgICAgICAgICA8dGl0bGU+ICR7dGl0bGV9IDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImFzc2V0cy9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gICAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCIgY2xhc3M9XCJ3cmFwLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLS0gbWFnaWMgaGFwcGVucyBoZXJlIC0tPiAgJHtjb250ZW50fVxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAke3NjcmlwdHN9XG4gICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgICAgYDtcblxuICByZXR1cm4gcGFnZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/template.js\n");

/***/ })

/******/ });