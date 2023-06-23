
import React, { CSSProperties } from "react";
import { carouselBoxStyle } from "../style/carouselBox.style";
import { PropsForCarouselBox } from "../types";


const CarouselBox: React.FC<PropsForCarouselBox> = ({ children, index }): JSX.Element => {
    let movement: CSSProperties = {}

    /* pocet obsujucich deti */
    const childrenCount = React.Children.count(children)
    const boxLength: CSSProperties = {
        width: `${childrenCount * 60}vw`
    };
    /* pohyb boxxu */
    movement = {
        right: `${index * 60}vw`,
    };

    return (
            <div style={{ ...carouselBoxStyle, ...boxLength, ...movement }}>
                {children}
            </div>
    )
};

export default CarouselBox