import * as React from "react";
const CarouselButons = ({ onClick, variant, position }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: onClick }, position)));
};
export default CarouselButons;
