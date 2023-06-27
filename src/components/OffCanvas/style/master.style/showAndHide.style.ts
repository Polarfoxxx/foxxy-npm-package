import { TypeForShowAndHideStyleAndMaster } from "../../types";

export const styleForOffCanvasComponent_hide: TypeForShowAndHideStyleAndMaster = {
    styleForBox: {
        left: "-100%",
        transition: "1s"
    },
    styleForScreen: {
        display: "none"
    }
};

export const styleForOffCanvasComponent_show: TypeForShowAndHideStyleAndMaster = {
    styleForBox: {
        left: "0px",
        transition: "1s"
    },
    styleForScreen: {
        display: "block"
    }
};

