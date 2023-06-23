import React from "react";
import OffCanvasHeader from "./OffCanvasHeader";
import OffCanvasBody from "./OffCanvasBody";


type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[]
};




const OffCanvas: React.FC<PropsForOffCanvasComponents> = ({ children }): JSX.Element => {
    return (
        <div style={{}}>
            {children}
        </div>
    );
};


export const OffCanvasComponent = {
    OffCanvas,
    OffCanvasHeader,
    OffCanvasBody
};