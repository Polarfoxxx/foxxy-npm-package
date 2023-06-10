import * as React from "react";
import { InputHTMLAttributes } from "react";
import { FormHTMLAttributes } from "react";
export interface TypeFormIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactElement<HTMLButtonElement> | React.ReactElement<HTMLButtonElement>[];
    formName?: string;
    action?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
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
type Props = TypeFormIntrinsicAttributes & TypeInputsIntrinsicAttributes;
declare const Form: React.FC<Props>;
export default Form;
