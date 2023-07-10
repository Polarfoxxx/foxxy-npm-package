"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesChangeVariantForFrom = {
    changerVariantForForm: changerVariantForForm
};
exports.default = servicesChangeVariantForFrom;
function changerVariantForForm(_a) {
    var variant = _a.variant;
    /* funkcia meniaca variantu */
    if (variant === "dark") {
        return style_1.allVariantForForm.darkStyleForForm;
    }
    else if (variant === "funny") {
        return style_1.allVariantForForm.funnyStyleForForm;
    }
    else if (variant === "white") {
        return style_1.allVariantForForm.whiteStyleForForm;
    }
    else if (variant === "default") {
        return style_1.allVariantForForm.defaultStyleForForm;
    }
    else if (variant === undefined) {
        return style_1.allVariantForForm.defaultStyleForForm;
    }
    else {
        return style_1.allVariantForForm.defaultStyleForForm;
    }
    ;
}
;
//# sourceMappingURL=services.changeVariant.js.map