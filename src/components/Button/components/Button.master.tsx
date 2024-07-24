import React from "react";
import servicesChangeVariantForButtons from "../services/services.changeVariant";
import { TypeButtonsIntrinsicAttributes } from "../types";
import ButtonBox from "./ButtonsBox";
import { TypeReturnStyleForElement } from "../types";
import "../styles/variant/primaryButton_style.css";
import "../styles/variant/secondaryButton_style.css";
import "../styles/variant/alertButton_style.css";

function Button({
  text,
  variant_btn = "primaryButton",
  withoutBorder,
  radiusBorder,
  lg,
  sm,
  ...props }: TypeButtonsIntrinsicAttributes
): JSX.Element {

  const [selectStyleType, setSelectStyleType] = React.useState("");

  React.useEffect(() => {
    let variant_Style_className: string = "";
    //? Podmienka pre veľkosť (lg alebo sm)
    if (lg) {
      variant_Style_className = `${variant_btn} lg`;
    } else if (sm) {
      variant_Style_className = `${variant_btn} sm`;
    } else {
      variant_Style_className = `${variant_btn} medium`;
    };
    //? Podmienka pre border
    if (withoutBorder) {
      variant_Style_className = `${variant_Style_className} border`;
    }
    //? Podmienka pre zaoblený border
    if (radiusBorder) {
      variant_Style_className = `${variant_Style_className} round`;
    };

    setSelectStyleType(variant_Style_className);
  }, [variant_btn, withoutBorder, radiusBorder, lg, sm])


  return (
    <button
      className={selectStyleType}
      {...props}>
      {text}
    </button>
  );
};

export const ButtonComponent = {
  Button,
  ButtonBox
}