
import React, { CSSProperties } from "react";
import CarouselItem from "./CarouselItem";
import CarouselBox from "./CarouselBox";
import CarouselButonsBox from "./CarouselButtonsBox";

import { carouselComponentStyle } from "../style/carouselCompenent.style";

type PropsForCarouselComponents = {
    children: JSX.Element | JSX.Element[],
    variant?: "default" | "white" | "dark"
}


const Carousel: React.FC<PropsForCarouselComponents> = ({ children, variant }): JSX.Element => {

/* servis pre zmenu varianty */


    return (
            <div style={{ ...carouselComponentStyle }}>
                    {children}
            </div>
    )
};

export const CarouselComponent = {
    Carousel,
    CarouselBox,
    CarouselItem,
    CarouselButonsBox,
};
