import React from "react";
import { masterStyleOffCanvas } from "../style";

type PropsForOffCanvasButtonBox = {
  children: JSX.Element | JSX.Element[],
}


const OffCanvasButtonBox: React.FC < PropsForOffCanvasButtonBox > = ({ children }): JSX.Element => {
  
  
  return (
    <div style={{...masterStyleOffCanvas.styleForButtonBoxOffCanvas}}>
            {children}
        </div>
  );
};


export default OffCanvasHeader