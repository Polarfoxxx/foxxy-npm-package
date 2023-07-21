
import { CSSProperties } from "react";
import { TypeForChangeVariantforModal } from "../types";
import { allvariantsForModal } from "../style";

const servicesChangeVariantForModal = {
    changeVariantForModal
};
export default servicesChangeVariantForModal;


function changeVariantForModal({ variant_mdl }: TypeForChangeVariantforModal): CSSProperties {

    //#region block
    if (variant_mdl === "white") {
        return allvariantsForModal.whiteStyleForModal
    } else if (variant_mdl === "dark") {
        return allvariantsForModal.darkStyleForModal
    } else if (variant_mdl === "default") {
        return allvariantsForModal.defaultStyleForModal
    } else if (variant_mdl === undefined) {
        return allvariantsForModal.defaultStyleForModal
    } else {
        return allvariantsForModal.defaultStyleForModal
    }
    //#endregion
};