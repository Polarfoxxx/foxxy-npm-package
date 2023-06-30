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
var style_1 = require("../style");
var OffCanvasBody = function (_a) {
    var children = _a.children, variant_Style = _a.variant_Style;
    return (react_1.default.createElement("div", { style: __assign(__assign({}, style_1.inside_componentStyleOffCanvas.styleForBodyOffCanvas), variant_Style.styleBody) }, children));
};
exports.default = OffCanvasBody;
//# sourceMappingURL=OffCanvasBody.js.map