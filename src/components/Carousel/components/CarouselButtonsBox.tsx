
import React, { CSSProperties } from "react";

type PropsFromCarouselItem = {
    children: JSX.Element | JSX.Element[]
}


const CarouselButonsBox: React.FC<PropsFromCarouselItem> = ({children}): JSX.Element => {


    return (
        <>
        <div style={{}}>
            {children}
        </div>
        </>
    )
};

export default CarouselButonsBox