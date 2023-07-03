import React from "react";
import servicesChangeStyleFromButtons from "../services/services";
import { TypeButtonsIntrinsicAttributes } from "../types";
import ButtonBox from "./ButtonsBox";

const Button: React.FC<TypeButtonsIntrinsicAttributes> = ({
  text,
  variant,
  border,
  round,
  lg,
  sm,
  ...props
}): JSX.Element => {

  /* servis pre style */
  const { variant_style, defStyle, sizeElement } = servicesChangeStyleFromButtons.changerStyleForButton({ variant, border, round, lg, sm })

  return (
      <button
        {...props}
        style={{ ...variant_style, ...defStyle, ...sizeElement }}
      >
        {text}
      </button>
  );
};

export const ButtonComponent = {
  Button,
  ButtonBox
}