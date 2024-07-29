import { TypeFor_services_Style_buttonMaster } from "../../types";

const servicesChangeVariantForButtons = {
    changeVariantForMasterButton
};
export default servicesChangeVariantForButtons;

function changeVariantForMasterButton({
    variant_btn,
    withBorder,
    radiusBorder,
    lg,
    sm }: TypeFor_services_Style_buttonMaster): string {

    let variant_Style_className: string = "";
    //? Podmienka pre veľkosť (lg alebo sm)
    if (lg) {
        variant_Style_className = `${variant_btn} lg`;
    } else if (sm) {
        variant_Style_className = `${variant_btn} sm`;
    } else {
        variant_Style_className = `${variant_btn} medium`;
    };
    //? Podmienka pre border
    if (withBorder) {
        variant_Style_className = `${variant_Style_className} border`;
    }
    //? Podmienka pre zaoblený border
    if (radiusBorder) {
        variant_Style_className = `${variant_Style_className} round`;
    };
    return variant_Style_className;
};