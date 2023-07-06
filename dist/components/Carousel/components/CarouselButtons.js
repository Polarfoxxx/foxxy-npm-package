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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_1 = require("../style");
var CarouselButton = function (_a) {
    var variantFromCarousel = _a.variantFromCarousel, position = _a.position, className = _a.className, props = __rest(_a, ["variantFromCarousel", "position", "className"]);
    return (react_1.default.createElement("button", __assign({}, props, { className: className, style: __assign(__assign({}, style_1.allStyleComponentsCarousel.styleCarouselButtons), variantFromCarousel === null || variantFromCarousel === void 0 ? void 0 : variantFromCarousel.varButtons) }), position));
};
exports.default = CarouselButton;
//# sourceMappingURL=CarouselButtons.js.map