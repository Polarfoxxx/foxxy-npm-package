import { ButtonHTMLAttributes, HTMLAttributes } from "react";


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
export interface TypeForButtonBox extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[],
  buttonBox_variant?: "primaryButtonBox" | "secundaryButtonBox" | "alertButtonBox",
  width_buttonBox?: string,
  height_buttonBox?: string,
  numberOfButtons?: number
  layout_Buttonts?: "column" | "row",
  gap_Buttons?: string,
  background_Box?: string,
  rounded?: string
};

/* services-------------------------------------------------- */
export type TypeFor_services_Style_buttonMaster = {
  variant_btn?: "primaryButton" | "secondaryButton" | "alertButton" | "successButton" | "darkButton" | "nightButton",
  withBorder?: boolean,
  radiusBorder?: boolean,
  lg?: boolean,
  sm?: boolean
};
export type TypeFor_services_Style_buttonBox = {
  buttonBox_variant?: "primaryButtonBox" | "secundaryButtonBox" | "alertButtonBox",
};


