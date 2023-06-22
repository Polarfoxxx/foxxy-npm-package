
import { defaultStyleForForm } from "./style/default.style";
import { whiteStyleForForm } from "./style/white.style";
import { darkStyleForForm } from "./style/dark.style";
import { funnyStyleForForm } from "./style/funny.style";
import { TypeForFormServices } from "./types";
import { TypeStyleForForm } from "./types";

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