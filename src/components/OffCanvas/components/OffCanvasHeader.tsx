import React from "react";
import { PropsForOffCanvasHeader } from "../types";
import { inside_componentStyleOffCanvas } from "../style";

const OffCanvasHeader: React.FC<PropsForOffCanvasHeader> = ({ textHeader }): JSX.Element => {
    return (
        <div style={{...inside_componentStyleOffCanvas.styleForButtonBox}}>
            {textHeader}
        </div>
    );
};


export default OffCanvasHeader