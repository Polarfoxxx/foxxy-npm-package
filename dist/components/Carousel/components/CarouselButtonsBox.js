import React from "react";
import CarouselButons from "./CarouselButtons";
const CarouselButonsBox = ({ onClick }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: {} },
            React.createElement(CarouselButons, { className: "left", onClick: onClick, position: "left" }),
            React.createElement(CarouselButons, { className: "right", onClick: onClick, position: "right" }))));
};
export default CarouselButonsBox;
