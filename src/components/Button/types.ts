import React, { ButtonHTMLAttributes } from "react";

export interface TypeButtonsIntrinsicAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  onDoubleClick?: React.MouseEventHandler<HTMLButtonElement>,
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>,
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>,
  text: string,
  variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean",
  type?: "button" | "submit" | "reset",
  selectorClass?: string,
  border?: boolean,
  round?: boolean,
  lg?: boolean,
  sm?: boolean
};

export type TypeForStyleFunction = {
  variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean",
  border?: boolean,
  round?: boolean,
  lg?: boolean,
  sm?: boolean
};

export type TypeReturnStyleForElement = {
  defStyle: {},
  styles: {},
  sizeElement: {}
};

export type TypeButtonStyle = {
  defStyle: {},
  radiusStyle: {},
  borderStyle: {},
  borderRadiusStyle: {},
};
