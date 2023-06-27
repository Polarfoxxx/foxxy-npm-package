import { CSSProperties } from "react"

export type TypeFromMasterStyle = {
    fullScreen: CSSProperties,
    formBlock: CSSProperties
};


export const styleMasterForOffCanvasComponent: TypeFromMasterStyle = {
    fullScreen: {
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        top:"0"
    },
    formBlock: {
        width: "30vw",
        height: "auto",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        transition: "0.6s"
    }
};

        top: "50px",
