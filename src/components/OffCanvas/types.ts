import { SetStateAction, CSSProperties } from "react";


export type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[],
    variant?: "default" | "white" | "dark",
    position: "left" | "top" | "right",
    show: boolean,
    setShow: React.Dispatch<SetStateAction<boolean>>
};
export type TypeForShowAndHideStyleAndMaster = {
    styleForBox: CSSProperties,
    styleForScreen: CSSProperties
};

export type TypeVariantForOffCanvas = {
    variant?: "default" | "white" | "dark"
};

export type PropsForOffCanvasHeader = {
    textHeader: string
};

export type TypeshowAndHide = {
    styleForOffCanvasComponent_hide: TypeForShowAndHideStyleAndMaster,
    styleForOffCanvasComponent_show: TypeForShowAndHideStyleAndMaster
};

