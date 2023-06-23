"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var white_style_1 = require("./style/white.style");
var ocean_style_1 = require("./style/ocean.style");
var default_style_1 = require("./style/default.style");
var servicesChangeVariantForModal = {
    changeVariantForModal: changeVariantForModal
};
exports.default = servicesChangeVariantForModal;
function changeVariantForModal(_a) {
    var variant = _a.variant;
    var variantStyle = default_style_1.defaultStyleForModal;
    //#region block
    if (variant === "white") {
        variantStyle = white_style_1.whiteStyleForModal;
    }
    else if (variant === "ocean") {
        variantStyle = ocean_style_1.oceanStyleForModal;
    }
    else {
        default_style_1.defaultStyleForModal;
    }
    //#endregion
    return (variantStyle);
}
;
//# sourceMappingURL=services.js.map