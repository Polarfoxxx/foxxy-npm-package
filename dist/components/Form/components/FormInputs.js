import * as React from "react";
const FormInputs = ({ value, disabled, placeholder, autoFocus, type, onChange, maxLength, required, ref, label, formVariantStyle }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { style: formVariantStyle === null || formVariantStyle === void 0 ? void 0 : formVariantStyle.formLabel, htmlFor: "inputs" }, label),
        React.createElement("input", { style: formVariantStyle === null || formVariantStyle === void 0 ? void 0 : formVariantStyle.formInputs, id: "inputs", ref: ref, required: required, autoFocus: autoFocus, disabled: disabled, value: value, onChange: onChange, placeholder: placeholder, type: type, maxLength: maxLength })));
};
export default FormInputs;
