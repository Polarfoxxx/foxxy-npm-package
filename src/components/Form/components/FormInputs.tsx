import * as React from "react";
import { TypeInputsIntrinsicAttributes } from "../types";
import { TypeLabelIntrinsicAttributes } from "../types";

type TypeMasterFromInputsAndLabel = TypeInputsIntrinsicAttributes & TypeLabelIntrinsicAttributes

const FormInputs: React.FC<TypeMasterFromInputsAndLabel> = ({
    value,
    disabled,
    placeholder,
    autoFocus,
    type,
    onChange,
    maxLength,
    required,
    ref,
    label

}): JSX.Element => {

    return (
        <>
            <label htmlFor="inputs">
                {label}
            </label>
            <input
                id="inputs"
                ref={ref}
                required={required}
                autoFocus={autoFocus}
                disabled={disabled}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                maxLength={maxLength}
            />
        </>
    )
}


export default FormInputs