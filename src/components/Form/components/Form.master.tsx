import React from "react";
import { TypeForIntrinsicAttributes } from "../types";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import servicesChangeVariantForFrom from "../services/services.changeVariant";

const Form: React.FC<TypeForIntrinsicAttributes> = ({
    children,
    variant_form,
    formName,
    ...props
}): JSX.Element => {

    /* servis meniaci varintu formu */
    const formVariantStyle = servicesChangeVariantForFrom.changerVariantForForm({ variant_form });

    return (
        <form
            className="form"
            {...props}
            style={{ ...formVariantStyle.form }}>
            <div
                className="body"
                style={formVariantStyle.formBody}>
                {React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { formVariantStyle, formName });
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


