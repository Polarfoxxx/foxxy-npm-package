import { TypeshowAndHide } from "../../../types";
import { styleMasterForOffCanvasComponent_right } from "./master.right.style";


export const showAndHide_right: TypeshowAndHide = {
    styleForOffCanvasComponent_hide: {
        styleForBox: {
            ...styleMasterForOffCanvasComponent_right.styleForBox,
            right: "-100%",
            transition: "1s"
        },
        styleForScreen: {
            ...styleMasterForOffCanvasComponent_right.styleForScreen,
            display: "none",
        }
    },

    styleForOffCanvasComponent_show: {
        styleForBox: {
            ...styleMasterForOffCanvasComponent_right.styleForBox,
            right: "0px",
            transition: "1s"
        },
        styleForScreen: {
            ...styleMasterForOffCanvasComponent_right.styleForScreen,
            display: "block",
        }
    }
};


