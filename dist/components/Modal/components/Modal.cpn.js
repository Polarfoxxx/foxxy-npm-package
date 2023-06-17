import React from "react";
import { visibleStyleFromModal } from "../style/master.style";
import { hideStyleFromModal } from "../style/master.style";
const Modal = ({ variant, children, display }) => {
    let displayStyle = hideStyleFromModal;
    if (display) {
        displayStyle = visibleStyleFromModal;
    }
    else {
        displayStyle = hideStyleFromModal;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "modalFullBlock", style: Object.assign({}, displayStyle.fullScreen) },
            React.createElement("div", { style: Object.assign({}, displayStyle.formBlock) }, children))));
};
export const ModalComponent = {
    Modal
};
