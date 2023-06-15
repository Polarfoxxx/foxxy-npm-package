import React from "react";
import { masterStyleFromModal } from "../style/master.style";
const Modal = ({ variant, children }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: Object.assign({}, masterStyleFromModal.fullScreen) },
            React.createElement("div", { style: Object.assign({}, masterStyleFromModal.formBlock) }, children))));
};
export const ModalComponent = {
    Modal
};
