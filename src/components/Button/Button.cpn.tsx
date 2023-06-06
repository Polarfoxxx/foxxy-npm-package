import * as React from "react";
import servicesChangeStyle from "./services";
import { Props } from "./types";

function Button({
  onClick,
  text,
  variant,
  type,
  selectorClass,
  border,
  radius,
  lg,
  sm
}: Props): JSX.Element {

  const { styles, defStyle, sizeElement } = servicesChangeStyle.changerStyle({ variant, border, radius, lg, sm })

  return (
    <>
      <button
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