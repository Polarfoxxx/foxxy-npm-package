"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesChangeVariantForFrom = {
    changerVariantForForm: changerVariantForForm
};
exports.default = servicesChangeVariantForFrom;
function changerVariantForForm(_a) {
    var variant_form = _a.variant_form;
    /* funkcia meniaca variantu */
    if (variant_form === "dark") {
        return style_1.allVariantForForm.darkStyleForForm;
    }
    else if (variant_form === "funny") {
        return style_1.allVariantForForm.funnyStyleForForm;
    }
    else if (variant_form === "white") {
        return style_1.allVariantForForm.whiteStyleForForm;
    }
    else if (variant_form === "default") {
        return style_1.allVariantForForm.defaultStyleForForm;
    }
    else if (variant_form === undefined) {
        return style_1.allVariantForForm.defaultStyleForForm;
    }
    else {
        return style_1.allVariantForForm.defaultStyleForForm;
    }
    ;
}
;
//# sourceMappingURL=services.changeVariant.js.map