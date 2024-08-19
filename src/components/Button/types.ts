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
  numberOfButtons?: number
  layout_Buttonts?: "column" | "row",
  custom_width_buttonBox?: string,
  custom_height_buttonBox?: string,
  custom_gap_Buttons?: string,
  custom_background_Box?: string,
  custom_rounded?: string,
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
  layout_Buttonts? : "column" | "row"
};


