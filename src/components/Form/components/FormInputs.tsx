import * as React from "react";

type TypeMasterFromInputsAndLabel = TypeInputsIntrinsicAttributes & TypeLabelIntrinsicAttributes

const FormInputs: React.FC<TypeMasterFromInputsAndLabel> = ({
    formVariantStyle,
    label,
    ...props

}): JSX.Element => {

    return (
        <div>
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
        </div>
    )
}


export default FormInputs