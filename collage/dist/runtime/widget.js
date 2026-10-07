System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/collage/src/runtime/widget.css":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/collage/src/runtime/widget.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.gis-day-collage {
  width: 100%;
  height: 100%;
  min-height: 220px;
  overflow: auto;
  padding: 1rem;
  color: #fff;
  background: #1a1a2e;
  background-image: radial-gradient(ellipse at 10% 20%, rgba(99, 102, 241, 0.15), transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(236, 72, 153, 0.12), transparent 50%);
}

.collage-header {
  max-width: 760px;
  margin: 0 auto;
  padding: 0.75rem 0.5rem 0;
  text-align: center;
}

.collage-header h1 {
  margin: 0;
  color: #fff;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 1.2;
}

.collage-intro {
  margin: 0.65rem 0 0.35rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.5;
}

.collage-subtitle {
  margin: 0;
  color: #e9c46a;
  font-size: 0.9rem;
  font-weight: 700;
}

.collage-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 1rem 0.5rem 2rem;
  perspective: 1000px;
}

.comment-card {
  border: 0;
  padding: 1.25rem 1.4rem;
  color: #fff;
  text-align: left;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  animation: pop-in 0.45s ease both;
  transition: transform 0.25s ease, filter 0.25s ease, box-shadow 0.25s ease;
}

