import * as React from "react";
import FormHeader from "./FormHeader";
const Form = ({ submit, children, formName }) => {
    const formStyle = {
        width: "25vw",
        height: "6vw",
        minWidth: "350px",
        minHeight: "100px",
        backgroundColor: "rgb(245, 245, 245)",
        border: "1px solid rgb(221, 230, 237)",
        borderRadius: "2vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    };
    const styleFromDivs = {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const styleHeader = {
        width: "100%",
        height: "33%",
        backgroundColor: "rgb(157, 178, 191)"
    };
    const styleFooter = {
        width: "100%",
        height: "33%",
        padding: "5px"
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { action: "", style: formStyle },
            React.createElement("div", { style: Object.assign(Object.assign({}, styleFromDivs), styleHeader) },
                React.createElement(FormHeader, { formName: formName })),
            React.createElement("div", { style: styleFromDivs },
                React.createElement("input", { type: "text" })),
            React.createElement("div", { style: Object.assign(Object.assign({}, styleFromDivs), styleFooter) }, children))));
};
export default Form;
