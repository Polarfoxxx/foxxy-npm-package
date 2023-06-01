import * as React from "react";
import CSS from 'csstype';


type Props = {
  children: string,
  variant?: string
}
type TypeButtonStyle = {
  whiteStyle: {},
  dark: {},
}




function Button({ children, variant }: Props) {
  const [ sumg, setSumg ] = React.useState<CSS.Properties>({})
  let styles: CSS.Properties = {}


  const buttonStyle: TypeButtonStyle = {
    whiteStyle: {
      background: "white",
      width: "10wv",
      height: "4vw"
    },
    dark: {
      background: "black",
      width: "10wv",
      height: "4vw"
    },
  }


  if (variant === "white") {
    setSumg(buttonStyle.whiteStyle)
  }else if(variant === "dark") {
    styles = buttonStyle.dark
  }


  return (
    <>
      <button style={sumg}>
        {children}
      </button>
    </>
  );
}

export default Button