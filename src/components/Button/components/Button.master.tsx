import React from "react";
import servicesChangeVariantForButtons from "../services/services.changeVariant";
import { TypeButtonsIntrinsicAttributes } from "../types";
import ButtonBox from "./ButtonsBox";
import { TypeReturnStyleForElement } from "../types";

const Button: React.FC<TypeButtonsIntrinsicAttributes> = ({
  text,
  variant_btn,
  border,
  round,
  lg,
  sm,
  ...props
}): JSX.Element => {

  const [varian_Button, setVarian_Button] = React.useState<TypeReturnStyleForElement>({
    variant_style: {},
    masterStyle: {},
    sizeElement: {}
  });

  /* servis pre variantu */
  React.useEffect(() => {
    setVarian_Button(servicesChangeVariantForButtons.changeVariantForButtons({ variant_btn, border, round, lg, sm }))
  }, [variant_btn, border, round, lg, sm,])


  return (
    <button
      {...props}
      style={{ ...varian_Button.masterStyle, ...varian_Button.variant_style, ...varian_Button.sizeElement }}>
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