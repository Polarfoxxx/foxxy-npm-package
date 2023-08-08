"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesChangeVariantDropDwn = {
    changeVariantDropDwn: changeVariantDropDwn
};
exports.default = servicesChangeVariantDropDwn;
function changeVariantDropDwn(props) {
    var variant_drop = props;
    if (variant_drop === "default") {
        return style_1.variantStyle_forDropdown.dropDefVariant;
    }
    else if (variant_drop === "white") {
        return style_1.variantStyle_forDropdown.dropWhiteVariant;
    }
    else if (variant_drop === "dark") {
        return style_1.variantStyle_forDropdown.dropDarkVariant;
    }
    else if (variant_drop === undefined) {
        return style_1.variantStyle_forDropdown.dropDefVariant;
    }
    else {
        return style_1.variantStyle_forDropdown.dropDefVariant;
    }
}
;
//# sourceMappingURL=changeVariant.services.js.map