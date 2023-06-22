import React from "react";
import CarouselButons from "./CarouselButtons";
import { styleForButtonBox } from "../style/buttonBox.style";
const CarouselButonsBox = ({ onClick, variantFromCarousel }) => {
    return (React.createElement("div", { style: Object.assign({}, styleForButtonBox) },
        React.createElement(CarouselButons, { variantFromCarousel: variantFromCarousel, className: "left", onClick: onClick, position: "<" }),
        React.createElement(CarouselButons, { variantFromCarousel: variantFromCarousel, className: "right", onClick: onClick, position: ">" })));
};
export default CarouselButonsBox;
