import React from "react";
import { TypeButtonsIntrinsicAttributes } from "../types";
import { servicesChangeVariantForButtons } from "../services";
import ButtonBox from "./ButtonsBox";
import "../styles/root_style.css";
import "../styles/primaryButton_style.css";
import "../styles/secondaryButton_style.css";
import "../styles/alertButton_style.css";
import "../styles/successButton_style.css";
import "../styles/nightButton_style.css";
import "../styles/darkButton_style.css";

function Button({
  text,
  variant_btn = "primaryButton",
  withBorder = false,
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

  //? useeffect pre style................................
  React.useEffect(() => {
    setSelectStyleType(servicesChangeVariantForButtons.changeVariantForButtons({ variant_btn, withBorder, radiusBorder, lg, sm }));
  }, [variant_btn, withBorder, radiusBorder, lg, sm]);

  //? useeffect pre custom style.........................
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

export default {
  Button,
  ButtonBox
};