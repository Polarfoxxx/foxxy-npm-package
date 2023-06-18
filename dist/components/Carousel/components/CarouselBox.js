import React from "react";
import { carouselBoxStyle } from "../style/carouselBox.style";
const CarouselBox = ({ children }) => {
    /* pocet obsujucich deti */
    const childrenCount = React.Children.count(children);
    const fff = {
        width: `${childrenCount * 60}vw`
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: Object.assign(Object.assign({}, carouselBoxStyle), fff) }, children)));
};
export default CarouselBox;
