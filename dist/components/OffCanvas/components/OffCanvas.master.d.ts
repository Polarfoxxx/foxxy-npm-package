import React from "react";
import { PropsForOffCanvasComponents } from "../types";
export declare const OffCanvasComponent: {
    OffCanvas: React.FC<PropsForOffCanvasComponents>;
    OffCanvasHeader: React.FC<{
        textHeader: string;
    }>;
    OffCanvasBody: React.FC<{
        textBody: string;
    }>;
};
