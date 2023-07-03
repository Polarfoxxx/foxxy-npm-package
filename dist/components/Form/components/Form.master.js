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
exports.FormComponent = void 0;
var react_1 = __importDefault(require("react"));
var FormHeader_1 = __importDefault(require("./FormHeader"));
var FormInputs_1 = __importDefault(require("./FormInputs"));
var services_1 = __importDefault(require("../services/services"));
var Form = function (_a) {
    var children = _a.children, variant = _a.variant, props = __rest(_a, ["children", "variant"]);
    /* servis meniaci varintu formu */
    var formVariantStyle = services_1.default.changerStyleForForm({ variant: variant });
    return (react_1.default.createElement("form", __assign({ className: "form" }, props, { style: __assign({}, formVariantStyle.form) }),
        react_1.default.createElement("div", { className: "body", style: formVariantStyle.formBody }, react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, { formVariantStyle: formVariantStyle });
        }))));
};
exports.FormComponent = {
    Form: Form,
    FormHeader: FormHeader_1.default,
    FormInputs: FormInputs_1.default
};
//# sourceMappingURL=Form.master.js.map