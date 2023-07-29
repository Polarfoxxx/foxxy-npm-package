import React from "react";
import { PropsForOffCanvasHeader } from "../types";
import { inside_componentStyleOffCanvas } from "../style";

const OffCanvasHeader: React.FC<PropsForOffCanvasHeader> = ({ children, variant_style }): JSX.Element => {
    return (
        <div style={{
            ...inside_componentStyleOffCanvas.styleForHeaderOffCanvas,
            ...variant_style.styleHeader
        }}>
            {children}
        </div>
    );
};


export default OffCanvasHeader