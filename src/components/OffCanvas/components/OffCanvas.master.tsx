import React from "react";
import OffCanvasHeader from "./OffCanvasHeader";
import OffCanvasBody from "./OffCanvasBody";


type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[]
};




const OffCanvas: React.FC<PropsForOffCanvasComponents> = ({ children }): JSX.Element => {

const [state , useState] = React.useState("dds")



    return (
        <div style={{}}>
            <h1>{state}</h1>
            {children}

        </div>
    );
};



export const OffCanvasComponent = {
    OffCanvas,
    OffCanvasHeader,
    OffCanvasBody
};