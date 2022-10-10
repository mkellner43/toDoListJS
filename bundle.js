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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family:'Courier New', Courier, monospace;\n}\nbody{\n  background-color: black;\n\n}\n#contentContainer{\n  display: flex;\n}\n#nav.nav{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(38, 37, 37, 0.866);\n  color: white;\n  width: 20vw;\n  height: 100vh;\n  padding: 3vh;\n  position: absolute;\n  animation-name: slideIn;\n  animation-duration: 0.5s;\n}\n#nav{\n  overflow: hidden;\n  width: 0;\n}\n#hamburger{\n  background-color: rgba(240, 248, 255, 0);\n}\n#bar1,#bar2, #bar3, #bar4 {\n  padding: 0;\n  width: 30px;\n  height: 3px;\n  background-color: white;\n  display: block;\n  border-radius: 4px;\n  transition: all 0.4s ease-in-out;\n  margin: 2px 2px 2px 2px;\n}\n\n#header{\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(38, 37, 37, 0.866);\n  color: white;\n  height: 5vh;\n  min-height: 60px;\n  overflow: hidden;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  font-size: x-large;\n  position: relative;\n  top: 0;\n}\n#newFolder{\n  flex-direction: column;\n  background-color: rgba(38, 37, 37, 0.866);\n  border-radius: 1rem;\n  color: white;\n  position: fixed;\n  top: 30vh;\n  left: 40vw;\n  padding: 2vw;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 22rem;\n  height: 12rem;\n  z-index: 500;\n}\n#taskPopup{\n  display: none;\n  flex-direction: column;\n  width: auto;\n  width: 28rem;\n  height: fit-content;\n  padding: 2vw;\n  text-align: center;\n  position: absolute;\n  background-color: rgba(38, 37, 37, 0.866);\n  color: white;\n  border-radius: 1rem;\n  top: 13rem;\n  left: 38vw;\n  z-index: 500;\n}\n\n#priority{\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: .2vh;\n  color: white;\n}\n.priority{\n  height: 2vh;\n  width: 2vh;\n  margin-bottom: .2vh;\n}\n#priority1, #priority2, #priority3, .priority{\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid white;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n}\ninput{\n  border-radius: 0.5rem;\n  padding: 1rem 3rem;\n  margin: 0.2rem;\n}\nbutton {\n  display: inline-block;\n  padding: 8px 12px;\n  font-size: 14px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: white;\n  background-color: #1461b7;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 6px rgba(241, 241, 241, 0.519);\n}\n\nbutton:hover {background-color: #4c85c5}\n\nbutton:active {\n  background-color: #4c85c5;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n#createFolder {\n  margin-bottom: 6vh;\n}\n#createTaskForm{\n  margin-bottom: .5vh;\n}\n.taskItem, .priorityContainer{\n  display: flex;\n  align-items: center;\n}\n.priorityContainer{\n  padding-right: 1rem;\n}\n.complete{\n  border: solid #3e970e 3px;\n  border-radius: 0.25rem;\n  margin-left: 1rem;\n  padding: 0.25rem;\n}\n.complete:hover{\n  background-color: #3e970e;\n}\n#listSections{\n  display: flex;\n  position: absolute;\n  left: 20vw;\n  padding: 1rem;\n  color: white;\n  justify-content: space-between;\n  width: 64%;\n  height: 100%;\n}\n.delete{\n    margin-left: 1rem;\n    border: 1px solid #b01f1f;\n    background: #b01f1f;\n    padding: 4px;\n    border-radius: 0.25rem;\n}\n\n@keyframes slideIn {\n  from {left: -50vw;}\n  to {left: 0vw;}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,6CAA6C;AAC/C;AACA;EACE,uBAAuB;;AAEzB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yCAAyC;EACzC,YAAY;EACZ,WAAW;EACX,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;AAC1B;AACA;EACE,gBAAgB;EAChB,QAAQ;AACV;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,UAAU;EACV,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,gCAAgC;EAChC,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;EAC9B,mBAAmB;EACnB,yCAAyC;EACzC,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,MAAM;AACR;AACA;EACE,sBAAsB;EACtB,yCAAyC;EACzC,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,SAAS;EACT,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,yCAAyC;EACzC,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,WAAW;EACX,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA,cAAc,yBAAyB;;AAEvC;EACE,yBAAyB;EACzB,sBAAsB;EACtB,0BAA0B;AAC5B;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,UAAU;EACV,YAAY;AACd;AACA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;EACE,MAAM,WAAW,CAAC;EAClB,IAAI,SAAS,CAAC;AAChB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family:'Courier New', Courier, monospace;\n}\nbody{\n  background-color: black;\n\n}\n#contentContainer{\n  display: flex;\n}\n#nav.nav{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(38, 37, 37, 0.866);\n  color: white;\n  width: 20vw;\n  height: 100vh;\n  padding: 3vh;\n  position: absolute;\n  animation-name: slideIn;\n  animation-duration: 0.5s;\n}\n#nav{\n  overflow: hidden;\n  width: 0;\n}\n#hamburger{\n  background-color: rgba(240, 248, 255, 0);\n}\n#bar1,#bar2, #bar3, #bar4 {\n  padding: 0;\n  width: 30px;\n  height: 3px;\n  background-color: white;\n  display: block;\n  border-radius: 4px;\n  transition: all 0.4s ease-in-out;\n  margin: 2px 2px 2px 2px;\n}\n\n#header{\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(38, 37, 37, 0.866);\n  color: white;\n  height: 5vh;\n  min-height: 60px;\n  overflow: hidden;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  font-size: x-large;\n  position: relative;\n  top: 0;\n}\n#newFolder{\n  flex-direction: column;\n  background-color: rgba(38, 37, 37, 0.866);\n  border-radius: 1rem;\n  color: white;\n  position: fixed;\n  top: 30vh;\n  left: 40vw;\n  padding: 2vw;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 22rem;\n  height: 12rem;\n  z-index: 500;\n}\n#taskPopup{\n  display: none;\n  flex-direction: column;\n  width: auto;\n  width: 28rem;\n  height: fit-content;\n  padding: 2vw;\n  text-align: center;\n  position: absolute;\n  background-color: rgba(38, 37, 37, 0.866);\n  color: white;\n  border-radius: 1rem;\n  top: 13rem;\n  left: 38vw;\n  z-index: 500;\n}\n\n#priority{\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: .2vh;\n  color: white;\n}\n.priority{\n  height: 2vh;\n  width: 2vh;\n  margin-bottom: .2vh;\n}\n#priority1, #priority2, #priority3, .priority{\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 1px solid white;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n}\ninput{\n  border-radius: 0.5rem;\n  padding: 1rem 3rem;\n  margin: 0.2rem;\n}\nbutton {\n  display: inline-block;\n  padding: 8px 12px;\n  font-size: 14px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: white;\n  background-color: #1461b7;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 6px rgba(241, 241, 241, 0.519);\n}\n\nbutton:hover {background-color: #4c85c5}\n\nbutton:active {\n  background-color: #4c85c5;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n#createFolder {\n  margin-bottom: 6vh;\n}\n#createTaskForm{\n  margin-bottom: .5vh;\n}\n.taskItem, .priorityContainer{\n  display: flex;\n  align-items: center;\n}\n.priorityContainer{\n  padding-right: 1rem;\n}\n.complete{\n  border: solid #3e970e 3px;\n  border-radius: 0.25rem;\n  margin-left: 1rem;\n  padding: 0.25rem;\n}\n.complete:hover{\n  background-color: #3e970e;\n}\n#listSections{\n  display: flex;\n  position: absolute;\n  left: 20vw;\n  padding: 1rem;\n  color: white;\n  justify-content: space-between;\n  width: 64%;\n  height: 100%;\n}\n.delete{\n    margin-left: 1rem;\n    border: 1px solid #b01f1f;\n    background: #b01f1f;\n    padding: 4px;\n    border-radius: 0.25rem;\n}\n\n@keyframes slideIn {\n  from {left: -50vw;}\n  to {left: 0vw;}\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/elementCreator.js":
/*!*******************************!*\
  !*** ./src/elementCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendE": () => (/* binding */ appendE),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const createElement = (type, attrKey, attrValue, html) => {
  let e = document.createElement(type)
  e.setAttribute(attrKey, attrValue)
  e.innerHTML = html
  return e;
}

const appendE = (parent, child) => {
  parent.append(child)
}

