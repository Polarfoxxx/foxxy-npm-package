import * as React from "react";
import servicesChangeStyle from "./services";
function Button({ onClick, text, variant, type, selectorClass, border, radius, lg, sm }) {
    const { styles, defStyle, sizeElement } = servicesChangeStyle.changerStyle({ variant, border, radius, lg, sm });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, styles), defStyle), sizeElement), type: type, className: selectorClass }, text)));
}
export default Button;
