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
    var text = _a.text, variant_btn = _a.variant_btn, border = _a.border, round = _a.round, lg = _a.lg, sm = _a.sm, props = __rest(_a, ["text", "variant_btn", "border", "round", "lg", "sm"]);
    var _b = react_1.default.useState({
        variant_style: {},
        masterStyle: {},
        sizeElement: {}
    }), varian_Button = _b[0], setVarian_Button = _b[1];
    /* servis pre variantu */
    react_1.default.useEffect(function () {
        setVarian_Button(services_changeVariant_1.default.changeVariantForButtons({ variant_btn: variant_btn, border: border, round: round, lg: lg, sm: sm }));
    }, [variant_btn, border, round, lg, sm,]);
    return (react_1.default.createElement("button", __assign({}, props, { style: __assign(__assign(__assign({}, varian_Button.masterStyle), varian_Button.variant_style), varian_Button.sizeElement) }), text.length > 9 ? "err" : text));
};
exports.ButtonComponent = {
    Button: Button,
    ButtonBox: ButtonsBox_1.default
};
//# sourceMappingURL=Button.master.js.map