import * as React from "react";
import servicesChangeStyle from "./services";
function Button({ text, variant, type, selector, border }) {
    const { styles, defStyle } = servicesChangeStyle.changerStyle(variant, border);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { style: Object.assign(Object.assign({}, styles), defStyle), type: type, className: selector }, text)));
}
export default Button;
