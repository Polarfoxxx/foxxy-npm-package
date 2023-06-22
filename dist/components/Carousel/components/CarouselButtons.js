import * as React from "react";
import { carouselButtons } from "../style/button.style";
const CarouselButons = ({ variantFromCarousel, onClick, position, className }) => {
    return (React.createElement("button", { className: className, style: Object.assign(Object.assign({}, carouselButtons), variantFromCarousel === null || variantFromCarousel === void 0 ? void 0 : variantFromCarousel.varButtons), onClick: onClick }, position));
};
export default CarouselButons;
