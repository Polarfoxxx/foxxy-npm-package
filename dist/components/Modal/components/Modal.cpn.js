import React from "react";
import { visibleStyleFromModal } from "../style/master.style";
import { hideStyleFromModal } from "../style/master.style";
import servicesChangeVariantFromModal from "../services";
const Modal = ({ variant, children, display }) => {
    /* deklarace */
    let displayStyle = hideStyleFromModal;
    /* servis meniaci variantu */
    let variantStyle = servicesChangeVariantFromModal.changeVariantfromModal({ variant });
    /* anonimna funkcia pre zobrazovanie a zatvaranie modalu */
    (() => {
        if (display) {
            displayStyle = visibleStyleFromModal;
        }
        else {
            displayStyle = hideStyleFromModal;
        }
        ;
    })();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "modalFullBlock", style: Object.assign(Object.assign({}, displayStyle.fullScreen), variantStyle) },
            React.createElement("div", { style: Object.assign({}, displayStyle.formBlock) }, children))));
};
export const ModalComponent = {
    Modal
};
