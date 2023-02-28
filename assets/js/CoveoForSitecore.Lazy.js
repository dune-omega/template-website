(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("coveo-search-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["coveo-search-ui"], factory);
	else if(typeof exports === 'object')
		exports["CoveoForSitecore"] = factory(require("coveo-search-ui"));
	else
		root["CoveoForSitecore"] = factory(root["Coveo"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_coveo_search_ui__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"CoveoForSitecore.Lazy": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"CoveoForSitecoreAnalytics":"CoveoForSitecoreAnalytics","CoveoForSitecoreBindWithUserContext":"CoveoForSitecoreBindWithUserContext","CoveoForSitecoreConfigureSearchHub":"CoveoForSitecoreConfigureSearchHub","CoveoForSitecoreExpressions":"CoveoForSitecoreExpressions","CoveoForSitecoreExternalContent":"CoveoForSitecoreExternalContent","CoveoForSitecoreFilterExpression~CoveoForSitecoreRankingExpression":"CoveoForSitecoreFilterExpression~CoveoForSitecoreRankingExpression","CoveoForSitecoreFilterExpression":"CoveoForSitecoreFilterExpression","CoveoForSitecoreRankingExpression":"CoveoForSitecoreRankingExpression","CoveoForSitecoreLocalExpression":"CoveoForSitecoreLocalExpression","CoveoForSitecoreSyntax":"CoveoForSitecoreSyntax","GoogleApiPositionProvider":"GoogleApiPositionProvider","NavigatorPositionProvider":"NavigatorPositionProvider","SendAnalyticsToSitecore":"SendAnalyticsToSitecore","StaticPositionProvider":"StaticPositionProvider","ValidateAnalyticsIncluded":"ValidateAnalyticsIncluded"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/LazyEntry.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BaseModules.ts":
/*!****************************!*\
  !*** ./src/BaseModules.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = __webpack_require__(/*! ./base/Context */ "./src/base/Context.ts");
exports.Context = Context_1.Context;
var Prebinding_1 = __webpack_require__(/*! ./base/Prebinding */ "./src/base/Prebinding.ts");
exports.Prebinding = Prebinding_1.Prebinding;
var SearchEndpoint_1 = __webpack_require__(/*! ./base/SearchEndpoint */ "./src/base/SearchEndpoint.ts");
exports.SearchEndpoint = SearchEndpoint_1.SearchEndpoint;


/***/ }),

/***/ "./src/EventsModules.ts":
/*!******************************!*\
  !*** ./src/EventsModules.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContextEvents_1 = __webpack_require__(/*! ./events/ContextEvents */ "./src/events/ContextEvents.ts");
exports.SitecoreContextEvents = ContextEvents_1.SitecoreContextEvents;
var ExpressionEvents_1 = __webpack_require__(/*! ./events/ExpressionEvents */ "./src/events/ExpressionEvents.ts");
exports.SitecoreExpressionEvents = ExpressionEvents_1.SitecoreExpressionEvents;


/***/ }),

/***/ "./src/LazyEntry.ts":
/*!**************************!*\
  !*** ./src/LazyEntry.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var SitecorePublicPathUtils_1 = __webpack_require__(/*! ./utils/SitecorePublicPathUtils */ "./src/utils/SitecorePublicPathUtils.ts");
__webpack_require__.p = SitecorePublicPathUtils_1.SitecorePublicPathUtils.getDynamicPublicPath();
var CoveoForSitecoreContext_1 = __webpack_require__(/*! ./ui/context/CoveoForSitecoreContext */ "./src/ui/context/CoveoForSitecoreContext.ts");
exports.CoveoForSitecoreContext = CoveoForSitecoreContext_1.CoveoForSitecoreContext;
var LazyCoveoForSitecoreAnalytics_1 = __webpack_require__(/*! ./ui/analytics/LazyCoveoForSitecoreAnalytics */ "./src/ui/analytics/LazyCoveoForSitecoreAnalytics.ts");
LazyCoveoForSitecoreAnalytics_1.lazyCoveoForSitecoreAnalytics();
var LazyCoveoForSitecoreConfigureSearchHub_1 = __webpack_require__(/*! ./ui/analytics/LazyCoveoForSitecoreConfigureSearchHub */ "./src/ui/analytics/LazyCoveoForSitecoreConfigureSearchHub.ts");
LazyCoveoForSitecoreConfigureSearchHub_1.lazyCoveoForSitecoreConfigureSearchHub();
var LazySendAnalyticsToSitecore_1 = __webpack_require__(/*! ./ui/analytics/LazySendAnalyticsToSitecore */ "./src/ui/analytics/LazySendAnalyticsToSitecore.ts");
LazySendAnalyticsToSitecore_1.lazyCoveoSendAnalyticsToSitecore();
var LazyValidateAnalyticsIncluded_1 = __webpack_require__(/*! ./ui/analytics/LazyValidateAnalyticsIncluded */ "./src/ui/analytics/LazyValidateAnalyticsIncluded.ts");
LazyValidateAnalyticsIncluded_1.lazyValidateAnalyticsIncluded();
var LazyCoveoForSitecoreBindWithUserContext_1 = __webpack_require__(/*! ./ui/context/LazyCoveoForSitecoreBindWithUserContext */ "./src/ui/context/LazyCoveoForSitecoreBindWithUserContext.ts");
LazyCoveoForSitecoreBindWithUserContext_1.lazyCoveoForSitecoreBindWithUserContext();
var LazyCoveoForSitecoreExpressions_1 = __webpack_require__(/*! ./ui/scopes/LazyCoveoForSitecoreExpressions */ "./src/ui/scopes/LazyCoveoForSitecoreExpressions.ts");
LazyCoveoForSitecoreExpressions_1.lazyCoveoForSitecoreExpressions();
var LazyCoveoForSitecoreSyntax_1 = __webpack_require__(/*! ./ui/scopes/LazyCoveoForSitecoreSyntax */ "./src/ui/scopes/LazyCoveoForSitecoreSyntax.ts");
LazyCoveoForSitecoreSyntax_1.lazyCoveoForSitecoreSyntax();
var LazyCoveoForSitecoreRankingExpression_1 = __webpack_require__(/*! ./ui/scopes/LazyCoveoForSitecoreRankingExpression */ "./src/ui/scopes/LazyCoveoForSitecoreRankingExpression.ts");
LazyCoveoForSitecoreRankingExpression_1.lazyCoveoForSitecoreRankingExpression();
var LazyCoveoForSitecoreExternalContent_1 = __webpack_require__(/*! ./ui/scopes/LazyCoveoForSitecoreExternalContent */ "./src/ui/scopes/LazyCoveoForSitecoreExternalContent.ts");
LazyCoveoForSitecoreExternalContent_1.lazyCoveoForSitecoreExternalContent();
var LazyCoveoForSitecoreFilterExpression_1 = __webpack_require__(/*! ./ui/scopes/LazyCoveoForSitecoreFilterExpression */ "./src/ui/scopes/LazyCoveoForSitecoreFilterExpression.ts");
LazyCoveoForSitecoreFilterExpression_1.lazyCoveoForSitecoreFilterExpression();
var LazyCoveoForSitecoreLocalExpression_1 = __webpack_require__(/*! ./ui/scopes/LazyCoveoForSitecoreLocalExpression */ "./src/ui/scopes/LazyCoveoForSitecoreLocalExpression.ts");
LazyCoveoForSitecoreLocalExpression_1.lazyCoveoForSitecoreLocalExpression();
var LazyGoogleApiPositionProvider_1 = __webpack_require__(/*! ./ui/distance/LazyGoogleApiPositionProvider */ "./src/ui/distance/LazyGoogleApiPositionProvider.ts");
LazyGoogleApiPositionProvider_1.lazyCoveoGoogleApiPositionProvider();
var LazyNavigatorPositionProvider_1 = __webpack_require__(/*! ./ui/distance/LazyNavigatorPositionProvider */ "./src/ui/distance/LazyNavigatorPositionProvider.ts");
LazyNavigatorPositionProvider_1.lazyCoveoNavigatorPositionProvider();
var LazyStaticPositionProvider_1 = __webpack_require__(/*! ./ui/distance/LazyStaticPositionProvider */ "./src/ui/distance/LazyStaticPositionProvider.ts");
LazyStaticPositionProvider_1.lazyCoveoStaticPositionProvider();
__export(__webpack_require__(/*! ./EventsModules */ "./src/EventsModules.ts"));
__export(__webpack_require__(/*! ./BaseModules */ "./src/BaseModules.ts"));
__export(__webpack_require__(/*! ./base/Initialization */ "./src/base/Initialization.ts"));


/***/ }),

/***/ "./src/base/Context.ts":
/*!*****************************!*\
  !*** ./src/base/Context.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContextInitializer_1 = __webpack_require__(/*! ./initialization/ContextInitializer */ "./src/base/initialization/ContextInitializer.ts");
var CoveoForSitecoreContext_1 = __webpack_require__(/*! ../ui/context/CoveoForSitecoreContext */ "./src/ui/context/CoveoForSitecoreContext.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.configureContext = function (contextElement) {
        if (typeof contextElement === 'undefined' || contextElement === null) {
            throw Error('You must execute `configureContext` with an HTML element.');
        }
        var options = coveo_search_ui_1.ComponentOptions.initComponentOptions(contextElement, CoveoForSitecoreContext_1.CoveoForSitecoreContext);
        this.initializeWithContextOptions(contextElement, options);
    };
    Context.initializeWithContextOptions = function (contextElement, contextOptions) {
        var contextInitializer = new ContextInitializer_1.ContextInitializer();
        var fieldsHandler = contextInitializer.createFieldsHandler({
            externalFields: contextOptions.scExternalFields,
            sourceSpecificFields: contextOptions.scSourceSpecificFields,
            preferSourceSpecificFields: contextOptions.scPreferSourceSpecificFields,
            prefix: contextOptions.scFieldPrefix,
            suffix: contextOptions.scFieldSuffix,
        });
        var labels = contextInitializer.createLabelsHandler({
            labels: contextOptions.scLabels,
        });
        var sourceName = contextOptions.scIndexSourceName;
        contextInitializer.initializePrebinding({
            fieldsHandler: fieldsHandler,
            context: contextOptions,
        });
        contextInitializer.initializeUnderscoreFieldsHelpers(fieldsHandler);
        contextInitializer.initializeUnderscoreLabelsHelpers(labels);
        contextInitializer.initializeUnderscoreContextHelpers(sourceName);
        contextInitializer.initializeContextElement(contextElement);
        this.fields = fieldsHandler;
        this.labels = labels;
        this.element = contextElement;
    };
    return Context;
}());
exports.Context = Context;


/***/ }),

/***/ "./src/base/Initialization.ts":
/*!************************************!*\
  !*** ./src/base/Initialization.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExternalComponentInitializer_1 = __webpack_require__(/*! ./initialization/ExternalComponentInitializer */ "./src/base/initialization/ExternalComponentInitializer.ts");
var SearchboxInitializer_1 = __webpack_require__(/*! ./initialization/SearchboxInitializer */ "./src/base/initialization/SearchboxInitializer.ts");
var SearchInterfaceInitializer_1 = __webpack_require__(/*! ./initialization/SearchInterfaceInitializer */ "./src/base/initialization/SearchInterfaceInitializer.ts");
var ElementWithContextInitializer_1 = __webpack_require__(/*! ./initialization/ElementWithContextInitializer */ "./src/base/initialization/ElementWithContextInitializer.ts");
var HostedSearchPageInitializer_1 = __webpack_require__(/*! ./initialization/HostedSearchPageInitializer */ "./src/base/initialization/HostedSearchPageInitializer.ts");
exports.searchInterfaceInitializer = new SearchInterfaceInitializer_1.SearchInterfaceInitializer();
exports.searchboxInitializer = new SearchboxInitializer_1.SearchboxInitializer();
exports.externalComponentInitializer = new ExternalComponentInitializer_1.ExternalComponentInitializer();
exports.hostedSearchPageInitializer = new HostedSearchPageInitializer_1.HostedSearchPageInitializer();
function initSearchInterface(searchInterfaceElement) {
    return exports.searchInterfaceInitializer.initSearchInterface(searchInterfaceElement);
}
exports.initSearchInterface = initSearchInterface;
function initializeSearchInterfaceForExperienceEditor(searchInterfaceElement) {
    exports.searchInterfaceInitializer.initializeExperienceEditorHooksForSearchInterface(searchInterfaceElement);
    return initSearchInterface(searchInterfaceElement);
}
exports.initializeSearchInterfaceForExperienceEditor = initializeSearchInterfaceForExperienceEditor;
function initSearchboxIfStandalone(searchBoxElement, searchPageUri, options) {
    return exports.searchboxInitializer.initSearchboxIfStandalone(searchBoxElement, searchPageUri, options);
}
exports.initSearchboxIfStandalone = initSearchboxIfStandalone;
function initContextOnElement(element) {
    ElementWithContextInitializer_1.ElementWithContextInitializer.initializeContextWithinElement(element);
}
exports.initContextOnElement = initContextOnElement;
function initExternalComponentsSection(element) {
    exports.externalComponentInitializer.initializeExternalComponentSection(element);
}
exports.initExternalComponentsSection = initExternalComponentsSection;
function initExternalComponentsSectionForExperienceEditor(element) {
    exports.externalComponentInitializer.initializeExperienceEditorHooksForExternalComponentsSection(element);
    initExternalComponentsSection(element);
}
exports.initExternalComponentsSectionForExperienceEditor = initExternalComponentsSectionForExperienceEditor;
function initHostedSearchPageInitializer(element) {
    exports.hostedSearchPageInitializer.initializeSearchPage(element);
}
exports.initHostedSearchPageInitializer = initHostedSearchPageInitializer;


