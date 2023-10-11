import { TypeForCSS_OffCanvas } from "../../../types"

export const styleMasterForOffCanvasComponent_right: TypeForCSS_OffCanvas = {
  styleForBox: {
    width: "30vw",
    height: "100vh",
    top: "0",
    bottom: "0",
    position: "fixed",
    zIndex: "10000",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    boxSizing: "border-box"
  },
  styleForScreen: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    boxSizing: "border-box",
    zIndex: "9999",
  }
}