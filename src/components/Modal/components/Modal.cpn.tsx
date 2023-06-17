import React from "react";
import { visibleStyleFromModal } from "../style/master.style";
import { hideStyleFromModal } from "../style/master.style";
import servicesChangeVariantFromModal from "../services";
import { CSSProperties } from "react";
import { TypeFromMasterStyle } from "../style/master.style";


type Props = {
    variant?: "default" | "white" | "ocean",
    children: JSX.Element | JSX.Element[],
    display: boolean 
};

const Modal: React.FC<Props> = ({ variant, children, display }): JSX.Element => {
    let displayStyle: TypeFromMasterStyle = hideStyleFromModal
    let variantStyle: CSSProperties = servicesChangeVariantFromModal.changeVariantfromModal({variant})


    if(display) {
        displayStyle = visibleStyleFromModal
    }else {
        displayStyle = hideStyleFromModal
    }

    return (
        <>
            <div id="modalFullBlock" style={{...displayStyle.fullScreen, ...variantStyle}}>
                <div style={{...displayStyle.formBlock}}>
                    {children}
                </div>
            </div>
        </>
    )
}


export const ModalComponent = {
    Modal
}