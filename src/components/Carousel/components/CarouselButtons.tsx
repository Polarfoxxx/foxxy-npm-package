import * as React from "react";
import { ButtonHTMLAttributes } from "react";

export interface TypeCarouselButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    variant?: "default" | "white" | "dark" | "ocean",
    position: "left" | "right",
    className: string
}

const CarouselButons: React.FC<TypeCarouselButtonsIntrinsicAttributes> = ({
    onClick,
    variant,
    position,
    className
}): JSX.Element => {




    return (
        <>
            <button
                className={className}
                onClick={onClick}
            >
                {position}
            </button>
        </>
    );
}

export default CarouselButons