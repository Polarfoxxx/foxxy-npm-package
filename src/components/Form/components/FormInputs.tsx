import * as React from "react";
import { TypeInputsIntrinsicAttributes } from "../types";
import { TypeLabelIntrinsicAttributes } from "../types";

type TypeMasterFromInputsAndLabel = TypeInputsIntrinsicAttributes & TypeLabelIntrinsicAttributes

const FormInputs: React.FC<TypeMasterFromInputsAndLabel> = ({
    defaultValue,
    disabled,
    placeholder,
    autoFocus,
    type,
    onChange,
    maxLength,
    required,
    inputRef,
    formVariantStyle,
    label

}): JSX.Element => {

    return (
        <>
            <label
                style={formVariantStyle?.formLabel}
                htmlFor="inputs">
                {label}
            </label>
            <input
                style={formVariantStyle?.formInputs}
                id="inputs"
                ref={inputRef}
                required={required}
                autoFocus={autoFocus}
                disabled={disabled}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                maxLength={maxLength}
            />
        </>
    )
}


export default FormInputs