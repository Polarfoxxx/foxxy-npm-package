import { whiteStyleForModal } from "./style/white.style";
import { oceanStyleForModal } from "./style/ocean.style";
import { defaultStyleForModal } from "./style/default.style";
const servicesChangeVariantForModal = {
    changeVariantForModal
};
export default servicesChangeVariantForModal;
function changeVariantForModal({ variant }) {
    let variantStyle = defaultStyleForModal;
    //#region block
    if (variant === "white") {
        variantStyle = whiteStyleForModal;
    }
    else if (variant === "ocean") {
        variantStyle = oceanStyleForModal;
    }
    else {
        defaultStyleForModal;
    }
    //#endregion
    return (variantStyle);
}
;
