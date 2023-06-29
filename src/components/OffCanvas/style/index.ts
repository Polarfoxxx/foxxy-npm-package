/* export varant style */
import { defaultVariantForOffCanvas } from "./variant.style/defaultVarient.style";
import { darkVariantForOffCanvas } from "./variant.style/darkVariant.style";
import { whiteVariantForOffCanvas } from "./variant.style/whiteVariant.style";

export const allVariantOffCanvas = {
    defaultVariantForOffCanvas,
    darkVariantForOffCanvas,
    whiteVariantForOffCanvas
};


/* export position and master style */
import { showAndHide_Left } from "./master.style/position_Left/showAndHide.left.style";
import { showAndHide_top } from "./master.style/position_top/showAndHide.top.style";
import { showAndHide_right } from "./master.style/position_right/showAndHide.right.style";

export const master_ShowStyleOffCanvas = {
    showAndHide_Left,
    showAndHide_top,
    showAndHide_right,
};

/* export components style */
 import { styleForButtonBoxOffCanvas } from "./master.style/buttonBox.style";
 import { styleForHeaderOffCanvas } from "./master.style/header.style";
 import { styleForBodyOffCanvas } from "./master.style/body.style";

 export const inside_componentStyleOffCanvas  = {
    styleForButtonBoxOffCanvas,
    styleForHeaderOffCanvas,
    styleForBodyOffCanvas
 };