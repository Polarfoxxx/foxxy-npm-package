
import React, { CSSProperties } from "react";
import { carouselBoxStyle } from "../style/carouselBox.style";

type PropsForCarouselItem = {
    children: JSX.Element | JSX.Element[],
    index: number
};


const CarouselBox: React.FC<PropsForCarouselItem> = ({ children, index }): JSX.Element => {
    let movement: CSSProperties = {}

    /* pocet obsujucich deti */
    const childrenCount = React.Children.count(children)
    const fff: CSSProperties = {
        width: `${childrenCount * 60}vw`
    };
    /* pohyb boxxu */
    movement = {
        right: `${index * 60}vw`,
    };

    return (
            <div style={{ ...carouselBoxStyle, ...fff, ...movement }}>
                {children}
            </div>
    )
};

export default CarouselBox