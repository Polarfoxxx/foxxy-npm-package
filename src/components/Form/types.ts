import { FormHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react";

//? types for only components.........................
export interface TypeForIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    children: JSX.Element | JSX.Element[],
    form_name?: string,
    variant_form?: "primaryForm" | "secondaryForm" | "alertForm" | "successForm" | "darkForm" | "nightForm",
    form_border?: boolean,
    custom_background_form?: string,
    custom_text_color_form?: string,
    custom_rouded_form?: number,
    custom_padding_form?: number,
    custom_width_form?: string,
    custom_height_form?: string,
    custom_gap_input?: number
};

export type Type_for_formHeader = {
    form_name?: string,
    selectStyleType?:  "primaryForm" | "secondaryForm" | "alertForm" | "successForm" | "darkForm" | "nightForm",
};

export type Type__for_InputsAndLabel =
    InputHTMLAttributes<HTMLInputElement> &
    LabelHTMLAttributes<HTMLLabelElement> & {
        selectStyleType?:  "primaryForm" | "secondaryForm" | "alertForm" | "successForm" | "darkForm" | "nightForm";
        label_name_form?: string;
        text_align_in_Input?: "left" | "center" | "right" | undefined;
        custom_rouded_in_Input?: number;
        text_align_label?: "left" | "center" | "right" | undefined;
        oneBorder_input?: boolean
    };

//? type for children components.................................
export type ChildProps_child_FormContent = {
    selectStyleType: string,
    form_name: string;
};


//? type for variant servis....................................
export type Type_for_formChange_variant = {
    variant_form: string;
    form_border: boolean;
};

export type Type_for_formChange_variantfor_input = {
    selectStyleType:  "primaryForm" | "secondaryForm" | "alertForm" | "successForm" | "darkForm" | "nightForm",
    oneBorder_input: boolean;
};
