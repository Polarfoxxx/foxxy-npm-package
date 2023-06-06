import * as React from "react";
import servicesChangeStyle from "./services";
import { Props } from "./types";

const Button: React.FC<Props> = ({
  onClick,
  text,
  variant,
  type,
  selectorClass,
  border,
  round,
  lg,
  sm
}: Props): JSX.Element => {

  const { styles, defStyle, sizeElement } = servicesChangeStyle.changerStyle({ variant, border, round, lg, sm })

  return (
    <>
      <button
        onClick={onClick}
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