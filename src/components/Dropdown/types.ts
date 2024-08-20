import React from "react";

//? types for only components.........................
export type PropsForDropdownComponents = {
    children: JSX.Element | JSX.Element[],
    dropdown_name: string
    variant_dropdown?: "primaryDropdown" | "secondaryDropdown" | "alertDropdown",
    lg?: boolean,
    sm?: boolean,
    border?: boolean,
    dropCount?: number,
    custom_background_color_dropdown?: string,
    custom_showAndHidden_time?: number,
    custom_rouded?:string,
    custom_textColor_for_dropdown?: string
};

export type PropsForDropBoxComponents = {
    children: JSX.Element | JSX.Element[],
    selectStyleType?: string,
    show?: boolean,
    custom_showAndHidden_time?: number,
};

export type PropsForDropItemsComponents = {
    href: string,
    name_link: string,
    selectStyleType?: string,
    custom_textColor_forItem? : string
};

//? type for children components.................................
export type  ChildProps_child_dropdownContent = {
    selectStyleType: string;
    show: boolean;
    custom_showAndHidden_time: number;
};

export type  ChildProps_child_dropdownItems = {
    selectStyleType: string;
};


//? type for services.................................
export type Type_for_DropdownChangeVariant_services = {
    variant_dropdown: string,
    lg: boolean,
    sm: boolean,
    border: boolean
};

export type TypeVariantStyle_dropdown = {
    dropBtn: React.CSSProperties,
    dropdown: React.CSSProperties,
    dropBox: React.CSSProperties,
    dropItem: React.CSSProperties,
};