/***/ }),

/***/ "./src/pageLayout.js":
/*!***************************!*\
  !*** ./src/pageLayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "pageLayout": () => (/* binding */ pageLayout)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _taskManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManagement */ "./src/taskManagement.js");




const createLayout = () => {
  const parent = document.getElementById('content');
  const contentContainer = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'contentContainer', '')
  const containerHead = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id','containerHead', '')
  const header = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', 'id', 'header', 'TODO');
  const hamburger = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div','id', 'hamburger', '')
  const bar1 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', 'id', 'bar1', '')
  const bar2 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', 'id', 'bar2', '')
  const bar3 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', 'id', 'bar3', '')
  const bar4 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', 'id', 'bar4', '')
  const popup = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'newFolder', 'Project Name')
  const projectName = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'id', 'projectName', '')
  const projectBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', 'id', 'projectBtn', 'Create Project')
  const taskPopup = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'taskPopup', 'New Task')
  const taskTitle = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'id', 'title', '')
  const taskDescription = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'id', 'description', '')
  const taskDate = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'id', 'date', '')
  const priorityContainer = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'priority', 'Priority');
  const priority1 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'value', '1', '');
  const priority2 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'value', '2', '');
  const priority3 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'value', '3', '');
  const defaultFolder = (0,_taskManagement__WEBPACK_IMPORTED_MODULE_1__.createNewFolder)('default')
  const createTaskBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', 'id', 'createTask', 'Create Task');
  const createTaskFormBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', 'id', 'createTaskForm', 'Create Task')
  const folders = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav', 'id', 'nav', '')
  const defaultFolderElement = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'defaultFolder', 'Default Project')
  const newFolderBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', 'id', 'createFolder', 'Create New Folder')
  const listSections = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'listSections', '')
  const toDoSection = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'toDoSection', '')
  const toDoList = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'toDoList', '')
  const toDoListTitle = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'id', 'toDoListTitle', 'Default')
  const completeSection = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'completeSection', '')
  const completeTitle = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'id', 'completeTitle', 'Completed Tasks')
  const completeList = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'id', 'completeList', '')

  completeSection.style.display = 'none'
  popup.style.display = 'none'
  taskPopup.style.display = 'none';
  taskTitle.placeholder = 'Title';
  taskDescription.placeholder = 'Description';
  priority1.type = 'checkbox'
  priority1.style.backgroundColor = 'green';
  priority1.checked = true
  priority2.type = 'checkbox'
  priority3.type = 'checkbox'
  createTaskFormBtn.dataset.folder = "def"
  defaultFolderElement.setAttribute('data-folder', "def")

  taskDate.setAttribute('type', 'date')
  priority1.setAttribute('id', 'priority1')
  priority2.setAttribute('id', 'priority2')
  priority3.setAttribute('id', 'priority3')

  localStorage.setItem("def", JSON.stringify(defaultFolder))
  localStorage.setItem('def-complete', JSON.stringify(defaultFolder)); 

  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(containerHead, header);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(header, createTaskFormBtn);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(header, hamburger);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(hamburger, bar1);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(hamburger, bar2);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(hamburger, bar3);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(hamburger, bar4);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(contentContainer, folders);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(folders, newFolderBtn);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(folders, defaultFolderElement);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(listSections, toDoSection);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(toDoSection, toDoListTitle);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(toDoSection, toDoList);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(contentContainer, popup);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(popup, projectName);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(popup, projectBtn);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(taskPopup, taskTitle);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(taskPopup, taskDescription);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(taskPopup, taskDate);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(taskPopup, priorityContainer);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(taskPopup, createTaskBtn);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(priorityContainer, priority1);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(priorityContainer, priority2);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(priorityContainer, priority3);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(contentContainer, taskPopup);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(parent, containerHead);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(parent, contentContainer);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(completeSection, completeTitle);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(completeSection, completeList);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(listSections, completeSection);
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(contentContainer, listSections);

  return {hamburger, bar1, bar2, bar3, bar4, popup, projectName, projectBtn, taskPopup, taskTitle, taskDescription,taskDate, priorityContainer, priority1, priority2, priority3, defaultFolder, createTaskBtn, createTaskFormBtn,folders, defaultFolderElement, newFolderBtn, toDoList, completeSection, completeTitle, completeList, toDoListTitle}
}

const pageLayout = createLayout();


const listen = () => {
  pageLayout.hamburger.addEventListener('click', () => {
    if(pageLayout.folders.className != 'nav'){
      pageLayout.folders.className = 'nav';
      pageLayout.bar1.style.transformOrigin = '5%';
      pageLayout.bar1.style.transform = 'rotate(45deg)'
      pageLayout.bar1.style.width = '24px'
      pageLayout.bar1.style.backgroundColor = 'rgb(217, 68, 66)'
      pageLayout.bar2.style.transform = 'rotate(-45deg)'
      pageLayout.bar2.style.backgroundColor = 'transparent'
      pageLayout.bar3.style.transform = 'rotate(45deg)'
      pageLayout.bar3.style.backgroundColor = 'transparent'
      pageLayout.bar4.style.transformOrigin = '5%';
      pageLayout.bar4.style.transform = 'rotate(-45deg)'
      pageLayout.bar4.style.width = '24px'
      pageLayout.bar4.style.backgroundColor = 'rgb(217, 68, 66)'
    }else{
      pageLayout.folders.className = '';
      pageLayout.bar1.style.transform = 'rotate(0deg)'
      pageLayout.bar1.style.width = '30px'
      pageLayout.bar1.style.backgroundColor = 'white'
      pageLayout.bar2.style.transform = 'rotate(0deg)'
      pageLayout.bar2.style.backgroundColor = 'white'
      pageLayout.bar3.style.transform = 'rotate(0deg)'
      pageLayout.bar3.style.backgroundColor = 'white'
      pageLayout.bar4.style.transform = 'rotate(0deg)'
      pageLayout.bar4.style.width = '30px'
      pageLayout.bar4.style.backgroundColor = 'white'
    }
  })

  pageLayout.newFolderBtn.addEventListener('click', newProjectFolder)
  pageLayout.createTaskFormBtn.addEventListener('click', showTaskForm)

  pageLayout.defaultFolderElement.addEventListener('click', () => {
    pageLayout.createTaskFormBtn.setAttribute('data-folder', 
    pageLayout.defaultFolderElement.dataset.folder);
    showCurrentFolderTask();
  });

  pageLayout.priority1.addEventListener('click', () => {
    pageLayout.priority1.checked = true;
  });

  pageLayout.priority2.addEventListener('click', () => {
    if(pageLayout.priority2.style.backgroundColor != 'yellow'){
      pageLayout.priority2.style.backgroundColor = 'yellow';
      pageLayout.priority2.checked = true;
    } else {
      pageLayout.priority2.style.backgroundColor = 'inherit';
      pageLayout.priority2.checked = false;
      pageLayout.priority3.style.backgroundColor = 'inherit';
      pageLayout.priority3.checked = false;
    }
  });

  pageLayout.priority3.addEventListener('click', () => {
    if(pageLayout.priority3.style.backgroundColor != 'red'
      && pageLayout.priority2.style.backgroundColor != 'yellow'){
      pageLayout.priority3.style.backgroundColor = 'red';
      pageLayout.priority2.style.backgroundColor = 'yellow';
      pageLayout.priority3.checked = true;
      pageLayout.priority2.checked = true; 
    }else if(pageLayout.priority3.style.backgroundColor != 'red'){
      pageLayout.priority3.style.backgroundColor = 'red';
      pageLayout.priority3.checked = true;
    } else {
      pageLayout.priority3.style.backgroundColor = 'inherit';
      pageLayout.priority3.checked = false;
    }
  });
};
const newProjectFolder = () => {
  pageLayout.popup.style.display = 'flex';
  pageLayout.projectBtn.addEventListener('click', fireFolder)
  document.addEventListener('click', closeFolderForm);
  function closeFolderForm(e) {
    if(!pageLayout.popup.contains(e.target) && pageLayout.newFolderBtn.contains(e.target)
     || pageLayout.popup.contains(e.target) && !pageLayout.newFolderBtn.contains(e.target)){
      pageLayout.popup.style.display = 'flex';
    }else {
      document.removeEventListener('click', closeFolderForm);
      pageLayout.popup.style.display = 'none'
    }
  };

  function fireFolder() {
    pageLayout.projectBtn.removeEventListener('click', fireFolder)
    let name = pageLayout.projectName.value
    let newFolder = (0,_taskManagement__WEBPACK_IMPORTED_MODULE_1__.createNewFolder)(name);
    let newFolderE = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'class', 'folder', name)

    pageLayout.popup.style.display = 'none';

    pageLayout.createTaskFormBtn.setAttribute('data-folder', name)
    newFolderE.setAttribute('data-folder', name)
    pageLayout.toDoListTitle.innerHTML = name
    ;(0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(pageLayout.folders, newFolderE);
    localStorage.setItem(name, JSON.stringify(newFolder))
    localStorage.setItem(`${name}-complete`, JSON.stringify(newFolder))
    newFolderE.addEventListener('click', (e) => {
      pageLayout.createTaskFormBtn.setAttribute('data-folder', e.target.dataset.folder)

      showCurrentFolderTask();
    })
    pageLayout.projectName.value = '';
    pageLayout.popup.style.display = 'none'
    document.removeEventListener('click', closeFolderForm);
    showCurrentFolderTask();
  }
}

