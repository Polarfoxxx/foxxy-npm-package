import * as React from "react";
import servicesChangeStyleFromButtons from "../services";
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
  const { styles, defStyle, sizeElement } = servicesChangeStyleFromButtons.changerStyleFromButton({ variant, border, round, lg, sm })

  return (
      <button
        {...props}
        style={{ ...styles, ...defStyle, ...sizeElement }}
      >
        {text}
      </button>
  );
}

export const ButtonComponent = {
  Button,
  ButtonBox
}