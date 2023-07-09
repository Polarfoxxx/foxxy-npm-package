
import { CSSProperties } from "react";
import { TypeForChangeVariantforModal } from "../types";
import { allvariantsForModal } from "../style";

const servicesChangeVariantForModal = {
    changeVariantForModal
};
export default servicesChangeVariantForModal;


function changeVariantForModal({ variant }: TypeForChangeVariantforModal): CSSProperties {

    //#region block
    if (variant === "white") {
        return allvariantsForModal.whiteStyleForModal
    } else if (variant === "dark") {
        return allvariantsForModal.darkStyleForModal
    } else if (variant === "default") {
        return allvariantsForModal.defaultStyleForModal
    } else if (variant === undefined) {
        return allvariantsForModal.defaultStyleForModal
    } else {
        return allvariantsForModal.defaultStyleForModal
    }
    //#endregion
};