import * as React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import servicesChangeStyleFromFrom from "../services";
const Form = ({ children, formName, action, method, variant, 
/* pre inputs */
value, disabled, placeholder, autoFocus, type, maxLength, required, onChange, }) => {
    /* servis meniaci varintu formu */
    const formVariantStyle = servicesChangeStyleFromFrom.changerStyleFromForm({ variant });
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { method: method, action: action, style: formVariantStyle.form },
            React.createElement("div", { style: Object.assign(Object.assign({}, formVariantStyle.formDivs), formVariantStyle.formHeader) },
                React.createElement(FormHeader, { formName: formName })),
            React.createElement("div", { style: Object.assign(Object.assign({}, formVariantStyle.formDivs), formVariantStyle.formInputsBlock) },
                React.createElement(FormBody, { value: value, disabled: disabled, placeholder: placeholder, autoFocus: autoFocus, type: type, maxLength: maxLength, required: required, onChange: onChange, formVariantStyle: formVariantStyle })),
            React.createElement("div", { style: Object.assign(Object.assign({}, formVariantStyle.formDivs), formVariantStyle.formFooter) }, children))));
};
export default Form;
