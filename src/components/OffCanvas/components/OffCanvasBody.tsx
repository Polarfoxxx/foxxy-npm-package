import React from "react";
import { inside_componentStyleOffCanvas } from "../style";
import { PropsForOffCanvasBody } from "../types";



const OffCanvasBody: React.FC<PropsForOffCanvasBody> = ({ children }): JSX.Element => {
    return (
        <div style={{...inside_componentStyleOffCanvas.styleForBodyOffCanvas}}>
            {children}
        </div>
    );
};


export default OffCanvasBody