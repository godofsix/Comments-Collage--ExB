System.register(["jimu-core","jimu-ui","jimu-ui/advanced/data-source-selector"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/collage/src/setting/setting.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");



const supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer]);
const headerTextToConfigure = [
    ['title', 'Title'],
    ['subtitle', 'Subtitle'],
    ['note', 'Note']
];
const fieldsToConfigure = [
    ['commentField', 'Primary comment field'],
    ['commentField2', 'Secondary comment field'],
    ['nameField', 'Name field'],
    ['organizationField', 'Division field'],
    ['organizationOtherField', 'Other division field'],
    ['dateField', 'Date field']
];
const Setting = (props) => {
    var _a, _b, _c, _d, _e;
    const [activeTab, setActiveTab] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('data-selection');
    const updateField = (key, value) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set(key, value)
        });
    };
    const dataSourceId = (_b = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId;
    const fields = dataSourceId
        ? Object.values((_e = (_d = (_c = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId)) === null || _c === void 0 ? void 0 : _c.getSchema()) === null || _d === void 0 ? void 0 : _d.fields) !== null && _e !== void 0 ? _e : {})
        : [];
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "p-3" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { value: activeTab, onChange: setActiveTab, fill: true, "aria-label": "Collage widget settings" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "data-selection", title: "Data" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "pt-3" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { mustUseDataSource: true, types: supportedTypes, widgetId: props.id, useDataSources: props.useDataSources, onChange: useDataSources => props.onSettingChange({ id: props.id, useDataSources }) }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "parameter", title: "Parameter" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "pt-3" },
                    headerTextToConfigure.map(([key, label]) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3", key: key },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, label),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { size: "sm", value: props.config[key], onChange: event => updateField(key, event.target.value) })))),
                    fields.length > 0 && fieldsToConfigure.map(([key, label]) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3", key: key },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, label),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: "sm", value: props.config[key], onChange: event => updateField(key, event.target.value) },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "" }, "Select a field"),
                            fields.map(field => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { key: field.jimuName, value: field.jimuName }, field.alias || field.jimuName))))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb2xsYWdlL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9EO0FBRWxDO0FBQ0s7QUFHMUUsTUFBTSxjQUFjLEdBQUcsb0RBQVMsQ0FBQyxDQUFDLHlEQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25FLE1BQU0scUJBQXFCLEdBQW9DO0lBQzdELENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUNsQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7SUFDeEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0NBQ2pCO0FBQ0QsTUFBTSxpQkFBaUIsR0FBb0M7SUFDekQsQ0FBQyxjQUFjLEVBQUUsdUJBQXVCLENBQUM7SUFDekMsQ0FBQyxlQUFlLEVBQUUseUJBQXlCLENBQUM7SUFDNUMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO0lBQzNCLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7SUFDdkMsQ0FBQyx3QkFBd0IsRUFBRSxzQkFBc0IsQ0FBQztJQUNs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LEtBQUssQ0FBQzs0QkFFekUsMkRBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsRUFBRSxxQkFBd0I7NEJBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNuQiwyREFBQywyQ0FBTSxJQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxJQUMvQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQ3ZCLENBQ1YsQ0FBQyxDQUNLLENBQ0wsQ0FDUCxDQUFDLENBQ0UsQ0FDRixDQUNELENBQ0gsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxPQUFPO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29sbGFnZS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCBJbW11dGFibGUsIEFsbERhdGFTb3VyY2VUeXBlcywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSU1GaWVsZFNjaGVtYSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgeyBMYWJlbCwgT3B0aW9uLCBTZWxlY3QsIFRhYiwgVGFicywgVGV4dElucHV0IH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHN1cHBvcnRlZFR5cGVzID0gSW1tdXRhYmxlKFtBbGxEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSlcclxuY29uc3QgaGVhZGVyVGV4dFRvQ29uZmlndXJlOiBBcnJheTxba2V5b2YgSU1Db25maWcsIHN0cmluZ10+ID0gW1xyXG4gIFsndGl0bGUnLCAnVGl0bGUnXSxcclxuICBbJ3N1YnRpdGxlJywgJ1N1YnRpdGxlJ10sXHJcbiAgWydub3RlJywgJ05vdGUnXVxyXG5dXHJcbmNvbnN0IGZpZWxkc1RvQ29uZmlndXJlOiBBcnJheTxba2V5b2YgSU1Db25maWcsIHN0cmluZ10+ID0gW1xyXG4gIFsnY29tbWVudEZpZWxkJywgJ1ByaW1hcnkgY29tbWVudCBmaWVsZCddLFxyXG4gIFsnY29tbWVudEZpZWxkMicsICdTZWNvbmRhcnkgY29tbWVudCBmaWVsZCddLFxyXG4gIFsnbmFtZUZpZWxkJywgJ05hbWUgZmllbGQnXSxcclxuICBbJ29yZ2FuaXphdGlvbkZpZWxkJywgJ0RpdmlzaW9uIGZpZWxkJ10sXHJcbiAgWydvcmdhbml6YXRpb25PdGhlckZpZWxkJywgJ090aGVyIGRpdmlzaW9uIGZpZWxkJ10sXHJcbiAgWydkYXRlRmllbGQnLCAnRGF0ZSBmaWVsZCddXHJcbl1cclxuXHJcbmNvbnN0IFNldHRpbmcgPSAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pID0+IHtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gUmVhY3QudXNlU3RhdGUoJ2RhdGEtc2VsZWN0aW9uJylcclxuICBjb25zdCB1cGRhdGVGaWVsZCA9IChrZXk6IGtleW9mIElNQ29uZmlnLCB2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldChrZXksIHZhbHVlKVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgZGF0YVNvdXJjZUlkID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXT8uZGF0YVNvdXJjZUlkXHJcbiAgY29uc3QgZmllbGRzID0gZGF0YVNvdXJjZUlkXHJcbiAgICA/IE9iamVjdC52YWx1ZXMoRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCk/LmdldFNjaGVtYSgpPy5maWVsZHMgPz8ge30pIGFzIElNRmllbGRTY2hlbWFbXVxyXG4gICAgOiBbXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgPFRhYnMgdmFsdWU9e2FjdGl2ZVRhYn0gb25DaGFuZ2U9e3NldEFjdGl2ZVRhYn0gZmlsbCBhcmlhLWxhYmVsPVwiQ29sbGFnZSB3aWRnZXQgc2V0dGluZ3NcIj5cclxuICAgICAgICA8VGFiIGlkPVwiZGF0YS1zZWxlY3Rpb25cIiB0aXRsZT1cIkRhdGFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPlxyXG4gICAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgICAgICB0eXBlcz17c3VwcG9ydGVkVHlwZXN9XHJcbiAgICAgICAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxyXG4gICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtwcm9wcy51c2VEYXRhU291cmNlc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXNlRGF0YVNvdXJjZXMgPT4gcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCB1c2VEYXRhU291cmNlcyB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVGFiPlxyXG4gICAgICAgIDxUYWIgaWQ9XCJwYXJhbWV0ZXJcIiB0aXRsZT1cIlBhcmFtZXRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICAgICAgICAgIHtoZWFkZXJUZXh0VG9Db25maWd1cmUubWFwKChba2V5LCBsYWJlbF0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+e2xhYmVsfTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb25maWdba2V5XSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVGaWVsZChrZXksIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge2ZpZWxkcy5sZW5ndGggPiAwICYmIGZpZWxkc1RvQ29uZmlndXJlLm1hcCgoW2tleSwgbGFiZWxdKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPntsYWJlbH08L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29uZmlnW2tleSBhcyBrZXlvZiBJTUNvbmZpZ10gYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdXBkYXRlRmllbGQoa2V5IGFzIGtleW9mIElNQ29uZmlnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgZmllbGQ8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoZmllbGQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtmaWVsZC5qaW11TmFtZX0gdmFsdWU9e2ZpZWxkLmppbXVOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZC5hbGlhcyB8fCBmaWVsZC5qaW11TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RhYj5cclxuICAgICAgPC9UYWJzPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nXHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=