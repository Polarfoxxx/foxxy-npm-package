import * as React from "react";
import servicesChangeStyle from "./services";
const Button = ({ onClick, text, variant, type, selectorClass, border, round, lg, sm }) => {
    const { styles, defStyle, sizeElement } = servicesChangeStyle.changerStyle({ variant, border, round, lg, sm });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: onClick, style: Object.assign(Object.assign(Object.assign({}, styles), defStyle), sizeElement), type: type, className: selectorClass }, text)));
};
export default Button;
