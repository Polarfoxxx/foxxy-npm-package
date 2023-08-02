import React from "react";
import { TypeForFormHeader } from "../types";

const FormHeader: React.FC<TypeForFormHeader> = ({ form_name, formVariantStyle }): JSX.Element => {

    return (
        <div className="FormHeader" style={formVariantStyle?.formHeader}>
            {form_name}
        </div>
    )
}


export default FormHeader