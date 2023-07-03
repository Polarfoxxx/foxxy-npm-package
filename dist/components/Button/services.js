"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var master_style_1 = require("./styles/master.style");
var lg_style_1 = require("./styles/lg.style");
var small_style_1 = require("./styles/small.style");
var default_styles_1 = require("./styles/default.styles");
var white_style_1 = require("./styles/white.style");
var dark_style_1 = require("./styles/dark.style");
var funny_style_1 = require("./styles/funny.style");
var sunn_style_1 = require("./styles/sunn.style");
var ocean_style_1 = require("./styles/ocean.style");
var servicesChangeStyleForButtons = {
    changerStyleForButton: changerStyleForButton
};
exports.default = servicesChangeStyleForButtons;
function changerStyleForButton(_a) {
    var variant = _a.variant, border = _a.border, round = _a.round, lg = _a.lg, sm = _a.sm;
    /* deklaracia */
    var sizeElement = {};
    var variant_style = {};
    var impStyleName = default_styles_1.defaultStyle;
    /* varebna varianta */
    if (variant) {
        if (variant === "white") {
            impStyleName = white_style_1.whiteStyle;
        }
        else if (variant === "dark") {
            impStyleName = dark_style_1.darkStyle;
        }
        else if (variant === "funny") {
            impStyleName = funny_style_1.funnyStyle;
        }
        else if (variant === "sun") {
            impStyleName = sunn_style_1.sunStyle;
        }
        else if (variant === "ocean") {
            impStyleName = ocean_style_1.oceanStyle;
        }
        ;
        /* vyber border varianty */
        variant_style = border ?
            (round ? impStyleName.borderRadiusStyle : impStyleName.borderStyle) :
            (round ? impStyleName.radiusStyle : impStyleName.defStyle);
    }
    else {
        variant_style = default_styles_1.defaultStyle.defStyle;
    }
    /*  vyber velkosti */
    if (lg || sm) {
        sizeElement = lg ? lg_style_1.largeSize : small_style_1.smallSize;
    }
    ;
    return ({
        defStyle: master_style_1.defStyle,
        variant_style: variant_style,
        sizeElement: sizeElement
    });
}
//# sourceMappingURL=services.js.map