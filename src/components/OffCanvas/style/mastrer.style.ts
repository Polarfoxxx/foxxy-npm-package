import { TypeForShowAndHideStyleAndMaster } from "../types"

export const styleMasterForOffCanvasComponent: TypeForShowAndHideStyleAndMaster = {
    styleForBox: {
        width: "30vw",
        height: "100vh",
        top: "0",
        bottom: "0",
        position: "absolute",
        zIndex: "5",
        minWidth: "300px",
        padding: "0 10px"
    },
    styleForScreen: {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
    }
}