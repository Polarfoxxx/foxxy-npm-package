import React from "react";

type PropsForOffCanvasHeader = {
    textHeader: string
};

const OffCanvasHeader: React.FC<PropsForOffCanvasHeader> = ({ textHeader }): JSX.Element => {
    return (
        <div>
            {textHeader}
        </div>
    );
};


export default OffCanvasHeader