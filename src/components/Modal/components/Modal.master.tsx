import React from "react";
import { visibleStyleFromModal } from "../style/master.style";
import { hideStyleFromModal } from "../style/master.style";
import servicesChangeVariantFromModal from "../services";
import { CSSProperties } from "react";
import { TypeFromMasterStyle } from "../style/master.style";
import { PropsFromModalComponents } from "../types";


const Modal: React.FC<PropsFromModalComponents> = ({ variant, children, display }): JSX.Element => {

    /* deklarace */
    let displayStyle: TypeFromMasterStyle = hideStyleFromModal;
    /* servis meniaci variantu */
    let variantStyle: CSSProperties = servicesChangeVariantFromModal.changeVariantfromModal({ variant });

    /* anonimna funkcia pre zobrazovanie a zatvaranie modalu */
    (() => {
        if (display) {
            displayStyle = visibleStyleFromModal
        } else {
            displayStyle = hideStyleFromModal
        };
    })();


    return (
        <>
            <div id="modalFullBlock" style={{ ...displayStyle.fullScreen, ...variantStyle }}>
                <div style={{ ...displayStyle.formBlock }}>
                    {children}
                </div>
            </div>
        </>
    )
};


export const ModalComponent = {
    Modal
};