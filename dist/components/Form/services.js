import { defaultStyleFromForm } from "./style/default.style";
import { darkStyleFromForm } from "./style/dark.style";
import { funnyStyleFromForm } from "./style/funny.style";
const servicesChangeStyleFromFrom = {
    changerStyleFromForm
};
export default servicesChangeStyleFromFrom;
function changerStyleFromForm({ variant }) {
    let formVariantStyle = Object.assign({}, defaultStyleFromForm);
    /* funkcia meniaca variantu */
    (() => {
        if (variant) {
            if (variant === "dark") {
                formVariantStyle = darkStyleFromForm;
            }
            else if (variant === "funny") {
                formVariantStyle = funnyStyleFromForm;
            }
            else {
                formVariantStyle = defaultStyleFromForm;
            }
        }
    })();
    return (formVariantStyle);
}
