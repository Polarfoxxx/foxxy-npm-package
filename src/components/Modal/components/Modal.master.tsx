import React from "react";
import { visibleStyleForModal } from "../style/master.style";
import { hideStyleForModal } from "../style/master.style";
import servicesChangeVariantForModal from "../services";
import { CSSProperties } from "react";
import { TypeFromMasterStyle } from "../style/master.style";
import { PropsForModalComponents } from "../types";


const Modal: React.FC<PropsForModalComponents> = ({ variant, children, display }): JSX.Element => {

    /* deklarace */
    let displayStyle: TypeFromMasterStyle = hideStyleForModal;
    /* servis meniaci variantu */
    let variantStyle: CSSProperties = servicesChangeVariantForModal.changeVariantForModal({ variant });

    /* anonimna funkcia pre zobrazovanie a zatvaranie modalu */
    (() => {
        if (display) {
            displayStyle = visibleStyleForModal
        } else {
            displayStyle = hideStyleForModal
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