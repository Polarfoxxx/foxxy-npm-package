
import React, { CSSProperties } from "react";
import { carouselBoxStyle } from "../style/carouselBox.style";

type PropsFromCarouselItem = {
    children: JSX.Element | JSX.Element[],
    movement: number
}


const CarouselBox: React.FC<PropsFromCarouselItem> = ({children, movement}): JSX.Element => {

    /* pocet obsujucich deti */
const childrenCount = React.Children.count(children)
const fff: CSSProperties = {
    width: `${childrenCount * 60}vw`
};




    return (
        <>
        <div style={{...carouselBoxStyle, ... fff, ...movement}}>
            {children}
        </div>
        </>
    )
};

export default CarouselBox