/***/ }),

/***/ "./src/base/Prebinding.ts":
/*!********************************!*\
  !*** ./src/base/Prebinding.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PrebindResolver_1 = __webpack_require__(/*! ../resolvers/prebinding/PrebindResolver */ "./src/resolvers/prebinding/PrebindResolver.ts");
var SortCriteriaPreprocessor = __webpack_require__(/*! ../resolvers/sortCriteria/SortCriteriaPreprocessor */ "./src/resolvers/sortCriteria/SortCriteriaPreprocessor.ts");
var Prebinding = /** @class */ (function () {
    function Prebinding() {
    }
    Prebinding.registerPrebindHelper = function (helperName, handler) {
        this.processor.registerPrebindHelper(helperName, handler);
    };
    Prebinding.getHelper = function (helperName) {
        return this.processor.getHelper(helperName);
    };
    Prebinding.applyPrebindingOnElement = function (rootElement) {
        if (this.processor.canApplyPrebind(rootElement) && this.processor.hasNotAppliedPrebind(rootElement)) {
            this.processor.applyToElement(rootElement);
        }
    };
    Prebinding.applyPreprocessingToElements = function (rootElement) {
        SortCriteriaPreprocessor.adjustDOMElements(rootElement);
        return rootElement.querySelectorAll('*');
    };
    Prebinding.applyPrebindingOnChildren = function (rootElement) {
        var _this = this;
        var processedElements = this.applyPreprocessingToElements(rootElement);
        this.nodeListToArray(processedElements)
            .map(function (element) { return element; })
            .filter(function (element) { return _this.processor.canApplyPrebind(element); })
            .filter(function (element) { return _this.processor.hasNotAppliedPrebind(element); })
            .forEach(function (element) { return _this.processor.applyToElement(element); });
    };
    Prebinding.nodeListToArray = function (elements) {
        var array = [];
        for (var i = 0, length = elements.length; i < length; i++) {
            array.push(elements[i]);
        }
        return array;
    };
    Prebinding.processor = new PrebindResolver_1.PrebindResolver();
    return Prebinding;
}());
exports.Prebinding = Prebinding;


/***/ }),

/***/ "./src/base/SearchEndpoint.ts":
/*!************************************!*\
  !*** ./src/base/SearchEndpoint.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var SearchEndpoint = /** @class */ (function () {
    function SearchEndpoint() {
    }
    SearchEndpoint.configureSitecoreEndpoint = function (options) {
        if (typeof options === 'undefined') {
            throw Error("You must define endpoint options when calling 'configureSitecoreEndpoint'.");
        }
        SearchEndpoint.getAccessToken().then(function (accessToken) {
            SearchEndpoint.initializeEndPoint(options, accessToken);
            SearchEndpoint.dispatchInitializationEvent();
        });
    };
    SearchEndpoint.initializeEndPoint = function (options, accessToken) {
        var endpoint = SearchEndpoint.createNewEndpoint(options, accessToken);
        coveo_search_ui_1.SearchEndpoint.endpoints['default'] = endpoint;
    };
    SearchEndpoint.dispatchInitializationEvent = function () {
        var customEvent = document.createEvent('CustomEvent');
        customEvent.initEvent('CoveoSearchEndpointInitialized', false, true);
        if (document.readyState !== 'loading') {
            document.dispatchEvent(customEvent);
        }
        else {
            document.addEventListener('DOMContentLoaded', function () {
                document.dispatchEvent(customEvent);
            });
        }
    };
    SearchEndpoint.getAccessToken = function () {
        return SearchEndpoint.fetchAccessToken()
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
            .then(function (data) { return data.token; })
            .catch(function () {
            // Returning an empty token delegates error handling of invalid access token to the Coveo Search UI.
            return '';
        });
    };
    SearchEndpoint.fetchAccessToken = function () {
        return fetch('/coveo/rest/token');
    };
    SearchEndpoint.createNewEndpoint = function (options, accessToken) {
        return new coveo_search_ui_1.SearchEndpoint({
            restUri: options.restEndpointUri ? options.restEndpointUri + "/search" : '/coveo/rest/search',
            queryStringArguments: {
                sitecoreItemUri: options.itemUri,
                siteName: options.siteName,
            },
            accessToken: accessToken,
            renewAccessToken: SearchEndpoint.getAccessToken,
        });
    };
    return SearchEndpoint;
}());
exports.SearchEndpoint = SearchEndpoint;


/***/ }),

/***/ "./src/base/initialization/ContextInitializer.ts":
/*!*******************************************************!*\
  !*** ./src/base/initialization/ContextInitializer.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CoveoFieldsHandler_1 = __webpack_require__(/*! ../../handlers/CoveoFieldsHandler */ "./src/handlers/CoveoFieldsHandler.ts");
var SourceSpecificFieldResolver_1 = __webpack_require__(/*! ../../handlers/SourceSpecificFieldResolver */ "./src/handlers/SourceSpecificFieldResolver.ts");
var CoveoLabelsHandler_1 = __webpack_require__(/*! ../../handlers/CoveoLabelsHandler */ "./src/handlers/CoveoLabelsHandler.ts");
var Prebinding_1 = __webpack_require__(/*! ../Prebinding */ "./src/base/Prebinding.ts");
var PrebindHelpers_1 = __webpack_require__(/*! ../../resolvers/prebinding/PrebindHelpers */ "./src/resolvers/prebinding/PrebindHelpers.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var LegacyFieldTypeResolver_1 = __webpack_require__(/*! ../../handlers/LegacyFieldTypeResolver */ "./src/handlers/LegacyFieldTypeResolver.ts");
var ContextInitializer = /** @class */ (function () {
    function ContextInitializer() {
    }
    ContextInitializer.prototype.createFieldsHandler = function (options) {
        var externalFields = options.externalFields || [];
        var sourceSpecificFields = options.sourceSpecificFields || [];
        var fieldTypeResolver = options.preferSourceSpecificFields
            ? new LegacyFieldTypeResolver_1.LegacyFieldTypeResolver(externalFields)
            : new SourceSpecificFieldResolver_1.SourceSpecificFieldResolver(sourceSpecificFields, externalFields);
        return new CoveoFieldsHandler_1.CoveoFieldsHandler(fieldTypeResolver, options.prefix, options.suffix);
    };
    ContextInitializer.prototype.createLabelsHandler = function (options) {
        var labels = options.labels || {};
        return new CoveoLabelsHandler_1.CoveoLabelsHandler(labels);
    };
    ContextInitializer.prototype.initializePrebinding = function (args) {
        PrebindHelpers_1.PrebindHelpers.getAllPrebindHelpers().forEach(function (helper) {
            Prebinding_1.Prebinding.registerPrebindHelper(helper.name, helper.getPrebind(args));
        });
    };
    ContextInitializer.prototype.initializeUnderscoreFieldsHelpers = function (fieldsHandler) {
        coveo_search_ui_1.TemplateHelpers.registerTemplateHelper('coveoFieldValue', function (fieldName) {
            return this.raw[fieldsHandler.toCoveo(fieldName)];
        });
        coveo_search_ui_1.TemplateHelpers.registerTemplateHelper('coveoFieldName', function (fieldName) {
            return fieldsHandler.toCoveo(fieldName);
        });
    };
    ContextInitializer.prototype.initializeUnderscoreLabelsHelpers = function (labels) {
        coveo_search_ui_1.TemplateHelpers.registerTemplateHelper('translateLabel', function (labelKey) {
            return labels.translate(labelKey);
        });
    };
    ContextInitializer.prototype.initializeUnderscoreContextHelpers = function (sourceName) {
        coveo_search_ui_1.TemplateHelpers.registerTemplateHelper('currentSourceName', function () {
            return sourceName;
        });
    };
    ContextInitializer.prototype.initializeContextElement = function (contextElement) {
        Prebinding_1.Prebinding.applyPrebindingOnElement(contextElement);
    };
    return ContextInitializer;
}());
exports.ContextInitializer = ContextInitializer;


/***/ }),

/***/ "./src/base/initialization/ElementWithContextInitializer.ts":
/*!******************************************************************!*\
  !*** ./src/base/initialization/ElementWithContextInitializer.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Prebinding_1 = __webpack_require__(/*! ../Prebinding */ "./src/base/Prebinding.ts");
var Context_1 = __webpack_require__(/*! ../Context */ "./src/base/Context.ts");
var HTMLUtils_1 = __webpack_require__(/*! ../../utils/HTMLUtils */ "./src/utils/HTMLUtils.ts");
var ElementWithContextInitializer = /** @class */ (function () {
    function ElementWithContextInitializer() {
    }
    ElementWithContextInitializer.initializeContextWithinElement = function (element) {
        if (!!Context_1.Context.element) {
            element.appendChild(HTMLUtils_1.cloneElementSafelyForAccessibility(Context_1.Context.element));
        }
        Prebinding_1.Prebinding.applyPrebindingOnElement(element);
        Prebinding_1.Prebinding.applyPrebindingOnChildren(element);
    };
    return ElementWithContextInitializer;
}());
exports.ElementWithContextInitializer = ElementWithContextInitializer;


/***/ }),

/***/ "./src/base/initialization/ExternalComponentInitializer.ts":
/*!*****************************************************************!*\
  !*** ./src/base/initialization/ExternalComponentInitializer.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SearchInterfaceComponentInitializer_1 = __webpack_require__(/*! ../../resolvers/components/SearchInterfaceComponentInitializer */ "./src/resolvers/components/SearchInterfaceComponentInitializer.ts");
var SitecoreExperienceEditor_1 = __webpack_require__(/*! ./SitecoreExperienceEditor */ "./src/base/initialization/SitecoreExperienceEditor.ts");
var SearchInterfaceProvider_1 = __webpack_require__(/*! ../../utils/SearchInterfaceProvider */ "./src/utils/SearchInterfaceProvider.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var ExternalComponentInitializer = /** @class */ (function () {
    function ExternalComponentInitializer(experienceEditor, searchInterfaceComponentInitializer) {
        if (experienceEditor === void 0) { experienceEditor = SitecoreExperienceEditor_1.getExperienceEditorInstance(); }
        if (searchInterfaceComponentInitializer === void 0) { searchInterfaceComponentInitializer = SearchInterfaceComponentInitializer_1.getInitializerInstance(); }
        this.experienceEditor = experienceEditor;
        this.searchInterfaceComponentInitializer = searchInterfaceComponentInitializer;
        this.searchInterfacesProvider = new SearchInterfaceProvider_1.SearchInterfacesProvider();
    }
    ExternalComponentInitializer.prototype.initializeExternalComponentSection = function (externalComponentsSection) {
        var searchInterface = this.findSearchInterfaceForSection(externalComponentsSection);
        if (!!searchInterface) {
            this.searchInterfaceComponentInitializer.loadComponentsWithSearchInterfaceInitialization(searchInterface, externalComponentsSection);
        }
        else {
            var getAllSearchInterfaceIds = this.getAllSearchInterfaceIdsInPage();
            if (getAllSearchInterfaceIds.length > 0) {
                console.error("Could not find the search interface element with the following ID: " + this.getSearchInterfaceId(externalComponentsSection) + ". The following IDs were found: " + getAllSearchInterfaceIds.join(',') + ".", externalComponentsSection);
            }
        }
    };
    ExternalComponentInitializer.prototype.initializeExperienceEditorHooksForExternalComponentsSection = function (externalComponentsSection) {
        var _this = this;
        var searchInterface = this.findSearchInterfaceForSection(externalComponentsSection);
        if (!!searchInterface) {
            this.experienceEditor.registerOnLoadRenderingFromUrl(function (callbackData) {
                var component = _this.experienceEditor.getComponentFromLoadRenderingFromUrlCallbackData(callbackData);
                if (externalComponentsSection.contains(component)) {
                    _this.searchInterfaceComponentInitializer.loadComponentsForSearchInterface(coveo_search_ui_1.get(searchInterface, coveo_search_ui_1.SearchInterface), component);
                }
            });
        }
    };
    ExternalComponentInitializer.prototype.findSearchInterfaceForSection = function (externalComponentsSection) {
        var searchInterfaceId = this.getSearchInterfaceId(externalComponentsSection);
        var searchInterfaceElement = document.getElementById(searchInterfaceId);
        if (!!searchInterfaceElement) {
            return searchInterfaceElement;
        }
    };
    ExternalComponentInitializer.prototype.getSearchInterfaceId = function (externalComponentsSection) {
        return externalComponentsSection.dataset.searchInterfaceId;
    };
    ExternalComponentInitializer.prototype.getAllSearchInterfaceIdsInPage = function () {
        return this.searchInterfacesProvider
            .getSearchInterfacesInPage(['SearchInterface'])
            .map(function (element) { return element.id; })
            .filter(function (id) { return !!id; });
    };
    return ExternalComponentInitializer;
}());
exports.ExternalComponentInitializer = ExternalComponentInitializer;


