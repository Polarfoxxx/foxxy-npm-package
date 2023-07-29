"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesChangeVariantForModal = {
    changeVariantForModal: changeVariantForModal
};
exports.default = servicesChangeVariantForModal;
function changeVariantForModal(_a) {
    var variant_mdl = _a.variant_mdl;
    //#region block
    if (variant_mdl === "white") {
        return style_1.allvariantsForModal.whiteStyleForModal;
    }
    else if (variant_mdl === "dark") {
        return style_1.allvariantsForModal.darkStyleForModal;
    }
    else if (variant_mdl === "default") {
        return style_1.allvariantsForModal.defaultStyleForModal;
    }
    else if (variant_mdl === undefined) {
        return style_1.allvariantsForModal.defaultStyleForModal;
    }
    else {
        return style_1.allvariantsForModal.defaultStyleForModal;
    }
    //#endregion
}
;
//# sourceMappingURL=services.changeVariant.js.map