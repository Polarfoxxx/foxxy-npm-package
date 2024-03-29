import * as React from "react";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import servicesChangeStyleFromFrom from "../services";
import { masterStyleFromForm } from "../style/master.style";
const Form = ({ children, action, method, variant, }) => {
    /* servis meniaci varintu formu */
    const formVariantStyle = servicesChangeStyleFromFrom.changerStyleFromForm({ variant });
    return (React.createElement("form", { className: "form", method: method, action: action, style: Object.assign(Object.assign({}, formVariantStyle.form), masterStyleFromForm) },
        React.createElement("div", { className: "body", style: formVariantStyle.formBody }, React.Children.map(children, (child) => {
            return React.cloneElement(child, { formVariantStyle });
        }))));
};
export const FormComponent = {
    Form,
    FormHeader,
    FormInputs
};
