
import React from "react";
import CarouselItem from "./CarouselItem";
import CarouselBox from "./CarouselBox";
import CarouselButonsBox from "./CarouselButtonsBox";
import { carouselComponentStyle } from "../style/carouselCompenent.style";
import servicesChangeVariantForCarousel from "../services";
import { PropsForCarouselComponents } from "../types";


const Carousel: React.FC<PropsForCarouselComponents> = ({ children, variant }): JSX.Element => {

    /* servis pre zmenu varianty generycka funkcia*/
    const variantFromCarousel = servicesChangeVariantForCarousel.changeVariantForCarousel({ variant })

    return (
        <div className="carousel"
            style={{ ...carouselComponentStyle, ...variantFromCarousel.varCarousel }}>
            {React.Children.map(children, (child: React.ReactElement<any>) => {
                return React.cloneElement(child, { variantFromCarousel });
            })}
        </div>
    )
};

export const CarouselComponent = {
    Carousel,
    CarouselBox,
    CarouselItem,
    CarouselButonsBox,
};