/***/ }),

/***/ "./src/base/initialization/HostedSearchPageInitializer.ts":
/*!****************************************************************!*\
  !*** ./src/base/initialization/HostedSearchPageInitializer.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HostedSearchPageInitializer = /** @class */ (function () {
    function HostedSearchPageInitializer() {
        this.UNABLE_TO_RETRIEVE_ACCESS_TOKEN = 'Unable to retrieve access token.';
    }
    HostedSearchPageInitializer.prototype.initializeSearchPage = function (element) {
        var _this = this;
        this.searchPageElement = element;
        this.searchEndpointUri = element.dataset.searchEndpointUri;
        this.analyticsEndpointUri = element.dataset.analyticsEndpointUri;
        this.organizationId = element.dataset.organizationId;
        this.searchHub = element.dataset.searchHub;
        this.isInExperienceEditor = element.dataset.isInExperienceEditor === 'true';
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getAccessToken()
            .then(function (accessToken) {
            _this.initializeCoveo(element, accessToken);
        })
            .catch(function (err) {
            if (_this.isInExperienceEditor) {
                _this.displayErrorMessageInExperienceEditor(err.message);
            }
        });
    };
    HostedSearchPageInitializer.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetchAccessToken()
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                        throw Error(_this.UNABLE_TO_RETRIEVE_ACCESS_TOKEN);
                    })
                        .then(function (data) { return data.token; })
                        .catch(function (err) {
                        if (_this.isInExperienceEditor) {
                            _this.displayErrorMessageInExperienceEditor(err.message);
                        }
                        return '';
                    })];
            });
        });
    };
    HostedSearchPageInitializer.prototype.initializeCoveo = function (element, accessToken) {
        var searchPageRoot = element.querySelector('.CoveoSearchInterface');
        if (searchPageRoot && typeof Coveo !== 'undefined') {
            Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
                restUri: this.searchEndpointUri + "/rest/search/",
                accessToken: accessToken,
                queryStringArguments: {
                    organizationId: this.organizationId,
                },
                renewAccessToken: this.getAccessToken,
            });
            Coveo.Analytics.options.searchHub['defaultValue'] = this.searchHub;
            Coveo.Analytics.options.organization['defaultValue'] = this.organizationId;
            Coveo.Analytics.options.endpoint['defaultValue'] = this.analyticsEndpointUri + "/rest/ua/";
            Coveo.init(searchPageRoot);
        }
    };
    HostedSearchPageInitializer.prototype.fetchAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/coveo/rest/token")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HostedSearchPageInitializer.prototype.displayErrorMessageInExperienceEditor = function (message) {
        var errorMessageElement = "\n            <span class='errorMessage'>" + message + "</span>\n        ";
        this.searchPageElement.insertAdjacentHTML('afterbegin', errorMessageElement);
    };
    return HostedSearchPageInitializer;
}());
exports.HostedSearchPageInitializer = HostedSearchPageInitializer;


/***/ }),

/***/ "./src/base/initialization/SearchInterfaceInitializer.ts":
/*!***************************************************************!*\
  !*** ./src/base/initialization/SearchInterfaceInitializer.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Initialization_1 = __webpack_require__(/*! ../Initialization */ "./src/base/Initialization.ts");
var SearchInterfaceComponentInitializer_1 = __webpack_require__(/*! ../../resolvers/components/SearchInterfaceComponentInitializer */ "./src/resolvers/components/SearchInterfaceComponentInitializer.ts");
var SitecoreExperienceEditor_1 = __webpack_require__(/*! ./SitecoreExperienceEditor */ "./src/base/initialization/SitecoreExperienceEditor.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var SearchInterfaceInitializer = /** @class */ (function () {
    function SearchInterfaceInitializer(experienceEditor, searchInterfaceComponentInitializer) {
        if (experienceEditor === void 0) { experienceEditor = SitecoreExperienceEditor_1.getExperienceEditorInstance(); }
        if (searchInterfaceComponentInitializer === void 0) { searchInterfaceComponentInitializer = SearchInterfaceComponentInitializer_1.getInitializerInstance(); }
        this.experienceEditor = experienceEditor;
        this.searchInterfaceComponentInitializer = searchInterfaceComponentInitializer;
    }
    SearchInterfaceInitializer.prototype.initSearchInterface = function (searchInterface) {
        if (!this.experienceEditor.isInBackgroundRendering()) {
            this.experienceEditor.registerShowDebugInformationCallback();
            Initialization_1.initContextOnElement(searchInterface);
            var searchInterfacePromise = coveo_search_ui_1.init(searchInterface);
            searchInterfacePromise.then(function () {
                var event = document.createEvent('CustomEvent');
                event.initEvent('SearchInterfaceInitialized', false, true);
                searchInterface.dispatchEvent(event);
            });
            return searchInterfacePromise;
        }
    };
    SearchInterfaceInitializer.prototype.initializeExperienceEditorHooksForSearchInterface = function (searchInterface) {
        var _this = this;
        this.experienceEditor.registerOnLoadRenderingFromUrl(function (callbackData) {
            var component = _this.experienceEditor.getComponentFromLoadRenderingFromUrlCallbackData(callbackData);
            // Since multiple search interfaces can register event handlers, this ensures that the component is initializing for the correct search interface.
            if (searchInterface.contains(component)) {
                var searchInterfaceComponent = Coveo.get(searchInterface, Coveo.SearchInterface);
                _this.searchInterfaceComponentInitializer.loadComponentsForSearchInterface(searchInterfaceComponent, component);
            }
        });
        this.experienceEditor.registerOnAfterPersonalizationChanged(function (element) {
            if (searchInterface.contains(element)) {
                var searchInterfaceComponent = Coveo.get(searchInterface, Coveo.SearchInterface);
                _this.searchInterfaceComponentInitializer.loadComponentsForSearchInterface(searchInterfaceComponent, element);
            }
        });
        this.experienceEditor.registerBeforeUnloadingChrome(function (element) {
            if (searchInterface.contains(element)) {
                var searchInterfaceComponent = Coveo.get(searchInterface, Coveo.SearchInterface);
                _this.searchInterfaceComponentInitializer.tryUnloadComponentsForSearchInterface(searchInterfaceComponent, element);
            }
        });
    };
    return SearchInterfaceInitializer;
}());
exports.SearchInterfaceInitializer = SearchInterfaceInitializer;


/***/ }),

/***/ "./src/base/initialization/SearchboxInitializer.ts":
/*!*********************************************************!*\
  !*** ./src/base/initialization/SearchboxInitializer.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SearchInterfaceProvider_1 = __webpack_require__(/*! ../../utils/SearchInterfaceProvider */ "./src/utils/SearchInterfaceProvider.ts");
var ElementWithContextInitializer_1 = __webpack_require__(/*! ./ElementWithContextInitializer */ "./src/base/initialization/ElementWithContextInitializer.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var SearchboxInitializer = /** @class */ (function () {
    function SearchboxInitializer() {
        this.searchInterfacesProvider = new SearchInterfaceProvider_1.SearchInterfacesProvider();
    }
    SearchboxInitializer.prototype.initSearchboxIfStandalone = function (searchboxElement, searchPageUri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var searchInterfaces;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchInterfaces = this.searchInterfacesProvider.getSearchInterfacesInPage([
                            'Recommendation',
                            'SearchInterface',
                        ]);
                        return [4 /*yield*/, this.waitForSearchInterfacesInitialization(searchInterfaces)];
                    case 1:
                        _a.sent();
                        if (this.searchboxElementIsNotInitialized(searchboxElement)) {
                            if (!!searchPageUri) {
                                ElementWithContextInitializer_1.ElementWithContextInitializer.initializeContextWithinElement(searchboxElement.parentElement);
                                // coveo-search-ui doesn't like an initSearchbox directly on the searchbox.
                                coveo_search_ui_1.initSearchbox(searchboxElement.parentElement, searchPageUri, options);
                            }
                            else {
                                console.warn("The search box is not included in any search interface and the \"searchPageUri\" parameters is not specified. Consider using a Global Searchbox instead.", searchboxElement);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchboxInitializer.prototype.searchboxElementIsNotInitialized = function (searchBoxElement) {
        return typeof coveo_search_ui_1.get(searchBoxElement, Coveo.Searchbox) === 'undefined';
    };
    SearchboxInitializer.prototype.waitForSearchInterfacesInitialization = function (searchInterfaces) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.getAllSearchInterfacesAfterComponentInitialization(searchInterfaces))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchboxInitializer.prototype.getAllSearchInterfacesAfterComponentInitialization = function (searchInterfaces) {
        var _this = this;
        return searchInterfaces
            .map(function (searchInterface) { return coveo_search_ui_1.$$(searchInterface); })
            .map(function (searchInterface) { return _this.waitForSearchInterfaceInitialization(searchInterface); });
    };
    SearchboxInitializer.prototype.waitForSearchInterfaceInitialization = function (searchInterface) {
        return new Promise(function (resolve, reject) {
            if (searchInterface.hasClass('coveo-after-initialization')) {
                return resolve();
            }
            searchInterface.on(coveo_search_ui_1.InitializationEvents.afterComponentsInitialization, function () { return resolve(); });
        });
    };
    return SearchboxInitializer;
}());
exports.SearchboxInitializer = SearchboxInitializer;


/***/ }),

/***/ "./src/base/initialization/SitecoreExperienceEditor.ts":
/*!*************************************************************!*\
  !*** ./src/base/initialization/SitecoreExperienceEditor.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HTMLUtils_1 = __webpack_require__(/*! ../../utils/HTMLUtils */ "./src/utils/HTMLUtils.ts");
