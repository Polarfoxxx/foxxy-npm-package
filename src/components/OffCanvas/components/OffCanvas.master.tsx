import React from "react";
import OffCanvasHeader from "./OffCanvasHeader";
import OffCanvasBody from "./OffCanvasBody";
import OffCanvasButoonBox from "./OffCanvasButtonBox";
import { PropsForOffCanvasComponents, TypeForCSS_OffCanvas } from "../types";
import servicesForChangeVariantForOffCanvas from "../services/services.changeVariant";
import { master_ShowStyleOffCanvas } from "../style";
import servicePositionOffCanvas from "../services/services.position";
import { allVariantOffCanvas } from "../style";

const OffCanvas: React.FC<PropsForOffCanvasComponents> = ({
    variant_offCnv,
    position,
    children,
    show,
    setShow }): JSX.Element => {

    /* deklaracia */
    const [showCanvas, setshowCanvas] = React.useState<TypeForCSS_OffCanvas>(master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_hide);
    const [variant_style, setVariant_style] = React.useState<TypeForCSS_OffCanvas>(allVariantOffCanvas.defaultVariantForOffCanvas)


    /* podmienka zatvarania a ovarania offCanvas a zmena varianty */
    React.useEffect(() => {
        /* servis pre zmenu varianty */
        setVariant_style(servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({ variant_offCnv }));

        if (show) {
            setshowCanvas(servicePositionOffCanvas.positionOffCanvas({ position, show }))
        } else {
            setshowCanvas(servicePositionOffCanvas.positionOffCanvas({ position, show }))
        }
    }, [show, variant_offCnv]);

    /* zatvaranie offCanvas mimo form*/
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
                    ...variant_style.styleForBox,
                    ...showCanvas.styleForBox
                }}>
                {
                    React.Children.map(children, (child: React.ReactElement<any>) => {
                        return React.cloneElement(child, { variant_style });
                    })
                }
            </div>
            <div
                id="screenBlok"
                onClick={handleClickHideBlock}
                style={{
                    ...variant_style.styleForScreen,
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

