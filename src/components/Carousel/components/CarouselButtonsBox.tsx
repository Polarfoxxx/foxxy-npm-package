
import React, { CSSProperties } from "react";
import CarouselButons from "./CarouselButtons";


type PropsForCarouselItem = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}


const CarouselButonsBox: React.FC<PropsForCarouselItem> = ({onClick}): JSX.Element => {


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