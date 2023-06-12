import * as React from "react";
const FormInputs = ({ value, disabled, placeholder, autoFocus, type, onChange, maxLength, required, ref, label }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: "inputs" }, label),
        React.createElement("input", { id: "inputs", ref: ref, required: required, autoFocus: autoFocus, disabled: disabled, value: value, onChange: onChange, placeholder: placeholder, type: type, maxLength: maxLength })));
};
export default FormInputs;
