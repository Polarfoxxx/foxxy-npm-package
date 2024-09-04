import React from "react";
import { Type__for_InputsAndLabel } from "../types";

function FormInputs({
    selectStyleType,
    label_name_form,
    ...props
}: Type__for_InputsAndLabel): JSX.Element {

    return (
        <div>
            <label
                className={`${selectStyleType} formLabel`}
                htmlFor="inputs"
                {...props}>
                {label_name_form}
            </label>
            <input
                {...props}
                className={`${selectStyleType} formInput`}
                id="inputs"/>
        </div>
    )
}


export default FormInputs