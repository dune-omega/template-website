(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["CoveoForSitecoreBindWithUserContext"],{

/***/ "./src/ui/context/CoveoForSitecoreBindWithUserContext.ts":
/*!***************************************************************!*\
  !*** ./src/ui/context/CoveoForSitecoreBindWithUserContext.ts ***!
  \***************************************************************/
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
var CoveoForSitecoreBindWithUserContext = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreBindWithUserContext, _super);
    function CoveoForSitecoreBindWithUserContext(element, options, bindings) {
        var _this = _super.call(this, element, CoveoForSitecoreBindWithUserContext.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreBindWithUserContext, options);
        _this.bind.onRootElement(coveo_search_ui_1.QueryEvents.doneBuildingQuery, _this.doneBuildingQuery);
        _this.bind.onRootElement(coveo_search_ui_1.OmniboxEvents.buildingQuerySuggest, _this.buildingQuerySuggest);
        return _this;
    }
    CoveoForSitecoreBindWithUserContext.prototype.doneBuildingQuery = function (args) {
        var context = window['CoveoForSitecoreUserContext'];
        if (!!context && !!context.handler) {
            args.queryBuilder.addContext(context.handler.getContext());
        }
    };
    CoveoForSitecoreBindWithUserContext.prototype.buildingQuerySuggest = function (args) {
        var context = window['CoveoForSitecoreUserContext'];
        if (!!context && !!context.handler) {
            args.payload.context = context.handler.getContext();
        }
    };
    CoveoForSitecoreBindWithUserContext.ID = 'ForSitecoreBindWithUserContext';
    CoveoForSitecoreBindWithUserContext.options = {};
    return CoveoForSitecoreBindWithUserContext;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreBindWithUserContext = CoveoForSitecoreBindWithUserContext;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreBindWithUserContext);


/***/ })

}]);
//# sourceMappingURL=CoveoForSitecoreBindWithUserContext.js.map