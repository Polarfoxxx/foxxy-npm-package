import { whiteStyleFormModal } from "./style/white.style";
import { oceanStyleFormModal } from "./style/ocean.style";
import { defaultStyleFormModal } from "./style/default.style";
const servicesChangeVariantFromModal = {
    changeVariantfromModal
};
export default servicesChangeVariantFromModal;
function changeVariantfromModal({ variant }) {
    let variantStyle = defaultStyleFormModal;
    //#region test
    if (variant === "white") {
        variantStyle = whiteStyleFormModal;
    }
    else if (variant === "ocean") {
        variantStyle = oceanStyleFormModal;
    }
    else {
        defaultStyleFormModal;
    }
    //#endregion
    return (variantStyle);
}
;
