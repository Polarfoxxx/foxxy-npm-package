import React from "react";
import { CSSProperties } from "react";
import { TypeForMasterStyle } from "../types";
import servicesChangeVariantForModal from "../services";
import { PropsForModalComponents } from "../types";
import { styleMasterForModalComponent } from "../style/master.style";
import { styleForModalComponent_hide, styleForModalComponent_show } from "../style/showAndHide.style";
import { allvariantsForModal } from "../style";

const Modal: React.FC<PropsForModalComponents> = ({ variant, children, show, setShow }): JSX.Element => {
  const [showStyle, setShowStyle] = React.useState<TypeForMasterStyle>(styleForModalComponent_hide);

  /* servis meniaci variantu */
  let variant_Style: CSSProperties = allvariantsForModal.defaultStyleForModal
  if (variant) {
    variant_Style = servicesChangeVariantForModal.changeVariantForModal({ variant })
  };

  /* zatvaranie otvarianie */
  React.useEffect(() => {
    if (show) {
      setShowStyle(styleForModalComponent_show)
    } else {
      setShowStyle(styleForModalComponent_hide)
    };
  }, [show]);

  /* zatvaranie modalu */
  const handleClickHideModal = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLElement;
    const targetId = target.id;
    targetId === "modalScreen" && setShow(false)
  };


  return (
    <>
      <div
        onClick={handleClickHideModal}
        id="modalScreen"
        style={{
          ...styleMasterForModalComponent.fullScreen, ...showStyle.fullScreen,
          ...variant_Style
        }}>
      </div>
      <div
        id='modalForm'
        style={{
          ...styleMasterForModalComponent.formBlock,
          ...showStyle.formBlock,
          ...variant_Style
        }}>
        {children}
      </div>
    </>
  )
};


export const ModalComponent = {
  Modal
};