var SitecoreExperienceEditor = /** @class */ (function () {
    function SitecoreExperienceEditor() {
        this.isAfterFrameLoadedOverriden = false;
        this.isAfterPersonalizationChangedOverriden = false;
        this.isBeforeUnloadingChromeOverriden = false;
        this.onAfterFrameLoadedCallbacks = [];
        this.onAfterPersonalizationChanged = [];
        this.onBeforeUnloadingChrome = [];
    }
    SitecoreExperienceEditor.prototype.registerOnLoadRenderingFromUrl = function (onAfterFrameLoadedCallback) {
        this.tryOverrideSitecoreLoadRenderingFromUrl();
        this.onAfterFrameLoadedCallbacks.push(onAfterFrameLoadedCallback);
    };
    SitecoreExperienceEditor.prototype.registerBeforeUnloadingChrome = function (onBeforeUnloadingChromeCallback) {
        this.tryOverrideOnUnloadingChrome();
        this.onBeforeUnloadingChrome.push(onBeforeUnloadingChromeCallback);
    };
    SitecoreExperienceEditor.prototype.registerOnAfterPersonalizationChanged = function (onAfterPersonalizationChanged) {
        this.tryOverrideSitecoreChromeTypesRenderingChangeCondition();
        this.onAfterPersonalizationChanged.push(onAfterPersonalizationChanged);
    };
    SitecoreExperienceEditor.prototype.isInBackgroundRendering = function () {
        return window.location.search.indexOf(SitecoreExperienceEditor.isInBackgroundRenderingParameterName) !== -1;
    };
    SitecoreExperienceEditor.prototype.getComponentFromLoadRenderingFromUrlCallbackData = function (callbackData) {
        var chromeRendering = document.getElementById(callbackData.opening[0].id);
        return chromeRendering.nextElementSibling;
    };
    SitecoreExperienceEditor.prototype.tryOverrideSitecoreLoadRenderingFromUrl = function () {
        if (!this.isAfterFrameLoadedOverriden && typeof Sitecore !== 'undefined') {
            this.overrideSitecoreLoadRenderingFromUrl();
        }
    };
    SitecoreExperienceEditor.prototype.overrideSitecoreLoadRenderingFromUrl = function () {
        var _this = this;
        var originalLoad = Sitecore.PageModes.ChromeTypes.Placeholder.prototype.insertRendering;
        var onAfterFrameLoadedCallback = function (callbackData) {
            _this.onAfterFrameLoadedCallbacks.forEach(function (callback) { return callback(callbackData); });
        };
        Sitecore.PageModes.ChromeTypes.Placeholder.prototype.insertRendering = function (frameLoadedCallback) {
            originalLoad.call(this, frameLoadedCallback);
            onAfterFrameLoadedCallback(frameLoadedCallback);
        };
        this.isAfterFrameLoadedOverriden = true;
    };
    SitecoreExperienceEditor.prototype.tryOverrideOnUnloadingChrome = function () {
        if (!this.isBeforeUnloadingChromeOverriden && typeof Sitecore !== 'undefined') {
            this.overrideSitecoreChromeChangeCondition();
            this.isBeforeUnloadingChromeOverriden = true;
        }
    };
    SitecoreExperienceEditor.prototype.overrideSitecoreChromeChangeCondition = function () {
        var _this = this;
        var originalChangeCondition = Sitecore.PageModes.ChromeTypes.Rendering.prototype.changeCondition;
        var onBeforeChangeCondition = function (changedElement) {
            _this.onBeforeUnloadingChrome.forEach(function (callback) { return callback(changedElement); });
        };
        Sitecore.PageModes.ChromeTypes.Rendering.prototype.changeCondition = function (id, sender, preserveCacheUpdating) {
            onBeforeChangeCondition(this.chrome.element[0]);
            originalChangeCondition.apply(this, arguments);
        };
    };
    SitecoreExperienceEditor.prototype.tryOverrideSitecoreChromeTypesRenderingChangeCondition = function () {
        if (!this.isAfterPersonalizationChangedOverriden && typeof Sitecore !== 'undefined') {
            this.overrideSitecoreChromeTypesRenderingChangeCondition();
        }
    };
    SitecoreExperienceEditor.prototype.overrideSitecoreChromeTypesRenderingChangeCondition = function () {
        var _this = this;
        var originalStartActivation = Sitecore.PageModes.ChromeTypes.Rendering.prototype._startActivation;
        var originalEndActivation = Sitecore.PageModes.ChromeTypes.Rendering.prototype._endActivation;
        var elementToProcessWhenFinished;
        var onAfterPersonalizationChanged = function (changedElement) {
            _this.onAfterPersonalizationChanged.forEach(function (callback) { return callback(changedElement); });
        };
        var getValidMarker = function (markersAndElements) {
            return _this.isDifferentFirstLoadMarker(markersAndElements) ? markersAndElements[2] : markersAndElements[1];
        };
        Sitecore.PageModes.ChromeTypes.Rendering.prototype._startActivation = function (markersAndElements, fieldId) {
            elementToProcessWhenFinished = getValidMarker(markersAndElements);
            originalStartActivation.apply(this, arguments);
        };
        Sitecore.PageModes.ChromeTypes.Rendering.prototype._endActivation = function (reason) {
            originalEndActivation.apply(this, arguments);
            if (elementToProcessWhenFinished) {
                onAfterPersonalizationChanged(elementToProcessWhenFinished);
            }
        };
        this.isAfterPersonalizationChangedOverriden = true;
    };
    // In Sitecore 8.0, for some reason, there are two additionnal text nodes *only on the first load*.
    // The cached version does not have those.
    SitecoreExperienceEditor.prototype.isDifferentFirstLoadMarker = function (markersAndElements) {
        return markersAndElements[1].nodeType === Node.TEXT_NODE;
    };
    SitecoreExperienceEditor.prototype.registerShowDebugInformationCallback = function () {
        if (!window['scCoveoShowDebugInformation']) {
            window['scCoveoShowDebugInformation'] = function (debugModeEnabled) {
                var debugInfoElements = HTMLUtils_1.nodeListToArray(document.getElementsByClassName('coveo-debug-information'));
                if (debugModeEnabled) {
                    debugInfoElements.forEach(function (element) { return element.classList.remove('coveo-debug-hidden'); });
                }
                else {
                    debugInfoElements.forEach(function (element) { return element.classList.add('coveo-debug-hidden'); });
                }
                // Chromes are not updated correctly until an event refreshes them. This forces the update.
                Sitecore.PageModes.ChromeManager.resetChromes();
            };
        }
    };
    SitecoreExperienceEditor.isInBackgroundRenderingParameterName = 'sc_phk';
    return SitecoreExperienceEditor;
}());
exports.SitecoreExperienceEditor = SitecoreExperienceEditor;
var staticInstance = new SitecoreExperienceEditor();
function getExperienceEditorInstance() {
    return staticInstance;
}
exports.getExperienceEditorInstance = getExperienceEditorInstance;


/***/ }),

/***/ "./src/events/ContextEvents.ts":
/*!*************************************!*\
  !*** ./src/events/ContextEvents.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SitecoreContextEvents = /** @class */ (function () {
    function SitecoreContextEvents() {
    }
    SitecoreContextEvents.onSitecoreContextInitialization = 'onSitecoreContextInitialization';
    return SitecoreContextEvents;
}());
exports.SitecoreContextEvents = SitecoreContextEvents;


/***/ }),

/***/ "./src/events/ExpressionEvents.ts":
/*!****************************************!*\
  !*** ./src/events/ExpressionEvents.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SitecoreExpressionEvents = /** @class */ (function () {
    function SitecoreExpressionEvents() {
    }
    SitecoreExpressionEvents.onBuildingSitecoreExternalContent = 'onBuildingSitecoreExternalContent';
    SitecoreExpressionEvents.onBuildingLocalSitecoreInstanceExpression = 'onBuildingLocalSitecoreInstanceExpression';
    return SitecoreExpressionEvents;
}());
exports.SitecoreExpressionEvents = SitecoreExpressionEvents;


/***/ }),

/***/ "./src/handlers/CoveoFieldsHandler.ts":
/*!********************************************!*\
  !*** ./src/handlers/CoveoFieldsHandler.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LegacyFieldTypeResolver_1 = __webpack_require__(/*! ./LegacyFieldTypeResolver */ "./src/handlers/LegacyFieldTypeResolver.ts");
var CoveoFieldsHandler = /** @class */ (function () {
    function CoveoFieldsHandler(resolver, prefix, suffix) {
        this.prefix = prefix;
        this.suffix = suffix;
        if (resolver.shouldDecorate !== undefined) {
            this.resolver = resolver;
        }
        else {
            // Handle legacy constructor case.
            this.resolver = new LegacyFieldTypeResolver_1.LegacyFieldTypeResolver(resolver);
        }
    }
    CoveoFieldsHandler.prototype.toCoveo = function (fieldName) {
        if (this.isValidFieldName(fieldName)) {
            var lowerCaseFieldName = fieldName.toLowerCase();
            var fieldWithoutDelimiter = this.stripCoveoFieldDelimiter(lowerCaseFieldName);
            if (CoveoFieldsHandler.escapedCharacterRegex.test(fieldWithoutDelimiter)) {
                console.warn("Field name " + fieldName + " contains the z\\d{2,3}x pattern. Ensure you avoid using this pattern in field names.");
                console.trace();
            }
            var translatedFieldWithoutDelimiter = this.translateFieldName(fieldWithoutDelimiter);
            return this.startsWithAt(fieldName)
                ? this.addCoveoFieldDelimiter(translatedFieldWithoutDelimiter)
                : translatedFieldWithoutDelimiter;
        }
        else {
            console.error("Could not translate the '" + fieldName + "' field to a Coveo field. Returning as is.");
            return fieldName;
        }
    };
    CoveoFieldsHandler.prototype.addCoveoFieldDelimiter = function (fieldName) {
        var fieldNameWithDelimiter = fieldName;
        if (!this.startsWithAt(fieldName)) {
            fieldNameWithDelimiter = ("" + CoveoFieldsHandler.coveoFieldDelimiter + fieldName).toLowerCase();
        }
        return fieldNameWithDelimiter;
    };
    CoveoFieldsHandler.prototype.isCoveoFieldName = function (fieldName) {
        var strippedFieldName = this.stripCoveoFieldDelimiter(fieldName);
        return this.resolver.isExternalField(strippedFieldName) || this.isDecorated(strippedFieldName);
    };
    CoveoFieldsHandler.prototype.isDecorated = function (fieldName) {
        var regexString = this.prefix + '[\\w]+' + this.suffix;
        var coveoFieldNameRegex = new RegExp(regexString);
        return coveoFieldNameRegex.test(fieldName);
    };
    CoveoFieldsHandler.prototype.isValidFieldName = function (fieldName) {
        return typeof fieldName !== 'undefined' && fieldName !== '';
    };
    CoveoFieldsHandler.prototype.startsWithAt = function (fieldName) {
        return fieldName[0] === CoveoFieldsHandler.coveoFieldDelimiter;
    };
    CoveoFieldsHandler.prototype.stripCoveoFieldDelimiter = function (fieldName) {
        var field = fieldName;
        if (this.startsWithAt(fieldName)) {
            field = field.substr(1);
        }
        return field;
    };
    CoveoFieldsHandler.prototype.translateFieldName = function (fieldName) {
        var field = fieldName;
        if (this.resolver.shouldEscapeSpecialCharacters(fieldName) && !this.isFieldAlreadyTranslated(fieldName)) {
            field = this.replaceSpecialCharacters(field);
        }
        if (this.resolver.shouldDecorate(fieldName)) {
            field = this.prefix + field + this.suffix;
        }
        if (this.resolver.shouldEscapeFirstCharacter(field)) {
            field = this.replaceFirstCharacter(field);
        }
        return field;
    };
    // This check was added to avoid fields from being double translated. See SC-4266.
    CoveoFieldsHandler.prototype.isFieldAlreadyTranslated = function (fieldName) {
        return (CoveoFieldsHandler.fieldNameRegex.test(fieldName) &&
            CoveoFieldsHandler.escapedCharacterRegex.test(fieldName));
    };
    CoveoFieldsHandler.prototype.replaceFirstCharacter = function (fieldName) {
        var characters = fieldName.split('');
        var firstCharacter = characters.shift();
        characters.unshift(this.escapeSpecialCharacter(firstCharacter));
        return characters.join('');
    };
    CoveoFieldsHandler.prototype.replaceSpecialCharacters = function (fieldName) {
        return fieldName.split('').map(this.replaceSpecialCharacter.bind(this)).join('');
    };
    CoveoFieldsHandler.prototype.replaceSpecialCharacter = function (character) {
        if (character.match(CoveoFieldsHandler.nonSpecialCharacters)) {
            return character;
        }
        else {
            return this.escapeSpecialCharacter(character);
        }
    };
    CoveoFieldsHandler.prototype.escapeSpecialCharacter = function (character) {
        return "z" + character.charCodeAt(0) + "x";
    };
    // 'z' and 'x' are also considered as special characters because
    // they are used in the escaping logic. So we have to remove them
    // from the regular expression pattern.
    CoveoFieldsHandler.nonSpecialCharactersString = '[a-wyA-WY0-9]';
    CoveoFieldsHandler.nonSpecialCharacters = new RegExp(CoveoFieldsHandler.nonSpecialCharactersString);
    CoveoFieldsHandler.coveoFieldDelimiter = '@';
    CoveoFieldsHandler.fieldNameRegex = new RegExp('^[^\\W_]*$');
    CoveoFieldsHandler.escapedCharacterRegex = new RegExp('z\\d{2,3}x');
    return CoveoFieldsHandler;
}());
exports.CoveoFieldsHandler = CoveoFieldsHandler;


/***/ }),

/***/ "./src/handlers/CoveoLabelsHandler.ts":
/*!********************************************!*\
  !*** ./src/handlers/CoveoLabelsHandler.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CoveoLabelsHandler = /** @class */ (function () {
    function CoveoLabelsHandler(labels) {
        this.labels = labels;
    }
    CoveoLabelsHandler.prototype.translate = function (key) {
        return this.labels[key] || key;
    };
    return CoveoLabelsHandler;
}());
exports.CoveoLabelsHandler = CoveoLabelsHandler;


/***/ }),

