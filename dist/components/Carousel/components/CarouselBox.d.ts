import React, { CSSProperties } from "react";
type PropsFromCarouselItem = {
    children: JSX.Element | JSX.Element[];
    movement: CSSProperties;
};
declare const CarouselBox: React.FC<PropsFromCarouselItem>;
export default CarouselBox;
