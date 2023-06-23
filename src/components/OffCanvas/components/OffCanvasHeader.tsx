import React from "react";

type PropsForOffCanvasHeader = {
    children: JSX.Element | JSX.Element[]
};

const OffCanvasHeader: React.FC<PropsForOffCanvasHeader> = ({ children }): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
};


export default OffCanvasHeader