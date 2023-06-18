import * as React from "react";
import { ButtonHTMLAttributes } from "react";
export interface TypecarouselButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variant?: "default" | "white" | "dark" | "ocean";
    position: "left" | "right";
}
declare const CarouselButons: React.FC<TypecarouselButtonsIntrinsicAttributes>;
export default CarouselButons;
