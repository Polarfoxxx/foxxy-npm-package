import * as React from "react";
function Button({ text, variant, type }) {
    let styles = {};
    const buttonStyle = {
        whiteStyle: {
            background: "white",
            width: "10wv",
            height: "4vw"
        },
        dark: {
            background: "black",
            width: "10wv",
            height: "4vw"
        },
    };
    if (variant === "white") {
        styles = (buttonStyle.whiteStyle);
    }
    else if (variant === "dark") {
        styles = buttonStyle.dark;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { style: styles }, text)));
}
export default Button;
