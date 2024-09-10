import React from "react";
import { Type_for_formHeader } from "../types";
import "@components/global_root.css";
import "../style/form_root_style.css";

function FormHeader({
    form_name,
    selectStyleType
}: Type_for_formHeader): JSX.Element {

    return (
        <div className={`${selectStyleType} headerForm`}>
            <h3>{form_name}</h3>            
        </div>
    );
};


export default FormHeader;