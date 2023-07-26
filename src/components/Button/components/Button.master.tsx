import React from "react";
import servicesChangeVariantForButtons from "../services/services.changeVariant";
import { TypeButtonsIntrinsicAttributes } from "../types";
import ButtonBox from "./ButtonsBox";

const Button: React.FC<TypeButtonsIntrinsicAttributes> = ({
  text,
  variant_btn,
  border,
  round,
  lg,
  sm,
  ...props
}): JSX.Element => {

  /* servis pre variantu */
  const { variant_style, masterStyle, sizeElement } = servicesChangeVariantForButtons.changeVariantForButtons({ variant_btn, border, round, lg, sm })


  return (
    <button
      {...props}
      style={{ ...variant_style, ...masterStyle, ...sizeElement }}
    >
      {
        text.length > 9 ? "err" : text
      }
    </button>
  );
};

export const ButtonComponent = {
  Button,
  ButtonBox
}