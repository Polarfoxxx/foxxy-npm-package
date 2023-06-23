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
var carouselBox_style_1 = require("../style/carouselBox.style");
var CarouselBox = function (_a) {
    var children = _a.children, index = _a.index;
    var movement = {};
    /* pocet obsujucich deti */
    var childrenCount = react_1.default.Children.count(children);
    var boxLength = {
        width: "".concat(childrenCount * 60, "vw")
    };
    /* pohyb boxxu */
    movement = {
        right: "".concat(index * 60, "vw"),
    };
    return (react_1.default.createElement("div", { style: __assign(__assign(__assign({}, carouselBox_style_1.carouselBoxStyle), boxLength), movement) }, children));
};
exports.default = CarouselBox;
//# sourceMappingURL=CarouselBox.js.map