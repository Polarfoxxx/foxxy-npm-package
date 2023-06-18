import React from "react";
import { carouselItemStyle } from "../style/carouselItem.style";
const CarouselItem = ({ children }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: Object.assign({}, carouselItemStyle) }, children)));
};
export default CarouselItem;
