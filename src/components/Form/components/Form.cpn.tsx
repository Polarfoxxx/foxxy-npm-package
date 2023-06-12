import * as React from "react";
import { TypeFormIntrinsicAttributes } from "../types";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import servicesChangeStyleFromFrom from "../services";



const Form: React.FC<TypeFormIntrinsicAttributes> = ({
    children,
    action,
    method,
    variant,

}): JSX.Element => {

    /* servis meniaci varintu formu */
    const formVariantStyle = servicesChangeStyleFromFrom.changerStyleFromForm({ variant });

    return (
        <>
            <form
                method={method}
                action={action}
                style={formVariantStyle.form}>
                <div style={{ ...formVariantStyle.formBody }}>
                    {children}
                </div>
            </form>
        </>
    )
}

export const FormComponent = {
    Form,
    FormHeader,
    FormInputs
}