function showTaskForm() {
  document.addEventListener('click', closeTaskForm);
  pageLayout.createTaskBtn.addEventListener('click', fireTaskOff)
}

function closeTaskForm(e){
  if(!pageLayout.taskPopup.contains(e.target) && pageLayout.createTaskFormBtn.contains(e.target)
     || pageLayout.taskPopup.contains(e.target) && !pageLayout.createTaskFormBtn.contains(e.target)){
    pageLayout.taskPopup.style.display = 'flex';
  }else {
    pageLayout.taskPopup.style.display = 'none'
    document.removeEventListener('mouseup', closeTaskForm);
  }
}

const fireTaskOff = () => {
  let folder = pageLayout.createTaskFormBtn.dataset.folder
  let title = pageLayout.taskTitle.value
  let description = pageLayout.taskDescription.value
  // console.log(format(new Date(pageLayout.taskDate.value), 'MM/dd/yyyy'))
  //get date format to work properly.#####################################
  let date = pageLayout.taskDate.value
  console.log(date)
  let priority1 = pageLayout.priority1
  let priority2 = pageLayout.priority2
  let priority3 = pageLayout.priority3

  if(priority3.checked == true){
    let newTask = (0,_taskManagement__WEBPACK_IMPORTED_MODULE_1__.createATask)(title, description, date, priority3.value);
    let obj = JSON.parse(localStorage.getItem(folder))
    obj.taskFolder.push(newTask);
    localStorage.setItem(folder, JSON.stringify(obj))
  } else if(priority2.checked == true){
    let newTask = (0,_taskManagement__WEBPACK_IMPORTED_MODULE_1__.createATask)(title, description, date, priority2.value);
    let obj = JSON.parse(localStorage.getItem(folder))
    obj.taskFolder.push(newTask);
    localStorage.setItem(folder, JSON.stringify(obj))
  } else {
    let newTask = (0,_taskManagement__WEBPACK_IMPORTED_MODULE_1__.createATask)(title, description, date, priority1.value);
    let obj = JSON.parse(localStorage.getItem(folder))
    obj.taskFolder.push(newTask);
    localStorage.setItem(folder, JSON.stringify(obj))
  }
  pageLayout.taskTitle.value = ''
  pageLayout.taskDescription.value = ''
  pageLayout.taskDate.value = ''
  pageLayout.priority2.style.background = 'inherit'
  pageLayout.priority2.checked = false
  pageLayout.priority3.style.background = 'inherit';
  pageLayout.priority3.checked = false 
  pageLayout.taskPopup.style.display = 'none';
  showCurrentFolderTask()
  document.removeEventListener('click', closeTaskForm);
};

function showCurrentFolderTask() {
  let key = document.getElementById('createTaskForm').dataset.folder
  let obj = JSON.parse(localStorage.getItem(key))
  let tasks = obj.taskFolder
  key == 'def' ? pageLayout.toDoListTitle.innerHTML = 'Default' : pageLayout.toDoListTitle.innerHTML = key;
  addToDisplay(tasks, key)
}

function addToDisplay(tasks, key){
  pageLayout.toDoList.innerHTML = ''
  if(tasks.length != 0){
    tasks.forEach((e, index) => {
      let html = createProperHTML(e)
      let task = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'class', 'taskItem', html)
      let complete = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'class', 'complete', 'complete')     
      completeBtn(complete, key, index)
      task.prepend(createPriority(e.priority, key, index))
      ;(0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(task, complete)
      ;(0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(pageLayout.toDoList, task)
    })
  }
  updateCompeletUI(key);


  function completeBtn(complete, key, index){
    
    complete.addEventListener('click', completeTask)

    function completeTask(e){
      let obj = JSON.parse(localStorage.getItem(key))
      let completedTask = obj.taskFolder.splice(index, 1)
      let completedList = JSON.parse(localStorage.getItem(`${key}-complete`))
      completedList.taskFolder.push(completedTask[0])
      localStorage.setItem(`${key}-complete`, JSON.stringify(completedList));
      localStorage.setItem(key, JSON.stringify(obj))
      showCurrentFolderTask();
    }
  }

  function updateCompeletUI(key){
    let setCompleteKey = `${key}-complete`
    let completedTasks = JSON.parse(localStorage.getItem(setCompleteKey))
    if(completedTasks.taskFolder.length > 0){
      pageLayout.completeList.innerHTML = '';
      pageLayout.completeSection.style.display = 'block'
      completedTasks.taskFolder.forEach(task => {
        let html = createProperHTML(task)
        let e = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'class', 'taskItem', `${html}`)
        let destroy = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'class', 'delete', 'delete')
        createDestroyBtn(destroy, setCompleteKey, completedTasks.taskFolder.length - 1)
        e.prepend(createPriority(task.priority, setCompleteKey, '', false))
        ;(0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(pageLayout.completeList, e);
        (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(e, destroy)
      });
    }else{
      pageLayout.completeSection.style.display = 'none';
    };
  };

  function createDestroyBtn(button, key, index){
    button.addEventListener('click', deleteTask)
    function deleteTask(e){
      let task = JSON.parse(localStorage.getItem(key));
      task.taskFolder.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(task));
      showCurrentFolderTask();
    }
  }

  function createProperHTML(e){
    return JSON.stringify(e.title + " " + e.description + " " + e.date).replace(/^"(.*)"$/, '$1')
  };

  function createPriority(taskPriority, key, index, listeners=true) {
    let priority = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'class', 'priorityContainer', '');
    let priority1 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'value', '1', '');
    priority1.type = 'checkbox'
    priority1.checked = true
    priority1.style.backgroundColor = 'green';
    priority1.setAttribute('class', 'priority')

    let priority2 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'value', '2', '');
    priority2.type = 'checkbox'
    priority2.checked = false
    priority2.style.backgroundColor = 'inherit';
    priority2.setAttribute('class', 'priority')

    let priority3 = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', 'value', '3', '');
    priority3.type = 'checkbox'
    priority3.checked = false
    priority3.style.backgroundColor = 'inherit';
    priority3.setAttribute('class', 'priority')

    ;(0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(priority, priority1)
    ;(0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(priority, priority2)
    ;(0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.appendE)(priority, priority3)

    if(listeners == true){
    addPriorityListeners(priority1, priority2, priority3, index, key);
    }

    let task = taskPriority.match(/\d/g)[0];
    if(task == 1){
      return priority;
    } else if(task == 2){
      priority2.checked = true
      priority2.style.backgroundColor = 'yellow'
      return priority;
    } else {
      priority2.checked = true
      priority2.style.backgroundColor = 'yellow'
      priority3.checked = true
      priority3.style.backgroundColor = 'red'
      return priority;
    }
  }

  function addPriorityListeners(priority1, priority2, priority3, index, key){
    let obj = JSON.parse(localStorage.getItem(key))
    priority1.addEventListener('click', () => {
      priority2.checked = false
      priority3.check = false
      priority2.style.backgroundColor = 'inherit'
      priority3.style.backgroundColor = 'inherit'
      obj.taskFolder[index].priority = '1'
      localStorage.setItem(key, JSON.stringify(obj))
    });
    priority2.addEventListener('click', () => {
      priority2.checked = true
      priority3.check = false
      priority2.style.backgroundColor = 'yellow'
      priority3.style.backgroundColor = 'inherit'
      obj.taskFolder[index].priority = '2'
      localStorage.setItem(key, JSON.stringify(obj))
    });
    priority3.addEventListener('click', () => {
      priority2.checked = true
      priority3.check = true
      priority2.style.backgroundColor = 'yellow'
      priority3.style.backgroundColor = 'red'
      obj.taskFolder[index].priority = '3'
      localStorage.setItem(key, JSON.stringify(obj))
    });
  };
}

