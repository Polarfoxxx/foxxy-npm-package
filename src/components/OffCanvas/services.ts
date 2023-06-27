import { TypeForShowAndHideStyleAndMaster,TypeVariantForOffCanvas } from "./types";
import { allVariantOffCanvas } from "./style";

const servicesForChangeVariantForOffCanvas = {
    changeVariantForOffCanvas
};
export default servicesForChangeVariantForOffCanvas;



function changeVariantForOffCanvas({ variant }: TypeVariantForOffCanvas): TypeForShowAndHideStyleAndMaster {

    /* podmienky pre zmeny variant */
    if (variant === "white") {
        return allVariantOffCanvas.whiteVariantForOffCanvas
    } else if (variant === "dark") {
        return allVariantOffCanvas.darkVariantForOffCanvas
    } else if (variant === "default") {
        return allVariantOffCanvas.defaultVariantForOffCanvas
    } else {
        allVariantOffCanvas.defaultVariantForOffCanvas
    };
}