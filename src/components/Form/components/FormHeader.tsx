import * as React from "react";


export type Props = {
    formName?: string
} 

const FormHeader: React.FC<Props> = ({formName}): JSX.Element => {

    return (
        <>
            <div className="FormHeader">
                <p>{formName}</p>
            </div>
        </>
    )
}


export default FormHeader