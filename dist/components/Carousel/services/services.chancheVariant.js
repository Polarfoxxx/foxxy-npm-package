"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesChangeVariantForCarousel = {
    changeVariantForCarousel: changeVariantForCarousel
};
exports.default = servicesChangeVariantForCarousel;
function changeVariantForCarousel(_a) {
    var variant = _a.variant;
    /* podmienka meniaca variantu */
    if (variant === "white") {
        return style_1.allvariantForCarousel.whiteStyleforCarousel;
    }
    else if (variant === "dark") {
        return style_1.allvariantForCarousel.darkStyleforCarousel;
    }
    else if (variant === "default") {
        return style_1.allvariantForCarousel.defaultStyleforCarousel;
    }
    else if (variant === undefined) {
        return style_1.allvariantForCarousel.defaultStyleforCarousel;
    }
    else {
        return style_1.allvariantForCarousel.defaultStyleforCarousel;
    }
}
//# sourceMappingURL=services.chancheVariant.js.map