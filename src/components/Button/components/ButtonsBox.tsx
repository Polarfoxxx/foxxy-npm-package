import React, { ReactHTMLElement } from "react";
import { styleButtonBox } from "../styles/buttonBox.style";


type Props = {
    children: React.ReactNode
}

const ButtonBox: React.FC<Props> = ({ children }) => {
    return (
        <div style={styleButtonBox}>
            {children}
        </div>

    )
}

export default ButtonBox