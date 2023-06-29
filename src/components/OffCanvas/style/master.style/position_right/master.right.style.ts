import { TypeForShowAndHideStyleAndMaster } from "../../../types"

export const styleMasterForOffCanvasComponent_right: TypeForShowAndHideStyleAndMaster = {
  styleForBox: {
    width: "30vw",
    height: "100vh",
    top: "0",
    bottom: "0",
    position: "fixed",
    zIndex: "5",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start"
  },
  styleForScreen: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  }
}