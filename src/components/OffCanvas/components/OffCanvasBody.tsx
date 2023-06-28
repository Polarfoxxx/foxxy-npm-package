import React from "react";

type PropsForOffCanvasBody = {
    children: string
};

const OffCanvasBody: React.FC<PropsForOffCanvasBody> = ({ children }): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
};


export default OffCanvasBody