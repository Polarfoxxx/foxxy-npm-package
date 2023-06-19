import * as React from "react";
import servicesChangeStyleFromButtons from "../services";
import { TypeButtonsIntrinsicAttributes } from "../types";
import ButtonBox from "./ButtonsBox";

const Button: React.FC<TypeButtonsIntrinsicAttributes> = ({
  onClick,
  onDoubleClick,
  onMouseEnter,
  onMouseLeave,
  text,
  variant,
  type,
  selectorClass,
  border,
  round,
  lg,
  sm,
  ref
}): JSX.Element => {

  /* servis pre style */
  const { styles, defStyle, sizeElement } = servicesChangeStyleFromButtons.changerStyleFromButton({ variant, border, round, lg, sm })

  return (
      <button
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ ...styles, ...defStyle, ...sizeElement }}
        type={type}
        className={selectorClass}
        ref={ref}
      >
        {text}
      </button>
  );
}

export const ButtonComponent = {
  Button,
  ButtonBox
}