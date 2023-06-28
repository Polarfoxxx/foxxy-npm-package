import React from "react";
import { PropsForOffCanvasComponents } from "../types";
export declare const OffCanvasComponent: {
    OffCanvas: React.FC<PropsForOffCanvasComponents>;
    OffCanvasHeader: React.FC<import("../types").PropsForOffCanvasHeader>;
    OffCanvasBody: React.FC<{
        children: string;
    }>;
    OffCanvasButoonBox: React.FC<{
        children: JSX.Element | JSX.Element[];
    }>;
};
