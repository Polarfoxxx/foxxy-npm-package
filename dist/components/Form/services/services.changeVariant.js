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
var style_1 = require("../style");
var servicesChangeVariantForFrom = {
    changerVariantForForm: changerVariantForForm
};
exports.default = servicesChangeVariantForFrom;
function changerVariantForForm(_a) {
    var variant = _a.variant;
    var formVariantStyle = __assign({}, style_1.allVariantForForm.defaultStyleForForm);
    /* funkcia meniaca variantu */
    (function () {
        if (variant) {
            if (variant === "dark") {
                formVariantStyle = style_1.allVariantForForm.darkStyleForForm;
                console.log(style_1.allVariantForForm.darkStyleForForm);
            }
            else if (variant === "funny") {
                formVariantStyle = style_1.allVariantForForm.funnyStyleForForm;
            }
            else if (variant === "white") {
                formVariantStyle = style_1.allVariantForForm.whiteStyleForForm;
            }
            else {
                formVariantStyle = style_1.allVariantForForm.defaultStyleForForm;
            }
        }
    })();
    return (formVariantStyle);
}
//# sourceMappingURL=services.changeVariant.js.map