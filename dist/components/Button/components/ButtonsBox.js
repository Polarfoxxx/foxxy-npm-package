import React from "react";
import { styleButtonBox } from "../styles/buttonBox.style";
const ButtonBox = ({ children }) => {
    return (React.createElement("div", { style: styleButtonBox }, children));
};
export default ButtonBox;
