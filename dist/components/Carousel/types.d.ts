import { CSSProperties } from "react";
import { ButtonHTMLAttributes } from "react";
export type TypeFromChangeVariantForCarousel = {
    variant?: string;
};
export type PropsForCarouselButtonBox = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variantFromCarousel?: TypeVariantForCarouselAndButton;
};
export type TypeVariantForCarouselAndButton = {
    varCarousel: CSSProperties;
    varButtons: CSSProperties;
};
export type PropsForCarouselComponents = {
    children: React.ReactElement<any>[];
    variant?: "default" | "ocean" | "dark";
};
export type PropsForCarouselBox = {
    children: JSX.Element | JSX.Element[];
    index: number;
};
export interface TypeCarouselButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    variantFromCarousel?: TypeVariantForCarouselAndButton;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    position: "<" | ">";
    className: string;
}
export type PropsForCarouselItem = {
    children: JSX.Element | JSX.Element[];
};
