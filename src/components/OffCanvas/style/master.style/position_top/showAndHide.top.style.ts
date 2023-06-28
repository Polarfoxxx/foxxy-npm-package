import { TypeshowAndHide } from "../../../types";
import { styleMasterForOffCanvasComponent_top } from "./master.top.style";


export const showAndHide_top: TypeshowAndHide = {
    styleForOffCanvasComponent_hide: {
        styleForBox: {
            ...styleMasterForOffCanvasComponent_top.styleForBox,
            top: "-100%",
            transition: "1s"
        },
        styleForScreen: {
            display: "none",
        }
    },

    styleForOffCanvasComponent_show: {
        styleForBox: {
            ...styleMasterForOffCanvasComponent_top.styleForBox,
            top: "0px",
            transition: "1s"
        },
        styleForScreen: {
            ...styleMasterForOffCanvasComponent_top.styleForScreen,
            display: "block",
        }
    }
};


