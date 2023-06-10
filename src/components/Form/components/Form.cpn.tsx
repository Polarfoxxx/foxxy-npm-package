import * as React from "react";
import { TypeFormIntrinsicAttributes } from "../types";
import { TypeInputsIntrinsicAttributes } from "../types";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { CSSProperties } from "react";
import { TypeStyleFromForm } from "../types";

import { defaultStyleFromForm } from "../style/default.style";
import { darkStyleFromForm } from "../style/dark.style";
import { funnyStyleFromForm } from "../style/funny.style";



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

    /* anonymma funkcia meniaca variantu */
let formVariantStyle: TypeStyleFromForm = defaultStyleFromForm


    (() => {
        if (variant) {
            if (variant === "dark") {
                formVariantStyle = darkStyleFromForm
            } else if (variant === "funny") {
                formVariantStyle = funnyStyleFromForm
            }else { formVariantStyle = defaultStyleFromForm}
        }
    })();



    return (
        <>
            <form
                method={method}
                action={action}
                style={defaultStyleFromForm.form}>
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