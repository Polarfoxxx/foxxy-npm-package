import * as React from "react";
import servicesChangeStyle from "./services";
import { Props } from "./types";


function Button({ text, variant, type, selector, border }: Props) {
  const { styles, defStyle } = servicesChangeStyle.changerStyle({variant}, border)

  return (
    <>
      <button 
          style={{...styles, ...defStyle}} 
          type={type} 
          className={selector}
          
        >
          {text}
      </button>
    </>
  );
}

export default Button