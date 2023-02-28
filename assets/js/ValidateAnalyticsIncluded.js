(window["webpackJsonpCoveoForSitecore"] = window["webpackJsonpCoveoForSitecore"] || []).push([["ValidateAnalyticsIncluded"],{

/***/ "./src/ui/analytics/ValidateAnalyticsIncluded.ts":
/*!*******************************************************!*\
  !*** ./src/ui/analytics/ValidateAnalyticsIncluded.ts ***!
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
var ValidateAnalyticsIncluded = /** @class */ (function (_super) {
    __extends(ValidateAnalyticsIncluded, _super);
    function ValidateAnalyticsIncluded(element, options, bindings) {
        var _this = _super.call(this, element, ValidateAnalyticsIncluded.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, ValidateAnalyticsIncluded, options);
        _this.bind.onRootElement(ContextEvents_1.SitecoreContextEvents.onSitecoreContextInitialization, _this.onSitecoreContextInitialization);
        return _this;
    }
    ValidateAnalyticsIncluded.prototype.onSitecoreContextInitialization = function (sitecoreContextArgs) {
        if (sitecoreContextArgs.shouldHaveAnalyticsComponent && this.searchInterfaceHasNoBoundAnalyticsComponent()) {
            if (sitecoreContextArgs.isInExperienceEditor) {
                var errorMessage = getErrorMessage(this.options.componentName || 'Search Interface');
                if (!this.checkIfErrorInErrorMessage(errorMessage)) {
                    console.warn(errorMessage);
                    this.element.appendChild(this.createErrorMessageElement(errorMessage));
                }
            }
        }
    };
    ValidateAnalyticsIncluded.prototype.checkIfErrorInErrorMessage = function (errorMessage) {
        for (var index = 0; index < this.element.children.length; index++) {
            var element = this.element.children[index];
            if (element.textContent.indexOf(errorMessage, 0) !== -1) {
                return true;
            }
        }
        return false;
    };
    ValidateAnalyticsIncluded.prototype.searchInterfaceHasNoBoundAnalyticsComponent = function () {
        return (this.searchInterface.getComponents('Analytics').length === 0 &&
            this.searchInterface.getComponents('ForSitecoreAnalytics').length === 0);
    };
    ValidateAnalyticsIncluded.prototype.createErrorMessageElement = function (errorMessage) {
        var errorSpan = document.createElement('span');
        errorSpan.classList.add('errorMessage');
        errorSpan.textContent = errorMessage;
        return errorSpan;
    };
    ValidateAnalyticsIncluded.ID = 'ValidateAnalyticsIncluded';
    ValidateAnalyticsIncluded.options = {
        componentName: coveo_search_ui_1.ComponentOptions.buildStringOption({
            defaultValue: '',
            attrName: 'data-component-name',
        }),
    };
    return ValidateAnalyticsIncluded;
}(coveo_search_ui_1.Component));
exports.ValidateAnalyticsIncluded = ValidateAnalyticsIncluded;
function getErrorMessage(component) {
    return "The Coveo Analytics are not enabled for this " + component + ". Insert a Coveo For Sitecore Analytics component to record Coveo Usage Analytics data.";
}
coveo_search_ui_1.Initialization.registerAutoCreateComponent(ValidateAnalyticsIncluded);


/***/ })

}]);
//# sourceMappingURL=ValidateAnalyticsIncluded.js.map