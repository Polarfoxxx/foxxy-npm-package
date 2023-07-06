"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultVariant_style_1 = require("./style/variant.style/defaultVariant.style");
var oceanVariant_style_1 = require("./style/variant.style/oceanVariant.style");
var darkVariant_style_1 = require("./style/variant.style/darkVariant.style");
var servicesChangeVariantForCarousel = {
    changeVariantForCarousel: changeVariantForCarousel
};
exports.default = servicesChangeVariantForCarousel;
function changeVariantForCarousel(_a) {
    var variant = _a.variant;
    /* podmienka meniaca variantu */
    if (variant === "ocean") {
        return oceanVariant_style_1.oceanStyleforCarousel;
    }
    else if (variant === "dark") {
        return darkVariant_style_1.darkStyleforCarousel;
    }
    else {
        return defaultVariant_style_1.defaultStyleforCarousel;
    }
}
//# sourceMappingURL=services.chancheVariant.js.map