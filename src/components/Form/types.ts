import { string } from "prop-types";
import { FormHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react";

//? types for only components.........................
export interface TypeForIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children: JSX.Element | JSX.Element[],
    form_name?: string,
    variant_form?: "primaryForm" | "secondaryForm" | "alertForm" | "successForm" | "darkForm" | "nightForm",
    form_border?: boolean,
    custom_background_form?: string,
    custom_text_color_form?: string,
    custom_rouded_form?: string,
    custom_padding_form?: string,
    custom_width_form?: string,
    custom_height_form?: string,
};

export type Type_for_formHeader = {
    form_name?: string,
    selectStyleType?: string
};

export type Type__for_InputsAndLabel =
    InputHTMLAttributes<HTMLInputElement> &
    LabelHTMLAttributes<HTMLLabelElement> & {
        selectStyleType?: string;
        label_name_form?: string
    };

//? type for children components.................................
export type ChildProps_child_FormContent = {
    selectStyleType: string;
    form_name: string;
};


//? type for variant servis....................................
export type Type_for_formChange_variant = {
    variant_form: string;
    form_border: boolean;
};
