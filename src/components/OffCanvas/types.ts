import { SetStateAction, CSSProperties } from "react";


export type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[],
    variant?: "default" | "white" | "dark",
    position: "left" | "top" | "right",
    show: boolean,
    setShow: React.Dispatch<SetStateAction<boolean>>
};

export type TypeForCSS_OffCanvas = {
    styleForBox: CSSProperties,
    styleForScreen: CSSProperties,
    styleHeader?: CSSProperties,
    styleBody?: CSSProperties,
    styleBittonBox?: CSSProperties,
};

export type TypeVariantForOffCanvas = {
    variant?: "default" | "white" | "dark"
};

export type PropsForOffCanvasHeader = {
    children: string
};

export type TypeshowAndHide = {
    styleForOffCanvasComponent_hide: TypeShowAndHideCSS,
    styleForOffCanvasComponent_show: TypeShowAndHideCSS
};

export type PropsForOffCanvasBody = {
    children: string
};


