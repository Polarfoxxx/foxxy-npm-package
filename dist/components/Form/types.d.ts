import { FormHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";
import { CSSProperties } from "react";
export interface TypeForIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children: JSX.Element | JSX.Element[];
    formName?: string;
    action?: string;
    method?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    variant?: "default" | "dark" | "funny" | "white";
}
export interface TypeInputsIntrinsicAttributes extends InputHTMLAttributes<HTMLInputElement> {
    formVariantStyle?: TypeStyleForForm;
}
export type TypeLabelIntrinsicAttributes = {
    label?: string;
    formVariantStyle?: TypeStyleForForm;
};
export type TypeStyleForForm = {
    form: CSSProperties;
    formHeader: CSSProperties;
    formBody: CSSProperties;
    formLabel: CSSProperties;
    formInputs: CSSProperties;
};
export type TypeForFormServices = {
    variant?: "default" | "dark" | "funny" | "white";
};
