import React, { SetStateAction } from "react";
import { CSSProperties } from "react";
export type PropsForModalComponents = {
    variant?: "default" | "white" | "dark";
    children: JSX.Element | JSX.Element[];
    show: boolean;
    setShow: React.Dispatch<SetStateAction<boolean>>;
};
export type TypeForChangeVariantforModal = {
    variant?: "default" | "white" | "dark";
};
export type TypeForMasterStyle = {
    fullScreen: CSSProperties;
    formBlock: CSSProperties;
};
