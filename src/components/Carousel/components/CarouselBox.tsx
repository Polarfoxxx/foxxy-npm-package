
import React from "react";
import { carouselBoxStyle } from "../style/carouselBox.style";

type PropsFromCarouselItem = {
    children: JSX.Element[]
}


const CarouselBox: React.FC<PropsFromCarouselItem> = ({children}): JSX.Element => {



    return (
        <>
        <div style={{...carouselBoxStyle}}>
            {children}
        </div>
           
        </>
    )
};

export default CarouselBox