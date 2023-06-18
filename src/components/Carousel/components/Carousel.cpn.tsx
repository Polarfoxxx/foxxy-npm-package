
import React, { CSSProperties } from "react";
import CarouselItem from "./CarouselItem";
import CarouselBox from "./CarouselBox";
import CarouselButonsBox from "./CarouselButtonsBox";
import CarouselButons from "./CarouselButtons";

import { carouselComponentStyle } from "../style/carouselCompenent.style";

type PropsFromCarouselComponents = {
    children: JSX.Element | JSX.Element[]
}


const Carousel: React.FC<PropsFromCarouselComponents> = ({ children }): JSX.Element => {
    let css: CSSProperties = {}


    return (
        <>
            <div style={{ ...carouselComponentStyle }}>
                    {children}
            </div>
        </>
    )
};

export const CarouselComponent = {
    Carousel,
    CarouselBox,
    CarouselItem,
    CarouselButonsBox,
    CarouselButons
};
