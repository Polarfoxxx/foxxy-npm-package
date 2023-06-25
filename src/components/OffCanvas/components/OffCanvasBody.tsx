import React from "react";

type PropsForOffCanvasBody = {
    textBody: string
};

const OffCanvasBody: React.FC<PropsForOffCanvasBody> = ({ textBody }): JSX.Element => {
    return (
        <div>
            {textBody}
        </div>
    );
};


export default OffCanvasBody