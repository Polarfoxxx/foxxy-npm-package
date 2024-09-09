import { Type_for_DropdownChangeVariant_services } from "../types";

const servicesChangeVariantDropDwn = {
    changeVariantDropDwn
};
export default servicesChangeVariantDropDwn;


function changeVariantDropDwn({
    variant_dropdown,
    lg_dropdown,
    sm_dropdown,
    border_dropdown
}: Type_for_DropdownChangeVariant_services): string {

    let variant_Style_className: string = "";
    //? Podmienka pre veľkosť (lg alebo sm)
    if (lg_dropdown) {
        variant_Style_className = `${variant_dropdown} lg`;
    } else if (sm_dropdown) {
        variant_Style_className = `${variant_dropdown} sm`;
    } else {
        variant_Style_className = `${variant_dropdown} medium`;
    };

    if (border_dropdown) {
        return `${variant_Style_className} border`
    } else
        return variant_Style_className
};
