import React from "react";
type PropsForCarouselComponents = {
    children: React.ReactElement<any>[];
    variant?: "default" | "ocean" | "dark";
};
export declare const CarouselComponent: {
    Carousel: React.FC<PropsForCarouselComponents>;
    CarouselBox: React.FC<{
        children: JSX.Element | JSX.Element[];
        index: number;
    }>;
    CarouselItem: React.FC<{
        children: JSX.Element | JSX.Element[];
    }>;
    CarouselButonsBox: React.FC<import("../types").PropsForCarouselBox>;
};
export {};
