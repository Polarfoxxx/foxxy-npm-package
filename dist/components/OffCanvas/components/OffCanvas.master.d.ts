import React, { SetStateAction } from "react";
type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[];
    show: boolean;
    setShow: React.Dispatch<SetStateAction<boolean>>;
};
export declare const OffCanvasComponent: {
    OffCanvas: React.FC<PropsForOffCanvasComponents>;
    OffCanvasHeader: React.FC<{
        textHeader: string;
    }>;
    OffCanvasBody: React.FC<{
        textBody: string;
    }>;
};
export {};
