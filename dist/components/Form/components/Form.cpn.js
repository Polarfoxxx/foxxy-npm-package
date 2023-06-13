import * as React from "react";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import servicesChangeStyleFromFrom from "../services";
const Form = ({ children, action, method, variant, }) => {
    /* servis meniaci varintu formu */
    const formVariantStyle = servicesChangeStyleFromFrom.changerStyleFromForm({ variant });
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { method: method, action: action, style: formVariantStyle.form },
            React.createElement("div", { style: formVariantStyle.formBody }, React.Children.map(children, (child) => {
                return React.cloneElement(child, { formVariantStyle });
            })))));
};
export const FormComponent = {
    Form,
    FormHeader,
    FormInputs
};