/***/ "./src/handlers/LegacyFieldTypeResolver.ts":
/*!*************************************************!*\
  !*** ./src/handlers/LegacyFieldTypeResolver.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LegacyFieldTypeResolver = /** @class */ (function () {
    function LegacyFieldTypeResolver(externalFields) {
        this.externalFields = this.parseExternalFields(externalFields);
    }
    LegacyFieldTypeResolver.prototype.parseExternalFields = function (externalFields) {
        var _this = this;
        return externalFields.map(function (externalField) {
            if (typeof externalField === 'string') {
                return {
                    fieldName: externalField.toLowerCase(),
                    shouldEscape: false,
                };
            }
            else if (_this.isExternalFieldConfig(externalField)) {
                return {
                    fieldName: externalField.fieldName.toLowerCase(),
                    shouldEscape: externalField.shouldEscape,
                };
            }
            else {
                console.error("Invalid external field '" + externalField + "'.");
            }
        });
    };
    LegacyFieldTypeResolver.prototype.shouldEscapeFirstCharacter = function (fieldName) {
        return false;
    };
    LegacyFieldTypeResolver.prototype.shouldEscapeSpecialCharacters = function (fieldName) {
        var fields = this.externalFields.filter(function (field) { return field.fieldName.toLowerCase() === fieldName.toLowerCase(); });
        return fields.length > 0 ? fields[0].shouldEscape : true;
    };
    LegacyFieldTypeResolver.prototype.shouldDecorate = function (fieldName) {
        return !this.externalFields.some(function (field) { return field.fieldName.toLowerCase() === fieldName.toLowerCase(); });
    };
    LegacyFieldTypeResolver.prototype.isExternalField = function (fieldName) {
        return this.externalFields.some(function (field) { return field.fieldName.toLowerCase() === fieldName.toLowerCase(); });
    };
    LegacyFieldTypeResolver.prototype.isExternalFieldConfig = function (obj) {
        return (typeof obj !== 'undefined' &&
            typeof obj.fieldName !== 'undefined' &&
            typeof obj.shouldEscape !== 'undefined');
    };
    return LegacyFieldTypeResolver;
}());
exports.LegacyFieldTypeResolver = LegacyFieldTypeResolver;


/***/ }),

/***/ "./src/handlers/SourceSpecificFieldResolver.ts":
/*!*****************************************************!*\
  !*** ./src/handlers/SourceSpecificFieldResolver.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SourceSpecificFieldResolver = /** @class */ (function () {
    function SourceSpecificFieldResolver(sourceSpecificFields, externalFields) {
        this.sourceSpecificFields = sourceSpecificFields;
        this.externalFields = externalFields;
    }
    SourceSpecificFieldResolver.prototype.shouldEscapeFirstCharacter = function (fieldName) {
        return !fieldName[0].match(SourceSpecificFieldResolver.validFirstCharacters);
    };
    SourceSpecificFieldResolver.prototype.shouldEscapeSpecialCharacters = function (fieldName) {
        return !this.externalFields.some(function (field) { return field.fieldName.toLowerCase() === fieldName.toLowerCase(); });
    };
    SourceSpecificFieldResolver.prototype.shouldDecorate = function (fieldName) {
        return this.sourceSpecificFields.some(function (field) { return field.fieldName.toLowerCase() === fieldName.toLowerCase(); });
    };
    SourceSpecificFieldResolver.prototype.isExternalField = function (fieldName) {
        return this.externalFields.some(function (field) { return field.fieldName.toLowerCase() === fieldName.toLowerCase(); });
    };
    SourceSpecificFieldResolver.validFirstCharacters = new RegExp('[a-zA-Z_]');
    return SourceSpecificFieldResolver;
}());
exports.SourceSpecificFieldResolver = SourceSpecificFieldResolver;


/***/ }),

/***/ "./src/resolvers/components/SearchInterfaceComponentInitializer.ts":
/*!*************************************************************************!*\
  !*** ./src/resolvers/components/SearchInterfaceComponentInitializer.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Prebinding_1 = __webpack_require__(/*! ../../base/Prebinding */ "./src/base/Prebinding.ts");
var HTMLUtils_1 = __webpack_require__(/*! ../../utils/HTMLUtils */ "./src/utils/HTMLUtils.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var duringInitializationClass = 'coveo-during-initialization';
var SearchInterfaceComponentInitializer = /** @class */ (function () {
    function SearchInterfaceComponentInitializer() {
    }
    SearchInterfaceComponentInitializer.prototype.loadComponentsForSearchInterface = function (searchInterface, newComponent) {
        var _this = this;
        Prebinding_1.Prebinding.applyPrebindingOnElement(newComponent);
        Prebinding_1.Prebinding.applyPrebindingOnChildren(newComponent);
        var result = coveo_search_ui_1.Initialization.automaticallyCreateComponentsInside(newComponent, {
            bindings: searchInterface.getBindings(),
            options: {},
        });
        return result.initResult.then(function () {
            _this.removeAllPlaceholdersWithinElement(newComponent);
            searchInterface.queryController.executeQuery({
                ignoreWarningSearchEvent: true,
            });
        });
    };
    SearchInterfaceComponentInitializer.prototype.tryUnloadComponentsForSearchInterface = function (searchInterface, newComponent) {
        var _this = this;
        var facets = HTMLUtils_1.nodeListToArray(newComponent.getElementsByClassName('CoveoFacet'));
        facets.forEach(function (facet) {
            var facetComponent = coveo_search_ui_1.get(facet, 'CoveoFacet');
            if (facetComponent) {
                searchInterface.detachComponent('Facet', facetComponent);
            }
            _this.removeAllChildren(facet);
        });
        var tabs = HTMLUtils_1.nodeListToArray(newComponent.getElementsByClassName('CoveoTab'));
        tabs.forEach(function (tab) {
            var tabComponent = coveo_search_ui_1.get(tab, 'CoveoTab');
            if (tabComponent) {
                searchInterface.detachComponent('Tab', tabComponent);
            }
            _this.removeAllChildren(tab);
        });
    };
    SearchInterfaceComponentInitializer.prototype.removeAllPlaceholdersWithinElement = function (element) {
        var _this = this;
        var elementsWithInitializationClass = HTMLUtils_1.nodeListToArray(element.getElementsByClassName(duringInitializationClass));
        elementsWithInitializationClass.forEach(function (element) { return _this.removePlaceholders(element); });
    };
    SearchInterfaceComponentInitializer.prototype.removePlaceholders = function (element) {
        element.classList.remove(duringInitializationClass);
        if (element.classList.contains('CoveoFacet')) {
            this.removeFacetsPlaceholders(element);
        }
    };
    SearchInterfaceComponentInitializer.prototype.removeFacetsPlaceholders = function (element) {
        element.classList.remove('coveo-with-placeholder');
        // Since a Facet reinserts DOM as children when initializing, we have to remove all its children,
        // else new content will be appended each time the facet is initialized.
        this.removeAllChildren(element);
    };
    SearchInterfaceComponentInitializer.prototype.removeAllChildren = function (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };
    SearchInterfaceComponentInitializer.prototype.loadComponentsWithSearchInterfaceInitialization = function (searchInterfaceElement, componentsContainer) {
        Prebinding_1.Prebinding.applyPrebindingOnElement(componentsContainer);
        Prebinding_1.Prebinding.applyPrebindingOnChildren(componentsContainer);
        Coveo.options(searchInterfaceElement, {
            externalComponents: [componentsContainer],
        });
    };
    return SearchInterfaceComponentInitializer;
}());
exports.SearchInterfaceComponentInitializer = SearchInterfaceComponentInitializer;
var initializer = new SearchInterfaceComponentInitializer();
function getInitializerInstance() {
    return initializer;
}
exports.getInitializerInstance = getInitializerInstance;


/***/ }),

/***/ "./src/resolvers/prebinding/PrebindHelpers.ts":
/*!****************************************************!*\
  !*** ./src/resolvers/prebinding/PrebindHelpers.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnalyticsEnabled_1 = __webpack_require__(/*! ./prebindHelpers/AnalyticsEnabled */ "./src/resolvers/prebinding/prebindHelpers/AnalyticsEnabled.ts");
var CoveoForSitecoreAnalyticsEndpoint_1 = __webpack_require__(/*! ./prebindHelpers/CoveoForSitecoreAnalyticsEndpoint */ "./src/resolvers/prebinding/prebindHelpers/CoveoForSitecoreAnalyticsEndpoint.ts");
var CurrentMaximumAge_1 = __webpack_require__(/*! ./prebindHelpers/CurrentMaximumAge */ "./src/resolvers/prebinding/prebindHelpers/CurrentMaximumAge.ts");
var CurrentPageName_1 = __webpack_require__(/*! ./prebindHelpers/CurrentPageName */ "./src/resolvers/prebinding/prebindHelpers/CurrentPageName.ts");
var FieldTranslator_1 = __webpack_require__(/*! ./prebindHelpers/FieldTranslator */ "./src/resolvers/prebinding/prebindHelpers/FieldTranslator.ts");
var IsAnonymous_1 = __webpack_require__(/*! ./prebindHelpers/IsAnonymous */ "./src/resolvers/prebinding/prebindHelpers/IsAnonymous.ts");
var MainSearchInterfaceSelector_1 = __webpack_require__(/*! ./prebindHelpers/MainSearchInterfaceSelector */ "./src/resolvers/prebinding/prebindHelpers/MainSearchInterfaceSelector.ts");
var ItemIdSelector_1 = __webpack_require__(/*! ./prebindHelpers/ItemIdSelector */ "./src/resolvers/prebinding/prebindHelpers/ItemIdSelector.ts");
var SortCriteria_1 = __webpack_require__(/*! ./prebindHelpers/SortCriteria */ "./src/resolvers/prebinding/prebindHelpers/SortCriteria.ts");
var UnfoldDictionaryToAttributes_1 = __webpack_require__(/*! ./prebindHelpers/UnfoldDictionaryToAttributes */ "./src/resolvers/prebinding/prebindHelpers/UnfoldDictionaryToAttributes.ts");
var PrebindHelpers = /** @class */ (function () {
    function PrebindHelpers() {
    }
    PrebindHelpers.getAllPrebindHelpers = function () {
        return [
            new AnalyticsEnabled_1.AnalyticsEnabledPrebind(),
            new CoveoForSitecoreAnalyticsEndpoint_1.CoveoForSitecoreAnalyticsEndpointPrebind(),
            new CurrentMaximumAge_1.CurrentMaximumAge(),
            new CurrentPageName_1.CurrentPageNamePrebind(),
            new FieldTranslator_1.FieldTranslatorPrebind(),
            new IsAnonymous_1.IsAnonymousPrebind(),
            new MainSearchInterfaceSelector_1.MainSearchInterfaceSelectorPrebind(),
            new ItemIdSelector_1.ItemIdSelectorPrebind(),
            new SortCriteria_1.SortCriteriaPrebind(),
            new UnfoldDictionaryToAttributes_1.UnfoldDictionaryToAttributesPrebind(),
        ];
    };
    return PrebindHelpers;
}());
exports.PrebindHelpers = PrebindHelpers;


/***/ }),

