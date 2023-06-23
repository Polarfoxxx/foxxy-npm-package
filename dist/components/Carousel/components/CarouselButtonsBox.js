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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CarouselButtons_1 = __importDefault(require("./CarouselButtons"));
var buttonBox_style_1 = require("../style/buttonBox.style");
var CarouselButonsBox = function (_a) {
    var onClick = _a.onClick, variantFromCarousel = _a.variantFromCarousel;
    return (react_1.default.createElement("div", { style: __assign({}, buttonBox_style_1.styleForButtonBox) },
        react_1.default.createElement(CarouselButtons_1.default, { variantFromCarousel: variantFromCarousel, className: "left", onClick: onClick, position: "<" }),
        react_1.default.createElement(CarouselButtons_1.default, { variantFromCarousel: variantFromCarousel, className: "right", onClick: onClick, position: ">" })));
};
exports.default = CarouselButonsBox;
//# sourceMappingURL=CarouselButtonsBox.js.map