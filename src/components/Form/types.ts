import { FormHTMLAttributes } from "react"
import { InputHTMLAttributes } from "react"
import { CSSProperties } from "react";

/* Props pre element form */
export interface TypeForIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children:  React.ReactElement<any>[]
    formName?: string,
    action?: string,
    method?: string,
    onSubmit?: React.FormEventHandler<HTMLFormElement>,
    variant?: "default" | "dark" | "funny" | "white"
};


/* Props pre element inputs */
export interface TypeInputsIntrinsicAttributes extends InputHTMLAttributes<HTMLInputElement> {
    formVariantStyle?: TypeStyleForForm
};

/* Props pre element label */
export type TypeLabelIntrinsicAttributes = {
    label?: string,
    formVariantStyle?: TypeStyleForForm
};


/* typ pre style */
export type TypeStyleForForm = {
    form: CSSProperties,
    formHeader: CSSProperties,
    formBody:CSSProperties,
    formLabel:CSSProperties,
    formInputs: CSSProperties,
}

/* Props pre sevice */
export type TypeForFormServices = {
    variant?: "default" | "dark" | "funny" | "white"
}