/***/ "./src/resolvers/prebinding/PrebindResolver.ts":
/*!*****************************************************!*\
  !*** ./src/resolvers/prebinding/PrebindResolver.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PrebindResolver = /** @class */ (function () {
    function PrebindResolver() {
        this.prebindAppliedValue = 'appliedPrebind';
        this.helpers = {};
    }
    PrebindResolver.prototype.registerPrebindHelper = function (helperName, handler) {
        if (typeof helperName !== 'string' || helperName === '') {
            throw 'You must define a name for the prebind helper.';
        }
        if (typeof handler === 'undefined' || handler === null) {
            throw 'You must define a handler for the prebind helper.';
        }
        if (this.helpers.hasOwnProperty(helperName)) {
            console.warn("A prebind handler already exists for '" + helperName + "'. It will be ignored");
            return;
        }
        this.helpers[helperName] = handler;
    };
    PrebindResolver.prototype.hasHelper = function (helperName) {
        return this.helpers.hasOwnProperty(helperName);
    };
    PrebindResolver.prototype.getHelper = function (helperName) {
        if (!this.hasHelper(helperName)) {
            throw "'" + helperName + "' has no registered helper.";
        }
        return this.helpers[helperName];
    };
    PrebindResolver.prototype.canApplyPrebind = function (element) {
        return !!element.dataset;
    };
    PrebindResolver.prototype.hasNotAppliedPrebind = function (element) {
        return element.dataset[this.prebindAppliedValue] !== 'true';
    };
    PrebindResolver.prototype.applyToElement = function (element) {
        var _this = this;
        try {
            var attributes = this.getPrebindingAttributesForElement(element);
            if (attributes.length > 0) {
                element.dataset[this.prebindAppliedValue] = 'true';
            }
            attributes.forEach(function (attributes) { return _this.applyPrebindToElement(attributes, element); });
        }
        catch (exception) {
            console.warn('(CoveoForSitecore) prebinding failed on element.', element, exception);
        }
    };
    PrebindResolver.prototype.getPrebindingAttributesForElement = function (element) {
        var _this = this;
        return this.getAllPrebindingAttributesNames(element).map(function (key) {
            var methodName = element.dataset[key];
            var attribute = _this.lowerCaseFirstCharacter(_this.removePrebindPrefix(key));
            return {
                attribute: attribute,
                attributeValue: element.dataset[attribute] || '',
                method: _this.getHelper(methodName),
            };
        });
    };
    PrebindResolver.prototype.getAllPrebindingAttributesNames = function (element) {
        var _this = this;
        return Object.keys(element.dataset)
            .filter(function (key) { return _this.stringStartsWithPrebindingString(key); })
            .filter(function (key) {
            var helperName = element.dataset[key];
            return _this.filterAndWarnNonExistingHelperName(helperName, element);
        });
    };
    PrebindResolver.prototype.stringStartsWithPrebindingString = function (value) {
        return value.lastIndexOf(PrebindResolver.prebindString) === 0;
    };
    PrebindResolver.prototype.filterAndWarnNonExistingHelperName = function (helperName, element) {
        var hasHelperWithName = this.hasHelper(helperName);
        if (!hasHelperWithName) {
            console.warn("(CoveoForSitecore) an unregistered prebinding '" + helperName + "' was set on the element. Register this method using Prebinding.registerPrebindHelper(\"" + helperName + "\", handler).", element);
        }
        return hasHelperWithName;
    };
    PrebindResolver.prototype.removePrebindPrefix = function (attributeName) {
        return attributeName.substring(PrebindResolver.prebindString.length);
    };
    PrebindResolver.prototype.lowerCaseFirstCharacter = function (value) {
        return value.charAt(0).toLowerCase() + value.slice(1);
    };
    PrebindResolver.prototype.applyPrebindToElement = function (prebind, element) {
        element.dataset[prebind.attribute] = prebind.method(prebind.attributeValue, element);
    };
    PrebindResolver.prebindString = 'prebind';
    return PrebindResolver;
}());
exports.PrebindResolver = PrebindResolver;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/AnalyticsEnabled.ts":
/*!*********************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/AnalyticsEnabled.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnalyticsEnabledPrebind = /** @class */ (function () {
    function AnalyticsEnabledPrebind() {
        this.name = 'analyticsEnabled';
    }
    AnalyticsEnabledPrebind.prototype.getPrebind = function (args) {
        return function (currentValue, element) {
            return args.context.scAnalyticsEnabled ? 'true' : 'false';
        };
    };
    return AnalyticsEnabledPrebind;
}());
exports.AnalyticsEnabledPrebind = AnalyticsEnabledPrebind;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/CoveoForSitecoreAnalyticsEndpoint.ts":
/*!**************************************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/CoveoForSitecoreAnalyticsEndpoint.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CoveoForSitecoreAnalyticsEndpointPrebind = /** @class */ (function () {
    function CoveoForSitecoreAnalyticsEndpointPrebind() {
        this.name = 'coveoForSitecoreAnalyticsEndpoint';
    }
    CoveoForSitecoreAnalyticsEndpointPrebind.prototype.getPrebind = function (args) {
        return function (currentValue, element) {
            return currentValue || args.context.scRestEndpointUri + "/ua";
        };
    };
    return CoveoForSitecoreAnalyticsEndpointPrebind;
}());
exports.CoveoForSitecoreAnalyticsEndpointPrebind = CoveoForSitecoreAnalyticsEndpointPrebind;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/CurrentMaximumAge.ts":
/*!**********************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/CurrentMaximumAge.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CurrentMaximumAge = /** @class */ (function () {
    function CurrentMaximumAge() {
        this.name = 'currentMaximumAge';
    }
    CurrentMaximumAge.prototype.getPrebind = function (args) {
        return function (value, element) {
            return value || args.context.scMaximumAge.toString();
        };
    };
    return CurrentMaximumAge;
}());
exports.CurrentMaximumAge = CurrentMaximumAge;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/CurrentPageName.ts":
/*!********************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/CurrentPageName.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CurrentPageNamePrebind = /** @class */ (function () {
    function CurrentPageNamePrebind() {
        this.name = 'currentPageName';
    }
    CurrentPageNamePrebind.prototype.getPrebind = function (args) {
        return function (pageName, element) {
            return pageName || args.context.scPageName;
        };
    };
    return CurrentPageNamePrebind;
}());
exports.CurrentPageNamePrebind = CurrentPageNamePrebind;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/FieldTranslator.ts":
/*!********************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/FieldTranslator.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldTranslatorPrebind = /** @class */ (function () {
    function FieldTranslatorPrebind() {
        this.name = 'fieldTranslator';
    }
    FieldTranslatorPrebind.prototype.getPrebind = function (args) {
        return function (name, element) {
            return args.fieldsHandler.toCoveo(name);
        };
    };
    return FieldTranslatorPrebind;
}());
exports.FieldTranslatorPrebind = FieldTranslatorPrebind;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/IsAnonymous.ts":
/*!****************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/IsAnonymous.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsAnonymousPrebind = /** @class */ (function () {
    function IsAnonymousPrebind() {
        this.name = 'isAnonymous';
    }
    IsAnonymousPrebind.prototype.getPrebind = function (args) {
        return function (isAnonymous, element) {
            return args.context.scIsUserAnonymous ? 'true' : 'false';
        };
    };
    return IsAnonymousPrebind;
}());
exports.IsAnonymousPrebind = IsAnonymousPrebind;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/ItemIdSelector.ts":
/*!*******************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/ItemIdSelector.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemIdSelectorPrebind = /** @class */ (function () {
    function ItemIdSelectorPrebind() {
        this.name = 'itemIdSelector';
        this.resolvers = [
            new ResolveIfSelector(),
            new ResolveIfItemIdInPage(),
            new UseItemIdSelectorAsIs(),
        ];
    }
    ItemIdSelectorPrebind.prototype.getPrebind = function (args) {
        var _this = this;
        return function (itemId, element) {
            var resolver = _this.getFirstValidResolver(itemId, element);
            return resolver.getValue(itemId, element);
        };
    };
    ItemIdSelectorPrebind.prototype.getFirstValidResolver = function (itemId, element) {
        var resolver;
        do {
            if (this.resolvers.length === 0) {
                var message = 'Could not resolve the element using the current resolver. Ensure that a valid value is set.';
                console.error(message, {
                    itemId: itemId,
                    element: element,
                });
                throw message;
            }
            resolver = this.resolvers.shift();
        } while (!resolver.canResolve(itemId, element));
        return resolver;
    };
    return ItemIdSelectorPrebind;
}());
exports.ItemIdSelectorPrebind = ItemIdSelectorPrebind;
var ResolveIfItemIdInPage = /** @class */ (function () {
    function ResolveIfItemIdInPage() {
    }
    ResolveIfItemIdInPage.prototype.canResolve = function (itemId) {
        return this.isItemDefined(itemId) && this.isIdSelectorValid("#" + itemId);
    };
    ResolveIfItemIdInPage.prototype.getValue = function (itemId) {
        return "#" + itemId;
    };
    ResolveIfItemIdInPage.prototype.isItemDefined = function (itemId) {
        return !!itemId;
    };
    ResolveIfItemIdInPage.prototype.isIdSelectorValid = function (selector) {
        return document.querySelector(selector) !== null;
    };
    return ResolveIfItemIdInPage;
}());
exports.ResolveIfItemIdInPage = ResolveIfItemIdInPage;
var ResolveIfSelector = /** @class */ (function () {
    function ResolveIfSelector() {
    }
    ResolveIfSelector.prototype.canResolve = function (itemId, element) {
        return !!itemId && this.isStartingWithSelectorCharacter(itemId);
    };
    ResolveIfSelector.prototype.getValue = function (itemId, element) {
        return itemId;
    };
    ResolveIfSelector.prototype.isStartingWithSelectorCharacter = function (itemId) {
        var firstCharacter = itemId[0];
        return ['.', '#'].indexOf(firstCharacter) !== -1;
    };
    return ResolveIfSelector;
}());
exports.ResolveIfSelector = ResolveIfSelector;
var UseItemIdSelectorAsIs = /** @class */ (function () {
    function UseItemIdSelectorAsIs() {
    }
    UseItemIdSelectorAsIs.prototype.canResolve = function (itemId, element) {
        return true;
    };
    UseItemIdSelectorAsIs.prototype.getValue = function (itemId, element) {
        return itemId;
    };
    return UseItemIdSelectorAsIs;
}());
exports.UseItemIdSelectorAsIs = UseItemIdSelectorAsIs;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/MainSearchInterfaceSelector.ts":
/*!********************************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/MainSearchInterfaceSelector.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemIdSelector_1 = __webpack_require__(/*! ./ItemIdSelector */ "./src/resolvers/prebinding/prebindHelpers/ItemIdSelector.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var MainSearchInterfaceSelectorPrebind = /** @class */ (function () {
    function MainSearchInterfaceSelectorPrebind() {
        this.name = 'mainSearchInterfaceSelector';
        this.resolvers = [
            new ItemIdSelector_1.ResolveIfSelector(),
            new ItemIdSelector_1.ResolveIfItemIdInPage(),
            new ResolveParentSearchInterfaceId(),
            new ItemIdSelector_1.UseItemIdSelectorAsIs(),
        ];
    }
    MainSearchInterfaceSelectorPrebind.prototype.getPrebind = function (args) {
        var _this = this;
        return function (mainSearchInterfaceId, element) {
            var resolver = _this.getFirstValidResolver(mainSearchInterfaceId, element);
            return resolver.getValue(mainSearchInterfaceId, element);
        };
    };
    MainSearchInterfaceSelectorPrebind.prototype.getFirstValidResolver = function (mainSearchInterfaceId, element) {
        var resolver;
        do {
            if (this.resolvers.length === 0) {
                var message = 'Could not resolve the search interface element using the current resolver. Ensure that a valid value is set.';
                console.error(message, {
                    mainSearchInterfaceId: mainSearchInterfaceId,
                    element: element,
                });
                throw message;
            }
            resolver = this.resolvers.shift();
        } while (!resolver.canResolve(mainSearchInterfaceId, element));
        return resolver;
    };
    return MainSearchInterfaceSelectorPrebind;
}());
exports.MainSearchInterfaceSelectorPrebind = MainSearchInterfaceSelectorPrebind;
var ResolveParentSearchInterfaceId = /** @class */ (function () {
    function ResolveParentSearchInterfaceId() {
    }
    ResolveParentSearchInterfaceId.prototype.canResolve = function (mainSearchInterfaceId, element) {
        return this.getValue(mainSearchInterfaceId, element) !== null;
    };
    ResolveParentSearchInterfaceId.prototype.getValue = function (mainSearchInterfaceId, element) {
        if (typeof this.foundId === 'undefined') {
            this.foundId = this.tryFindParentSearchInterfaceFromElement(element);
        }
        return this.foundId;
    };
    ResolveParentSearchInterfaceId.prototype.tryFindParentSearchInterfaceFromElement = function (element) {
        var parentSearchInterface = this.findParentWithClass(element, "Coveo" + coveo_search_ui_1.SearchInterface.ID);
        return !!parentSearchInterface ? "#" + parentSearchInterface.id : null;
    };
    ResolveParentSearchInterfaceId.prototype.findParentWithClass = function (element, className) {
        var parent = element.parentElement;
        while ((parent = parent.parentElement) && !parent.classList.contains(className)) { }
        return parent;
    };
    return ResolveParentSearchInterfaceId;
}());


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/SortCriteria.ts":
/*!*****************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/SortCriteria.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortCriteriaResolver_1 = __webpack_require__(/*! ../../sortCriteria/SortCriteriaResolver */ "./src/resolvers/sortCriteria/SortCriteriaResolver.ts");
var SortCriteriaPrebind = /** @class */ (function () {
    function SortCriteriaPrebind() {
        this.name = 'sortCriteriaResolver';
    }
    SortCriteriaPrebind.prototype.getPrebind = function (args) {
        var criteriaResolver = new SortCriteriaResolver_1.SortCriteriaResolver(args.fieldsHandler);
        return function (sortCriteriaRawValue, element) {
            var sortCriteria = JSON.parse(sortCriteriaRawValue);
            if (Object.keys(sortCriteria).length === 0) {
                return null;
            }
            var sortType = (sortCriteria.type || 'relevancy').toLowerCase();
            var sortDirection = (sortCriteria.direction || 'ascending').toLowerCase();
            var enableBothSortDirections = (element.dataset['scEnableBothSortDirections'] || 'false').toLowerCase() === 'true';
            var sortDropdownElement = document.querySelector('.coveo-sort-section .CoveoSortDropdown');
            var enableSortDropdown = document.body.contains(sortDropdownElement);
            if (sortType === 'relevancy') {
                return criteriaResolver.resolveRelevancyCriteria();
            }
            else if (sortType === 'date') {
                return criteriaResolver.resolveDateCriteria(sortDirection, enableBothSortDirections, enableSortDropdown);
            }
            else {
                var sortField = sortCriteria.field;
                return criteriaResolver.resolveFieldCriteria(sortField, sortDirection, enableBothSortDirections, enableSortDropdown);
            }
        };
    };
    return SortCriteriaPrebind;
}());
exports.SortCriteriaPrebind = SortCriteriaPrebind;


