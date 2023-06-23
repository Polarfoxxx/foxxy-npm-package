import React from "react";

type PropsForOffCanvasBody = {
    text: string
};

const OffCanvasBody: React.FC<PropsForOffCanvasBody> = ({ text }): JSX.Element => {
    return (
        <div>
            {text}
        </div>
    );
};


export default OffCanvasBody