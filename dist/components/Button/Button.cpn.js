import * as React from "react";
import servicesChangeStyle from "./services";
function Button({ text, variant, type, selectorClass, border, radius, lg, md, sm }) {
    const { styles, defStyle } = servicesChangeStyle.changerStyle(variant, border, radius, lg, md, sm);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { style: Object.assign(Object.assign({}, styles), defStyle), type: type, className: selectorClass }, text)));
}
export default Button;
