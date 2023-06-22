import React from "react";
type PropsForCarouselItem = {
    children: JSX.Element | JSX.Element[];
    index: number;
};
declare const CarouselBox: React.FC<PropsForCarouselItem>;
export default CarouselBox;
