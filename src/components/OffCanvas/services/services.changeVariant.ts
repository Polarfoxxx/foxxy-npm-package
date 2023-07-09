import { TypeForCSS_OffCanvas, TypeVariantForOffCanvas } from "../types";
import { allVariantOffCanvas } from "../style";

const servicesForChangeVariantForOffCanvas = {
    changeVariantForOffCanvas
};
export default servicesForChangeVariantForOffCanvas;


function changeVariantForOffCanvas({ variant }: TypeVariantForOffCanvas): TypeForCSS_OffCanvas {

    /* podmienky pre zmeny variant */
    if (variant === "white") {
        return allVariantOffCanvas.whiteVariantForOffCanvas
    } else if (variant === "dark") {
        return allVariantOffCanvas.darkVariantForOffCanvas
    } else if (variant === "default") {
        return allVariantOffCanvas.defaultVariantForOffCanvas
    } else if (variant === undefined) {
        return allVariantOffCanvas.defaultVariantForOffCanvas
    } else {
        return allVariantOffCanvas.defaultVariantForOffCanvas
    };
}