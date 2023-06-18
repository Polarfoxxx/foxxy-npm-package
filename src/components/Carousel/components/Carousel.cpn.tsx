
import React from "react";
import CarouselItem from "./CarouselItem";
import CarouselBox from "./CarouselBox";

type PropsFromCarouselComponents = {
    children: JSX.Element[]
}


const Carousel: React.FC<PropsFromCarouselComponents> = ({ children }): JSX.Element => {



    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
};

export const CarouselComponent = {
    Carousel,
    CarouselBox,
    CarouselItem
};
