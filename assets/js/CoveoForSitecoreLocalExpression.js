(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["CoveoForSitecoreLocalExpression"],{

/***/ "./src/ui/scopes/CoveoForSitecoreLocalExpression.ts":
/*!**********************************************************!*\
  !*** ./src/ui/scopes/CoveoForSitecoreLocalExpression.ts ***!
  \**********************************************************/
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
var CoveoForSitecoreLocalExpression = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreLocalExpression, _super);
    function CoveoForSitecoreLocalExpression(element, options, bindings) {
        var _this = _super.call(this, element, CoveoForSitecoreLocalExpression.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreLocalExpression, options);
        _this.bind.onRootElement(ContextEvents_1.SitecoreContextEvents.onSitecoreContextInitialization, _this.onContextInitialization);
        return _this;
    }
    CoveoForSitecoreLocalExpression.prototype.onContextInitialization = function (context) {
        var _this = this;
        this.bind.onRootElement(ExpressionEvents_1.SitecoreExpressionEvents.onBuildingLocalSitecoreInstanceExpression, function (builderFilterExpression) {
            return _this.onBuildingFilterExpression(builderFilterExpression, context);
        });
    };
    CoveoForSitecoreLocalExpression.prototype.onBuildingFilterExpression = function (buildingFilterExpressionEventArgs, context) {
        if (!buildingFilterExpressionEventArgs.buildingQueryAlreadyProcessed) {
            buildingFilterExpressionEventArgs.buildingQueryAlreadyProcessed = true;
            var expression = new coveo_search_ui_1.ExpressionBuilder();
            if (this.options.scFilterOnCurrentLanguage) {
                expression.addFieldExpression("@" + context.languageFieldName, '==', [context.currentLanguage]);
            }
            if (this.options.scFilterOnLatestVersion) {
                expression.addFieldExpression("@" + context.latestVersionFieldName, '==', ['1']);
            }
            if (this.options.scFilterOnSitecoreContextDatabase) {
                expression.addFieldExpression('@source', '==', [context.indexSourceName]);
            }
            if (!expression.isEmpty()) {
                buildingFilterExpressionEventArgs.expression.add(expression.build());
            }
            if (buildingFilterExpressionEventArgs.externalSources &&
                buildingFilterExpressionEventArgs.externalSources.length > 0) {
                var sourceExpression = new coveo_search_ui_1.ExpressionBuilder();
                sourceExpression.addFieldExpression('@source', '==', buildingFilterExpressionEventArgs.externalSources);
                if (!sourceExpression.isEmpty()) {
                    buildingFilterExpressionEventArgs.expression.add(sourceExpression.build(' OR '));
                }
            }
        }
    };
    CoveoForSitecoreLocalExpression.ID = 'ForSitecoreLocalExpression';
    CoveoForSitecoreLocalExpression.options = {
        scFilterOnSitecoreContextDatabase: coveo_search_ui_1.ComponentOptions.buildBooleanOption(),
        scFilterOnCurrentLanguage: coveo_search_ui_1.ComponentOptions.buildBooleanOption(),
        scFilterOnLatestVersion: coveo_search_ui_1.ComponentOptions.buildBooleanOption(),
    };
    return CoveoForSitecoreLocalExpression;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreLocalExpression = CoveoForSitecoreLocalExpression;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreLocalExpression);


/***/ })

}]);
//# sourceMappingURL=CoveoForSitecoreLocalExpression.js.map