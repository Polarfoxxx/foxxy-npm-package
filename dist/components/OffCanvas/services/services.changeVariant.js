"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesForChangeVariantForOffCanvas = {
    changeVariantForOffCanvas: changeVariantForOffCanvas
};
exports.default = servicesForChangeVariantForOffCanvas;
function changeVariantForOffCanvas(_a) {
    var variant_offCnv = _a.variant_offCnv;
    /* podmienky pre zmeny variant */
    if (variant_offCnv === "white") {
        return style_1.allVariantOffCanvas.whiteVariantForOffCanvas;
    }
    else if (variant_offCnv === "dark") {
        return style_1.allVariantOffCanvas.darkVariantForOffCanvas;
    }
    else if (variant_offCnv === "default") {
        return style_1.allVariantOffCanvas.defaultVariantForOffCanvas;
    }
    else if (variant_offCnv === undefined) {
        return style_1.allVariantOffCanvas.defaultVariantForOffCanvas;
    }
    else {
        return style_1.allVariantOffCanvas.defaultVariantForOffCanvas;
    }
    ;
}
//# sourceMappingURL=services.changeVariant.js.map