import * as React from "react";
import servicesChangeStyle from "./services";

type Props = {
  text: string,
  variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean",
  type?: "button" | "submit" | "reset",
  selector?: string,
  border?: boolean
}



function Button({ text, variant, type, selector, border }: Props) {
  const { styles, defStyle } = servicesChangeStyle.changerStyle(variant, border)

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