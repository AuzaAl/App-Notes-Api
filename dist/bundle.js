/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --primary-color:#101010;
    --card-color:#161616;
    --border-color:#262626;
    --text-color:rgb(249, 249, 249);
    --darker-text-color:rgb(227, 227, 227);
}

*{
    margin: 0;
    padding: 0;
}
html{
    background-color: var(--primary-color);
}


body{
    background-color: #101010;
    opacity: 1;
    background-image: radial-gradient(#212121 0.8px, #101010 0.8px);
    background-size: 16px 16px;
}

/* laoding */
.loading-indicator {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(8, 8, 8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loading-spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #e7e7e7;
    border-top-color: #33333300;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

/* notes container*/
#notes-container {
    padding: 20px;
    width: 1000px;
    margin: 0 auto;
    column-gap: 16px;
    column-width: 250px;
}

note-card {
    display: grid;
    margin-bottom: 16px;
    break-inside: avoid; /* Mencegah card terpotong antar kolom */
}

/* Responsif untuk layar kecil */
@media (min-width: 1750px) {
    #notes-container {
        width: 1700px;
        column-count: 5; 
    }
}

@media (max-width: 1749px) {
    #notes-container {
        width: 1350px;
        column-count: 4; 
    }
}

@media (max-width: 1360px) {
    #notes-container {
        width: 1000px;
        column-count: 3; 
    }
}

@media (max-width: 1040px) {
    #notes-container {
        width: 660px;
        column-count: 2; 
    }
}

@media (max-width: 715px) {
    #notes-container {
        width: 85%;
        column-count: 1;
    }
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,sBAAsB;IACtB,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,sCAAsC;AAC1C;;;AAGA;IACI,yBAAyB;IACzB,UAAU;IACV,+DAA+D;IAC/D,0BAA0B;AAC9B;;AAEA,YAAY;AACZ;IACI,eAAe;IACf,YAAY;IACZ,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,2BAA2B;IAC3B,kCAAkC;EACpC;;EAEA;IACE;MACE,uBAAuB;IACzB;IACA;MACE,yBAAyB;IAC3B;EACF;;AAEF,mBAAmB;AACnB;IACI,aAAa;IACb,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB,EAAE,wCAAwC;AACjE;;AAEA,gCAAgC;AAChC;IACI;QACI,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,YAAY;QACZ,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,UAAU;QACV,eAAe;IACnB;AACJ","sourcesContent":[":root{\r\n    --primary-color:#101010;\r\n    --card-color:#161616;\r\n    --border-color:#262626;\r\n    --text-color:rgb(249, 249, 249);\r\n    --darker-text-color:rgb(227, 227, 227);\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nhtml{\r\n    background-color: var(--primary-color);\r\n}\r\n\r\n\r\nbody{\r\n    background-color: #101010;\r\n    opacity: 1;\r\n    background-image: radial-gradient(#212121 0.8px, #101010 0.8px);\r\n    background-size: 16px 16px;\r\n}\r\n\r\n/* laoding */\r\n.loading-indicator {\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(8, 8, 8);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .loading-spinner {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    border: 5px solid #e7e7e7;\r\n    border-top-color: #33333300;\r\n    animation: spin 1s linear infinite;\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n/* notes container*/\r\n#notes-container {\r\n    padding: 20px;\r\n    width: 1000px;\r\n    margin: 0 auto;\r\n    column-gap: 16px;\r\n    column-width: 250px;\r\n}\r\n\r\nnote-card {\r\n    display: grid;\r\n    margin-bottom: 16px;\r\n    break-inside: avoid; /* Mencegah card terpotong antar kolom */\r\n}\r\n\r\n/* Responsif untuk layar kecil */\r\n@media (min-width: 1750px) {\r\n    #notes-container {\r\n        width: 1700px;\r\n        column-count: 5; \r\n    }\r\n}\r\n\r\n@media (max-width: 1749px) {\r\n    #notes-container {\r\n        width: 1350px;\r\n        column-count: 4; \r\n    }\r\n}\r\n\r\n@media (max-width: 1360px) {\r\n    #notes-container {\r\n        width: 1000px;\r\n        column-count: 3; \r\n    }\r\n}\r\n\r\n@media (max-width: 1040px) {\r\n    #notes-container {\r\n        width: 660px;\r\n        column-count: 2; \r\n    }\r\n}\r\n\r\n@media (max-width: 715px) {\r\n    #notes-container {\r\n        width: 85%;\r\n        column-count: 1;\r\n    }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const loadingIndicator = document.querySelector('.loading-indicator');

function showLoadingIndicator() {
  loadingIndicator.style.display = 'flex';
}

function hideLoadingIndicator() {
  loadingIndicator.style.display = 'none';
}

class AppHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    container.className = 'header-container';
    const title = document.createElement('span');
    title.className = 'header-title';
    title.textContent = 'Notes Keeeper.';
    container.appendChild(title);

    const style = document.createElement('style');
    style.textContent = `
          :root {
              --primary-color: #101010;
              --card-color: #161616;
              --border-color: #262626;
              --text-color: rgb(249, 249, 249);
              --darker-text-color: rgb(227, 227, 227);
          }
          .header-container {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 15px 20px;
              background-color: var(--primary-color);
              border-bottom: 1px solid var(--border-color);
              width: 100%;
              box-sizing: border-box;
              margin-bottom: 25px;
          }
          .header-title {
              font-size: 20px;
              font-family: 'Readex Pro', sans-serif;
              font-weight: 500;
              color: var(--text-color);
              text-align: center;
          }
      `;
    shadow.appendChild(style);
    shadow.appendChild(container);
  }

  static get observedAttributes() {
    return ['icon-image'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'icon-image' && oldValue !== newValue) {
      const profileIcon = this.shadowRoot.querySelector('.profile-icon');
      if (newValue) {
        profileIcon.style.backgroundImage = `url('${newValue}')`;
        profileIcon.style.backgroundSize = 'cover';
      } else {
        profileIcon.style.backgroundImage = '';
        profileIcon.style.backgroundColor = 'rgb(88, 88, 88)';
      }
    }
  }
}
customElements.define('app-header', AppHeader);

