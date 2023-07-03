import React from "react";
import { styleButtonBox } from "../styles/buttonBox.style";
import { TypeForButtonBox } from "../types";


const ButtonBox: React.FC<TypeForButtonBox> = ({ children }) => {
    return (
        <div style={styleButtonBox}>
            {children}
        </div>

    )
};

export default ButtonBox