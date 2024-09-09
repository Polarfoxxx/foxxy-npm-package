import React from "react";
import { Type_for_formHeader } from "../types";

function FormHeader({
    form_name,
    selectStyleType
}: Type_for_formHeader): JSX.Element {

    return (
        <div className={`${selectStyleType} headerForm`}>
            {form_name}
        </div>
    )
}


export default FormHeader;