// Custom Element untuk Input Note
class NoteInput extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    container.className = 'input-container';
    const form = document.createElement('form');
    form.innerHTML = `
          <input type="text" placeholder="Title" id="note-title" class="input-field" required>
          <textarea type="text" placeholder="Your Notes." id="note-body" class="input-field" required></textarea>
          <button id="add-button" class="add-button">Add Note</button>
      `;
    container.appendChild(form);

    const style = document.createElement('style');
    style.textContent = `
          :root {
              --primary-color: #101010;
              --card-color: #161616;
              --border-color: #262626;
              --text-color: rgb(249, 249, 249);
              --darker-text-color: rgb(227, 227, 227);
              --dark-text-color: rgb(0, 0, 0);
          }
          textarea {
              min-height: fit-content;
              resize: none;
              min-width: 90%;
              overflow-wrap: break-word;
          }
          .input-container {
              border: 1px solid var(--border-color);
              background-color: var(--card-color);
              border-radius: 10px;
              margin: auto;
              width: 85%;
              max-width: 1000px;
              height: 300px;
              padding: 20px;
          }
          .input-field {
              border: none;
              background-color: var(--card-color);
              color: var(--text-color);
              width: 100%;
              padding: 10px;
              margin-bottom: 10px;
          }
          .input-field:focus {
              outline: none;
          }
          #note-title {
              height: 25px;
              font-size: 2em;
          }
          #note-body {
              height: 170px;
          }
          #note-title::placeholder, #note-body::placeholder {
              color: rgba(227, 227, 227, 0.66);
          }
          .add-button {
              background: radial-gradient(141.42% 141.42% at 100% 0%, #fff6, #fff0), radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, #bd34fe00), radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, #41d1ff00);
              box-shadow: 0 1px #ffffffbf inset;
              padding: 10px 20px;
              border-radius: 7px;
              border: none;
              font-family: 'Readex Pro', sans-serif;
              font-weight: 500;
              color: var(--text-color);
              cursor: pointer;
              transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          }
          .add-button:hover {
              transform: scale(1.01);
              background: radial-gradient(141.42% 141.42% at 100% 0%, #ffffff80, #fff0), radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, #bd34fe00), radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, #41d1ff00);
              box-shadow: 0 1.5px #fffc inset;
          }
      `;
    shadow.appendChild(container);
    shadow.appendChild(style);
    this.form = shadow.querySelector('form');
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const title = this.shadowRoot.querySelector('#note-title').value;
    const body = this.shadowRoot.querySelector('#note-body').value;

    showLoadingIndicator();
    try {
      const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: body,
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('Note added:', data);
      this.form.reset();
      await renderNotes(); // Tunggu render selesai
    } catch (error) {
      console.error('Error adding note:', error);
    } finally {
      hideLoadingIndicator(); // Sembunyikan loading indicator
    }
  }
}

