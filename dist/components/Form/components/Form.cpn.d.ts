import * as React from "react";
import { FormHTMLAttributes } from "react";
export interface TypeFormIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    submit?: boolean;
    children?: React.ReactNode;
    formName?: string;
}
declare const Form: React.FC<TypeFormIntrinsicAttributes>;
export default Form;
