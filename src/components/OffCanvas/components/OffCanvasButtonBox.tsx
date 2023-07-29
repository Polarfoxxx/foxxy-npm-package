import React from "react";
import { inside_componentStyleOffCanvas } from "../style";
import { PropsForOffCanvasButtonBox } from "../types";


const OffCanvasButtonBox: React.FC<PropsForOffCanvasButtonBox> = ({ children, variant_style }): JSX.Element => {

  return (
    <div style={{
      ...inside_componentStyleOffCanvas.styleForButtonBoxOffCanvas,
      ...variant_style.styleButton_Box
    }}>
      {children}
    </div>
  );
};


export default OffCanvasButtonBox