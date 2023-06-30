import React from "react";
import { PropsForOffCanvasHeader } from "../types";
import { inside_componentStyleOffCanvas } from "../style";

const OffCanvasHeader: React.FC<PropsForOffCanvasHeader> = ({ children, variant_Style }): JSX.Element => {
    return (
        <div style={{
            ...inside_componentStyleOffCanvas.styleForHeaderOffCanvas,
            ...variant_Style.styleHeader
        }}>
            {children}
        </div>
    );
};


export default OffCanvasHeader