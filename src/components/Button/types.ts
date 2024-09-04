import { ButtonHTMLAttributes, HTMLAttributes } from "react";


export interface TypeButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  button_text: string,
  variant_btn?: "primaryButton" | "secondaryButton" | "alertButton" | "successButton" | "darkButton" | "nightButton",
  withBorder_button?: boolean,
  radiusBorder_button?: boolean,
  lg_button?: boolean,
  sm_button?: boolean,
  customBackGrColor_button?: string,
  customTextColor_button?: string,
};
export interface TypeForButtonBox extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[],
  buttonBox_variant?: "primaryButtonBox" | "secundaryButtonBox" | "alertButtonBox",
  layout_Buttonts?: "column" | "row",
  custom_width_buttonBox?: string,
  custom_height_buttonBox?: string,
  custom_gap_Buttons?: string,
  custom_background_buttonBox?: string,
  custom_rounded_buttonBox?: string,
};

/* services-------------------------------------------------- */
export type TypeFor_services_Style_buttonMaster = {
  variant_btn?: "primaryButton" | "secondaryButton" | "alertButton" | "successButton" | "darkButton" | "nightButton",
  withBorder_button?: boolean,
  radiusBorder_button?: boolean,
  lg_button?: boolean,
  sm_button?: boolean
};
export type TypeFor_services_Style_buttonBox = {
  buttonBox_variant?: "primaryButtonBox" | "secundaryButtonBox" | "alertButtonBox",
  layout_Buttonts? : "column" | "row"
};


