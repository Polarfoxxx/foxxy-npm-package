
import React from "react";
import CarouselItem from "./CarouselItem";
import CarouselBox from "./CarouselBox";
import { allStyleComponentsCarousel, allvariantForCarousel } from "../style";
import servicesChangeVariantForCarousel from "../services/services.chancheVariant";
import { PropsForCarouselComponents } from "../types";
import { TypeVariantForCarouselAndButton } from "../types";


const Carousel: React.FC<PropsForCarouselComponents> = ({ children, variant_crs }): JSX.Element => {

    const [variantFromCarousel, setVariantFromCarousel] = React.useState<TypeVariantForCarouselAndButton>(allvariantForCarousel.defaultStyleforCarousel)

    /* servis pre zmenu varianty funkcia*/
    React.useEffect(() => {
        setVariantFromCarousel(servicesChangeVariantForCarousel.changeVariantForCarousel({ variant_crs }))
    }, [variant_crs])

    return (
        <div className="carousel"
            style={{ ...allStyleComponentsCarousel.styleCarouselMasterComponent, ...variantFromCarousel.varCarousel }}>
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
};
