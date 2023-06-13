import * as React from "react";
const FormHeader = ({ formName, formVariantStyle }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "FormHeader", style: formVariantStyle === null || formVariantStyle === void 0 ? void 0 : formVariantStyle.formHeader }, formName)));
};
export default FormHeader;
