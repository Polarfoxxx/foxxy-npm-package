/// <reference types="react" />
export type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean";
    type?: "button" | "submit" | "reset";
    selectorClass?: string;
    border?: boolean;
    radius?: boolean;
    lg?: boolean;
    sm?: boolean;
};
export type TypeForStyleFunction = {
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean";
    border?: boolean;
    radius?: boolean;
    lg?: boolean;
    sm?: boolean;
};
export type TypeReturnStyleForElement = {
    defStyle: {};
    styles: {};
    sizeElement: {};
};
export type TypeButtonStyle = {
    defStyle: {};
    radiusStyle: {};
    borderStyle: {};
    borderRadiusStyle: {};
};
