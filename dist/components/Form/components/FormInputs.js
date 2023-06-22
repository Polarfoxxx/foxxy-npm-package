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
import * as React from "react";
const FormInputs = (_a) => {
    var { formVariantStyle, label } = _a, props = __rest(_a, ["formVariantStyle", "label"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { style: formVariantStyle === null || formVariantStyle === void 0 ? void 0 : formVariantStyle.formLabel, htmlFor: "inputs" }, label),
        React.createElement("input", Object.assign({}, props, { style: formVariantStyle === null || formVariantStyle === void 0 ? void 0 : formVariantStyle.formInputs, id: "inputs" }))));
};
export default FormInputs;
