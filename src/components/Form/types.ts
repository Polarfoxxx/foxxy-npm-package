import { FormHTMLAttributes } from "react"
import { InputHTMLAttributes } from "react"
import { LabelHTMLAttributes } from "react";
import { CSSProperties } from "react";

/* Props pre element form */
export interface TypeFormIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode
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
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    maxLength?: number,
    required?: boolean,
    ref?: React.LegacyRef<HTMLInputElement>,
};

/* Props pre element label */
export interface TypeLabelIntrinsicAttributes extends LabelHTMLAttributes<HTMLLabelElement> {
    label?: string
};


/* typ pre style */
export type TypeStyleFromForm = {
    form: CSSProperties,
    formHeader: CSSProperties,
    formBody:CSSProperties,
    formLabel:CSSProperties,
    formInputs: CSSProperties,
}

/* Props pre sevice */
export type TypeFromFormServices = {
    variant?: "default" | "dark" | "funny"
}
