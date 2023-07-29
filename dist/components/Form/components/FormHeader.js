"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormHeader = function (_a) {
    var formName = _a.formName, formVariantStyle = _a.formVariantStyle;
    return (react_1.default.createElement("div", { className: "FormHeader", style: formVariantStyle === null || formVariantStyle === void 0 ? void 0 : formVariantStyle.formHeader }, formName));
};
exports.default = FormHeader;
//# sourceMappingURL=FormHeader.js.map