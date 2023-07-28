import { SetStateAction, CSSProperties } from "react";


export type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[],
    variant_offCnv?: "default" | "white" | "dark",
    position: "left" | "top" | "right",
    show: boolean,
    setShow: React.Dispatch<SetStateAction<boolean>>
};

export type TypeForCSS_OffCanvas = {
    styleForBox: CSSProperties,
    styleForScreen: CSSProperties,
    styleHeader?: CSSProperties,
    styleBody?: CSSProperties,
    styleButton_Box?: CSSProperties,
};

export type TypeVariantForOffCanvas = {
    variant_offCnv?: "default" | "white" | "dark"
};

export type TypeshowAndHide = {
    styleForOffCanvasComponent_hide: TypeForCSS_OffCanvas,
    styleForOffCanvasComponent_show: TypeForCSS_OffCanvas
};

export type TypeForPositionServices = {
    position: string,
    show: boolean
}; 

export type PropsForOffCanvasHeader = {
    children: string,
    variant_Style?: TypeForCSS_OffCanvas
};

export type PropsForOffCanvasBody = {
    children: string,
    variant_Style?: TypeForCSS_OffCanvas
};

export type PropsForOffCanvasButtonBox = {
    children: JSX.Element | JSX.Element[],
    variant_Style?: TypeForCSS_OffCanvas
};
