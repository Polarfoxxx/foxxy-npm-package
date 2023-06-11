import * as React from "react";
import { TypeFromInputsComponents } from "../types";


const FormBody: React.FC<TypeFromInputsComponents> = ({
    value,
    disabled,
    placeholder,
    autoFocus,
    type,
    maxLength,
    required,
    onChange,
    formVariantStyle
}): JSX.Element => {

    return (
        <>
            <input
                required={required}
                autoFocus={autoFocus}
                disabled={disabled}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{ ...formVariantStyle.formInputs }}
                type={type}
                maxLength={maxLength}
            />
        </>
    )
}


export default FormBody