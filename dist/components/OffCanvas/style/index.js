"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inside_componentStyleOffCanvas = exports.master_ShowStyleOffCanvas = exports.allVariantOffCanvas = void 0;
/* export varant style */
var defaultVarient_style_1 = require("./variant.style/defaultVarient.style");
var darkVariant_style_1 = require("./variant.style/darkVariant.style");
var whiteVariant_style_1 = require("./variant.style/whiteVariant.style");
exports.allVariantOffCanvas = {
    defaultVariantForOffCanvas: defaultVarient_style_1.defaultVariantForOffCanvas,
    darkVariantForOffCanvas: darkVariant_style_1.darkVariantForOffCanvas,
    whiteVariantForOffCanvas: whiteVariant_style_1.whiteVariantForOffCanvas
};
/* export position and master style */
var showAndHide_left_style_1 = require("./master.style/position_Left/showAndHide.left.style");
var showAndHide_top_style_1 = require("./master.style/position_top/showAndHide.top.style");
var showAndHide_right_style_1 = require("./master.style/position_right/showAndHide.right.style");
exports.master_ShowStyleOffCanvas = {
    showAndHide_Left: showAndHide_left_style_1.showAndHide_Left,
    showAndHide_top: showAndHide_top_style_1.showAndHide_top,
    showAndHide_right: showAndHide_right_style_1.showAndHide_right,
};
/* export components style */
var buttonBox_style_1 = require("./master.style/buttonBox.style");
var header_style_1 = require("./master.style/header.style");
exports.inside_componentStyleOffCanvas = {
    styleForButtonBoxOffCanvas: buttonBox_style_1.styleForButtonBoxOffCanvas,
    styleForHeaderOffCanvas: header_style_1.styleForHeaderOffCanvas
};
//# sourceMappingURL=index.js.map