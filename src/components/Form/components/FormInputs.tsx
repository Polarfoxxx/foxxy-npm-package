import * as React from "react";
import { TypeInputsIntrinsicAttributes } from "../types";
import { TypeLabelIntrinsicAttributes } from "../types";

type TypeMasterFromInputsAndLabel = TypeInputsIntrinsicAttributes & TypeLabelIntrinsicAttributes

const FormInputs: React.FC<TypeMasterFromInputsAndLabel> = ({
    formVariantStyle,
    label,
    ...props

}): JSX.Element => {

    return (
        <>
            <label
                style={formVariantStyle?.formLabel}
                htmlFor="inputs">
                {label}
            </label>
            <input
                {...props}
                style={formVariantStyle?.formInputs}
                id="inputs"
            />
        </>
    )
}


export default FormInputs