/***/ }),

/***/ "./src/resolvers/prebinding/prebindHelpers/UnfoldDictionaryToAttributes.ts":
/*!*********************************************************************************!*\
  !*** ./src/resolvers/prebinding/prebindHelpers/UnfoldDictionaryToAttributes.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnfoldDictionaryToAttributesPrebind = /** @class */ (function () {
    function UnfoldDictionaryToAttributesPrebind() {
        this.name = 'unfoldDictionaryToAttributesPrebind';
    }
    UnfoldDictionaryToAttributesPrebind.prototype.getPrebind = function (args) {
        return function (rawDictionary, element) {
            var parsedDictionary = JSON.parse(rawDictionary);
            Object.keys(parsedDictionary).forEach(function (key) {
                var translatedField = args.fieldsHandler.toCoveo(key);
                var dataKey = 'field' + translatedField.charAt(0).toUpperCase() + translatedField.slice(1);
                element.dataset[dataKey] = parsedDictionary[key];
            });
            return rawDictionary;
        };
    };
    return UnfoldDictionaryToAttributesPrebind;
}());
exports.UnfoldDictionaryToAttributesPrebind = UnfoldDictionaryToAttributesPrebind;


/***/ }),

/***/ "./src/resolvers/sortCriteria/SortCriteriaPreprocessor.ts":
/*!****************************************************************!*\
  !*** ./src/resolvers/sortCriteria/SortCriteriaPreprocessor.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = __webpack_require__(/*! ../../base/Context */ "./src/base/Context.ts");
var CSS_SORT_BOTH_DIRECTIONS = '.CoveoSort[data-sc-enable-both-sort-directions="true"]';
var CSS_DROPDOWN_SELECTOR = '.CoveoSortDropdown';
var DESCENDING_CRITERIA = 'Descending';
var ASCENDING_CRITERIA = 'Ascending';
var createReversedSortElement = function (sortElement) {
    var sortElementReverse = sortElement.cloneNode(false);
    var sortCriteria = JSON.parse(sortElementReverse.dataset.sortCriteria);
    sortCriteria.direction = sortCriteria.direction === DESCENDING_CRITERIA ? ASCENDING_CRITERIA : DESCENDING_CRITERIA;
    sortElementReverse.dataset.sortCriteria = JSON.stringify(sortCriteria);
    return sortElementReverse;
};
var addDirectionToCaption = function (element) {
    var sortCriteria = JSON.parse(element.dataset.sortCriteria);
    element.dataset.caption =
        sortCriteria.direction === DESCENDING_CRITERIA
            ? element.dataset.caption + " " + Context_1.Context.labels.translate('Descending')
            : element.dataset.caption + " " + Context_1.Context.labels.translate('Ascending');
};
var adjustSortDropdown = function (rootElement) {
    var dropdownElement = rootElement.querySelector(CSS_DROPDOWN_SELECTOR);
    if (dropdownElement) {
        for (var _i = 0, _a = rootElement.querySelectorAll(CSS_SORT_BOTH_DIRECTIONS); _i < _a.length; _i++) {
            var sortElement = _a[_i];
            var sortElementReverse = createReversedSortElement(sortElement);
            sortElement.insertAdjacentElement('afterend', sortElementReverse);
            addDirectionToCaption(sortElement);
            addDirectionToCaption(sortElementReverse);
        }
    }
};
exports.adjustDOMElements = function (rootElement) {
    adjustSortDropdown(rootElement);
};


/***/ }),

/***/ "./src/resolvers/sortCriteria/SortCriteriaResolver.ts":
/*!************************************************************!*\
  !*** ./src/resolvers/sortCriteria/SortCriteriaResolver.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortCriteriaResolver = /** @class */ (function () {
    function SortCriteriaResolver(fieldsHandler) {
        this.fieldsHandler = fieldsHandler;
    }
    SortCriteriaResolver.prototype.resolveFieldCriteria = function (fieldCriteria, sortDirection, enableBothSortDirections, enableSortDropdown) {
        var field = fieldCriteria.charAt(0) !== '@' ? "@" + fieldCriteria : fieldCriteria;
        return this.getFieldCriteria(this.fieldsHandler.toCoveo(field), sortDirection, enableBothSortDirections, enableSortDropdown);
    };
    SortCriteriaResolver.prototype.resolveDateCriteria = function (sortDirection, enableBothSortDirections, enableSortDropdown) {
        return this.getFieldCriteria('date', sortDirection, enableBothSortDirections, enableSortDropdown);
    };
    SortCriteriaResolver.prototype.resolveRelevancyCriteria = function () {
        return 'relevancy';
    };
    SortCriteriaResolver.prototype.getFieldCriteria = function (fieldCriteria, sortDirection, enableBothSortDirections, enableSortDropdown) {
        if (enableBothSortDirections && !enableSortDropdown) {
            return this.getFieldWithDirection(fieldCriteria, sortDirection) + ", " + this.getFieldWithDirection(fieldCriteria, this.getInvertedDirection(sortDirection));
        }
        else {
            return this.getFieldWithDirection(fieldCriteria, sortDirection);
        }
    };
    SortCriteriaResolver.prototype.getFieldWithDirection = function (fieldCriteria, sortDirection) {
        return fieldCriteria + " " + sortDirection;
    };
    SortCriteriaResolver.prototype.getInvertedDirection = function (sortDirection) {
        return sortDirection === 'descending' ? 'ascending' : 'descending';
    };
    return SortCriteriaResolver;
}());
exports.SortCriteriaResolver = SortCriteriaResolver;


/***/ }),

/***/ "./src/ui/analytics/LazyCoveoForSitecoreAnalytics.ts":
/*!***********************************************************!*\
  !*** ./src/ui/analytics/LazyCoveoForSitecoreAnalytics.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreAnalytics() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreAnalytics', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | CoveoForSitecoreAnalytics */ "CoveoForSitecoreAnalytics").then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreAnalytics.ts */ "./src/ui/analytics/CoveoForSitecoreAnalytics.ts")['CoveoForSitecoreAnalytics'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreAnalytics', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreAnalytics = lazyCoveoForSitecoreAnalytics;


/***/ }),

/***/ "./src/ui/analytics/LazyCoveoForSitecoreConfigureSearchHub.ts":
/*!********************************************************************!*\
  !*** ./src/ui/analytics/LazyCoveoForSitecoreConfigureSearchHub.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreConfigureSearchHub() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreConfigureSearchHub', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | CoveoForSitecoreConfigureSearchHub */ "CoveoForSitecoreConfigureSearchHub").then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreConfigureSearchHub.ts */ "./src/ui/analytics/CoveoForSitecoreConfigureSearchHub.ts")['CoveoForSitecoreConfigureSearchHub'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreConfigureSearchHub', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreConfigureSearchHub = lazyCoveoForSitecoreConfigureSearchHub;


/***/ }),

/***/ "./src/ui/analytics/LazySendAnalyticsToSitecore.ts":
/*!*********************************************************!*\
  !*** ./src/ui/analytics/LazySendAnalyticsToSitecore.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoSendAnalyticsToSitecore() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('SendAnalyticsToSitecore', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | SendAnalyticsToSitecore */ "SendAnalyticsToSitecore").then((function () {
                var loaded = __webpack_require__(/*! ./SendAnalyticsToSitecore.ts */ "./src/ui/analytics/SendAnalyticsToSitecore.ts")['SendAnalyticsToSitecore'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('SendAnalyticsToSitecore', resolve));
        });
    });
}
exports.lazyCoveoSendAnalyticsToSitecore = lazyCoveoSendAnalyticsToSitecore;


/***/ }),

/***/ "./src/ui/analytics/LazyValidateAnalyticsIncluded.ts":
/*!***********************************************************!*\
  !*** ./src/ui/analytics/LazyValidateAnalyticsIncluded.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyValidateAnalyticsIncluded() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ValidateAnalyticsIncluded', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | ValidateAnalyticsIncluded */ "ValidateAnalyticsIncluded").then((function () {
                var loaded = __webpack_require__(/*! ./ValidateAnalyticsIncluded.ts */ "./src/ui/analytics/ValidateAnalyticsIncluded.ts")['ValidateAnalyticsIncluded'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('ValidateAnalyticsIncluded', resolve));
        });
    });
}
exports.lazyValidateAnalyticsIncluded = lazyValidateAnalyticsIncluded;


/***/ }),

/***/ "./src/ui/context/CoveoForSitecoreContext.ts":
/*!***************************************************!*\
  !*** ./src/ui/context/CoveoForSitecoreContext.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var ContextEvents_1 = __webpack_require__(/*! ../../events/ContextEvents */ "./src/events/ContextEvents.ts");
var CoveoForSitecoreContext = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreContext, _super);
    function CoveoForSitecoreContext(element, options, bindings) {
        var _this = _super.call(this, element, CoveoForSitecoreContext.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreContext, options);
        _this.bind.onRootElement(coveo_search_ui_1.InitializationEvents.afterComponentsInitialization, _this.afterComponentsInitialization);
        _this.bind.onRootElement(coveo_search_ui_1.QueryEvents.doneBuildingQuery, _this.doneBuildingQuery);
        _this.bind.onRootElement(coveo_search_ui_1.OmniboxEvents.buildingQuerySuggest, _this.buildingQuerySuggest);
        return _this;
    }
    CoveoForSitecoreContext.prototype.doneBuildingQuery = function (args) {
        if (this.hasDefaultPipelineNameSet() && this.queryBuilderUsesDefaultPipeline(args.queryBuilder)) {
            args.queryBuilder.pipeline = this.options.scDefaultPipelineName;
        }
    };
    CoveoForSitecoreContext.prototype.buildingQuerySuggest = function (args) {
        if (this.hasDefaultPipelineNameSet() && this.querySuggestUsesDefaultPipeline(args.payload)) {
            args.payload.pipeline = this.options.scDefaultPipelineName;
        }
    };
    CoveoForSitecoreContext.prototype.hasDefaultPipelineNameSet = function () {
        return this.options.scDefaultPipelineName !== '';
    };
    CoveoForSitecoreContext.prototype.queryBuilderUsesDefaultPipeline = function (queryBuilder) {
        return typeof queryBuilder.pipeline === 'undefined';
    };
    CoveoForSitecoreContext.prototype.querySuggestUsesDefaultPipeline = function (querySuggestRequest) {
        return typeof querySuggestRequest.pipeline === 'undefined';
    };
    CoveoForSitecoreContext.prototype.afterComponentsInitialization = function () {
        var contextArgs = {
            sitecoreItemId: this.options.scItemId,
            sitecoreItemUri: this.options.scItemUri,
            sitecorePageName: this.options.scPageName,
            shouldHaveAnalyticsComponent: this.options.scShouldHaveAnalyticsComponent,
            analyticsEnabled: this.options.scAnalyticsEnabled,
            indexSourceName: this.options.scIndexSourceName,
            currentLanguage: this.options.scCurrentLanguage,
            languageFieldName: this.options.scLanguageFieldName,
            latestVersionFieldName: this.options.scLatestVersionFieldName,
            isInExperienceEditor: this.options.scIsInExperienceEditor,
            sitecorePageFullPath: this.options.scPageNameFullPath,
            siteName: this.options.scSiteName,
            restEndpointUri: this.options.scRestEndpointUri,
            analyticsEndpointUri: this.options.scAnalyticsEndpointUri,
        };
        this.bind.trigger(this.element, ContextEvents_1.SitecoreContextEvents.onSitecoreContextInitialization, contextArgs);
    };
    CoveoForSitecoreContext.ID = 'ForSitecoreContext';
    CoveoForSitecoreContext.options = {
        scItemId: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scItemUri: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scLanguageFieldName: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scLatestVersionFieldName: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scCurrentLanguage: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scRestEndpointUri: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scAnalyticsEndpointUri: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scLabels: coveo_search_ui_1.ComponentOptions.buildJsonOption(),
        scPageName: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scDefaultPipelineName: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scShouldHaveAnalyticsComponent: coveo_search_ui_1.ComponentOptions.buildBooleanOption(),
        scAnalyticsEnabled: coveo_search_ui_1.ComponentOptions.buildBooleanOption(),
        scIsUserAnonymous: coveo_search_ui_1.ComponentOptions.buildBooleanOption(),
        scFieldPrefix: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scFieldSuffix: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scExternalFields: coveo_search_ui_1.ComponentOptions.buildJsonOption(),
        scSourceSpecificFields: coveo_search_ui_1.ComponentOptions.buildJsonOption(),
        scPreferSourceSpecificFields: coveo_search_ui_1.ComponentOptions.buildBooleanOption(),
        scIndexSourceName: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scIsInExperienceEditor: coveo_search_ui_1.ComponentOptions.buildBooleanOption(),
        scMaximumAge: coveo_search_ui_1.ComponentOptions.buildNumberOption(),
        scPageNameFullPath: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scSiteName: coveo_search_ui_1.ComponentOptions.buildStringOption(),
    };
    return CoveoForSitecoreContext;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreContext = CoveoForSitecoreContext;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreContext);


