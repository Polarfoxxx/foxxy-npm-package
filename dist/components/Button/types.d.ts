export type Props = {
    text: string;
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean";
    type?: "button" | "submit" | "reset";
    selectorClass?: string;
    border?: boolean;
    radius?: boolean;
    lg?: boolean;
    md?: boolean;
    sm?: boolean;
};
export type TypeForStyleFunction = {
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean";
    border?: boolean;
    radius?: boolean;
    lg?: boolean;
    md?: boolean;
    sm?: boolean;
};
export type TypeReturnStyleForElement = {
    defStyle: {};
    styles: {};
};
