import { ButtonHTMLAttributes } from "react";
export interface TypeButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean";
    border?: boolean;
    round?: boolean;
    lg?: boolean;
    sm?: boolean;
}
export type TypeForStyleFunction = {
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean";
    border?: boolean;
    round?: boolean;
    lg?: boolean;
    sm?: boolean;
};
export type TypeReturnStyleForElement = {
    masterStyle: {};
    variant_style: {};
    sizeElement: {};
};
export type TypeButtonStyle = {
    defStyle: {};
    radiusStyle: {};
    borderStyle: {};
    borderRadiusStyle: {};
};
export type TypeForButtonBox = {
    children: JSX.Element | JSX.Element[];
};
