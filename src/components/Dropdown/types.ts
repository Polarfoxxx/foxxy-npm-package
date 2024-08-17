import React from "react";

//? types for only components.........................
export type PropsForDropdownComponents = {
    children: JSX.Element | JSX.Element[],
    drop_text: string
    variant_drop?: "primary" | "secondary" | "alert",
    lg?: boolean,
    sm?: boolean,
    dropCount?: number
};

export type PropsForDropBoxComponents = {
    children: JSX.Element | JSX.Element[],
    selectStyleType?: string,

};

export type PropsForDropItemsComponents = {
    href: string,
    name_link: string,
    selectStyleType?: string,
};

//? type for services.................................
export type Type_for_DropdownChangeVariant_services = {
    variant_drop: string,
    lg: boolean
    sm: boolean
};

export type TypeVariantStyle_dropdown = {
    dropBtn: React.CSSProperties,
    dropdown: React.CSSProperties,
    dropBox: React.CSSProperties,
    dropItem: React.CSSProperties,
};