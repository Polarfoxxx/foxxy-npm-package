import { TypeForMasterStyle } from "../types";

export const styleForModalComponent_hide: TypeForMasterStyle = {
    fullScreen: {
        display: "none"
    },
    formBlock: {
        top: "-100%",
        transition: "1s"
    }
};

export const styleForModalComponent_show: TypeForMasterStyle = {
    fullScreen: {
        display: "block"
    },
    formBlock: {
        top: "50px",
        transition: "1s"
    },
};

