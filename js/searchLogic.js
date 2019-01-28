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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var textPlaseholder = '';\nvar textButton = '';\nvar submit = document.getElementById('submit');\nconsole.log(submit);\n\nswitch (sessionStorage.getItem('language')) {\n  case \"rus\":\n    textPlaseholder = 'поиск';\n    textButton = 'ИСКАТЬ!';\n    break;\n\n  case \"eng\":\n    textPlaseholder = 'search';\n    textButton = 'SEARCH!';\n    break;\n\n  case \"by\":\n    textPlaseholder = 'пошук';\n    textButton = 'ШУКАЦЬ!';\n    break;\n\n  default:\n    textPlaseholder = 'поиск';\n    textButton = 'ИСКАТЬ!';\n    break;\n}\n\nwindow.onload = function () {\n  var el = document.querySelector('.input');\n  el.placeholder = textPlaseholder;\n  var button = document.querySelector('.search');\n  button.value = textButton;\n  submit.click();\n};\n\nfunction search() {\n  var ul = document.querySelector(\"ul\");\n  var searchfield = document.querySelector('.input').value;\n  console.log(sessionStorage.getItem('language')); // var myExp = new RegExp(searchfield, 'i'); //любое совпадение\n\n  var myExp = new RegExp('^' + searchfield, 'i'); // совпадение по первым буквам\n\n  var xhttp = new XMLHttpRequest();\n\n  xhttp.onreadystatechange = function () {\n    if (this.readyState == 4 && this.status == 200) {\n      if (sessionStorage.getItem('language') == undefined) //проверка языка страницы\n        {\n          sessionStorage.setItem('language', 'rus');\n        }\n\n      var response = JSON.parse(xhttp.responseText);\n      var output = '';\n      var lang = sessionStorage.getItem('language');\n      var obj = response[lang];\n      var matchs = [];\n\n      for (key in obj) {\n        if (key.search(myExp) != -1 || obj[key].place_of_working.search(myExp) != -1) {\n          matchs.push(key);\n        }\n      }\n\n      matchs.forEach(function (el) {\n        output += '<li><a href=\\'https://metre-ray.github.io/DreamTeam/html/authors/' + el + '.html\\'>' + obj[el].name + '</a></li>';\n      });\n\n      if (matchs.length == 0) {\n        switch (sessionStorage.getItem('language')) {\n          case \"rus\":\n            output = '<li>Совпадений не найдено =(</li>';\n            break;\n\n          case \"eng\":\n            output = '<li>No match found =(</li>';\n            break;\n\n          case \"by\":\n            output = '<li>Супадзенняў не знойдзена =(</li>';\n            break;\n\n          default:\n            output = '<li>Совпадений не найдено =(</li>';\n            break;\n        }\n      }\n\n      document.querySelector(\"ul\").innerHTML = output;\n    }\n  };\n\n  xhttp.open(\"GET\", \"../data/filmmakers.json\", true);\n  xhttp.send();\n}\n\nsubmit.addEventListener('click', search, false);\n\n//# sourceURL=webpack:///./src/js/search.js?");

/***/ })

/******/ });