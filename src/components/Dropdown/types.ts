import React from "react";

export type PropsForDropdownComponents = {
    children: JSX.Element | JSX.Element[],
    drop_text: string
    variant_drop?: "default" | "white" | "dark",
};

export type PropsForDropBoxComponents = {
    children: JSX.Element | JSX.Element[],
};

export type PropsForDropItemsComponents = {
    href: string,
    name_link: string
};

export type TypeShowAndHide_dropdown = {
    dropdown_Show: React.CSSProperties,
    dropdown_Hide: React.CSSProperties,
};

export type TypeServicesShowAndHide = {
    show: boolean
};

export type TypeVariantStyle_dropdown = {
    dropdown: React.CSSProperties,
    dropBox: React.CSSProperties,
    dropItem: React.CSSProperties,
};