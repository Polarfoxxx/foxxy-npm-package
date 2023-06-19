import React from "react";
import CarouselItem from "./CarouselItem";
import CarouselBox from "./CarouselBox";
import CarouselButonsBox from "./CarouselButtonsBox";
import { carouselComponentStyle } from "../style/carouselCompenent.style";
const Carousel = ({ children }) => {
    let css = {};
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: Object.assign({}, carouselComponentStyle) }, children)));
};
export const CarouselComponent = {
    Carousel,
    CarouselBox,
    CarouselItem,
    CarouselButonsBox,
};
