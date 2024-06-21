/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   coffeeType: () => (/* binding */ coffeeType),\n/* harmony export */   ed: () => (/* binding */ emailDomain),\n/* harmony export */   flavorArray: () => (/* binding */ flavorArray),\n/* harmony export */   kindDrink: () => (/* binding */ kindDrink),\n/* harmony export */   sizeArray: () => (/* binding */ sizeArray),\n/* harmony export */   typeDrink: () => (/* binding */ typeDrink)\n/* harmony export */ });\nconst coffeeType = ['cappuccino', 'latte', 'espresso', 'americano', 'instant'];\r\nconst sizeArray = ['small', 'normal', 'big'];\r\nconst flavorArray = ['lemon', 'cardamon', 'cinnamon', 'milk', 'caramel', 'cognac', 'vanilla'];\r\nconst emailDomain = ['mail.ru', 'co.il', 'gmail.com'];\r\n\r\nconst typeDrink = ['coffee', 'tea', 'juice'];\r\nconst kindDrink =\r\n    {\r\n        coffee: ['cappuccino', 'latte', 'espresso', 'americano', 'instant'],\r\n        tea: ['black', 'green', 'red'],\r\n        juice: ['apple', 'orange', 'tomato', 'berry', 'grape']\r\n    };\r\n\r\n\n\n//# sourceURL=webpack://25.coffee-order-random/./src/config/constants.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/orders */ \"./src/service/orders.js\");\n/* harmony import */ var _utils_formHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/formHandler */ \"./src/utils/formHandler.js\");\n/* harmony import */ var _ui_orderForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/orderForm */ \"./src/ui/orderForm.js\");\n/* harmony import */ var _ui_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/navigator */ \"./src/ui/navigator.js\");\n/* harmony import */ var _ui_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/table */ \"./src/ui/table.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst orders = new _service_orders__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n// const list = new List('#orders');\r\nconst myTable = new _ui_table__WEBPACK_IMPORTED_MODULE_4__[\"default\"](['drink', 'kind', 'flavor', 'size', 'strength'], '#orders')\r\nconst formHandler = new _utils_formHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('form');\r\nnew _ui_orderForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('form');\r\nnew _ui_navigator__WEBPACK_IMPORTED_MODULE_3__[\"default\"](['#li_new_order', '#li_list_orders'], 0);\r\n\r\nformHandler.addHandler(order =>\r\n{\r\n    let error = orders.add(order);\r\n    if(!error)\r\n        myTable.addRow(order);\r\n    return error;\r\n})\r\n\n\n//# sourceURL=webpack://25.coffee-order-random/./src/main.js?");

/***/ }),

/***/ "./src/service/orders.js":
/*!*******************************!*\
  !*** ./src/service/orders.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Orders)\n/* harmony export */ });\nclass Orders //import Orders from \"orders.js\"\r\n{\r\n    #data;\r\n\r\n    constructor()\r\n    {\r\n        this.#data = {};\r\n    }\r\n\r\n    add = order =>\r\n    {\r\n        if(this.#data[order.email])\r\n            return `Order with email ${order.email} is already exists`;\r\n        this.#data[order.email] = order;\r\n        return  '';\r\n    }\r\n\r\n    remove = email =>\r\n    {\r\n        if(!this.#data.email)\r\n            return false;\r\n        delete this.#data.email;\r\n        return true;\r\n    }\r\n\r\n    get = email => this.#data.email;\r\n\r\n    getAll = () => Object.values(this.#data);\r\n}\r\n\n\n//# sourceURL=webpack://25.coffee-order-random/./src/service/orders.js?");

/***/ }),

/***/ "./src/ui/navigator.js":
/*!*****************************!*\
  !*** ./src/ui/navigator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigator)\n/* harmony export */ });\nclass Navigator\r\n{\r\n    #previousActiveIndex;\r\n    #controls;//{{li->div},{li->div}}\r\n\r\n    constructor(selectors, activeIndex)//selectors = [\"new_order\", \"list_orders\"]\r\n    {\r\n        this.#previousActiveIndex = -1;\r\n        this.#controls = selectors.map(this.#createControl);\r\n        this.#addHandlers();\r\n        this.#showActiveIndex(activeIndex);\r\n    }\r\n\r\n    #createControl = selector =>\r\n    {\r\n        let control = {};\r\n        control.$navItem = $(selector);\r\n        control.$areaItem = $('#' + control.$navItem.attr('aria-controls'));\r\n        return control;\r\n    }\r\n\r\n    #addHandlers = () =>\r\n    {\r\n        this.#controls.forEach((control, index) =>\r\n        {\r\n            control.$navItem.click(event =>\r\n            {\r\n                event.preventDefault();\r\n                this.#showActiveIndex(index);\r\n            })\r\n        })\r\n    }\r\n\r\n    #showActiveIndex(index)\r\n    {\r\n        if(this.#previousActiveIndex === index)\r\n            return;\r\n        if(this.#previousActiveIndex > -1)\r\n            this.#hideControl(this.#controls[this.#previousActiveIndex]);\r\n\r\n        this.#showControl(this.#controls[index]);\r\n        this.#previousActiveIndex = index;\r\n    }\r\n\r\n    #hideControl(control)\r\n    {\r\n        control.$navItem.removeClass('active');\r\n        control.$areaItem.attr('hidden', true);\r\n    }\r\n\r\n    #showControl(control)\r\n    {\r\n        control.$navItem.addClass('active');\r\n        control.$areaItem.attr('hidden', false);\r\n    }\r\n}\n\n//# sourceURL=webpack://25.coffee-order-random/./src/ui/navigator.js?");

/***/ }),

