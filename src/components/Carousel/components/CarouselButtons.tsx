import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import { carouselButtons } from "../style/button.style";
import { TypeVariantForCarouselAndButton } from "../types";
export interface TypeCarouselButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    variantFromCarousel?: TypeVariantForCarouselAndButton,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    position: "<" | ">",
    className: string
}

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