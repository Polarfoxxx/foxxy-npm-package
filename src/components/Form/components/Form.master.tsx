import React from "react";
import { TypeForIntrinsicAttributes } from "../types";
import servicesChangeVariantForFrom from "../services/services.changeVariant";
import { TypeStyleForForm } from "../types";

function Form({
    children,
    variant_form,
    form_name,
    ...props
}: TypeForIntrinsicAttributes): JSX.Element {

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
                {
                    React.Children.map(children, (child: React.ReactElement<any>) => {
                        return React.cloneElement(child, { formVariantStyle, form_name });
                    })
                }
            </div>
        </form>
    )
}

export default Form;
