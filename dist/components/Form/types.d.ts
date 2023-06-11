import { FormHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";
import { CSSProperties } from "react";
export interface TypeFormIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactElement<HTMLButtonElement> | React.ReactElement<HTMLButtonElement>[];
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
    maxLength?: number;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export type TypeFromInputsComponents = {
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    type: string;
    maxLength?: number;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    formVariantStyle: TypeStyleFromForm;
};
export type TypeStyleFromForm = {
    form: CSSProperties;
    formDivs: CSSProperties;
    formHeader: CSSProperties;
    formInputsBlock: CSSProperties;
    formFooter: CSSProperties;
    formInputs: CSSProperties;
};
export type TypeFromFormServices = {
    variant?: "default" | "dark" | "funny";
};
