import * as React from "react";
import { TypeStyleFromForm } from "../types";

export type Props = {
    formName?: string,
    formVariantStyle?: TypeStyleFromForm
} 

const FormHeader: React.FC<Props> = ({formName, formVariantStyle}): JSX.Element => {

    return (
        <>
            <div className="FormHeader" style={formVariantStyle?.formHeader}>
                {formName}
            </div>
        </>
    )
}


export default FormHeader