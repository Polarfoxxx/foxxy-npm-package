import * as React from "react";
import { ButtonHTMLAttributes } from "react";

export interface TypecarouselButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    variant?: "default" | "white" | "dark" | "ocean",
    position: "left" | "right"
}

const CarouselButons: React.FC<TypecarouselButtonsIntrinsicAttributes> = ({
    onClick,
    variant,
    position
}): JSX.Element => {




    return (
        <>
            <button
                onClick={onClick}
            >
                {position}
            </button>
        </>
    );
}

export default CarouselButons