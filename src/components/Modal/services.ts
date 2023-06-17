
import { CSSProperties } from "react";
import { TypeFromChangeVariantfromModal } from "./types";
import { whiteStyleFormModal } from "./style/white.style";
import { oceanStyleFormModal } from "./style/ocean.style";
import { defaultStyleFormModal } from "./style/default.style";

const servicesChangeVariantFromModal = {
    changeVariantfromModal
};
export default servicesChangeVariantFromModal;



function changeVariantfromModal({ variant }: TypeFromChangeVariantfromModal): CSSProperties {
    let variantStyle: CSSProperties = defaultStyleFormModal;

    (() => {
        if (variant === "white") {
            variantStyle = whiteStyleFormModal
        } else if (variant === "ocean") {
            variantStyle = oceanStyleFormModal
        } else { defaultStyleFormModal }
    })();

    return (
        variantStyle
    )
};