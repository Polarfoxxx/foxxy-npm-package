
import { CSSProperties } from "react";

type TypeCarouseButtons = {
    leftButtons: CSSProperties,
    rightButons: CSSProperties
}

export const carouselButtons: TypeCarouseButtons = {
    leftButtons: {
        position: "absolute",
        zIndex: "4",
        width: "50px",
        left: " 5px",
        top: "50%"
    },
    rightButons: {
        position: "absolute",
        zIndex: "4",
        width: "50px",
        right: "5px",
        top: "50%",
    }

}