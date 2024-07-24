import React from "react";
import { TypeForButtonBox } from "../types";


const ButtonBox: React.FC<TypeForButtonBox> = ({ children }) => {
    return (
        <div >
            {children}
        </div>

    )
};

export default ButtonBox