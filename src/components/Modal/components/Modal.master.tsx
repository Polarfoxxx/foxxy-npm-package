import React from "react";
import { visibleStyleForModal } from "../style/master.style";
import { hideStyleForModal } from "../style/master.style";
import servicesChangeVariantForModal from "../services";
import { CSSProperties } from "react";
import { TypeFromMasterStyle } from "../style/master.style";
import { PropsForModalComponents } from "../types";


const Modal: React.FC < PropsForModalComponents > = ({ variant, children, show, setShow }): JSX.Element => {
  const [showStyle, setShowStyle] = React.useState < TypeFromMasterStyle > (hideStyleForModal)

  /* servis meniaci variantu */
  const variantStyle: CSSProperties = servicesChangeVariantForModal.changeVariantForModal({ variant });

  React.useEffect(() => {
    if (display) {
      setShowStyle(visibleStyleForModal)
    } else {
      setShowStyle(hideStyleForModal)
    };
  }, [show])

const handleClickv = (event: React.MouseEvent<HTMLDivElement>): void => {
  const target = event.target as HTMLElement;
  const targetId = target.id;
  targetId === "modalScreen" && setShow(false)
}


  return (
    <>
            <div
            onClick={handleClick} 
            id="modalScreen" 
            style={{ ...showStyle.fullScreen, ...variantStyle }}>
            </div>
              <div 
              id = 'modalForm'
              style={{ ...showStyle.formBlock }}>
                {children}
              </div>
        </>
  )
};


export const ModalComponent = {
  Modal
};