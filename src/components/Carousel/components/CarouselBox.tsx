
import React, { CSSProperties } from "react";
import { carouselBoxStyle } from "../style/carouselBox.style";

type PropsFromCarouselItem = {
    children: JSX.Element | JSX.Element[]
}


const CarouselBox: React.FC<PropsFromCarouselItem> = ({children}): JSX.Element => {

    /* pocet obsujucich deti */
const childrenCount = React.Children.count(children)
const fff: CSSProperties = {
    width: `${childrenCount * 60}vw`
}


    return (
        <>
        <div style={{...carouselBoxStyle, ... fff}}>
            {children}
        </div>
        </>
    )
};

export default CarouselBox