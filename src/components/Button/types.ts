import { ButtonHTMLAttributes } from "react";
import { CSSProperties } from "react";

export interface TypeButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  variant_btn?: "primaryButton" | "secondaryButton" | "alertButton" | "successButton" | "darkButton" | "nightButton",
  withBorder?: boolean,
  radiusBorder?: boolean,
  lg?: boolean,
  sm?: boolean,
  customBackGrColor?: string,
  customTextColor?: string,
};

export type TypeForStyleFunction = {
  variant_btn?: "primaryButton" | "secondaryButton" | "alertButton" | "successButton" | "darkButton" | "nightButton",
  withBorder?: boolean,
  radiusBorder?: boolean,
  lg?: boolean,
  sm?: boolean
};


export type TypeForButtonBox = {
  children: JSX.Element | JSX.Element[]
};