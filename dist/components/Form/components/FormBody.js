import * as React from "react";
import { formStyle } from "../style/default.style";
const FormBody = ({ value, disabled, placeholder, autoFocus, type, maxLength, required, onChange, }) => {
    disabled ? disabled : undefined;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { disabled: disabled, value: value, onChange: onChange, placeholder: placeholder, style: Object.assign({}, formStyle.formInputs), type: type, maxLength: maxLength })));
};
export default FormBody;
