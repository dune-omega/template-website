(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["CoveoForSitecoreExpressions"],{

/***/ "./src/ui/scopes/CoveoForSitecoreExpressions.ts":
/*!******************************************************!*\
  !*** ./src/ui/scopes/CoveoForSitecoreExpressions.ts ***!
  \******************************************************/
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
var ExpressionEvents_1 = __webpack_require__(/*! ../../events/ExpressionEvents */ "./src/events/ExpressionEvents.ts");
var IS_COVEO_FOR_SITECORE_EXPRESSIONS_EVENT_REGISTERED = 'coveoForSitecoreEventRegistered';
var CoveoForSitecoreExpressions = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreExpressions, _super);
    function CoveoForSitecoreExpressions(element, options, bindings) {
        var _this = _super.call(this, element, CoveoForSitecoreExpressions.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreExpressions, options);
        _this.bind.onRootElement(ContextEvents_1.SitecoreContextEvents.onSitecoreContextInitialization, _this.afterComponentsInitialization);
        return _this;
    }
    CoveoForSitecoreExpressions.prototype.afterComponentsInitialization = function (contextArgs) {
        var _this = this;
        if (!this.root.dataset[IS_COVEO_FOR_SITECORE_EXPRESSIONS_EVENT_REGISTERED]) {
            this.root.dataset[IS_COVEO_FOR_SITECORE_EXPRESSIONS_EVENT_REGISTERED] = 'true';
            this.bind.onRootElement(coveo_search_ui_1.QueryEvents.buildingQuery, function (buildingQueryArgs) {
                _this.onBuildingQuery(buildingQueryArgs, contextArgs);
            });
        }
    };
    CoveoForSitecoreExpressions.prototype.onBuildingQuery = function (buildingQueryArgs, contextArgs) {
        var externalContentArgs = this.triggerBuildingSitecoreExternalContent();
        var localSitecoreInstanceArgs = this.triggerBuildingLocalSitecoreInstanceEvent(externalContentArgs.sources);
        if (!localSitecoreInstanceArgs.expression.isEmpty()) {
            buildingQueryArgs.queryBuilder.constantExpression.add(localSitecoreInstanceArgs.expression.build(' OR '));
        }
    };
    CoveoForSitecoreExpressions.prototype.triggerBuildingSitecoreExternalContent = function () {
        var externalContentArgs = {
            sources: [],
        };
        this.bind.trigger(this.element, ExpressionEvents_1.SitecoreExpressionEvents.onBuildingSitecoreExternalContent, externalContentArgs);
        return {
            sources: this.filterUnique(externalContentArgs.sources),
        };
    };
    CoveoForSitecoreExpressions.prototype.triggerBuildingLocalSitecoreInstanceEvent = function (externalSources) {
        var localSitecoreInstanceArgs = {
            expression: new coveo_search_ui_1.ExpressionBuilder(),
            externalSources: externalSources,
            buildingQueryAlreadyProcessed: false,
        };
        this.bind.trigger(this.element, ExpressionEvents_1.SitecoreExpressionEvents.onBuildingLocalSitecoreInstanceExpression, localSitecoreInstanceArgs);
        return localSitecoreInstanceArgs;
    };
    CoveoForSitecoreExpressions.prototype.filterUnique = function (array) {
        return array.filter(function (value, index, self) { return self.indexOf(value) === index; });
    };
    CoveoForSitecoreExpressions.ID = 'ForSitecoreExpressions';
    CoveoForSitecoreExpressions.options = {};
    return CoveoForSitecoreExpressions;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreExpressions = CoveoForSitecoreExpressions;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreExpressions);


/***/ })

}]);
//# sourceMappingURL=CoveoForSitecoreExpressions.js.map