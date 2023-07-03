"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_style_1 = require("./style/variant.style/default.style");
var white_style_1 = require("./style/variant.style/white.style");
var dark_style_1 = require("./style/variant.style/dark.style");
var funny_style_1 = require("./style/variant.style/funny.style");
var servicesChangeStyleForFrom = {
    changerStyleForForm: changerStyleForForm
};
exports.default = servicesChangeStyleForFrom;
function changerStyleForForm(_a) {
    var variant = _a.variant;
    var formVariantStyle = __assign({}, default_style_1.defaultStyleForForm);
    /* funkcia meniaca variantu */
    (function () {
        if (variant) {
            if (variant === "dark") {
                formVariantStyle = dark_style_1.darkStyleForForm;
                console.log(dark_style_1.darkStyleForForm);
            }
            else if (variant === "funny") {
                formVariantStyle = funny_style_1.funnyStyleForForm;
            }
            else if (variant === "white") {
                formVariantStyle = white_style_1.whiteStyleForForm;
            }
            else {
                formVariantStyle = default_style_1.defaultStyleForForm;
            }
        }
    })();
    return (formVariantStyle);
}
//# sourceMappingURL=services.js.map