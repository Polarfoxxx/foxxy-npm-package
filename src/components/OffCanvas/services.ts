import { TypeForShowAndHideStyleAndMaster,TypeVariantForOffCanvas } from "./types";
import { AllVariantOffCanvas } from "./style";

const servicesForChangeVariantForOffCanvas = {
    changeVariantForOffCanvas
};
export default servicesForChangeVariantForOffCanvas;



function changeVariantForOffCanvas({ variant }: TypeVariantForOffCanvas): TypeForShowAndHideStyleAndMaster {

    /* podmienky pre zmeny variant */
    if (variant === "white") {
        return AllVariantOffCanvas.whiteVariantForOffCanvas
    } else if (variant === "dark") {
        return AllVariantOffCanvas.darkVariantForOffCanvas
    } else if (variant === "default") {
        return AllVariantOffCanvas.defaultVariantForOffCanvas
    } else {
        AllVariantOffCanvas.defaultVariantForOffCanvas
    };
}