import React from "react";

export type PropsForDropdownComponents = {
    children: JSX.Element | JSX.Element[],
    drop_text: string
    variant_drop?: "default" | "white" | "dark",
};

export type PropsForDropBoxComponents = {
    children: JSX.Element | JSX.Element[],
    variant_CSS?: TypeVariantStyle_dropdown,

};

export type PropsForDropItemsComponents = {
    href: string,
    name_link: string,
    variant_CSS?: TypeVariantStyle_dropdown,
};

export type TypeShowAndHide_dropdown = {
    dropdown_Show: React.CSSProperties,
    dropdown_Hide: React.CSSProperties,
};

export type TypeServicesShowAndHide = {
    show: boolean
};

export type TypeVariantStyle_dropdown = {
    dropBtn: React.CSSProperties,
    dropdown: React.CSSProperties,
    dropBox: React.CSSProperties,
    dropItem: React.CSSProperties,
};