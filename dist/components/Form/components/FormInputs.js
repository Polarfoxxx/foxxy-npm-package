import * as React from "react";
const FormInputs = ({ defaultValue, disabled, placeholder, autoFocus, type, onChange, maxLength, required, inputRef, formVariantStyle, label }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { style: formVariantStyle === null || formVariantStyle === void 0 ? void 0 : formVariantStyle.formLabel, htmlFor: "inputs" }, label),
        React.createElement("input", { style: formVariantStyle === null || formVariantStyle === void 0 ? void 0 : formVariantStyle.formInputs, id: "inputs", ref: inputRef, required: required, autoFocus: autoFocus, disabled: disabled, defaultValue: defaultValue, onChange: onChange, placeholder: placeholder, type: type, maxLength: maxLength })));
};
export default FormInputs;