.comment-card:hover,
.comment-card:focus-visible {
  transform: scale(1.06) rotate(0deg) translateY(-5px) !important;
  filter: brightness(1.1);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.card-rect {
  border-radius: 10px;
}

.card-rounded {
  border-radius: 22px;
}

.card-blob1 {
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

.card-blob2 {
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}

.card-ticket {
  border-radius: 8px;
  border-left: 6px dashed rgba(255, 255, 255, 0.3);
}

.card-torn {
  border-radius: 4px 4px 20px 4px;
}

.comment-card.sm {
  width: clamp(120px, 15vw, 180px);
  font-size: 0.85rem;
}

.comment-card.md {
  width: clamp(180px, 22vw, 280px);
  font-size: 1rem;
}

.comment-card.lg {
  width: clamp(260px, 28vw, 380px);
  font-size: 1.05rem;
}

.comment-card.xl {
  width: clamp(280px, 34vw, 450px);
  font-size: 1.05rem;
}

.card-comment,
.card-author,
.card-organization {
  display: block;
  position: relative;
}

.card-comment {
  line-height: 1.5;
  margin-bottom: 0.8rem;
}

.card-author {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.9;
}

.card-organization {
  margin-top: 0.3rem;
  font-size: 0.75rem;
  font-weight: 700;
  font-style: italic;
  opacity: 0.75;
}

.empty {
  display: grid;
  place-items: center;
  min-height: 180px;
  text-align: center;
  opacity: 0.8;
}

.details-backdrop {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.55);
}

.details {
  position: relative;
  width: min(100%, 520px);
  max-height: calc(100vh - 2rem);
  overflow: auto;
  padding: 1.5rem;
  color: #202124;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.details h2 {
  margin: 0 2rem 1rem 0;
  font-size: 1.625rem;
}

.details p {
  font-size: 18px;
  line-height: 1.55;
}

.close-button {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border: 0;
  background: transparent;
  color: #202124;
  font-size: 1.4rem;
  cursor: pointer;
}

@keyframes pop-in {
  from {
    opacity: 0;
    transform: scale(0.85) rotate(8deg);
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 600px) {
  .gis-day-collage {
    padding: 0.5rem;
  }
  .comment-card.sm,
  .comment-card.md,
  .comment-card.lg,
  .comment-card.xl {
    width: min(100%, 320px);
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/collage/src/runtime/widget.css"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;EACA,gLAAA;AACF;;AAEA;EACE,gBAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;AACF;;AAEA;EACE,SAAA;EACA,WAAA;EACA,qCAAA;EACA,gBAAA;AACF;;AAEA;EACE,yBAAA;EACA,gCAAA;EACA,gBAAA;AACF;;AAEA;EACE,SAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,uBAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;AACF;;AAEA;EACE,SAAA;EACA,uBAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,kFAAA;EACA,iCAAA;EACA,0EAAA;AACF;;AAEA;;EAEE,+DAAA;EACA,uBAAA;EACA,0CAAA;EACA,UAAA;AACF;;AAEA;EAAa,mBAAA;AAEb;;AADA;EAAgB,mBAAA;AAKhB;;AAJA;EAAc,8CAAA;AAQd;;AAPA;EAAc,8CAAA;AAWd;;AAVA;EAAe,kBAAA;EAAoB,gDAAA;AAenC;;AAdA;EAAa,+BAAA;AAkBb;;AAhBA;EAAmB,gCAAA;EAAkC,kBAAA;AAqBrD;;AApBA;EAAmB,gCAAA;EAAkC,eAAA;AAyBrD;;AAxBA;EAAmB,gCAAA;EAAkC,kBAAA;AA6BrD;;AA5BA;EAAmB,gCAAA;EAAkC,kBAAA;AAiCrD;;AA/BA;;;EAEqB,cAAA;EAAgB,kBAAA;AAoCrC;;AAnCA;EAAgB,gBAAA;EAAkB,qBAAA;AAwClC;;AAvCA;EAAe,iBAAA;EAAkB,gBAAA;EAAkB,yBAAA;EAA2B,YAAA;AA8C9E;;AA7CA;EAAqB,kBAAA;EAAmB,kBAAA;EAAmB,gBAAA;EAAkB,kBAAA;EAAoB,aAAA;AAqDjG;;AAnDA;EAAS,aAAA;EAAe,mBAAA;EAAqB,iBAAA;EAAmB,kBAAA;EAAoB,YAAA;AA2DpF;;AA1DA;EAAoB,eAAA;EAAiB,QAAA;EAAU,WAAA;EAAa,aAAA;EAAe,mBAAA;EAAqB,aAAA;EAAe,+BAAA;AAoE/G;;AAnEA;EAAW,kBAAA;EAAoB,uBAAA;EAAyB,8BAAA;EAAgC,cAAA;EAAgB,eAAA;EAAiB,cAAA;EAAgB,gBAAA;EAAkB,kBAAA;EAAoB,2CAAA;AA+E/K;;AA9EA;EAAc,qBAAA;EAAuB,mBAAA;AAmFrC;;AAlFA;EAAa,eAAA;EAAiB,iBAAA;AAuF9B;;AAtFA;EAAgB,kBAAA;EAAoB,YAAA;EAAa,cAAA;EAAe,SAAA;EAAW,uBAAA;EAAyB,cAAA;EAAgB,iBAAA;EAAmB,eAAA;AAiGvI;;AA/FA;EACE;IAAO,UAAA;IAAY,mCAAA;EAoGnB;EAnGA;IAAK,UAAA;EAsGL;AACF;AApGA;EACE;IAAmB,eAAA;EAuGnB;EAtGA;;;;IAGmB,uBAAA;EAyGnB;AACF","sourcesContent":[".gis-day-collage {\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 220px;\r\n  overflow: auto;\r\n  padding: 1rem;\r\n  color: #fff;\r\n  background: #1a1a2e;\r\n  background-image: radial-gradient(ellipse at 10% 20%, rgba(99, 102, 241, .15), transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(236, 72, 153, .12), transparent 50%);\r\n}\r\n\r\n.collage-header {\r\n  max-width: 760px;\r\n  margin: 0 auto;\r\n  padding: .75rem .5rem 0;\r\n  text-align: center;\r\n}\r\n\r\n.collage-header h1 {\r\n  margin: 0;\r\n  color: #fff;\r\n  font-size: clamp(1.5rem, 3vw, 2.2rem);\r\n  line-height: 1.2;\r\n}\r\n\r\n.collage-intro {\r\n  margin: .65rem 0 .35rem;\r\n  color: rgba(255, 255, 255, .88);\r\n  line-height: 1.5;\r\n}\r\n\r\n.collage-subtitle {\r\n  margin: 0;\r\n  color: #e9c46a;\r\n  font-size: .9rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.collage-grid {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: .7rem;\r\n  padding: 1rem .5rem 2rem;\r\n  perspective: 1000px;\r\n}\r\n\r\n.comment-card {\r\n  border: 0;\r\n  padding: 1.25rem 1.4rem;\r\n  color: #fff;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 15px rgba(0, 0, 0, .3), inset 0 1px 0 rgba(255, 255, 255, .12);\r\n  animation: pop-in .45s ease both;\r\n  transition: transform .25s ease, filter .25s ease, box-shadow .25s ease;\r\n}\r\n\r\n.comment-card:hover,\r\n.comment-card:focus-visible {\r\n  transform: scale(1.06) rotate(0deg) translateY(-5px) !important;\r\n  filter: brightness(1.1);\r\n  box-shadow: 0 16px 32px rgba(0, 0, 0, .4);\r\n  z-index: 2;\r\n}\r\n\r\n.card-rect { border-radius: 10px; }\r\n.card-rounded { border-radius: 22px; }\r\n.card-blob1 { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }\r\n.card-blob2 { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }\r\n.card-ticket { border-radius: 8px; border-left: 6px dashed rgba(255, 255, 255, .3); }\r\n.card-torn { border-radius: 4px 4px 20px 4px; }\r\n\r\n.comment-card.sm { width: clamp(120px, 15vw, 180px); font-size: .85rem; }\r\n.comment-card.md { width: clamp(180px, 22vw, 280px); font-size: 1rem; }\r\n.comment-card.lg { width: clamp(260px, 28vw, 380px); font-size: 1.05rem; }\r\n.comment-card.xl { width: clamp(280px, 34vw, 450px); font-size: 1.05rem; }\r\n\r\n.card-comment,\r\n.card-author,\r\n.card-organization { display: block; position: relative; }\r\n.card-comment { line-height: 1.5; margin-bottom: .8rem; }\r\n.card-author { font-size: .8rem; font-weight: 700; text-transform: uppercase; opacity: .9; }\r\n.card-organization { margin-top: .3rem; font-size: .75rem; font-weight: 700; font-style: italic; opacity: .75; }\r\n\r\n.empty { display: grid; place-items: center; min-height: 180px; text-align: center; opacity: .8; }\r\n.details-backdrop { position: fixed; inset: 0; z-index: 20; display: grid; place-items: center; padding: 1rem; background: rgba(0, 0, 0, .55); }\r\n.details { position: relative; width: min(100%, 520px); max-height: calc(100vh - 2rem); overflow: auto; padding: 1.5rem; color: #202124; background: #fff; border-radius: 8px; box-shadow: 0 20px 50px rgba(0, 0, 0, .35); }\r\n.details h2 { margin: 0 2rem 1rem 0; font-size: 1.625rem; }\r\n.details p { font-size: 18px; line-height: 1.55; }\r\n.close-button { position: absolute; top: .75rem; right: .75rem; border: 0; background: transparent; color: #202124; font-size: 1.4rem; cursor: pointer; }\r\n\r\n@keyframes pop-in {\r\n  from { opacity: 0; transform: scale(.85) rotate(8deg); }\r\n  to { opacity: 1; }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .gis-day-collage { padding: .5rem; }\r\n  .comment-card.sm,\r\n  .comment-card.md,\r\n  .comment-card.lg,\r\n  .comment-card.xl { width: min(100%, 320px); }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./your-extensions/widgets/collage/src/runtime/widget.css":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/collage/src/runtime/widget.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./widget.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/collage/src/runtime/widget.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/collage/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget.css */ "./your-extensions/widgets/collage/src/runtime/widget.css");


const shapes = ['rect', 'rounded', 'blob1', 'blob2', 'ticket', 'torn'];
const colors = ['#e63946', '#457b9d', '#2a9d8f', '#e9c46a', '#f4a261', '#264653', '#1982c4', '#8ac926'];
const defaultTitle = 'GIS Day Comment Collage';
const defaultSubtitle = 'Celebrating the technology that connects people, places, and data. Every pin on a map tells a story - here are yours.';
const defaultNote = 'Click any comment card to see full details';
const text = (value) => value == null ? '' : String(value);
const randomFor = (index, seed) => {
    const value = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
    return value - Math.floor(value);
};
const getOrganization = (attributes, config) => {
    const division = text(attributes[config.organizationField]);
    const other = text(attributes[config.organizationOtherField]);
    return division.toLowerCase() === 'other' && other ? other : division;
};
const getDate = (value) => {
    if (!value)
        return '';
    return new Date(Number(value)).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    });
};
const getFieldTitle = (dataSourceId, fieldName) => {
    var _a, _b, _c;
    const field = (_c = (_b = (_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId)) === null || _a === void 0 ? void 0 : _a.getSchema()) === null || _b === void 0 ? void 0 : _b.fields) === null || _c === void 0 ? void 0 : _c[fieldName];
    return (field === null || field === void 0 ? void 0 : field.alias) || (field === null || field === void 0 ? void 0 : field.name) || fieldName;
};
const Widget = (props) => {
    var _a;
    const [selected, setSelected] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [layoutSeed] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => Math.random());
    const config = props.config;
    const dataSource = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0];
    if (!dataSource) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "gis-day-collage empty" }, "Select a feature layer in the widget settings.");
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "gis-day-collage" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("header", { className: "collage-header" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h1", null, config.title || defaultTitle),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "collage-intro" }, config.subtitle || defaultSubtitle),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "collage-subtitle" }, config.note || defaultNote)),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: dataSource, widgetId: props.id, query: {
                where: `${config.commentField} IS NOT NULL OR ${config.commentField2} IS NOT NULL`,
                outFields: ['*'],
                pageSize: config.maxComments
            } }, (dataSource) => {
            var _a;
            const comments = ((_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.getRecords()) !== null && _a !== void 0 ? _a : [])
                .map(record => record.getData())
                .filter(attributes => text(attributes[config.commentField]) || text(attributes[config.commentField2]));
            const shuffledComments = comments
                .map((attributes, index) => ({ attributes, order: randomFor(index, layoutSeed) }))
                .sort((first, second) => first.order - second.order);
            if (!shuffledComments.length)
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "empty" }, "No comments yet.");
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "collage-grid" }, shuffledComments.map(({ attributes }, index) => {
                const comment = text(attributes[config.commentField]);
                const organization = getOrganization(attributes, config);
                const rotation = (randomFor(index + 100, layoutSeed) - .5) * 10;
                const size = comment.length > 200 ? 'xl' : comment.length > 120 ? 'lg' : comment.length < 40 ? 'sm' : 'md';
                const shape = shapes[Math.floor(randomFor(index + 200, layoutSeed) * shapes.length)];
                const color = colors[Math.floor(randomFor(index + 300, layoutSeed) * colors.length)];
                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: `comment-card ${size} card-${shape}`, key: `${index}-${text(attributes[config.nameField])}`, style: { backgroundColor: color, transform: `rotate(${rotation}deg)` }, onClick: () => setSelected(attributes) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "card-comment" }, comment.length > 180 ? `${comment.substring(0, 180).trim()}...` : comment),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "card-author" }, text(attributes[config.nameField]) || 'Anonymous'),
                    organization && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "card-organization" }, organization)));
            })));
        }),
        selected && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "details-backdrop", role: "dialog", "aria-modal": "true", "aria-labelledby": "comment-details-title", onClick: () => setSelected(null) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "details", onClick: event => event.stopPropagation() },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "close-button", type: "button", onClick: () => setSelected(null), "aria-label": "Close" }, "\u00D7"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h2", { id: "comment-details-title" }, text(selected[config.nameField]) || 'Anonymous'),
                text(selected[config.commentField]) && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null,
                        getFieldTitle(dataSource.dataSourceId, config.commentField),
                        ":"),
                    " ",
                    text(selected[config.commentField])),
                text(selected[config.commentField2]) && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null,
                        getFieldTitle(dataSource.dataSourceId, config.commentField2),
                        ":"),
                    " ",
                    text(selected[config.commentField2])),
                getOrganization(selected, config) && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, "Organization:"),
                    " ",
                    getOrganization(selected, config)),
                getDate(selected[config.dateField]) && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, "Date:"),
                    " ",
                    getDate(selected[config.dateField])))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb2xsYWdlL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlIQUF5SCxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxRQUFRLE1BQU0sWUFBWSxXQUFXLFFBQVEsTUFBTSxZQUFZLFlBQVksUUFBUSxNQUFNLFlBQVksWUFBWSxRQUFRLFFBQVEsV0FBVyxZQUFZLFFBQVEsTUFBTSxZQUFZLFlBQVksUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsUUFBUSxNQUFNLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxRQUFRLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFlBQVksWUFBWSxX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QUFDLGFBQWEsQ0FBQyxDQUFDLENBQUs7Z0JBQ3RLLGVBQWUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUk7b0JBQUcsMkZBQThCOztvQkFBRSxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFLO2dCQUM5RyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJO29CQUFHLG1GQUFzQjs7b0JBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBSyxDQUN2RyxDQUNGLENBQ1AsQ0FDRyxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb2xsYWdlL3NyYy9ydW50aW1lL3dpZGdldC5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbGxhZ2Uvc3JjL3J1bnRpbWUvd2lkZ2V0LmNzcz8zOTJlIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NvbGxhZ2Uvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdpcy1kYXktY29sbGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxYTFhMmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IDEwJSAyMCUsIHJnYmEoOTksIDEwMiwgMjQxLCAwLjE1KSwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgODAlIDYwJSwgcmdiYSgyMzYsIDcyLCAxNTMsIDAuMTIpLCB0cmFuc3BhcmVudCA1MCUpO1xufVxuXG4uY29sbGFnZS1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDc2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMC43NXJlbSAwLjVyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sbGFnZS1oZWFkZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgM3Z3LCAyLjJyZW0pO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uY29sbGFnZS1pbnRybyB7XG4gIG1hcmdpbjogMC42NXJlbSAwIDAuMzVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uY29sbGFnZS1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNlOWM0NmE7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY29sbGFnZS1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMC43cmVtO1xuICBwYWRkaW5nOiAxcmVtIDAuNXJlbSAycmVtO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uY29tbWVudC1jYXJkIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuNHJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICBhbmltYXRpb246IHBvcC1pbiAwLjQ1cyBlYXNlIGJvdGg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLCBmaWx0ZXIgMC4yNXMgZWFzZSwgYm94LXNoYWRvdyAwLjI1cyBlYXNlO1xufVxuXG4uY29tbWVudC1jYXJkOmhvdmVyLFxuLmNvbW1lbnQtY2FyZDpmb2N1cy12aXNpYmxlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KSByb3RhdGUoMGRlZykgdHJhbnNsYXRlWSgtNXB4KSAhaW1wb3J0YW50O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY2FyZC1yZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNhcmQtcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG59XG5cbi5jYXJkLWJsb2IxIHtcbiAgYm9yZGVyLXJhZGl1czogMzAlIDcwJSA3MCUgMzAlLzMwJSAzMCUgNzAlIDcwJTtcbn1cblxuLmNhcmQtYmxvYjIge1xuICBib3JkZXItcmFkaXVzOiA2MCUgNDAlIDMwJSA3MCUvNjAlIDMwJSA3MCUgNDAlO1xufVxuXG4uY2FyZC10aWNrZXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1sZWZ0OiA2cHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLmNhcmQtdG9ybiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMjBweCA0cHg7XG59XG5cbi5jb21tZW50LWNhcmQuc20ge1xuICB3aWR0aDogY2xhbXAoMTIwcHgsIDE1dncsIDE4MHB4KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4uY29tbWVudC1jYXJkLm1kIHtcbiAgd2lkdGg6IGNsYW1wKDE4MHB4LCAyMnZ3LCAyODBweCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmNvbW1lbnQtY2FyZC5sZyB7XG4gIHdpZHRoOiBjbGFtcCgyNjBweCwgMjh2dywgMzgwcHgpO1xuICBmb250LXNpemU6IDEuMDVyZW07XG59XG5cbi5jb21tZW50LWNhcmQueGwge1xuICB3aWR0aDogY2xhbXAoMjgwcHgsIDM0dncsIDQ1MHB4KTtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xufVxuXG4uY2FyZC1jb21tZW50LFxuLmNhcmQtYXV0aG9yLFxuLmNhcmQtb3JnYW5pemF0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtY29tbWVudCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxuLmNhcmQtYXV0aG9yIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmNhcmQtb3JnYW5pemF0aW9uIHtcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuLmVtcHR5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZGV0YWlscy1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDIwO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xufVxuXG4uZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IG1pbigxMDAlLCA1MjBweCk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgY29sb3I6ICMyMDIxMjQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmRldGFpbHMgaDIge1xuICBtYXJnaW46IDAgMnJlbSAxcmVtIDA7XG4gIGZvbnQtc2l6ZTogMS42MjVyZW07XG59XG5cbi5kZXRhaWxzIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNzVyZW07XG4gIHJpZ2h0OiAwLjc1cmVtO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzIwMjEyNDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQGtleWZyYW1lcyBwb3AtaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSkgcm90YXRlKDhkZWcpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmdpcy1kYXktY29sbGFnZSB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG4gIC5jb21tZW50LWNhcmQuc20sXG4gIC5jb21tZW50LWNhcmQubWQsXG4gIC5jb21tZW50LWNhcmQubGcsXG4gIC5jb21tZW50LWNhcmQueGwge1xuICAgIHdpZHRoOiBtaW4oMTAwJSwgMzIwcHgpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jb2xsYWdlL3NyYy9ydW50aW1lL3dpZGdldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnTEFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0ZBQUE7RUFDQSxpQ0FBQTtFQUNBLDBFQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsK0RBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQWEsbUJBQUE7QUFFYjs7QUFEQTtFQUFnQixtQkFBQTtBQUtoQjs7QUFKQTtFQUFjLDhDQUFBO0FBUWQ7O0FBUEE7RUFBYyw4Q0FBQTtBQVdkOztBQVZBO0VBQWUsa0JBQUE7RUFBb0IsZ0RBQUE7QUFlbkM7O0FBZEE7RUFBYSwrQkFBQTtBQWtCYjs7QUFoQkE7RUFBbUIsZ0NBQUE7RUFBa0Msa0JBQUE7QUFxQnJEOztBQXBCQTtFQUFtQixnQ0FBQTtFQUFrQyxlQUFBO0FBeUJyRDs7QUF4QkE7RUFBbUIsZ0NBQUE7RUFBa0Msa0JBQUE7QUE2QnJEOztBQTVCQTtFQUFtQixnQ0FBQTtFQUFrQyxrQkFBQTtBQWlDckQ7O0FBL0JBOzs7RUFFcUIsY0FBQTtFQUFnQixrQkFBQTtBQW9DckM7O0FBbkNBO0VBQWdCLGdCQUFBO0VBQWtCLHFCQUFBO0FBd0NsQzs7QUF2Q0E7RUFBZSxpQkFBQTtFQUFrQixnQkFBQTtFQUFrQix5QkFBQTtFQUEyQixZQUFBO0FBOEM5RTs7QUE3Q0E7RUFBcUIsa0JBQUE7RUFBbUIsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsYUFBQTtBQXFEakc7O0FBbkRBO0VBQVMsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLGlCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLFlBQUE7QUEyRHBGOztBQTFEQTtFQUFvQixlQUFBO0VBQWlCLFFBQUE7RUFBVSxXQUFBO0VBQWEsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLGFBQUE7RUFBZSwrQkFBQTtBQW9FL0c7O0FBbkVBO0VBQVcsa0JBQUE7RUFBb0IsdUJBQUE7RUFBeUIsOEJBQUE7RUFBZ0MsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGNBQUE7RUFBZ0IsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsMkNBQUE7QUErRS9LOztBQTlFQTtFQUFjLHFCQUFBO0VBQXVCLG1CQUFBO0FBbUZyQzs7QUFsRkE7RUFBYSxlQUFBO0VBQWlCLGlCQUFBO0FBdUY5Qjs7QUF0RkE7RUFBZ0Isa0JBQUE7RUFBb0IsWUFBQTtFQUFhLGNBQUE7RUFBZSxTQUFBO0VBQVcsdUJBQUE7RUFBeUIsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixlQUFBO0FBaUd2STs7QUEvRkE7RUFDRTtJQUFPLFVBQUE7SUFBWSxtQ0FBQTtFQW9HbkI7RUFuR0E7SUFBSyxVQUFBO0VBc0dMO0FBQ0Y7QUFwR0E7RUFDRTtJQUFtQixlQUFBO0VBdUduQjtFQXRHQTs7OztJQUdtQix1QkFBQTtFQXlHbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2lzLWRheS1jb2xsYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMjIwcHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQ6ICMxYTFhMmU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCAxMCUgMjAlLCByZ2JhKDk5LCAxMDIsIDI0MSwgLjE1KSwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgODAlIDYwJSwgcmdiYSgyMzYsIDcyLCAxNTMsIC4xMiksIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5jb2xsYWdlLWhlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDc2MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAuNzVyZW0gLjVyZW0gMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxhZ2UtaGVhZGVyIGgxIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDN2dywgMi4ycmVtKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi5jb2xsYWdlLWludHJvIHtcXHJcXG4gIG1hcmdpbjogLjY1cmVtIDAgLjM1cmVtO1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg4KTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi5jb2xsYWdlLXN1YnRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiAjZTljNDZhO1xcclxcbiAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5jb2xsYWdlLWdyaWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IC43cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbSAuNXJlbSAycmVtO1xcclxcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY2FyZCB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBwYWRkaW5nOiAxLjI1cmVtIDEuNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjMpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEyKTtcXHJcXG4gIGFuaW1hdGlvbjogcG9wLWluIC40NXMgZWFzZSBib3RoO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgZWFzZSwgZmlsdGVyIC4yNXMgZWFzZSwgYm94LXNoYWRvdyAuMjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNhcmQ6aG92ZXIsXFxyXFxuLmNvbW1lbnQtY2FyZDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNikgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVkoLTVweCkgIWltcG9ydGFudDtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxNnB4IDMycHggcmdiYSgwLCAwLCAwLCAuNCk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1yZWN0IHsgYm9yZGVyLXJhZGl1czogMTBweDsgfVxcclxcbi5jYXJkLXJvdW5kZWQgeyBib3JkZXItcmFkaXVzOiAyMnB4OyB9XFxyXFxuLmNhcmQtYmxvYjEgeyBib3JkZXItcmFkaXVzOiAzMCUgNzAlIDcwJSAzMCUgLyAzMCUgMzAlIDcwJSA3MCU7IH1cXHJcXG4uY2FyZC1ibG9iMiB7IGJvcmRlci1yYWRpdXM6IDYwJSA0MCUgMzAlIDcwJSAvIDYwJSAzMCUgNzAlIDQwJTsgfVxcclxcbi5jYXJkLXRpY2tldCB7IGJvcmRlci1yYWRpdXM6IDhweDsgYm9yZGVyLWxlZnQ6IDZweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7IH1cXHJcXG4uY2FyZC10b3JuIHsgYm9yZGVyLXJhZGl1czogNHB4IDRweCAyMHB4IDRweDsgfVxcclxcblxcclxcbi5jb21tZW50LWNhcmQuc20geyB3aWR0aDogY2xhbXAoMTIwcHgsIDE1dncsIDE4MHB4KTsgZm9udC1zaXplOiAuODVyZW07IH1cXHJcXG4uY29tbWVudC1jYXJkLm1kIHsgd2lkdGg6IGNsYW1wKDE4MHB4LCAyMnZ3LCAyODBweCk7IGZvbnQtc2l6ZTogMXJlbTsgfVxcclxcbi5jb21tZW50LWNhcmQubGcgeyB3aWR0aDogY2xhbXAoMjYwcHgsIDI4dncsIDM4MHB4KTsgZm9udC1zaXplOiAxLjA1cmVtOyB9XFxyXFxuLmNvbW1lbnQtY2FyZC54bCB7IHdpZHRoOiBjbGFtcCgyODBweCwgMzR2dywgNDUwcHgpOyBmb250LXNpemU6IDEuMDVyZW07IH1cXHJcXG5cXHJcXG4uY2FyZC1jb21tZW50LFxcclxcbi5jYXJkLWF1dGhvcixcXHJcXG4uY2FyZC1vcmdhbml6YXRpb24geyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxyXFxuLmNhcmQtY29tbWVudCB7IGxpbmUtaGVpZ2h0OiAxLjU7IG1hcmdpbi1ib3R0b206IC44cmVtOyB9XFxyXFxuLmNhcmQtYXV0aG9yIHsgZm9udC1zaXplOiAuOHJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgb3BhY2l0eTogLjk7IH1cXHJcXG4uY2FyZC1vcmdhbml6YXRpb24geyBtYXJnaW4tdG9wOiAuM3JlbTsgZm9udC1zaXplOiAuNzVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc3R5bGU6IGl0YWxpYzsgb3BhY2l0eTogLjc1OyB9XFxyXFxuXFxyXFxuLmVtcHR5IHsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgbWluLWhlaWdodDogMTgwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgb3BhY2l0eTogLjg7IH1cXHJcXG4uZGV0YWlscy1iYWNrZHJvcCB7IHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7IHotaW5kZXg6IDIwOyBkaXNwbGF5OiBncmlkOyBwbGFjZS1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAxcmVtOyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41NSk7IH1cXHJcXG4uZGV0YWlscyB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IG1pbigxMDAlLCA1MjBweCk7IG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTsgb3ZlcmZsb3c6IGF1dG87IHBhZGRpbmc6IDEuNXJlbTsgY29sb3I6ICMyMDIxMjQ7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDhweDsgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAuMzUpOyB9XFxyXFxuLmRldGFpbHMgaDIgeyBtYXJnaW46IDAgMnJlbSAxcmVtIDA7IGZvbnQtc2l6ZTogMS42MjVyZW07IH1cXHJcXG4uZGV0YWlscyBwIHsgZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDogMS41NTsgfVxcclxcbi5jbG9zZS1idXR0b24geyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLjc1cmVtOyByaWdodDogLjc1cmVtOyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogIzIwMjEyNDsgZm9udC1zaXplOiAxLjRyZW07IGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbkBrZXlmcmFtZXMgcG9wLWluIHtcXHJcXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKC44NSkgcm90YXRlKDhkZWcpOyB9XFxyXFxuICB0byB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuZ2lzLWRheS1jb2xsYWdlIHsgcGFkZGluZzogLjVyZW07IH1cXHJcXG4gIC5jb21tZW50LWNhcmQuc20sXFxyXFxuICAuY29tbWVudC1jYXJkLm1kLFxcclxcbiAgLmNvbW1lbnQtY2FyZC5sZyxcXHJcXG4gIC5jb21tZW50LWNhcmQueGwgeyB3aWR0aDogbWluKDEwMCUsIDMyMHB4KTsgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3dpZGdldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3dpZGdldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBEYXRhU291cmNlQ29tcG9uZW50LCBEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0ICcuL3dpZGdldC5jc3MnXHJcblxyXG5jb25zdCBzaGFwZXMgPSBbJ3JlY3QnLCAncm91bmRlZCcsICdibG9iMScsICdibG9iMicsICd0aWNrZXQnLCAndG9ybiddXHJcbmNvbnN0IGNvbG9ycyA9IFsnI2U2Mzk0NicsICcjNDU3YjlkJywgJyMyYTlkOGYnLCAnI2U5YzQ2YScsICcjZjRhMjYxJywgJyMyNjQ2NTMnLCAnIzE5ODJjNCcsICcjOGFjOTI2J11cclxuY29uc3QgZGVmYXVsdFRpdGxlID0gJ0dJUyBEYXkgQ29tbWVudCBDb2xsYWdlJ1xyXG5jb25zdCBkZWZhdWx0U3VidGl0bGUgPSAnQ2VsZWJyYXRpbmcgdGhlIHRlY2hub2xvZ3kgdGhhdCBjb25uZWN0cyBwZW9wbGUsIHBsYWNlcywgYW5kIGRhdGEuIEV2ZXJ5IHBpbiBvbiBhIG1hcCB0ZWxscyBhIHN0b3J5IC0gaGVyZSBhcmUgeW91cnMuJ1xyXG5jb25zdCBkZWZhdWx0Tm90ZSA9ICdDbGljayBhbnkgY29tbWVudCBjYXJkIHRvIHNlZSBmdWxsIGRldGFpbHMnXHJcblxyXG50eXBlIENvbW1lbnRSZWNvcmQgPSBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxyXG5cclxuY29uc3QgdGV4dCA9ICh2YWx1ZTogdW5rbm93bik6IHN0cmluZyA9PiB2YWx1ZSA9PSBudWxsID8gJycgOiBTdHJpbmcodmFsdWUpXHJcblxyXG5jb25zdCByYW5kb21Gb3IgPSAoaW5kZXg6IG51bWJlciwgc2VlZDogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IE1hdGguc2luKGluZGV4ICogMTIuOTg5OCArIHNlZWQgKiA3OC4yMzMpICogNDM3NTguNTQ1M1xyXG4gIHJldHVybiB2YWx1ZSAtIE1hdGguZmxvb3IodmFsdWUpXHJcbn1cclxuXHJcbmNvbnN0IGdldE9yZ2FuaXphdGlvbiA9IChhdHRyaWJ1dGVzOiBDb21tZW50UmVjb3JkLCBjb25maWc6IElNQ29uZmlnKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkaXZpc2lvbiA9IHRleHQoYXR0cmlidXRlc1tjb25maWcub3JnYW5pemF0aW9uRmllbGRdKVxyXG4gIGNvbnN0IG90aGVyID0gdGV4dChhdHRyaWJ1dGVzW2NvbmZpZy5vcmdhbml6YXRpb25PdGhlckZpZWxkXSlcclxuICByZXR1cm4gZGl2aXNpb24udG9Mb3dlckNhc2UoKSA9PT0gJ290aGVyJyAmJiBvdGhlciA/IG90aGVyIDogZGl2aXNpb25cclxufVxyXG5cclxuY29uc3QgZ2V0RGF0ZSA9ICh2YWx1ZTogdW5rbm93bik6IHN0cmluZyA9PiB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnXHJcbiAgcmV0dXJuIG5ldyBEYXRlKE51bWJlcih2YWx1ZSkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGdldEZpZWxkVGl0bGUgPSAoZGF0YVNvdXJjZUlkOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBmaWVsZCA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlSWQpPy5nZXRTY2hlbWEoKT8uZmllbGRzPy5bZmllbGROYW1lXVxyXG4gIHJldHVybiBmaWVsZD8uYWxpYXMgfHwgZmllbGQ/Lm5hbWUgfHwgZmllbGROYW1lXHJcbn1cclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZTxDb21tZW50UmVjb3JkIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbbGF5b3V0U2VlZF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBNYXRoLnJhbmRvbSgpKVxyXG4gIGNvbnN0IGNvbmZpZyA9IHByb3BzLmNvbmZpZ1xyXG4gIGNvbnN0IGRhdGFTb3VyY2UgPSBwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdXHJcblxyXG4gIGlmICghZGF0YVNvdXJjZSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ2lzLWRheS1jb2xsYWdlIGVtcHR5XCI+U2VsZWN0IGEgZmVhdHVyZSBsYXllciBpbiB0aGUgd2lkZ2V0IHNldHRpbmdzLjwvZGl2PlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lzLWRheS1jb2xsYWdlXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY29sbGFnZS1oZWFkZXJcIj5cclxuICAgICAgICA8aDE+e2NvbmZpZy50aXRsZSB8fCBkZWZhdWx0VGl0bGV9PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xsYWdlLWludHJvXCI+e2NvbmZpZy5zdWJ0aXRsZSB8fCBkZWZhdWx0U3VidGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbGxhZ2Utc3VidGl0bGVcIj57Y29uZmlnLm5vdGUgfHwgZGVmYXVsdE5vdGV9PC9wPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcclxuICAgICAgICB1c2VEYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgICBxdWVyeT17e1xyXG4gICAgICAgICAgd2hlcmU6IGAke2NvbmZpZy5jb21tZW50RmllbGR9IElTIE5PVCBOVUxMIE9SICR7Y29uZmlnLmNvbW1lbnRGaWVsZDJ9IElTIE5PVCBOVUxMYCxcclxuICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgICAgICBwYWdlU2l6ZTogY29uZmlnLm1heENvbW1lbnRzXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoZGF0YVNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY29tbWVudHMgPSAoZGF0YVNvdXJjZT8uZ2V0UmVjb3JkcygpID8/IFtdKVxyXG4gICAgICAgICAgICAubWFwKHJlY29yZCA9PiByZWNvcmQuZ2V0RGF0YSgpIGFzIENvbW1lbnRSZWNvcmQpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYXR0cmlidXRlcyA9PiB0ZXh0KGF0dHJpYnV0ZXNbY29uZmlnLmNvbW1lbnRGaWVsZF0pIHx8IHRleHQoYXR0cmlidXRlc1tjb25maWcuY29tbWVudEZpZWxkMl0pKVxyXG4gICAgICAgICAgY29uc3Qgc2h1ZmZsZWRDb21tZW50cyA9IGNvbW1lbnRzXHJcbiAgICAgICAgICAgIC5tYXAoKGF0dHJpYnV0ZXMsIGluZGV4KSA9PiAoeyBhdHRyaWJ1dGVzLCBvcmRlcjogcmFuZG9tRm9yKGluZGV4LCBsYXlvdXRTZWVkKSB9KSlcclxuICAgICAgICAgICAgLnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0Lm9yZGVyIC0gc2Vjb25kLm9yZGVyKVxyXG5cclxuICAgICAgICAgIGlmICghc2h1ZmZsZWRDb21tZW50cy5sZW5ndGgpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCI+Tm8gY29tbWVudHMgeWV0LjwvZGl2PlxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFnZS1ncmlkXCI+XHJcbiAgICAgICAgICAgICAge3NodWZmbGVkQ29tbWVudHMubWFwKCh7IGF0dHJpYnV0ZXMgfSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSB0ZXh0KGF0dHJpYnV0ZXNbY29uZmlnLmNvbW1lbnRGaWVsZF0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmdhbml6YXRpb24gPSBnZXRPcmdhbml6YXRpb24oYXR0cmlidXRlcywgY29uZmlnKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRpb24gPSAocmFuZG9tRm9yKGluZGV4ICsgMTAwLCBsYXlvdXRTZWVkKSAtIC41KSAqIDEwXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gY29tbWVudC5sZW5ndGggPiAyMDAgPyAneGwnIDogY29tbWVudC5sZW5ndGggPiAxMjAgPyAnbGcnIDogY29tbWVudC5sZW5ndGggPCA0MCA/ICdzbScgOiAnbWQnXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFwZSA9IHNoYXBlc1tNYXRoLmZsb29yKHJhbmRvbUZvcihpbmRleCArIDIwMCwgbGF5b3V0U2VlZCkgKiBzaGFwZXMubGVuZ3RoKV1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW01hdGguZmxvb3IocmFuZG9tRm9yKGluZGV4ICsgMzAwLCBsYXlvdXRTZWVkKSAqIGNvbG9ycy5sZW5ndGgpXVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb21tZW50LWNhcmQgJHtzaXplfSBjYXJkLSR7c2hhcGV9YH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2luZGV4fS0ke3RleHQoYXR0cmlidXRlc1tjb25maWcubmFtZUZpZWxkXSl9YH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLCB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGlvbn1kZWcpYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKGF0dHJpYnV0ZXMpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC1jb21tZW50XCI+e2NvbW1lbnQubGVuZ3RoID4gMTgwID8gYCR7Y29tbWVudC5zdWJzdHJpbmcoMCwgMTgwKS50cmltKCl9Li4uYCA6IGNvbW1lbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtYXV0aG9yXCI+e3RleHQoYXR0cmlidXRlc1tjb25maWcubmFtZUZpZWxkXSkgfHwgJ0Fub255bW91cyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcmdhbml6YXRpb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC1vcmdhbml6YXRpb25cIj57b3JnYW5pemF0aW9ufTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9fVxyXG4gICAgICA8L0RhdGFTb3VyY2VDb21wb25lbnQ+XHJcblxyXG4gICAgICB7c2VsZWN0ZWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1iYWNrZHJvcFwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cImNvbW1lbnQtZGV0YWlscy10aXRsZVwiIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKG51bGwpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiIG9uQ2xpY2s9e2V2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQobnVsbCl9IGFyaWEtbGFiZWw9XCJDbG9zZVwiPsOXPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMiBpZD1cImNvbW1lbnQtZGV0YWlscy10aXRsZVwiPnt0ZXh0KHNlbGVjdGVkW2NvbmZpZy5uYW1lRmllbGRdKSB8fCAnQW5vbnltb3VzJ308L2gyPlxyXG4gICAgICAgICAgICB7dGV4dChzZWxlY3RlZFtjb25maWcuY29tbWVudEZpZWxkXSkgJiYgPHA+PHN0cm9uZz57Z2V0RmllbGRUaXRsZShkYXRhU291cmNlLmRhdGFTb3VyY2VJZCwgY29uZmlnLmNvbW1lbnRGaWVsZCl9Ojwvc3Ryb25nPiB7dGV4dChzZWxlY3RlZFtjb25maWcuY29tbWVudEZpZWxkXSl9PC9wPn1cclxuICAgICAgICAgICAge3RleHQoc2VsZWN0ZWRbY29uZmlnLmNvbW1lbnRGaWVsZDJdKSAmJiA8cD48c3Ryb25nPntnZXRGaWVsZFRpdGxlKGRhdGFTb3VyY2UuZGF0YVNvdXJjZUlkLCBjb25maWcuY29tbWVudEZpZWxkMil9Ojwvc3Ryb25nPiB7dGV4dChzZWxlY3RlZFtjb25maWcuY29tbWVudEZpZWxkMl0pfTwvcD59XHJcbiAgICAgICAgICAgIHtnZXRPcmdhbml6YXRpb24oc2VsZWN0ZWQsIGNvbmZpZykgJiYgPHA+PHN0cm9uZz5Pcmdhbml6YXRpb246PC9zdHJvbmc+IHtnZXRPcmdhbml6YXRpb24oc2VsZWN0ZWQsIGNvbmZpZyl9PC9wPn1cclxuICAgICAgICAgICAge2dldERhdGUoc2VsZWN0ZWRbY29uZmlnLmRhdGVGaWVsZF0pICYmIDxwPjxzdHJvbmc+RGF0ZTo8L3N0cm9uZz4ge2dldERhdGUoc2VsZWN0ZWRbY29uZmlnLmRhdGVGaWVsZF0pfTwvcD59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=