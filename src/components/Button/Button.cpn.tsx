import * as React from "react";
import servicesChangeStyle from "./services";
import { Props } from "./types";


function Button({ text, variant, type, selectorClass, border, radius, lg, md, sm }: Props): JSX.Element {

  const { styles, defStyle } = servicesChangeStyle.changerStyle({variant, border, radius, lg, md, sm})

  return (
    <>
      <button
        style={{ ...styles, ...defStyle }}
        type={type}
        className={selectorClass}

      >
        {text}
      </button>
    </>
  );
}

export default Button