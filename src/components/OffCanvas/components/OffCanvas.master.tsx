import React from "react";
import OffCanvasHeader from "./OffCanvasHeader";
import OffCanvasBody from "./OffCanvasBody";
import OffCanvasButoonBox from "./OffCanvasButtonBox";

import { PropsForOffCanvasComponents, TypeForShowAndHideStyleAndMaster } from "../types";
import servicesForChangeVariantForOffCanvas from "../services";
import { masterStyleOffCanvas, allVariantOffCanvas } from "../style";


const OffCanvas: React.FC<PropsForOffCanvasComponents> = ({
  variant,
  position, 
  children,
  show, 
  setShow }): JSX.Element => {
    
    /* zobarozovanie offCanvas */
    const [displayOffCanvas, setDisplayOffCanvas] = React.useState<TypeForShowAndHideStyleAndMaster>(masterStyleOffCanvas.styleForOffCanvasComponent_hide)

    /* servis pre meniacu sa variantu */
    let variant_Style: TypeForShowAndHideStyleAndMaster = allVariantOffCanvas.defaultVariantForOffCanvas;
    if (variant) {
        variant_Style = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({ variant })
    };

    /* podmienka zatvarania a ovarania offCanvas */
    React.useEffect(() => {
        if (show) {
            setDisplayOffCanvas(servicePositionOffCanvas.positionOffCanvas({position}))
        } else { setDisplayOffCanvas(masterStyleOffCanvas.styleForOffCanvasComponent_hide) }
    }, [show]);

    /* zatvaranie offCanvas */
    const handleClickHideBlock = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLDivElement;
        const eventId = target.id;
        eventId === "screenBlok" && setShow(false)
    };


    return (
        <>
            <div
                id="offCanvasBlock"
                style={{
                    ...masterStyleOffCanvas.styleMasterForOffCanvasComponent.styleForBox,
                    ...variant_Style.styleForBox,
                    ...displayOffCanvas.styleForBox
                }}>
                {children}
            </div>
            <div
                id="screenBlok"
                onClick={handleClickHideBlock}
                style={{
                    ...masterStyleOffCanvas.styleMasterForOffCanvasComponent.styleForScreen,
                    ...variant_Style.styleForScreen,
                    ...displayOffCanvas.styleForScreen
                }} >
            </div>
        </>
    );
};


export const OffCanvasComponent = {
    OffCanvas,
    OffCanvasHeader,
    OffCanvasBody,
    OffCanvasButoonBox
};