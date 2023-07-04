import React from "react";
import servicesChangeVariantForButtons from "../services/services.changeVariant";
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

  /* servis pre variantu */
  const { variant_style, defStyle, sizeElement } = servicesChangeVariantForButtons.changeVariantForButtons({ variant, border, round, lg, sm })

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