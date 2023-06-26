import React from "react";
import { visibleStyleForModal } from "../style/master.style";
import { hideStyleForModal } from "../style/master.style";
import servicesChangeVariantForModal from "../services";
import { CSSProperties } from "react";
import { TypeFromMasterStyle } from "../style/master.style";
import { PropsForModalComponents } from "../types";


const Modal: React.FC < PropsForModalComponents > = ({ variant, children, show }): JSX.Element => {
  const [showStyle, setShowStyle] = React.useState < TypeFromMasterStyle > (hideStyleForModal)


  /* servis meniaci variantu */
  const variantStyle: CSSProperties = servicesChangeVariantForModal.changeVariantForModal({ variant });

  React.useEffect(() => {
    if (display) {
      setShowStyle(visibleStyleForModal)
    } else {
      setShowStyle(hideStyleForModal)
    }
  }, [show])



  return (
    <>
            <div id="modalFullBlock" style={{ ...showStyle.fullScreen, ...variantStyle }}>
            </div>
              <div style={{ ...showStyle.formBlock }}>
                {children}
              </div>
        </>
  )
};


export const ModalComponent = {
  Modal
};