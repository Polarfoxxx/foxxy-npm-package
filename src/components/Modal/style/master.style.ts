import { CSSProperties } from "react"

type TypeFromMasterStyle = {
    fullScreen: CSSProperties,
    formBlock: CSSProperties
}

export const masterStyleFromModal: TypeFromMasterStyle = {
    fullScreen: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.829)",
    },
    formBlock: {
        width: "30vw",
        height: "auto",
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translate(-50%)",
    }
   
}