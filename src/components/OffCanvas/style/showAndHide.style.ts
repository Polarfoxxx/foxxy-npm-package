import { TypeForShowAndHideStyle } from "../types";

export const styleForOffCanvasComponent_hide: TypeForShowAndHideStyle = {
    styleForBox: {
        left: "-100%",
        transition: "1s"
    },
    styleForScreen: {
        display: "none"
    }
};

export const styleForOffCanvasComponent_show: TypeForShowAndHideStyle = {
    styleForBox: {
        left: "0px",
        transition: "1s"

    },
    styleForScreen: {
        display: "block"
    }
};

