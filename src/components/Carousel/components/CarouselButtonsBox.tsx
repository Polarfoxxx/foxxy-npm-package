
import React from "react";
import CarouselButons from "./CarouselButtons";
import { PropsForCarouselButtonBox } from "../types";
import { styleForButtonBox } from "../style/buttonBox.style";

const CarouselButonsBox: React.FC<PropsForCarouselButtonBox> = ({ onClick, variantFromCarousel }): JSX.Element => {

    return (
        <div style={{ ...styleForButtonBox }}>
            <CarouselButons
                variantFromCarousel={variantFromCarousel}
                className="left"
                onClick={onClick}
                position="<" />
            <CarouselButons
                variantFromCarousel={variantFromCarousel}
                className="right"
                onClick={onClick}
                position=">" />
        </div>
    )
};

export default CarouselButonsBox