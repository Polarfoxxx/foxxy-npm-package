import React from "react";
type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[];
};
export declare const OffCanvasComponent: {
    OffCanvas: React.FC<PropsForOffCanvasComponents>;
    OffCanvasHeader: React.FC<{
        children: JSX.Element | JSX.Element[];
    }>;
    OffCanvasBody: React.FC<{
        text: string;
    }>;
};
export {};
