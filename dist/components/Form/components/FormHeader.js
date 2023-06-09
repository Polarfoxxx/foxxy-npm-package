import * as React from "react";
const FormHeader = ({ formName }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "FormHeader" },
            React.createElement("p", null, formName))));
};
export default FormHeader;
