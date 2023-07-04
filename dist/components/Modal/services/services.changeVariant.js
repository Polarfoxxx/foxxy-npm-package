"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesChangeVariantForModal = {
    changeVariantForModal: changeVariantForModal
};
exports.default = servicesChangeVariantForModal;
function changeVariantForModal(_a) {
    var variant = _a.variant;
    //#region block
    if (variant === "white") {
        return style_1.allvariantsForModal.whiteStyleForModal;
    }
    else if (variant === "dark") {
        return style_1.allvariantsForModal.darkStyleForModal;
    }
    else if (variant === "default") {
        return style_1.allvariantsForModal.defaultStyleForModal;
    }
    else {
        style_1.allvariantsForModal.defaultStyleForModal;
    }
    //#endregion
}
;
//# sourceMappingURL=services.changeVariant.js.map