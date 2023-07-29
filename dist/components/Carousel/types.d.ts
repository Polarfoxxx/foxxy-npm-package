import React, { CSSProperties } from "react";
import { ButtonHTMLAttributes } from "react";
export type PropsForCarouselComponents = {
    children: JSX.Element | JSX.Element[];
    variant_crs?: "default" | "white" | "dark";
};
export type TypeFromChangeVariantForCarousel = {
    variant_crs?: string;
};
export type PropsForCarouselButtonBox = {
    variantFromCarousel?: TypeVariantForCarouselAndButton;
    handleClickChangeMovementIndex: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export type TypeVariantForCarouselAndButton = {
    varCarousel: CSSProperties;
    varButtons: CSSProperties;
};
export type PropsForCarouselBox = {
    children: JSX.Element | JSX.Element[];
    variantFromCarousel?: TypeVariantForCarouselAndButton;
};
export interface TypeCarouselButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    variantFromCarousel?: TypeVariantForCarouselAndButton;
    position: "<" | ">";
    className: string;
}
export type PropsForCarouselItem = {
    children: JSX.Element | JSX.Element[];
};