/***/ }),

/***/ "./src/taskManagement.js":
/*!*******************************!*\
  !*** ./src/taskManagement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createATask": () => (/* binding */ createATask),
/* harmony export */   "createNewFolder": () => (/* binding */ createNewFolder)
/* harmony export */ });
const createNewFolder = (folder) => {
  let taskFolder = [];
  return {
  folder,
  taskFolder
  }
}

const createATask = (title, description, date, priority) =>{
  return{
    title,
    description,
    date,
    priority
  }
}



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLayout */ "./src/pageLayout.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// import { createElement, appendE } from "./elementCreator";



_pageLayout__WEBPACK_IMPORTED_MODULE_0__.pageLayout;
(0,_pageLayout__WEBPACK_IMPORTED_MODULE_0__.listen)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQUEsWUFBWSx5QkFBeUI7QUFDWTtBQUM1Qjs7QUFFckIsbURBQVU7QUFDVixtREFBTSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbmJvZHl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG59XFxuI2NvbnRlbnRDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbmF2Lm5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDM3LCAzNywgMC44NjYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogM3ZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcbiNuYXZ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDA7XFxufVxcbiNoYW1idXJnZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDApO1xcbn1cXG4jYmFyMSwjYmFyMiwgI2JhcjMsICNiYXI0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luOiAycHggMnB4IDJweCAycHg7XFxufVxcblxcbiNoZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDM3LCAzNywgMC44NjYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgcGFkZGluZy1yaWdodDogMXZ3O1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbn1cXG4jbmV3Rm9sZGVye1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDM3LCAzNywgMC44NjYpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzB2aDtcXG4gIGxlZnQ6IDQwdnc7XFxuICBwYWRkaW5nOiAydnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMjJyZW07XFxuICBoZWlnaHQ6IDEycmVtO1xcbiAgei1pbmRleDogNTAwO1xcbn1cXG4jdGFza1BvcHVwe1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogYXV0bztcXG4gIHdpZHRoOiAyOHJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAydnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAzNywgMzcsIDAuODY2KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0b3A6IDEzcmVtO1xcbiAgbGVmdDogMzh2dztcXG4gIHotaW5kZXg6IDUwMDtcXG59XFxuXFxuI3ByaW9yaXR5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IC4ydmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcmlvcml0eXtcXG4gIGhlaWdodDogMnZoO1xcbiAgd2lkdGg6IDJ2aDtcXG4gIG1hcmdpbi1ib3R0b206IC4ydmg7XFxufVxcbiNwcmlvcml0eTEsICNwcmlvcml0eTIsICNwcmlvcml0eTMsIC5wcmlvcml0eXtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbmlucHV0e1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgbWFyZ2luOiAwLjJyZW07XFxufVxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2MWI3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC41MTkpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICM0Yzg1YzV9XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4NWM1O1xcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG4jY3JlYXRlRm9sZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDZ2aDtcXG59XFxuI2NyZWF0ZVRhc2tGb3Jte1xcbiAgbWFyZ2luLWJvdHRvbTogLjV2aDtcXG59XFxuLnRhc2tJdGVtLCAucHJpb3JpdHlDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByaW9yaXR5Q29udGFpbmVye1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLmNvbXBsZXRle1xcbiAgYm9yZGVyOiBzb2xpZCAjM2U5NzBlIDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcbi5jb21wbGV0ZTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTk3MGU7XFxufVxcbiNsaXN0U2VjdGlvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjB2dztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNjQlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IwMWYxZjtcXG4gICAgYmFja2dyb3VuZDogI2IwMWYxZjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgZnJvbSB7bGVmdDogLTUwdnc7fVxcbiAgdG8ge2xlZnQ6IDB2dzt9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDViw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLHVCQUF1Qjs7QUFFekI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE1BQU07QUFDUjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDOztBQUVBLGNBQWMseUJBQXlCOztBQUV2QztFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLE1BQU0sV0FBVyxDQUFDO0VBQ2xCLElBQUksU0FBUyxDQUFDO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbmJvZHl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG59XFxuI2NvbnRlbnRDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbmF2Lm5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDM3LCAzNywgMC44NjYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogM3ZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxufVxcbiNuYXZ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDA7XFxufVxcbiNoYW1idXJnZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDApO1xcbn1cXG4jYmFyMSwjYmFyMiwgI2JhcjMsICNiYXI0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luOiAycHggMnB4IDJweCAycHg7XFxufVxcblxcbiNoZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDM3LCAzNywgMC44NjYpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgcGFkZGluZy1yaWdodDogMXZ3O1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbn1cXG4jbmV3Rm9sZGVye1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDM3LCAzNywgMC44NjYpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzB2aDtcXG4gIGxlZnQ6IDQwdnc7XFxuICBwYWRkaW5nOiAydnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMjJyZW07XFxuICBoZWlnaHQ6IDEycmVtO1xcbiAgei1pbmRleDogNTAwO1xcbn1cXG4jdGFza1BvcHVwe1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogYXV0bztcXG4gIHdpZHRoOiAyOHJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAydnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM4LCAzNywgMzcsIDAuODY2KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0b3A6IDEzcmVtO1xcbiAgbGVmdDogMzh2dztcXG4gIHotaW5kZXg6IDUwMDtcXG59XFxuXFxuI3ByaW9yaXR5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IC4ydmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcmlvcml0eXtcXG4gIGhlaWdodDogMnZoO1xcbiAgd2lkdGg6IDJ2aDtcXG4gIG1hcmdpbi1ib3R0b206IC4ydmg7XFxufVxcbiNwcmlvcml0eTEsICNwcmlvcml0eTIsICNwcmlvcml0eTMsIC5wcmlvcml0eXtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbmlucHV0e1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgbWFyZ2luOiAwLjJyZW07XFxufVxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2MWI3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC41MTkpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICM0Yzg1YzV9XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4NWM1O1xcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG4jY3JlYXRlRm9sZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDZ2aDtcXG59XFxuI2NyZWF0ZVRhc2tGb3Jte1xcbiAgbWFyZ2luLWJvdHRvbTogLjV2aDtcXG59XFxuLnRhc2tJdGVtLCAucHJpb3JpdHlDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByaW9yaXR5Q29udGFpbmVye1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLmNvbXBsZXRle1xcbiAgYm9yZGVyOiBzb2xpZCAjM2U5NzBlIDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcbi5jb21wbGV0ZTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTk3MGU7XFxufVxcbiNsaXN0U2VjdGlvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjB2dztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNjQlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZGVsZXRle1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IwMWYxZjtcXG4gICAgYmFja2dyb3VuZDogI2IwMWYxZjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgZnJvbSB7bGVmdDogLTUwdnc7fVxcbiAgdG8ge2xlZnQ6IDB2dzt9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cktleSwgYXR0clZhbHVlLCBodG1sKSA9PiB7XG4gIGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICBlLnNldEF0dHJpYnV0ZShhdHRyS2V5LCBhdHRyVmFsdWUpXG4gIGUuaW5uZXJIVE1MID0gaHRtbFxuICByZXR1cm4gZTtcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZEUgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICBwYXJlbnQuYXBwZW5kKGNoaWxkKVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFwcGVuZEUgfSBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3Rm9sZGVyLCBjcmVhdGVBVGFzayB9IGZyb20gXCIuL3Rhc2tNYW5hZ2VtZW50XCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IGNyZWF0ZUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpZCcsICdjb250ZW50Q29udGFpbmVyJywgJycpXG4gIGNvbnN0IGNvbnRhaW5lckhlYWQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaWQnLCdjb250YWluZXJIZWFkJywgJycpXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsICdpZCcsICdoZWFkZXInLCAnVE9ETycpO1xuICBjb25zdCBoYW1idXJnZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdpZCcsICdoYW1idXJnZXInLCAnJylcbiAgY29uc3QgYmFyMSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnaWQnLCAnYmFyMScsICcnKVxuICBjb25zdCBiYXIyID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICdpZCcsICdiYXIyJywgJycpXG4gIGNvbnN0IGJhcjMgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgJ2lkJywgJ2JhcjMnLCAnJylcbiAgY29uc3QgYmFyNCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAnaWQnLCAnYmFyNCcsICcnKVxuICBjb25zdCBwb3B1cCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpZCcsICduZXdGb2xkZXInLCAnUHJvamVjdCBOYW1lJylcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpZCcsICdwcm9qZWN0TmFtZScsICcnKVxuICBjb25zdCBwcm9qZWN0QnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2lkJywgJ3Byb2plY3RCdG4nLCAnQ3JlYXRlIFByb2plY3QnKVxuICBjb25zdCB0YXNrUG9wdXAgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaWQnLCAndGFza1BvcHVwJywgJ05ldyBUYXNrJylcbiAgY29uc3QgdGFza1RpdGxlID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaWQnLCAndGl0bGUnLCAnJylcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAnaWQnLCAnZGVzY3JpcHRpb24nLCAnJylcbiAgY29uc3QgdGFza0RhdGUgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsICdpZCcsICdkYXRlJywgJycpXG4gIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2lkJywgJ3ByaW9yaXR5JywgJ1ByaW9yaXR5Jyk7XG4gIGNvbnN0IHByaW9yaXR5MSA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3ZhbHVlJywgJzEnLCAnJyk7XG4gIGNvbnN0IHByaW9yaXR5MiA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3ZhbHVlJywgJzInLCAnJyk7XG4gIGNvbnN0IHByaW9yaXR5MyA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ3ZhbHVlJywgJzMnLCAnJyk7XG4gIGNvbnN0IGRlZmF1bHRGb2xkZXIgPSBjcmVhdGVOZXdGb2xkZXIoJ2RlZmF1bHQnKVxuICBjb25zdCBjcmVhdGVUYXNrQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2lkJywgJ2NyZWF0ZVRhc2snLCAnQ3JlYXRlIFRhc2snKTtcbiAgY29uc3QgY3JlYXRlVGFza0Zvcm1CdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnaWQnLCAnY3JlYXRlVGFza0Zvcm0nLCAnQ3JlYXRlIFRhc2snKVxuICBjb25zdCBmb2xkZXJzID0gY3JlYXRlRWxlbWVudCgnbmF2JywgJ2lkJywgJ25hdicsICcnKVxuICBjb25zdCBkZWZhdWx0Rm9sZGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpZCcsICdkZWZhdWx0Rm9sZGVyJywgJ0RlZmF1bHQgUHJvamVjdCcpXG4gIGNvbnN0IG5ld0ZvbGRlckJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdpZCcsICdjcmVhdGVGb2xkZXInLCAnQ3JlYXRlIE5ldyBGb2xkZXInKVxuICBjb25zdCBsaXN0U2VjdGlvbnMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaWQnLCAnbGlzdFNlY3Rpb25zJywgJycpXG4gIGNvbnN0IHRvRG9TZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2lkJywgJ3RvRG9TZWN0aW9uJywgJycpXG4gIGNvbnN0IHRvRG9MaXN0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2lkJywgJ3RvRG9MaXN0JywgJycpXG4gIGNvbnN0IHRvRG9MaXN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMycsICdpZCcsICd0b0RvTGlzdFRpdGxlJywgJ0RlZmF1bHQnKVxuICBjb25zdCBjb21wbGV0ZVNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaWQnLCAnY29tcGxldGVTZWN0aW9uJywgJycpXG4gIGNvbnN0IGNvbXBsZXRlVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMycsICdpZCcsICdjb21wbGV0ZVRpdGxlJywgJ0NvbXBsZXRlZCBUYXNrcycpXG4gIGNvbnN0IGNvbXBsZXRlTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpZCcsICdjb21wbGV0ZUxpc3QnLCAnJylcblxuICBjb21wbGV0ZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIHRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0YXNrVGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xuICB0YXNrRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICBwcmlvcml0eTEudHlwZSA9ICdjaGVja2JveCdcbiAgcHJpb3JpdHkxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gIHByaW9yaXR5MS5jaGVja2VkID0gdHJ1ZVxuICBwcmlvcml0eTIudHlwZSA9ICdjaGVja2JveCdcbiAgcHJpb3JpdHkzLnR5cGUgPSAnY2hlY2tib3gnXG4gIGNyZWF0ZVRhc2tGb3JtQnRuLmRhdGFzZXQuZm9sZGVyID0gXCJkZWZcIlxuICBkZWZhdWx0Rm9sZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9sZGVyJywgXCJkZWZcIilcblxuICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gIHByaW9yaXR5MS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5MScpXG4gIHByaW9yaXR5Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5MicpXG4gIHByaW9yaXR5My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5MycpXG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWZcIiwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEZvbGRlcikpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWYtY29tcGxldGUnLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0Rm9sZGVyKSk7IFxuXG4gIGFwcGVuZEUoY29udGFpbmVySGVhZCwgaGVhZGVyKTtcbiAgYXBwZW5kRShoZWFkZXIsIGNyZWF0ZVRhc2tGb3JtQnRuKTtcbiAgYXBwZW5kRShoZWFkZXIsIGhhbWJ1cmdlcik7XG4gIGFwcGVuZEUoaGFtYnVyZ2VyLCBiYXIxKTtcbiAgYXBwZW5kRShoYW1idXJnZXIsIGJhcjIpO1xuICBhcHBlbmRFKGhhbWJ1cmdlciwgYmFyMyk7XG4gIGFwcGVuZEUoaGFtYnVyZ2VyLCBiYXI0KTtcbiAgYXBwZW5kRShjb250ZW50Q29udGFpbmVyLCBmb2xkZXJzKTtcbiAgYXBwZW5kRShmb2xkZXJzLCBuZXdGb2xkZXJCdG4pO1xuICBhcHBlbmRFKGZvbGRlcnMsIGRlZmF1bHRGb2xkZXJFbGVtZW50KTtcbiAgYXBwZW5kRShsaXN0U2VjdGlvbnMsIHRvRG9TZWN0aW9uKTtcbiAgYXBwZW5kRSh0b0RvU2VjdGlvbiwgdG9Eb0xpc3RUaXRsZSk7XG4gIGFwcGVuZEUodG9Eb1NlY3Rpb24sIHRvRG9MaXN0KTtcbiAgYXBwZW5kRShjb250ZW50Q29udGFpbmVyLCBwb3B1cCk7XG4gIGFwcGVuZEUocG9wdXAsIHByb2plY3ROYW1lKTtcbiAgYXBwZW5kRShwb3B1cCwgcHJvamVjdEJ0bik7XG4gIGFwcGVuZEUodGFza1BvcHVwLCB0YXNrVGl0bGUpO1xuICBhcHBlbmRFKHRhc2tQb3B1cCwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgYXBwZW5kRSh0YXNrUG9wdXAsIHRhc2tEYXRlKTtcbiAgYXBwZW5kRSh0YXNrUG9wdXAsIHByaW9yaXR5Q29udGFpbmVyKTtcbiAgYXBwZW5kRSh0YXNrUG9wdXAsIGNyZWF0ZVRhc2tCdG4pO1xuICBhcHBlbmRFKHByaW9yaXR5Q29udGFpbmVyLCBwcmlvcml0eTEpO1xuICBhcHBlbmRFKHByaW9yaXR5Q29udGFpbmVyLCBwcmlvcml0eTIpO1xuICBhcHBlbmRFKHByaW9yaXR5Q29udGFpbmVyLCBwcmlvcml0eTMpO1xuICBhcHBlbmRFKGNvbnRlbnRDb250YWluZXIsIHRhc2tQb3B1cCk7XG4gIGFwcGVuZEUocGFyZW50LCBjb250YWluZXJIZWFkKTtcbiAgYXBwZW5kRShwYXJlbnQsIGNvbnRlbnRDb250YWluZXIpO1xuICBhcHBlbmRFKGNvbXBsZXRlU2VjdGlvbiwgY29tcGxldGVUaXRsZSk7XG4gIGFwcGVuZEUoY29tcGxldGVTZWN0aW9uLCBjb21wbGV0ZUxpc3QpO1xuICBhcHBlbmRFKGxpc3RTZWN0aW9ucywgY29tcGxldGVTZWN0aW9uKTtcbiAgYXBwZW5kRShjb250ZW50Q29udGFpbmVyLCBsaXN0U2VjdGlvbnMpO1xuXG4gIHJldHVybiB7aGFtYnVyZ2VyLCBiYXIxLCBiYXIyLCBiYXIzLCBiYXI0LCBwb3B1cCwgcHJvamVjdE5hbWUsIHByb2plY3RCdG4sIHRhc2tQb3B1cCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sdGFza0RhdGUsIHByaW9yaXR5Q29udGFpbmVyLCBwcmlvcml0eTEsIHByaW9yaXR5MiwgcHJpb3JpdHkzLCBkZWZhdWx0Rm9sZGVyLCBjcmVhdGVUYXNrQnRuLCBjcmVhdGVUYXNrRm9ybUJ0bixmb2xkZXJzLCBkZWZhdWx0Rm9sZGVyRWxlbWVudCwgbmV3Rm9sZGVyQnRuLCB0b0RvTGlzdCwgY29tcGxldGVTZWN0aW9uLCBjb21wbGV0ZVRpdGxlLCBjb21wbGV0ZUxpc3QsIHRvRG9MaXN0VGl0bGV9XG59XG5cbmV4cG9ydCBjb25zdCBwYWdlTGF5b3V0ID0gY3JlYXRlTGF5b3V0KCk7XG5cblxuZXhwb3J0IGNvbnN0IGxpc3RlbiA9ICgpID0+IHtcbiAgcGFnZUxheW91dC5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYocGFnZUxheW91dC5mb2xkZXJzLmNsYXNzTmFtZSAhPSAnbmF2Jyl7XG4gICAgICBwYWdlTGF5b3V0LmZvbGRlcnMuY2xhc3NOYW1lID0gJ25hdic7XG4gICAgICBwYWdlTGF5b3V0LmJhcjEuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJzUlJztcbiAgICAgIHBhZ2VMYXlvdXQuYmFyMS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDQ1ZGVnKSdcbiAgICAgIHBhZ2VMYXlvdXQuYmFyMS5zdHlsZS53aWR0aCA9ICcyNHB4J1xuICAgICAgcGFnZUxheW91dC5iYXIxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjE3LCA2OCwgNjYpJ1xuICAgICAgcGFnZUxheW91dC5iYXIyLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTQ1ZGVnKSdcbiAgICAgIHBhZ2VMYXlvdXQuYmFyMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnXG4gICAgICBwYWdlTGF5b3V0LmJhcjMuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg0NWRlZyknXG4gICAgICBwYWdlTGF5b3V0LmJhcjMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50J1xuICAgICAgcGFnZUxheW91dC5iYXI0LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICc1JSc7XG4gICAgICBwYWdlTGF5b3V0LmJhcjQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtNDVkZWcpJ1xuICAgICAgcGFnZUxheW91dC5iYXI0LnN0eWxlLndpZHRoID0gJzI0cHgnXG4gICAgICBwYWdlTGF5b3V0LmJhcjQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyMTcsIDY4LCA2NiknXG4gICAgfWVsc2V7XG4gICAgICBwYWdlTGF5b3V0LmZvbGRlcnMuY2xhc3NOYW1lID0gJyc7XG4gICAgICBwYWdlTGF5b3V0LmJhcjEuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSdcbiAgICAgIHBhZ2VMYXlvdXQuYmFyMS5zdHlsZS53aWR0aCA9ICczMHB4J1xuICAgICAgcGFnZUxheW91dC5iYXIxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcbiAgICAgIHBhZ2VMYXlvdXQuYmFyMi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xuICAgICAgcGFnZUxheW91dC5iYXIyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcbiAgICAgIHBhZ2VMYXlvdXQuYmFyMy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xuICAgICAgcGFnZUxheW91dC5iYXIzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcbiAgICAgIHBhZ2VMYXlvdXQuYmFyNC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xuICAgICAgcGFnZUxheW91dC5iYXI0LnN0eWxlLndpZHRoID0gJzMwcHgnXG4gICAgICBwYWdlTGF5b3V0LmJhcjQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xuICAgIH1cbiAgfSlcblxuICBwYWdlTGF5b3V0Lm5ld0ZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3RGb2xkZXIpXG4gIHBhZ2VMYXlvdXQuY3JlYXRlVGFza0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VGFza0Zvcm0pXG5cbiAgcGFnZUxheW91dC5kZWZhdWx0Rm9sZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwYWdlTGF5b3V0LmNyZWF0ZVRhc2tGb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1mb2xkZXInLCBcbiAgICBwYWdlTGF5b3V0LmRlZmF1bHRGb2xkZXJFbGVtZW50LmRhdGFzZXQuZm9sZGVyKTtcbiAgICBzaG93Q3VycmVudEZvbGRlclRhc2soKTtcbiAgfSk7XG5cbiAgcGFnZUxheW91dC5wcmlvcml0eTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGFnZUxheW91dC5wcmlvcml0eTEuY2hlY2tlZCA9IHRydWU7XG4gIH0pO1xuXG4gIHBhZ2VMYXlvdXQucHJpb3JpdHkyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHBhZ2VMYXlvdXQucHJpb3JpdHkyLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPSAneWVsbG93Jyl7XG4gICAgICBwYWdlTGF5b3V0LnByaW9yaXR5Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgICAgIHBhZ2VMYXlvdXQucHJpb3JpdHkyLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlTGF5b3V0LnByaW9yaXR5Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XG4gICAgICBwYWdlTGF5b3V0LnByaW9yaXR5Mi5jaGVja2VkID0gZmFsc2U7XG4gICAgICBwYWdlTGF5b3V0LnByaW9yaXR5My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XG4gICAgICBwYWdlTGF5b3V0LnByaW9yaXR5My5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICBwYWdlTGF5b3V0LnByaW9yaXR5My5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihwYWdlTGF5b3V0LnByaW9yaXR5My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT0gJ3JlZCdcbiAgICAgICYmIHBhZ2VMYXlvdXQucHJpb3JpdHkyLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPSAneWVsbG93Jyl7XG4gICAgICBwYWdlTGF5b3V0LnByaW9yaXR5My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgIHBhZ2VMYXlvdXQucHJpb3JpdHkyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xuICAgICAgcGFnZUxheW91dC5wcmlvcml0eTMuY2hlY2tlZCA9IHRydWU7XG4gICAgICBwYWdlTGF5b3V0LnByaW9yaXR5Mi5jaGVja2VkID0gdHJ1ZTsgXG4gICAgfWVsc2UgaWYocGFnZUxheW91dC5wcmlvcml0eTMuc3R5bGUuYmFja2dyb3VuZENvbG9yICE9ICdyZWQnKXtcbiAgICAgIHBhZ2VMYXlvdXQucHJpb3JpdHkzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgcGFnZUxheW91dC5wcmlvcml0eTMuY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VMYXlvdXQucHJpb3JpdHkzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcbiAgICAgIHBhZ2VMYXlvdXQucHJpb3JpdHkzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IG5ld1Byb2plY3RGb2xkZXIgPSAoKSA9PiB7XG4gIHBhZ2VMYXlvdXQucG9wdXAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgcGFnZUxheW91dC5wcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlyZUZvbGRlcilcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvbGRlckZvcm0pO1xuICBmdW5jdGlvbiBjbG9zZUZvbGRlckZvcm0oZSkge1xuICAgIGlmKCFwYWdlTGF5b3V0LnBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBwYWdlTGF5b3V0Lm5ld0ZvbGRlckJ0bi5jb250YWlucyhlLnRhcmdldClcbiAgICAgfHwgcGFnZUxheW91dC5wb3B1cC5jb250YWlucyhlLnRhcmdldCkgJiYgIXBhZ2VMYXlvdXQubmV3Rm9sZGVyQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSl7XG4gICAgICBwYWdlTGF5b3V0LnBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfWVsc2Uge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvbGRlckZvcm0pO1xuICAgICAgcGFnZUxheW91dC5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGZpcmVGb2xkZXIoKSB7XG4gICAgcGFnZUxheW91dC5wcm9qZWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlyZUZvbGRlcilcbiAgICBsZXQgbmFtZSA9IHBhZ2VMYXlvdXQucHJvamVjdE5hbWUudmFsdWVcbiAgICBsZXQgbmV3Rm9sZGVyID0gY3JlYXRlTmV3Rm9sZGVyKG5hbWUpO1xuICAgIGxldCBuZXdGb2xkZXJFID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NsYXNzJywgJ2ZvbGRlcicsIG5hbWUpXG5cbiAgICBwYWdlTGF5b3V0LnBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBwYWdlTGF5b3V0LmNyZWF0ZVRhc2tGb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1mb2xkZXInLCBuYW1lKVxuICAgIG5ld0ZvbGRlckUuc2V0QXR0cmlidXRlKCdkYXRhLWZvbGRlcicsIG5hbWUpXG4gICAgcGFnZUxheW91dC50b0RvTGlzdFRpdGxlLmlubmVySFRNTCA9IG5hbWVcbiAgICBhcHBlbmRFKHBhZ2VMYXlvdXQuZm9sZGVycywgbmV3Rm9sZGVyRSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkobmV3Rm9sZGVyKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtuYW1lfS1jb21wbGV0ZWAsIEpTT04uc3RyaW5naWZ5KG5ld0ZvbGRlcikpXG4gICAgbmV3Rm9sZGVyRS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBwYWdlTGF5b3V0LmNyZWF0ZVRhc2tGb3JtQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1mb2xkZXInLCBlLnRhcmdldC5kYXRhc2V0LmZvbGRlcilcblxuICAgICAgc2hvd0N1cnJlbnRGb2xkZXJUYXNrKCk7XG4gICAgfSlcbiAgICBwYWdlTGF5b3V0LnByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gICAgcGFnZUxheW91dC5wb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvbGRlckZvcm0pO1xuICAgIHNob3dDdXJyZW50Rm9sZGVyVGFzaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tGb3JtKTtcbiAgcGFnZUxheW91dC5jcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlyZVRhc2tPZmYpXG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oZSl7XG4gIGlmKCFwYWdlTGF5b3V0LnRhc2tQb3B1cC5jb250YWlucyhlLnRhcmdldCkgJiYgcGFnZUxheW91dC5jcmVhdGVUYXNrRm9ybUJ0bi5jb250YWlucyhlLnRhcmdldClcbiAgICAgfHwgcGFnZUxheW91dC50YXNrUG9wdXAuY29udGFpbnMoZS50YXJnZXQpICYmICFwYWdlTGF5b3V0LmNyZWF0ZVRhc2tGb3JtQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSl7XG4gICAgcGFnZUxheW91dC50YXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfWVsc2Uge1xuICAgIHBhZ2VMYXlvdXQudGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2xvc2VUYXNrRm9ybSk7XG4gIH1cbn1cblxuY29uc3QgZmlyZVRhc2tPZmYgPSAoKSA9PiB7XG4gIGxldCBmb2xkZXIgPSBwYWdlTGF5b3V0LmNyZWF0ZVRhc2tGb3JtQnRuLmRhdGFzZXQuZm9sZGVyXG4gIGxldCB0aXRsZSA9IHBhZ2VMYXlvdXQudGFza1RpdGxlLnZhbHVlXG4gIGxldCBkZXNjcmlwdGlvbiA9IHBhZ2VMYXlvdXQudGFza0Rlc2NyaXB0aW9uLnZhbHVlXG4gIC8vIGNvbnNvbGUubG9nKGZvcm1hdChuZXcgRGF0ZShwYWdlTGF5b3V0LnRhc2tEYXRlLnZhbHVlKSwgJ01NL2RkL3l5eXknKSlcbiAgLy9nZXQgZGF0ZSBmb3JtYXQgdG8gd29yayBwcm9wZXJseS4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4gIGxldCBkYXRlID0gcGFnZUxheW91dC50YXNrRGF0ZS52YWx1ZVxuICBjb25zb2xlLmxvZyhkYXRlKVxuICBsZXQgcHJpb3JpdHkxID0gcGFnZUxheW91dC5wcmlvcml0eTFcbiAgbGV0IHByaW9yaXR5MiA9IHBhZ2VMYXlvdXQucHJpb3JpdHkyXG4gIGxldCBwcmlvcml0eTMgPSBwYWdlTGF5b3V0LnByaW9yaXR5M1xuXG4gIGlmKHByaW9yaXR5My5jaGVja2VkID09IHRydWUpe1xuICAgIGxldCBuZXdUYXNrID0gY3JlYXRlQVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eTMudmFsdWUpO1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGZvbGRlcikpXG4gICAgb2JqLnRhc2tGb2xkZXIucHVzaChuZXdUYXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShmb2xkZXIsIEpTT04uc3RyaW5naWZ5KG9iaikpXG4gIH0gZWxzZSBpZihwcmlvcml0eTIuY2hlY2tlZCA9PSB0cnVlKXtcbiAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZUFUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkyLnZhbHVlKTtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShmb2xkZXIpKVxuICAgIG9iai50YXNrRm9sZGVyLnB1c2gobmV3VGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZm9sZGVyLCBKU09OLnN0cmluZ2lmeShvYmopKVxuICB9IGVsc2Uge1xuICAgIGxldCBuZXdUYXNrID0gY3JlYXRlQVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eTEudmFsdWUpO1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGZvbGRlcikpXG4gICAgb2JqLnRhc2tGb2xkZXIucHVzaChuZXdUYXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShmb2xkZXIsIEpTT04uc3RyaW5naWZ5KG9iaikpXG4gIH1cbiAgcGFnZUxheW91dC50YXNrVGl0bGUudmFsdWUgPSAnJ1xuICBwYWdlTGF5b3V0LnRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9ICcnXG4gIHBhZ2VMYXlvdXQudGFza0RhdGUudmFsdWUgPSAnJ1xuICBwYWdlTGF5b3V0LnByaW9yaXR5Mi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2luaGVyaXQnXG4gIHBhZ2VMYXlvdXQucHJpb3JpdHkyLmNoZWNrZWQgPSBmYWxzZVxuICBwYWdlTGF5b3V0LnByaW9yaXR5My5zdHlsZS5iYWNrZ3JvdW5kID0gJ2luaGVyaXQnO1xuICBwYWdlTGF5b3V0LnByaW9yaXR5My5jaGVja2VkID0gZmFsc2UgXG4gIHBhZ2VMYXlvdXQudGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHNob3dDdXJyZW50Rm9sZGVyVGFzaygpXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrRm9ybSk7XG59O1xuXG5mdW5jdGlvbiBzaG93Q3VycmVudEZvbGRlclRhc2soKSB7XG4gIGxldCBrZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlVGFza0Zvcm0nKS5kYXRhc2V0LmZvbGRlclxuICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICBsZXQgdGFza3MgPSBvYmoudGFza0ZvbGRlclxuICBrZXkgPT0gJ2RlZicgPyBwYWdlTGF5b3V0LnRvRG9MaXN0VGl0bGUuaW5uZXJIVE1MID0gJ0RlZmF1bHQnIDogcGFnZUxheW91dC50b0RvTGlzdFRpdGxlLmlubmVySFRNTCA9IGtleTtcbiAgYWRkVG9EaXNwbGF5KHRhc2tzLCBrZXkpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGlzcGxheSh0YXNrcywga2V5KXtcbiAgcGFnZUxheW91dC50b0RvTGlzdC5pbm5lckhUTUwgPSAnJ1xuICBpZih0YXNrcy5sZW5ndGggIT0gMCl7XG4gICAgdGFza3MuZm9yRWFjaCgoZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBodG1sID0gY3JlYXRlUHJvcGVySFRNTChlKVxuICAgICAgbGV0IHRhc2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnY2xhc3MnLCAndGFza0l0ZW0nLCBodG1sKVxuICAgICAgbGV0IGNvbXBsZXRlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NsYXNzJywgJ2NvbXBsZXRlJywgJ2NvbXBsZXRlJykgICAgIFxuICAgICAgY29tcGxldGVCdG4oY29tcGxldGUsIGtleSwgaW5kZXgpXG4gICAgICB0YXNrLnByZXBlbmQoY3JlYXRlUHJpb3JpdHkoZS5wcmlvcml0eSwga2V5LCBpbmRleCkpXG4gICAgICBhcHBlbmRFKHRhc2ssIGNvbXBsZXRlKVxuICAgICAgYXBwZW5kRShwYWdlTGF5b3V0LnRvRG9MaXN0LCB0YXNrKVxuICAgIH0pXG4gIH1cbiAgdXBkYXRlQ29tcGVsZXRVSShrZXkpO1xuXG5cbiAgZnVuY3Rpb24gY29tcGxldGVCdG4oY29tcGxldGUsIGtleSwgaW5kZXgpe1xuICAgIFxuICAgIGNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGxldGVUYXNrKVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGVUYXNrKGUpe1xuICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICAgIGxldCBjb21wbGV0ZWRUYXNrID0gb2JqLnRhc2tGb2xkZXIuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgbGV0IGNvbXBsZXRlZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2tleX0tY29tcGxldGVgKSlcbiAgICAgIGNvbXBsZXRlZExpc3QudGFza0ZvbGRlci5wdXNoKGNvbXBsZXRlZFRhc2tbMF0pXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtrZXl9LWNvbXBsZXRlYCwgSlNPTi5zdHJpbmdpZnkoY29tcGxldGVkTGlzdCkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxuICAgICAgc2hvd0N1cnJlbnRGb2xkZXJUYXNrKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ29tcGVsZXRVSShrZXkpe1xuICAgIGxldCBzZXRDb21wbGV0ZUtleSA9IGAke2tleX0tY29tcGxldGVgXG4gICAgbGV0IGNvbXBsZXRlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXRDb21wbGV0ZUtleSkpXG4gICAgaWYoY29tcGxldGVkVGFza3MudGFza0ZvbGRlci5sZW5ndGggPiAwKXtcbiAgICAgIHBhZ2VMYXlvdXQuY29tcGxldGVMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgcGFnZUxheW91dC5jb21wbGV0ZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIGNvbXBsZXRlZFRhc2tzLnRhc2tGb2xkZXIuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgbGV0IGh0bWwgPSBjcmVhdGVQcm9wZXJIVE1MKHRhc2spXG4gICAgICAgIGxldCBlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NsYXNzJywgJ3Rhc2tJdGVtJywgYCR7aHRtbH1gKVxuICAgICAgICBsZXQgZGVzdHJveSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjbGFzcycsICdkZWxldGUnLCAnZGVsZXRlJylcbiAgICAgICAgY3JlYXRlRGVzdHJveUJ0bihkZXN0cm95LCBzZXRDb21wbGV0ZUtleSwgY29tcGxldGVkVGFza3MudGFza0ZvbGRlci5sZW5ndGggLSAxKVxuICAgICAgICBlLnByZXBlbmQoY3JlYXRlUHJpb3JpdHkodGFzay5wcmlvcml0eSwgc2V0Q29tcGxldGVLZXksICcnLCBmYWxzZSkpXG4gICAgICAgIGFwcGVuZEUocGFnZUxheW91dC5jb21wbGV0ZUxpc3QsIGUpO1xuICAgICAgICBhcHBlbmRFKGUsIGRlc3Ryb3kpXG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgIHBhZ2VMYXlvdXQuY29tcGxldGVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVEZXN0cm95QnRuKGJ1dHRvbiwga2V5LCBpbmRleCl7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzaylcbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKGUpe1xuICAgICAgbGV0IHRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgdGFzay50YXNrRm9sZGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbiAgICAgIHNob3dDdXJyZW50Rm9sZGVyVGFzaygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb3BlckhUTUwoZSl7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUudGl0bGUgKyBcIiBcIiArIGUuZGVzY3JpcHRpb24gKyBcIiBcIiArIGUuZGF0ZSkucmVwbGFjZSgvXlwiKC4qKVwiJC8sICckMScpXG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHkodGFza1ByaW9yaXR5LCBrZXksIGluZGV4LCBsaXN0ZW5lcnM9dHJ1ZSkge1xuICAgIGxldCBwcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjbGFzcycsICdwcmlvcml0eUNvbnRhaW5lcicsICcnKTtcbiAgICBsZXQgcHJpb3JpdHkxID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAndmFsdWUnLCAnMScsICcnKTtcbiAgICBwcmlvcml0eTEudHlwZSA9ICdjaGVja2JveCdcbiAgICBwcmlvcml0eTEuY2hlY2tlZCA9IHRydWVcbiAgICBwcmlvcml0eTEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICBwcmlvcml0eTEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eScpXG5cbiAgICBsZXQgcHJpb3JpdHkyID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAndmFsdWUnLCAnMicsICcnKTtcbiAgICBwcmlvcml0eTIudHlwZSA9ICdjaGVja2JveCdcbiAgICBwcmlvcml0eTIuY2hlY2tlZCA9IGZhbHNlXG4gICAgcHJpb3JpdHkyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcbiAgICBwcmlvcml0eTIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eScpXG5cbiAgICBsZXQgcHJpb3JpdHkzID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAndmFsdWUnLCAnMycsICcnKTtcbiAgICBwcmlvcml0eTMudHlwZSA9ICdjaGVja2JveCdcbiAgICBwcmlvcml0eTMuY2hlY2tlZCA9IGZhbHNlXG4gICAgcHJpb3JpdHkzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcbiAgICBwcmlvcml0eTMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eScpXG5cbiAgICBhcHBlbmRFKHByaW9yaXR5LCBwcmlvcml0eTEpXG4gICAgYXBwZW5kRShwcmlvcml0eSwgcHJpb3JpdHkyKVxuICAgIGFwcGVuZEUocHJpb3JpdHksIHByaW9yaXR5MylcblxuICAgIGlmKGxpc3RlbmVycyA9PSB0cnVlKXtcbiAgICBhZGRQcmlvcml0eUxpc3RlbmVycyhwcmlvcml0eTEsIHByaW9yaXR5MiwgcHJpb3JpdHkzLCBpbmRleCwga2V5KTtcbiAgICB9XG5cbiAgICBsZXQgdGFzayA9IHRhc2tQcmlvcml0eS5tYXRjaCgvXFxkL2cpWzBdO1xuICAgIGlmKHRhc2sgPT0gMSl7XG4gICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfSBlbHNlIGlmKHRhc2sgPT0gMil7XG4gICAgICBwcmlvcml0eTIuY2hlY2tlZCA9IHRydWVcbiAgICAgIHByaW9yaXR5Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmlvcml0eTIuY2hlY2tlZCA9IHRydWVcbiAgICAgIHByaW9yaXR5Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuICAgICAgcHJpb3JpdHkzLmNoZWNrZWQgPSB0cnVlXG4gICAgICBwcmlvcml0eTMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcmlvcml0eUxpc3RlbmVycyhwcmlvcml0eTEsIHByaW9yaXR5MiwgcHJpb3JpdHkzLCBpbmRleCwga2V5KXtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgIHByaW9yaXR5MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByaW9yaXR5Mi5jaGVja2VkID0gZmFsc2VcbiAgICAgIHByaW9yaXR5My5jaGVjayA9IGZhbHNlXG4gICAgICBwcmlvcml0eTIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXG4gICAgICBwcmlvcml0eTMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXG4gICAgICBvYmoudGFza0ZvbGRlcltpbmRleF0ucHJpb3JpdHkgPSAnMSdcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcbiAgICB9KTtcbiAgICBwcmlvcml0eTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcmlvcml0eTIuY2hlY2tlZCA9IHRydWVcbiAgICAgIHByaW9yaXR5My5jaGVjayA9IGZhbHNlXG4gICAgICBwcmlvcml0eTIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgICAgIHByaW9yaXR5My5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcbiAgICAgIG9iai50YXNrRm9sZGVyW2luZGV4XS5wcmlvcml0eSA9ICcyJ1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxuICAgIH0pO1xuICAgIHByaW9yaXR5My5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByaW9yaXR5Mi5jaGVja2VkID0gdHJ1ZVxuICAgICAgcHJpb3JpdHkzLmNoZWNrID0gdHJ1ZVxuICAgICAgcHJpb3JpdHkyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgICBwcmlvcml0eTMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCdcbiAgICAgIG9iai50YXNrRm9sZGVyW2luZGV4XS5wcmlvcml0eSA9ICczJ1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBjb25zdCBjcmVhdGVOZXdGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gIGxldCB0YXNrRm9sZGVyID0gW107XG4gIHJldHVybiB7XG4gIGZvbGRlcixcbiAgdGFza0ZvbGRlclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSA9PntcbiAgcmV0dXJue1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRhdGUsXG4gICAgcHJpb3JpdHlcbiAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBhcHBlbmRFIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmltcG9ydCB7IHBhZ2VMYXlvdXQsIGxpc3RlbiB9IGZyb20gXCIuL3BhZ2VMYXlvdXRcIlxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnBhZ2VMYXlvdXQ7XG5saXN0ZW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=