"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.masterStyleOffCanvas = exports.allVariantOffCanvas = void 0;
/* export varant style */
var defaultVarient_style_1 = require("./variant.style/defaultVarient.style");
var darkVariant_style_1 = require("./variant.style/darkVariant.style");
var whiteVariant_style_1 = require("./variant.style/whiteVariant.style");
exports.allVariantOffCanvas = {
    defaultVariantForOffCanvas: defaultVarient_style_1.defaultVariantForOffCanvas,
    darkVariantForOffCanvas: darkVariant_style_1.darkVariantForOffCanvas,
    whiteVariantForOffCanvas: whiteVariant_style_1.whiteVariantForOffCanvas
};
/* export master style */
var mastrer_style_1 = require("./master.style/mastrer.style");
var showAndHide_style_1 = require("./master.style/showAndHide.style");
var header_style_1 = require("./master.style/header.style");
exports.masterStyleOffCanvas = {
    styleMasterForOffCanvasComponent: mastrer_style_1.styleMasterForOffCanvasComponent,
    styleForOffCanvasComponent_hide: showAndHide_style_1.styleForOffCanvasComponent_hide,
    styleForOffCanvasComponent_show: showAndHide_style_1.styleForOffCanvasComponent_show,
    styleForHeaderOffCanvas: header_style_1.styleForHeaderOffCanvas
};
//# sourceMappingURL=index.js.map