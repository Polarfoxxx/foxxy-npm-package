"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesChangeVariantForCarousel = {
    changeVariantForCarousel: changeVariantForCarousel
};
exports.default = servicesChangeVariantForCarousel;
function changeVariantForCarousel(_a) {
    var variant_crs = _a.variant_crs;
    /* podmienka meniaca variantu */
    if (variant_crs === "white") {
        return style_1.allvariantForCarousel.whiteStyleforCarousel;
    }
    else if (variant_crs === "dark") {
        return style_1.allvariantForCarousel.darkStyleforCarousel;
    }
    else if (variant_crs === "default") {
        return style_1.allvariantForCarousel.defaultStyleforCarousel;
    }
    else if (variant_crs === undefined) {
        return style_1.allvariantForCarousel.defaultStyleforCarousel;
    }
    else {
        return style_1.allvariantForCarousel.defaultStyleforCarousel;
    }
}
//# sourceMappingURL=services.chancheVariant.js.map