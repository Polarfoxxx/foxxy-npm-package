import React from "react";
import { TypeForFormHeader } from "../types";

const FormHeader: React.FC<TypeForFormHeader> = ({ formName, formVariantStyle }): JSX.Element => {

    return (
        <div className="FormHeader" style={formVariantStyle?.formHeader}>
            {formName}
        </div>
    )
}


export default FormHeader