"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAndHide_right = void 0;
var master_right_style_1 = require("./master.right.style");
exports.showAndHide_right = {
    styleForOffCanvasComponent_hide: {
        styleForBox: __assign(__assign({}, master_right_style_1.styleMasterForOffCanvasComponent_right.styleForBox), { right: "-100%", transition: "1s" }),
        styleForScreen: __assign(__assign({}, master_right_style_1.styleMasterForOffCanvasComponent_right.styleForScreen), { display: "none" })
    },
    styleForOffCanvasComponent_show: {
        styleForBox: __assign(__assign({}, master_right_style_1.styleMasterForOffCanvasComponent_right.styleForBox), { right: "0px", transition: "1s" }),
        styleForScreen: __assign(__assign({}, master_right_style_1.styleMasterForOffCanvasComponent_right.styleForScreen), { display: "block" })
    }
};
//# sourceMappingURL=showAndHide.right.style.js.map