import * as React from "react";
import { TypeFormIntrinsicAttributes } from "../types";
import { TypeInputsIntrinsicAttributes } from "../types";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { CSSProperties } from "react";
import servicesChangeStyleFromFrom from "../services";





/* spojenie doch roznych typov pre Form.. */
type MasterAttributesFromFormAndInputs = TypeFormIntrinsicAttributes & TypeInputsIntrinsicAttributes

const Form: React.FC<MasterAttributesFromFormAndInputs> = ({
    children,
    formName,
    action,
    method,
    variant,
    /* pre inputs */
    value,
    disabled,
    placeholder,
    autoFocus,
    type,
    maxLength,
    required,
    onChange,
}): JSX.Element => {

    /* servis meniaci varintu formu */
    const formVariantStyle = servicesChangeStyleFromFrom.changerStyleFromForm({ variant });

    return (
        <>
            <form
                method={method}
                action={action}
                style={formVariantStyle.form}>
                <div style={{ ...formVariantStyle.formDivs, ...formVariantStyle.formHeader }}>
                    <FormHeader
                        formName={formName} />
                </div>
                <div style={{ ...formVariantStyle.formDivs, ...formVariantStyle.formInputsBlock }}>
                    <FormBody
                        value={value}
                        disabled={disabled}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        type={type}
                        maxLength={maxLength}
                        required={required}
                        onChange={onChange}
                        formVariantStyle={formVariantStyle}
                    />
                </div>
                <div style={{ ...formVariantStyle.formDivs, ...formVariantStyle.formFooter }}>
                    {children}
                </div>
            </form>
        </>
    )
}


export default Form