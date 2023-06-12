import React from "react";
import { styleButtonBox } from "../styles/buttonBox.style";


type Props = {
    children: any
}

const ButtonBox: React.FC<Props> = ({ children }) => {
    return (
        <div style={styleButtonBox}>
            {children}
        </div>

    )
}

export default ButtonBox