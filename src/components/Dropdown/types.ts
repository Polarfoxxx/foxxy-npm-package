import React from "react";

//? types for only components.........................
export type PropsForDropdownComponents = {
    children: JSX.Element | JSX.Element[],
    drop_text: string
    variant_dropdown?: "primaryDropdown" | "secondaryDropdown" | "alertDropdown",
    lg?: boolean,
    sm?: boolean,
    dropCount?: number
    custom_background_color_dropdown?: string
};

export type PropsForDropBoxComponents = {
    children: JSX.Element | JSX.Element[],
    selectStyleType?: string,
    show?: boolean
};

export type PropsForDropItemsComponents = {
    href: string,
    name_link: string,
    selectStyleType?: string,
};

//? type for services.................................
export type Type_for_DropdownChangeVariant_services = {
    variant_dropdown: string,
    lg: boolean
    sm: boolean
};

export type TypeVariantStyle_dropdown = {
    dropBtn: React.CSSProperties,
    dropdown: React.CSSProperties,
    dropBox: React.CSSProperties,
    dropItem: React.CSSProperties,
};