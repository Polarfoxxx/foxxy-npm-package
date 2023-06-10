import * as React from "react";
import { InputHTMLAttributes } from "react";
import { FormHTMLAttributes } from "react"
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { formStyle } from "../style/default.style";

export interface TypeFormIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactElement<HTMLButtonElement> | React.ReactElement<HTMLButtonElement>[],
    formName?: string,
    action?: string,
    onSubmit?: React.FormEventHandler<HTMLFormElement>
};
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

type Props = TypeFormIntrinsicAttributes & TypeInputsIntrinsicAttributes
const Form: React.FC<Props> = ({
    children,
    formName,
    action,

    value,
    disabled,
    placeholder,
    autoFocus,
    type,
    maxLength,
    required,
    onChange,
}): JSX.Element => {

    return (
        <>
            <form

                action=""
                style={formStyle.form}>
                <div style={{ ...formStyle.formDivs, ...formStyle.formHeader }}>
                    <FormHeader formName={formName} />
                </div>
                <div style={{ ...formStyle.formDivs, ...formStyle.formInputsBlock }}>
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
                <div style={{ ...formStyle.formDivs, ...formStyle.formFooter }}>
                    {children}
                </div>
            </form>
        </>
    )
}


export default Form