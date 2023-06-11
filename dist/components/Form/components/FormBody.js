import * as React from "react";
const FormBody = ({ value, disabled, placeholder, autoFocus, type, maxLength, required, onChange, formVariantStyle }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { required: required, autoFocus: autoFocus, disabled: disabled, value: value, onChange: onChange, placeholder: placeholder, style: Object.assign({}, formVariantStyle.formInputs), type: type, maxLength: maxLength })));
};
export default FormBody;
