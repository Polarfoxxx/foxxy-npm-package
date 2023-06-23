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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormComponent = void 0;
var React = __importStar(require("react"));
var FormHeader_1 = __importDefault(require("./FormHeader"));
var FormInputs_1 = __importDefault(require("./FormInputs"));
var services_1 = __importDefault(require("../services"));
var master_style_1 = require("../style/master.style");
var Form = function (_a) {
    var children = _a.children, action = _a.action, method = _a.method, variant = _a.variant;
    /* servis meniaci varintu formu */
    var formVariantStyle = services_1.default.changerStyleForForm({ variant: variant });
    return (React.createElement("form", { className: "form", method: method, action: action, style: __assign(__assign({}, formVariantStyle.form), master_style_1.masterStyleForForm) },
        React.createElement("div", { className: "body", style: formVariantStyle.formBody }, React.Children.map(children, function (child) {
            return React.cloneElement(child, { formVariantStyle: formVariantStyle });
        }))));
};
exports.FormComponent = {
    Form: Form,
    FormHeader: FormHeader_1.default,
    FormInputs: FormInputs_1.default
};
//# sourceMappingURL=Form.master.js.map