import React from "react";
import { TypeForIntrinsicAttributes } from "../types";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import servicesChangeVariantForFrom from "../services/services.changeVariant";
import { TypeStyleForForm } from "../types";
import { allVariantForForm } from "../style";

const Form: React.FC<TypeForIntrinsicAttributes> = ({
    children,
    variant_form,
    form_name,
    ...props
}): JSX.Element => {

    const [formVariantStyle, setFormVariantStyle] = React.useState<TypeStyleForForm>(allVariantForForm.defaultStyleForForm)

    /* servis meniaci varintu formu */
    React.useEffect(() => {
        setFormVariantStyle(servicesChangeVariantForFrom.changerVariantForForm({ variant_form }))
    }, [variant_form])

    return (
        <form
            className="form"
            {...props}
            style={{ ...formVariantStyle.form }}>
            <div
                className="body"
                style={formVariantStyle.formBody}>
                {React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { formVariantStyle, form_name });
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


