
import React from "react";
import { carouselItemStyle } from "../style/carouselItem.style";

type PropsFromCarouselItem = {
    children: JSX.Element | JSX.Element[]
}


const CarouselItem: React.FC<PropsFromCarouselItem> = ({children}): JSX.Element => {



    return (
        <>
        <div style={{...carouselItemStyle}}>
            {children}
        </div>
           
        </>
    )
};

export default CarouselItem