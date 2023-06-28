import { TypeshowAndHide } from "../../../types";
import { styleMasterForOffCanvasComponent_left } from "./master.left.style";

export const showAndHide_Left: TypeshowAndHide = {
    styleForOffCanvasComponent_hide: {
        styleForBox: {
            ...styleMasterForOffCanvasComponent_left.styleForBox,
            left: "-100%",
            transition: "1s"
        },
        styleForScreen: {
            display: "none",
        }
    },

    styleForOffCanvasComponent_show: {
        styleForBox: {
            ...styleMasterForOffCanvasComponent_left.styleForBox,
            left: "0px",
            transition: "1s"
        },
        styleForScreen: {
            ...styleMasterForOffCanvasComponent_left.styleForScreen,
            display: "block",
        }
    }
};


