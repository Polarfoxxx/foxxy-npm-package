"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var master_style_1 = require("../styles/size.style/master.style");
var styles_1 = require("../styles");
var servicesChangeVariantForButtons = {
    changeVariantForButtons: changeVariantForButtons
};
exports.default = servicesChangeVariantForButtons;
function changeVariantForButtons(_a) {
    var variant_btn = _a.variant_btn, border = _a.border, round = _a.round, lg = _a.lg, sm = _a.sm;
    /* deklaracia */
    var sizeElement = {};
    var variant_style = styles_1.allVariantStyleForButton.defaultStyle.defStyle;
    var impStyleName = styles_1.allVariantStyleForButton.defaultStyle;
    /* farebna varianta */
    if (variant_btn === "white") {
        impStyleName = styles_1.allVariantStyleForButton.whiteStyle;
    }
    else if (variant_btn === "dark") {
        impStyleName = styles_1.allVariantStyleForButton.darkStyle;
    }
    else if (variant_btn === "funny") {
        impStyleName = styles_1.allVariantStyleForButton.funnyStyle;
    }
    else if (variant_btn === "sun") {
        impStyleName = styles_1.allVariantStyleForButton.sunStyle;
    }
    else if (variant_btn === "ocean") {
        impStyleName = styles_1.allVariantStyleForButton.oceanStyle;
    }
    else if (variant_btn === "default") {
        impStyleName = styles_1.allVariantStyleForButton.defaultStyle;
    }
    else if (variant_btn === undefined) {
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