/***/ "./src/ui/orderForm.js":
/*!*****************************!*\
  !*** ./src/ui/orderForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OrderForm)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\r\n\r\nclass OrderForm\r\n{\r\n    #parentForm;\r\n    #drink;\r\n    #kind;\r\n    #flavor;\r\n\r\n    constructor(selector)\r\n    {\r\n        this.#parentForm = document.querySelector(selector);\r\n        this.#parentForm.innerHTML =\r\n            `<div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"email\" name=\"email\" placeholder=\"name@co.il\" class=\"form-control\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Type of drink</label>\r\n                <select name=\"drink\" class=\"form-control\" required></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Kind of drink</label>\r\n                <select name=\"kind\" class=\"form-control\" required></select>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input type=\"radio\" name=\"size\" value=\"small\" class=\"form-check-input\">\r\n                <label>small</label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input type=\"radio\" name=\"size\" value=\"medium\" class=\"form-check-input\" checked>\r\n                <label>medium</label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <input type=\"radio\" name=\"size\" value=\"large\" class=\"form-check-input\">\r\n                <label>large</label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Flavor</label>\r\n                <select name=\"flavor\" class=\"form-control\"></select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Strength</label>\r\n                <input type=\"range\" name=\"strength\" value=\"0\" min=\"0\" max=\"100\" step=\"10\" class=\"form-control\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            <button type=\"reset\" class=\"btn btn-primary\">Reset</button>`\r\n\r\n        this.#drink = document.querySelector('select[name=\"drink\"]');\r\n        this.#kind = document.querySelector('select[name=\"kind\"]');\r\n        this.#flavor = document.querySelector('select[name=\"flavor\"]');\r\n        this.#setDrink();\r\n        this.#drink.onchange = () =>\r\n        {\r\n            this.#setKind();\r\n            this.#setFlavor();\r\n        }\r\n    }\r\n\r\n    #setDrink()\r\n    {\r\n        this.#drink.innerHTML = `<option value=\"\" disabled selected>Select type of drink</option>\r\n                                ${_config_constants__WEBPACK_IMPORTED_MODULE_0__.typeDrink.map(type => `<option value=\"${type}\">${type}</option>`)}`\r\n    }\r\n    #setKind()\r\n    {\r\n        this.#kind.innerHTML = `<option value=\"\" disabled selected>Select kind of drink</option>\r\n                                ${_config_constants__WEBPACK_IMPORTED_MODULE_0__.kindDrink[this.#drink.value].map(type => `<option value=\"${type}\">${type}</option>`)}`\r\n    }\r\n    #setFlavor()\r\n    {\r\n        this.#flavor.innerHTML = `<option value=\"\" disabled selected>Select flavor</option>`\r\n        if(this.#drink.value == 'coffee' || this.#drink.value == 'tea')\r\n             this.#flavor.innerHTML += `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.flavorArray.map(type => `<option value=\"${type}\">${type}</option>`)}`\r\n    }\r\n }\n\n//# sourceURL=webpack://25.coffee-order-random/./src/ui/orderForm.js?");

/***/ }),

/***/ "./src/ui/table.js":
/*!*************************!*\
  !*** ./src/ui/table.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Table)\n/* harmony export */ });\nclass Table\r\n{\r\n    #headers;\r\n    #tbody;\r\n\r\n    constructor(headers, selector)//[type, kind]\r\n    {\r\n        this.#headers = headers;\r\n        let $table = $(selector);\r\n        let $thead = $('<thead>');\r\n        this.#fillThead($thead);\r\n        $table.append($thead);\r\n        this.#tbody = $('<tbody>');\r\n        $table.append(this.#tbody);\r\n    }\r\n\r\n    #fillThead($thead)\r\n    {\r\n        let $tr = $('<tr>');\r\n        this.#headers.map(header => $('<th>', {text: header})).forEach(th => $tr.append(th));\r\n        $thead.append($tr);\r\n    }\r\n\r\n    addRow = data => this.#tbody.append(this.#createRow(data));\r\n\r\n    #createRow = data =>\r\n    {\r\n        let $row = $('<tr>');\r\n        this.#headers.map(header => $('<td>', {text: data[header] ? data[header] : '---'}))\r\n            .forEach(td => $row.append(td));\r\n        return $row;\r\n    }\r\n}\n\n//# sourceURL=webpack://25.coffee-order-random/./src/ui/table.js?");

/***/ }),

/***/ "./src/utils/formHandler.js":
/*!**********************************!*\
  !*** ./src/utils/formHandler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormHandler)\n/* harmony export */ });\nclass FormHandler\r\n{\r\n    constructor(selector)\r\n    {\r\n        this.$formElement = $(selector);\r\n    }\r\n\r\n    addHandler = fn => this.$formElement.on('submit', event =>\r\n    {\r\n        event.preventDefault();\r\n        let res = {};//{kind:latte}\r\n        this.$formElement.serializeArray().forEach(obj => res[obj.name] = obj.value);\r\n        let fnRes = fn(res);\r\n        if(fnRes)\r\n        {\r\n            alert(fnRes);\r\n            return;\r\n        }\r\n        event.target.reset();\r\n    })\r\n}\r\n//[{name:kind, value:latte}, {}]\r\n\r\n\n\n//# sourceURL=webpack://25.coffee-order-random/./src/utils/formHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;