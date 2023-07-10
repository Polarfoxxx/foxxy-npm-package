"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesForChangeVariantForOffCanvas = {
    changeVariantForOffCanvas: changeVariantForOffCanvas
};
exports.default = servicesForChangeVariantForOffCanvas;
function changeVariantForOffCanvas(_a) {
    var variant = _a.variant;
    /* podmienky pre zmeny variant */
    if (variant === "white") {
        return style_1.allVariantOffCanvas.whiteVariantForOffCanvas;
    }
    else if (variant === "dark") {
        return style_1.allVariantOffCanvas.darkVariantForOffCanvas;
    }
    else if (variant === "default") {
        return style_1.allVariantOffCanvas.defaultVariantForOffCanvas;
    }
    else if (variant === undefined) {
        return style_1.allVariantOffCanvas.defaultVariantForOffCanvas;
    }
    else {
        return style_1.allVariantOffCanvas.defaultVariantForOffCanvas;
    }
    ;
}
//# sourceMappingURL=services.changeVariant.js.map