
import { allVariantForForm } from "../style";
import { TypeForFormServices, TypeStyleForForm } from "../types";

const servicesChangeVariantForFrom = {
    changerVariantForForm
}
export default servicesChangeVariantForFrom;


function changerVariantForForm({ variant_form }: TypeForFormServices): TypeStyleForForm {

    /* funkcia meniaca variantu */
    if (variant_form === "dark") {
        return allVariantForForm.darkStyleForForm
    } else if (variant_form === "funny") {
        return allVariantForForm.funnyStyleForForm
    } else if (variant_form === "white") {
        return allVariantForForm.whiteStyleForForm
    } else if (variant_form === "default") {
        return allVariantForForm.defaultStyleForForm
    } else if (variant_form === undefined) {
        return allVariantForForm.defaultStyleForForm
    } else {
        return allVariantForForm.defaultStyleForForm
    };
};