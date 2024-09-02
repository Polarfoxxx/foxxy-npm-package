import { string } from "prop-types";
import { FormHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react";

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

export type Type_for_formHeader = {
    form_name?: string,
    selectStyleType: string
};

export type Type__for_InputsAndLabel =
    InputHTMLAttributes<HTMLInputElement> &
    LabelHTMLAttributes<HTMLLabelElement> & {
        selectStyleType: string;
        label_name: string
    };

//? type for children components.................................
export type ChildProps_child_FormContent = {
    selectStyleType: string;
    form_name: string;
};


//? type for variant servis....................................
export type Type_for_formChange_variant = {
    variant_form: string;
    border: boolean;
    lg: boolean;
    sm: boolean;
};
