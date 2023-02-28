(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["CoveoForSitecoreSyntax"],{

/***/ "./src/ui/scopes/CoveoForSitecoreSyntax.ts":
/*!*************************************************!*\
  !*** ./src/ui/scopes/CoveoForSitecoreSyntax.ts ***!
  \*************************************************/
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
var Context_1 = __webpack_require__(/*! ../../base/Context */ "./src/base/Context.ts");
var CoveoForSitecoreSyntax = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreSyntax, _super);
    function CoveoForSitecoreSyntax(element, options, bindings) {
        var _this = _super.call(this, element, CoveoForSitecoreSyntax.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.fieldHandler = Context_1.Context.fields;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreSyntax, options);
        if (!_this.root.dataset[CoveoForSitecoreSyntax.IS_COVEO_FOR_SITECORE_SYNTAX_EVENT_REGISTERED]) {
            _this.root.dataset[CoveoForSitecoreSyntax.IS_COVEO_FOR_SITECORE_SYNTAX_EVENT_REGISTERED] = 'true';
            _this.bind.onRootElement(coveo_search_ui_1.QueryEvents.doneBuildingQuery, _this.onDoneBuildingQuery);
        }
        return _this;
    }
    CoveoForSitecoreSyntax.prototype.setFieldHandler = function (fieldHandler) {
        this.fieldHandler = fieldHandler;
    };
    CoveoForSitecoreSyntax.prototype.onDoneBuildingQuery = function (buildingQueryArgs) {
        this.replaceSitecoreFieldExpressionsByCoveoFieldExpressions(buildingQueryArgs.queryBuilder.expression);
    };
    CoveoForSitecoreSyntax.prototype.replaceSitecoreFieldExpressionsByCoveoFieldExpressions = function (expressionBuilder) {
        var _this = this;
        var expressionParts = expressionBuilder.getParts();
        expressionParts.forEach(function (expression) {
            var originalExpression = expression;
            expression = _this.replaceSitecoreFieldNamesByCoveoFieldNames(expression);
            expressionBuilder.remove(originalExpression);
            expressionBuilder.add(expression);
        });
    };
    CoveoForSitecoreSyntax.prototype.replaceSitecoreFieldNamesByCoveoFieldNames = function (expression) {
        var _this = this;
        var sitecoreFieldNamesMatched = this.extractSitecoreFieldNames(expression);
        if (sitecoreFieldNamesMatched) {
            sitecoreFieldNamesMatched.forEach(function (sitecoreFieldName) {
                var coveoFieldName = _this.convertUnaryFieldExpressionToCoveoUnaryFieldExpression(sitecoreFieldName);
                expression = expression.replace(sitecoreFieldName, coveoFieldName);
            });
        }
        return expression;
    };
    CoveoForSitecoreSyntax.prototype.extractSitecoreFieldNames = function (expression) {
        return expression.match(CoveoForSitecoreSyntax.SITECORE_FIELD_NAME_REGEX);
    };
    CoveoForSitecoreSyntax.prototype.convertUnaryFieldExpressionToCoveoUnaryFieldExpression = function (unaryFieldExpression) {
        if (!this.fieldHandler.isCoveoFieldName(unaryFieldExpression)) {
            return this.fieldHandler.toCoveo(unaryFieldExpression);
        }
        else {
            return unaryFieldExpression;
        }
    };
    CoveoForSitecoreSyntax.ID = 'ForSitecoreSyntax';
    CoveoForSitecoreSyntax.options = {};
    CoveoForSitecoreSyntax.IS_COVEO_FOR_SITECORE_SYNTAX_EVENT_REGISTERED = 'coveoForSitecoreSyntaxEventRegistered';
    CoveoForSitecoreSyntax.SITECORE_FIELD_NAME_REGEX = /@[\w\_]*(?=\=|\=\=|\<\>|\s|$)/gi;
    return CoveoForSitecoreSyntax;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreSyntax = CoveoForSitecoreSyntax;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreSyntax);


/***/ })

}]);
//# sourceMappingURL=CoveoForSitecoreSyntax.js.map