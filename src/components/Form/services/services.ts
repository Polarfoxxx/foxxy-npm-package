
import { defaultStyleForForm } from "../style/variant.style/default.style";
import { whiteStyleForForm } from "../style/variant.style/white.style";
import { darkStyleForForm } from "../style/variant.style/dark.style";
import { funnyStyleForForm } from "../style/variant.style/funny.style";
import { TypeForFormServices } from "../types";
import { TypeStyleForForm } from "../types";

const servicesChangeStyleForFrom = {
    changerStyleForForm
}
export default servicesChangeStyleForFrom;



function changerStyleForForm({ variant }: TypeForFormServices): TypeStyleForForm {
    let formVariantStyle: TypeStyleForForm = { ...defaultStyleForForm };

    /* funkcia meniaca variantu */
    (() => {
        if (variant) {
            if (variant === "dark") {
                formVariantStyle = darkStyleForForm
                console.log(darkStyleForForm);
                
            } else if (variant === "funny") {
                formVariantStyle = funnyStyleForForm
            } else if (variant === "white") {
                formVariantStyle = whiteStyleForForm
            } else {
                formVariantStyle = defaultStyleForForm
            }
        }
    })();

    return (
        formVariantStyle
    )
}