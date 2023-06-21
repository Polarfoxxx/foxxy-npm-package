import React from "react";
type PropsFromCarouselComponents = {
    children: JSX.Element | JSX.Element[];
};
export declare const CarouselComponent: {
    Carousel: React.FC<PropsFromCarouselComponents>;
    CarouselBox: React.FC<{
        children: JSX.Element | JSX.Element[];
        index: number;
    }>;
    CarouselItem: React.FC<{
        children: JSX.Element | JSX.Element[];
    }>;
    CarouselButonsBox: React.FC<{
        onClick: React.MouseEventHandler<HTMLButtonElement>;
    }>;
};
export {};
