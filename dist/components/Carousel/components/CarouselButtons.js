import * as React from "react";
const CarouselButons = ({ onClick, variant, position, className }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: className, onClick: onClick }, position)));
};
export default CarouselButons;
