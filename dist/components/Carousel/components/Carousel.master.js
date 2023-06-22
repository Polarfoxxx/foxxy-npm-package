import React from "react";
import CarouselItem from "./CarouselItem";
import CarouselBox from "./CarouselBox";
import CarouselButonsBox from "./CarouselButtonsBox";
import { carouselComponentStyle } from "../style/carouselCompenent.style";
import servicesChangeVariantForCarousel from "../services";
const Carousel = ({ children, variant }) => {
    /* servis pre zmenu varianty generycka funkcia*/
    const variantFromCarousel = servicesChangeVariantForCarousel.changeVariantForCarousel({ variant });
    return (React.createElement("div", { style: Object.assign(Object.assign({}, carouselComponentStyle), variantFromCarousel.varCarousel) }, React.Children.map(children, (child) => {
        return React.cloneElement(child, { variantFromCarousel });
    })));
};
export const CarouselComponent = {
    Carousel,
    CarouselBox,
    CarouselItem,
    CarouselButonsBox,
};
