import * as React from "react";
import { carouselButtons } from "../style/button.style";
import { TypeCarouselButtonsIntrinsicAttributes } from "../types";

const CarouselButons: React.FC<TypeCarouselButtonsIntrinsicAttributes> = ({
    variantFromCarousel,
    onClick,
    position,
    className
}): JSX.Element => {

    return (
        <button
            className={className}
            style={{ ...carouselButtons, ...variantFromCarousel?.varButtons }}
            onClick={onClick}
        >
            {position}
        </button>
    );
}

export default CarouselButons