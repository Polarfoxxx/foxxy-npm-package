
import React from "react";
import { carouselItemStyle } from "../style/carouselItem.style";
import { PropsForCarouselItem } from "../types";


const CarouselItem: React.FC<PropsForCarouselItem> = ({ children }): JSX.Element => {

    return (
        <div
            className="box"
            style={{ ...carouselItemStyle }}>
            {children}
        </div>
    )
};

export default CarouselItem