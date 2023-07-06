import React from "react";
import { allStyleComponentsCarousel } from "../style";
import { TypeCarouselButtonsIntrinsicAttributes } from "../types";

const CarouselButton: React.FC<TypeCarouselButtonsIntrinsicAttributes> = ({
    variantFromCarousel,
    position,
    className,
    ...props
}): JSX.Element => {


    return (
        <button
            {...props}
            className={className}
            style={{ ...allStyleComponentsCarousel.styleCarouselButtons, ...variantFromCarousel?.varButtons }}>
            {position}
        </button>
    );
}

export default CarouselButton