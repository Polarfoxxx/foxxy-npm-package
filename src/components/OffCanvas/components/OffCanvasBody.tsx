import React from "react";
import { inside_componentStyleOffCanvas } from "../style";
import { PropsForOffCanvasBody } from "../types";



const OffCanvasBody: React.FC<PropsForOffCanvasBody> = ({ children, variant_Style }): JSX.Element => {
    return (
        <div style={{
            ...inside_componentStyleOffCanvas.styleForBodyOffCanvas,
            ...variant_Style.styleBody
        }}>
            {children}
        </div>
    );
};


export default OffCanvasBody