import React from "react";
import { TypeButtonsIntrinsicAttributes } from "../types";
import ButtonBox from "./ButtonsBox";
import "../styles/primaryButton_style.css";
import "../styles/secondaryButton_style.css";
import "../styles/alertButton_style.css";

function Button({
  text,
  variant_btn = "primaryButton",
  withoutBorder = false,
  radiusBorder = false,
  lg = false,
  sm = false,
  customBackGrColor,
  customTextColor,
  ...props }: TypeButtonsIntrinsicAttributes
): JSX.Element {

  const [selectStyleType, setSelectStyleType] = React.useState("");
  const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
    backgroundColor: "",
    color: ""
  });

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
  }, [variant_btn, withoutBorder, radiusBorder, lg, sm]);

  //? useeffect pre custom style
  React.useEffect(() => {
    setCustomStyle({
      backgroundColor: customBackGrColor,
      color: customTextColor
    });
  }, [customBackGrColor, customTextColor]);

  return (
    <button
      style={{ ...customStyle }}
      className={selectStyleType}
      {...props}>
      {text}
    </button>
  );
};

export const ButtonComponent = {
  Button,
  ButtonBox
};