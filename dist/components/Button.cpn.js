import * as React from "react";
function Button({ children, variant }) {
    const [sumg, setSumg] = React.useState({});
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
        setSumg(buttonStyle.whiteStyle);
    }
    else if (variant === "dark") {
        styles = buttonStyle.dark;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { style: sumg }, children)));
}
export default Button;
