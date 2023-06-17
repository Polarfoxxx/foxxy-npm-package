import { CSSProperties } from "react"

export type TypeFromMasterStyle = {
    fullScreen: CSSProperties,
    formBlock: CSSProperties
}

export const visibleStyleFromModal: TypeFromMasterStyle = {
    fullScreen: {
        backgroundColor: "rgba(0, 0, 0, 0.829)",
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
        top: "50px",
        left: "50%",
        transform: "translate(-50%)",
        transition: "0.6s"
    }
   
}

export const hideStyleFromModal: TypeFromMasterStyle = {
    fullScreen: {
       display: "block"
    },
    formBlock: {
        width: "30vw",
        height: "auto",
        position: "absolute",
        top: "-100%",
        left: "50%",
        transform: "translate(-50%)",
        transition: "0.6s"
    }
   
}