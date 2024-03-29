import { FormHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";
import { CSSProperties } from "react";
export interface TypeForIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children: JSX.Element | JSX.Element[];
    form_name?: string;
    variant_form?: "default" | "dark" | "funny" | "white";
}
export type TypeForFormHeader = {
    formVariantStyle?: TypeStyleForForm;
    form_name?: string;
};
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
    variant_form?: "default" | "dark" | "funny" | "white";
};
