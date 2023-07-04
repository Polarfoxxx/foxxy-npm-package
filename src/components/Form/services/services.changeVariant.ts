
import { allVariantForForm } from "../style";
import { TypeForFormServices, TypeStyleForForm } from "../types";

const servicesChangeVariantForFrom = {
    changerVariantForForm
}
export default servicesChangeVariantForFrom;



function changerVariantForForm({ variant }: TypeForFormServices): TypeStyleForForm {
    let formVariantStyle: TypeStyleForForm = { ...allVariantForForm.defaultStyleForForm };

    /* funkcia meniaca variantu */
    (() => {
        if (variant) {
            if (variant === "dark") {
                formVariantStyle = allVariantForForm.darkStyleForForm
                console.log(allVariantForForm.darkStyleForForm);

            } else if (variant === "funny") {
                formVariantStyle = allVariantForForm.funnyStyleForForm
            } else if (variant === "white") {
                formVariantStyle = allVariantForForm.whiteStyleForForm
            } else {
                formVariantStyle = allVariantForForm.defaultStyleForForm
            }
        }
    })();

    return (
        formVariantStyle
    )
}