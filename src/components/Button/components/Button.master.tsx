import React from "react";
import { TypeButtonsIntrinsicAttributes } from "../types";
import { servicesChangeVariantForButtons } from "../services";
import "@components/global_root.css";
import "../styles/button_root_style.css";
import "../styles/buttonMaster/primaryButton_style.css";
import "../styles/buttonMaster/secondaryButton_style.css";
import "../styles/buttonMaster/alertButton_style.css";
import "../styles/buttonMaster/successButton_style.css";
import "../styles/buttonMaster/nightButton_style.css";
import "../styles/buttonMaster/darkButton_style.css";

function Button({
  button_text,
  variant_btn = "primaryButton",
  withBorder_button = false,
  radiusBorder_button = false,
  lg_button = false,
  sm_button = false,
  customBackGrColor_button,
  customTextColor_button,
  ...props
}: TypeButtonsIntrinsicAttributes): JSX.Element {

  const [selectStyleType, setSelectStyleType] = React.useState("");
  const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
    backgroundColor: "",
    color: ""
  });

  //? useeffect for style................................
  React.useEffect(() => {
    setSelectStyleType(
      servicesChangeVariantForButtons.changeVariantForMasterButton({
        variant_btn,
        withBorder_button,
        radiusBorder_button,
        lg_button,
        sm_button
      })
    );
  }, [variant_btn, withBorder_button, radiusBorder_button, lg_button, sm_button]);

  //? useeffect for custom style.........................
  React.useEffect(() => {
    setCustomStyle({
      backgroundColor: customBackGrColor_button,
      color: customTextColor_button
    });
  }, [customBackGrColor_button, customTextColor_button]);

  return (
    <button
      style={{ ...customStyle }}
      className={selectStyleType}
      {...props}>
      {button_text}
    </button>
  );
};

export default Button;