customElements.define('app-input', NoteInput);

// Custom Element untuk Note Card
class NoteCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.shadowRootRef = shadow; // Simpan referensi shadow DOM
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Judul Tidak Ada';
    const body = this.getAttribute('body') || 'Isi Tidak Ada';
    const createdAt =
      this.getAttribute('created-at') || new Date().toISOString();
    const id = this.getAttribute('id'); // Ambil ID note

    const date = new Date(createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Template dengan ID dinamis
    const template = document.createElement('template');
    template.innerHTML = `
          <div class="note-card">
              <div class="note-title">${title}</div>
              <br>
              <div class="note-body">${body}</div>
              <br>
              <div class="note-date">Created on: ${date}</div>
              <button class="delete-button" data-id="${id}">Delete</button>
          </div>
      `;

    const style = document.createElement('style');
    style.textContent = `
          :root {
              --primary-color: #101010;
              --card-color: #161616;
              --border-color: #262626;
              --text-color: rgb(249, 249, 249);
              --darker-text-color: rgb(227, 227, 227);
              --dark-text-color: rgb(0, 0, 0);
          }
          .note-card {
              font-family: 'Readex Pro', sans-serif;
              color: var(--text-color);
              border: 1px solid var(--border-color);
              background-color: var(--card-color);
              border-radius: 10px;
              width: 277px;
              height: fit-content;
              min-height: 105px;
              padding: 20px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .note-card:hover {
              transform: scale(1.01);
              box-shadow: 0 0px 15px rgba(200, 200, 200, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .note-title {
              font-size: 1.5em;
          }
          .note-date {
              font-size: 0.7em;
              color: rgb(150, 150, 150);
          }
          .delete-button {
              background: red;
              color: white;
              border: none;
              padding: 5px 10px;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 10px;
              font-family: 'Readex Pro', sans-serif;
          }
          .delete-button:hover {
              background: darkred;
          }
          @media (max-width: 715px) {
              .note-card {
                  width: 100%;
              }
          }
      `;

    this.shadowRootRef.appendChild(template.content.cloneNode(true));
    this.shadowRootRef.appendChild(style);

    // Event listener untuk tombol hapus
    this.shadowRootRef
      .querySelector('.delete-button')
      .addEventListener('click', () => this.deleteNote(id));
  }

  async deleteNote(id) {  // Tambahkan async
    showLoadingIndicator(); // Tampilkan loading indicator
    try {
      const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to delete note');
      console.log(`Note ${id} deleted`);
      await renderNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    } finally {
      hideLoadingIndicator(); 
    }
  }
}

customElements.define('note-card', NoteCard);

