import { CSSProperties } from "react";

export type TypeFromChangeVariantForCarousel = {
    variant?: string
};


export type PropsForCarouselBox = {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    variantFromCarousel?: TypeVariantForCarouselAndButton,
};


export type TypeVariantForCarouselAndButton = {
    varCarousel: CSSProperties,
    varButtons: CSSProperties
};
