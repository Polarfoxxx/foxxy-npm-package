import { TypeForCSS_OffCanvas, TypeVariantForOffCanvas } from "../types";
import { allVariantOffCanvas } from "../style";

const servicesForChangeVariantForOffCanvas = {
    changeVariantForOffCanvas
};
export default servicesForChangeVariantForOffCanvas;


function changeVariantForOffCanvas({ variant_offCnv }: TypeVariantForOffCanvas): TypeForCSS_OffCanvas {

    /* podmienky pre zmeny variant */
    if (variant_offCnv === "white") {
        return allVariantOffCanvas.whiteVariantForOffCanvas
    } else if (variant_offCnv === "dark") {
        return allVariantOffCanvas.darkVariantForOffCanvas
    } else if (variant_offCnv === "default") {
        return allVariantOffCanvas.defaultVariantForOffCanvas
    } else if (variant_offCnv === undefined) {
        return allVariantOffCanvas.defaultVariantForOffCanvas
    } else {
        return allVariantOffCanvas.defaultVariantForOffCanvas
    };
}