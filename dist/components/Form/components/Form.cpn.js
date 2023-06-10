import * as React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { formStyle } from "../style/default.style";
;
;
const Form = ({ children, formName, action, value, disabled, placeholder, autoFocus, type, maxLength, required, onChange, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { action: "", style: formStyle.form },
            React.createElement("div", { style: Object.assign(Object.assign({}, formStyle.formDivs), formStyle.formHeader) },
                React.createElement(FormHeader, { formName: formName })),
            React.createElement("div", { style: Object.assign(Object.assign({}, formStyle.formDivs), formStyle.formInputsBlock) },
                React.createElement(FormBody, { value: value, disabled: disabled, placeholder: placeholder, autoFocus: autoFocus, type: type, maxLength: maxLength, required: required, onChange: onChange })),
            React.createElement("div", { style: Object.assign(Object.assign({}, formStyle.formDivs), formStyle.formFooter) }, children))));
};
export default Form;
