import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import { TypeVariantForCarouselAndButton } from "../types";
export interface TypeCarouselButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    variantFromCarousel?: TypeVariantForCarouselAndButton;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    position: "<" | ">";
    className: string;
}
declare const CarouselButons: React.FC<TypeCarouselButtonsIntrinsicAttributes>;
export default CarouselButons;
