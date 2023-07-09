
import { allVariantForForm } from "../style";
import { TypeForFormServices, TypeStyleForForm } from "../types";

const servicesChangeVariantForFrom = {
    changerVariantForForm
}
export default servicesChangeVariantForFrom;


function changerVariantForForm({ variant }: TypeForFormServices): TypeStyleForForm {

    /* funkcia meniaca variantu */
    if (variant === "dark") {
        return allVariantForForm.darkStyleForForm
    } else if (variant === "funny") {
        return allVariantForForm.funnyStyleForForm
    } else if (variant === "white") {
        return allVariantForForm.whiteStyleForForm
    } else if (variant === "default") {
        return allVariantForForm.defaultStyleForForm
    } else if (variant === undefined) {
        return allVariantForForm.defaultStyleForForm
    } else {
        return allVariantForForm.defaultStyleForForm
    };
};