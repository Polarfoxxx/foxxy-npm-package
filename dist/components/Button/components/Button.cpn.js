import * as React from "react";
import servicesChangeStyleFromButtons from "../services";
import ButtonBox from "./ButtonsBox";
const Button = ({ onClick, onDoubleClick, onMouseEnter, onMouseLeave, text, variant, type, selectorClass, border, round, lg, sm }) => {
    /* servis pre style */
    const { styles, defStyle, sizeElement } = servicesChangeStyleFromButtons.changerStyleFromButton({ variant, border, round, lg, sm });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: onClick, onDoubleClick: onDoubleClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, style: Object.assign(Object.assign(Object.assign({}, styles), defStyle), sizeElement), type: type, className: selectorClass }, text)));
};
export const ButtonComponent = {
    Button,
    ButtonBox
};
