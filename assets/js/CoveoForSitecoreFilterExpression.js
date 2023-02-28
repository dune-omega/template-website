(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["CoveoForSitecoreFilterExpression"],{

/***/ "./src/resolvers/nodes/QueryFilterNodeExpressionResolver.ts":
/*!******************************************************************!*\
  !*** ./src/resolvers/nodes/QueryFilterNodeExpressionResolver.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryNodeTreeParserFactory_1 = __webpack_require__(/*! ./queryNodes/QueryNodeTreeParserFactory */ "./src/resolvers/nodes/queryNodes/QueryNodeTreeParserFactory.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
var QueryFilterNodeExpressionResolver = /** @class */ (function () {
    function QueryFilterNodeExpressionResolver(parser) {
        this.parser = parser;
    }
    QueryFilterNodeExpressionResolver.prototype.parseQueryFilterNode = function (queryFilterNode) {
        coveo_search_ui_1.Assert.isNotNull(queryFilterNode);
        var queryBuilder = new coveo_search_ui_1.QueryBuilder();
        queryBuilder.advancedExpression.add(this.parser.parse(queryFilterNode.advanced));
        return queryBuilder;
    };
    return QueryFilterNodeExpressionResolver;
}());
exports.QueryFilterNodeExpressionResolver = QueryFilterNodeExpressionResolver;
var QueryFilterNodeExpressionResolverFactory = /** @class */ (function () {
    function QueryFilterNodeExpressionResolverFactory() {
    }
    QueryFilterNodeExpressionResolverFactory.prototype.createQueryFilterNodeExpression = function (logger) {
        var parserFactory = new QueryNodeTreeParserFactory_1.QueryNodeTreeParserFactory();
        var parser = parserFactory.createParser(logger);
        return new QueryFilterNodeExpressionResolver(parser);
    };
    return QueryFilterNodeExpressionResolverFactory;
}());
exports.QueryFilterNodeExpressionResolverFactory = QueryFilterNodeExpressionResolverFactory;


/***/ }),

/***/ "./src/ui/scopes/CoveoForSitecoreFilterExpression.ts":
/*!***********************************************************!*\
  !*** ./src/ui/scopes/CoveoForSitecoreFilterExpression.ts ***!
  \***********************************************************/
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
var TabUtils_1 = __webpack_require__(/*! ../../utils/TabUtils */ "./src/utils/TabUtils.ts");
var QueryFilterNodeExpressionResolver_1 = __webpack_require__(/*! ../../resolvers/nodes/QueryFilterNodeExpressionResolver */ "./src/resolvers/nodes/QueryFilterNodeExpressionResolver.ts");
var QueryFilterNodeOptions = /** @class */ (function () {
    function QueryFilterNodeOptions() {
    }
    QueryFilterNodeOptions.parseQueryFilterNode = function (rawValue) {
        return JSON.parse(this.unescapeAttributeValue(rawValue));
    };
    QueryFilterNodeOptions.unescapeAttributeValue = function (value) {
        return value
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&g‌​t;/g, '>')
            .replace(/&quot;/g, '"');
    };
    return QueryFilterNodeOptions;
}());
exports.QueryFilterNodeOptions = QueryFilterNodeOptions;
var CoveoForSitecoreFilterExpression = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreFilterExpression, _super);
    function CoveoForSitecoreFilterExpression(element, options, bindings, queryFilterNodeFactory) {
        if (queryFilterNodeFactory === void 0) { queryFilterNodeFactory = new QueryFilterNodeExpressionResolver_1.QueryFilterNodeExpressionResolverFactory(); }
        var _this = _super.call(this, element, CoveoForSitecoreFilterExpression.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.queryFilterNodeFactory = queryFilterNodeFactory;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreFilterExpression, options);
        _this.bind.onRootElement(coveo_search_ui_1.QueryEvents.buildingQuery, _this.onBuildingQuery);
        return _this;
    }
    CoveoForSitecoreFilterExpression.prototype.onBuildingQuery = function (buildingQuery) {
        if (this.shouldAddFilterExpression()) {
            if (!!this.options.scAdvancedFilter) {
                buildingQuery.queryBuilder.advancedExpression.add(this.options.scAdvancedFilter.trim());
            }
            if (!!this.options.scFilterScopeNode) {
                try {
                    var resolver = this.getQueryFilterNodeExpressionResolver();
                    var resultingBuilder = resolver.parseQueryFilterNode(this.options.scFilterScopeNode);
                    buildingQuery.queryBuilder.advancedExpression.fromExpressionBuilder(resultingBuilder.advancedExpression);
                }
                catch (exception) {
                    this.logger.error('Could not parse the query filter node.', exception);
                }
            }
        }
    };
    CoveoForSitecoreFilterExpression.prototype.getQueryFilterNodeExpressionResolver = function () {
        return (this.queryFilterNodeResolver ||
            (this.queryFilterNodeResolver = this.queryFilterNodeFactory.createQueryFilterNodeExpression(this.logger)));
    };
    CoveoForSitecoreFilterExpression.prototype.shouldAddFilterExpression = function () {
        return TabUtils_1.isTabCurrentlySelected(this.options.scScopeToTab, this.searchInterface);
    };
    CoveoForSitecoreFilterExpression.ID = 'ForSitecoreFilterExpression';
    CoveoForSitecoreFilterExpression.options = {
        scScopeToTab: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scAdvancedFilter: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scFilterScopeNode: coveo_search_ui_1.ComponentOptions.buildCustomOption(function (value) {
            return QueryFilterNodeOptions.parseQueryFilterNode(value);
        }),
    };
    return CoveoForSitecoreFilterExpression;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreFilterExpression = CoveoForSitecoreFilterExpression;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreFilterExpression);


/***/ })

}]);
//# sourceMappingURL=CoveoForSitecoreFilterExpression.js.map