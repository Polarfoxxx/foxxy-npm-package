"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var master_style_1 = require("../styles/size.style/master.style");
var styles_1 = require("../styles");
var servicesChangeVariantForButtons = {
    changeVariantForButtons: changeVariantForButtons
};
exports.default = servicesChangeVariantForButtons;
function changeVariantForButtons(_a) {
    var variant = _a.variant, border = _a.border, round = _a.round, lg = _a.lg, sm = _a.sm;
    /* deklaracia */
    var sizeElement = {};
    var variant_style = {};
    var impStyleName = styles_1.allVariantStyleForButton.defaultStyle;
    /* farebna varianta */
    if (variant) {
        if (variant === "white") {
            impStyleName = styles_1.allVariantStyleForButton.whiteStyle;
        }
        else if (variant === "dark") {
            impStyleName = styles_1.allVariantStyleForButton.darkStyle;
        }
        else if (variant === "funny") {
            impStyleName = styles_1.allVariantStyleForButton.funnyStyle;
        }
        else if (variant === "sun") {
            impStyleName = styles_1.allVariantStyleForButton.sunStyle;
        }
        else if (variant === "ocean") {
            impStyleName = styles_1.allVariantStyleForButton.oceanStyle;
        }
        else if (variant === "default") {
            impStyleName = styles_1.allVariantStyleForButton.defaultStyle;
        }
        else {
            impStyleName = styles_1.allVariantStyleForButton.defaultStyle;
        }
        ;
        /* vyber border varianty a radiusu*/
        variant_style = border ?
            (round ? impStyleName.borderRadiusStyle : impStyleName.borderStyle) :
            (round ? impStyleName.radiusStyle : impStyleName.defStyle);
    }
    else {
        variant_style = styles_1.allVariantStyleForButton.defaultStyle.defStyle;
    }
    /*  vyber velkosti */
    if (lg || sm) {
        sizeElement = lg ? styles_1.allSizeButtonElement.largeSize : styles_1.allSizeButtonElement.smallSize;
    }
    ;
    return ({
        masterStyle: master_style_1.masterStyle,
        variant_style: variant_style,
        sizeElement: sizeElement
    });
}
//# sourceMappingURL=services.changeVariant.js.map