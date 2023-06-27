/* export varant style */
import { defaultVariantForOffCanvas } from "./variant.style/defaultVarient.style";
import { darkVariantForOffCanvas } from "./variant.style/darkVariant.style";
import { whiteVariantForOffCanvas } from "./variant.style/whiteVariant.style";

export const allVariantOffCanvas = {
    defaultVariantForOffCanvas,
    darkVariantForOffCanvas,
    whiteVariantForOffCanvas
};


/* export master style */
import { styleMasterForOffCanvasComponent } from "./master.style/mastrer.style";
import { styleForOffCanvasComponent_hide, styleForOffCanvasComponent_show } from "./master.style/showAndHide.style";
import { styleForHeaderOffCanvas } from "./master.style/header.style";

export const masterStyleOffCanvas = {
    styleMasterForOffCanvasComponent,
    styleForOffCanvasComponent_hide,
    styleForOffCanvasComponent_show,
    styleForHeaderOffCanvas
};