import { FormHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";
import { LabelHTMLAttributes } from "react";
import { CSSProperties } from "react";
export interface TypeFormIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode;
    formName?: string;
    action?: string;
    method?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    variant?: "default" | "dark" | "funny";
}
export interface TypeInputsIntrinsicAttributes extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    type: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    maxLength?: number;
    required?: boolean;
    ref?: React.LegacyRef<HTMLInputElement>;
}
export interface TypeLabelIntrinsicAttributes extends LabelHTMLAttributes<HTMLLabelElement> {
    label?: string;
}
export type TypeStyleFromForm = {
    form: CSSProperties;
    formHeader: CSSProperties;
    formBody: CSSProperties;
    formLabel: CSSProperties;
    formInputs: CSSProperties;
};
export type TypeFromFormServices = {
    variant?: "default" | "dark" | "funny";
};
