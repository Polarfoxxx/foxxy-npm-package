import React from "react";
import { PropsForOffCanvasHeader } from "../types";
import { masterStyleOffCanvas } from "../style";

const OffCanvasHeader: React.FC<PropsForOffCanvasHeader> = ({ textHeader }): JSX.Element => {
    return (
        <div style={{...masterStyleOffCanvas.styleForHeaderOffCanvas}}>
            {textHeader}
        </div>
    );
};


export default OffCanvasHeader