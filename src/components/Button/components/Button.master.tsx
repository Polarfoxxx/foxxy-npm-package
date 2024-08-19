import React from "react";
import { TypeButtonsIntrinsicAttributes } from "../types";
import { servicesChangeVariantForButtons } from "../services";
import "../styles/button_root_style.css";
import "../styles/buttonMaster/primaryButton_style.css";
import "../styles/buttonMaster/secondaryButton_style.css";
import "../styles/buttonMaster/alertButton_style.css";
import "../styles/buttonMaster/successButton_style.css";
import "../styles/buttonMaster/nightButton_style.css";
import "../styles/buttonMaster/darkButton_style.css";

function Button({
  text,
  variant_btn = "primaryButton",
  withBorder = false,
  radiusBorder = false,
  lg = false,
  sm = false,
  customBackGrColor,
  customTextColor,
  ...props
}: TypeButtonsIntrinsicAttributes): JSX.Element {

  const [selectStyleType, setSelectStyleType] = React.useState("");
  const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
    backgroundColor: "",
    color: ""
  });

  //? useeffect for style................................
  React.useEffect(() => {
    setSelectStyleType(servicesChangeVariantForButtons.changeVariantForMasterButton({ variant_btn, withBorder, radiusBorder, lg, sm }));
  }, [variant_btn, withBorder, radiusBorder, lg, sm]);

  //? useeffect for custom style.........................
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

export default Button;