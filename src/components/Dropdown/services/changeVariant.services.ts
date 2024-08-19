import { Type_for_DropdownChangeVariant_services } from "../types";

const servicesChangeVariantDropDwn = {
    changeVariantDropDwn
};
export default servicesChangeVariantDropDwn;


function changeVariantDropDwn({
    variant_dropdown,
    lg,
    sm
}: Type_for_DropdownChangeVariant_services): string {

    let variant_Style_className: string = "";
    //? Podmienka pre veľkosť (lg alebo sm)
    if (lg) {
        variant_Style_className = `${variant_dropdown} lg`;
    } else if (sm) {
        variant_Style_className = `${variant_dropdown} sm`;
    } else {
        variant_Style_className = `${variant_dropdown} medium`;
    };
    
    return variant_Style_className
};
