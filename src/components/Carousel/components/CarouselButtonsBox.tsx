
import React, { CSSProperties } from "react";
import CarouselButons from "./CarouselButtons";


type PropsFromCarouselItem = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}


const CarouselButonsBox: React.FC<PropsFromCarouselItem> = ({onClick}): JSX.Element => {


    return (
        <>
        <div style={{}}>
            <CarouselButons className="left" onClick={onClick} position="left"/>
            <CarouselButons className="right" onClick={onClick} position="right"/>
        </div>
        </>
    )
};

export default CarouselButonsBox