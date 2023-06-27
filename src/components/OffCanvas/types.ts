import { SetStateAction, CSSProperties } from "react";



export type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[],
    variant?: "default" | "white" | "dark",
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