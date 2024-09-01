import { FormHTMLAttributes } from "react"

//? types for only components.........................
export interface TypeForIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children: JSX.Element | JSX.Element[],
    form_name?: string,
    variant_form?: "primaryForm" | "secondaryForm" | "alertForm" | "successForm" | "darkForm" | "nightForm",
    border?: boolean,
    lg?: boolean,
    sm?: boolean,
    custom_background?: string,
    custom_text_color?: string,
    custom_rouded?: string,
    custom_padding?: string,
    custom_width?: string,
    custom_height?: string,
};

//? type for children components.................................
export type ChildProps_child_FormContent = {
    selectStyleType: string;
    form_name: string;
};


