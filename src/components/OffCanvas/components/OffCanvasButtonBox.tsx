import React from "react";
import { inside_componentStyleOffCanvas } from "../style";

type PropsForOffCanvasButtonBox = {
  children: JSX.Element | JSX.Element[],
}


const OffCanvasButtonBox: React.FC < PropsForOffCanvasButtonBox > = ({ children }): JSX.Element => {
  
  
  return (
    <div style={{...inside_componentStyleOffCanvas.styleForButtonBox}}>
            {children}
        </div>
  );
};


export default OffCanvasButtonBox