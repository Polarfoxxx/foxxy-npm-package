import React from "react";
import { TypeForIntrinsicAttributes } from "../types";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import servicesChangeVariantForFrom from "../services/services.changeVariant";
import { allVariantForForm } from "../style";

const Form: React.FC<TypeForIntrinsicAttributes> = ({
    children,
    variant,
    ...props
}): JSX.Element => {

    /* servis meniaci varintu formu */
    const formVariantStyle = servicesChangeVariantForFrom.changerVariantForForm({ variant }) || allVariantForForm.defaultStyleForForm;

    return (
        <form
            className="form"
            {...props}
            style={{ ...formVariantStyle.form }}>
            <div
                className="body"
                style={formVariantStyle.formBody}>
                {React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { formVariantStyle });
                })}
            </div>
        </form>
    )
}

export const FormComponent = {
    Form,
    FormHeader,
    FormInputs
}


