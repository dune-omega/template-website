(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["CoveoForSitecoreAnalytics"],{

/***/ "./src/ui/analytics/CoveoForSitecoreAnalytics.ts":
/*!*******************************************************!*\
  !*** ./src/ui/analytics/CoveoForSitecoreAnalytics.ts ***!
  \*******************************************************/
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
var CoveoForSitecoreAnalytics = /** @class */ (function (_super) {
    __extends(CoveoForSitecoreAnalytics, _super);
    function CoveoForSitecoreAnalytics(element, options, bindings) {
        var _this = _super.call(this, element, CoveoForSitecoreAnalytics.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, CoveoForSitecoreAnalytics, options);
        _this.bind.onRootElement(coveo_search_ui_1.InitializationEvents.afterInitialization, function () { return _this.onAfterInitialization(); });
        _this.bind.onRootElement(ContextEvents_1.SitecoreContextEvents.onSitecoreContextInitialization, function (args) { return _this.onSitecoreContextInitialization(args); });
        return _this;
    }
    CoveoForSitecoreAnalytics.prototype.onAfterInitialization = function () {
        if (this.bindings.usageAnalytics && this.options.scOriginContext) {
            this.bindings.usageAnalytics.setOriginContext(this.options.scOriginContext);
        }
    };
    CoveoForSitecoreAnalytics.prototype.onSitecoreContextInitialization = function (sitecoreContext) {
        this.completeAnalyticsCustomDataWithSitecoreContext(sitecoreContext);
        this.setUsageAnalyticsEnpointServiceUrl(sitecoreContext);
    };
    CoveoForSitecoreAnalytics.prototype.completeAnalyticsCustomDataWithSitecoreContext = function (sitecoreContext) {
        var _this = this;
        this.bind.onRootElement(coveo_search_ui_1.AnalyticsEvents.changeAnalyticsCustomData, function (args) {
            var _a;
            var options = _this.options;
            if (options) {
                if (options.scOverrideCurrentLanguage && !!sitecoreContext.currentLanguage) {
                    args.language = sitecoreContext.currentLanguage;
                }
                if (options.scOverrideOriginWithPageName && !!sitecoreContext.sitecorePageName) {
                    args.originLevel1 = sitecoreContext.sitecorePageName;
                }
                var customMetadata = {
                    pageFullPath: sitecoreContext.sitecorePageFullPath,
                    sitename: sitecoreContext.siteName,
                    siteName: sitecoreContext.siteName,
                };
                var userContext = window['CoveoForSitecoreUserContext'];
                if (!!userContext && !!userContext.handler) {
                    var context = userContext.handler.getContext();
                    if (!!context) {
                        for (var key in context) {
                            _.extend(customMetadata, (_a = {},
                                _a['context_' + key] = context[key],
                                _a));
                        }
                    }
                }
                if (options.scAnalyticsCustomMetadata) {
                    _.extend(customMetadata, options.scAnalyticsCustomMetadata);
                }
                _.extend(args.metaObject, customMetadata);
            }
        });
    };
    CoveoForSitecoreAnalytics.prototype.setUsageAnalyticsEnpointServiceUrl = function (sitecoreContext) {
        if (this.bindings.usageAnalytics &&
            this.bindings.usageAnalytics.endpoint &&
            this.bindings.usageAnalytics.endpoint.options) {
            this.bindings.usageAnalytics.endpoint.options.serviceUrl =
                this.options.endpoint || sitecoreContext.analyticsEndpointUri;
        }
    };
    CoveoForSitecoreAnalytics.ID = 'ForSitecoreAnalytics';
    CoveoForSitecoreAnalytics.options = {
        scAnalyticsCustomMetadata: coveo_search_ui_1.ComponentOptions.buildJsonOption(),
        scOriginContext: coveo_search_ui_1.ComponentOptions.buildStringOption({
            defaultValue: 'WebsiteSearch',
        }),
        scOverrideOriginWithPageName: coveo_search_ui_1.ComponentOptions.buildBooleanOption({
            defaultValue: false,
        }),
        scOverrideCurrentLanguage: coveo_search_ui_1.ComponentOptions.buildBooleanOption({
            defaultValue: true,
        }),
        endpoint: coveo_search_ui_1.ComponentOptions.buildStringOption(),
    };
    return CoveoForSitecoreAnalytics;
}(coveo_search_ui_1.Component));
exports.CoveoForSitecoreAnalytics = CoveoForSitecoreAnalytics;
coveo_search_ui_1.Initialization.registerAutoCreateComponent(CoveoForSitecoreAnalytics);


/***/ })

}]);
//# sourceMappingURL=CoveoForSitecoreAnalytics.js.map