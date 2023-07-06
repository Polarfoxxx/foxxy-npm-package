
import React from "react";
import { PropsForCarouselItem } from "../types";
import { allStyleComponentsCarousel } from "../style";


const CarouselItem: React.FC<PropsForCarouselItem> = ({ children }): JSX.Element => {

    return (
        <div
            className="box"
            style={{ ...allStyleComponentsCarousel.styleCarouselItem }}>
            {children}
        </div>
    )
};

export default CarouselItem