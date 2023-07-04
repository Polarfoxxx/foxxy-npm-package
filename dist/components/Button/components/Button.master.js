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
exports.ButtonComponent = void 0;
var react_1 = __importDefault(require("react"));
var services_changeVariant_1 = __importDefault(require("../services/services.changeVariant"));
var ButtonsBox_1 = __importDefault(require("./ButtonsBox"));
var Button = function (_a) {
    var text = _a.text, variant = _a.variant, border = _a.border, round = _a.round, lg = _a.lg, sm = _a.sm, props = __rest(_a, ["text", "variant", "border", "round", "lg", "sm"]);
    /* servis pre variantu */
    var _b = services_changeVariant_1.default.changeVariantForButtons({ variant: variant, border: border, round: round, lg: lg, sm: sm }), variant_style = _b.variant_style, defStyle = _b.defStyle, sizeElement = _b.sizeElement;
    return (react_1.default.createElement("button", __assign({}, props, { style: __assign(__assign(__assign({}, variant_style), defStyle), sizeElement) }), text));
};
exports.ButtonComponent = {
    Button: Button,
    ButtonBox: ButtonsBox_1.default
};
//# sourceMappingURL=Button.master.js.map