import React from "react";
import OffCanvasHeader from "./OffCanvasHeader";
import OffCanvasBody from "./OffCanvasBody";
import OffCanvasButoonBox from "./OffCanvasButtonBox";

import { PropsForOffCanvasComponents, TypeForShowAndHideStyleAndMaster } from "../types";
import servicesForChangeVariantForOffCanvas from "../services/services.changeVariant";
import {  master_ShowStyleOffCanvas, allVariantOffCanvas } from "../style";
import servicePositionOffCanvas from "../services/services.position";


const OffCanvas: React.FC<PropsForOffCanvasComponents> = ({
  variant,
  position, 
  children,
  show, 
  setShow }): JSX.Element => {
    
/* deklarace */
    const [showCanvas, setshowCanvas] = React.useState<TypeForShowAndHideStyleAndMaster>(master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_hide);

    /* servis pre meniacu sa variantu */
    let variant_Style: TypeForShowAndHideStyleAndMaster = allVariantOffCanvas.defaultVariantForOffCanvas;
    if (variant) {
        variant_Style = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({ variant })
    };

    /* podmienka zatvarania a ovarania offCanvas */
    React.useEffect(() => {
        if (show) {
            setshowCanvas(servicePositionOffCanvas.positionOffCanvas({position, show}))
        } else { 
            setshowCanvas(servicePositionOffCanvas.positionOffCanvas({position, show})) 
        }
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
                    ...variant_Style.styleForBox,
                    ...showCanvas.styleForBox
                }}>
                {children}
            </div>
            <div
                id="screenBlok"
                onClick={handleClickHideBlock}
                style={{
                    ...variant_Style.styleForScreen,
                    ...showCanvas.styleForScreen
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