import React from "react";
import { PropsForOffCanvasHeader } from "../types";
import { inside_componentStyleOffCanvas } from "../style";

const OffCanvasHeader: React.FC<PropsForOffCanvasHeader> = ({ children }): JSX.Element => {
    return (
        <div style={{...inside_componentStyleOffCanvas.styleForHeaderOffCanvas}}>
            {children}
        </div>
    );
};


export default OffCanvasHeader