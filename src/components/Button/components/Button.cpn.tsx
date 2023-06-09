import * as React from "react";
import servicesChangeStyle from "../services";
import { TypeButtonsIntrinsicAttributes } from "../types";

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
  sm
}): JSX.Element => {

  /* servis pre style */
  const { styles, defStyle, sizeElement } = servicesChangeStyle.changerStyle({ variant, border, round, lg, sm })

  return (
    <>
      <button
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ ...styles, ...defStyle, ...sizeElement }}
        type={type}
        className={selectorClass}
      >
        {text}
      </button>
    </>
  );
}

export default Button