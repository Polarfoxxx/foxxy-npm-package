import * as React from "react";
import { TypeStyleForForm } from "../types";

export type Props = {
    formName?: string,
    formVariantStyle?: TypeStyleForForm
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