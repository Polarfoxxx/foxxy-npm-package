import React from "react";
import OffCanvasHeader from "./OffCanvasHeader";
import OffCanvasBody from "./OffCanvasBody";
import { PropsForOffCanvasComponents, TypeForShowAndHideStyleAndMaster } from "../types";
import { styleMasterForOffCanvasComponent } from "../style/mastrer.style";
import servicesForChangeVariantForOffCanvas from "../services";
import { styleForOffCanvasComponent_hide, styleForOffCanvasComponent_show } from "../style/showAndHide.style";
import { AllVariantOffCanvas } from "../style";


const OffCanvas: React.FC<PropsForOffCanvasComponents> = ({ variant, children, show, setShow }): JSX.Element => {
    /* zobarozovanie offCanvas */
    const [displayOffCanvas, setDisplayOffCanvas] = React.useState<TypeForShowAndHideStyleAndMaster>(styleForOffCanvasComponent_hide)

    /* servis pre meniacu sa variantu */
    let variant_Style: TypeForShowAndHideStyleAndMaster = AllVariantOffCanvas.defaultVariantForOffCanvas;
    if (variant) {
        variant_Style = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({ variant })
    };

    /* podmienka zatvarania a ovarania offCanvas */
    React.useEffect(() => {
        if (show) {
            setDisplayOffCanvas(styleForOffCanvasComponent_show)
        } else { setDisplayOffCanvas(styleForOffCanvasComponent_hide) }
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
                    ...styleMasterForOffCanvasComponent.styleForBox,
                    ...variant_Style.styleForBox,
                    ...displayOffCanvas.styleForBox
                }}>
                {children}
            </div>
            <div
                id="screenBlok"
                onClick={handleClickHideBlock}
                style={{
                    ...styleMasterForOffCanvasComponent.styleForScreen,
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
    OffCanvasBody
};