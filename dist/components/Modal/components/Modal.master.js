import React from "react";
import { visibleStyleForModal } from "../style/master.style";
import { hideStyleForModal } from "../style/master.style";
import servicesChangeVariantForModal from "../services";
const Modal = ({ variant, children, display }) => {
    /* deklarace */
    let displayStyle = hideStyleForModal;
    /* servis meniaci variantu */
    let variantStyle = servicesChangeVariantForModal.changeVariantForModal({ variant });
    /* anonimna funkcia pre zobrazovanie a zatvaranie modalu */
    (() => {
        if (display) {
            displayStyle = visibleStyleForModal;
        }
        else {
            displayStyle = hideStyleForModal;
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
