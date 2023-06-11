import { FormHTMLAttributes } from "react"
import { InputHTMLAttributes } from "react"
import { CSSProperties } from "react";

/* Props pre element form */
export interface TypeFormIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactElement<HTMLButtonElement> | React.ReactElement<HTMLButtonElement>[],
    formName?: string,
    action?: string,
    method?: string,
    onSubmit?: React.FormEventHandler<HTMLFormElement>,
    variant?: "default" | "dark" | "funny"
};
/* Props pre element inputs */
export interface TypeInputsIntrinsicAttributes extends InputHTMLAttributes<HTMLInputElement> {
    value?: string,
    disabled?: boolean,
    placeholder?: string,
    autoFocus?: boolean,
    type: string,
    maxLength?: number,
    required?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
};

/* Props vchadzajuci do elementu inputs  */
export type TypeFromInputsComponents = {
    value?: string,
    disabled?: boolean,
    placeholder?: string,
    autoFocus?: boolean,
    type: string,
    maxLength?: number,
    required?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    formVariantStyle: TypeStyleFromForm
};

/* typ pre style */
export type TypeStyleFromForm = {
    form: CSSProperties,
    formDivs: CSSProperties,
    formHeader: CSSProperties,
    formInputsBlock: CSSProperties,
    formFooter: CSSProperties,
    formInputs: CSSProperties,
}

/* Props pre sevice */
export type TypeFromFormServices = {
    variant?: "default" | "dark" | "funny"
}
