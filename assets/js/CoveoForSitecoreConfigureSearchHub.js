(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["CoveoForSitecoreConfigureSearchHub"],{

/***/ "./src/ui/analytics/CoveoForSitecoreConfigureSearchHub.ts":
/*!****************************************************************!*\
  !*** ./src/ui/analytics/CoveoForSitecoreConfigureSearchHub.ts ***!
  \****************************************************************/
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
var searchHubAttribute = 'searchHub';
var CoveoForSitecoreConfigureSearchHub = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreConfigureSearchHub, _super);
    function CoveoForSitecoreConfigureSearchHub(element, options, bindings) {
        var _this = _super.call(this, element, CoveoForSitecoreConfigureSearchHub.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreConfigureSearchHub, options);
        if (!!_this.options.scSearchHub) {
            _this.bind.oneRootElement(coveo_search_ui_1.InitializationEvents.afterComponentsInitialization, _this.onAfterComponentsInitialization);
        }
        return _this;
    }
    CoveoForSitecoreConfigureSearchHub.prototype.onAfterComponentsInitialization = function () {
        var currentSearchHub = this.componentOptionsModel.get(searchHubAttribute);
        if (!currentSearchHub) {
            this.componentOptionsModel.set(searchHubAttribute, this.options.scSearchHub);
        }
    };
    CoveoForSitecoreConfigureSearchHub.ID = 'ForSitecoreConfigureSearchHub';
    CoveoForSitecoreConfigureSearchHub.options = {
        scSearchHub: coveo_search_ui_1.ComponentOptions.buildStringOption(),
    };
    return CoveoForSitecoreConfigureSearchHub;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreConfigureSearchHub = CoveoForSitecoreConfigureSearchHub;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreConfigureSearchHub);


/***/ })

}]);
//# sourceMappingURL=CoveoForSitecoreConfigureSearchHub.js.map