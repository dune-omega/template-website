(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["CoveoForSitecoreRankingExpression"],{

/***/ "./src/resolvers/nodes/QueryRankingNodeExpressionResolver.ts":
/*!*******************************************************************!*\
  !*** ./src/resolvers/nodes/QueryRankingNodeExpressionResolver.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryNodeTreeParserFactory_1 = __webpack_require__(/*! ./queryNodes/QueryNodeTreeParserFactory */ "./src/resolvers/nodes/queryNodes/QueryNodeTreeParserFactory.ts");
var Context_1 = __webpack_require__(/*! ../../base/Context */ "./src/base/Context.ts");
var coveo_search_ui_1 = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/*
    Matches "@[x]"" and return x as matching group.
    Examples:
        * @[blublu] gives "blublu".
        * @[[blublu]] gives "[blublu]"
        * @[blublu]] gives "blublu]"
*/
var rankingExpressionFieldsRegex = /@\[(.*?\]*)\]/g.compile();
var QueryRankingNodeExpressionResolver = /** @class */ (function () {
    function QueryRankingNodeExpressionResolver(parser, fieldsHandler) {
        this.parser = parser;
        this.fieldsHandler = fieldsHandler;
    }
    QueryRankingNodeExpressionResolver.prototype.parseQueryRankingNode = function (queryRankingNode) {
        var _this = this;
        var queryBuilder = new coveo_search_ui_1.QueryBuilder();
        queryRankingNode.rankingExpressions.map(function (ranking) {
            var parsedExpression = _this.parser.parse(ranking.expression);
            if (parsedExpression !== '') {
                queryBuilder.advancedExpression.add("$qre(expression:'" + parsedExpression + "', modifier:" + ranking.modifier + ")");
            }
        });
        queryRankingNode.rankingFunctions.forEach(function (rankingFunction) {
            rankingFunction.expression = _this.translateRankingExpressionFieldNames(rankingFunction.expression);
            queryBuilder.rankingFunctions.push(rankingFunction);
        });
        queryRankingNode.textualRankingExpressions
            .filter(function (rankingExpression) { return rankingExpression.expression !== ''; })
            .forEach(function (rankingExpression) {
            queryBuilder.advancedExpression.add(rankingExpression.expression);
        });
        return queryBuilder;
    };
    QueryRankingNodeExpressionResolver.prototype.translateRankingExpressionFieldNames = function (expression) {
        var _this = this;
        expression.replace(rankingExpressionFieldsRegex, function (matchingExpression, matchingGroup) {
            return _this.fieldsHandler.toCoveo(matchingGroup);
        });
        return expression;
    };
    return QueryRankingNodeExpressionResolver;
}());
exports.QueryRankingNodeExpressionResolver = QueryRankingNodeExpressionResolver;
var QueryRankingNodeExpressionResolverFactory = /** @class */ (function () {
    function QueryRankingNodeExpressionResolverFactory() {
    }
    QueryRankingNodeExpressionResolverFactory.prototype.createQueryFilterNodeExpression = function (logger) {
        var parserFactory = new QueryNodeTreeParserFactory_1.QueryNodeTreeParserFactory();
        var parser = parserFactory.createParser(logger);
        return new QueryRankingNodeExpressionResolver(parser, Context_1.Context.fields);
    };
    return QueryRankingNodeExpressionResolverFactory;
}());
exports.QueryRankingNodeExpressionResolverFactory = QueryRankingNodeExpressionResolverFactory;


/***/ }),

/***/ "./src/ui/scopes/CoveoForSitecoreRankingExpression.ts":
/*!************************************************************!*\
  !*** ./src/ui/scopes/CoveoForSitecoreRankingExpression.ts ***!
  \************************************************************/
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
var QueryRankingNodeExpressionResolver_1 = __webpack_require__(/*! ../../resolvers/nodes/QueryRankingNodeExpressionResolver */ "./src/resolvers/nodes/QueryRankingNodeExpressionResolver.ts");
var CoveoForSitecoreRankingExpression = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreRankingExpression, _super);
    function CoveoForSitecoreRankingExpression(element, options, bindings) {
        var _this = _super.call(this, element, CoveoForSitecoreRankingExpression.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreRankingExpression, options);
        _this.bind.onRootElement(coveo_search_ui_1.QueryEvents.buildingQuery, _this.onBuildingQuery);
        return _this;
    }
    CoveoForSitecoreRankingExpression.prototype.onBuildingQuery = function (buildingQuery) {
        if (this.shouldAddRankingExpression()) {
            if (!!this.options.scRankingExpression) {
                buildingQuery.queryBuilder.advancedExpression.add(this.options.scRankingExpression.trim());
            }
            if (!!this.options.scRankingScopeNode) {
                var resolver = this.getNodeResolver();
                var builder = resolver.parseQueryRankingNode(this.options.scRankingScopeNode);
                builder.rankingFunctions.forEach(function (rankingFunction) {
                    return buildingQuery.queryBuilder.rankingFunctions.push(rankingFunction);
                });
                this.copyQueryBuilderAttributes(builder, buildingQuery.queryBuilder);
            }
        }
    };
    CoveoForSitecoreRankingExpression.prototype.copyQueryBuilderAttributes = function (from, to) {
        from.rankingFunctions.forEach(function (rankingFunction) { return to.rankingFunctions.push(rankingFunction); });
        to.advancedExpression.fromExpressionBuilder(from.advancedExpression);
    };
    CoveoForSitecoreRankingExpression.prototype.getNodeResolver = function () {
        return (this.nodeResolver ||
            (this.nodeResolver = new QueryRankingNodeExpressionResolver_1.QueryRankingNodeExpressionResolverFactory().createQueryFilterNodeExpression(this.logger)));
    };
    CoveoForSitecoreRankingExpression.prototype.shouldAddRankingExpression = function () {
        return TabUtils_1.isTabCurrentlySelected(this.options.scScopeToTab, this.searchInterface);
    };
    CoveoForSitecoreRankingExpression.ID = 'ForSitecoreRankingExpression';
    CoveoForSitecoreRankingExpression.options = {
        scScopeToTab: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scRankingExpression: coveo_search_ui_1.ComponentOptions.buildStringOption(),
        scRankingScopeNode: coveo_search_ui_1.ComponentOptions.buildCustomOption(function (value) {
            return JSON.parse(value);
        }),
    };
    return CoveoForSitecoreRankingExpression;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreRankingExpression = CoveoForSitecoreRankingExpression;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreRankingExpression);


/***/ })

}]);
//# sourceMappingURL=CoveoForSitecoreRankingExpression.js.map