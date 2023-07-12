import { ButtonHTMLAttributes } from "react";
import { CSSProperties } from "react";

export interface TypeButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean",
  border?: boolean,
  round?: boolean,
  lg?: boolean,
  sm?: boolean,
};

export type TypeForStyleFunction = {
  variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean",
  border?: boolean,
  round?: boolean,
  lg?: boolean,
  sm?: boolean
};

export type TypeReturnStyleForElement = {
  masterStyle: CSSProperties,
  variant_style: CSSProperties,
  sizeElement: CSSProperties
};

export type TypeButtonStyle = {
  defStyle: CSSProperties,
  radiusStyle: CSSProperties,
  borderStyle: CSSProperties,
  borderRadiusStyle: CSSProperties,
};

export type TypeForButtonBox = {
  children: JSX.Element | JSX.Element[]
};