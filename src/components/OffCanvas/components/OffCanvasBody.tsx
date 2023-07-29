import React from "react";
import { inside_componentStyleOffCanvas } from "../style";
import { PropsForOffCanvasBody } from "../types";

const OffCanvasBody: React.FC<PropsForOffCanvasBody> = ({ children, variant_style }): JSX.Element => {
    return (
        <div style={{
            ...inside_componentStyleOffCanvas.styleForBodyOffCanvas,
            ...variant_style.styleBody
        }}>
            {children}
        </div>
    );
};


export default OffCanvasBody