
import React from "react";
import CarouselButton from "./CarouselButtons";
import { PropsForCarouselButtonBox } from "../types";
import { allStyleComponentsCarousel } from "../style";

const CarouselButtonsBox: React.FC<PropsForCarouselButtonBox> = ({
    variantFromCarousel,
    handleClickChangeMovementIndex
}): JSX.Element => {

 

    return (
        <div style={{ ...allStyleComponentsCarousel.styleCarouselButtonBox }}>
            <CarouselButton
                onClick={handleClickChangeMovementIndex}
                variantFromCarousel={variantFromCarousel}
                className="left"
                position="<" />
            <CarouselButton
                onClick={handleClickChangeMovementIndex}
                variantFromCarousel={variantFromCarousel}
                className="right"
                position=">" />
        </div>
    )
};

export default CarouselButtonsBox