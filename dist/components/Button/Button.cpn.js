import * as React from "react";
function Button({ text, variant, type, selector, border }) {
    let styles = {};
    const buttonStyle = {
        whiteStyle: {
            background: "white",
            color: "black"
        },
        whiteStyleBorder: {
            background: "white",
            color: "black",
            border: '1px solid orange'
        },
        dark: {
            background: "black",
            color: "white"
        },
        darkBorder: {
            background: "black",
            color: "white",
            border: '1px solid red'
        },
    };
    const defStyle = {
        cursor: "pointer",
        borderRadius: "5vw",
        width: "5vw",
        height: "2vw",
        minWidth: "70px",
        minHeight: "30px"
    };
    if (variant === "white") {
        if (!border) {
            styles = buttonStyle.whiteStyle;
        }
        else {
            styles = buttonStyle.whiteStyleBorder;
        }
    }
    else if (variant === "dark") {
        if (!border) {
            styles = buttonStyle.dark;
        }
        else {
            styles = buttonStyle.darkBorder;
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { style: Object.assign(Object.assign({}, styles), defStyle), type: type, className: selector }, text)));
}
export default Button;
