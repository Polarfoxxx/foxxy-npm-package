import { CSSProperties } from "react"

export type TypeFromMasterStyle = {
    fullScreen: CSSProperties,
    formBlock: CSSProperties
}

export const visibleStyleForModal: TypeFromMasterStyle = {
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
        top: "50px",
        left: "50%",
        transform: "translate(-50%)",
        transition: "0.6s"
    }
   
}

export const hideStyleForModal: TypeFromMasterStyle = {
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