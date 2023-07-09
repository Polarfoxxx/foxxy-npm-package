
import React, { CSSProperties } from "react";
import { PropsForCarouselBox } from "../types";
import { allStyleComponentsCarousel } from "../style";
import CarouselButtonsBox from "./CarouselButtonsBox";


const CarouselBox: React.FC<PropsForCarouselBox> = ({ children, variantFromCarousel }): JSX.Element => {
    const index_REF = React.useRef(0);
    const childrenCount_REF = React.useRef(0);
    const [movement_style, setMovement_style] = React.useState<CSSProperties>({});

    /* pocet obsujucich deti */
    childrenCount_REF.current = React.Children.count(children)

    /* funkcia na zmenu indexu pohybu */
    const handleClickChangeMovementIndex = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const eventType = event.target as HTMLElement;
        const eventTargetName = eventType.className;
        if (eventTargetName === "right") {
            index_REF.current = index_REF.current === (childrenCount_REF.current - 1) ? 0 : index_REF.current + 1;
        } else {
            index_REF.current = index_REF.current < 1 ? (childrenCount_REF.current - 1) : index_REF.current - 1;
        };
        setMovement_style({
            right: `${index_REF.current * 60}vw`
        });

    };



    return (
        <>
            <div>
                <CarouselButtonsBox
                    variantFromCarousel={variantFromCarousel}
                    handleClickChangeMovementIndex={handleClickChangeMovementIndex} />
            </div>
            <div
                style={{ ...allStyleComponentsCarousel.styleCarouselBox, ...movement_style }}>
                {children}
            </div>
        </>

    )
};

export default CarouselBox