/***/ }),

/***/ "./src/ui/context/LazyCoveoForSitecoreBindWithUserContext.ts":
/*!*******************************************************************!*\
  !*** ./src/ui/context/LazyCoveoForSitecoreBindWithUserContext.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreBindWithUserContext() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreBindWithUserContext', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | CoveoForSitecoreBindWithUserContext */ "CoveoForSitecoreBindWithUserContext").then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreBindWithUserContext.ts */ "./src/ui/context/CoveoForSitecoreBindWithUserContext.ts")['CoveoForSitecoreBindWithUserContext'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreBindWithUserContext', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreBindWithUserContext = lazyCoveoForSitecoreBindWithUserContext;


/***/ }),

/***/ "./src/ui/distance/LazyGoogleApiPositionProvider.ts":
/*!**********************************************************!*\
  !*** ./src/ui/distance/LazyGoogleApiPositionProvider.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoGoogleApiPositionProvider() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('GoogleApiPositionProvider', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | GoogleApiPositionProvider */ "GoogleApiPositionProvider").then((function () {
                var loaded = __webpack_require__(/*! ./GoogleApiPositionProvider.ts */ "./src/ui/distance/GoogleApiPositionProvider.ts")['GoogleApiPositionProvider'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('GoogleApiPositionProvider', resolve));
        });
    });
}
exports.lazyCoveoGoogleApiPositionProvider = lazyCoveoGoogleApiPositionProvider;


/***/ }),

/***/ "./src/ui/distance/LazyNavigatorPositionProvider.ts":
/*!**********************************************************!*\
  !*** ./src/ui/distance/LazyNavigatorPositionProvider.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoNavigatorPositionProvider() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('NavigatorPositionProvider', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | NavigatorPositionProvider */ "NavigatorPositionProvider").then((function () {
                var loaded = __webpack_require__(/*! ./NavigatorPositionProvider.ts */ "./src/ui/distance/NavigatorPositionProvider.ts")['NavigatorPositionProvider'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('NavigatorPositionProvider', resolve));
        });
    });
}
exports.lazyCoveoNavigatorPositionProvider = lazyCoveoNavigatorPositionProvider;


/***/ }),

/***/ "./src/ui/distance/LazyStaticPositionProvider.ts":
/*!*******************************************************!*\
  !*** ./src/ui/distance/LazyStaticPositionProvider.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoStaticPositionProvider() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('StaticPositionProvider', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | StaticPositionProvider */ "StaticPositionProvider").then((function () {
                var loaded = __webpack_require__(/*! ./StaticPositionProvider.ts */ "./src/ui/distance/StaticPositionProvider.ts")['StaticPositionProvider'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('StaticPositionProvider', resolve));
        });
    });
}
exports.lazyCoveoStaticPositionProvider = lazyCoveoStaticPositionProvider;


/***/ }),

/***/ "./src/ui/scopes/LazyCoveoForSitecoreExpressions.ts":
/*!**********************************************************!*\
  !*** ./src/ui/scopes/LazyCoveoForSitecoreExpressions.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreExpressions() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreExpressions', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | CoveoForSitecoreExpressions */ "CoveoForSitecoreExpressions").then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreExpressions.ts */ "./src/ui/scopes/CoveoForSitecoreExpressions.ts")['CoveoForSitecoreExpressions'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreExpressions', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreExpressions = lazyCoveoForSitecoreExpressions;


/***/ }),

/***/ "./src/ui/scopes/LazyCoveoForSitecoreExternalContent.ts":
/*!**************************************************************!*\
  !*** ./src/ui/scopes/LazyCoveoForSitecoreExternalContent.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreExternalContent() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreExternalContent', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | CoveoForSitecoreExternalContent */ "CoveoForSitecoreExternalContent").then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreExternalContent.ts */ "./src/ui/scopes/CoveoForSitecoreExternalContent.ts")['CoveoForSitecoreExternalContent'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreExternalContent', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreExternalContent = lazyCoveoForSitecoreExternalContent;


/***/ }),

/***/ "./src/ui/scopes/LazyCoveoForSitecoreFilterExpression.ts":
/*!***************************************************************!*\
  !*** ./src/ui/scopes/LazyCoveoForSitecoreFilterExpression.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreFilterExpression() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreFilterExpression', function () {
        return new Promise(function (resolve, reject) {
            Promise.all(/*! require.ensure | CoveoForSitecoreFilterExpression */[__webpack_require__.e("CoveoForSitecoreFilterExpression~CoveoForSitecoreRankingExpression"), __webpack_require__.e("CoveoForSitecoreFilterExpression")]).then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreFilterExpression.ts */ "./src/ui/scopes/CoveoForSitecoreFilterExpression.ts")['CoveoForSitecoreFilterExpression'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreFilterExpression', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreFilterExpression = lazyCoveoForSitecoreFilterExpression;


/***/ }),

/***/ "./src/ui/scopes/LazyCoveoForSitecoreLocalExpression.ts":
/*!**************************************************************!*\
  !*** ./src/ui/scopes/LazyCoveoForSitecoreLocalExpression.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreLocalExpression() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreLocalExpression', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | CoveoForSitecoreLocalExpression */ "CoveoForSitecoreLocalExpression").then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreLocalExpression.ts */ "./src/ui/scopes/CoveoForSitecoreLocalExpression.ts")['CoveoForSitecoreLocalExpression'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreLocalExpression', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreLocalExpression = lazyCoveoForSitecoreLocalExpression;


/***/ }),

/***/ "./src/ui/scopes/LazyCoveoForSitecoreRankingExpression.ts":
/*!****************************************************************!*\
  !*** ./src/ui/scopes/LazyCoveoForSitecoreRankingExpression.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreRankingExpression() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreRankingExpression', function () {
        return new Promise(function (resolve, reject) {
            Promise.all(/*! require.ensure | CoveoForSitecoreRankingExpression */[__webpack_require__.e("CoveoForSitecoreFilterExpression~CoveoForSitecoreRankingExpression"), __webpack_require__.e("CoveoForSitecoreRankingExpression")]).then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreRankingExpression.ts */ "./src/ui/scopes/CoveoForSitecoreRankingExpression.ts")['CoveoForSitecoreRankingExpression'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreRankingExpression', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreRankingExpression = lazyCoveoForSitecoreRankingExpression;


/***/ }),

/***/ "./src/ui/scopes/LazyCoveoForSitecoreSyntax.ts":
/*!*****************************************************!*\
  !*** ./src/ui/scopes/LazyCoveoForSitecoreSyntax.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
function lazyCoveoForSitecoreSyntax() {
    coveo_search_ui_1.LazyInitialization.registerLazyComponent('ForSitecoreSyntax', function () {
        return new Promise(function (resolve, reject) {
            __webpack_require__.e(/*! require.ensure | CoveoForSitecoreSyntax */ "CoveoForSitecoreSyntax").then((function () {
                var loaded = __webpack_require__(/*! ./CoveoForSitecoreSyntax.ts */ "./src/ui/scopes/CoveoForSitecoreSyntax.ts")['CoveoForSitecoreSyntax'];
                resolve(loaded);
            }).bind(null, __webpack_require__)).catch(coveo_search_ui_1.LazyInitialization.buildErrorCallback('CoveoForSitecoreSyntax', resolve));
        });
    });
}
exports.lazyCoveoForSitecoreSyntax = lazyCoveoForSitecoreSyntax;


/***/ }),

/***/ "./src/utils/HTMLUtils.ts":
/*!********************************!*\
  !*** ./src/utils/HTMLUtils.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function nodeListToArray(elements) {
    var array = [];
    for (var i = 0, length = elements.length; i < length; i++) {
        array.push(elements.item(i));
    }
    return array;
}
exports.nodeListToArray = nodeListToArray;
function cloneElementSafelyForAccessibility(element) {
    var clone = element.cloneNode(true);
    return removeAllIDAttributes(clone);
}
exports.cloneElementSafelyForAccessibility = cloneElementSafelyForAccessibility;
function removeAllIDAttributes(element) {
    element.removeAttribute('id');
    var children = element.querySelectorAll('*[id]');
    var length = children.length;
    for (var i = 0; i < length; i++) {
        children.item(i).removeAttribute('id');
    }
    return element;
}
exports.removeAllIDAttributes = removeAllIDAttributes;


/***/ }),

/***/ "./src/utils/SearchInterfaceProvider.ts":
/*!**********************************************!*\
  !*** ./src/utils/SearchInterfaceProvider.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var HTMLUtils_1 = __webpack_require__(/*! ./HTMLUtils */ "./src/utils/HTMLUtils.ts");
var SearchInterfacesProvider = /** @class */ (function () {
    function SearchInterfacesProvider() {
    }
    SearchInterfacesProvider.prototype.getSearchInterfacesInPage = function (componentsIds) {
        var searchInterfacesSelector = this.getSearchInterfacesSelectorFromComponentIds(componentsIds);
        var searchInterfaces = document.querySelectorAll(searchInterfacesSelector);
        return HTMLUtils_1.nodeListToArray(searchInterfaces);
    };
    SearchInterfacesProvider.prototype.getSearchInterfacesSelectorFromComponentIds = function (componentIds) {
        return componentIds.map(function (componentId) { return coveo_search_ui_1.Component.computeSelectorForType(componentId); }).join(', ');
    };
    return SearchInterfacesProvider;
}());
exports.SearchInterfacesProvider = SearchInterfacesProvider;


/***/ }),

/***/ "./src/utils/SitecorePublicPathUtils.ts":
/*!**********************************************!*\
  !*** ./src/utils/SitecorePublicPathUtils.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var HTMLUtils_1 = __webpack_require__(/*! ./HTMLUtils */ "./src/utils/HTMLUtils.ts");
/**
 * Copied from: https://github.com/coveo/search-ui/blob/master/src/utils/PublicPathUtils.ts
 * The only modified part is `getCoveoScript()` which references the .coveo-for-sitecore-script instead of coveo-script.
 */
var SitecorePublicPathUtils = /** @class */ (function (_super) {
    __extends(SitecorePublicPathUtils, _super);
    function SitecorePublicPathUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Overrides the coveo-search-ui implementation to check for our script.
    SitecorePublicPathUtils.getCoveoScript = function () {
        var _this = this;
        var scriptElements = HTMLUtils_1.nodeListToArray(document.querySelectorAll('.coveo-for-sitecore-script')).filter(function (el) {
            return _this.isScript(el);
        });
        if (scriptElements.length !== 0) {
            return scriptElements[0];
        }
        else {
            // Message is strongly inspired by the one in the coveo-search-ui.
            new coveo_search_ui_1.Logger(this)
                .warn("You should add the class coveo-for-sitecore-script on the script tag that includes the Coveo for Sitecore script. Not doing so may cause the framework to not be able to auto-detect the path to load the lazy chunks in certain environments.\n                More details here https://docs.coveo.com/en/295/javascript-search-framework/lazy-versus-eager-component-loading#fixing-code-chunks-loading-path-issues");
            // Returning a value so that the original `getDynamicPublicPath` does not warn a second time.
            return this.getCurrentScript();
        }
    };
    SitecorePublicPathUtils.isScript = function (el) {
        return el && coveo_search_ui_1.$$(el).is('script');
    };
    return SitecorePublicPathUtils;
}(coveo_search_ui_1.PublicPathUtils));
exports.SitecorePublicPathUtils = SitecorePublicPathUtils;


/***/ }),

/***/ "coveo-search-ui":
/*!********************************************************************************************************************!*\
  !*** external {"root":"Coveo","commonjs":"coveo-search-ui","commonjs2":"coveo-search-ui","amd":"coveo-search-ui"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_coveo_search_ui__;

/***/ })

/******/ });
});
//# sourceMappingURL=CoveoForSitecore.Lazy.js.map