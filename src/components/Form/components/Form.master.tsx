import * as React from "react";
import { TypeFormIntrinsicAttributes } from "../types";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import servicesChangeStyleFromFrom from "../services";
import { masterStyleFromForm } from "../style/master.style";

const Form: React.FC<TypeFormIntrinsicAttributes> = ({
    children,
    action,
    method,
    variant,

}): JSX.Element => {

    /* servis meniaci varintu formu */
    const formVariantStyle = servicesChangeStyleFromFrom.changerStyleFromForm({ variant });

    return (
            <form
                className="form"
                method={method}
                action={action}
                style={{...formVariantStyle.form, ...masterStyleFromForm}}>
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


