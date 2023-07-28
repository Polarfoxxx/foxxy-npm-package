import React from "react";
import servicesChangeVariantForModal from "../services/services.changeVariant";
import { allMasterStyleForModal } from "../style";
import { styleForModalComponent_hide, styleForModalComponent_show } from "../style/master.variant/showAndHide.style";
import { TypeForMasterStyle, PropsForModalComponents } from "../types";
import { allvariantsForModal } from "../style";

const Modal: React.FC<PropsForModalComponents> = ({ variant_mdl, children, show, setShow }): JSX.Element => {
  const [showStyle, setShowStyle] = React.useState<TypeForMasterStyle>(styleForModalComponent_hide);
  const [variant_style, setSetVariant_style] = React.useState<React.CSSProperties>(allvariantsForModal.defaultStyleForModal)


  /* zatvaranie otvarianie */
  React.useEffect(() => {
    /* servis meniaci variantu */
    setSetVariant_style(servicesChangeVariantForModal.changeVariantForModal({ variant_mdl }))

    if (show) {
      setShowStyle(styleForModalComponent_show)
    } else {
      setShowStyle(styleForModalComponent_hide)
    };
  }, [show, variant_mdl]);

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
          ...allMasterStyleForModal.styleMasterForModalComponent.fullScreen, ...showStyle.fullScreen,
          ...variant_style
        }}>
      </div>
      <div
        id='modalForm'
        style={{
          ...allMasterStyleForModal.styleMasterForModalComponent.formBlock,
          ...showStyle.formBlock,
        }}>
        {children}
      </div>
    </>
  )
};


export const ModalComponent = {
  Modal
};