// Fungsi untuk render notes
async function renderNotes() {
  showLoadingIndicator();
  try {
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
    if (!response.ok) throw new Error('Network response was not ok');
    const notesData = await response.json();
    const container = document.getElementById('notes-container');
    container.innerHTML = '';
    notesData.data.forEach(note => {
      if (!note.archived) {
        const noteCard = document.createElement('note-card');
        noteCard.setAttribute('title', note.title);
        noteCard.setAttribute('body', note.body);
        noteCard.setAttribute('created-at', note.createdAt);
        noteCard.setAttribute('id', note.id);
        container.appendChild(noteCard);
      }
    });
  } catch (error) {
    console.error('Error fetching notes:', error);
  } finally {
    hideLoadingIndicator();
  }
}

renderNotes();

document.addEventListener('DOMContentLoaded', () => {
  renderNotes();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0EsdUNBQXVDLEtBQUs7QUFDNUM7QUFDQSxtREFBbUQsS0FBSztBQUN4RCx1REFBdUQsR0FBRztBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQiw0QkFBNEI7QUFDNUI7QUFDQSw4RUFBOEUsR0FBRztBQUNqRjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBLDBCQUEwQixJQUFJO0FBQzlCO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWNsb2NrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWItY2xvY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYi1jbG9jay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYi1jbG9jay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWItY2xvY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYi1jbG9jay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWItY2xvY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViLWNsb2NrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2ViLWNsb2NrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViLWNsb2NrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYi1jbG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWItY2xvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViLWNsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWItY2xvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWItY2xvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWItY2xvY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYi1jbG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XHJcbiAgICAtLXByaW1hcnktY29sb3I6IzEwMTAxMDtcclxuICAgIC0tY2FyZC1jb2xvcjojMTYxNjE2O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IzI2MjYyNjtcclxuICAgIC0tdGV4dC1jb2xvcjpyZ2IoMjQ5LCAyNDksIDI0OSk7XHJcbiAgICAtLWRhcmtlci10ZXh0LWNvbG9yOnJnYigyMjcsIDIyNywgMjI3KTtcclxufVxyXG5cclxuKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuaHRtbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMyMTIxMjEgMC44cHgsICMxMDEwMTAgMC44cHgpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XHJcbn1cclxuXHJcbi8qIGxhb2RpbmcgKi9cclxuLmxvYWRpbmctaW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCA4LCA4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5nLXNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMzMzMzAwO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4vKiBub3RlcyBjb250YWluZXIqL1xyXG4jbm90ZXMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xyXG4gICAgY29sdW1uLXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxubm90ZS1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZDsgLyogTWVuY2VnYWggY2FyZCB0ZXJwb3RvbmcgYW50YXIga29sb20gKi9cclxufVxyXG5cclxuLyogUmVzcG9uc2lmIHVudHVrIGxheWFyIGtlY2lsICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNzUwcHgpIHtcclxuICAgICNub3Rlcy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxNzAwcHg7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiA1OyBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NDlweCkge1xyXG4gICAgI25vdGVzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEzNTBweDtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDQ7IFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTM2MHB4KSB7XHJcbiAgICAjbm90ZXMtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMzsgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDQwcHgpIHtcclxuICAgICNub3Rlcy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA2NjBweDtcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDI7IFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzE1cHgpIHtcclxuICAgICNub3Rlcy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNDQUFzQztBQUMxQzs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLCtEQUErRDtJQUMvRCwwQkFBMEI7QUFDOUI7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBRUYsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUUsd0NBQXdDO0FBQ2pFOztBQUVBLGdDQUFnQztBQUNoQztJQUNJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiMxMDEwMTA7XFxyXFxuICAgIC0tY2FyZC1jb2xvcjojMTYxNjE2O1xcclxcbiAgICAtLWJvcmRlci1jb2xvcjojMjYyNjI2O1xcclxcbiAgICAtLXRleHQtY29sb3I6cmdiKDI0OSwgMjQ5LCAyNDkpO1xcclxcbiAgICAtLWRhcmtlci10ZXh0LWNvbG9yOnJnYigyMjcsIDIyNywgMjI3KTtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5odG1se1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMyMTIxMjEgMC44cHgsICMxMDEwMTAgMC44cHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbGFvZGluZyAqL1xcclxcbi5sb2FkaW5nLWluZGljYXRvciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCA4LCA4KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2FkaW5nLXNwaW5uZXIge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlN2U3ZTc7XFxyXFxuICAgIGJvcmRlci10b3AtY29sb3I6ICMzMzMzMzMwMDtcXHJcXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBub3RlcyBjb250YWluZXIqL1xcclxcbiNub3Rlcy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgY29sdW1uLWdhcDogMTZweDtcXHJcXG4gICAgY29sdW1uLXdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxubm90ZS1jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZDsgLyogTWVuY2VnYWggY2FyZCB0ZXJwb3RvbmcgYW50YXIga29sb20gKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzcG9uc2lmIHVudHVrIGxheWFyIGtlY2lsICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE3NTBweCkge1xcclxcbiAgICAjbm90ZXMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxNzAwcHg7XFxyXFxuICAgICAgICBjb2x1bW4tY291bnQ6IDU7IFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNzQ5cHgpIHtcXHJcXG4gICAgI25vdGVzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTM1MHB4O1xcclxcbiAgICAgICAgY29sdW1uLWNvdW50OiA0OyBcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTM2MHB4KSB7XFxyXFxuICAgICNub3Rlcy1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXHJcXG4gICAgICAgIGNvbHVtbi1jb3VudDogMzsgXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNDBweCkge1xcclxcbiAgICAjbm90ZXMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2NjBweDtcXHJcXG4gICAgICAgIGNvbHVtbi1jb3VudDogMjsgXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcxNXB4KSB7XFxyXFxuICAgICNub3Rlcy1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgIGNvbHVtbi1jb3VudDogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmNvbnN0IGxvYWRpbmdJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1pbmRpY2F0b3InKTtcblxuZnVuY3Rpb24gc2hvd0xvYWRpbmdJbmRpY2F0b3IoKSB7XG4gIGxvYWRpbmdJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cblxuZnVuY3Rpb24gaGlkZUxvYWRpbmdJbmRpY2F0b3IoKSB7XG4gIGxvYWRpbmdJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuY2xhc3MgQXBwSGVhZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaGVhZGVyLWNvbnRhaW5lcic7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ2hlYWRlci10aXRsZSc7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTm90ZXMgS2VlZXBlci4nO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICAgICAgOnJvb3Qge1xuICAgICAgICAgICAgICAtLXByaW1hcnktY29sb3I6ICMxMDEwMTA7XG4gICAgICAgICAgICAgIC0tY2FyZC1jb2xvcjogIzE2MTYxNjtcbiAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICMyNjI2MjY7XG4gICAgICAgICAgICAgIC0tdGV4dC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xuICAgICAgICAgICAgICAtLWRhcmtlci10ZXh0LWNvbG9yOiByZ2IoMjI3LCAyMjcsIDIyNyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlci10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSZWFkZXggUHJvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHNoYWRvdy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnaWNvbi1pbWFnZSddO1xuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGlmIChuYW1lID09PSAnaWNvbi1pbWFnZScgJiYgb2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICBjb25zdCBwcm9maWxlSWNvbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pY29uJyk7XG4gICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgcHJvZmlsZUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtuZXdWYWx1ZX0nKWA7XG4gICAgICAgIHByb2ZpbGVJY29uLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2ZpbGVJY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICBwcm9maWxlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDg4LCA4OCwgODgpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWhlYWRlcicsIEFwcEhlYWRlcik7XG5cbi8vIEN1c3RvbSBFbGVtZW50IHVudHVrIElucHV0IE5vdGVcbmNsYXNzIE5vdGVJbnB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2lucHV0LWNvbnRhaW5lcic7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgaWQ9XCJub3RlLXRpdGxlXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOb3Rlcy5cIiBpZD1cIm5vdGUtYm9keVwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtYnV0dG9uXCIgY2xhc3M9XCJhZGQtYnV0dG9uXCI+QWRkIE5vdGU8L2J1dHRvbj5cbiAgICAgIGA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMTAxMDEwO1xuICAgICAgICAgICAgICAtLWNhcmQtY29sb3I6ICMxNjE2MTY7XG4gICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjMjYyNjI2O1xuICAgICAgICAgICAgICAtLXRleHQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcbiAgICAgICAgICAgICAgLS1kYXJrZXItdGV4dC1jb2xvcjogcmdiKDIyNywgMjI3LCAyMjcpO1xuICAgICAgICAgICAgICAtLWRhcmstdGV4dC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogOTAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC1maWVsZDpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNub3RlLXRpdGxlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI25vdGUtYm9keSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNub3RlLXRpdGxlOjpwbGFjZWhvbGRlciwgI25vdGUtYm9keTo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyMjcsIDIyNywgMjI3LCAwLjY2KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFkZC1idXR0b24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTQxLjQyJSAxNDEuNDIlIGF0IDEwMCUgMCUsICNmZmY2LCAjZmZmMCksIHJhZGlhbC1ncmFkaWVudCgxNDAuMzUlIDE0MC4zNSUgYXQgMTAwJSA5NC43NCUsICNiZDM0ZmUsICNiZDM0ZmUwMCksIHJhZGlhbC1ncmFkaWVudCg4OS45NCUgODkuOTQlIGF0IDE4LjQyJSAxNS43OSUsICM0MWQxZmYsICM0MWQxZmYwMCk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4ICNmZmZmZmZiZiBpbnNldDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSZWFkZXggUHJvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFkZC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTQxLjQyJSAxNDEuNDIlIGF0IDEwMCUgMCUsICNmZmZmZmY4MCwgI2ZmZjApLCByYWRpYWwtZ3JhZGllbnQoMTQwLjM1JSAxNDAuMzUlIGF0IDEwMCUgOTQuNzQlLCAjYmQzNGZlLCAjYmQzNGZlMDApLCByYWRpYWwtZ3JhZGllbnQoODkuOTQlIDg5Ljk0JSBhdCAxOC40MiUgMTUuNzklLCAjNDFkMWZmLCAjNDFkMWZmMDApO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEuNXB4ICNmZmZjIGluc2V0O1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgc2hhZG93LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB0aGlzLmZvcm0gPSBzaGFkb3cucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI25vdGUtdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNub3RlLWJvZHknKS52YWx1ZTtcblxuICAgIHNob3dMb2FkaW5nSW5kaWNhdG9yKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbm90ZXMtYXBpLmRpY29kaW5nLmRldi92Mi9ub3RlcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ05vdGUgYWRkZWQ6JywgZGF0YSk7XG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgIGF3YWl0IHJlbmRlck5vdGVzKCk7IC8vIFR1bmdndSByZW5kZXIgc2VsZXNhaVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgbm90ZTonLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGhpZGVMb2FkaW5nSW5kaWNhdG9yKCk7IC8vIFNlbWJ1bnlpa2FuIGxvYWRpbmcgaW5kaWNhdG9yXG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWlucHV0JywgTm90ZUlucHV0KTtcblxuLy8gQ3VzdG9tIEVsZW1lbnQgdW50dWsgTm90ZSBDYXJkXG5jbGFzcyBOb3RlQ2FyZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB0aGlzLnNoYWRvd1Jvb3RSZWYgPSBzaGFkb3c7IC8vIFNpbXBhbiByZWZlcmVuc2kgc2hhZG93IERPTVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnSnVkdWwgVGlkYWsgQWRhJztcbiAgICBjb25zdCBib2R5ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2JvZHknKSB8fCAnSXNpIFRpZGFrIEFkYSc7XG4gICAgY29uc3QgY3JlYXRlZEF0ID1cbiAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKCdjcmVhdGVkLWF0JykgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJyk7IC8vIEFtYmlsIElEIG5vdGVcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICB9KTtcblxuICAgIC8vIFRlbXBsYXRlIGRlbmdhbiBJRCBkaW5hbWlzXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZS1jYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlLXRpdGxlXCI+JHt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZS1ib2R5XCI+JHtib2R5fTwvZGl2PlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlLWRhdGVcIj5DcmVhdGVkIG9uOiAke2RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCIgZGF0YS1pZD1cIiR7aWR9XCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgICAgLS1wcmltYXJ5LWNvbG9yOiAjMTAxMDEwO1xuICAgICAgICAgICAgICAtLWNhcmQtY29sb3I6ICMxNjE2MTY7XG4gICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjMjYyNjI2O1xuICAgICAgICAgICAgICAtLXRleHQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcbiAgICAgICAgICAgICAgLS1kYXJrZXItdGV4dC1jb2xvcjogcmdiKDIyNywgMjI3LCAyMjcpO1xuICAgICAgICAgICAgICAtLWRhcmstdGV4dC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90ZS1jYXJkIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSZWFkZXggUHJvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDI3N3B4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RlLWNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDBweCAxNXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4xKSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGUtdGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90ZS1kYXRlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmVhZGV4IFBybycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya3JlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcxNXB4KSB7XG4gICAgICAgICAgICAgIC5ub3RlLWNhcmQge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgdGhpcy5zaGFkb3dSb290UmVmLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLnNoYWRvd1Jvb3RSZWYuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgdW50dWsgdG9tYm9sIGhhcHVzXG4gICAgdGhpcy5zaGFkb3dSb290UmVmXG4gICAgICAucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24nKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5kZWxldGVOb3RlKGlkKSk7XG4gIH1cblxuICBhc3luYyBkZWxldGVOb3RlKGlkKSB7ICAvLyBUYW1iYWhrYW4gYXN5bmNcbiAgICBzaG93TG9hZGluZ0luZGljYXRvcigpOyAvLyBUYW1waWxrYW4gbG9hZGluZyBpbmRpY2F0b3JcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub3Rlcy1hcGkuZGljb2RpbmcuZGV2L3YyL25vdGVzLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgbm90ZScpO1xuICAgICAgY29uc29sZS5sb2coYE5vdGUgJHtpZH0gZGVsZXRlZGApO1xuICAgICAgYXdhaXQgcmVuZGVyTm90ZXMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgbm90ZTonLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGhpZGVMb2FkaW5nSW5kaWNhdG9yKCk7IFxuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ25vdGUtY2FyZCcsIE5vdGVDYXJkKTtcblxuLy8gRnVuZ3NpIHVudHVrIHJlbmRlciBub3Rlc1xuYXN5bmMgZnVuY3Rpb24gcmVuZGVyTm90ZXMoKSB7XG4gIHNob3dMb2FkaW5nSW5kaWNhdG9yKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9ub3Rlcy1hcGkuZGljb2RpbmcuZGV2L3YyL25vdGVzJyk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICBjb25zdCBub3Rlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBub3Rlc0RhdGEuZGF0YS5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgaWYgKCFub3RlLmFyY2hpdmVkKSB7XG4gICAgICAgIGNvbnN0IG5vdGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbm90ZS1jYXJkJyk7XG4gICAgICAgIG5vdGVDYXJkLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBub3RlLnRpdGxlKTtcbiAgICAgICAgbm90ZUNhcmQuc2V0QXR0cmlidXRlKCdib2R5Jywgbm90ZS5ib2R5KTtcbiAgICAgICAgbm90ZUNhcmQuc2V0QXR0cmlidXRlKCdjcmVhdGVkLWF0Jywgbm90ZS5jcmVhdGVkQXQpO1xuICAgICAgICBub3RlQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgbm90ZS5pZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlQ2FyZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbm90ZXM6JywgZXJyb3IpO1xuICB9IGZpbmFsbHkge1xuICAgIGhpZGVMb2FkaW5nSW5kaWNhdG9yKCk7XG4gIH1cbn1cblxucmVuZGVyTm90ZXMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgcmVuZGVyTm90ZXMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9