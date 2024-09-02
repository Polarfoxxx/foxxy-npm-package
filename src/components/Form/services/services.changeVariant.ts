import { Type_for_formChange_variant } from "../types";

const servicesChangeVariantForFrom = {
    changerVariantForForm
}
export default servicesChangeVariantForFrom;


function changerVariantForForm({
    variant_form,
    border,
    lg,
    sm
}: Type_for_formChange_variant): string {

    /* funkcia meniaca variantu */
    let variant_Style_className: string = "";
    //? Podmienka pre veľkosť (lg alebo sm)
    if (lg) {
        variant_Style_className = `${variant_form} lg`;
    } else if (sm) {
        variant_Style_className = `${variant_form} sm`;
    } else {
        variant_Style_className = `${variant_form} medium`;
    };

    if (border) {
        return `${variant_Style_className} border`
    } else
        return variant_Style_className
};