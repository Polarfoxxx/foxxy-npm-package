import { TypeForCSS_OffCanvas } from "../../../types"

export const styleMasterForOffCanvasComponent_top: TypeForCSS_OffCanvas = {
  styleForBox: {
    width: "100%",
    height: "50vh",
    minHeight: '400px',
    top: "0",
    left: "0",
    position: "fixed",
    zIndex: "1000000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    boxSizing: "border-box"
  },
  styleForScreen: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    boxSizing: "border-box",
    zIndex: "999999",
  },
}