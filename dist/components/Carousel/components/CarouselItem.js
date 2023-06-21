import React from "react";
import { carouselItemStyle } from "../style/carouselItem.style";
const CarouselItem = ({ children }) => {
    return (React.createElement("div", { className: "box", style: Object.assign({}, carouselItemStyle) }, children));
};
export default CarouselItem;
